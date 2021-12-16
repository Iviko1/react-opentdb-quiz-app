import { createGlobalStyle } from "styled-components";
import backgroundImage from "./assets/background.jpg";
const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    body{
        font-family: 'Poppins', sans-serif;
        
    }

    .correct{
        background-color: #23C552 !important;
        color: #232323 !important;
    }

    .incorrect{
        background-color: #F84F31 !important;
        color: #232323 !important;
    }

    #root{
        background: url(${backgroundImage});
        background-blend-mode: lighten;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: rgba(255,255,255,0.25);
    }
`;

export default GlobalStyle;
