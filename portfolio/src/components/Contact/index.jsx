import {Container,ImgContainer,FormContainer} from './styles'

import formAstronautImg from '../../assets/astronautaform.png'

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

 const Contact = () => {





    return (
        <Container>
            <ImgContainer>
            <img src={formAstronautImg}/>
            </ImgContainer>
            <FormContainer>
                <h1>Contact me!</h1>
                <form>
                    
                    <input type='text' placeholder='First Name'></input>
                    <input type='text' placeholder='Last Name'></input>
                    
                    
                    <input type='email' placeholder='Email'></input>
                    <input type='tel' placeholder='Phone'></input>
                    
                    <textarea placeholder='Message'></textarea>

                    <button type='submit'>Send</button>
                </form>

            </FormContainer>
        </Container>
    )
}

export default Contact
