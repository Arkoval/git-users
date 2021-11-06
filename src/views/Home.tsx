import { UserList } from "components/organisms/UserList/UserList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "store";
import { RootState } from "store/reducers";
import { Wrapper } from "./Home.styles";

const Home = () => {
  const state = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const { fetchUsers } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Wrapper>
      {state.users ? (
        <UserList users={state.users} />
      ) : (
        <span>Unexpected error</span>
      )}
    </Wrapper>
  );
};

export default Home;
