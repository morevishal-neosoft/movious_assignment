import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../header/Header";
import { ChatWidget } from "../widgets/ChatWidget";

const OutletWrapper = styled.div`
  margin-top: 70px;
`;

export const App = () => {
  return (
    <Container>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <ChatWidget />
    </Container>
  );
};
