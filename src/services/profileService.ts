import axios from '../helpers/axios';

class ProfileService {
  getProfiles(page: number) {
    return axios.get(`/profiles?_page=${page}&_limit=10`);
  }
  getProfile(id: number) {
    return axios.get(`/profiles?id=${id}`);
  }
}

export default new ProfileService();
