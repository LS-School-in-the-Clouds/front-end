import React from "react"
import styled from 'styled-components'

const MProfile = () => {
    return(
        <>
        <div>
            <SignUpStyle>
                <Form>
                    <h2>Hi <span>Mentor!</span> <br/> Let's get your profile updated</h2>
                    <label>What is your first name?
                        <input
                            name="firstName"
                            type="text"
                            placeholder="First Name..."
                            value=""
                        />
                    </label>
                    <label> What is your last name? 
                        <input
                            name="lastName"
                            type="text"
                            placeholder="Last Name..."
                            value=""
                        />
                    </label>
                    <label> State
                        <input
                            name="state"
                            type="text"
                            placeholder="State..."
                            value=""
                        />
                    </label>
                    <label>What is/was your career? 
                        <input
                            name="career"
                            type="text"
                            placeholder="Career..."
                            value=""
                        />
                    </label>
                    <label>Country
                        <input
                            name="country"
                            type="text"
                            placeholder="Country..."
                            value=""
                        />
                    </label>
                    <label>Preferred Times 
                        <input
                            name="times"
                            type="text"
                            placeholder="Preferred times..."
                            value=""
                    />
                    </label>
                    <label>What are your interests?
                        <input
                            name=""
                            type="text"
                            placeholder="finance, politics, etc"
                            value=""
                        />
                    </label>
                    <button>Submit</button>
                </Form>
            </SignUpStyle>
        </div>
        </>
    )
}

export default MProfile;

const Form = styled.form`
    height: 100%;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const SignUpStyle = styled.div`
    
         
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
        

              // BLACK BOX CSS

        width: 450px;
        height: 90vh;
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

      span{
          color: #E3C8FD;
      }
        
`