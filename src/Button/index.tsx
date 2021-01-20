/**
 * Created by zengtao on 2017/5/19.
 */
import React, { Fragment, useEffect, useState } from 'react';
//本项目的模板页面

let defaultProps = {
  title: '哈哈哈dwsd',
};

export default function index(prop: any) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  let props = {
    ...defaultProps,
    ...prop,
  };
  const { title } = props;

  useEffect(() => {
    // Update the document title using the browser API

    return () => {};
  }, []);

  return <div>{title}</div>;
}
