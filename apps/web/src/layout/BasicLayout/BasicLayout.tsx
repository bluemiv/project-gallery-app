import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const BasicLayout = () => {
  return (
    <>
      <Header title="Gallery" />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default BasicLayout;
