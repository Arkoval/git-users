import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Root from "views/Root";
import { useEffect } from "react";

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
