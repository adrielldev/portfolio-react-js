import styled from 'styled-components'


export const Container = styled.div`
display: flex;
height: fit-content;
align-items: center;
justify-content:space-around;
@media (max-width:1000px){
    justify-content: center;
}
margin-bottom: 20px;
padding: 20px;
width: 100%;
background: linear-gradient(to right,
        #0a0227,
        #3b2a77
        ) ;

  

`

export const FormContainer = styled.div`
padding: 15px;
display: flex;
flex-direction: column;
gap: 3rem;
h1{
    text-align: center;
    font-size: 27px;
    font-weight: 600;
    color: #EDF4ED;
}

form{
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    flex-direction: column;
    align-items: center;
    @media (max-width:510px){
        justify-content:center;
    }
    
    textarea{
        resize: none;
        width: 100%;
        height: 80px;
        padding: 15px;
        background: none;
        border-radius: 15px;
        border-color: #EDF4ED;
        color: #EDF4ED;
    }
    textarea::placeholder{
        color: #EDF4ED;
    }
    input{
        padding: 15px;
        background: none;
        border-radius: 15px;
        color: #EDF4ED;
        border: 1px solid #EDF4ED;
        margin-right: 10px;
    }
    input::placeholder{
        color: #EDF4ED;
    }
    div{
        padding: 15px;
        input{
            margin-bottom: 15px;
        }
    }

    button{
        padding: 15px;
        width: 120px;
        height: 40px;
        border: none;
        font-weight: 700;
        cursor: pointer;
        transition: .5s;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-y: hidden;
        margin-top: 10px;
    }
    button:hover{
        color: #EDF4ED;
        background-color: #3b2a77;
    }

    

}


`

export const ImgContainer = styled.div`
img{
    width: 100%;
}
@media (max-width:1000px){
    img{
        display: none;
    }
}
`