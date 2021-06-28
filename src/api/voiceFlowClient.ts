import axios from 'axios';

const versionID = process.env.REACT_APP_VOICEFLOW_PROJECT_ID;

const voiceFlowClient = axios.create({
  baseURL: `https://general-runtime.voiceflow.com/state/${versionID}`,
  headers: { Authorization: process.env.REACT_APP_VOICEFLOW_API_KEY },
});

export default voiceFlowClient;
