import { ReactElement } from 'react';

export enum WalletTypeProps {
    Ethereum = 'ethereum',
    Solana = 'solana'
}

export type ServerProps = {
    icon?: string;
    id: string;
    name: string;
    owner: boolean;
    permissions: string;
    _id: string;
};

export type ProjectProps = {
    serverId: string;
    description: string;
    roleId: string;
    projectStatus: number;
    collabStatus: number;
    server?: ServerProps;
    twitterLink?: string;
    discordLink?: string;
    userType?: number;
};

export type UpdateWalletProps = {
    address: string;
    type: string;
    connected: boolean;
};

export type GuardProps = {
    children: ReactElement | null;
};

export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
};

export type AddressProps = {
    address: string;
    type: string;
    nonce?: number;
    signature?: string | Uint8Array;
};

export type IAddress = {
    type: string;
    address: string;
};

export type NetworkType = {
    name: string;
    icon: string;
};

export type IUser = {
    _id?: string;
    avatar?: string;
    discriminator?: string;
    nonce?: string;
    status?: boolean;
    userid?: string;
    username?: string;
    role?: string;
};

export type ApiContextType = {
    socket: any;
    getProjects: () => Promise<any>;
    updateProject: (form: any) => Promise<any>;
    getProjectById: (form: any) => Promise<any>;
    getMyProjects: () => Promise<any>;
    goLoginDiscord: () => Promise<any>;
    loginDiscord: (code: string) => Promise<any>;
    getServers: () => Promise<any>;
    addProject: (form: ProjectProps, checked: Boolean) => Promise<any>;
    getProject: (id: string) => Promise<any>;
    applyCollab: (form: any) => Promise<any>;
    getMyCollabs: (data: any) => Promise<any>;
    getProgressCollabs: (data: any) => Promise<any>;
    getSentCollabs: (data: any) => Promise<any>;
    updateCollab: (form: any) => Promise<any>;
    allReadNotification: () => Promise<any>;
    readNotification: (form: any) => Promise<any>;
    getRoles: (id: string) => Promise<any>;
};
