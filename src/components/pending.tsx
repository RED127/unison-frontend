import { Stack, Typography, useTheme } from '@mui/material';

const RequestSuccessfull = () => {
    const { palette } = useTheme();
    return (
        <Stack
            sx={{
                width: 496,
                padding: '33px 40px',
                gap: 1.5,
                bgcolor: palette.common.white,
                borderRadius: 2.5
            }}
        >
            <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                Waiting for you to allow Unison Bot into your server
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 400 }}>
                If you do not import in 10 minutes, this listing attempt will be auto-rejected
            </Typography>
        </Stack>
    );
};
export default RequestSuccessfull;
