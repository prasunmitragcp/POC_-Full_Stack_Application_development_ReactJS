import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import Course from "./Course";
import base_url from "./api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Toast } from "bootstrap";







//axios.use(cors());

const Allcourses=()=>{

    useEffect(() => {
        //alert("Testing")
        document.title="All Courses"
      }, []);

     // Function to call server
     const getAllCoursesFromServer=()=>{

        let config = {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            
        }

         fetch(`https://javamicroservices.uc.r.appspot.com/dbcollection`,{
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
          },
         }).then(
             (response)=>{
                //success
                //console.log(response);
                
                console.log("response.json().data: "+response.json().data);
                toast.success("The courses have been loaded", {
                    position: "bottom-center",
                });
                setCourses(response.json().data);
             },
             (error)=>{
                 // For error
                 console.log(error);
                 toast.error("Something went wrong", {
                     position: "bottom-center",
                 });
             }
         );
     } ;

     //Calling loading course from server

     useEffect(() => {
         console.log("I am here");
         getAllCoursesFromServer();
     }, []);


    
    const [courses, setCourses]=useState([]);


     const updateCourses=(id)=>{
         setCourses(courses.filter((c)=>c.id != id))
     }


    return(
        <div>
            {/* <Button 
                onClick={() => {
                    console.log("Test");
                    
                    setCourses([
                        ...courses,
                        {
                            title: "Angular Course",
                            description: "This is demo course",
                        },
                    ])
                }}>Test</Button> */}
            <h1 >All Courses</h1>
                <p>List of Courses are as follows</p>
                {
                    courses.length> 0? courses.map((item)=>
                        <Course key={item.id} course={item} update={updateCourses}/>) : "No Courses" }
        </div>

    );
}

export default Allcourses;