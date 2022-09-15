import React from 'react';
import { useQuery } from 'react-query';
import { fetchDirectoryConfig } from '../../api/directory';
import HomeMenu from '../../feature/HomeMenu';
import { StyledHomePage } from './StyledHomePage';

const HomePage = () => {
  const { isLoading, isError, data } = useQuery(['directory'], fetchDirectoryConfig);

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>error...</p>;

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
