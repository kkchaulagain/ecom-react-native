import axios from 'axios';
import { constants } from '../../constants';

const APIURL = constants.server.url + '/api/';
export default axios.create({
  baseURL: APIURL
});
