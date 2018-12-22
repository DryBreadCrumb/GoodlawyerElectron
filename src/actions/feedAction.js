import axios from 'axios';
import createElectronStore from 'electron-store-webpack-wrapper';

const store = createElectronStore();
const jwt = store.get('jwt');

var instance = axios.create({
    baseURL: 'https://young-river-76901.herokuapp.com/',
    timeout: 2000,
    headers: {'x-auth': jwt}
});

export const getFeed = user => {
    return (dispatch) => {
        return instance
            .get('jobs/pending')
            .then(function(response) {
                return response.data;
            })
        .catch(e => {
            console.log(e);
        });
    };
};
