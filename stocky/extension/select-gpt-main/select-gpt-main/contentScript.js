
//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   

// Function to retrieve the selected text
const returnSelection = () => {
    return new Promise((resolve, reject) => {
        if (window.getSelection) {
            resolve(window.getSelection().toString());
        } else if (document.getSelection) {
            resolve(document.getSelection().toString());
        } else if (document.selection) {
            resolve(document.selection.createRange().text.toString());
        } else {
            reject();
        }
    });
};

// Listen for messages from the extension
chrome.runtime.onMessage.addListener(async (request, sender, response) => {
    const { type } = request;
    if (type === "LOAD") {
        try {
            // Retrieve the selected text
            const selection = await returnSelection();
            // Send the selected text to the background script for processing
            chrome.runtime.sendMessage({ type: "PROCESS_INPUT", input: selection }, (response) => {
                if (response) {
                    // Display the predefined output
                    alert(response);
                } else {
                    // If no predefined output found, notify the user
                    alert("No predefined output found for the input.");
                }
            });
        } catch (e) {
            console.error("Error retrieving selection:", e);
        }
    }
});

chrome.runtime.sendMessage()