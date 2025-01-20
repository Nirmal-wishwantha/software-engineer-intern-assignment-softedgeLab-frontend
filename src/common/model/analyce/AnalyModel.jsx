import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box, CircularProgress, Typography } from '@mui/material';
import AnalyticsTable from './AnalyticsTable';
import CommonButton from '../../commonFuntion/CommonButton';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AnalyModel({ eventId }) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleClickOpen = () => {
        setLoading(true);
        setOpen(true);
        
        setTimeout(() => setLoading(false), 1000);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
           
            <CommonButton title="Analyze Data" onClick={handleClickOpen} />

            <BootstrapDialog
                fullWidth
                maxWidth="lg"
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                aria-labelledby="analy-model-title"
            >
                
                <DialogTitle sx={{margin:0,padding:2,textAlign:'center'}}>
                    Analytics 
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

               
                <DialogContent dividers>
                    {loading ? (
                        
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 200,
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    ) : (
                       
                        <Box sx={{ padding: 2 }}>
                            <AnalyticsTable eventId={eventId} />
                        </Box>
                    )}
                </DialogContent>

               
                
            </BootstrapDialog>
        </React.Fragment>
    );
}
