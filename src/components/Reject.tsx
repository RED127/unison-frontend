import { Stack, Typography, useTheme } from '@mui/material';

const RequestReject = () => {
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
                Listing Rejected
            </Typography>
        </Stack>
    );
};
export default RequestReject;
