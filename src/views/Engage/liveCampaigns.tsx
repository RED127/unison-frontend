import { useState } from 'react';
import {
    Modal,
    Box,
    Divider,
    Button,
    Stack,
    Typography,
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Avatar,
    IconButton,
    useTheme,
    useMediaQuery,
    Pagination
} from '@mui/material';

import TwitterIcon from '@mui/icons-material/Twitter';
import ClearIcon from '@mui/icons-material/Clear';
import DefaultImg from 'assets/images/default1.png';
import Img1 from 'assets/images/1.png';
import Img2 from 'assets/images/2.png';
import Img3 from 'assets/images/3.png';
import Img4 from 'assets/images/4.png';

const DataList = [
    {
        project: {
            avatar: Img1,
            name: 'Near Degens'
        },
        endsIn: 'Ends in 1hr 10m 50s',
        reward: 1,
        totalRewards: 1,
        status: 'Live',
        engageLink: 'Live',
        tweet: 'Have you seen our monthly stats? With over 45 clien...'
    },
    {
        project: {
            avatar: Img2,
            name: 'Tribes of NEAR'
        },
        endsIn: 'Ends in 1hr 10m 50s',
        reward: 1,
        totalRewards: 1,
        status: 'Live',
        engageLink: 'Live',
        tweet: 'Just landed on #NEAR All interactions will be Consi...'
    },
    {
        project: {
            avatar: Img3,
            name: 'Gamers Guild'
        },
        endsIn: 'Ends in 1hr 10m 50s',
        reward: 1,
        totalRewards: 1,
        status: 'Live',
        engageLink: '',
        tweet: 'GM! Hope you re having a fantastic Monday. Updates..'
    },
    {
        project: {
            avatar: Img4,
            name: 'Gamers Guild'
        },
        endsIn: 'Ends in 1hr 10m 50s',
        reward: 1,
        totalRewards: 1,
        status: 'Live',
        engageLink: '',
        tweet: 'GM! Hope you re having a fantastic Monday. Updates..'
    },
    {
        project: {
            avatar: Img1,
            name: 'Gamers Guild'
        },
        endsIn: 'Ends in 1hr 10m 50s',
        reward: 1,
        totalRewards: 1,
        status: 'Live',
        engageLink: '',
        tweet: 'GM! Hope you re having a fantastic Monday. Updates..'
    },
    {
        project: {
            avatar: Img2,
            name: 'Gamers Guild'
        },
        endsIn: 'Ends in 1hr 10m 50s',
        reward: 1,
        totalRewards: 1,
        status: 'Live',
        engageLink: '',
        tweet: 'GM! Hope you re having a fantastic Monday. Updates..'
    },
    {
        project: {
            avatar: Img3,
            name: 'Gamers Guild'
        },
        endsIn: 'Ends in 1hr 10m 50s',
        reward: 1,
        totalRewards: 1,
        status: 'Live',
        engageLink: '',
        tweet: 'GM! Hope you re having a fantastic Monday. Updates..'
    },
    {
        project: {
            avatar: Img4,
            name: 'Gamers Guild'
        },
        endsIn: 'Ends in 1hr 10m 50s',
        reward: 1,
        totalRewards: 1,
        status: 'Live',
        engageLink: '',
        tweet: 'GM! Hope you re having a fantastic Monday. Updates..'
    },
    {
        project: {
            avatar: Img1,
            name: 'Gamers Guild'
        },
        endsIn: 'Ends in 1hr 10m 50s',
        reward: 1,
        totalRewards: 1,
        status: 'Live',
        engageLink: '',
        tweet: 'GM! Hope you re having a fantastic Monday. Updates..'
    },
    {
        project: {
            avatar: Img1,
            name: 'Gamers Guild'
        },
        endsIn: 'Ends in 1hr 10m 50s',
        reward: 1,
        totalRewards: 1,
        status: 'Live',
        engageLink: '',
        tweet: 'GM! Hope you re having a fantastic Monday. Updates..'
    },
    {
        project: {
            avatar: Img1,
            name: 'Gamers Guild'
        },
        endsIn: 'Ends in 1hr 10m 50s',
        reward: 1,
        totalRewards: 1,
        status: 'Live',
        engageLink: '',
        tweet: 'GM! Hope you re having a fantastic Monday. Updates..'
    }
];

