import React, { useEffect } from "react";
import {jumbotron, Button, Container} from "reactstrap"



const Photogallery=()=>{

    useEffect(()=>{
        document.title="Photo Gallery";
    },[])

    return (
        <div>
            <jumbotron className="text-center bg-primary">
                <h1>Photogallery</h1>
                <p>
                    Test
                </p>
                {/* <Container>
                    <Button color="primary" outline>Start using my application</Button>
                </Container> */}
            </jumbotron>
        </div>
    );
}
export default Photogallery;