// script.js

// Function to handle the result from Gradio interface
function handleResult(result) {
    // Get the result element
    var resultElement = document.getElementById("result");

    // Check if the result contains details indicating counterfeit
    if (result.includes("counterfeit") || result.includes("fake")) {
        resultElement.innerText = "The medicine is suspected to be counterfeit or fake.";
    } else {
        resultElement.innerText = "The medicine is genuine.";
    }
}

// Listen for messages from the embedded Gradio interface
window.addEventListener("message", function(event) {
    // Check if the message is from the Gradio interface
    if (event.origin === "https://gradio.app") {
        // Get the result from the message data
        var result = event.data;

        // Handle the result
        handleResult(result);
    }
});
