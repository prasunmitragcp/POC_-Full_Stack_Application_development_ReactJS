import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
const Updatecourse=()=>{

    
    useEffect(()=>{
        document.title="Update Course";
    },[])

const [course, setCourses]=useState({});

// form handle function

const handleform=(e)=>{
    console.log(course);
    putDataToServer(course);
    e.prventDefault();
}



//Creating function to PUT data on server
const updateDataToServer=(data)=>{
    axios.put(`https://javamicroservices.uc.r.appspot.com/dbcollection/${id}`, data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Course has been updated successfully");

        },(error)=>{
            console.log(error)
            console.log("error")
            toast.error("something went wrong");
        }
    )
}


    return(
        <Fragment>
            <h1 className="text-center my-3">Update Course Detail</h1>
            <Form onSubmit={handleform}>
                <FormGroup>
                    <label for="userid">Course Id</label><br />
                    <input type="text" placeholder="Enter here" name="userid" id="userid" onChange={(e)=>{
                        setCourses({...course, id:e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label><br/>
                    <input type="text" placeholder="Enter title here" id="title" onChange={(e)=>{
                        setCourses({...course, title:e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="coursedescription">Course Description</label><br/>
                    <input id="description" name="description" type="textarea" style={{height:100}} onChange={(e)=>{
                        setCourses({...course, description:e.target.value})
                    }}/>
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Update Course</Button><span style={{marginRight: '.2rem'}}> </span>
                    <Button color="warning ml-2" onClick={
                       ()=>{
                           setCourses({});
                       } 
                    }>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}
export default Updatecourse;