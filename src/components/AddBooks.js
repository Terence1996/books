import React, {useState } from 'react'
import {Label, Form, Input, FormGroup, Button, Col} from 'reactstrap'
import axios from "axios"
import { UPI_key } from './UPI_key'
import { useNavigate } from 'react-router-dom'

const AddBooks = () => {

    const [name,setName] = useState('');
    const [poster,setPoster] = useState('');
    const [rating,setRating] = useState('');
    const [summary,setSummary] = useState('');

    const navigate= useNavigate();

  const handleSubmit = async () =>{
await axios.post(UPI_key,{
    name,
    poster,
    rating,
    summary
})
navigate('/')
  }  


  return (
    <div>
    <h1>AddBooks</h1>
    <br/>
<Button 
className='back-btn'
color='white'
onClick={()=>navigate("/")}>🔙 <h4>Previous Page</h4></Button>
 <br/>
 <br/>
 <br/>
    <Form>
  <FormGroup row>
    <Label for="name" sm={2}>
      Name of the book
    </Label>
    <Col sm={10}>
    <Input
      id="name"
      name="name"
      placeholder="Enter the bookname"
      type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}
    />
    </Col>
  </FormGroup>

  <FormGroup row>
    <Label for="poster" sm={2}>
      Poster
    </Label>
    <Col sm={10}>
    <Input
      id="poster"
      name="poster"
      placeholder="Enter Poster"
      type="text"
      value={poster}
      onChange={(e)=>setPoster(e.target.value)}
    />
    </Col>
  </FormGroup>
  
  <FormGroup row>
    <Label for="poster" sm={2}>
      Rating
    </Label>
    <Col sm={10}>
    <Input
      id="rating"
      name="rating"
      placeholder="Enter Rating"
      type="number"
      max="10"
      min="1"
      value={rating}
      onChange={(e)=>setRating(e.target.value)}
    />
    </Col>
  </FormGroup>
  
  <FormGroup row>
    <Label for="poster" sm={2}>
      Summary
    </Label>
    <Col sm={10}>
    <Input
      id="summary"
      name="summary"
      placeholder="Enter Summary"
      type="text"
      value={summary}
      onChange={(e)=>setSummary(e.target.value)}
    />
    </Col>
  </FormGroup>
 <br/>
 <Button 
 color='primary'
 onClick={handleSubmit}
 >
    Add Book
  </Button>
</Form>


    </div>
  )
}

export default AddBooks