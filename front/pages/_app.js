import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import "@nextcss/reset";
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => {
  return (
    <>
      {/* head 수정하고 싶을 때 */}
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
