import React, {useCallback, useState } from "react";
import Home from "./Home";
import Profile from "./Profile";
import Projects from "./Projects";

export default function Homepage(props) {
    const page = ['Profile', 'Home', 'Projects']

    const [pagenum, setPagenum] = useState(1)
    function goToPrevPage() {
        if (pagenum - 1 < 0) {
            setPagenum(page.length - 1)
        } else {
            setPagenum(pagenum - 1)
        }
    }
    function goToNextPage() {
        if (pagenum + 1 === page.length ) {
            setPagenum(0)
        } else {
            setPagenum(pagenum + 1)
        }

    }
    const DisplayPage = useCallback(() => {
        switch(page[pagenum]){
            case 'Home':
                return(
                    <Home/>
                )
            case 'Profile':
                return(
                    <Profile setPagenum={setPagenum}/>
                )
            case 'Projects':
                return(
                    <Projects />
                )
            default:
                return(
                    <Home/>
                )
        }
    }, [pagenum, page])
    return (
        <div>
            <div className="border-btn" onClick={goToPrevPage}>
                <span>
                {page[(pagenum > 0 ? pagenum - 1: page.length - 1)]}
                </span>
                </div>
            <div className="border-btn" onClick={goToNextPage}>
                <span>
                    {page[(pagenum < page.length - 1 ? pagenum + 1: 0)]}
                    </span>
                </div>
                
            {DisplayPage()}
        </div>
    )
}