import { Box, Button, Divider, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { DiscordIcon } from 'ui-component/SvgIcon';

import DefaultImage from 'assets/images/default.png';
import { useNavigate } from 'react-router-dom';
import { ProjectStatusValue, CollabStatusValue } from 'components';
import { useSelector } from 'store';
/*eslint-disable */

const ListItem = ({ data }: { data: any }) => {
    const { palette } = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width:768px)');
    const handleApplyClick = (id: string) => navigate(`${id}`);

    const { user } = useSelector((state) => state.auth);
    return (
        <Stack
            sx={{
                p: 3,
                gap: 3,
                width: isMobile ? '100%' : 331,
                bgcolor: '#F1F1F1',
                border: '1px solid #E7E7E7',
                alignItems: 'center'
            }}
        >
            <Stack
                sx={{
                    flexDirection: isMobile ? 'row' : 'column',
                    gap: '14px',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%',
                    position: 'relative'
                }}
            >
                <Stack alignItems="center">
                    <Box
                        component="img"
                        src={
                            data.server.icon
                                ? `https://cdn.discordapp.com/icons/${data.serverId}/${data.server.icon}.png?size=1024`
                                : DefaultImage
                        }
                        sx={{
                            width: '100%',
                            borderRadius: '8px',
                            objectFit: 'cover',
                            backgroundSize: 'cover',
                            maxWidth: '250px',
                            height: '10rem'
                        }}
                    />
                    {isMobile && (
                        <Stack
                            sx={{
                                mt: 2,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: 97,
                                '& svg': {
                                    width: 30,
                                    fill: 'rgb(20, 21, 34)',
                                    height: 25
                                }
                            }}
                        >
                            <TwitterIcon
                                sx={{ cursor: 'pointer' }}
                                onClick={() => window.open(`https://twitter.com/${data.twitterLink}`, '_black')}
                            />
                            <Stack
                                sx={{ cursor: 'pointer' }}
                                onClick={() => window.open(`https://discord.gg/${data.discordLink}`, '_black')}
                            >
                                <DiscordIcon />
                            </Stack>
                        </Stack>
                    )}
                </Stack>
                <Box width="100%">
                    <Typography align={isMobile ? 'left' : 'center'} fontSize={16} fontWeight={700} mt={0.25}>
                        {data.server.name}
                    </Typography>
                    <Typography align={isMobile ? 'left' : 'center'} sx={{ textOverflow: 'ellipsis', overflow: 'hidden', height: '60px' }}>
                        {data.description}
                    </Typography>
                    {data.userType === 2 && (
                        <Stack
                            sx={{
                                position: 'absolute',
                                background: '#01C29A',
                                top: isMobile ? '-23px' : '0',
                                right: '0',
                                width: '110px',
                                height: '28px',
                                color: '#FFFFFF'
                            }}
                        >
                            Influencer
                        </Stack>
                    )}
                    {data.userType === 3 && (
                        <Stack
                            sx={{
                                position: 'absolute',
                                background: '#01C29A',
                                top: isMobile ? '-23px' : '0',
                                right: '0',
                                width: '110px',
                                height: '28px',
                                color: '#FFFFFF'
                            }}
                        >
                            DAO
                        </Stack>
                    )}
                    <Box sx={{ pt: 2 }} />
                    <Divider sx={{ borderColor: palette.grey[600] }} />
                    <Stack
                        sx={{
                            gap: 2,
                            '& div': {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                '& p': {
                                    fontSize: '12px'
                                }
                            }
                        }}
                    >
                        <Stack mt={2}>
                            <Typography>Project Status</Typography>
                            <Typography>{ProjectStatusValue[data.projectStatus - 1].name}</Typography>
                        </Stack>
                        <Stack>
                            <Typography>Collabs</Typography>
                            <Stack alignItems="center" gap={1}>
                                <Box
                                    sx={{
                                        width: 12,
                                        height: 12,
                                        bgcolor: data.collabStatus === 1 ? '#01C29A' : 'red',
                                        borderRadius: '100px'
                                    }}
                                />
                                <Typography>{CollabStatusValue[data.collabStatus - 1].name}</Typography>
                            </Stack>
                        </Stack>

                        <Stack>
                            <Typography>Server Id</Typography>
                            <Typography>{data.serverId}</Typography>
                        </Stack>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ width: '100%' }}
                            size="large"
                            disabled={user.userid === data.userId || data.collabStatus === 2}
                            onClick={() => handleApplyClick(data._id)}
                        >
                            Apply for collab
                        </Button>
                        <Divider sx={{ borderColor: palette.grey[600] }} />
                    </Stack>
                </Box>
            </Stack>
            {!isMobile && (
                <Stack
                    sx={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: 97,
                        '& svg': {
                            width: 30,
                            fill: 'rgb(20, 21, 34)',
                            height: 25
                        }
                    }}
                >
                    <TwitterIcon
                        sx={{ cursor: 'pointer' }}
                        onClick={() => window.open(`https://twitter.com/${data.twitterLink}`, '_black')}
                    />
                    <Stack sx={{ cursor: 'pointer' }} onClick={() => window.open(`https://discord.gg/${data.discordLink}`, '_black')}>
                        <DiscordIcon />
                    </Stack>
                </Stack>
            )}
        </Stack>
    );
};
export default ListItem;