const LiveCampaigns = () => {
    const { palette } = useTheme();
    const isMobile = useMediaQuery('(max-width:768px)');
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalCount, setTotalCount] = useState(DataList.length);
    const [winnerModal, setWinnerModal] = useState(false);

    const toggleModal = () => {
        setWinnerModal((prev) => !prev);
    };
    return (
        <>
            <Stack gap={4} mb={5}>
                <Stack direction="row" justifyContent="space-between">
                    <Stack gap="14px">
                        <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                            Live Campaigns
                        </Typography>
                        <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 400 }}>
                            The list of Tweets that are offering rewards
                        </Typography>
                    </Stack>
                </Stack>
                <Table
                    sx={{
                        minWidth: 650,
                        border: '1px solid #AAAAAA',
                        borderRadius: 2,
                        borderCollapse: 'unset',
                        bgcolor: palette.grey[500]
                    }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Project/User</TableCell>
                            <TableCell>Tweet</TableCell>
                            <TableCell>Ends In</TableCell>
                            <TableCell>Reward</TableCell>
                            <TableCell>Total Rewards</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Engage Link</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DataList.slice(0, pageSize).map((row, i) => (
                            <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    <Stack direction="row" gap={1.25} alignItems="center">
                                        <Avatar sx={{ width: 40, height: 40 }} alt="Avatar" src={row.project.avatar} />
                                        {row.project.name}
                                    </Stack>
                                </TableCell>
                                <TableCell>{row.tweet}</TableCell>
                                <TableCell>{row.endsIn}</TableCell>
                                <TableCell>{row.reward} Near</TableCell>
                                <TableCell>{row.totalRewards} Near</TableCell>
                                <TableCell>
                                    <Button variant="contained" size="small" onClick={toggleModal}>
                                        {row.status}
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <IconButton size="large" color="success" onClick={toggleModal} disabled={!row.engageLink}>
                                        <TwitterIcon
                                            sx={{
                                                fill: palette.text.primary,
                                                opacity: row.engageLink ? 1 : 0.5
                                            }}
                                        />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Stack direction="row" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={5}>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <TwitterIcon sx={{ fill: palette.text.primary }} />
                            You haven’t participated yet
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <TwitterIcon sx={{ fill: palette.text.primary, opacity: 0.5 }} />
                            You have already entered
                        </Stack>
                    </Stack>
                    <Pagination
                        page={page}
                        count={Math.ceil(totalCount / pageSize)}
                        onChange={(e, p) => setPage(p)}
                        variant="outlined"
                        shape="rounded"
                    />
                </Stack>
            </Stack>
            <Modal open={winnerModal} onClose={toggleModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        height: '100vh',
                        minWidth: isMobile ? '85%' : 400,
                        bgcolor: 'background.paper',
                        paddding: '2rem',
                        boxShadow: 24
                    }}
                >
                    <Stack
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            padding: 2
                        }}
                    >
                        <Stack>
                            <Typography variant="h5">NEAR DEGENS</Typography>
                            <Typography variant="h6">Camaign Details</Typography>
                        </Stack>
                        <IconButton onClick={toggleModal}>
                            <ClearIcon />
                        </IconButton>
                    </Stack>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Box component="img" sx={{ width: '100%' }} src={DefaultImg} />
                        <Typography>
                            Please ensure you do the tasks below before clicking on
                            <br /> Verify & Enter:
                        </Typography>
                        <Stack gap={1} mt={2}>
                            <Typography sx={{ textDecoration: 'underline' }}>Like</Typography>
                            <Typography sx={{ textDecoration: 'underline' }}>Follow</Typography>
                            <Typography sx={{ textDecoration: 'underline' }}>Reweet</Typography>
                        </Stack>
                        <Stack gap={1} mt={2} direction="row" justifyContent="space-between">
                            <Button sx={{ width: '100%', gap: 1 }} variant="contained" size="small">
                                Goto Tweet
                                <TwitterIcon sx={{ fill: '#AAAAAA' }} />
                            </Button>
                            <Button sx={{ width: '100%', gap: 1 }} variant="contained" size="small">
                                Verify & Enter
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};
export default LiveCampaigns;
