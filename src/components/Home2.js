import React, { Fragment } from "react";
import Masonry from '@mui/lab/Masonry';
import AntibioticDatabase from '../images/statisticsGif.gif'
import GithubActions from '../images/github_actions.png'
import MySQL from '../images/mysql_sample.gif'
import UnitTest from '../images/unit_test.png'
import { Grid2 as Grid } from "@mui/material";

export default function Home2(props) {

    const skillList = [
        {
            label: 'ReactJS',
            img: AntibioticDatabase,
            alt: 'sample of react'
        },
        {
            label: 'GitHub Actions',
            img: GithubActions,
            alt: 'sample of github actions'
        },
        {
            label: 'SQL & MySQL',
            img: MySQL,
            alt: 'sample of mysql'
        },
        {
            label: 'Unit test',
            img: UnitTest,
            alt: 'sample of unit test'
        }
    ]

    function SkillCard({item}) {
        return (
            <div>
                <div className="d-flex card-label">
                    <h6>{item.label}</h6>
                </div>
                <img
                alt={item.alt}
                src={item.img}
                loading="lazy"
                style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: 'block',
                    width: '100%',
                  }}
                />
            </div>
        )
    }
    return (
        <>
        <div className="container">
            <Grid size={12} 
            sx={{
                minHeight: '20vh', 
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
                }}>
                <h3>Hi, I'm <strong>Izzatul Najwa</strong>.</h3>
            </Grid>
            <Grid size={12}>
            <Masonry columns={{ xs: 1, sm: 2, md: 3}} spacing={2}>
                {skillList.map((item, index) => {
                    return(
                        <Fragment key={index}>
                            <SkillCard item={item}/>
                        </Fragment>
                    )
                })}
            </Masonry>
            </Grid>
        </div>
        </>
    )
}