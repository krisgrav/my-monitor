import { StyledH1 } from "../../features/common/components/styledText/StyledH1"
import { StyledP } from "../../features/common/components/styledText/StyledP"

export const HomePage = () => {
    return(
        <main
            style={{
                width:"40rem"
            }}
        >
            <StyledH1 pink>
                {"Homepage"}
            </StyledH1>
            <StyledP
                pink
            >
                {"Welcome to the React Lab!"}
            </StyledP>
            <br/>
            <StyledP
                pink
            >
                {"This is a private React-project initiated to learn and practice different technologies and techniques related to React."}
            </StyledP>
            <StyledP
                pink
            >
                {"The project is developed by "}
                <a 
                    href={"mailto:kristian.gravermoen@gmail.com"}
                    style={{
                        textDecoration:"none",
                        color:"#F78888"
                    }}
                    >
                        <strong>{"Kristian Gravermoen (kristian.gravermoen@gmail.com)"} </strong>
                </a>
            </StyledP>
            <br/>
            <div>
            <StyledP
                pink bold
            >
                {"The project applies the following React techniques:"}
            </StyledP>
            <ul
                style={{
                    color:"#F78888",
                    margin:"0.25rem"
                }}
            >
                <li>
                    {"React Router"}
                </li>
                <li>
                    {"Styled Components"}
                </li>
            </ul>
            </div>
        </main>
    )
}