import React from "react";
import Head from "next/head";

import FooterOne from "../Footer/FooterOne";
import withScrollFixed from "../../common/withScrollFixed";
import HeaderOne from "../Header/HeaderOne";

let ScrollFixedHeader = withScrollFixed(HeaderOne);

export default function LayoutOne(props) {
  return (
    <>
      {/* <ScrollFixedHeader container={props.container} /> */}
      {/* {props.children} */}
      {/* <FooterOne /> */}
    </>
  );
}
