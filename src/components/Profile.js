import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

export default function Profile(props) {

    const linkedinURL = "https://www.linkedin.com/in/izzatul-najwa-binti-ismail/"
    const githubURL = "https://github.com/Izzywa"
    const workEmail = " ismail.izzatulnajwa@gmail.com"
    const phoneNum = "+6019 590 7266"
    const profileDesc = "With over 7 years of experience in providing healthcare services" +
    "I offer a deep understanding of what it takes to provide a satisfactory and pleasurable" +
    "experiece. Skilled in web programming using Django, React, Python, and Javascript, I " +
    "am passionate about creating applications that are suitable for users from all walks of life."

    const EducationList = [
        {
            location: 'HarvardX',
            start: new Date(2024, 3).getFullYear(),
            end: new Date(2024, 3).getFullYear(),
            certification: [
                "CS50's Introduction to Computer Science",
                "CS50's Web Programming with Python and JavaScript"
            ]
        },
        {
            location: 'Jordan University of Science and Technology',
            start: new Date(2012, 8).getFullYear(),
            end: new Date(2017, 7).getFullYear(),
            certification: ['Bachelor Degree in Dental Surgery']
        }
    ]

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
            <div className="profile-content">
                <div className="contact-div text-center">
                    <p onClick={redirectLinkedin}><LinkedInIcon/><u>LinkedIn</u></p>
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

    function WorkExpDiv() {
        return(
            <div className="work-exp profile-side-div my-3">
                <button className="btn"
                onClick={() => window.location.href = linkedinURL}
                >
                Discover my work experiences on LinkedIn
                </button>
                <button className="btn"
                onClick={() => window.location.href = githubURL}
                >
                    View my projects codes on GitHub
                    </button>
                <button className="btn" onClick={() => props.setPagenum(2)}>
                    Visit my projects page
                    </button>
            </div>
        )
    }

    function EduDiv() {
        return(
            <div className="education profile-side-div my-3">
                {EducationList.map((item,index) => {
                    return(
                        <div key={index}>
                            <p>
                                <strong>{item.location}</strong>
                                { item.start === item.end ?
                                <small>[ {item.start} ]</small> 
                                : 
                                <small> [ {item.start} - {item.end} ]</small>
                                }
                            </p>
                            <ul>
                                {item.certification.map((listItem, listIndex) => {
                                    return (
                                        <li key={listIndex}>
                                            {listItem}
                                        </li>
                                    )
                                })}
                            </ul>
        
                        </div>
                    )
                })}
            </div>
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
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="workExp-content"
                style={accordionTitle}>
                Work Experience
                </AccordionSummary>
                <AccordionDetails
                sx={{
                    backgroundColor: "salmon",
                    color: "white"
                }}
                >
                    <WorkExpDiv/>
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
                expandIcon={<ExpandMoreIcon/>}
                    aria-controls="profile-content"
                    style={accordionTitle}>
                    profile
                    </AccordionSummary>
            }

                    <AccordionDetails
                    sx={{
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
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="education-content" 
                    style={accordionTitle}>
                    Education
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            backgroundColor: "salmon",
                            color: "white"
                        }}
                    >
                        <EduDiv/>
                    </AccordionDetails>
            </Accordion>
        </div>
    )
    }

       function LargeViewComponent() {
        return(
            <div className="row">
                <div className="col-lg-4 col-12">
                    <h6 className="profile-side-title">
                        work experience
                        </h6>
                        <WorkExpDiv/>
                </div>
                <div className="col-lg-4 col-12">
                    <ProfileDiv />
                </div>
                <div className="col-lg-4 col-12">
                <h6 className="profile-side-title">
                        education
                        </h6>
                        <EduDiv/>
                </div>
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
            <LargeViewComponent />
            </div>
        </div>
        </div>
       )
}