import axios from "axios";

const baseURL = "https://api.github.com/";

class GithubService {
  get http() {
    const instance = axios.create({
      baseURL: `${baseURL}`,
      headers: {},
      validateStatus: () => true,
    });
    return instance;
  }
  async getUsers(since: number) {
    const response = await this.http.get(`/users?per_page=36&since=${since}`);
    if (response.status === 200) return response.data;
    else return "An error occured";
  }

  async getDetails(username: string) {
    const response = await this.http.get(`/users/${username}`);
    if (response.status === 200) return response.data;
    else return "Can't find user with given username";
  }

  async getRepos(username: string) {
    const response = await this.http.get(`/users/${username}/repos`);
    if (response.status === 200) return response.data;
    else return `Can't load ${username}'s repos' `;
  }
}

const githubService = new GithubService();

export default githubService;
