import React from "react";
import {FeedbackForm} from "./components/FeedbackForm";

function App() {

    return (
        <div className={'container d-flex justify-content-center align-items-center flex-column vh-100'}>
            <h2 className={'text-success text-uppercase mb-5'}>Export form data to JSON</h2>

            <FeedbackForm />
        </div>
    )
}

export default App
