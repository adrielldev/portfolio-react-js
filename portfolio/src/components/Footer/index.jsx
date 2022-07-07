import {Container,InfosContainer} from './styles'
import {FaLinkedin,FaYoutube} from 'react-icons/fa'


const Footer = () => {



    return (

        <Container>
             <h1>&lt;Adrieldev/&gt;</h1>

             <InfosContainer>
                <div>
                    <a href='https://www.linkedin.com/in/adriel-alberto-109410230/' target='_blank'><FaLinkedin size={28}/></a>
                </div>
                <div>
                    <a href='https://www.youtube.com/channel/UCav8gt_NjZ3setL3n3BYX3Q'  target='_blank'><FaYoutube size={28}/></a>
                </div>
             </InfosContainer>


        </Container>
    )
}

export default Footer