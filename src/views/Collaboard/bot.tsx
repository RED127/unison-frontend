import { Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const RequestBot = () => {
    const navigate = useNavigate();
    const { palette } = useTheme();
    const isMobile = useMediaQuery('(max-width:768px)');
    const handleClick = () => navigate('/collab/successfull');
    return (
        <Stack gap={4}>
            <Stack direction="row" gap="12px" sx={{ cursor: 'pointer' }} onClick={() => navigate('/collab/request')}>
                <Typography color="grey.100">{`<`}</Typography>
                <Typography color="grey.100">Go Back</Typography>
            </Stack>
            <Stack
                sx={{
                    width: isMobile ? '100%' : 496,
                    padding: '33px 40px',
                    gap: 1.5,
                    bgcolor: palette.common.white,
                    borderRadius: 2.5
                }}
            >
                <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                    Import Bot
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 400 }}>
                    Pellentesque sodales imperdiet lacus ut rutrum. Curabitur nisl odio, tristique vitae magna sit amet, ornare finibus
                    nulla. Sed lacinia augue vel tincidunt dignissim. Suspendisse id hendrerit nunc, eget pulvinar ligula.
                </Typography>
                <Button variant="contained" color="primary" size="medium" sx={{ width: 102, mt: 1.5 }} onClick={handleClick}>
                    Let Us In
                </Button>
            </Stack>
        </Stack>
    );
};
export default RequestBot;
