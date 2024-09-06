import { useEffect, useState } from 'react';
import {
    Button,
    Card,
    Divider,
    Stack,
    Typography,
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Avatar,
    Badge,
    Modal,
    Box,
    TextareaAutosize,
    useMediaQuery,
    useTheme,
    Pagination
} from '@mui/material';
import DefaultImg from 'assets/images/project.svg';
import useApi from 'hooks/userApi';
import { CollabTypeValue, DisplayFormatValue, PageSize } from 'components';
import { useSelector } from 'store';
import ClearIcon from '@mui/icons-material/Clear';
/*eslint-disable */

const backgrounds: any = {
    0: 'orange',
    1: 'green',
    2: 'red',
    undefined: ''
};

const statusData: any = {
    0: 'Pending',
    1: 'Approved',
    2: 'Rejected',
    undefined: ''
};

const Received = () => {
    const { palette } = useTheme();
    const isMobile = useMediaQuery('(max-width:768px)');
    const { getMyCollabs, updateCollab } = useApi();
    const { user } = useSelector((state) => state.auth);

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(isMobile ? 2 : PageSize);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [winnerModal, setWinnerModal] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const [collabs, setCollabs] = useState<any[]>([]);
    const [collabitem, setCollabitem] = useState({
        _id: '',
        status: 0,
        userId: '',
        description: '',
        winneruser: []
    });

    const toggleModal = () => {
        setWinnerModal((prev) => !prev);
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const UpdateCollab = async (params: any) => {
        handleClose();
        await updateCollab(params);
        getMyCollabsAPI();
    };

    const getMyCollabsAPI = async () => {
        setLoading(true);
        const { data } = await getMyCollabs({ page, pageSize });
        setTotalCount(data.count);
        setCollabs(data.results);
        setLoading(false);
    };

    useEffect(() => {
        getMyCollabsAPI();
        // eslint-disable-next-line
    }, [page, pageSize]);

    return (
        <>
            <Stack direction="row" justifyContent="space-between">
                <Stack gap="14px">
                    <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                        Received Collab Requests
                    </Typography>
                </Stack>
            </Stack>
            {isMobile ? (
                <>
                    {collabs.map((row, i) => (
                        <Card sx={{ p: 2 }}>
                            <Stack sx={{ flexWrap: 'wrap', flexDirection: 'row', gap: 2 }}>
                                <Stack>
                                    <Typography>From</Typography>
                                    <Stack direction="row" gap={1.25} alignItems="center">
                                        <Avatar
                                            sx={{ width: 40, height: 40 }}
                                            alt="Avatar"
                                            src={
                                                row.rqserver.length
                                                    ? `https://cdn.discordapp.com/icons/${row.rqserver[0].id}/${row.rqserver[0].icon}.png?size=1024`
                                                    : DefaultImg
                                            }
                                        />
                                        {row.rqserver.length ? row.rqserver[0].name : 'others'}
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <Typography>To</Typography>
                                    <Stack direction="row" gap={1.25} alignItems="center">
                                        <Avatar
                                            sx={{ width: 40, height: 40 }}
                                            alt="Avatar"
                                            src={
                                                row.server.icon
                                                    ? `https://cdn.discordapp.com/icons/${row.server.id}/${row.server.icon}.png?size=1024`
                                                    : DefaultImg
                                            }
                                        />
                                        {row.server.name}
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <Typography>Type</Typography>
                                    <Button variant="contained" size="small">
                                        {/* {row.project.userType === 1
                                            ? CollabTypeValue[row.collabType - 1].name
                                            : InFLCollabTypeValue[row.collabType - 1].name} */}
                                        {CollabTypeValue[row.collabType - 1].name}
                                    </Button>
                                </Stack>
                                <Stack>
                                    <Typography>Format</Typography>
                                    <Button variant="contained" size="small">
                                        {DisplayFormatValue[row.format - 2] && DisplayFormatValue[row.format - 2].name}
                                    </Button>
                                </Stack>
                                <Stack>
                                    <Typography>Spots</Typography>
                                    {row.openedSpots}
                                </Stack>
                                <Stack>
                                    <Typography>Status</Typography>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        sx={{
                                            background: backgrounds[row.status]
                                        }}
                                    >
                                        {statusData[row.status]}
                                    </Button>
                                </Stack>
                                <Stack>
                                    <Typography>Requested By</Typography>
                                    <Stack direction="row" gap={1.25} alignItems="center">
                                        <Avatar
                                            sx={{ width: 40, height: 40 }}
                                            alt="Avatar"
                                            src={`https://cdn.discordapp.com/avatars/${row.user.userid}/${row.user.avatar}.png`}
                                        />
                                        {row.user.username}#{row.user.discriminator}
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <Typography>Actions</Typography>
                                    <Stack direction="row" gap={1.5}>
                                        {DisplayFormatValue[row.format - 2] &&
                                        row.status === 1 &&
                                        DisplayFormatValue[row.format - 2].id === 3 ? (
                                            <Button
                                                onClick={() => {
                                                    toggleModal();
                                                    setCollabitem(row);
                                                }}
                                                variant="contained"
                                                size="small"
                                                sx={{ padding: '4px 16px' }}
                                            >
                                                Winners
                                            </Button>
                                        ) : (
                                            <Button
                                                onClick={() => {
                                                    handleOpen();
                                                    setCollabitem(row);
                                                }}
                                                variant="contained"
                                                size="small"
                                                sx={{ padding: '4px 16px' }}
                                            >
                                                View Description
                                            </Button>
                                        )}
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Card>
                    ))}
                    {collabs.length !== totalCount && (
                        <Button disabled={loading} onClick={() => setPageSize(pageSize + 2)} variant="text" size="small">
                            Load more
                        </Button>
                    )}
                </>
            ) : (
                <>
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
                                <TableCell>From</TableCell>
                                <TableCell>To</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Format</TableCell>
                                <TableCell>Spots</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Requested By</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {collabs.map((row, i) => (
                                <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        <Stack direction="row" gap={1.25} alignItems="center">
                                            <Avatar
                                                sx={{ width: 40, height: 40 }}
                                                alt="Avatar"
                                                src={
                                                    row.rqserver.length
                                                        ? `https://cdn.discordapp.com/icons/${row.rqserver[0].id}/${row.rqserver[0].icon}.png?size=1024`
                                                        : DefaultImg
                                                }
                                            />
                                            {row.rqserver.length ? row.rqserver[0].name : 'others'}
                                        </Stack>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Stack direction="row" gap={1.25} alignItems="center">
                                            <Avatar
                                                sx={{ width: 40, height: 40 }}
                                                alt="Avatar"
                                                src={
                                                    row.server.icon
                                                        ? `https://cdn.discordapp.com/icons/${row.server.id}/${row.server.icon}.png?size=1024`
                                                        : DefaultImg
                                                }
                                            />
                                            {row.server.name}
                                        </Stack>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="contained" size="small">
                                            {CollabTypeValue[row.collabType - 1].name}
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="contained" size="small">
                                            {DisplayFormatValue[row.format - 2] && DisplayFormatValue[row.format - 2].name}
                                        </Button>
                                    </TableCell>
                                    <TableCell>{row.openedSpots}</TableCell>
                                    <TableCell
                                        sx={{
                                            '& .MuiBadge-badge': {
                                                background: backgrounds[row.status]
                                            }
                                        }}
                                    >
                                        <Badge color="primary" overlap="circular" badgeContent={statusData[row.status]} />
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" gap={1.25} alignItems="center">
                                            <Avatar
                                                sx={{ width: 40, height: 40 }}
                                                alt="Avatar"
                                                src={`https://cdn.discordapp.com/avatars/${row.user.userid}/${row.user.avatar}.png`}
                                            />
                                            {row.user.username}#{row.user.discriminator}
                                        </Stack>
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" gap={1.5}>
                                            {DisplayFormatValue[row.format - 2] &&
                                            row.status === 1 &&
                                            DisplayFormatValue[row.format - 2].id === 3 ? (
                                                <Button
                                                    onClick={() => {
                                                        toggleModal();
                                                        setCollabitem(row);
                                                    }}
                                                    variant="contained"
                                                    size="small"
                                                    sx={{ padding: '4px 16px' }}
                                                >
                                                    Winners
                                                </Button>
                                            ) : (
                                                <Button
                                                    onClick={() => {
                                                        handleOpen();
                                                        setCollabitem(row);
                                                    }}
                                                    variant="contained"
                                                    size="small"
                                                    sx={{ padding: '4px 16px' }}
                                                >
                                                    View Description
                                                </Button>
                                            )}
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Stack sx={{ alignItems: 'flex-end' }}>
                        <Pagination
                            page={page}
                            count={Math.ceil(totalCount / pageSize)}
                            onChange={(e, p) => setPage(p)}
                            variant="outlined"
                            shape="rounded"
                        />
                    </Stack>
                </>
            )}
            <Divider />
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        minWidth: isMobile ? '85%' : 800,
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        border: '1px solid #000',
                        boxShadow: 24
                    }}
                >
                    <Stack
                        sx={{
                            background: 'black',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            padding: '0 0.5rem'
                        }}
                    >
                        <Typography style={{ color: 'white' }}>Approve/Reject Collab</Typography>
                        <Typography sx={{ cursor: 'pointer' }} onClick={handleClose}>
                            <ClearIcon />
                        </Typography>
                    </Stack>
                    <Stack sx={{ padding: '1rem' }}>
                        <Stack display="block">
                            <Stack gap={1} sx={{ width: '100%' }}>
                                <Typography className="req-title">Request Description/</Typography>
                                <Typography className="req-title">Announcement Detail ( Form WL Collab)</Typography>
                            </Stack>
                            <Stack style={{ width: '100%' }}>
                                <TextareaAutosize
                                    style={{
                                        font: 'inherit',
                                        letterSpacing: 'inherit',
                                        boxSizing: 'content-box',
                                        background: 'none',
                                        height: isMobile ? '300px' : '500px',
                                        margin: '0',
                                        display: 'block',
                                        width: '100%',
                                        animationDuration: '10ms',
                                        color: '#54577A',
                                        borderRadius: '4px',
                                        overflow: 'auto'
                                    }}
                                    value={collabitem.description}
                                    disabled
                                />
                            </Stack>
                        </Stack>
                        <Stack
                            sx={{
                                padding: '1rem',
                                justifyContent: 'space-between'
                            }}
                            direction="row"
                            gap={1.5}
                        >
                            {collabitem.status === 0 ? (
                                <>
                                    <Button
                                        color="success"
                                        onClick={() => UpdateCollab({ status: 1, _id: collabitem._id })}
                                        disabled={user.userid === collabitem.userId}
                                        variant="contained"
                                        size="small"
                                        sx={{ padding: '4px 16px' }}
                                    >
                                        Approve
                                    </Button>
                                    <Button
                                        color="error"
                                        onClick={() => UpdateCollab({ status: 2, _id: collabitem._id })}
                                        disabled={user.userid === collabitem.userId}
                                        variant="contained"
                                        size="small"
                                        sx={{ padding: '4px 16px' }}
                                    >
                                        Reject
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button color="success" variant="contained" disabled size="small" sx={{ padding: '4px 16px' }}>
                                        Approve
                                    </Button>
                                    <Button color="error" variant="contained" disabled size="small" sx={{ padding: '4px 16px' }}>
                                        Reject
                                    </Button>
                                </>
                            )}
                        </Stack>
                    </Stack>
                </Box>
            </Modal>

            <Modal open={winnerModal} onClose={toggleModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box
                    sx={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        minWidth: isMobile ? '85%' : 400,
                        bgcolor: 'background.paper',
                        border: '1px solid #000',
                        paddding: '2rem',
                        boxShadow: 24
                    }}
                >
                    <Stack
                        sx={{
                            background: 'black',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            padding: '0 0.5rem'
                        }}
                    >
                        <Typography style={{ color: 'white' }}>Winners</Typography>
                        <Typography sx={{ cursor: 'pointer' }} onClick={toggleModal}>
                            <ClearIcon />
                        </Typography>
                    </Stack>
                    <Stack sx={{ padding: '1rem', display: 'block' }}>
                        {collabitem && collabitem.winneruser
                            ? collabitem.winneruser.map((item: any, i) => (
                                  <Stack sx={{ padding: '0.5rem 0' }} key={i}>
                                      <Typography sx={{ cursor: 'pointer' }}>
                                          {item.username}#{item.discriminator}
                                      </Typography>
                                  </Stack>
                              ))
                            : null}
                    </Stack>
                </Box>
            </Modal>
        </>
    );
};
export default Received;
