import { memo, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Menu, List, ListItemButton, ListItemIcon, ListItemText, Stack, Button, Typography, useTheme } from '@mui/material';
import { useDispatch } from 'store';

import navigation from 'navigation/menu';
import { Logout } from 'store/reducers/auth';
import { QuestionIcon } from 'ui-component/SvgIcon';

const Sidebar = () => {
    const { palette } = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [anchorAlertEl, setAnchorAlertEl] = useState<null | HTMLElement>(null);
    const openAlert = Boolean(anchorAlertEl);

    const location = useLocation();

    const handleAlertClose = () => {
        setAnchorAlertEl(null);
    };

    const handleAlertClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorAlertEl(event.currentTarget);
    };

    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number, url: string) => {
        if (url === '/logout') {
            dispatch(Logout({}));
        } else {
            navigate(url);
        }
    };

    useEffect(() => {
        navigation.forEach((row: any, index: number) => {
            if (location.pathname.indexOf(row.url) === 0 && row.url !== '/') {
                setSelectedIndex(index);
            }
        });
    }, [location]);

    return (
        <>
            <List
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    background: '#FFFFFF',
                    zIndex: 100,
                    gap: 2,
                    px: 2,
                    '& path': { stroke: 'rgb(142, 146, 188)' }
                }}
            >
                {navigation.map((row, index) => (
                    <ListItemButton
                        sx={{ pt: 2, gap: 0.5, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
                        key={row.id}
                        selected={selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index, row.url)}
                    >
                        <ListItemIcon>{row.icon}</ListItemIcon>
                        <ListItemText sx={{ display: 'flex', flex: 'unset' }} primary={row.title} />
                    </ListItemButton>
                ))}
            </List>

            <Button sx={{ position: 'fixed', zIndex: 1, bottom: 80, right: -20 }} onClick={handleAlertClick}>
                <QuestionIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorAlertEl}
                open={openAlert}
                onClose={handleAlertClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
                sx={{
                    '& .MuiMenu-list': { p: 0 },
                    '& .MuiPopover-paper': { borderRadius: 3, bottom: 160, top: 'unset !important', left: 'unset !important', right: 50 }
                }}
            >
                <Stack sx={{ height: 274, width: 200, alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                    <Box
                        sx={{
                            background: '#181818',
                            padding: '59px 16px 16px',
                            width: '100%',
                            height: '100%',
                            borderRadius: '10px',
                            overflow: 'hidden'
                        }}
                    >
                        <Box
                            sx={{
                                '& div': {
                                    width: 160,
                                    height: 160,
                                    position: 'absolute',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    borderRadius: 100
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    left: -94,
                                    top: -100
                                }}
                            />
                            <Box sx={{ left: 120, top: 170 }} />
                        </Box>
                        <Stack justifyContent="space-between" height="100%">
                            <Stack gap="12px" textAlign="center" display="block" color={palette.common.white}>
                                <Typography fontWeight={600} mt={3} gap={5} fontSize="16px" color="inherit">
                                    Help Center
                                </Typography>
                                <Typography color="inherit" fontSize={12}>
                                    Having any trouble, queries or suggestions?
                                </Typography>
                                <Typography color="inherit" margin={0} padding={0} fontSize={12}>
                                    Please contact us.
                                </Typography>
                            </Stack>
                            <Button
                                variant="contained"
                                color="inherit"
                                sx={{
                                    padding: '12px 22px',
                                    lineHeight: '15px'
                                }}
                                onClick={() => window.open('https://discord.gg/ZWJrvRA7KQ', '_black')}
                            >
                                Join our discord
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Menu>
        </>
    );
};

export default memo(Sidebar);
