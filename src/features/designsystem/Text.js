import { StyledP } from "../common/components/styledText/StyledP"
import { StyledH2 } from "../common/components/styledText/StyledH2"
import { StyledH1 } from "../common/components/styledText/StyledH1"
import { StyledH3 } from "../common/components/styledText/StyledH3"
import { StyledH4 } from "../common/components/styledText/StyledH4"


export const Text = (props) => {  
    return(
        <main
            style={{
                display:"table",
                width:"100%"
                
            }}
        >
                <StyledH1 background={props.background} color={props.color}>{"<h1>React Lab!</h1>"}</StyledH1>
                <StyledH2 
                    background={props.background}
                    color={props.color}
                >
                    {"<h2>React Lab!</h2>"}
                </StyledH2>
                <StyledH3
                    background={props.background} 
                    color={props.color}
                >
                    {"<h3>React Lab!</h3"}
                </StyledH3>
                <StyledH4 background={props.background} color={props.color}>{"<h4>React Lab!</h4>"}</StyledH4>
                <StyledP background={props.background} color={props.color}>{"<p>React Lab!</p>"}</StyledP>
        </main>
    )
}