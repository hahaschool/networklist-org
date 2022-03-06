import React, { useState } from 'react';
import { Typography, Paper, Grid, Button, FormControlLabel, Checkbox } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import Web3 from 'web3';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';

import classes from './multichain.module.css'

import stores from '../../stores/index.js'
import { getProvider } from '../../utils'

export default function Multichain({ closeMultichain }) {

  const [ checked, setChecked ] = useState(false)

  const navigateToMultichain = () => {
    window.open("https://t.me/dao255", "_blank")
  }

  const handleChange = () => {
    setChecked(!checked)
  }

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      secondary: {
        main: '#fff'
      }
    },
    typography: {
      fontFamily: [
        'Inter',
        'Arial',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      body1: {
        fontSize: '12px'
      }
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: '32px',
          padding: '9px 16px'
        },
        containedPrimary: {
          backgroundColor: '#fff',
          color: '#000'
        }
      },
      MuiFormControlLabel: {
        root: {
          color: '#fff'
        }
      }
    },
  });

  return (
    <Paper elevation={ 1 } className={ classes.chainContainer } key={ 'multichain' } >
      <ThemeProvider theme={theme}>
        <div className={ classes.topInfo }>
          <img src='/255dao_compact_small.jpg' width={ 126 } height={ 126 } className={ classes.avatar } />
          <Typography variant='subtitle1' className={ classes.descriptionText} align='center' >选择 255 DAO Moonbeam 收集人节点质押您的 GLMR，享受安全稳定的高收益</Typography>
          <Button
            className={ classes.tryButton }
            variant='contained'
            disableElevation
            onClick={ navigateToMultichain }
            color='secondary'
            endIcon={<ArrowForwardIcon />}
          >
            <Typography className={ classes.buttonLabel }>加入 255 DAO 质押社区</Typography>
          </Button>
        </div>
      </ThemeProvider>
    </Paper>
  )
}
