import { Button, Divider, Stack, Typography, Select, MenuItem, TextField, useMediaQuery } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const requirements = [
    { value: 'Follow', label: 'Follow' },
    { value: 'Like', label: 'Like' },
    { value: 'Retweet', label: 'Retweet' },
    { value: 'Quote Retweet', label: 'Quote Retweet' },
    { value: 'Minimum Follower Count', label: 'Minimum Follower Count' }
];

const tokens = [
    { value: 'NEAR', label: 'NEAR' },
    { value: 'NVRS', label: 'NVRS' },
    { value: 'NEKO', label: 'NEKO' }
];

const NewCampaign = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width:768px)');
    const gap = isMobile ? 0 : 9.5;
    const direction = isMobile ? 'column' : 'row';
    return (
        <Stack gap={4}>
            <Stack
                direction="row"
                gap="12px"
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                    navigate('/engage');
                }}
            >
                <Typography color="grey.100">{`<`}</Typography>
                <Typography color="grey.100">Go Back</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" sx={{ flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                <Stack gap="14px">
                    <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                        Create New Campaign
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 400 }}>
                        Fill Your Collaboration Details
                    </Typography>
                </Stack>
                <Stack justifyContent="center" sx={{ mt: isMobile ? 2 : 0 }}>
                    <Button variant="contained" color="primary" size="medium">
                        Create New Campaign
                    </Button>
                </Stack>
            </Stack>
            <Divider />
            <Stack
                gap={4}
                sx={{
                    '& .req-title': {
                        fontWeight: 600,
                        fontSize: 16,
                        color: 'text.primary'
                    },
                    '& .req-small-tle': {
                        fontWeight: 400,
                        fontSize: 14,
                        color: 'text.secondary'
                    },
                    '& .req-input': {
                        width: isMobile ? '100%' : 454
                    }
                }}
            >
                <Stack direction={direction} gap={gap}>
                    <Stack gap={1} width={250}>
                        <Typography className="req-title">Project /Username*</Typography>
                        <Typography className="req-small-tle">Your Twitter Username</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <TextField hiddenLabel defaultValue="Near Tribes" className="req-input" size="small" />
                    </Stack>
                </Stack>
                <Stack direction={direction} gap={gap}>
                    <Stack gap={1} width={250}>
                        <Typography className="req-title">Requirements*</Typography>
                        <Typography className="req-small-tle">Activities for Participants</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <Select id="demo-simple-select" value={1} sx={{ height: 40 }} className="req-input">
                            {requirements.map((item, key) => (
                                <MenuItem key={key} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </Stack>
                <Stack direction={direction} gap={gap}>
                    <Stack gap={1} width={250}>
                        <Typography className="req-title">Reward*</Typography>
                        <Typography className="req-small-tle">Amount and Token Type</Typography>
                    </Stack>
                    <Stack justifyContent="center" direction="row" width={455} gap={2}>
                        <TextField sx={{ maxWidth: '50%' }} label="Amount" defaultValue="" className="req-input" size="small" />
                        <Select id="demo-simple-select" value={1} sx={{ height: 40 }} className="req-input">
                            {tokens.map((item, key) => (
                                <MenuItem key={key} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </Stack>
                <Stack direction={direction} gap={gap}>
                    <Stack gap={1} width={250}>
                        <Typography className="req-title">Winners</Typography>
                        <Typography className="req-small-tle">No of Winners</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <TextField hiddenLabel defaultValue="" className="req-input" size="small" />
                    </Stack>
                </Stack>
                <Stack direction={direction} gap={gap}>
                    <Stack gap={1} width={250}>
                        <Typography className="req-title">Total Rewards*</Typography>
                        <Typography className="req-small-tle">Total = Reward x No of Winners</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <TextField hiddenLabel defaultValue="" className="req-input" size="small" />
                    </Stack>
                </Stack>
                <Stack direction={direction} gap={gap}>
                    <Stack gap={1} width={250}>
                        <Typography className="req-title">Duration*</Typography>
                        <Typography className="req-small-tle">Duration of the Campaign</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <TextField hiddenLabel defaultValue="" className="req-input" size="small" />
                    </Stack>
                </Stack>
                <Stack direction={direction} gap={gap}>
                    <Stack gap={1} width={250}>
                        <Typography className="req-title">Tweet Link/Tweet ID*</Typography>
                        <Typography className="req-small-tle">Paste the whole link or just the ID</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <TextField hiddenLabel defaultValue="" className="req-input" size="small" />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
export default NewCampaign;
