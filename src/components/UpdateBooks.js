import React, { useEffect , useState} from 'react'
import {Label, Form, Input, FormGroup, Button, Col} from 'reactstrap'
import axios from "axios"
import { UPI_key } from './UPI_key'
import { useNavigate } from 'react-router-dom'

const UpdateBooks = () => {

    const navigate = useNavigate()

    const [name,setName] = useState('');
    const [poster,setPoster] = useState('');
    const [rating,setRating] = useState('');
    const [summary,setSummary] = useState('');
const [id, setId] = useState('')
    
    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setPoster(localStorage.getItem('poster'))
        setRating(localStorage.getItem('rating'))
        setSummary(localStorage.getItem('summary'))
    },[])

    const update = async ()=>{
     await axios.put(UPI_key + id,{
name,
poster,
rating,
summary
        })
   navigate('/')
    }



  return (
    <div>
       <h1> UpdateBooks</h1>
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
 onClick={update}
 >
    Update
  </Button>
</Form>
        
        </div>
  )
}

export default UpdateBooks