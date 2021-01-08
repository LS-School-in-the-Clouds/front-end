import React from 'react'

import { OnboardingStyle, Form } from '../../style/StyledComponents/index'

function StudentOnboarding(props) {

    return (
        
            <OnboardingStyle>
                <Form>
                    <h2>Hi <span>Student!</span> <br/> Let's get your profile updated</h2>
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
            </OnboardingStyle>
        
    )
}

export default StudentOnboarding;


