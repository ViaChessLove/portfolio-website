import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { RootState } from "./store/store";
import React from 'react';

export const ScrollBar = createGlobalStyle`
  &::-webkit-scrollbar {
    width: 0px;
    }
`