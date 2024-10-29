import axios from 'axios'
import React, { useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import AddCard from './AddCard'
import CourseCard from './CourseCard'

const List = () => {
    const queryClient = useQueryClient()


    const getList = async ()=>{
        const result = await axios.get('https://66e301e5494df9a478e3f4f6.mockapi.io/test/test')
        return result.data
    }

    const {data , status , isFetching} = useQuery('list' , getList)





  return (
    <div>

            <AddCard/>
            {status === 'loading' && <h1 className='mt-10 text-center font-extrabold text-2xl'>loading</h1>}

            {status === 'success' && <h1 className='mt-10 text-center font-extrabold text-2xl'>Courses list</h1>}


            <div  className='flex flex-wrap justify-between gap-5 w-[90%] mx-auto'>

                {data && data.map((item , index)=>{
                    return(
                        <CourseCard item={item}/>
                    )
                })}
            </div>

    </div>
  )
}

export default List