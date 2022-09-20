import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { BasicLayout } from './layout';
import { GalleryPage, HomePage, ImageViewerPage, VideoViewerPage } from './pages';
import { themeSelector } from './recoil/selector';
import { FontStyle, GlobalStyle } from './styles';

const App = () => {
  const theme = useRecoilValue(themeSelector);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FontStyle />
      <Routes>
        <Route element={<BasicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="gallery">
            <Route index element={<GalleryPage />} />
            <Route path="image-viewer" element={<ImageViewerPage />} />
            <Route path="video-viewer" element={<VideoViewerPage />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
