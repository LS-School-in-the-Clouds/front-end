import React from 'react'
import styled from 'styled-components'

function MentorOnboarding() {
    return (
        <div>
            <div>
                <Form>
                    <h2>Hi Mentor! <br/> Let's get your profile updated</h2>
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
                </Form>
            </div>
        </div>
    )
}

export default MentorOnboarding;

const Form = styled.form`
    height: 100%;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`