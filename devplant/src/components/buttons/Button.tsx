import { Button as ButtonWrapper } from "./Button.style";

interface ButtonProps {
    onClick: () => void; 
    text: string; 
    type?: "default" | "green";
    textColor?: "default" | "white";
}

export function Button({ onClick, text, type = "default", textColor = "default" }: ButtonProps): JSX.Element {
    const defaultBackground = "#E6E8E7";
    const greenBackground = "#0DA074";
    const background = type === "green" ? greenBackground : defaultBackground;
    
    const color = textColor === "white" ? "#FFFF" : "#363636";

    return <ButtonWrapper onClick={onClick} style={{backgroundColor: background,  color: color}}>
        {text}
    </ButtonWrapper>
}