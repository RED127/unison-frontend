import { useEffect, useState } from 'react';
import { Button, Divider, Stack, Typography, Select, MenuItem, TextField, useMediaQuery } from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';
import useApi from 'hooks/userApi';
import { ProjectProps } from 'types';

import { ProjectStatusValue, CollabStatusValue, UserTypeValue } from 'components';
/*eslint-disable */

const AddComponent = (props: any) => {
    const isMobile = useMediaQuery('(max-width:768px)');
    const { form, setForm, servername, roleoptions, handleImportBotClick } = props;

    return (
        <>
            <Stack direction="row" justifyContent="space-between" sx={{ flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                <Stack gap="14px">
                    <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                        Edit Project
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
                        onClick={handleImportBotClick}
                    >
                        Update
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
                            disabled
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    serverId: e.target.value
                                })
                            }
                        >
                            <MenuItem value={form.serverId}>{servername}</MenuItem>
                        </Select>
                    </Stack>
                </Stack>
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Project Description*</Typography>
                        <Typography className="req-small-tle">viverra cursus non elementum.</Typography>
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
                        <Typography className="req-small-tle">Etiam in mauris sit amet turpis</Typography>
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
                        <Typography className="req-small-tle">This will be your profile name.</Typography>
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
                        <Typography className="req-small-tle">This will be your User Type.</Typography>
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
                        <Typography className="req-title">Twitter Link*</Typography>
                        <Typography className="req-small-tle">This will be your profile name.</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <TextField
                            hiddenLabel
                            value={form.twitterLink}
                            className="req-input"
                            size="small"
                            onChange={(e) => setForm({ ...form, twitterLink: e.target.value })}
                        />
                    </Stack>
                </Stack>
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Discord Link*</Typography>
                        <Typography className="req-small-tle">This will be your profile name.</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <TextField
                            hiddenLabel
                            value={form.discordLink}
                            className="req-input"
                            size="small"
                            onChange={(e) => setForm({ ...form, discordLink: e.target.value })}
                        />
                    </Stack>
                </Stack>

                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Role*</Typography>
                        <Typography className="req-small-tle">This is role</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <Select
                            id="demo-simple-select"
                            value={form.roleId}
                            sx={{ height: 40 }}
                            className="req-input"
                            onChange={(e) => setForm({ ...form, roleId: e.target.value })}
                        >
                            {roleoptions.map((row: any) => (
                                <MenuItem key={row.value} value={row.value}>
                                    {row.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

const AddProject = () => {
    const { updateProject, getProjectById } = useApi();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [servername, setServername] = useState('');
    const [roleoptions, setRoleoptions] = useState([]);

    const { id } = useParams();
    const [form, setForm] = useState<ProjectProps>({
        serverId: '',
        description: '',
        projectStatus: 0,
        collabStatus: 0,
        twitterLink: '',
        discordLink: '',
        userType: 0,
        roleId: ''
    });

    const goBack = (status: boolean) => {
        if (page === 1 || status) navigate('..');
        else setPage(page - 1);
    };

    const handleImportBotClick = async () => {
        await updateProject(form).then(({ data }) => {
            goBack(false);
        });
    };

    const load = async () => {
        const { data } = await getProjectById({ id });
        if (data && data.project && data.project.length) {
            const projectItem = data.project[0];
            setForm({
                twitterLink: projectItem.twitterLink,
                discordLink: projectItem.discordLink,
                userType: projectItem.userType,
                collabStatus: projectItem.collabStatus,
                projectStatus: projectItem.projectStatus,
                serverId: projectItem.serverId,
                roleId: projectItem.roleId,
                description: projectItem.description
            });
            setRoleoptions(data.roleoptions);
            setServername(projectItem.server.name);
        }
    };

    useEffect(() => {
        load();
        // eslint-disable-next-line
    }, [id]);

    return (
        <Stack gap={4}>
            <Stack direction="row" gap="12px" sx={{ cursor: 'pointer' }} onClick={() => goBack(false)}>
                <Typography color="grey.100">{`<`}</Typography>
                <Typography color="grey.100">Go Back</Typography>
            </Stack>
            {page === 1 && (
                <AddComponent
                    roleoptions={roleoptions}
                    form={form}
                    setForm={setForm}
                    servername={servername}
                    handleImportBotClick={handleImportBotClick}
                    setPage={setPage}
                />
            )}
        </Stack>
    );
};
export default AddProject;
