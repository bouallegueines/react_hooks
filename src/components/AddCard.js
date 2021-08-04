import {Modal , Button , FormControl  } from 'react-bootstrap'
import React , {useState} from 'react'

function AddMovie({getMoviesListData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [film, setNewMovie] = useState({
    title:"",
    src:"",
    year:"",
    description :"",
    rating:0
  })
  const handleChange=(e)=>{
    setNewMovie({...film , [e.target.name]:e.target.value})
  }
  const handleSubmit=()=>{
  getMoviesListData(film)
     handleClose()
  }
  return (
    <>

      <Button variant="success" onClick={handleShow}>
        + New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="ModHead">
          <Modal.Title>Add Your Favourite Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="formControl"> 
        
        <FormControl 
      type="text"
      placeholder="Enter New title..." 
      className="mr-sm-2 searchInput"
      name="title"
      onChange={handleChange}
       />
         <FormControl 
      type="text"
      placeholder="Enter Src..." 
      className="mr-sm-2 searchInput"
      name="src"
      onChange={handleChange}

       />
          <FormControl 
      type="text"
      placeholder="Enter year..." 
      className="mr-sm-2 searchInput"
      name="year"
      onChange={handleChange}

       />

      <FormControl 
      as = "textarea"
      type="text"
      placeholder="Enter Description..." 
      className="mr-sm-2 searchInput"
      name="description"
      onChange={handleChange}

       />
    
      <FormControl 
      type="text"
      placeholder="Enter Rating..." 
      className="mr-sm-2 searchInput"
      name="rating"
      onChange={handleChange}

       />
       </Modal.Body>
        <Modal.Footer className="ModHead">
          <Button variant="success" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick= {handleSubmit} >
            Save New Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default  AddMovie;