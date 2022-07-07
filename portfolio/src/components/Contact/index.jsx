import {Container,ImgContainer,FormContainer} from './styles'

import formAstronautImg from '../../assets/astronautaform.png'

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import { toast } from 'react-toastify';

import emailjs from '@emailjs/browser';

 const Contact = () => {


    const schema = yup.object({
        name:yup.string().required('Campo obrigatório'),
        lastName:yup.string().required('Campo obrigatório'),
        email:yup.string().email('Formato de email inválido').required('Campo obrigatório'),
        contact:yup.string().required('Campo obrigatório'),
        message:yup.string().required('Campo obrigatório').max(156,'máximo de 156 caracteres')
    })

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

      const onSubmitFunction = (data) =>{
        toast.success('Message sent with success !')      
        emailjs.send('service_ilw5g4d', 'template_125yakb', data,'8iNZqr8GHqMWfjewT')
            .then(function(response) {
               
            }, function(error) {
            });
    }




    return (
        <Container id='contact'>
            <ImgContainer>
            <img src={formAstronautImg}/>
            </ImgContainer>
            <FormContainer>
                <h1>Contact me!</h1>
                <form  onSubmit={handleSubmit(onSubmitFunction)}>
                    
                    <input type='text' placeholder='First Name'{...register('name')} ></input>
                    <input type='text' placeholder='Last Name' {...register('lastName')}></input>
                    
                    
                    <input type='email' placeholder='Email' {...register('email')}></input>
                    <input type='tel' placeholder='Phone' {...register('contact')}></input>
                    
                    <textarea placeholder='Message' {...register('message')}></textarea>

                    <button type='submit'>Send</button>
                </form>

            </FormContainer>
        </Container>
    )
}

export default Contact
