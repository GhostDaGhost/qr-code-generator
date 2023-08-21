import axios from "axios";

/**
    * A function that is triggered when the user submits the text or link they want to generate a QR code for.
    * @param linkToSubmit `string` - The link or text to create a QR code for.
    * @param setQRCodeLink `Function` - The update state function for the QR code display.
    * @param setLoadingState `Function` - The function to start or end the loading spinner.
    * @param setErrorMessage `Function` - The function to summon an alert in the event of an error.
    * @returns `void` - This returns nothing.
    * @example CreateQRCode('https://google.com/', setQRCodeLink);
*/
export const CreateQRCode = async (linkToSubmit: string, setQRCodeLink: Function, setLoadingState: Function, setErrorMessage: Function) => {
    if (!linkToSubmit || linkToSubmit === '') {
        setErrorMessage('The input box cannot be empty or invalid!');
        return;
    }

    // CLEAR OLD QR CODE AND START LOADING SPINNER
    setQRCodeLink('');
    setErrorMessage('');
    setLoadingState(true);

    // GENERATE QR CODE THROUGH API REQUEST
    const apiRoute = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${linkToSubmit}`;
    const apiRequest = await axios.post(apiRoute);

    // ENSURE THAT THE QR CODE WAS SUCCESSFULLY GENERATED
    if (apiRequest && typeof apiRequest === 'object' && apiRequest?.status === 200) {
        setQRCodeLink(apiRoute);
    } else {
        setErrorMessage('API request returned an error!');
    }

    // END LOADING SPINNER
    setLoadingState(false);
}
