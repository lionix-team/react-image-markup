import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
  return (
    <div className={style.tool} onClick={props.event}>
      <i className={props.iconClassName}></i>
    </div>
  );
}

export default Tool;
