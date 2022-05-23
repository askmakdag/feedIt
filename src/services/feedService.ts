import axios from '../helpers/axios';

class FeedService {
  getPosts(page: number) {
    return axios.get(`/posts?_page=${page}&_limit=10`);
  }
  getPost(id: number) {
    return axios.get(`/posts?id=${id}`);
  }
}

export default new FeedService();
