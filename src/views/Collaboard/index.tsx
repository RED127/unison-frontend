import { useState, useEffect, Fragment } from 'react';
import {
    Button,
    Stack,
    InputBase,
    Select,
    OutlinedInput,
    SelectChangeEvent,
    MenuItem,
    useMediaQuery,
    styled,
    alpha,
    Theme,
    useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import ListItem from './ListItem';
import MyListItem from './myListItem';
import useApi from 'hooks/userApi';
import { useSelector } from 'store';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    width: 381,
    height: 52,
    border: '1px solid #B3B3B3'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: 0,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '100%',
    '& .MuiInputBase-input': {
        padding: '14px 28px',
        transition: theme.transitions.create('width'),
        width: '81%'
    }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 160,
            marginTop: '1%'
        }
    }
};

const getStyles = (name: string, personName: readonly string[], theme: Theme) => ({
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    width: 160
});

const CollaboardPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { getProjects } = useApi();
    const isMobile = useMediaQuery('(max-width:768px)');
    const { user } = useSelector((state) => state.auth);

    const [projects, setProjects] = useState([]);
    const [projectlist, setProjectlist] = useState([]);
    const [Items, setItems] = useState([]);
    const [manager, setManager] = useState<any>('My Collabs');
    const [filter, setFilter] = useState<any>('By All');
    const [searchValue, setSearchValue] = useState<any>('');

    const names = ['My Projects', 'My Collabs'];
    const Filters = ['By Projects', 'By Influncers', 'By DAOs', 'By All'];

    const handleChange = (event: SelectChangeEvent<typeof manager>) => {
        const {
            target: { value }
        }: any = event;
        setManager(value);
    };

    const handleFilterChange = (event: SelectChangeEvent<typeof filter>) => {
        const {
            target: { value }
        }: any = event;
        setFilter(value);
    };

    const handleAddNewPro = () => navigate('add_project');

    const getProjectsList = async () => {
        const { data } = await getProjects();
        setProjects(data);
    };

    useEffect(() => {
        getProjectsList();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (manager === 'My Collabs') {
            setProjectlist(projects);
        } else {
            const d = projects.filter((obj: any) => obj.userId === user.userid);
            setProjectlist(d);
        }
        // eslint-disable-next-line
    }, [projects, manager]);

    useEffect(() => {
        if (projectlist && projectlist.length) {
            let list: any = [];
            if (filter === 'By All') {
                list = projectlist;
            } else if (filter === 'By Projects') {
                list = projectlist.filter((obj: any) => obj.userType === 1);
            } else if (filter === 'By Influncers') {
                list = projectlist.filter((obj: any) => obj.userType === 2);
            } else if (filter === 'By DAOs') {
                list = projectlist.filter((obj: any) => obj.userType === 3);
            }

            if (searchValue && searchValue.length) {
                list = list.filter((item: any) => {
                    let startsWithCondition = false;
                    let includesCondition = false;
                    startsWithCondition =
                        item.server.name.toLowerCase().startsWith(searchValue.toLowerCase()) ||
                        item.serverId.toLowerCase().startsWith(searchValue.toLowerCase());
                    includesCondition =
                        item.server.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                        item.serverId.toLowerCase().includes(searchValue.toLowerCase());

                    if (startsWithCondition) {
                        return startsWithCondition;
                    }
                    if (!startsWithCondition && includesCondition) {
                        return includesCondition;
                    }
                    return null;
                });
            }
            setItems(list);
        } else {
            setItems([]);
        }
    }, [projectlist, searchValue, filter]);

    return (
        <>
            <Stack
                sx={{
                    gap: 2,
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: isMobile ? 'wrap' : 'nowrap'
                }}
            >
                <Stack
                    sx={{
                        flexDirection: 'row',
                        gap: 2,
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: isMobile ? 'space-between' : 'flex-start'
                    }}
                >
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </Search>
                    <Select
                        value={filter}
                        onChange={handleFilterChange}
                        input={<OutlinedInput />}
                        renderValue={() => <>Filters</>}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{
                            width: 160,
                            height: 42,
                            borderRadius: '6px',
                            background: '#E6E6E6',
                            padding: '12px 18px 12px 24px',
                            border: 'none',
                            '& .MuiPaper-root': {
                                width: 160,
                                ml: '95px'
                            },
                            '& .MuiSelect-select': {
                                margin: 0,
                                padding: '0 !important'
                            }
                        }}
                    >
                        {Filters.map((name) => (
                            <MenuItem key={name} value={name} style={getStyles(name, filter, theme)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </Stack>

                <Stack flexDirection="row" gap={3} sx={{ width: '100%', justifyContent: isMobile ? 'space-between' : 'flex-end' }}>
                    <Select
                        value={manager}
                        onChange={handleChange}
                        input={<OutlinedInput />}
                        renderValue={() => <>Manager</>}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{
                            width: 145,
                            height: 42,
                            borderRadius: '6px',
                            padding: '12px 18px 12px 24px',
                            border: '1px solid #000000',
                            '& .MuiPaper-root': {
                                width: 160,
                                ml: '95px'
                            },
                            '& .MuiSelect-select': {
                                margin: 0,
                                padding: '0 !important'
                            }
                        }}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name} style={getStyles(name, manager, theme)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>

                    <Button variant="contained" color="primary" size="medium" sx={{ height: 42 }} onClick={handleAddNewPro}>
                        + Add New Project
                    </Button>
                </Stack>
            </Stack>

            <Stack
                sx={{
                    mt: 5,
                    flexFlow: 'row wrap',
                    maxWidth: '100%',
                    gap: 4
                }}
            >
                {Items.map((data: any, i) => (
                    <Fragment key={i}>{manager === 'My Collabs' ? <ListItem data={data} /> : <MyListItem data={data} />}</Fragment>
                ))}
            </Stack>
        </>
    );
};
export default CollaboardPage;
