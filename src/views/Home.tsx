import { UserList } from "components/organisms/UserList/UserList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "store";
import { RootState } from "store/reducers";
import { Wrapper } from "./Home.styles";
import axios from "axios";
import { IGithub } from "types/github";
import { useUsers } from "hooks/useUsers";

const Home = () => {
  const [users, setUsers] = useState<IGithub[]>([]);
  const { getUsers } = useUsers();

  useEffect(() => {
    (async () => {
      const data = await getUsers(32);
      setUsers(data);
    })();
  }, []);
  return (
    <Wrapper>
      {users ? <UserList users={users} /> : <span>Unexpected error</span>}
    </Wrapper>
  );
};

export default Home;
