import { UserCard } from "components/molecules/UserCard/UserCard";
import React from "react";
import { Wrapper } from "./UserList.styles";

const users = [
  {
    id: 4,
    login: "Test1",
    link: "https://www.google.pl",
    thumbnail:
      "https://images.unsplash.com/photo-1634626647919-55e114816e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTYwNTg4NA&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 6,
    login: "Test1",
    link: "https://www.google.pl",
    thumbnail:
      "https://images.unsplash.com/photo-1634626647919-55e114816e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTYwNTg4NA&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 12,
    login: "Test1",
    link: "https://www.google.pl",
    thumbnail:
      "https://images.unsplash.com/photo-1634626647919-55e114816e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTYwNTg4NA&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 1,
    login: "Test1",
    link: "https://www.google.pl",
    thumbnail:
      "https://images.unsplash.com/photo-1634626647919-55e114816e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTYwNTg4NA&ixlib=rb-1.2.1&q=80&w=1080",
  },
];

export const UserList = () => {
  const getDetails = () => console.log("asd");

  return (
    <Wrapper>
      {users.map((user) => {
        return (
          <UserCard
            id={user.id}
            thumbnail={user.thumbnail}
            key={user.id}
            login={user.login}
            link={user.link}
            getDetails={getDetails}
          />
        );
      })}
    </Wrapper>
  );
};
