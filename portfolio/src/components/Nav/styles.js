import styled from 'styled-components'


export const Container = styled.div`
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-y: hidden;
    height: 100px;
    z-index: 1;
    a{
        color: #EDF4ED;
        text-decoration: none;
    }
    h1{
        background: linear-gradient(
    to right, 
    #79B791,
    #EDF4ED
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
        font-size: 30px;
        font-style: italic;
    }
   

    button{
        border: 1px solid #EDF4ED;
        padding: 12px;  
        background-color: #222;
        color: #EDF4ED;
        font-size: 18px;
        transition: .5s;
        cursor: pointer;

  
    }
    button:hover{
       background-color: #EDF4ED;
       border: 1px solid #222;
       color: #222;

    }


`
export const Content = styled.div`
display: flex;
align-items: center;
gap: 5rem;

`


export const SectionContainer = styled.ul`
display: flex;
@media (max-width:724px){
    display:none;
    
}
justify-content: space-between;
width: 300px;
font-size: 20px;
`

export const ListItem = styled.li`
a{
color: ${props=>props.active ? '#EDF4ED':'#585B56'};
}
`


