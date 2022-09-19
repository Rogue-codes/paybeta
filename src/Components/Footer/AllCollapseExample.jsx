import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components';

function AllCollapseExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{fontFamily: 'Poppins',color: 'black'}}>Products</Accordion.Header>
        <Accordion.Body>
          <Ul>
            <li>Collect Payments</li>
            <li>Send Money</li>
            <li>Store</li>
            <li>Payment Links</li>
            <li>Invoices</li>
            <li>Capital</li>
            <li>Grow</li>
            <li>Card Issuing</li>
            <li>FaaS</li>
          </Ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header style={{fontFamily: 'Poppins',color: 'black'}}>Resources</Accordion.Header>
        <Accordion.Body>
          <Ul>
            <li>Pricing</li>
            <li>Support</li>
            <li>Blog</li>
            <li>Integrations</li>
            <li>Why you got charged</li>
          </Ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header style={{fontFamily: 'Poppins',color: 'black'}}>Developers</Accordion.Header>
        <Accordion.Body>
          <Ul>
            <li>API Documentation</li>
            <li>API Reference</li>
            <li>API Status</li>
        </Ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header style={{fontFamily: 'Poppins',color: 'black'}}>PayBeta</Accordion.Header>
        <Accordion.Body>
        <Ul>
          <li>Customers</li>
          <li>Careers</li>
          <li>Press kit</li>
          <li>Covid 19</li>
          <li>Barter</li>
          <li>Disha</li>
          <li>Send</li>
        </Ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header style={{fontFamily: 'Poppins',color: 'black'}}>Contact</Accordion.Header>
        <Accordion.Body>
          <Ul>
            <li>hi@flutterwavego.com</li>
            <li>+234 1-8889595</li>
            <li>0700-FLUTTERWAVE</li>
            <li>Twitter Support</li>
          </Ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header style={{fontFamily: 'Poppins',color: 'black'}}>Connect</Accordion.Header>
        <Accordion.Body>
          <Ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>LinkedIn</li>
          </Ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;

const Ul = styled.ul`
  list-style-type: none;
  padding-left: 0;
  li{
    margin-top: 2%;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
  }
`