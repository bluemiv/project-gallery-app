import React from 'react';
import { useQuery } from 'react-query';
import { fetchDirectoryAll } from '../api/directory';

const HomePage = () => {
  const { isLoading, isError, data } = useQuery(['directory'], fetchDirectoryAll);

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>error...</p>;

  return (
    <>
      <section>
        <h3>디렉토리</h3>
      </section>
    </>
  );
};

export default HomePage;
