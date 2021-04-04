// Material-UI
import {
  createMuiTheme,
  withStyles,
  Typography,
  Link
} from '@material-ui/core';
// Material-UI Color
import cyan from '@material-ui/core/colors/cyan';

// Set Color
const primary = cyan[400];
const secondary = cyan[600];

// Set styles
const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Raleway',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        h1: { component: Typography, props: { gutterBottom: true, variant: 'h1' } },
        h2: { component: Typography, props: { gutterBottom: true, variant: 'h2' } },
        h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
        h4: { component: Typography, props: { gutterBottom: true, variant: 'caption', paragraph: true } },
        p: { component: Typography, props: { paragraph: true } },
        a: { component: Link },
        li: {
          component: withStyles(styles)(({ classes, ...props }) => (
            <li className={classes.listItem}>
              <Typography component="span" {...props} />
            </li>
          )),
        },
        html: {
          boxSizing: 'border-box',
          backgroundColor: '#121212',
        },
        body: {
          width: '100%',
          padding: '0',
          margin: '0',
          backgroundColor: '#121212',
        },
        header: {
          overflow: 'hidden',
        },
        main: {
          width: '100%',
          padding: '0',
          margin: '0',
          overflow: 'hidden',
        },
        footer: {
          overflow: 'hidden',
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;