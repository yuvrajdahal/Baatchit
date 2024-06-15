import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultError, errorSelector } from "../../appstate/error/index";
import toast from "react-hot-toast";

const ErrorBoundaryContext = React.createContext(null);

export const ErrorBoundaryProvider = ({ children }) => {
  const { isError, error } = useSelector(errorSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
    const timer = setTimeout(() => {
      dispatch(defaultError());
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [isError, error]);
  return (
    <ErrorBoundaryContext.Provider value={{}}>
      {children}
    </ErrorBoundaryContext.Provider>
  );
};
