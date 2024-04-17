const getTheme = (theme) => {
    //ThemeConfig - present using only default
    const themeConfig = {
        default: {
            floatButton: {
                testcontainer: {
                    position: 'fixed',
                   // width: '60%',
                    height: 'calc(100vh - 200px)',
                    backgroundColor: theme.palette.primary.contrastText,
                    bottom: 55,
                    right: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '300px',
                    zIndex: 2,
                    margin: '0 20px 20px 0',
                    //border: '1px solid #ffe268',
                    boxShadow: '0 1px 6px rgb(32 33 36 / 28%)',
                    borderRadius: '12px'
                },
                testheader: {
                    height: '75px',
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '12px 12px 0 0'
                },
                headerLogo: {
                    height: '25px'
                },
                hide: {
                    display: 'none',
                  },
                outline: {
                    position: 'fixed',
                    borderRadius: '15px 15px 0 15px',
                    zIndex: 2,
                    bottom: '10px',
                    right: '20px',
                    backgroundColor: theme.palette.primary.main,
                    marginLeft: 'auto',
                    '&:focus': {
                        outline: 'none !important'
                    },
                    '&:hover': {
                        backgroundColor: '#ffe268',
                        color: '#222'
                    }
                },
                open: {
                    '&:focus': {
                        outline: 'none !important'
                    }
                },
                close: {
                    '&:focus': {
                        outline: 'none !important'
                    }
                },
                fabIcon: {
                    fontSize: '32px',
                    paddingTop: 5,
                    color: '#fff',
                    '&:hover': {
                        color: '#222'
                    }
                },
                widgetName: {
                    color: '#fff',
                    padding: '5px',
                    textTransform: 'capitalize',
                    '&:hover': {
                        color: '#222'
                    }
                },
                minus: {
                    position: 'absolute',
                    right: '0',
                    paddingRight: '10px',
                    cursor: 'pointer',
                    color: '#fff'
                }
            }
        },
    theme1: {
        floatButton: {
            testcontainer: {
                position: 'fixed',
               // width: '60%',
                height: 'calc(100vh - 200px)',
                backgroundColor: theme.palette.primary.contrastText,
                bottom: 55,
                right: 0,
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '300px',
                zIndex: 2,
                margin: '0 20px 20px 0',
                //border: '1px solid #ffe268',
                boxShadow: '0 1px 6px rgb(32 33 36 / 28%)',
                borderRadius: '12px'
            },
            testheader: {
                height: '75px',
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '12px 12px 0 0'
            },
            headerLogo: {
                height: '25px'
            },
            hide: {
                display: 'none',
              },
            outline: {
                position: 'fixed',
                //borderRadius: '15px 15px 0 15px',
                zIndex: 2,
                bottom: '10px',
                right: '20px',
                backgroundColor: theme.palette.primary.main,
                marginLeft: 'auto',
                '&:focus': {
                    outline: 'none !important'
                },
                '&:hover': {
                    backgroundColor: '#ffe268',
                    color: '#222'
                }
            },
            open: {
                '&:focus': {
                    outline: 'none !important'
                }
            },
            close: {
                '&:focus': {
                    outline: 'none !important'
                }
            },
            fabIcon: {
                fontSize: '32px',
                paddingTop: 5,
                color: '#fff',
                '&:hover': {
                    color: '#222'
                }
            },
            widgetName: {
                color: '#fff',
                padding: '5px',
                textTransform: 'capitalize',
                '&:hover': {
                    color: '#222'
                }
            },
            minus: {
                position: 'absolute',
                right: '0',
                paddingRight: '10px',
                cursor: 'pointer',
                color: '#f44336'
            }
        }
    }
    }
    return themeConfig
}


const useThemeConfig = (theme) => {
  return getTheme(theme);
};

export default useThemeConfig;
