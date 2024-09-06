import { useState } from 'react';
import {
    Box,
    Modal,
    Divider,
    Button,
    Stack,
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Pagination,
    Typography,
    Avatar,
    IconButton,
    useMediaQuery,
    useTheme
} from '@mui/material';

import ClearIcon from '@mui/icons-material/Clear';
import TwitterIcon from '@mui/icons-material/Twitter';
import DefaultImg from 'assets/images/project.svg';
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
        reward: 1,
        totalRewards: 1,
        claimType: 'Raffle',
        result: 'won'
    },
    {
        project: {
            avatar: Img2,
            name: 'Tribes of NEAR'
        },
        reward: 1,
        totalRewards: 1,
        claimType: 'Raffle',
        result: 'lost'
    },
    {
        project: {
            avatar: Img3,
            name: 'Gamers Guild'
        },
        reward: 1,
        totalRewards: 1,
        claimType: 'Raffle',
        result: 'lost'
    },
    {
        project: {
            avatar: Img4,
            name: 'Gamers Guild'
        },
        reward: 1,
        totalRewards: 1,
        claimType: 'Raffle',
        result: 'lost'
    },
    {
        project: {
            avatar: Img1,
            name: 'Gamers Guild'
        },
        reward: 1,
        totalRewards: 1,
        claimType: 'Raffle',
        result: ''
    },
    {
        project: {
            avatar: Img2,
            name: 'Gamers Guild'
        },
        reward: 1,
        totalRewards: 1,
        claimType: 'Raffle',
        result: ''
    },
    {
        project: {
            avatar: Img3,
            name: 'Gamers Guild'
        },
        reward: 1,
        totalRewards: 1,
        claimType: 'Raffle',
        result: 'won'
    },
    {
        project: {
            avatar: Img4,
            name: 'Gamers Guild'
        },
        reward: 1,
        totalRewards: 1,
        claimType: 'Raffle',
        result: 'won'
    },
    {
        project: {
            avatar: Img1,
            name: 'Gamers Guild'
        },
        reward: 1,
        totalRewards: 1,
        claimType: 'Raffle',
        result: 'won'
    },
    {
        project: {
            avatar: Img1,
            name: 'Gamers Guild'
        },
        reward: 1,
        totalRewards: 1,
        claimType: 'Raffle',
        result: 'won'
    },
    {
        project: {
            avatar: Img1,
            name: 'Gamers Guild'
        },
        reward: 1,
        totalRewards: 1,
        claimType: 'Raffle',
        result: 'won'
    }
];

const Expired = () => {
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
            <Stack gap={4}>
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
                            <TableCell>Reward</TableCell>
                            <TableCell>Total Rewards</TableCell>
                            <TableCell>Claim Type</TableCell>
                            <TableCell>Winners</TableCell>
                            <TableCell>Your Result</TableCell>
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
                                <TableCell>{row.reward} Near</TableCell>
                                <TableCell>{row.totalRewards} Near</TableCell>
                                <TableCell>{row.claimType}</TableCell>
                                <TableCell>
                                    <Button variant="contained" size="small" onClick={toggleModal}>
                                        View Winners
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <IconButton size="large" color="success">
                                        {!row.result && <TwitterIcon sx={{ fill: palette.text.primary, opacity: 0.5 }} />}
                                        {row.result === 'won' && <TwitterIcon sx={{ fill: '#01c29a' }} />}
                                        {row.result === 'lost' && <TwitterIcon sx={{ fill: '#ff4c5e' }} />}
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Stack direction="row" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={5}>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <TwitterIcon sx={{ fill: '#01c29a' }} />
                            You Won this Campaign
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <TwitterIcon sx={{ fill: '#ff4c5e' }} />
                            You lost this Campaign
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <TwitterIcon sx={{ fill: palette.text.primary, opacity: 0.5 }} />
                            You haven’t participated
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
                        <Typography>Winners</Typography>
                        <IconButton onClick={toggleModal}>
                            <ClearIcon />
                        </IconButton>
                    </Stack>
                    <Divider />
                    <Stack sx={{ padding: '1rem', display: 'block' }}>
                        {DataList.map((item: any, i) => (
                            <Stack sx={{ padding: '0.5rem 0' }} key={i}>
                                <Typography sx={{ cursor: 'pointer' }}>
                                    {item.project.name}#{item.project.name}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Box>
            </Modal>
        </>
    );
};
export default Expired;
