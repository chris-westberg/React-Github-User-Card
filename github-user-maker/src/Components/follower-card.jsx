import React from 'react';
import styled from 'styled-components';

const FollowerCard = props => {

    const Img = styled.img `
    width: 100px;
`

    const Div = styled.div `
    width: 300px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 50px;
    flex-direction: column;
    background-color: #4bdbc6;
    border-radius: 10px;
`

const Div2 = styled.div `
    display: flex;

`

    return(
        <Div>
            <Div2>
                <h1>{props.follower.login}</h1>
                <Img src={props.follower.avatar_url} />
            </Div2>
                <p><a href={props.follower.html_url}>Check out his work!</a></p>
            
        </Div>
    )
}

export default FollowerCard;