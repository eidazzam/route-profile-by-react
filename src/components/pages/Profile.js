import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUserByID } from '../Content/Users'
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap'

const Profile = () => {
  const { id } = useParams()
  const [user, setUser] = useState([])

  useEffect(() => {
    fetchUserByID(id)
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => {
        setUser(null)
      })
  }, [id])

  return (
    <>
      {user ? (
        <Container>
          {' '}
          <Card style={{ width: '18rem', margin: 'auto' }}>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/400px-Cristiano_Ronaldo_2018.jpg"
            />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>Information of user</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{user.email}</ListGroupItem>
              <ListGroupItem>{user.phone}</ListGroupItem>
            </ListGroup>
          </Card>{' '}
        </Container>
      ) : (
        <p className="p-3 bg-alert">Error while fetching data</p>
      )}
      ;
    </>
  )
}

export default Profile
