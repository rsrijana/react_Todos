import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './App.css';
import { Container } from 'react-bootstrap';
import CustomModel from './Components/CustomModel';


function App() {
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({
    id:'', name:'', location:'', email:''
  })

  const handleClear = ()=>{
    setUser({
      id:'', name:'', location:'', email:''
      });
      setShow(false);
  }
  const[users, setUsers] = useState(JSON.parse(localStorage.getItem('info'))|| []);
  
  const handleSubmit =()=>{
    const initialUsers = users;
    user.id = initialUsers.length +1;
    const addedUsers = [...initialUsers, ...[user]]
    localStorage.setItem('info', JSON.stringify(addedUsers))
    handleClear();
  }

  const handleUpdate = (id)=>{
    const initialUsers = users;
    const indexToUpdate = initialUsers.findIndex((item)=> item.id ===id);
    initialUsers[indexToUpdate] = user;
    setUsers(initialUsers);
    localStorage.setItem('info', JSON.stringify(initialUsers));
    handleClear();
  };

  const handleDelete =(id)=>{   
    const initialUsers = users;
    const filterUsers = initialUsers.filter((item, index)=> item.id !==id);
    setUsers (filterUsers);
    localStorage.setItem('info', JSON.stringify(initialUsers));
    handleClear();
  };

  return (
  <Container>
      <div>
        <h1>React CRUD app</h1>
        <Button variant="primary" className='btn_primary' onClick={()=>setShow(true)}>Create</Button>{' '}
        <p></p>
      <Table striped bordered hover>
        <thead> 
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Location</th>
            <th>@email address</th>
            <th>Actions</th>
          </tr>

        </thead>
        <tbody>
        
          {
            
            users.map((item, index) => <>
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.email}</td>
                <td>
                  <div className='btn-group'>
                    <Button variant="warning" className='btn_warning'
                    onClick={()=>
                    {
                      setShow(true);
                      setUser(item);
                      setIsEdit(true);
                    }}
                    >Edit</Button>{' '}
                    <Button variant="danger" className='btn_danger'
                    onClick={()=>{
                      handleDelete(item.id);
                    }}
                    >Delete</Button>{' '}
                  </div>
                </td>
            </tr>
            </>
            )
           }
        </tbody>
      </Table>
    </div>
    <CustomModel 
    show={show} 
    setShow={setShow} 
    user ={user} 
    setUser ={setUser} 
    handleSubmit={handleSubmit}
    handleUpdate={handleUpdate}
    
    isEdit={isEdit} />
  </Container>
  );
}

export default App;
