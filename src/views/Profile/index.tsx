import { useState } from 'react';
import { useSelector } from 'store';
import {
    Divider,
    Select,
    OutlinedInput,
    MenuItem,
    useTheme,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Button,
    Card,
    Stack,
    Typography,
    Avatar
} from '@mui/material';

const DataList = [
    {
        name: 'NVRS',
        contractAddress: 'nearverse-token.near',
        deposited: 12000
    },
    {
        name: 'NEKO',
        contractAddress: 'v2-nekotoken.near',
        deposited: 20000
    },
    {
        name: 'NAUT',
        contractAddress: 'nautstaking.near',
        deposited: 400
    }
];

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

const ProfilePage = () => {
    const { palette } = useTheme();
    const { user } = useSelector((state) => state.auth);

    const [names, setNames] = useState([
        { label: 'NEAR', component: 'NEAR', active: true },
        { label: 'NVRS', component: 'NVRS', active: false },
        { label: 'NEKO', component: 'NEKO', active: false },
        { label: 'NAUT', component: 'NAUT', active: false }
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

    return (
        <Stack gap="43px">
            <Stack direction="row" gap={3} alignItems="center">
                <Avatar
                    sx={{ width: 52, height: 52 }}
                    alt="Avatar"
                    src={`https://cdn.discordapp.com/avatars/${user.userid}/${user.avatar}.png`}
                />
                <Stack gap={1}>
                    <Typography fontSize={24} fontWeight={600}>
                        Hi, {user.username}
                    </Typography>
                </Stack>
            </Stack>
            <Card sx={{ p: 3 }}>
                <Stack direction="row" gap={3} justifyContent="space-between" alignItems="center">
                    <Typography>Wallets</Typography>
                    <Button variant="contained" size="small">
                        Connect Wallet
                    </Button>
                </Stack>
            </Card>
            <Card sx={{ p: 3 }}>
                <Stack direction="row" gap={3} justifyContent="space-between" alignItems="center">
                    <Typography>Twitter</Typography>
                    <Button variant="contained" size="small">
                        Link Account
                    </Button>
                </Stack>
            </Card>
            <Card sx={{ p: 3 }}>
                <Stack justifyContent="space-between" direction="row">
                    <Stack width="100%">
                        <Typography>Token Balances</Typography>
                        <Typography>
                            These NEP Tokens Can be allocated as bounty for users that engage with your tweets. These can be withdrawn to
                            you wallet at any time
                        </Typography>
                    </Stack>
                    <Select
                        displayEmpty
                        onChange={handleChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => <>{selected || 'Select Token'}</>}
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
                </Stack>
                <Divider />
                <Table
                    sx={{
                        minWidth: 650,
                        border: 'none',
                        borderRadius: 2,
                        borderCollapse: 'unset',
                        bgcolor: palette.grey[500],
                        '& *': {
                            border: 'none'
                        }
                    }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    Token Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    Token Contract Address
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    Token Deposited
                                </Typography>
                            </TableCell>
                            <TableCell> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DataList.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.contractAddress}</TableCell>
                                <TableCell>{row.deposited}</TableCell>
                                <TableCell>
                                    <Button sx={{ textDecoration: 'underline' }} color="info" variant="text" size="small">
                                        Deposit
                                    </Button>
                                    <Button sx={{ textDecoration: 'underline' }} color="info" variant="text" size="small">
                                        Withdraw
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </Stack>
    );
};
export default ProfilePage;
