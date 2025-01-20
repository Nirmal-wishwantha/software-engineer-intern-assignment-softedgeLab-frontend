import EventCreation from "../../pages/EventCreation"
import EventDetaisl from "../../pages/EventDetaisl"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InfoIcon from '@mui/icons-material/Info';

const routes =[
    {
        path: '/EventDetaisl',
        Element: <EventDetaisl />,
        text: 'Event Detaisl',
        icon: <InfoIcon/>
    },

    {
        path: '/EventCreation',
        Element: <EventCreation />,
        text: 'Event Creation',
        icon: <AddCircleOutlineIcon/>
    },
]

export default routes;