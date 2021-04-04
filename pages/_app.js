// React
import React from 'react';
// Props
import PropTypes from 'prop-types';
// Next.JS
import Head from 'next/head';
// Material-UI
import {
  ThemeProvider,
  CssBaseline,
} from '@material-ui/core';
// Font Avesome
import { loadCSS } from 'fg-loadcss';
// Theming
import theme from '../src/theme';

const App = (props) => {

  const { Component, pageProps } = props;

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;