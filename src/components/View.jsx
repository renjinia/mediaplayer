import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, saveVideoAPI, updateCategoryAPI } from '../services/allAPI'


const View = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {

  const [deleteVideoResponseFromVideoCard,setDeleteVideoResponseFromVideoCard]=useState("")

  const [allVideos,setAllVideos]=useState([])

  useEffect(()=>{
    getAllVideo()
  },[addResponseFromHome,deleteResponseFromCategory,deleteVideoResponseFromVideoCard])

  console.log(allVideos);
  

  const getAllVideo=async()=>{
    try{
      const result =await getAllVideosAPI()
      console.log(result);
      if(result.status>=200 && result.status<300){
        setAllVideos(result.data)
      }else{
        console.log("API call failed");
        
      }
    }catch(err){
      console.log(err);
      
    }
  }

  const dragOverView=(e)=>{
    e.preventDefault()
  }

  const categoryVideoDragOverView=async(e)=>{
    console.log("inside categoryVideoDragOverView");
    const {video,categoryDetails}= JSON.parse(e.dataTransfer.getData("dragData"))
    console.log(video,categoryDetails);
    const updatedCategoryVideoList= categoryDetails?.allVideos?.filter(item=>item.id!=video?.id)
    const updateCategory={...categoryDetails,allVideos:updatedCategoryVideoList}
    console.log(updateCategory);
    
    // updating the category by delete video from category
    const result=await updateCategoryAPI(updateCategory)

    // use state lifting to communicate data from view to category
    setDeleteResponseFromView(result)

    // use api to upload video
    await saveVideoAPI(video)
    // call getAllVideo function
    getAllVideo()
  }
  return (
    <>
    <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDragOverView(e)}>
      {
        allVideos?.length>0?
        allVideos.map(video=>(
          <Col key={video?.id} className='mb-3' sm={12} md={6} lg={4}>
          <VideoCard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard} displayData={video}/>
          </Col>
       ))
      :
      <div className='fw-bolder text-danger fs-5'>No video uploades</div>
      
      }
    </Row>
    </>
  )
}

export default View