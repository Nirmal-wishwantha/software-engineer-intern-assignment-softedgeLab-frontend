import EventUpdate from "../../pages/EventUpdate"
import EventCreation from "../../pages/EventCreation"
import EventList from "../../pages/EventList"
import EventDetaisl from "../../pages/EventDetaisl"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';

const routes =[

    {
        path: '/EventList',
        Element: <EventList />,
        text: 'Event List',
        icon: <ListAltIcon/>
    },

    {
        path: '/EventDetaisl',
        Element: <EventDetaisl />,
        text: 'Event Detaisl',
        icon: <InfoIcon/>
    },

    {
        path: '/EventUpdate',
        Element: <EventUpdate />,
        text: 'Event Update',
        icon: <EditIcon/>
    },

    {
        path: '/EventCreation',
        Element: <EventCreation />,
        text: 'Event Creation',
        icon: <AddCircleOutlineIcon/>
    },

   

]

export default routes;