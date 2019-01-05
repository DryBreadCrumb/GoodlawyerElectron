import axios from 'axios';
import createElectronStore from 'electron-store-webpack-wrapper';

const jwt = createElectronStore().get('jwt');

export const webRequest = axios.create({
    baseURL: 'https://young-river-76901.herokuapp.com/',
    timeout: 4000,
    headers: {
    'x-auth': jwt
    }
});