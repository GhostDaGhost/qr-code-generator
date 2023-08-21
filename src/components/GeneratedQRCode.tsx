import { Box, Divider } from "@mui/material";

// GENERATED QR CODE
const GeneratedQRCode = (props: GeneratedQRCodeProps) => {
    const { generatedQRCodeLink } = props;

    // RETURN ELEMENT
    return (
        <>
            <Divider sx={{ mt: 3, mb: 3 }} />

            <Box display="flex" justifyContent="center" sx={{ mb: 2 }}>
                <img src={generatedQRCodeLink} alt="qr code" draggable="false" loading="lazy" />
            </Box>
        </>
    )
}

export default GeneratedQRCode;
