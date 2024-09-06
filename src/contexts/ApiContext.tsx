import { createContext, useEffect, useCallback, useState } from 'react';
import axios from 'utils/axios';
import { useNavigate } from 'react-router-dom';
import { ApiContextType, ProjectProps } from 'types';
import { CLIENT_ID, BASE_URL, CLIENT_SECRET, OAuthScope, BASE_PATH, API_URL } from 'config';
import { useDispatch, useSelector } from 'store';
import { Login, Logout } from 'store/reducers/auth';
import { SetNotificationData } from 'store/reducers/notification';
import io from 'socket.io-client';

const ApiContext = createContext<ApiContextType | null>(null);

export const ApiProvider = ({ children }: { children: React.ReactElement }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [socket, setSocket] = useState<any>(null);

    const { user } = useSelector((state) => state.auth);

    const getProjects = async () => {
        const data = await axios.get('collab/get_projects');
        return data;
    };

    const goLoginDiscord = async () => {
        const OAuthData = new URLSearchParams({
            client_id: CLIENT_ID,
            redirect_uri: `${BASE_URL}discord`,
            scope: OAuthScope,
            response_type: 'code'
        });
        window.location.href = `https://discordapp.com/oauth2/authorize?${OAuthData}`;
    };

    const loginDiscord = async (code: string) => {
        const OAuthData = new URLSearchParams({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'authorization_code',
            code,
            redirect_uri: `${BASE_URL}discord`,
            scope: OAuthScope
        });
        await axios
            .post('https://discordapp.com/api/v9/oauth2/token', OAuthData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(async ({ data }: any) => {
                const { data: userData } = await axios.get('https://discordapp.com/api/v9/users/@me', {
                    headers: {
                        Authorization: `Bearer ${data.access_token}`
                    }
                });
                userData.accessToken = data.access_token;
                if (userData.email === null) {
                    // eslint-disable-next-line
                    alert("Please verify your Discord's account E-mail before logging in.");
                }
                const param = {
                    id: userData.id,
                    username: userData.username,
                    avatar: userData.avatar,
                    discriminator: userData.discriminator,
                    accessToken: userData.accessToken,
                };

                axios.post('auth', param).then(({ data: res }) => {
                    dispatch(Login(res));
                    navigate(BASE_PATH);
                });
            });
    };

    const getServers = async () => {
        const data = await axios.get('collab/get_servers');
        return data;
    };

    const getMyProjects = async () => {
        const data = await axios.get('collab/get_my_projects');
        return data;
    };

    const addProject = async (form: ProjectProps, checked: Boolean) => {
        if (checked) {
            const OAuthData = new URLSearchParams({
                client_id: CLIENT_ID,
                permissions: '268435457',
                scope: 'bot',
                guild_id: form.serverId,
                disable_guild_select: 'true'
            });
            window.open(`https://discord.com/api/oauth2/authorize?${OAuthData}`, '_blank');
        }

        const data = await axios.post('collab/new_project', form);
        return data;
    };
    const updateProject = async (form: ProjectProps) => {
        const data = await axios.post('collab/update_project', form);
        return data;
    };

    const getProjectById = async (form: ProjectProps) => {
        const data = await axios.post('collab/get_project_byid', form);
        return data;
    };

    const getProject = async (id: string) => {
        const data = await axios.get('collab/get_project', { params: { id } });
        return data;
    };

    const getRoles = async (serverId: string) => {
        const data = await axios.get('collab/get_roles', { params: { serverId } });
        return data;
    };

    const applyCollab = async (form: any) => {
        const data = await axios.post('collab/apply_collab', form);
        return data;
    };

    const getMyCollabs = async (params: any) => {
        const data = await axios.post('collab/get_my_collabs', params);
        return data;
    };

    const getProgressCollabs = async (params: any) => {
        const data = await axios.post('collab/get_my_inprogresscollabs', params);
        return data;
    };

    const getSentCollabs = async (params: any) => {
        const data = await axios.post('collab/get_my_sentcollabs', params);
        return data;
    };

    const readNotification = async (params: any) => {
        const data = await axios.post('notification/update_notification', params);
        return data;
    };

    const allReadNotification = async () => {
        const data = await axios.post('notification/allupdate_notification');
        return data;
    };

    const updateCollab = async (params: any) => {
        const data = await axios.post('collab/update_collab', params);
        return data;
    };

    const getNotificationdata = async () => {
        const { data } = await axios.get('notification/get_notification');
        if (data) {
            dispatch(SetNotificationData(data));
        }
    };

    const getNotification = useCallback(async () => {
        if (user && user.username?.length) {
            getNotificationdata();
        }
        // eslint-disable-next-line
    }, [user]);

    const connect = () => {
        const socketConnection = io(API_URL, {
            transports: ['websocket'],
            upgrade: false
        });
        socketConnection.on('refreshnotification', (data: any) => {
            getNotificationdata();
        });
        setSocket(socketConnection);
    };

    const sessionStart = () => {
        window.document.addEventListener('mousemove', () => {
            localStorage.setItem('lastActvity', new Date().toString());
        });
        window.document.addEventListener('click', () => {
            localStorage.setItem('lastActvity', new Date().toString());
        });
        const timeInterval = setInterval(() => {
            const lastAcivity: any = localStorage.getItem('lastActvity');
            const diffMs = Math.abs(new Date(lastAcivity).valueOf() - new Date().valueOf());
            const seconds = Math.floor(diffMs / 1000);
            const minute = Math.floor(seconds / 60);
            if (minute === 120) {
                clearInterval(timeInterval);
                dispatch(Logout({}));
                navigate('/');
            }
        }, 1000);
    };

    useEffect(() => {
        getNotification();
        // eslint-disable-next-line
    }, [getNotification]);

    useEffect(() => {
        if (user && user.username?.length) {
            sessionStart();
        }
        // eslint-disable-next-line
    }, [user]);

    useEffect(() => {
        connect();
        // eslint-disable-next-line
    }, []);

    return (
        <ApiContext.Provider
            value={{
                getProjects,
                getMyProjects,
                goLoginDiscord,
                loginDiscord,
                getServers,
                addProject,
                updateProject,
                getProject,
                applyCollab,
                getMyCollabs,
                getProgressCollabs,
                getSentCollabs,
                readNotification,
                allReadNotification,
                updateCollab,
                getProjectById,
                getRoles,
                socket
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};

export default ApiContext;
