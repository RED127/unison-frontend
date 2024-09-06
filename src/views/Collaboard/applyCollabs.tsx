import { useEffect, useState } from 'react';
import { Button, Divider, Stack, Typography, Select, MenuItem, TextField, TextareaAutosize, useMediaQuery } from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';
import { CollabTypeValue, FormatValue, MinutesValue } from 'components';
import { ProjectProps } from 'types';
import useApi from 'hooks/userApi';
import snackbar from '../../utils/snackbar';
/*eslint-disable */

const ApplyCollabs = () => {
    const navigate = useNavigate();
    const { id }: any = useParams();
    const isMobile = useMediaQuery('(max-width:768px)');
    const { getProject, applyCollab } = useApi();

    const [project, setProject] = useState<ProjectProps>({
        serverId: '',
        description: '',
        projectStatus: 0,
        collabStatus: 0,
        server: {
            id: '',
            name: '',
            owner: false,
            permissions: '',
            _id: ''
        },
        roleId: ''
    });

    const [form, setForm] = useState({
        projectId: '',
        collabType: 0,
        format: 1,
        openedSpots: 1,
        description: '',
        requestBy: {
            projectName: '',
            oneTimeReq: ''
        },
        expiretime: 24,
        expiretimemin: 0
    });

    const [myProject, setMyProject] = useState<any>([]);

    const getProjectAPI = async () => {
        const { data }: any = await getProject(id);
        if (!data.project.length) {
            return;
        }
        const mypro = [...data.myProject];
        if (data.project && data.project.length) {
            setProject(data.project[0]);
            setForm({
                ...form,
                projectId: data.project[0]._id
            });
            setMyProject(mypro);
        }
    };

    const handleRequestClick = async () => {
        if (Number(form.expiretime) === 0 && Number(form.expiretimemin) === 0) {
            snackbar({
                message: 'Error!',
                content: 'Minimum Raffle Duration: 10 Minutes',
                color: 'error',
                variant: 'alert',
                vertical: 'top',
                horizontal: 'right',
                transition: 'SlideLeft'
            });
            return;
        }

        await applyCollab(form);
        navigate('../my_collabs');
    };

    const getHourvalue = () => {
        const ops = [];
        let i = 0;
        while (i !== 100) {
            ops.push({ id: i, name: i > 9 ? `${i}` : `0${i}` });
            i += 1;
        }
        return ops;
    };

    useEffect(() => {
        getProjectAPI();
        // eslint-disable-next-line
    }, []);

    return (
        <Stack gap={4}>
            <Stack
                direction="row"
                gap="12px"
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                    navigate('..');
                }}
            >
                <Typography color="grey.100">{`<`}</Typography>
                <Typography color="grey.100">Go Back</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" sx={{ flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                <Stack gap="14px">
                    <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                        Apply For Collaboration
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 400 }}>
                        Fill Your Collaboration Details
                    </Typography>
                </Stack>
                <Stack justifyContent="center" sx={{ mt: isMobile ? 2 : 0 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        disabled={
                            form.projectId &&
                            form.collabType &&
                            form.format &&
                            form.openedSpots &&
                            form.requestBy.projectName &&
                            (form.requestBy.projectName === 'other' ? (form.requestBy.oneTimeReq ? true : false) : true)
                                ? false
                                : true
                        }
                        onClick={handleRequestClick}
                    >
                        Apply For Collab
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
                        <Typography className="req-small-tle">Your Future Collab Partner</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <TextField hiddenLabel value={project.server?.name} disabled className="req-input" size="small" />
                    </Stack>
                </Stack>
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Requested By*</Typography>
                        <Typography className="req-small-tle">Your project name</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <Select
                            id="demo-simple-select"
                            value={form.requestBy.projectName}
                            sx={{ height: 40 }}
                            className="req-input"
                            onChange={(e: any) =>
                                setForm({
                                    ...form,
                                    requestBy: {
                                        ...form.requestBy,
                                        projectName: e.target.value
                                    }
                                })
                            }
                        >
                            {myProject.map((row: any) => (
                                <MenuItem key={row.id} value={row.id}>
                                    {row.name}
                                </MenuItem>
                            ))}
                        </Select>
                        <TextField
                            rows={2}
                            multiline
                            fullWidth
                            disabled={form.requestBy.projectName !== 'other'}
                            sx={{
                                display: form.requestBy.projectName === 'other' ? 'block' : 'none'
                            }}
                            value={form.requestBy.oneTimeReq}
                            variant="outlined"
                            className="req-input"
                            inputProps={{ maxLength: 160 }}
                            onChange={(e: any) =>
                                setForm({
                                    ...form,
                                    requestBy: { ...form.requestBy, oneTimeReq: e.target.value }
                                })
                            }
                        />
                    </Stack>
                </Stack>
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Collab Type*</Typography>
                        <Typography className="req-small-tle">Whitelist or other collab type</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <Select
                            id="demo-simple-select"
                            value={form.collabType}
                            sx={{ height: 40 }}
                            className="req-input"
                            onChange={(e: any) => setForm({ ...form, collabType: Number(e.target.value) })}
                        >
                            {CollabTypeValue.map((row: any) => (
                                <MenuItem key={row.id} value={row.id}>
                                    {row.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </Stack>
                {form.collabType !== 3 ? (
                    <>
                        <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                            <Stack gap={1} width={198}>
                                <Typography className="req-title">Format*</Typography>
                                <Typography className="req-small-tle">Format of whitelist collab</Typography>
                            </Stack>
                            <Stack justifyContent="center">
                                <Select
                                    id="demo-simple-select"
                                    value={form.format}
                                    sx={{ height: 40 }}
                                    className="req-input"
                                    onChange={(e: any) => setForm({ ...form, format: Number(e.target.value) })}
                                >
                                    {FormatValue.map((row: any) => (
                                        <MenuItem key={row.id} value={row.id}>
                                            {row.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
                        </Stack>
                        <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                            <Stack gap={1} width={198}>
                                <Typography className="req-title">Opened Spots*</Typography>
                                <Typography className="req-small-tle">Format of whitelist collab</Typography>
                            </Stack>
                            <Stack justifyContent="center">
                                <TextField
                                    hiddenLabel
                                    value={form.openedSpots}
                                    type="number"
                                    InputProps={{ inputProps: { min: 1, max: 999 } }}
                                    className="req-input"
                                    size="small"
                                    onChange={(e: any) => {
                                        if (Number(e.target.value) > 0 && Number(e.target.value) < 1000)
                                            setForm({
                                                ...form,
                                                openedSpots: Number(e.target.value)
                                            });
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </>
                ) : null}
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Announcement Description*</Typography>
                        <Typography className="req-small-tle">Discord Announcement Text</Typography>
                    </Stack>
                    <Stack>
                        <TextareaAutosize
                            style={{
                                font: 'inherit',
                                letterSpacing: 'inherit',
                                boxSizing: 'content-box',
                                background: 'none',
                                height: '2.4375em',
                                margin: '0',
                                display: 'block',
                                minWidth: '0',
                                width: isMobile ? 'auto' : '423px',
                                animationDuration: '10ms',
                                paddingTop: '1px',
                                color: '#54577A',
                                borderRadius: '4px',
                                padding: '8.5px 14px',
                                overflow: 'auto'
                            }}
                            value={form.description}
                            onChange={(e: any) => setForm({ ...form, description: e.target.value })}
                        />
                    </Stack>
                </Stack>

                {form.collabType !== 3 && form.format !== 2 ? (
                    <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                        <Stack gap={1} width={198}>
                            <Typography className="req-title">Raffle Duration*</Typography>
                            <Typography className="req-small-tle">Active duration for Raffle</Typography>
                        </Stack>
                        <Stack justifyContent="space-between" flexDirection="row">
                            <Stack flexDirection="row" alignItems="center">
                                <Stack>
                                    <Typography className="req-small-tle">HH</Typography>
                                </Stack>
                                <Select
                                    id="hhdemo-simple-select"
                                    value={form.expiretime}
                                    sx={{
                                        width: 90,
                                        height: 42,
                                        borderRadius: '6px',
                                        padding: '12px 18px 12px 24px',
                                        border: '1px solid #000000',
                                        '& .MuiPaper-root': {
                                            width: 90,
                                            ml: '95px'
                                        },
                                        '& .MuiSelect-select': {
                                            margin: 0,
                                            padding: '0 !important'
                                        }
                                    }}
                                    onChange={(e: any) => setForm({ ...form, expiretime: Number(e.target.value) })}
                                >
                                    {getHourvalue().map((row: any) => (
                                        <MenuItem key={row.id} value={row.id}>
                                            {row.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
                            <Stack flexDirection="row" alignItems="center">
                                <Stack>
                                    <Typography className="req-small-tle">MM</Typography>
                                </Stack>
                                <Select
                                    id="mmdemo-simple-select"
                                    value={form.expiretimemin}
                                    sx={{
                                        width: 90,
                                        height: 42,
                                        marginLeft: '10px',
                                        borderRadius: '6px',
                                        padding: '12px 18px 12px 24px',
                                        border: '1px solid #000000',
                                        '& .MuiPaper-root': {
                                            width: 90,
                                            ml: '95px'
                                        },
                                        '& .MuiSelect-select': {
                                            margin: 0,
                                            padding: '0 !important'
                                        }
                                    }}
                                    onChange={(e: any) =>
                                        setForm({
                                            ...form,
                                            expiretimemin: Number(e.target.value)
                                        })
                                    }
                                >
                                    {MinutesValue.map((row: any) => (
                                        <MenuItem key={row.id} value={row.id}>
                                            {row.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
                        </Stack>
                    </Stack>
                ) : null}
            </Stack>
        </Stack>
    );
};
export default ApplyCollabs;
