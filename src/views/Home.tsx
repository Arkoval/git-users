import { Spinner } from "components/atoms/Spinner/Spinner";
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
    if (state.users.length === 0) {
      fetchUsers();
    }
  }, []);
  return (
    <Wrapper>
      <UserList users={state.users} />
      {state.pending ? <Spinner /> : null}
    </Wrapper>
  );
};

export default Home;
