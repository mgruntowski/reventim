import {
  createContext,
  useCallback,
  useMemo,
  useState,
  PropsWithChildren,
} from "react";

import { Loading, Portal } from "ui/atoms";

export const LoadingContext = createContext({});

export const LoadingProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  const showLoading = useCallback(() => {
    setIsActive(true);
  }, []);

  const hideLoading = useCallback(() => {
    setIsActive(false);
  }, []);

  const value = useMemo(
    () => ({
      showLoading,
      hideLoading,
    }),
    [showLoading, hideLoading]
  );

  return (
    <LoadingContext.Provider value={value}>
      {children}

      {isActive && (
        <Portal>
          <Loading />
        </Portal>
      )}
    </LoadingContext.Provider>
  );
};
