import { Link } from "react-router-dom"
import { Navbar } from "../../navbar/Navbar"
import { PaddedWrapper } from "../../common/components/PaddedWrapper"

export const RouterError = () => {
    return (

        <body>
            <header>
                <Navbar />
            </header>
            <PaddedWrapper
               contrast 
            >
                    <h1>
                        {"Error!"}
                    </h1>
                    <div
                    style={{display:"flex", flexDirection:"row"}}
                    >
                    <p>
                        {"This page does not exist, go "} 
                        {<Link
                            to={"/"}
                            tabIndex={"0"}
                            style={{color:"#F78888"}}       
                        >
                            {"home"}                            
                        </Link>}
                    </p>
                    </div>
                        
            </PaddedWrapper>
        </body>
    )
}