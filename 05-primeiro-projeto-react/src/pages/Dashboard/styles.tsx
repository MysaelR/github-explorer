import styled from 'styled-components';
import { shade } from 'polished';


export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;

    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input{
        flex:1; //vai fazer com que a barra de input ocupe todo o espaço disponivel (700px) com exceção do espaço que está ocupado com o botão
        height: 70px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;

        &::placeholder{
            color: #a8a8b3;
        }

    }

    button{
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: background-color 0.3s;

        &:hover{
            background: ${shade(0.2, '#04d361')}; //shade vai escurecer. ai está setado para escurecer 20%
        }
    }

`;

export const Repositories = styled.div`

    margin-top: 80px;
    max-width: 700px;

    /*a + a { //isso faz com que só se aplique do elemento que é precedido em diante (a partir da segunda âncora)
        margin-top: 16px;
    }*/

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        

        &:hover{
            transform: translateX(16px); //distanciar o elemento no eixo X (da esquerda para direita)
        }

        &+a {
            margin-top: 16px;
        }
        

        img{
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div{
            margin-left: 0 16px;
            flex: 1; //se ajusta ao tamanho do container

            strong{
                font-size: 20px;
                color: #3D3D4D;
            }

            p{
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }
        }
        svg{
            margin-left: auto; //Vai pegar todo o espaço disponivel que ela tem a esquerda e vai colocar um margin
            color: #cbcbd6;
        }

        
    }

`;