import { createTheme } from '@mui/material';

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'white'
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: '24px'
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: '24px 32px',
                    borderColor: '#313132'
                }
            }
        },
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    background: '#000'
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: '24px'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                subtitle1: {
                    color: 'rgba(254, 254, 254, 0.8)',
                    fontSize: '14px'
                },
                subtitle2: {
                    color: 'rgba(254, 254, 254, 0.4)'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    border: '1px solid #B3B3B3 !important'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontWeight: 500,
                    textTransform: 'capitalize',
                    boxShadow: 'none',
                    ':disabled': {
                        background: '#6B6B6B',
                        color: '#F3F3F3'
                    }
                },
                containedSizeSmall: {
                    padding: '4px 16px',
                    fontSize: '12px'
                },
                containedSizeMedium: {
                    padding: '10px 24px',
                    fontSize: '12px'
                },
                containedSizeLarge: {
                    padding: '15px',
                    fontSize: '12px'
                },
                colorInherit: {
                    color: '#141522',
                    background: '#F3F3F3',
                    padding: '12px 24px',
                    fontSize: '12px',
                    lineHeight: '18px',
                    fontWeight: 600,
                    ':hover': {
                        color: '#141520',
                        background: '#e3e3e3'
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    fontSize: '16px',
                    fontWeight: 500,
                    textTransform: 'none'
                },
                colorInherit: {
                    color: '#FEFEFE',
                    background: 'rgba(255, 255, 255, 0.1)',
                    ':hover': {
                        color: '#FFDD2D',
                        background: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    background: '#202225'
                }
            }
        },
        MuiSnackbar: {
            styleOverrides: {
                root: {
                    '& .MuiSnackbarContent-root': {
                        minWidth: 221,
                        padding: 16
                    },
                    '& .MuiSnackbarContent-message': {
                        padding: 0,
                        lineHeight: '24px',
                        fontSize: 14
                    },
                    '& .MuiSnackbarContent-action': {
                        marginLeft: 0
                    }
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#A0A0A3'
                }
            }
        },
        MuiBadge: {
            styleOverrides: {
                badge: {
                    backgroundColor: 'red'
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.5
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    color: '#8E92BC'
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 24
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    gap: 12,
                    '&:hover , &.Mui-selected': {
                        background: '#F5F5F7',
                        borderRadius: 10,
                        '& path': {
                            stroke: 'rgb(20, 21, 34)'
                        },
                        '& .MuiListItemText-root': {
                            color: '#141522',
                            '& span': {
                                fontWeight: '600'
                            }
                        }
                    }
                }
            }
        },

        MuiDivider: {
            styleOverrides: {
                root: {
                    background: '#817B7B',
                    width: '100%'
                }
            }
        },

        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: '#54577A',
                    borderRadius: 4
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '16px 24px',
                    borderBottom: '1px solid #AAAAAA',
                    fontWeight: 800
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#121212',
                    fontWeight: 800,
                    fontSize: 14
                }
            }
        }
    },
    palette: {
        common: {
            black: '#1a1a1a',
            white: '#F3F3F3'
        },
        primary: {
            light: '#F3F3F3',
            main: '#232323',
            dark: '#323131',
            200: '#595959',
            800: '#54577A'
        },
        secondary: {
            light: '#54577A',
            main: '#B3B3B3',
            dark: '#54577A',
            200: '#54577A',
            800: '#54577A'
        },
        error: {
            light: '#54577A',
            main: '#ff6f1a',
            dark: '#54577A'
        },
        warning: {
            light: '#54577A',
            main: '#F3F3F3',
            dark: '#54577A'
        },
        success: {
            light: 'rgb(102, 187, 106)',
            200: '#54577A',
            main: 'rgb(102, 187, 106)',
            dark: '#54577A'
        },
        grey: {
            50: '#E6E6E6',
            100: '#B3B3B3',
            500: '#F5F1F1',
            600: '#595959',
            700: '#808080',
            900: '#54577A'
        },
        text: {
            primary: '#121212',
            secondary: '#595959'
        },
        divider: '#B3B3B3',
        background: {
            paper: '#F3F3F3',
            default: '#F3F3F3'
        }
    }
});

export default theme;
