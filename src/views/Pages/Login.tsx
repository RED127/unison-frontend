import { useEffect } from 'react';
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import { BASE_PATH } from 'config';
import { LogoIcon } from 'ui-component/SvgIcon';
import { useNavigate } from 'react-router-dom';

import useApi from 'hooks/userApi';
import { useSelector } from 'store';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import Logo from 'assets/images/Logo_Transparent.png';
/*eslint-disable */

const LoginPage = () => {
    const { goLoginDiscord } = useApi();
    const isMobile = useMediaQuery('(max-width:768px)');
    const { isLoggedIn } = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const { palette } = useTheme();

    const handleDiscordLogin = async () => {
        await goLoginDiscord();
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate(BASE_PATH);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Stack
            sx={{
                bgcolor: 'white',
                flexDirection: isMobile ? 'column' : 'row',
                height: isMobile ? '100%' : '100vh',
                width: '100vw',
                p: 3,
                position: 'relative'
            }}
        >
            <Stack
                sx={{
                    bgcolor: palette.common.black,
                    maxWidth: isMobile ? '100%' : 455,
                    height: '100%',
                    alignItems: 'center',
                    gap: 3,
                    borderRadius: 5
                }}
            >
                <Stack width="100%" p="32px" gap={11} justifyContent="space-between" height="100%">
                    <Box mt="15%">
                        <LogoIcon />
                    </Box>
                    <Stack gap={3} mt="3px" color={palette.common.white}>
                        <Stack
                            sx={{
                                background: '#E6E6E6',
                                borderRadius: '6px',
                                width: '121px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: 800,
                                    color: '#1B1B1B'
                                }}
                            >
                                Unison is
                            </Typography>
                        </Stack>
                        <Typography
                            sx={{
                                fontSize: 40,
                                lineHeight: '48px',
                                fontWeight: 700
                            }}
                        >
                            A Collab Manager&apos;s Best Friend
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 16,
                                fontWeight: 400,
                                textAlign: 'left'
                            }}
                        >
                            Discover and request collaborations with your favorite Projects and Influencers
                        </Typography>
                    </Stack>
                    <Stack color={palette.common.white} flexDirection="row" alignItems={'center'} justifyContent="center">
                        <Box
                            component="img"
                            src={Logo}
                            sx={{
                                height: '70px',
                                width: '70px'
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: 14,
                                lineHeight: '48px',
                                fontWeight: 800,
                                textAlign: 'center'
                            }}
                        >
                            Powered By Nearverse Labs
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                sx={{
                    py: isMobile ? 10 : 0,
                    width: isMobile ? '100%' : '74%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Stack
                    gap={8}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Stack gap={2} textAlign="center">
                        <Typography
                            sx={{
                                fontSize: 40,
                                lineHeight: '48px',
                                fontWeight: 500
                            }}
                        >
                            Hello Again!
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 20,
                                lineHeight: '30px',
                                fontWeight: 400,
                                color: '#595959'
                            }}
                        >
                            Manage your project collaborations seamlessly
                        </Typography>
                    </Stack>
                    <Button
                        variant="contained"
                        color="inherit"
                        onClick={handleDiscordLogin}
                        sx={{
                            border: '2px solid #121212',
                            boxShadow: '6px 6px 0px #000000',
                            padding: '16px ',
                            fontSize: 16,
                            fontWeight: 700,
                            borderRadius: '6px',
                            width: isMobile ? '100%' : 305,
                            lineHeight: '160%'
                        }}
                    >
                        Login With Discord
                    </Button>
                </Stack>
            </Stack>
            <Stack
                sx={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '40px'
                }}
            >
                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2
                    }}
                >
                    <TwitterIcon sx={{ cursor: 'pointer' }} onClick={() => window.open('https://twitter.com/Nearverselabs', '_black')} />
                    <LanguageIcon sx={{ cursor: 'pointer' }} onClick={() => window.open('https://www.nearverselabs.com', '_black')} />
                </Stack>
            </Stack>
        </Stack>
    );
};
export default LoginPage;
