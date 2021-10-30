import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Title } from "components/atoms/Title";
import { Button } from "components/atoms/Button";
import { actionCreators } from "store";
import { RootState } from "store/reducers";

const Home = () => {
  const state = useSelector((state: RootState) => state.bank);
  const dispatch = useDispatch();

  const { increment, decrement, reset } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <div className="counter-container">
        <Button onClick={() => decrement(1)}> - </Button>
        <Title>{state}</Title>
        <Button onClick={() => increment(1)}> + </Button>
      </div>
      <Button onClick={() => reset()}> reset </Button>
    </div>
  );
};

export default Home;
