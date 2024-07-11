import { ThemeProvider } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import theme from './theme';
import { configureAppStore } from '../store/configureStore';

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const store = configureAppStore();
  let node = children;
  node = <ThemeProvider theme={theme}>{node}</ThemeProvider>;
  node = <ReduxProvider store={store}>{node}</ReduxProvider>;
  return node;
};

export default AppProvider;