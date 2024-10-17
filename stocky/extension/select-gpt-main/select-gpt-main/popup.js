document.addEventListener("DOMContentLoaded", async () => {

    const sleep = ms => new Promise(r => setTimeout(r, ms))

    const showPopup = async (response) => {
        if (response && response.output) {
            document.getElementById('input').textContent = "Selected text: " + response.input;
            document.getElementById('output').textContent = "Output: " + response.output;
        } else {
            document.getElementById('output').textContent = "Error: No predefined output found for the input.";
        }
    }

    const getData = async (selection) => {
        if (selection) {
            document.getElementById('input').textContent = selection;
            document.getElementById('output').textContent = "Loading...";

            // Send message to background script to process the input
            chrome.runtime.sendMessage({ type: "LOAD", input: selection }, (response) => {
                // Handle the response from the background script
                showPopup(response);
            });
        } else {
            document.getElementById('input').textContent = "Error: No text selected.";
            document.getElementById('output').textContent = "";
        }
    }

    // Function to get the selected text from the content script
    const getSelectedText = async () => {
        // Send message to content script to retrieve selected text
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { type: "LOAD" }, (response) => {
                // Handle the response from the content script
                getData(response);
            });
        });
    }

    // Call the function to get selected text when DOM content is loaded
    getSelectedText();
})

console.log()