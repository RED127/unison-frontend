import { useEffect, useState, ChangeEvent } from 'react';
import { Button, Divider, Stack, Typography, Select, MenuItem, TextField, useMediaQuery } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import useApi from 'hooks/userApi';
import { ProjectProps } from 'types';

import { ProjectStatusValue, CollabStatusValue, UserTypeValue } from 'components';
import RequestBot from 'components/bot';
import SuccessFull from 'components/successfull';
import Pending from 'components/pending';
import Reject from 'components/Reject';
/*eslint-disable */

const AddComponent = (props: any) => {
    const { form, setForm, setPage } = props;
    const { getServers } = useApi();
    const isMobile = useMediaQuery('(max-width:768px)');
    const [servers, setServers] = useState([]);

    const handleNextStepClick = () => {
        if (form.serverId && form.description && form.projectStatus && form.collabStatus && form.userType) {
            setPage(2);
        }
    };

    const getMyOwnedServers = async () => {
        await getServers().then(({ data }) => {
            if (data.length) {
                setServers(data);
                setForm({ ...form, serverId: data[0].id });
            }
        });
    };

    useEffect(() => {
        getMyOwnedServers();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Stack direction="row" justifyContent="space-between" sx={{ flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                <Stack gap="14px">
                    <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                        Add New Project
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 400 }}>
                        This information will be displayed publicly.
                    </Typography>
                </Stack>
                <Stack justifyContent="center" sx={{ mt: isMobile ? 2 : 0 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        sx={{ width: 110 }}
                        disabled={
                            form.serverId && form.description && form.projectStatus && form.collabStatus && form.userType ? false : true
                        }
                        onClick={handleNextStepClick}
                    >
                        Next Step
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
                        width: isMobile ? 'auto' : 454
                    }
                }}
            >
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Project*</Typography>
                        <Typography className="req-small-tle">This will be your profile name.</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <Select
                            id="demo-simple-select"
                            value={form.serverId}
                            sx={{ height: 40 }}
                            className="req-input"
                            onChange={(e) => setForm({ ...form, serverId: e.target.value })}
                        >
                            {servers.map((row: any) => (
                                <MenuItem key={row.id} value={row.id}>
                                    {row.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </Stack>
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Project Description*</Typography>
                        <Typography className="req-small-tle">Write briefly about your project</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <TextField
                            rows={2}
                            multiline
                            value={form.description}
                            fullWidth
                            variant="outlined"
                            className="req-input"
                            inputProps={{ maxLength: 160 }}
                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                        />
                    </Stack>
                </Stack>
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Project Status*</Typography>
                        <Typography className="req-small-tle">Mint Status or Project type</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <Select
                            id="demo-simple-select"
                            value={form.projectStatus}
                            sx={{ height: 40 }}
                            className="req-input"
                            onChange={(e) => setForm({ ...form, projectStatus: Number(e.target.value) })}
                        >
                            {ProjectStatusValue.map((row: any) => (
                                <MenuItem key={row.id} value={row.id}>
                                    {row.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </Stack>
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Collab Status*</Typography>
                        <Typography className="req-small-tle">Open/Close collab</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <Select
                            id="demo-simple-select"
                            value={form.collabStatus}
                            sx={{ height: 40 }}
                            className="req-input"
                            onChange={(e) => setForm({ ...form, collabStatus: Number(e.target.value) })}
                        >
                            {CollabStatusValue.map((row: any) => (
                                <MenuItem key={row.id} value={row.id}>
                                    {row.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </Stack>
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">User Type*</Typography>
                        <Typography className="req-small-tle">Project Admin/Influencer User</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <Select
                            id="demo-simple-select"
                            value={form.userType}
                            sx={{ height: 40 }}
                            className="req-input"
                            onChange={(e) => setForm({ ...form, userType: Number(e.target.value) })}
                        >
                            {UserTypeValue.map((row: any) => (
                                <MenuItem key={row.id} value={row.id}>
                                    {row.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </Stack>
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Twitter Link</Typography>
                        <Typography className="req-small-tle">Your project’s twitter profile</Typography>
                    </Stack>
                    <Stack className="req-input" flexDirection={'row'} justifyContent="center" alignItems={'center'}>
                        <Stack
                            sx={{
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.5rem'
                            }}
                        >
                            <Typography className="req-title">https://twitter.com/</Typography>
                        </Stack>
                        <TextField
                            hiddenLabel
                            value={form.twitterLink}
                            size="small"
                            sx={{
                                width: '100%'
                            }}
                            onChange={(e) => setForm({ ...form, twitterLink: e.target.value })}
                        />
                    </Stack>
                </Stack>
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Discord Link</Typography>
                        <Typography className="req-small-tle">Your project’s discord invite</Typography>
                    </Stack>
                    <Stack className="req-input" flexDirection={'row'} justifyContent="center" alignItems={'center'}>
                        <Stack
                            sx={{
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.5rem'
                            }}
                        >
                            <Typography className="req-title">https://discord.gg/</Typography>
                        </Stack>
                        <TextField
                            hiddenLabel
                            value={form.discordLink}
                            sx={{ width: '100%' }}
                            size="small"
                            onChange={(e) => setForm({ ...form, discordLink: e.target.value })}
                        />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

const AddProject = () => {
    const { addProject, updateProject, socket } = useApi();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [form, setForm] = useState<ProjectProps>({
        serverId: '',
        description: '',
        projectStatus: 0,
        collabStatus: 0,
        twitterLink: '',
        discordLink: '',
        roleId: ''
    });
    const [checked, setChecked] = useState(true);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const [roleoptions, setRoleoptions] = useState([]);

    const goBack = (status: boolean) => {
        if (page === 1 || status) navigate('..');
        else setPage(page - 1);
    };

    const handleImportBotClick = async () => {
        await addProject(form, checked).then(({ data }) => {
            if (checked) {
                setPage(page + 1);
            } else {
                navigate('/collab');
            }
        });
    };

    const handleUpdateClick = async () => {
        if (form.roleId.length) {
            await updateProject(form).then(({ data }) => {
                goBack(true);
            });
        }
    };

    useEffect(() => {
        if (socket) {
            socket.on('addproject', (data: any) => {
                if (data[form.serverId]) {
                    setRoleoptions(data[form.serverId]);
                    setPage(4);
                }
            });
            socket.on('rejectproject', (data: any) => {
                if (data[form.serverId]) {
                    setPage(5);
                }
            });
        }
        return () => {
            if (socket) {
                socket.off('addproject');
                socket.off('rejectproject');
            }
        };
    }, [socket, form]);

    return (
        <Stack gap={4}>
            <Stack direction="row" gap="12px" sx={{ cursor: 'pointer' }} onClick={() => navigate('/collab')}>
                <Typography color="grey.100">{`<`}</Typography>
                <Typography color="grey.100">Go Back</Typography>
            </Stack>
            {page === 1 && <AddComponent form={form} setForm={setForm} setPage={setPage} />}
            {page === 2 && <RequestBot checked={checked} handleClick={handleImportBotClick} handleChange={handleChange} />}
            {page === 3 && <Pending />}
            {page === 4 && <SuccessFull roleoptions={roleoptions} form={form} setForm={setForm} handleClick={handleUpdateClick} />}
            {page === 5 && <Reject />}
        </Stack>
    );
};
export default AddProject;
