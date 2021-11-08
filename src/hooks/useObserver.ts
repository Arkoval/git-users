import { MutableRefObject, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "store";
import { RootState } from "store/reducers";
import { IOptions } from "types/observer";

export const useObserver = (
  options: IOptions
): { container: MutableRefObject<null> } => {
  const container = useRef(null);
  const state = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const { fetchUsers } = bindActionCreators(actionCreators, dispatch);

  const fetchMoreUsers: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      fetchUsers(state.users[state.users.length - 1].id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(fetchMoreUsers, options);
    if (container.current) observer.observe(container.current);
    return () => {
      if (container.current) observer.unobserve(container.current);
    };
  }, [container, state.users.length]);

  return { container };
};
