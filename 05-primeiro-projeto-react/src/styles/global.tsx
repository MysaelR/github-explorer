import { createGlobalStyle } from "styled-components";
import githubBackground from '../assets/github-background.svg'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
      background: #f0f0f0  url(${githubBackground}) no-repeat 70% top; //alinhar 70% a direita no topo
      -webkit-font-smoothing: antialiased;
      
    }

    body, input, button{
        font: 16px Roboto, sans-serif;
    }
    #root{
        max-width: 960px;
        margin: 0 auto; //centralizar
        padding: 40px 20px; //afastamento de 40px em cima e em baixo e 20 na direita e esquerda. 
    }
    button{
        cursor: pointer;
    }
`;