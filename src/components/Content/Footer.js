import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'

const Footer = () => {
  return (
    <MDBFooter
      color="White"
      style={{ backgroundColor: '#ddd' }}
      className="font-small pt-4"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol>
            <p className="text-black">01112045293</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center text-black py-3">
        <MDBContainer fluid>
          &copy; Copyright: {'iti@org'}
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
