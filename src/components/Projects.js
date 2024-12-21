import React from "react";
import OnBeat from '../images/OnBeatMobileExample.gif'

export default function Projects(props){
    const projectsList = [
        {
            title: 'OnBeat',
            image: OnBeat,
            tools: [
                'Python',
                'JavaScript',
                'HTML5',
                'CSS3',
                'React',
                'Django REST Framework'
            ],
            otherResources:[
                {
                    name: 'Bootstrap',
                    link: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/'
                },
                {
                    name: 'MUI',
                    link: 'https://mui.com/'
                },
                {
                    name: "YouTube Iframe API",
                    link: "https://developers.google.com/youtube/iframe_api_reference"
                },
                {
                    name: 'react-youtube',
                    link: 'https://www.npmjs.com/package/react-youtube'
                },
                {
                    name: 'react-markdown',
                    link: 'https://www.npmjs.com/package/react-markdown/v/8.0.6'
                }
            ],
            description: 
            'OnBeat is the title of the web application created to take notes while inserting \
            timestamps on a YouTube Video. YouTube is not only used\
            for entertainment, it is also a source of education for many; especially for those\
            with financial constraints. This application was developed with that in mind to \
            provide an accessiblity for those who only have access to smartphones to \
            read or write notes while still keeping the video in view.',
            link: 'https://github.com/Izzywa/OnBeat'
        }
    ]

    function ProjectCard({ item }) {
        return( 
            <div className="row">
                <div className="col-12 project-card-title text-center">
                    <h4><strong>{item.title}</strong></h4>
                </div>
                <div className="col-lg-6 col-12 text-center">
                    <img className="img-fluid" src={item.image}/>
                </div>
                <div className="col-lg-6 col-12 project-card-text my-3">
                    <a href={item.link}>GitHub Link</a>
                    <p>{item.description}</p>
                    <div className="row">
                        <div className="col-6">

                            <ul>
                                Tools Used:
                            {item.tools.map((toolsItem, toolsIndex) => {
                                return(
                                    <li key={toolsIndex}>{toolsItem}</li>
                                )
                            })}
                            </ul>

                        </div>
                        <div className="col-6">
                            <ul>
                                Other Resources:
                                {item.otherResources.map((otherResourcesItem, otherResourcesIndex) => {
                                return(
                                    <li key={otherResourcesIndex}>
                                        <a href={otherResourcesItem.link}>{otherResourcesItem.name}</a>
                                        </li>
                                )
                            })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="wrapper projects-wrapper">
            <div className="container">
                {projectsList.map((item, index) => {
                    return(
                        <div key={index}>
                            <ProjectCard item={item}/>
                            </div>
                    )
                })}
                </div>
        </div>
    )
}