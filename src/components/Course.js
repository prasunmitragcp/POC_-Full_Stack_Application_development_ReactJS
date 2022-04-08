import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import {Link} from "react-router-dom";
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





    return (
    <Card className="text-center">
        <CardBody>
            <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={()=>{
                    deleteCourse(course.id);
                }}>Delete</Button><span style={{marginRight: '.2rem'}}> </span>
                <Link to={"update/"+course.id}>
                <Button color="warning ml-3">Update</Button>
                </Link>
            </Container>
        </CardBody>
    </Card>
    );
}

export default Course;