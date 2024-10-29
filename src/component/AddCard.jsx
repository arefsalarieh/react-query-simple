import axios from 'axios'
import { Field, Formik ,Form } from 'formik'
import React from 'react'
import { useMutation , useQueryClient} from 'react-query'

const AddCard = () => {

    const handleAdd =async (v) =>{
        const res =await axios.post('https://662652ab052332d553227616.mockapi.io/test/test' , v);
        // console.log(res);
        return res.data

    }

    const queryClient = useQueryClient()

    const {mutate , status } = useMutation(handleAdd , {
        onSuccess:(data)=>{
            queryClient.invalidateQueries('list')
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
    <div>
        <Formik initialValues={{fname:'' , lname:''}} onSubmit={handleMutate}>
            <Form>
                <Field type='text' name='fname' placeholder='fname'/>
                <Field type='text' name='lname' placeholder='lname'/>
                <button type='submit'>Add</button>
            </Form>
        </Formik>
    </div>
  )
}

export default AddCard