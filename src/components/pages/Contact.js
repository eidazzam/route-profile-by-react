import React from 'react'
import { Card, Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container>
      <Card className="my-3 p-4 bg-primary text-light">
        <Card.Body >
          <Card.Title>our contacts

          </Card.Title>
          <Card.Text>
            country: Egypt
            <br />
            address: sharqia
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Contact
