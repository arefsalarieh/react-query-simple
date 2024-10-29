import axios from 'axios';
import React from 'react'
import { useQuery , useMutation, useQueryClient } from 'react-query'


const DeleteCourse = ({id}) => {
  const queryClient = useQueryClient()


  const handleDel =async (id ) =>{
    const res =await axios.delete(`https://66e301e5494df9a478e3f4f6.mockapi.io/test/test/${id}`);
    return res.data

}

const {mutate} = useMutation(handleDel,{
  onSuccess: () => {
    queryClient.invalidateQueries('list');

  }
})


const handleMutate = (id) =>{
  mutate(id)
}


  return (
    <button onClick={()=>handleMutate(id)}  className=' block bg-[red] border-zgh border rounded-xl mx-auto xl:mr-18  py-1 px-4'> 
        delete
    </button>

  )
}

export default DeleteCourse