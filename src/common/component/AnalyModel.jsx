import React from "react";
import {
    Button,
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Slide,
    Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CommonButton from "./CommonButton";
import AnalyticsTable from "../component/AnalyticsTable";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AnalyModel({ eventId }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <React.Fragment>
            <CommonButton title={"Analy Details"} onClick={handleClickOpen} />

            <Dialog
                fullWidth
                maxWidth="lg" // Ensures the dialog is wide enough
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Analytics Details
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Box sx={{ padding: 2 }}>
                    <AnalyticsTable eventId={eventId} />
                </Box>


            </Dialog>
        </React.Fragment>
    );
}
