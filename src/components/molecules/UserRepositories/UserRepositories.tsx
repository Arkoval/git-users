import React from "react";
import { StyledList, Wrapper } from "./UserRepositories.styles";

interface IRepo {
  repos: string[];
  repoNum: number;
}

export const UserRepositories = ({ repos, repoNum }: IRepo) => {
  return (
    <Wrapper>
      <h3>
        Repositories count: <span>{repoNum ? repoNum : 0}</span>
      </h3>
      <h3>Repositories list:</h3>
      <StyledList>
        {repos.map((repo) => (
          <li key={repo}>{repo}</li>
        ))}
      </StyledList>
    </Wrapper>
  );
};
