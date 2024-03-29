import OpenAI from 'openai';
// import { GPT_API } from './constants';
const gptKey = process.env.REACT_APP_GPT_KEY;

const openai = new OpenAI({
  apiKey: gptKey,
  dangerouslyAllowBrowser: true,
});

export default openai;
