import {Container,InfosContainer,ImgContainer} from './styles'
import astronautImg from '../../assets/astronaut1.png'

const Banner = () => {



    return (

        <Container>
            <InfosContainer>
                <h3>Welcome to my Portfolio</h3>
                <h1>Hello! I am Adriel, Web Developer Frontend</h1>
                <p>
                21 yrs Brazil. Started with C on the college i have 4 years with experience in programming and solving problems.
                   About a year ago i've decided to become a webdeveloper, started a course to improve my habilities and get me into the 
                   techonology market. I have the domain of the principal stacks to garantee a good work in the front-end design, as you can see in my projects in my github.
                    And i also have the soft skils needed to maintain a good ambient to work.
                    I am open to receive jobs proposals, or freelances projects.
                   You can contact me clicking in the button above,
                   send me an e-mail let's talk :)
                  



                </p>
                
                <button> Connect </button>
            </InfosContainer>
            <ImgContainer>
                <img src={astronautImg}/>
            
            </ImgContainer>
        </Container>
    )
}

export default Banner


/*


*/