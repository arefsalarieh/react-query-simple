import axios from 'axios'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import AddCard from './AddCard'

const List = () => {

    const getList = async ()=>{
        const result = await axios.get('https://662652ab052332d553227616.mockapi.io/test/test')
        return result.data
        console.log(result);
    }

    const {data , status , isFetching} = useQuery('list' , getList)

    // useEffect(()=>{
    //     getList()
    // },[])

if(isFetching){
    return <div>fetching...</div>
}

  return (
    
    <div style={{display:'flex' , flexWrap:'wrap'}}>
        {data && data.map((item , index)=>{
            return(
                <div key={index} style={{margin:'30px' , border:'1px solid red' , width:'200px' , textAlign:'center'}}>
                    <h2>{item.fname}</h2>
                    <h2>{item.lname}</h2>
                    <button>delete</button>
                </div>
            )
        })}

        <AddCard/>
        </div>
  )
}

export default List