const axios = require("axios");
const dotenv = require("dotenv");

const submit = document.getElementById("submit");
var questionInput = document.getElementById("question");
var textarea = document.getElementById("response");
window.textarea.value = 'i work';

// Load environment variables
dotenv.config();

// Define the ChatGPT API endpoint
const ENDPOINT = "https://api.openai.com/v1/engine/chat";

submit.addEventListener("click", () => {
    console.log("key " + process.env.MyChatGPTKey);
    console.log("inside event listener with input " + window.questionInput.value);

    // Make a request to the ChatGPT API using axios
    axios
        .post(
            "https://api.openai.com/v1/engine/chat",
            {
                prompt: window.input,
                temperature: 0.7,
                max_tokens: 50,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + process.env.MyChatGPTKey,
                },
            }
        )
        .then((response) => {
            // Set the value of the textarea to the response text
            window.textarea.value = response.data.choices[0].text;
        })
        .catch((error) => {
            console.error(error);
        });
});
