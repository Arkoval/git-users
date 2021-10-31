import { UserList } from "components/organisms/UserList/UserList";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "store";
import { RootState } from "store/reducers";
import { Wrapper } from "./Home.styles";

const Home = () => {
  // const state = useSelector((state: RootState) => state.bank);
  // const dispatch = useDispatch();

  // const { increment, decrement, reset } = bindActionCreators(
  //   actionCreators,
  //   dispatch
  // );

  return (
    <Wrapper>
      <UserList />
      {/* <div className="counter-container">
        <Button onClick={() => decrement(1)}> - </Button>
        <Title>{state}</Title>
        <Button onClick={() => increment(1)}> + </Button>
      </div>
      <Button onClick={() => reset()}> reset </Button> */}
    </Wrapper>
  );
};

export default Home;
