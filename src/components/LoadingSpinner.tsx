import { Box, CircularProgress } from "@mui/material";

// LOADING SPINNER
const LoadingSpinner = () => {
    return (
        <Box display="flex" justifyContent="center" sx={{ my: 7 }}>
            <CircularProgress size={75} />
        </Box>
    )
}

export default LoadingSpinner;
