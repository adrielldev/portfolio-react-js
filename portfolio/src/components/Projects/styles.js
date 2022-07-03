import styled,{keyframes} from "styled-components";

export const Container = styled.div`
background-color: black;
margin-top: 15px;
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
`

const appearFromLeft = keyframes`
    from{
        transform: translateX(-250px);
        opacity: 0;
    }
    to{
        transform: translateX(0px);
        opacity: 1;
    }
`

const appearFromRight = keyframes`
from{
        transform: translateY(250px);
        opacity: 0;
    }
    to{
        transform: translateY(0px);
        opacity: 1;
    }

`



export const InfoContainer = styled.div`
color: #EDF4ED;
text-align: center;
display: flex;
flex-direction: column;
gap:1.5rem;
p{
    color: #aaa;
}
h1{
    font-size: 30px;
}

`

export const PagesContainer = styled.div`
display: flex;
width: 300px;
justify-content: space-between;
padding: 15px;
button{
    padding: 15px;
    color: #EDF4ED;
    cursor: pointer;
    border: none;
    width: 50px;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right,
        #0a0227,
        #3b2a77
        ) ;
        transition: .5s;
}
button:hover{
    background:#EDF4ED;
    color: #222;
}

`

export const ProjectContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
gap: 1.2rem;
img{
    width: 50%;
    height: 50%;
    border-radius: 20px;
}

h4{

    font-size: 25px;
    color: #EDF4ED;
}
p{
    color:#aaa;
}
@media (max-width:768px){
    img{
    width: 90%;
    height: 70%;

}


}

`

export const DemoRepoContainer = styled.div`
display: flex;
width: 200px;
justify-content: space-around;
align-items: center;

a{
    color: #EDF4ED;
}
a:hover{
    color: #3b2a77;
}

button{
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid #3b2a77;
    padding: 5px;
    transition: 1s;
}

button a {
    color: #3b2a77;
    width: 100px;
}
button:hover{
    
    background-color:#3b2a77 ;
    border-color:#EDF4ED;
}
button:hover a{
   color: #EDF4ED;
}


`