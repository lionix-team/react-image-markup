import React from 'react';
import style from './ColorPicker.module.css';
const ColorPicker = (props) => {
  let chooseColor = () => {
    props.editor.current.changeColor(props.color)
    props.updateColor(props.color);
  }
  return (
    <div onClick={() => chooseColor()} className={style.picker} style={(props.color) ? { backgroundColor: props.color } : {}}></div>
  );

}
export default ColorPicker;
