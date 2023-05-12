// run `node index.js` in the terminal
require('dotenv').config();
console.log(process.env.OPENAI_API_KEY);

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = (role, message, userName) =>
  openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: role, content: message, name: userName }],
  });

async function run() {
  const dataResult = await completion(
    'user',
    'how are you? can you tell me what is 2 mulitply 500',
    'admin'
  );
  console.log(dataResult);
  console.log(dataResult.data.choices[0].message);
}

run().catch((error) => {
  console.error('Error:', error);
});
