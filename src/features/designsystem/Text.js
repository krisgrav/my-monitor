import { StyledP } from "../common/components/styledText/StyledP"
import { StyledWrapper } from "../common/components/StyledWrapper"
import { StyledH2 } from "../common/components/styledText/StyledH2"
import { StyledH1 } from "../common/components/styledText/StyledH1"
import { StyledH3 } from "../common/components/styledText/StyledH3"
import { StyledH4 } from "../common/components/styledText/StyledH4"
import {colors } from "../common/assets/colors"

export const Text = () => {
    return(
        <StyledWrapper
            row
        >
            <StyledWrapper 
                id="h1-text"
                column
            >
                <StyledH2
                    blue
                >
                    {"<h1>"}
                </StyledH2>
                {colors.filter(color => color.id !== "white").map( c => (
                    <StyledH1 color={c.hex}>{"This is a project for practising React."}</StyledH1>
                ))}
            </StyledWrapper> 
            <StyledWrapper 
                id="h2-text"
                column
            >
                <StyledH2
                    blue
                >
                    {"<h2>"}
                </StyledH2>
                {colors.filter(color => color.id !== "white").map( c => (
                    <StyledH2 color={c.hex}>{"This is a project for practising React."}</StyledH2>
                ))}
            </StyledWrapper>

            <StyledWrapper 
                id="h3-text"
                column
            >
                <StyledH2
                    blue
                >
                    {"<h3>"}
                </StyledH2>
                {colors.filter(color => color.id !== "white").map( c => (
                    <StyledH3 color={c.hex}>{"This is a project for practising React."}</StyledH3>
                ))}
            </StyledWrapper>
            
            <StyledWrapper 
                id="h4-text"
                column
            >
                <StyledH2
                    blue
                >
                    {"<h4>"}
                </StyledH2>
                {colors.filter(color => color.id !== "white").map( c => (
                    <StyledH4 color={c.hex}>{"This is a project for practising React."}</StyledH4>
                ))}
            </StyledWrapper>
            
            <StyledWrapper 
                id="p-text"
                column
            >
                <StyledH2
                    blue
                >
                    {"<p>"}
                </StyledH2>
                {colors.filter(color => color.id !== "white").map( c => (
                    <StyledP color={c.hex}>{"This is a project for practising React."}</StyledP>
                ))}
            </StyledWrapper>

        </StyledWrapper>
        
    )
}