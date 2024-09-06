import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Stack, Typography, Select, MenuItem, TextField, useMediaQuery } from '@mui/material';

import { CollabStatusValue, ProjectStatusValue, UserRoleValue } from 'components';

const RequestAccess = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width:768px)');
    const [form, setForm] = useState({
        role: '',
        projectStatus: '',
        projectName: '',
        projectDescription: '',
        collabStatus: '',
        twitterLink: '',
        discordLink: ''
    });

    const handleRequestClick = () => navigate('/collab/request_bot');

    return (
        <Stack gap={4}>
            <Stack
                direction="row"
                gap="12px"
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                    navigate('/collab');
                }}
            >
                <Typography color="grey.100">{`<`}</Typography>
                <Typography color="grey.100">Go Back</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" sx={{ flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                <Stack gap="14px">
                    <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                        Register as a collab admin
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 400 }}>
                        This information will be displayed publicly.
                    </Typography>
                </Stack>
                <Stack justifyContent="center" sx={{ mt: isMobile ? 2 : 0 }}>
                    <Button variant="contained" color="primary" size="medium" onClick={handleRequestClick}>
                        Request for Access
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
                        <TextField hiddenLabel defaultValue="" className="req-input" size="small" />
                    </Stack>
                </Stack>
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Project Description*</Typography>
                        <Typography className="req-small-tle">viverra cursus non elementum.</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <TextField rows={2} multiline fullWidth variant="outlined" className="req-input" inputProps={{ maxLength: 160 }} />
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
                            sx={{ height: 40 }}
                            className="req-input"
                            value={form.projectStatus}
                            onChange={(e) => setForm((prev) => ({ ...prev, projectStatus: e.target.value }))}
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
                            sx={{ height: 40 }}
                            className="req-input"
                            value={form.collabStatus}
                            onChange={(e) => setForm((prev) => ({ ...prev, collabStatus: e.target.value }))}
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
                        <Typography className="req-title">Twitter Link*</Typography>
                        <Typography className="req-small-tle">This will be your profile name.</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <TextField hiddenLabel defaultValue="" className="req-input" size="small" />
                    </Stack>
                </Stack>
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Discord Link*</Typography>
                        <Typography className="req-small-tle">This will be your profile name.</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <TextField hiddenLabel defaultValue="" className="req-input" size="small" />
                    </Stack>
                </Stack>
                <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 9.5}>
                    <Stack gap={1} width={198}>
                        <Typography className="req-title">Role*</Typography>
                        <Typography className="req-small-tle">This will be your role.</Typography>
                    </Stack>
                    <Stack justifyContent="center">
                        <Select
                            id="demo-simple-select"
                            value={form.role}
                            onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}
                            sx={{ height: 40 }}
                            className="req-input"
                        >
                            {UserRoleValue.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
export default RequestAccess;
