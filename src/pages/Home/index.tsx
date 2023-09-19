import React from "react";
import { Container, LeadText } from "./styles";
import Login from "../../components/Login";

const Home = () => {
    return ( 
        <Container>
            <LeadText>A plataforma perfeita pros seus estudos pro UBA XXI</LeadText>
            <Login />
        </Container>
     );
}
 
export default Home ;