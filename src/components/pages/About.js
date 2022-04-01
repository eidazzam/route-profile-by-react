import React from 'react'
import { Card, Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container>
      <Card className="my-3 p-4 bg-primary text-light ">
        <Card.Title>About Me</Card.Title>
        <Card.Text className="text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        
        </Card.Text>
      </Card>
    </Container>
  )
}

export default About
