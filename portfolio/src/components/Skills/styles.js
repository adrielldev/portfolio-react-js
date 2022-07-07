import styled from 'styled-components'



export const Container = styled.div`


display: flex;
justify-content: center;
align-items: center

`
export const Content = styled.div`
background-color: #222;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:2rem;
padding:15px;
border-radius: 20px;
width: 80%;
`


export const InfoContainer = styled.div`

text-align: center;
display: flex;
flex-direction: column;
gap:2rem;

h1{
    color: #EDF4ED;
}
p{
    color: #aaa;
}
`

export const TechsContainer = styled.ul`

display: flex;
flex-wrap: wrap;
justify-content: center;
gap:1rem;

img{
    width: 45%;
    height: 45%;
}


li{
    color: #EDF4ED;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: black;
    border-radius: 20px;
    gap: 2rem;
    h2{
        font-size:18px;
    }

}
`