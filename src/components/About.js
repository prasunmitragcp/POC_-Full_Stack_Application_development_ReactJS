import React, { useEffect } from "react";
import {jumbotron, Button, Container} from "reactstrap"



const About=()=>{

    useEffect(()=>{
        document.title="About";
    },[])

    return (
        <div>
            <jumbotron className="text-center bg-primary">
                <h1>About</h1>
                <p>
                    Test
                </p>
                <Container>
                    <Button color="primary" outline>Start using my application</Button>
                </Container>
            </jumbotron>
        </div>
    );
}
export default About;