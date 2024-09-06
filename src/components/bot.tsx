import { Button, Stack, Typography, useTheme } from '@mui/material';

const RequestBot = ({ handleClick, checked }: any) => {
    const { palette } = useTheme();

    return (
        <Stack
            sx={{
                width: 496,
                padding: '33px 40px',
                gap: 1.5,
                bgcolor: palette.common.white,
                borderRadius: 2.5,
                flexDirection: 'row'
            }}
        >
            <Stack>
                <Typography color="text.primary" sx={{ fontSize: 24, fontWeight: 600 }}>
                    Import Bot
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 400 }}>
                    Please let our bot into your server to finish onboarding your project
                </Typography>
                <Stack sx={{ flexDirection: 'row' }}>
                    <Button variant="contained" color="primary" size="medium" sx={{ width: 150, mt: 1.5 }} onClick={handleClick}>
                        {checked ? 'Let Us In' : 'List Project'}
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};
export default RequestBot;
