import { Outlet } from "react-router-dom"
import { Navbar } from "../../navbar/Navbar"
import { PaddedWrapper } from "../../common/components/PaddedWrapper"
import { StyledHeader } from "../../common/components/StyledHeader"

export const RootLayout= () => {
    return(
        <body>
            <StyledHeader
               background={"#ECECEC80"}
            >
                <Navbar/>
            </StyledHeader>
            <PaddedWrapper>
                <Outlet/>
            </PaddedWrapper>
        </body>      
    )
}