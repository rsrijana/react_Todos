// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function CustomModel(props) {
  // const [show, setShow] = useState(false);
  const {show, setShow, user, setUser, handleSubmit, handleUpdate, isEdit} = props
  const handleClose = () => setShow(false);


  return (
    <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Label>name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" 
              onChange={(e)=>setUser({...user, name: e.target.value})} 
              value= {user.name}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="enter location" 
            onChange={(e)=> setUser({...user, location: e.target.value})} 
            value= {user.location}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="enter your email" 
            onChange={(e)=>setUser({...user, email: e.target.value})}
            value= {user.email}/>
            <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={isEdit? ()=>handleUpdate(user.id): ()=> handleSubmit()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModel;