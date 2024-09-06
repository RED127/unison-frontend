import { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';

import useApi from 'hooks/userApi';

import { useNavigate } from 'react-router-dom';
import MyListItem from './myListItem';

const MyProject = () => {
    const navigate = useNavigate();
    const { getMyProjects } = useApi();
    const [projects, setProjects] = useState([]);

    const getMyProjectsApi = async () => {
        await getMyProjects().then(({ data }) => {
            setProjects(data);
        });
    };

    useEffect(() => {
        getMyProjectsApi();
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
            <Stack direction="row" justifyContent="space-between">
                <Stack gap="14px">
                    <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                        My Projects List
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 400 }}>
                        This information will be displayed publicly.
                    </Typography>
                </Stack>
            </Stack>

            <Stack
                sx={{
                    flexFlow: 'row wrap',
                    maxWidth: '100%',
                    gap: 4
                }}
            >
                {projects.map((data, i) => (
                    <MyListItem key={i} data={data} />
                ))}
            </Stack>
        </Stack>
    );
};
export default MyProject;
