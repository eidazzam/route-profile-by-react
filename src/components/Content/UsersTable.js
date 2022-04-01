import React from 'react';
import UserRecord from '../Content/UserRecord';
import { Table } from 'react-bootstrap';

const UsersTable = (props) => {
  const { users } = props;
  return (
    <Table striped bordered style={{ width:'900px' ,marginLeft:'100px'}} >
      <thead style={{ backgroundColor: 'gray'  ,textAlign: 'center', color:'white' }}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody style={{ backgroundColor: 'gray'  ,textAlign: 'center' }}>
        {users.map(user => <UserRecord key={user.id} id={user.id} name={user.name} phone={user.phone} />)}

      </tbody>
    </Table>)
}

export default UsersTable;