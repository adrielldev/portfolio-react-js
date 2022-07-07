import styled from 'styled-components'


export const Container = styled.div`
width: 100%;
display: flex;
height: fit-content;
justify-content: space-around;
padding: 20px;
@media (max-width:768px){
    justify-content: center;
}

background: linear-gradient(to right,
        #0a0227,
        #3b2a77
        ) ;

  

`

export const FormContainer = styled.div`

display: flex;
flex-direction: column;

@media (min-width:800px){
    width: 50%;
}

h1{
    color: #EDF4ED;
    text-align: center;
    font-size: 40px;
}

form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding:15px;
    
    textarea{
        resize: none;
        height: 90px;
        padding: 15px;
        color: #EDF4ED;
        background:none;
        border: 1px solid #EDF4ED;
        border-radius: 15px;
    }
    textarea::placeholder{
        color: #EDF4ED;
    }

    input{
        padding: 15px;
        height: 50px;
        color: #EDF4ED;
        background:none;
        border: 1px solid #EDF4ED;
        border-radius: 15px;
    }
    input::placeholder{
        color: #EDF4ED;

    }
    button{
        padding: 10px;
        width: 50%;
        border: 1px solid #222;
        color: #222;
        background-color: #EDF4ED;
        font-weight: 700;
        font-size: 17px;
        transition: .5s;
        cursor: pointer;

    }
    button:hover{
        color: #EDF4ED;
        background-color: #222;
        
    }
}

`

export const ImgContainer = styled.div`

@media (max-width:800px){
    img{
        display: none;
    }
}
`