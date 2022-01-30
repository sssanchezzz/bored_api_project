import axios from 'axios';
import { boredApiBaseUrl } from '../utils/Utils';
const service = () => {
    const baseUrl = boredApiBaseUrl;

    const getRandomActivityApi = () => {
        return axios.get(baseUrl);
    };
    const getActivityByTypeApi = (type) => {
        return axios.get(`${baseUrl}?type=${type}`);
    };
    const getActivityByParticipantsApi = (participants) => {
        return axios.get(`${baseUrl}?participants=${participants}`);
    };
    const getActivityByPriceApi = (max, min = 0) => {
        return axios.get(`${baseUrl}?minprice=${min}&maxprice=${max}`);
    };
    return {
        getRandomActivityApi,
        getActivityByTypeApi,
        getActivityByParticipantsApi,
        getActivityByPriceApi,
    };
};
export default service;
