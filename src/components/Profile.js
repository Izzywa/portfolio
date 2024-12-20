import React, { useRef, useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { alignProperty } from "@mui/material/styles/cssUtils";

export default function Profile(props) {

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

    const accordionTitle = {
            textTransform: "uppercase",
            minHeight: "2em",
            maxHeight: "2em",
            padding: "0 2em 0",
            fontWeight: "bold",
            overflow: "hidden",
            margin: "0px",
            border: "none",
            backgroundColor: "peachpuff"
    }



    function ProfileDiv() {
        return(
            <>
            <div>
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
            </>
        )

    }

       function SmallViewComponent() {
        const [expanded, setExpanded] = useState('profile')
        function handleChange(panel) {
            setExpanded(panel)
        }

        return (
            <div>
                <Accordion 
                disableGutters
                elevation={0}
                sx={{
                    '&:before': {
                        display: 'none',
                    }
                }}
                expanded={expanded === 'workExp'} 
                onChange={() => handleChange('workExp')}>
                    <AccordionSummary 
                    aria-controls="workExp-content"
                    style={accordionTitle}>
                    Work Experience
                    </AccordionSummary>
                    <AccordionDetails>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion
                disableGutters
                elevation={0}
                sx={{
                    '&:before': {
                        display: 'none',
                    }
                }} 
                expanded={expanded === 'profile'} 
                onChange={() => handleChange('profile')}>

                {
                    expanded === 'profile' ?
                    null :
                    <AccordionSummary 
                        aria-controls="profile-content"
                        style={accordionTitle}>
                        profile
                        </AccordionSummary>
                }

                        <AccordionDetails
                        style={{
                            backgroundColor: "salmon"
                        }}
                        >
                            <ProfileDiv />
                        </AccordionDetails>
                </Accordion>
                <Accordion 
                disableGutters
                elevation={0}
                sx={{
                    '&:before': {
                        display: 'none',
                    }
                }}
                expanded={expanded === 'education'} 
                onChange={() => handleChange('education')}>
                        <AccordionSummary 
                        aria-controls="education-content" 
                        style={accordionTitle}>
                        Education
                        </AccordionSummary>
                        <AccordionDetails>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                </Accordion>
            </div>
        )
       }


       return(
        <div className="wrapper profile-wrapper">
            <div className="container-fluid">
            <div className="d-lg-none">
                <SmallViewComponent />
            </div>
            <div className="d-none d-lg-block">

            </div>
            </div>
            </div>
       )
}