import React from "react";
import {FeedbackForm} from "./components/FeedbackForm";
import styled from "styled-components";

function App() {

    return (
        <div className={'container d-flex justify-content-center align-items-center flex-column vh-100'}>
            <h3 className={'text-success text-uppercase mb-5'}>Export form data to JSON</h3>

            <FeedbackForm />

            <Copyright>&copy; Art Nushi, 2023. All rights reserved.</Copyright>
        </div>
    )
}

const Copyright = styled.span`
  margin-top: 50px;
`
export default App
