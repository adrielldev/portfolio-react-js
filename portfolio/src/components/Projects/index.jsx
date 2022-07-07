import {Container,InfoContainer,ProjectContainer,PagesContainer, DemoRepoContainer} from './styles'

import { data } from './dataProjects'

import { useState } from 'react'

import {FaGithub} from 'react-icons/fa'

const Projects = () => {

    const [projects,setProjects] = useState(data)
    const [activeProject,setActiveProject] = useState(0)
    const [lastActiveProject,setLastActiveProject] = useState();



    const changeActiveProject = (active) => {
        setActiveProject(active)

    }




    return (
        <Container id='projects'>
            <InfoContainer>
                <h1>Projects</h1>
                <p>These are my most recent projects</p>
            </InfoContainer>
            <PagesContainer>
                <button onClick={()=>changeActiveProject(0)}>1</button>
                <button onClick={()=>changeActiveProject(1)}>2</button>
                <button onClick={()=>changeActiveProject(2)}>3</button>
                <button onClick={()=>changeActiveProject(3)}>4</button>
            </PagesContainer>
            <ProjectContainer>
                
                    <h4>{projects[activeProject].name}</h4>
                    <img src={projects[activeProject].img} alt={projects[activeProject]}></img>
                    <p>{projects[activeProject].description}</p>
                    <DemoRepoContainer>
                    <a href={projects[activeProject].link} target='_blank'>demo</a>
                    <button><a href={projects[activeProject].repo} target='_blank' ><FaGithub size={28}/></a></button>
                    </DemoRepoContainer>
           
            </ProjectContainer>
        </Container>
    )
}

export default Projects