import React, { useEffect } from "react";
import {jumbotron, Button, Container} from "reactstrap"



const Home=()=>{

    useEffect(()=>{
        document.title="Home";
    },[])

    return (
        <div>
            <jumbotron className="text-center bg-primary">
                <h1>POC on ReactJS</h1>
                <p>
                    This is developed by Prasun Mitra. Front end on ReactJS 
                    and backend on Springboot application
                </p>
                <Container>
                    <Button color="primary" outline>Start using my application</Button>
                </Container>
            </jumbotron>
        </div>
    );
}
export default Home;