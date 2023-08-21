import { Container, Alert } from "@mui/material";

const ErrorAlert = (props: ErrorAlertProps) => {
    const { errorMessage } = props;

    // RETURN ELEMENT
    return (
        <Container sx={{ mb: 2 }}>
            <Alert severity="error" sx={{ bgcolor: 'darkred', color: 'white' }}>{errorMessage}</Alert>
        </Container>
    )
}

export default ErrorAlert;
