import {
    Button,
    Divider,
    Stack,
    Typography,
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Avatar,
    Link,
    IconButton,
    useTheme
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import DefaultImg from 'assets/images/project.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CollabData = [
    {
        project: {
            avatar: '',
            name: 'Near Tribes'
        },
        type: 'WL Request',
        format: 'FCFS',
        sports: 50,
        sportsFilled: '10/50',
        requestedBy: 'Unison',
        Status: 'In Progress'
    },
    {
        project: {
            avatar: '',
            name: 'Near Tribes'
        },
        type: 'WL Request',
        format: 'FCFS',
        sports: 50,
        sportsFilled: '10/50',
        requestedBy: 'Unison',
        Status: 'In Progress'
    }
];

const LiveCampaigns = [
    {
        project: {
            avatar: '',
            name: 'Near Tribes'
        },
        endsIn: 'Ends in 1hr 10m 50s',
        reward: 1,
        totalRewards: 10,
        claimType: 'Raffle',
        requirements: 'Like & Retweet',
        status: 'Live',
        tweetLink: false
    },
    {
        project: {
            avatar: '',
            name: 'Near Tribes'
        },
        endsIn: 'Ends in 2hr 40m 10s',
        reward: 5,
        totalRewards: 50,
        claimType: 'Raffle',
        requirements: 'Like & Retweet',
        status: 'Live',
        tweetLink: false
    },
    {
        project: {
            avatar: '',
            name: 'Near Tribes'
        },
        endsIn: 'Ends in 1hr 10m 50s',
        reward: 2,
        totalRewards: 50,
        claimType: 'Raffle',
        requirements: 'Like & Retweet',
        status: 'Live',
        tweetLink: true
    },
    {
        project: {
            avatar: '',
            name: 'Near Tribes'
        },
        endsIn: 'Ends in 2hr 40m 10s',
        reward: 5,
        totalRewards: 50,
        claimType: 'Raffle',
        requirements: 'Like & Retweet',
        status: 'Live',
        tweetLink: true
    }
];

const DashboardPage = () => {
    const navigate = useNavigate();
    const { palette } = useTheme();
    const handleAddNewCampaign = () => navigate('new_campaign');

    return (
        <Stack gap={4}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack gap="14px">
                    <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                        New Collab Requests
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 400 }}>
                        This information will be displayed publicly.
                    </Typography>
                </Stack>
                <Stack>
                    <Link>View All</Link>
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
                        <TableCell>Project/ Username</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Format</TableCell>
                        <TableCell>Spots</TableCell>
                        <TableCell>Requested By </TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {CollabData.map((row, i) => (
                        <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                <Stack direction="row" gap={1.25} alignItems="center">
                                    <Avatar sx={{ width: 40, height: 40 }} alt="Avatar" src={DefaultImg} />
                                    {row.project.name}
                                </Stack>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" size="small">
                                    {row.type}
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" size="small">
                                    {row.format}
                                </Button>
                            </TableCell>
                            <TableCell>{row.sports}</TableCell>
                            <TableCell>
                                <Stack direction="row" gap={1.25} alignItems="center">
                                    <Avatar sx={{ width: 40, height: 40 }} alt="Avatar" src={DefaultImg} />
                                    {row.requestedBy}
                                </Stack>
                            </TableCell>
                            <TableCell>
                                <Stack direction="row" gap={1.5}>
                                    <Button variant="contained" size="small" sx={{ padding: '4px 16px' }}>
                                        Approve
                                    </Button>
                                    <Button disabled variant="contained" size="small" sx={{ padding: '4px 16px' }}>
                                        Reject
                                    </Button>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Divider />

            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack gap="14px">
                    <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                        Live Campaigns
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 400 }}>
                        This information will be displayed publicly.
                    </Typography>
                </Stack>
                <Stack gap={3} direction="row" alignItems="center">
                    <Button variant="contained" color="primary" size="medium" sx={{ height: 42 }} onClick={handleAddNewCampaign}>
                        + Create New Campaigns
                    </Button>
                    <Link>View All</Link>
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
                        <TableCell>Project</TableCell>
                        <TableCell>Ends In</TableCell>
                        <TableCell>Reward</TableCell>
                        <TableCell>Total Rewards</TableCell>
                        <TableCell>Claim Type</TableCell>
                        <TableCell>Requirements</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Tweet Link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {LiveCampaigns.map((row, i) => (
                        <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                <Stack direction="row" gap={1.25} alignItems="center">
                                    <Avatar sx={{ width: 40, height: 40 }} alt="Avatar" src={DefaultImg} />
                                    {row.project.name}
                                </Stack>
                            </TableCell>
                            <TableCell>{row.endsIn}</TableCell>
                            <TableCell>{row.reward} Near</TableCell>
                            <TableCell>{row.totalRewards} Near</TableCell>
                            <TableCell>{row.claimType}</TableCell>
                            <TableCell>{row.requirements}</TableCell>
                            <TableCell>
                                <Button variant="contained" size="small">
                                    {row.status}
                                </Button>
                            </TableCell>
                            <TableCell>
                                <IconButton size="large" color="success" disabled={!row.tweetLink}>
                                    <TwitterIcon
                                        sx={{
                                            fill: palette.text.primary,
                                            opacity: row.tweetLink ? 1 : 0.5
                                        }}
                                    />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Stack gap={2.5} sx={{ maxWidth: 778 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack gap="14px">
                        <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                            My Projects List
                        </Typography>
                    </Stack>
                    <Stack gap="27px" direction="row">
                        <ArrowBackIosIcon />
                        <ArrowForwardIosIcon />
                    </Stack>
                </Stack>

                <Stack gap={3} direction="row" justifyContent="space-between">
                    <Stack
                        sx={{
                            padding: '23px 20px',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '67px',
                            bgcolor: palette.common.white,
                            border: '1px solid #E6E6E6',
                            borderRadius: 2
                        }}
                    >
                        <Stack direction="row" alignItems="center" gap="21px">
                            <Avatar sx={{ width: 40, height: 40 }} alt="Avatar" src={DefaultImg} />
                            <Typography color="text.primary" sx={{ fontSize: 16, fontWeight: 700 }}>
                                Project Zen
                            </Typography>
                        </Stack>
                        <Link fontSize={1.25} fontWeight={800}>
                            Edit Project Details
                        </Link>
                    </Stack>
                    <Stack
                        sx={{
                            padding: '23px 20px',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '67px',
                            bgcolor: palette.common.white,
                            border: '1px solid #E6E6E6',
                            borderRadius: 2
                        }}
                    >
                        <Stack direction="row" alignItems="center" gap="21px">
                            <Avatar sx={{ width: 40, height: 40 }} alt="Avatar" src={DefaultImg} />
                            <Typography color="text.primary" sx={{ fontSize: 16, fontWeight: 700 }}>
                                Project Zen
                            </Typography>
                        </Stack>
                        <Link fontSize={1.25} fontWeight={800}>
                            Edit Project Details
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
export default DashboardPage;
