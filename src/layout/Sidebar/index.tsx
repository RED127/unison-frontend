import { memo, useEffect, useState } from 'react';
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, useTheme } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'store';
import { QuestionIcon } from 'ui-component/SvgIcon';

import Menu from 'navigation/menu';
import { Logout } from 'store/reducers/auth';

const Sidebar = () => {
    const { palette } = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const location = useLocation();

    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number, url: string) => {
        if (url === '/logout') {
            dispatch(Logout({}));
        } else {
            navigate(url);
        }
    };

    useEffect(() => {
        Menu.forEach((row: any, index: number) => {
            if (location.pathname.indexOf(row.url) === 0 && row.url !== '/') {
                setSelectedIndex(index);
            }
        });
    }, [location]);

    return (
        <Box component="nav" aria-label="mailbox folders" height="100%" p="32px 37px">
            <PerfectScrollbar style={{ height: '100%' }} component="div">
                <Stack justifyContent="space-between" height="100%">
                    <List
                        sx={{
                            '& path': {
                                stroke: 'rgb(142, 146, 188)'
                            }
                        }}
                    >
                        {Menu.map((row, index) => (
                            <ListItem disablePadding key={row.id}>
                                <ListItemButton
                                    selected={selectedIndex === index}
                                    onClick={(event) => handleListItemClick(event, index, row.url)}
                                >
                                    <ListItemIcon>{row.icon}</ListItemIcon>
                                    <ListItemText primary={row.title} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Stack sx={{ height: 274, alignItems: 'center', position: 'relative' }}>
                        <Box sx={{ position: 'absolute', zIndex: 1, top: -18 }}>
                            <QuestionIcon />
                        </Box>
                        <Box
                            sx={{
                                background: '#181818',
                                padding: '59px 16px 16px',
                                width: '100%',
                                height: '90.5%',
                                position: 'absolute',
                                bottom: 0,
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
                                    <Typography fontWeight={600} gap={5} fontSize="16px" color="inherit">
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
                </Stack>
            </PerfectScrollbar>
        </Box>
    );
};

export default memo(Sidebar);
