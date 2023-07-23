import { PaddedWrapper } from "../common/components/PaddedWrapper"
import { StyledNavLink } from "./components/StyledNavLink"
import { StyledNavLinkWrapper } from "./components/StyledNavLinkWrapper"
import { StyledH1 } from "../common/components/styledText/StyledH1"

export const Navbar = () => {
    return(
        <PaddedWrapper
            style={{ 
                display:"flex", 
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between"}}
        >        
            <div
                style={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    gap:"0.5rem"
                }}
            >
               
                <StyledH1 blue>
                    {"React Lab"} 
                </StyledH1>
                {"🖥️"}
            </div>        
                
                <StyledNavLinkWrapper>
                    <StyledNavLink to="/">
                        {"Home"}
                    </StyledNavLink>
                    <StyledNavLink to="designsystem">
                        {"Design System"}
                    </StyledNavLink>
                </StyledNavLinkWrapper>
        </PaddedWrapper>
    )
}