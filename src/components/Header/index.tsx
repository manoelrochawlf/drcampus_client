import React from "react";
import { HeaderContainer, Item, Items, Logo } from "./styles";

const Header = () => {
    return ( 
        <HeaderContainer>
            <Logo>Dr. Campus</Logo>
            <Items>
                <Item>Login</Item>
            </Items>
        </HeaderContainer>
     );
}
 
export default Header;