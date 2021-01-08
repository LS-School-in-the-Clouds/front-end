import styled from 'styled-components'

//login//
const MainContainer = styled.div`
width:40%;
height:auto;
display:flex;
flex-direction:column;
justify-content:center;
font-size:1.1rem;
position:absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
margin-left:25%;
margin-bottom:12%;


@media (max-width: 1200px) {
    margin-left:0%;
    margin-bottom:20%;
  }
  
// BLACK BOX CSS

width: 400px;
height: 500px;
left: 300px;
top: 100px;
background: #000000;
box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
border-radius: 40px;


form {
    margin-top:20px;
    height:auto;
    display:flex;
    justify-content:center;
    
}
.submit {
    margin-top:30px;
    text-align:center;
    
}
input {
    border-radius: 20px;
    margin-top:10px;
}
button {
  border-radius: 100px;
  width:90%;
  height: 50px;
}
`