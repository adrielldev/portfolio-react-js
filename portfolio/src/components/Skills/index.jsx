import { Container,InfoContainer,TechsContainer,Content } from "./styles"
import { useState } from "react"
import { data } from "./dataTechs"

export const Skills = () => {


    const [techs, setTechs] = useState(data)





    return (

        <Container id="skills">
            <Content>
            <InfoContainer>
                <h1>Skills</h1>
                <p>
                These are the technologies that I have mastered at the moment
                </p>
            </InfoContainer>
            <TechsContainer>
                {techs.map((tech,index)=>
                <li key={index}>
                    <img src={tech.img}></img>
                    <h2>{tech.name}</h2>
                    
                
                </li>)}
            </TechsContainer>
            </Content>
        </Container>
    )
}

export default Skills
