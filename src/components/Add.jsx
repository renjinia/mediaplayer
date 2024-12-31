// import {  FButton, FloatingLabel, Form, Modal, } from 'bootstrap';
import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import { saveVideoAPI } from '../services/allAPI';




const Add = ({setAddResponseFromHome}) => {
  const [invalidYoutubeLink,setInvalidYoutubeLink]=useState(false)
  const [videoDetails,setvideoDetails]=useState({
    caption:"",imgUrl:"",youtubeLink:""
  })
  console.log(videoDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractEmbedLinkFromYoutubeLink=(userInputYoutubeLink)=>{
    // steps to create embed code from youtube link  (ejrvKU9GqGo)
    if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){
      console.log(userInputYoutubeLink.split("v=")[1].slice(0,11));
      const videoId=userInputYoutubeLink.split("v=")[1].slice(0,11)
      setInvalidYoutubeLink(false)
      setvideoDetails({...videoDetails,youtubeLink:`https://www.youtube.com/embed/${videoId}`})

    }else{
     setInvalidYoutubeLink(true)
     setvideoDetails({...videoDetails,youtubeLink:""})

    }
  }
  const handleUploadVideo=async ()=>{
    // object destructuring
    const {caption,imgUrl,youtubeLink}=videoDetails
    if(caption && imgUrl && youtubeLink){
      // alert("proceed to storing data")
      try{
        const result =await saveVideoAPI(videoDetails)
        console.log(result);
        if(result.status>=200 && result.status<300){
          alert("Video uploaded successfully")
          handleClose()
          // pass the  result to view component
          setAddResponseFromHome(result)

        }else{
          console.log(result);
        }
      }catch(err){
        console.log(err);
      }
    }else{
      alert("please fill the form")
    }
  }

  return (
  <>
    <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
    </div>
  {/* modal */}
  <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
  <Modal.Header closeButton>
    <Modal.Title>Uploading video details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
   <div className='border rounded p-3'>
   <FloatingLabel controlId="floatingCaption" label="Video Caption">
        <Form.Control onChange={e=>setvideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
  </FloatingLabel>
  <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video Image URL">
        <Form.Control onChange={e=>setvideoDetails({...videoDetails,imgUrl:e.target.value})} type="text" placeholder="Video Image URL" />
  </FloatingLabel>
  <FloatingLabel className='mt-2' controlId="floatingLink" label="Video Youtube Link">
        <Form.Control onChange={e=>extractEmbedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video Youtube Link" />
  </FloatingLabel>
  {
    invalidYoutubeLink &&
    <div className='text-danger fw-bolder'>invalid youtube link</div>
  }
   </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button onClick={handleUploadVideo} variant="primary">Add</Button>
  </Modal.Footer>
</Modal>
</>
  )
}

export default Add