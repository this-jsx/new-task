import React from "react";
import './Button.css';

export default function Button(props) {
  const { className, ...restProps } = props;
  const classNames = className ? `button ${className}` : 'button';

  return (
    <button className={classNames} {...restProps} />
  );
}