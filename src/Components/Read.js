import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Table,Button} from "semantic-ui-react"
import { API_URL } from '../Constrants/URL';
import {useNavigate} from "react-router-dom"

function Read() {
     const [apiData,setAPIData]=useState([]);
     const navigate=useNavigate();
//    const updateUser=()=>{
//     navigate('/update')
//    }
     const updateUser=({firstName,lastName,checked,
        id}) => {
        localStorage.setItem('id',id)
        localStorage.setItem('firstName',firstName);
        localStorage.setItem('lastName',lastName);  
        localStorage.setItem('checked',checked); 
         navigate('/update');
     }
     const deleteUser=async(id)=>{
         await axios.delete(API_URL + id)
         callGetAPI();
     }
     const callGetAPI=async()=>{
        const resp=await axios.get(API_URL)
        // console.log(resp.data)
        setAPIData((resp.data));
     }

     useEffect(()=>{
       callGetAPI();
     },[]);


  return (
    <div className='read'>
   <Table singleLine >
     <Table.Header >
        <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
        </Table.Row>
     </Table.Header>
     <Table.Body>
        {
            apiData.map(data=>(
                    <Table.Row key={data.id}>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.lastName}</Table.Cell>
                    <Table.Cell>{data.checked ?
                    "checked":"Not checked"
                    }</Table.Cell>
                    <Table.Cell>
                        <Button onClick={()=>
                        deleteUser(data.id)}
                        >Delete</Button>
                    </Table.Cell>
                    <Table.Cell>
                        <Button onClick={()=>
                        updateUser(data)}
                        >Update</Button>
                    </Table.Cell>
                    </Table.Row>
            ))
        }
       
        {/* <Table.Row>
                <Table.Cell>Saranya</Table.Cell>
                <Table.Cell>Niriksha</Table.Cell>
                <Table.Cell>True</Table.Cell>
        </Table.Row> */}
        {/* <Table.Row>
                <Table.Cell>Arun</Table.Cell>
                <Table.Cell>Kumar</Table.Cell>
                <Table.Cell>False</Table.Cell>
        </Table.Row> */}
     </Table.Body>
   </Table>
   </div>
  )
}

export default Read