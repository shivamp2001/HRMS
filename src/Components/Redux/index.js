import {configureStore}from "@reduxjs/toolkit";
import employeeSlice from "../Redux/employeeInfo";

export const store=configureStore({
  reducer:{
      employee:employeeSlice,
  }
})