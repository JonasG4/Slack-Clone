import React from 'react'
import styled from 'styled-components';
import { Avatar } from '@material-ui/core'
import { AccessTime, Search,HelpOutline } from '@material-ui/icons'
function Header() {
    return (
        <HeaderContainer>
            {/* Left */}
            <HeaderLeft>
                <HeaderAvatar
                //Add onclick evt
                />
                <AccessTime />
            </HeaderLeft>
            {/* Search */}
            <HeaderSearch>
                <Search/>
                <input placeholder="Buscar un mensaje" />
            </HeaderSearch>

            {/* Right */}
            <HeaderRight>
                <HelpOutline />
            </HeaderRight>
        </HeaderContainer>
    )
}



export default Header;

// Styled components

const HeaderContainer = styled.div`
    display:flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
    
    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 30px;
    }
`

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover{
        opacity: .8;
    }

`

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius:6px;
    background-color:#421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid solid;

    >input{
        background-color:transparent;
        border:none;
        text-align:center;
        min-width: 30vw;
        outline: none;
        color: white;
    }
`

const HeaderRight = styled.div`
display: flex;
flex: 0.3;
align-items: center;

> .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 20px;
}
`