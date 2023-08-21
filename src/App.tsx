import { Container, Box } from "@mui/material";
import { CreateQRCode } from "./controllers/apirequest";
import { useState } from "react";

import Header from "./components/Header";
import LinkInput from "./components/LinkInput";
import GeneratedQRCode from "./components/GeneratedQRCode";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorAlert from "./components/ErrorAlert";

// APP
const App = () => {
    const [generatedQRCodeLink, setQRCodeLink] = useState('');
    const [isLoading, setLoadingState] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // ON SUBMIT BUTTON CLICK
    const onSubmitButtonClick = (linkToSubmit: string) => CreateQRCode(linkToSubmit, setQRCodeLink, setLoadingState, setErrorMessage);

    // RETURN ELEMENT
    return (
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ px: 8, py: 2, top: 55, position: 'relative', borderRadius: 3, bgcolor: 'white', boxShadow: '11px 10px 19px -1px rgba(0, 0, 0, .4)' }}>
                {errorMessage !== '' && <ErrorAlert errorMessage={errorMessage} />}

                {/* MAIN COMPONENTS */}
                <Header />
                <LinkInput setQRCodeLink={onSubmitButtonClick} isLoading={isLoading} />
                
                {/* CONDITIONAL COMPONENTS */}
                {isLoading && <LoadingSpinner />}
                {generatedQRCodeLink !== '' && <GeneratedQRCode generatedQRCodeLink={generatedQRCodeLink} />}
            </Box>
        </Container>
    )
}

export default App;
