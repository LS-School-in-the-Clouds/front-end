//import { SignUpStyle } from '../../../style/StyledComponents/index'
import styled from 'styled-components'

//login//
export const MainContainer = styled.div`
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

//register//
export const SignUpStyle = styled.div`
    
         
         width:40%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        margin-left:23%;
        margin-bottom:7%;


    @media (max-width: 1200px) {
        margin-left:0%;
        margin-bottom:12%;
    }

              // BLACK BOX CSS

        width: 450px;
        height: 700px;
        left: 300px;
        top: 100px;
        background: #000000;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
        border-radius: 40px;

        form {
            margin-top:20px;
            height:auto;
            width:70%;
            display:flex;
            flex-direction:column;
            align-self:center;
            
           

        }
        .submit {
            margin-top:30px;
            
            
        }
        input {
            border-radius: 20px;
            margin-top:10px;
        }
      button {
          border-radius: 100px;
          width:70%;
          height: 50px;
          display:flex;
          justify-content:center;
          align-self:center;
          align-items:center;
          margin-top:15px;
          
      }

      option {
          background-color:black;
      }
        
`

export const OnboardingStyle = styled.div`
    
         
         width:40%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        

              // BLACK BOX CSS
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 650px;
        height: 100%;
        left: 300px;
        top: 100px;
        background: #000000;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
        border-radius: 40px;

        form {
            margin-top:40px;
            height:auto;
            width:70%;
            display:flex;
            flex-direction:column;
            align-self:center;
           

        }
        .submit {
            margin-top:30px;
            
            
        }
        input {
            border-radius: 20px;
            margin-top:10px;
        }
      button {
          border-radius: 100px;
          width:70%;
          height: 50px;
          display:flex;
          justify-content:center;
          align-self:center;
          align-items:center;
          margin-top:15px;
          
      }

      option {
          background-color:black;
      }

      span{
          color: #89B8FF;
      }
        
`

export const Form = styled.form`
    height: 100%;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
`