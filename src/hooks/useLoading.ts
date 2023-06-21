import { useContext } from "react";

import { LoadingContext } from "contexts";

type UseLoading = {
  showLoading: () => void;
  hideLoading: () => void;
};

export default function useLoading(): UseLoading {
  const modal = useContext(LoadingContext) as UseLoading;

  if (!modal) {
    throw new Error("Loading should be used within a LoadingProvider");
  }

  return modal;
}
