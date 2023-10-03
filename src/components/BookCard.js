import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap"
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const BookCard = ({value, handleDelete}) => {

const navigate = useNavigate()

const updateUser = ({name, poster,summary,rating,id})=>{
    localStorage.setItem('id',id)
    localStorage.setItem('name',name)
    localStorage.setItem('poster',poster)
    localStorage.setItem('rating',rating)
    localStorage.setItem('summary',summary)
    
    navigate(`/books/update/${value.id}`)
}

  return (
    <div className='main-card'>
        <Card
  style={{
    width: '25rem',
    borderRadius:"1rem",
    height:"40rem",
  }}
>
  <CardBody className='card-body'>
    <div className='card-style'>
    <CardTitle tag="h3">
      {value.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     rating ⭐{value.rating}
    </CardSubtitle>
    </div>
  </CardBody>
  <img
    alt={value.name}
    src={value.poster}
    width="100%"
    className='poster-img'
  />
  <CardBody>
    <CardText>
       {value.summary}
    </CardText>
    <div className='button'>
    <Button color='danger'>
        <AiFillDelete onClick={()=> handleDelete(value.id)}/>
    </Button>
    <Button color='success'>
        <AiFillEdit onClick={()=>updateUser(value)}/>
    </Button>
    </div>
    </CardBody>
</Card>
    </div>
  )
}

export default BookCard

