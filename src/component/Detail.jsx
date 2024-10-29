import React from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Field, Formik ,Form } from 'formik'
import axios from 'axios'
import detailPic from '../assets/images/detailPic.webp'
import EditDetail from './EditDetail'


const Detail = () => {
    const {id} = useParams()

    const getDetail = async ()=>{
      const result = await axios.get(`https://66e301e5494df9a478e3f4f6.mockapi.io/test/test/${id}`)
      return result.data
  }

  const {data , status , isFetching} = useQuery('detail' , getDetail)



    




    // const handleAdd =async (v) =>{
    //     const res =await axios.put(`https://662652ab052332d553227616.mockapi.io/test/test/${id}` , v);
    //     // console.log(res);
    //     return res.data

    // }

    // const queryClient = useQueryClient()

    // const {mutate , status } = useMutation(handleAdd , {
    //     onSuccess:(data)=>{
    //         queryClient.invalidateQueries('list2')
    //         // queryClient.setQueryData('list2' , (oldData)=>{
    //         //     let newData = [...oldData]
    //         //     newData.push(data)

    //         //     console.log(oldData);
    //         //     return newData
                
    //         // })
    //     },

    //     // onMutate :async (data)=>{
    //     //     await queryClient.cancelQueries('list2')
    //     //     const lastData = queryClient.getQueriesData('list2')
    //     //     // console.log(previosHeroData[0][1])

    //     //     queryClient.setQueriesData('list2' , (oldQueryData)=>{
    //     //         // return [...previosHeroData , NewHero]
    //     //         let newarr = [...oldQueryData]
    //     //         newarr.push(data)
    //     //         return newarr
    //     //     }
            
    //     //     )
    //     //     return lastData

    //     // },


    //     // onSettled:(data)=>{
    //     //     queryClient.invalidateQueries('list2')
    //     //     // queryClient.setQueryData('list2' , (oldData)=>{
    //     //     //     let newData = [...oldData]
    //     //     //     newData.push(data)

    //     //     //     console.log(oldData);
    //     //     //     return newData
                
    //     //     // })


    //     // },

    //     // onError : (error , hero , context)=>{
    //     //     // queryClient.setQueriesData('list2', context[0][1])
    //     //     // queryClient.setQueriesData('list2', [{id:1 ,fname:'ali' , lname:'hasani'}] )
    //     //     // console.log(context[0][1]);
    //     // },

    // })





  return (
    <div>
        <div className='w-[80%] flex bg-[#F0F0F0]  mx-auto mt-0'>
             <div className='w-1/2 flex flex-col gap-6 mt-10 px-6'>

                <div className='flex gap-5'>
                  <h2 className='bg-[aqua] p-3 rounded-xl'>course name :</h2>
                  <h4 className='p-3'> {data && data.courseOrBlogName}</h4>
                </div>

                <div className='flex gap-5 '>
                  <h2 className='bg-[aqua] p-3 rounded-xl'>describe :</h2>
                  <h4 className='p-3'> {data && data.describe}</h4>
                </div>

                <div className='flex gap-5'>
                  <h2 className='bg-[aqua] p-3 rounded-xl'>tech :</h2>
                  <h4 className='p-3'>  {data && data.tech}</h4>
                </div>        

                <div className='flex gap-5'>
                  <h2 className='bg-[aqua] p-3 rounded-xl'>cost :</h2>
                  <h4 className='p-3'> {data && data.cost}</h4>
                </div>            

                {data && <EditDetail data={data} id={id}/>}
             </div>
             <div className='w-1/2'>
                <img src={detailPic} className='' alt="" />
             </div>
        </div>

        
    </div>
  )
}

export default Detail