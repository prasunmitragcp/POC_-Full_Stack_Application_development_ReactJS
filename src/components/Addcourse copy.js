import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import {withRouter} from "react-router-dom";

function Updatecourse(props)
{

    console.warn("props: ", props.match.param.id);

    useEffect(async ()=>{
        let result = await fetch("https://javamicroservices.uc.r.appspot.com/dbcollection/"+props.match.param.id)
        result = await result.json();
        setCourses(result)
    },[])

const [course, setCourses]=useState({});

// form handle function

const handleform=(e)=>{
    console.log(course);
    postDataToServer(course);
    e.prventDefault();
}



//Creating function to post data on server
const postDataToServer=(data)=>{
    axios.post('https://javamicroservices.uc.r.appspot.com/dbcollection', data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Course has been added successfully");

        },(error)=>{
            console.log(error)
            console.log("error")
            toast.error("something went wrong");
        }
    )
}


    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handleform}>
                <FormGroup>
                    <label for="userid">Course Id</label><br />
                    <input type="text" placeholder="Enter here" name="userid" id="userid" defaultValue={data.id}/>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label><br/>
                    <input type="text" placeholder="Enter title here" id="title"  defaultValue={data.title}/>
                </FormGroup>
                <FormGroup>
                    <label for="coursedescription">Course Description</label><br/>
                    <input id="description" name="description" type="textarea" style={{height:100}} defaultValue={data.description}/>
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