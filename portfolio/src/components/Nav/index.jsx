import {Container,Content,SectionContainer,ListItem} from './styles'


import { useState } from 'react'

const Nav = () => {

    const [activeHome,setActiveHome] = useState(true);
    const [activeProject,setActiveProjects] = useState(false);
    const [activeSkills,setActiveSkills] = useState(false);
    const [activeBlog,setActiveBlog] = useState(false);



    const activeItemHome = () =>{
        setActiveHome(true);
        setActiveBlog(false);
        setActiveProjects(false);
        setActiveSkills(false);
    }
    const activeItemSkills = () =>{
        setActiveHome(false);
        setActiveBlog(false);
        setActiveProjects(false);
        setActiveSkills(true);
    }
    const activeItemBlog = () =>{
        setActiveHome(false);
        setActiveBlog(true);
        setActiveProjects(false);
        setActiveSkills(false);
    }
    const activeItemProjects = () =>{
        setActiveHome(false);
        setActiveBlog(false);
        setActiveProjects(true);
        setActiveSkills(false);
    }




    return (
        <Container>
           <a href='#home' onClick={activeItemHome}> <h1>&lt;Adrieldev/&gt;</h1></a>
            <Content>
            <SectionContainer> 
              <ListItem active={activeHome}>  <a href='#home' onClick={activeItemHome}>Home</a></ListItem>
              <ListItem active={activeProject}><a href='#projects' onClick={activeItemProjects}>Projects</a></ListItem>
              <ListItem active={activeSkills}><a href='#skills' onClick={activeItemSkills}>Skills</a></ListItem>
              <ListItem active={activeBlog}><a href='#blog' onClick={activeItemBlog}>Blog</a></ListItem>
                
                
                
            </SectionContainer>
           

            <button>
                Connect
            </button>
            </Content>
        </Container>

    )
}

export default Nav