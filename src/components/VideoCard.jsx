import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { saveHistoryAPI, removeVideoAPI } from '../services/allAPI';



const VideoCard = ({ displayData, setDeleteVideoResponseFromVideoCard, insideCategory }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    // display modal
    setShow(true);
    // store history in json
    const { caption, youtubeLink } = displayData
    const sysDateTime = new Date()
    console.log(sysDateTime);
    console.log(sysDateTime.toLocaleString('en-IN', { timeZoneName: 'short' }));
    const timeStamp = sysDateTime.toLocaleString('en-IN', { timeZoneName: 'short' })
    const historyDetails = { caption, youtubeLink, timeStamp }
    try {
      await saveHistoryAPI(historyDetails)

    } catch (err) {
      console.log(err);


    }


  }

  const deleteVideo = async (id) => {
    try {
      const result = await removeVideoAPI(id)
      setDeleteVideoResponseFromVideoCard(result)

    } catch (err) {
      console.log(err);

    }
  }

  const videoCardDragStarted = (e, dragVideoDetails) => {
    console.log("Inside videoCardDragStarted with video:" + dragVideoDetails?.id);
    // share data using event drag start
    e.dataTransfer.setData("videoDetails", JSON.stringify(dragVideoDetails))

  }
  return (
    <>
      <Card draggable={true} onDragStart={e => videoCardDragStarted(e, displayData)} style={{ width: '13rem' }} className='my-3'>
        <Card.Img onClick={handleShow} height={'150px'} variant="top" src={displayData?.imgUrl} />
        <Card.Body>
          <Card.Text className='d-flex justify-content-between'>
            <p>{displayData?.caption}</p>
            {! insideCategory && <button onClick={() => deleteVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
            }
          </Card.Text>
        </Card.Body>
      </Card>

      {/* modal */}
      <Modal size='lg' centered
        show={show}
        onHide={handleClose}

      >
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="395" src={`${displayData?.youtubeLink}?autoplay=1`} title="PART 1 : Malayalam Lofi beats 🌺✨for Sleep | Chill | © Copyright free songs 🌸 ✨" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCard