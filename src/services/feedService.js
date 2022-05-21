import axios from '../helpers/axios';

class FeedService {
  getItems(page) {
    return axios.get(`/posts?_page=${page}&_limit=16`);
  }
  getItem(slug) {
    return axios.get(`/posts?slug=${slug}`);
  }
}

export default new FeedService();
