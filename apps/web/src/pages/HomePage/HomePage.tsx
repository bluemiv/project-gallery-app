import React from 'react';
import HomeMenu from '../../feature/HomeMenu';
import { StyledHomePage } from './StyledHomePage';

const HomePage = () => {
  return (
    <StyledHomePage>
      <HomeMenu title="바로가기">
        <HomeMenu.Button label="갤러리" route="/gallery" />
        <HomeMenu.Button label="설정" route="/setting" />
      </HomeMenu>
    </StyledHomePage>
  );
};

export default HomePage;
