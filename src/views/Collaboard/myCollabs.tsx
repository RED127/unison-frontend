import { Stack } from '@mui/material';
import ReceivedCollabs from './Collabs/received';
import ProgressCollabs from './Collabs/progress';
import SentCollabs from './Collabs/sent';

const MyCollabs = () => (
    <Stack gap={4}>
        <ProgressCollabs />
        <ReceivedCollabs />
        <SentCollabs />
    </Stack>
);
export default MyCollabs;
