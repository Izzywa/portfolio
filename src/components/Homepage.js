import React from "react";
import Home from "./Home";

export default function Homepage(props) {
    return (
        <div>
            <div className="border-btn">My Profile</div>
            <div className="border-btn">My Projects</div>
            <Home/>
        </div>
    )
}