import { DashboardIcon, CollabIcon, LogoutIcon, EngageIcon } from 'ui-component/SvgIcon';

const Menu = [
    {
        id: 'engage',
        title: 'Engage to earn',
        type: 'item',
        url: '/engage',
        icon: <EngageIcon />
    },
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard',
        icon: <DashboardIcon />
    },
    {
        id: 'collab',
        title: 'Collab',
        type: 'item',
        url: '/collab',
        icon: <CollabIcon />
    },
    {
        id: 'logOut',
        title: 'Log Out',
        type: 'item',
        url: '/logout',
        icon: <LogoutIcon />
    }
];
export default Menu;
