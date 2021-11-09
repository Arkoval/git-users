import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { FC, ReactElement } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const AllTheProviders: FC = ({ children }) => {
  store.dispatch = jest.fn(store.dispatch);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
