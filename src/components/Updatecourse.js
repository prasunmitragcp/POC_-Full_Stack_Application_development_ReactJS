import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
const Updatecourse=()=>{

    const history = useHistory();
    const updateid = history.location.state.data;

   console.log("updateid: "+updateid);
}
export default Updatecourse;