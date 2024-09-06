import { Button, Stack, Table, TableHead, TableCell, TableRow, TableBody, Avatar, useTheme } from '@mui/material';

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
        token: 'NEAR'
    },
    {
        project: {
            avatar: Img2,
            name: 'Cynics NFT'
        },
        reward: 500,
        token: 'NVRS'
    },
    {
        project: {
            avatar: Img3,
            name: 'Tribes of NEAR'
        },
        reward: 25,
        token: 'NAUT'
    },
    {
        project: {
            avatar: Img4,
            name: 'Gaming Guild'
        },
        reward: 5000,
        token: 'NEKO'
    }
];

const Unclaimed = () => {
    const { palette } = useTheme();

    return (
        <Stack gap={4}>
            <Table
                sx={{
                    maxWidth: 500,
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
                        <TableCell>Reward</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {DataList.map((row, i) => (
                        <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                <Stack direction="row" gap={1.25} alignItems="center">
                                    <Avatar sx={{ width: 40, height: 40 }} alt="Avatar" src={row.project.avatar} />
                                    {row.project.name}
                                </Stack>
                            </TableCell>
                            <TableCell>
                                {row.reward} {row.token}
                            </TableCell>
                            <TableCell>
                                <Button size="small" variant="contained">
                                    Claim
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Stack>
    );
};
export default Unclaimed;
