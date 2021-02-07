/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { AppProps } from "next/app";
import "../styles/global.css";

export default function Page({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return <Component {...pageProps} />;
}
