import React from "react";
import beach from "../images/beach2.JPG"

export default function Profile(props) {

    /**
     * <p>
                contact
                education
                work experience (github, linkedin, projects page)
                core values
            </p>
     */
    return(
        <div className="wrapper profile-wrapper">
            <div id="contact-div">contact</div>
            <div id="education-div">education</div>
            <div className="image-div">
                </div>
                <div id="work-exp-div">work experience</div>
                <div id="values-div">core values</div>
        </div>
    )
}