import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
import Updatecourse from "./Updatecourse";
import { Redirect } from "react-router-dom";


const Course=({course, update})=>{


        const deleteCourse =(id)=>{
            axios.delete(`https://javamicroservices.uc.r.appspot.com/dbcollection/${id}`).then(
                (response)=>{
                    toast.success("Course has been deleted");
                    update(id);
                },
                (error)=>{
                    toast.error("Course not deleted. Server problem!!");
                }
            )
        }


        const updateCourse =(id)=>{
            console.log("Id: "+id);
            return <Redirect to="/Updatecourse" />
        }




    return (
    <Card className="text-center">
        <CardBody>
            <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={()=>{
                    deleteCourse(course.id);
                }}>Delete</Button><span style={{marginRight: '.2rem'}}> </span>
                <Button color="warning ml-3" onClick={()=>{
                    updateCourse(course.id);
                }}>Update</Button>
            </Container>
        </CardBody>
    </Card>
    );
}

export default Course;