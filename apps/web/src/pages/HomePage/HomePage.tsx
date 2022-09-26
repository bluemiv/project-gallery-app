import React from 'react';
import HomeMenu from '../../feature/HomeMenu';
import { StyledHomePage } from './StyledHomePage';
import { useQuery } from 'react-query';
import { fetchStorage } from '../../api/config';
import Alert from '../../components/Alert';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { isLoading, isError, data } = useQuery(['storage-path'], () => fetchStorage());

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>error</p>;

  const { storagePath } = data;
  console.log(storagePath);

  return (
    <StyledHomePage>
      <div>
        {storagePath ? (
          storagePath
        ) : (
          <Alert
            type="warning"
            title="디렉토리 경로 설정 필요"
            description={
              <>
                <span>
                  디렉토리 경로가 설정되어 있지 않습니다. 경로를 설정해주세요. (
                  <Link to="setting">경로 설정하러 가기</Link>)
                </span>
              </>
            }
          />
        )}
      </div>
      <HomeMenu title="바로가기">
        <HomeMenu.Button label="갤러리" route="/gallery" />
        <HomeMenu.Button label="설정" route="/setting" />
      </HomeMenu>
    </StyledHomePage>
  );
};

export default HomePage;
