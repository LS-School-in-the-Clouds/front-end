import React from 'react'
import styled from 'styled-components'

function AdminOnboarding() {
    return (
        <div>
            <div>
                <Form>
                    <h2>Hi Admin! <br/> Let's get your profile updated</h2>
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
                    <label>School District Name? 
                        <input
                            name="district"
                            type="text"
                            placeholder="School district..."
                            value=""
                    />
                    </label>
                    <label>What is your school name?
                        <input
                            name="school"
                            type="text"
                            placeholder="School name..."
                            value=""
                        />
                    </label>
                </Form>
            </div>
        </div>
    )
}

export default AdminOnboarding;

const Form = styled.form`
    height: 100%;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`