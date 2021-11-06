import axios from "axios";

const useUsers = () => {
  const getUsers = async (lastID: number) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users?per_page=12since=${lastID}`
      );
      return data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const getUserDetails = async (username: string) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );
      return data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const getUserRepos = async (username: string) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=166`
      );
      const repoList: string[] = data.map(
        (data: { name: string }) => data.name
      );
      return repoList;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  return {
    getUsers,
    getUserDetails,
    getUserRepos,
  };
};
