import axios from 'axios'
import { Field, Formik ,Form } from 'formik'
import React from 'react'
import { useMutation , useQueryClient} from 'react-query'

const AddCard = () => {

    const handleAdd =async (v) =>{
        const res =await axios.post('https://66e301e5494df9a478e3f4f6.mockapi.io/test/test' , v);
        // console.log(res);
        return res.data

    }

    const queryClient = useQueryClient()

    const {mutate , status } = useMutation(handleAdd , {
        onSuccess:(data)=>{
            queryClient.invalidateQueries('list')

            //extra option

            
            // queryClient.setQueryData('list' , (oldData)=>{
            //     let newData = [...oldData]
            //     newData.push(data)

            //     console.log(oldData);
            //     return newData
                
            // })
        },


        // onMutate :async (data)=>{
        //     await queryClient.cancelQueries('list')
        //     const lastData = queryClient.getQueriesData('list')

        //     queryClient.setQueriesData('list' , (oldQueryData)=>{
        //         let newarr = [...oldQueryData]
        //         newarr.push(data)
        //         return newarr
        //     }
            
        //     )
        //     return lastData

        // },


        // onSettled:(data)=>{
        //     queryClient.invalidateQueries('list')

        // },

        // onError : (error , hero , context)=>{
        //     queryClient.setQueriesData('list', context[0][1])
        // },

    })

   

    

    const handleMutate = (values)=>{
        mutate(values)
    }

  return (
    <div className='px-8 mt-4'>

        <div  className='bg-[#F0F0F0] px-8'>
            <div className='flex gap-4'>
                <h2 className='font-bold text-2xl  text-center'>   CreateCourse     </h2>
                <p className='mt-1 text-green-700'>(This project has an educational aspect and the placement of this part on this page is to see the immediate output.)</p>
            </div>
            <Formik
            
                initialValues={{ courseOrBlogName: "" , describe:''  , cost:'' ,  tech:'' }}
                onSubmit={handleMutate}
                >
                {({ values, handleChange, handleSubmit , handleBlur }) => {
                    return (
                    <form onSubmit={handleSubmit}>
                        <div className='flex  justify-around gap-6 mt-6'>
                            <div className='w-1/3'>
                                <input type="text" name='courseOrBlogName' value={values.courseOrBlogName} onChange={handleChange} placeholder="courseName" className="input input-bordered w-full" />
                            </div>

                            <div className='w-1/3'>
                                <input type="text" name='cost' value={values.cost} onChange={handleChange} placeholder="cost" className="input input-bordered w-full " />
                            </div>

                            <div className='w-1/3'>
                                <textarea name='describe' value={values.describe} onChange={handleChange} className="textarea textarea-bordered w-full" placeholder="describe"></textarea>
                            </div>

                            <div className='w-1/3'>
                                <select name='tech' value={values.tech} onChange={handleChange} onBlur={handleBlur}  className="select select-bordered w-full max-w-xs">
                                <option  selected>technology?</option>
                                <option value='frontEnd'>frontEnd</option>
                                <option value='backEnd'>backEnd</option>
                                <option value='ai'>ai</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary mx-auto ">
                                create
                            </button>

                        </div>



                    </form>
                    );
                }}
            </Formik>
        </div>

    </div>
  )
}

export default AddCard