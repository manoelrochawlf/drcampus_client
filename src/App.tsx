import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/themes';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { GlobalStyles } from './assets/styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <GlobalStyles/>
          <Header />
        <QueryClientProvider client={queryClient}>
          <Router />
          <Footer />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
