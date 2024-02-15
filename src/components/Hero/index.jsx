import { ReactTyped } from "react-typed"
import { HeroDiv } from "./styles"



function Hero() {
    return (
    <section>
        <HeroDiv>
        <h1>Sejam Bem vindos ao meu mundo</h1>
            <p>
                Eu sou {''}
                <ReactTyped className="texto" strings={['Desenvolvedora', 'Front-End', 'Gamer', 'Tamara']} typeSpeed={100} loop backSpeed={20} cursorChar="/>" showCursor={true} />
                </p>
    </HeroDiv>
    </section>
    )
}


export default Hero