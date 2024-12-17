import React from "react";
import Profile from "./Profile";
import Projects from "./Projects";

export default function Homepage(props) {
    return (
        <>
        <div className='portfolio-title'>
        <h1>portfolio</h1>
        </div>

        <div>
            <Profile />
            <Projects/>
        </div>
        </>
    )
}