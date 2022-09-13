import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';
import Main from './Main';

const BasicLayout = () => {
  return (
    <>
      <Header title="Gallery" />
      <div className="main-container">
        <SideMenu />
        <Main>
          <Outlet />
        </Main>
      </div>
      <Footer />
    </>
  );
};

export default BasicLayout;
