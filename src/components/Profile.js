import React, { useRef } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

export default function Profile(props) {

    /**
     * <p>
                contact: email, linkedin, phone number
                education
                work experience (github, linkedin, projects page)
                core values
            </p>
     */

    const profileDivRef = useRef();
    const workExpRef = useRef();
    const eduRef = useRef();

    const linkedinURL = "https://www.linkedin.com/in/izzatul-najwa-binti-ismail/"
    const workEmail = " ismail.izzatulnajwa@gmail.com"
    const phoneNum = "+6019 590 7266"
    const profileDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Etiam non tempus eros, at commodo dolor. Nam facilisis gravida massa ut auctor. Cras eget mauris id risus tincidunt varius. \
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. " 

    function redirectLinkedin() {
        window.location.href = linkedinURL
    }

    return(
        <div className="wrapper profile-wrapper">
        <div className="row">
            <div className="work-exp-div col-lg-4 col-12">
                <div className="d-lg-none sm-view-div">
                    <h6>Work experience</h6>
                    <div className="work-exp" ref={workExpRef}>
                        <p>{profileDesc}</p>
                    </div>
                </div>
                <div className="d-none d-lg-block lg-view-div">
                    big view 
                </div>
            </div>

            <div className="col-lg-4 col-12 profile-div" ref={profileDivRef}>
                <div className="contact-div text-center">
                        <p onClick={redirectLinkedin}><LinkedInIcon/> LinkedIn</p>
                        <p><MailOutlineIcon/> {workEmail}</p>
                        <p><PhoneIphoneIcon/> {phoneNum}</p>
                    </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="image-div"></div>
                    </div>
                    <div className="description-div text-center">
                        <p>{profileDesc}</p>
                        </div>
                    </div>

                <div className="education-div col-lg-4 col-12">
                <div className="d-lg-none sm-view-div">
                    <div className="edu-list" ref={eduRef}>
                        {profileDesc}
                    </div>
                <h6>education</h6>
                </div>
                <div className="d-none d-lg-block lg-view-div">
                    big view 
                </div>
                </div>

        </div>
        </div>
    )
}