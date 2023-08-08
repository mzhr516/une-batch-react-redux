import React from "react";
import {
  DepositAction,
  WithdrawlAction,
  WithdrawlAllAction,
  getPosts,
} from "../redux/Actions";
import { useDispatch, useSelector } from "react-redux";

export const Exp1 = (props) => {
  const amount = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  const handleOnDeposit = () => {
    dispatch(DepositAction(500));
  };

  const handleOnWithdrawl = () => {
    dispatch(WithdrawlAction(500));
    dispatch(getPosts());
  };

  return (
    <>
      <h1>Amount {amount}</h1>
      <button onClick={handleOnDeposit}>deposit</button>
      {"  "}
      <button onClick={handleOnWithdrawl}>withdrawl</button>{" "}
      <button
        onClick={() => {
          dispatch(WithdrawlAllAction());
        }}
      >
        withdrawl all
      </button>
    </>
  );
};
