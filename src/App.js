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
  // const users = [{
  //   id: 1, name:'aad'  , location:'yyyy', email: 'aaa@gmail.com'},
  //   {id: 2, name: 'bbbb', location: 'yfkgfjhg', email: 'bbb@gmail.com'},
  //   {id: 3, name: 'cccc', location: 'ghhjhhhh', email: 'cccc@gmail.com'},
  // ]
  const handleSubmit =()=>{
    const initialUsers = users;
    console.log("Initial users: ", initialUsers);
    user.id = initialUsers.length +1;
    console.log("this is new user");
    const addedUsers = [...initialUsers, ...[user]]
    console.log("this is srijana");
    console.log("Added users:", addedUsers);
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
