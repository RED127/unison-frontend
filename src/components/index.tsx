import { Box, styled } from '@mui/material';

export const ProjectStatusValue = [
    { id: 1, name: 'Post-Mint' },
    { id: 2, name: 'Pre-Mint' },
    { id: 3, name: 'N/A' }
];

export const UserRoleValue = [
    { id: 'admin', name: 'Admin' },
    { id: 'influencer', name: 'Influencer' }
];

export const CollabStatusValue = [
    { id: 1, name: 'open' },
    { id: 2, name: 'closed' }
];

export const CollabTypeValue = [
    { id: 1, name: 'Give Whitelist' },
    { id: 2, name: 'Ask Whitelist' },
    { id: 3, name: 'Other Request' }
];

export const InFLCollabTypeValue = [
    { id: 1, name: 'AMA/Twitter Spaces' },
    { id: 2, name: 'Twitter Giveaway' },
    { id: 3, name: 'Marketing Request' }
];

export const PageSize = 10;

export const UserTypeValue = [
    { id: 1, name: 'Project Admin' },
    { id: 2, name: 'Influencer' },
    { id: 3, name: 'DAO' }
];

export const FormatValue = [
    { id: 2, name: 'FCFS (First Come First Serve)' },
    { id: 3, name: 'Raffle' }
];

export const DisplayFormatValue = [
    { id: 2, name: 'FCFS' },
    { id: 3, name: 'Raffle' }
];

export const HourValue = [
    { id: 0, name: '00' },
    { id: 1, name: '01' },
    { id: 2, name: '02' },
    { id: 3, name: '03' },
    { id: 4, name: '04' },
    { id: 5, name: '05' },
    { id: 6, name: '06' },
    { id: 7, name: '07' },
    { id: 8, name: '08' },
    { id: 9, name: '09' },
    { id: 10, name: '10' },
    { id: 11, name: '11' },
    { id: 12, name: '12' },
    { id: 13, name: '13' },
    { id: 14, name: '14' },
    { id: 15, name: '15' },
    { id: 16, name: '16' },
    { id: 17, name: '17' },
    { id: 18, name: '18' },
    { id: 19, name: '19' },
    { id: 20, name: '20' },
    { id: 21, name: '21' },
    { id: 22, name: '22' },
    { id: 23, name: '23' }
];

export const MinutesValue = [
    { id: 0, name: '00' },
    { id: 10, name: '10' },
    { id: 20, name: '20' },
    { id: 30, name: '30' },
    { id: 40, name: '40' },
    { id: 50, name: '50' }
];

export const LoaderWrapper = styled(Box)({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1301,
    width: '100%'
});
