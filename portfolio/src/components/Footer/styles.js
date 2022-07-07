import styled from 'styled-components'


export const Container = styled.div`
background-color: #222;
padding: 20px;
display: flex;
height: fit-content;
align-items: center;
justify-content: space-between;
h1{
        background: linear-gradient(
    to right, 
    #3b2a77,
    #EDF4ED
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
        font-size: 30px;
        font-style: italic;
    }


`

export const InfosContainer = styled.div`
padding: 15px;
display: flex;
justify-content: space-between;
gap: 0.7rem;
@media (max-width:400px){
    flex-direction: column;
}
div{
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px;
    border: 1px solid #EDF4ED;
    border-radius: 50%;
    transition: .5s;
    cursor: pointer;
    
    a{
        color: #EDF4ED;
        transition: .5s;
    }
}

div:hover a {
    color: #222;
}
div:hover {
    background-color:#EDF4ED;
    border-color: #222;
}


`