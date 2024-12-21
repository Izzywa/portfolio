import React from "react";
import OnBeat from '../images/OnBeatMobileExample.gif'
import Network from '../images/Network.gif'
import Portfolio from '../images/Portfolio.gif'

export default function Projects(props){
    const projectsList = [
        {
            title: 'This Portfolio!',
            image: Portfolio,
            tools: [
                'JavaScript',
                'HTML5',
                'CSS3',
                'React',
                'GitHub'
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
                    name: 'Swiper',
                    link: 'https://swiperjs.com/react'
                }
            ],
            description: 
            'If you are viewing this, this portfolio is also one of my projects!\
            This portfolio site was made with React and deployed to GitHub pages. \
            You might be viewing this site in your computer or your mobile phone but this site \
            was made to be responsive to any type of devices.',
            link: 'https://github.com/Izzywa/portfolio/tree/main'
        },

        {
            title: 'OnBeat',
            image: OnBeat,
            tools: [
                'Python',
                'JavaScript',
                'HTML5',
                'CSS3',
                'React.js',
                'Django REST Framework',
                'GitHub Actions'
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
        },

        {
            title: 'Network',
            image: Network,
            tools: [
                'Python',
                'JavaScript',
                'HTML5',
                'CSS3',
                'React',
                'Django'
            ],
            otherResources:[
                {
                    name: 'Bootstrap',
                    link: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/'
                }
            ],
            description: 
            'This project was made to imitate a social media platfrom that allows users to\
            make posts, follow other users and "like" a post.\
            Proper secure measures were implemented to authenticate and authorise users, \
            providing different functionalities for users based on their authentication status.',
            link: 'https://github.com/Izzywa/Network'
        }
    ]

    function ProjectCard({ item }) {
        return( 
            <div className="row my-3">
                <div className="col-12 project-card-title text-center">
                    <h4><strong>{item.title}</strong></h4>
                </div>
                <div className="col-lg-6 col-12 text-center">
                    <img className="img-fluid" src={item.image}/>
                </div>
                <div className="col-lg-6 col-12 project-card-text py-2">
                    <a href={item.link}> - GitHub Link</a>
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