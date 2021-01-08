
import React from 'react'
import styled from 'styled-components'
import MentorNav from './MentorNav'

function MTasks() {
    return (
        <>
        <MentorNav/>
        <MainContainer>
            <div>
                <h1>Tasks</h1>
            </div>        
        </MainContainer>        
        </>
    )
}


export default MTasks

const MainContainer = styled.div`
    border: 2px solid #E3C8FD;
    width: 90%;
    `
