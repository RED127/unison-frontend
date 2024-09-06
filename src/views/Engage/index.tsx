import { useState } from 'react';
import { Button, Stack, Typography, InputBase, Select, OutlinedInput, MenuItem, styled, alpha } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from 'react-router-dom';

import LiveCampaigns from './liveCampaigns';
import Expired from './expired';
import Claimed from './claimed';
import Unclaimed from './unclaimed';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    width: 381,
    height: 52,
    border: '1px solid #B3B3B3'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: 0,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '100%',
    '& .MuiInputBase-input': {
        padding: '14px 28px',
        transition: theme.transitions.create('width'),
        width: '81%'
    }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 160,
            marginTop: '1%'
        }
    }
};

const getStyles = (data: any) => ({
    fontWeight: data.active === true ? 700 : 600,
    width: 160
});

const EngagePage = () => {
    const navigate = useNavigate();

    const [names, setNames] = useState([
        { label: 'Live Campaigns', active: true, component: 'LiveCampaigns' },
        { label: 'Expired', active: false, component: 'Expired' },
        { label: 'Claimed', active: false, component: 'Claimed' },
        { label: 'Unclaimed', active: false, component: 'Unclaimed' }
    ]);

    const [component, setComponent] = useState('LiveCampaigns');

    const handleChange = (event: any) => {
        const {
            target: { value }
        }: any = event;
        const data = names.map((row) => {
            if (row.label === value) {
                row.active = true;
                setComponent(row.component);
            } else {
                row.active = false;
            }
            return row;
        });
        setNames(data);
    };

    const handleAddNewCampaign = () => navigate('new_campaign');

    return (
        <Stack gap={4}>
            <Stack
                sx={{
                    gap: 2,
                    width: '100%',
                    justifyContent: 'space-between',
                    flexDirection: 'row'
                }}
            >
                {component === 'LiveCampaigns' ? (
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                    </Search>
                ) : (
                    <Stack direction="row" justifyContent="space-between">
                        <Stack gap="14px">
                            <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                                {component}
                            </Typography>
                            <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 400 }}>
                                {component === 'Expired' && 'These Engage-To-Earn campaigns have ended'}
                                {component === 'Claimed' && 'You have claimed these rewards!'}
                                {component === 'Unclaimed' && 'These are rewards yet to be claimed by you'}
                            </Typography>
                        </Stack>
                    </Stack>
                )}

                <Stack flexDirection="row" gap={3}>
                    <Select
                        displayEmpty
                        onChange={handleChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => <>{selected || 'Manager'}</>}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{
                            width: 170,
                            height: 42,
                            borderRadius: '6px',
                            padding: '12px 18px 12px 24px',
                            border: '1px solid #000000',
                            '& .MuiPaper-root': {
                                width: 160,
                                ml: '95px'
                            },
                            '& .MuiSelect-select': {
                                margin: 0,
                                padding: '0 !important'
                            }
                        }}
                    >
                        {names.map((row) => (
                            <MenuItem key={row.label} value={row.label} style={getStyles(row)} selected={row.active}>
                                {row.label}
                            </MenuItem>
                        ))}
                    </Select>

                    <Button variant="contained" color="primary" size="medium" sx={{ height: 42 }} onClick={handleAddNewCampaign}>
                        + Create New Campaigns
                    </Button>
                </Stack>
            </Stack>
            {component === 'LiveCampaigns' && <LiveCampaigns />}
            {component === 'Expired' && <Expired />}
            {component === 'Claimed' && <Claimed />}
            {component === 'Unclaimed' && <Unclaimed />}
        </Stack>
    );
};
export default EngagePage;
