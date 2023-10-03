import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UPI_key } from './UPI_key';
import BookCard from './BookCard';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const DisplayAllBooks = () => {

const [bookData, setBookData] = useState([]);



const getBooks = () =>{
    axios.get(UPI_key)
    .then((res)=>{
        if(res.status === 401){
            console.log ("Data not found")
        }else{
            console.log(res.data);
            setBookData(res.data);
        }
    })  
}


useEffect(()=>{
getBooks();
},[])

const handleDelete = (id) =>{
axios.delete(UPI_key +id)
.then((res)=>{
    if (res.status === 200){
        getBooks();
     }
})
}

const navigate = useNavigate()




  return (
    <div>
        <div>
        <h1 className='display'>Display All Books</h1>
        <br/>
        <Button 
        color='primary'
        onClick={()=>navigate("/books/add")}>Add a Book</Button>
        </div>
        <br/>
        <br/>
        {
            bookData.map((item)=> {
                return  <BookCard key={item.id} value={item} handleDelete={handleDelete} />
                
            })
        }
    </div>
  )
}

export default DisplayAllBooks