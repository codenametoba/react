import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {Component} from 'react';

class Info extends Component {
  render () {
    return ( <Form className='watch'>
        <Form.Group className="all" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder=" Enter Name" />
      </Form.Group>
          <Form.Group className="all" controlId="formBasicEmail">
            <Form.Label >Email address</Form.Label>
            <Form.Control type="email" className='two' placeholder="Enter email" />
            <Form.Text className="text-muted">
              
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="all" controlId="formBasicPassword">
            <Form.Label >Password</Form.Label>
            <Form.Control className='one' type="password" placeholder=" Enter Password" />
          </Form.Group>
          <Form.Group className="all" controlId="formBasicPassword" >
            <Form.Label className='four'>Address</Form.Label>
            <Form.Control type="text" placeholder=" Enter Address" />
          </Form.Group>
          <Form.Group className="all" controlId="formBasicCheckbox">
           
          </Form.Group>
          <Form.Group className="all" controlId="formBasicPassword">
            <Form.Label className='five'>PhoneNumber</Form.Label>
            <Form.Control type="number" placeholder=" Enter Phonenumber" />
          </Form.Group>
          <Button variant="primary" type="submit" className='six'>
            Submit
          </Button>
        </Form>
      
      )}
   }
    
    
    export default Info;

    

