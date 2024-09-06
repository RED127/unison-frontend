import { Fragment, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, Box, Badge, Menu, MenuItem, Typography, Link, Divider, useTheme, Avatar, useMediaQuery, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'store';

import { FullLogoIcon, AlarmIcon } from 'ui-component/SvgIcon';
import DefaultImg from 'assets/images/project.svg';
import useApi from 'hooks/userApi';
import { SetNotificationData } from 'store/reducers/notification';

const Header = () => {
    const navigate = useNavigate();
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const isMobile = useMediaQuery('(max-width:768px)');
    const { readNotification, allReadNotification } = useApi();
    const { notification } = useSelector((state) => state.notification);
    const { user } = useSelector((state) => state.auth);
    const [anchorProfileEl, setAnchorProfileEl] = useState<null | HTMLElement>(null);
    const [anchorAlertEl, setAnchorAlertEl] = useState<null | HTMLElement>(null);
    const openProfile = Boolean(anchorProfileEl);
    const openAlert = Boolean(anchorAlertEl);
    const handleProfileClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorProfileEl(event.currentTarget);
    };
    const handleAlertClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorAlertEl(event.currentTarget);
    };
    const handleProfileClose = () => {
        setAnchorProfileEl(null);
    };
    const handleProfilePage = () => {
        navigate('/profile');
        handleProfileClose();
    };
    const handleAlertClose = () => {
        setAnchorAlertEl(null);
    };

    const AllReadNotification = async () => {
        if (notification && notification.length) {
            await allReadNotification();
            dispatch(SetNotificationData([]));
        }
    };

    const ReadNotification = async (item: any) => {
        const { data } = await readNotification({ _id: item._id });
        dispatch(SetNotificationData(data));
        navigate('/dashboard');
    };

    return (
        <>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    width: '100%',
                    '& .Logo path': {
                        fill: '#141522'
                    }
                }}
            >
                <a href="/" style={{ display: 'flex', cursor: 'pointer' }}>
                    <Box className="Logo">
                        <FullLogoIcon />
                    </Box>
                </a>
                <Stack direction="row" alignItems="center" gap={3}>
                    <IconButton sx={{ padding: 0 }} onClick={handleAlertClick}>
                        <Box
                            sx={{
                                width: 52,
                                height: 52,
                                borderRadius: '100px',
                                border: '1px solid #F5F5F7',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {notification && notification.length ? (
                                <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
                                    <AlarmIcon />
                                </Badge>
                            ) : (
                                <Badge color="secondary" overlap="circular">
                                    <AlarmIcon />
                                </Badge>
                            )}
                        </Box>
                    </IconButton>
                    <IconButton sx={{ padding: 0 }} onClick={handleProfileClick}>
                        <Avatar
                            sx={{ width: 52, height: 52 }}
                            alt="Avatar"
                            src={`https://cdn.discordapp.com/avatars/${user.userid}/${user.avatar}.png`}
                        />
                    </IconButton>
                </Stack>
            </Stack>

            <Menu
                id="basic-menu"
                anchorEl={anchorProfileEl}
                open={openProfile}
                onClose={handleProfileClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                <MenuItem onClick={handleProfilePage}>Edit Profile</MenuItem>
            </Menu>

            <Menu
                id="basic-menu"
                anchorEl={anchorAlertEl}
                open={openAlert}
                onClose={handleAlertClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                <MenuItem sx={{ opacity: '1 !important' }}>
                    <Stack
                        sx={{
                            padding: '2px 0',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            minWidth: isMobile ? '100%' : '350px',
                            gap: 3
                        }}
                    >
                        <Typography fontSize={20} fontWeight={700}>
                            Notifications
                        </Typography>
                        <Link sx={{ cursor: 'pointer' }} onClick={AllReadNotification}>
                            Mark all as read
                        </Link>
                    </Stack>
                </MenuItem>
                <Divider />
                {notification.map((item: any, i: any) => (
                    <Fragment key={i}>
                        <MenuItem onClick={() => ReadNotification(item)}>
                            <Stack
                                sx={{
                                    padding: '7px 0',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '18px'
                                }}
                            >
                                <Box
                                    component="img"
                                    sx={{ width: 40, height: 40, borderRadius: 1 }}
                                    src={
                                        item.server.icon
                                            ? `https://cdn.discordapp.com/icons/${item.server.id}/${item.server.icon}.png?size=1024`
                                            : DefaultImg
                                    }
                                />
                                <Stack gap={1}>
                                    <Typography fontSize={16}>
                                        <b>{item.title}</b> by <b>{item.rquser.username}.</b>
                                    </Typography>
                                    <Typography color={palette.grey[700]} fontWeight={700}>
                                        {item.datestr}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </MenuItem>
                        <Box padding="0 18px">
                            <Divider />
                        </Box>
                    </Fragment>
                ))}
            </Menu>
        </>
    );
};

export default Header;
