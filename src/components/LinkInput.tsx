import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

import LinkIcon from '@mui/icons-material/Link';

// LINK INPUT
const LinkInput = (props: LinkInputProps) => {
    const [linkToSubmit, setLinkToSubmit] = useState('');
    const { setQRCodeLink, isLoading } = props;

    // RETURN ELEMENT
    return (
        <>
            <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
                <TextField
                    fullWidth
                    label="Enter Text or Link"
                    aria-label="Enter Text or Link"
                    variant="standard"
                    required
                    onChange={e => {
                        setLinkToSubmit(e.target.value);
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LinkIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </Box>

            <Box display="flex" justifyContent="center" sx={{ mt: 3, mb: 1 }}>
                <Button variant="contained" disabled={isLoading} onClick={() => setQRCodeLink(linkToSubmit)}>Generate</Button>
            </Box>
        </>
    )
}

export default LinkInput;
