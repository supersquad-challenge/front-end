//페이지 하단의 네비게이션 바

import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import { IsClickedProps } from "./lib/interfaces";

const NavigationBar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Container>
      <NavigationBarContainer>
        <NavigationBarWrapper isClicked={pathname.startsWith("/home")}>
          <img src="/NavigationBar/home.svg" alt="home" />
        </NavigationBarWrapper>
        <NavigationBarWrapper isClicked={pathname.startsWith("/myChallenges")}>
          <img src="/NavigationBar/clock.svg" alt="time" />
        </NavigationBarWrapper>
        <NavigationBarWrapper isClicked={false}>
          <img src="/NavigationBar/profile.svg" alt="profile" />
        </NavigationBarWrapper>
      </NavigationBarContainer>
    </Container>
  );
};

export default NavigationBar;

const Container = styled.div`
  @media (max-width: 2160px) {
    //PC
  }
  @media (max-width: 576px) {
    //mobile
    bottom: 28px;
  }
  position: fixed;
  z-index: 100;

  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

const NavigationBarContainer = styled.div`
  @media (max-width: 2160px) {
    //PC
  }
  @media (max-width: 576px) {
    //mobile
    width: 330px;
    height: 70px;

    border-radius: 21px;

    padding-left: 45px;
    padding-right: 45px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;

  background-color: #121212;
`;

const NavigationBarWrapper = styled.div<IsClickedProps>`
  @media (max-width: 2160px) {
    //PC
  }
  @media (max-width: 576px) {
    //mobile
    width: fit-content;
    height: 40px;
    border-bottom: ${(props) => props.isClicked && "3px solid white"};

    & > img {
      width: 23px;
      height: 23px;
    }
  }

  color: white;

  box-sizing: border-box;
`;
