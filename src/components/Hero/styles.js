import styled from "styled-components"

export const HeroDiv = styled.div`
    display: block;
    justify-content: left;
    margin-left: 15%;
    margin-top: 5%;

    h1 {
        font-family: 'Oswald', sans-serif;
    }

    p {
        margin-left: 10px;
        margin-top: 10px;
        font-family: 'Roboto', sans-serif;

        .texto {
            position: relative;
            top: 0,6px;
            left: 2px;
            width: 200px;
        }
    }

    
    @media(max-width: 1080px) {
        margin-left: 20%;
    }
    
    @media(max-width: 640px) {
        margin-left: 10%;
        p {
            margin-left: 35px;

            .texto {
                left: 95px;
                top: 1px;
                width: 170px;
            }
        }
    }
`
