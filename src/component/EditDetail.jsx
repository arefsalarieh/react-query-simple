import React from 'react'
import { Formik } from 'formik';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const EditDetail = ({data , id}) => {

    const handleUpdate =async ( value) => {
        const res =await axios.put(`https://66e301e5494df9a478e3f4f6.mockapi.io/test/test/${id}` , value);
        // console.log(res);
        return res.data
    }; 



    const queryClient = useQueryClient()

    const {mutate , status } = useMutation(handleUpdate , {
        onSuccess:(data)=>{
            queryClient.invalidateQueries('detail')

        },


        

    })

   

    

    const handleMutate = (values)=>{
        mutate(values)
    }
    
    
    




  return (
    <div className=' mt-4'>

        <div  className='bg-[#F0F0F0] '>
            <div className='flex gap-4'>
                <h2 className='font-bold text-2xl  text-center'>   editCourse     </h2>
                <p className='mt-1 text-green-700'>(This project has an educational aspect and the placement of this part on this page is to see the immediate output.)</p>

            </div>
            <Formik
                enableReinitialize
                initialValues={{ courseOrBlogName: data.courseOrBlogName , describe:data.describe  , cost:data.cost ,  tech:data.tech }}
                onSubmit={handleMutate}
                >
                {({ values, handleChange, handleSubmit , handleBlur }) => {
                    return (
                    <form onSubmit={handleSubmit}>
                        <div className='flex  justify-around gap-6 mt-6'>
                            <div className='w-1/2'>
                                <input type="text" name='courseOrBlogName' value={values.courseOrBlogName} onChange={handleChange} placeholder="courseName" className="input input-bordered w-full" />
                            </div>

                            <div className='w-1/2'>
                                <input type="text" name='cost' value={values.cost} onChange={handleChange} placeholder="cost" className="input input-bordered w-full " />
                            </div>
                        </div>

                        <div className='flex  justify-around gap-6 mt-6'>


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

                            <button type="submit" className="btn btn-blue bg-blue-600 px-4 rounded-full mx-auto ">
                                edit
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

export default EditDetail