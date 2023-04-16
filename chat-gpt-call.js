const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Define the ChatGPT API endpoint
const ENDPOINT = 'https://api.openai.com/v1/engine/chat';
let responseVar = 'Not yet';

// Make the API request using Axios
export async function postQuestion(input) {
    console.log("key " + process.env.MyChatGPTKey);
    console.log("inside post method with input " + input);
    return new Promise((resolve, reject) => {
        axios.post(ENDPOINT, {
            prompt: input,
            temperature: 0.5,
            max_tokens: 50,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.MyChatGPTKey}`
            }
        }).then(response => {
            console.log(response);
            resolve(response);
        })
            .catch(error => {
                console.error(error);
                reject(error)
            });
    })
}
