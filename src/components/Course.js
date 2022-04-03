import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
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

const Course=({course, update})=>{


        const deleteCourse =(id)=>{
            axios.delete(`/dbcollection/${id}`).then(
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
                <Button color="warning ml-3">Update</Button>
            </Container>
        </CardBody>
    </Card>
    );
}

export default Course;