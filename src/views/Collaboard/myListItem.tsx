import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';

import DefaultImage from 'assets/images/default.png';
/*eslint-disable */

const MyListItem = ({ data }: any) => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width:768px)');

    return (
        <Stack
            sx={{
                p: 3,
                gap: 3,
                width: isMobile ? '100%' : 331,
                bgcolor: '#F1F1F1',
                border: '1px solid #E7E7E7',
                alignItems: 'center'
            }}
        >
            <Stack sx={{ gap: '14px', alignItems: 'center', textAlign: 'center' }}>
                <Box
                    component="img"
                    src={
                        data.server.icon
                            ? `https://cdn.discordapp.com/icons/${data.serverId}/${data.server.icon}.png?size=1024`
                            : DefaultImage
                    }
                    sx={{ width: '100%', height: 150, borderRadius: 2, maxWidth: '250px' }}
                />
                <Typography fontSize={16} fontWeight={700} mt={0.25}>
                    {data.server.name}
                </Typography>
                <Typography align={isMobile ? 'left' : 'center'} sx={{ textOverflow: 'ellipsis', overflow: 'hidden', height: '60px' }}>
                    {data.description}
                </Typography>
            </Stack>
            <Button
                variant="contained"
                color="primary"
                sx={{ width: '100%', padding: '14px' }}
                size="large"
                onClick={() => navigate(`edit_collab/${data.serverId}`)}
            >
                Edit Project Details
            </Button>
        </Stack>
    );
};
export default MyListItem;
