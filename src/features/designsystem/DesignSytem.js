import { useState, useEffect } from "react"
import { Text } from "./Text"
import { colors } from "../common/assets/colors"
import { StyledButton } from "./components/StyledButton"

export const DesingSystem = () => {

    const [ color, setColor] = useState()
    const [ background, setBackground] = useState()

    useEffect(() => {
        const C = colors.find((C) => C.id === "blue")
        setColor(C.hex)
    }, [])
    useEffect(() => {
        const C = colors.find((C) => C.id === "pink")
        setBackground(C.hex)
    }, [])
    console.log(background);
    return(
       <main
         style={{
            maxWidth:"16rem",
            minWidth:"25%",
         }}
       >
            <div
                style={{
                    display:"flex",
                    gap:"0.25rem"
                }}
            >
                {colors.filter(color => color.id !== "white").map(C => (
                    <div
                        style={{
                            display:"flex",
                            flexDirection:"column",
                            width:"100%",
                            gap:"0.125rem"
                        
                        }}
                    >
                        <StyledButton 
                            onClick={() => setColor(C.hex)} 
                            color={C.hex} 
                            text={true}>
                                {C.id}
                            </StyledButton>
                        <StyledButton 
                            onClick={() => setBackground(C.hex)} 
                            color={C.hex}
                        />
                    </div>                    
                ))}
            </div>
        <Text
            color={color}
            background={background}
        />
       </main>
    )
}