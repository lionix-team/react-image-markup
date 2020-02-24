import React, { Component } from 'react';
import './Editor.module.css';
import { setBackgroundImage, canvasInit, drag, set, undo, redo, applyCropping, clear, saveImage, uploadImage, getCurrentColor } from '../../assets/js/methods';
class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      color: '#000',
      fontSize: 24,
      strokeWidth: 7
    }
    this.canvasInit = canvasInit.bind(this);
    this.drag = drag.bind(this)
    this.set = set.bind(this);
    this.undo = undo.bind(this);
    this.redo = redo.bind(this);
    this.applyCropping = applyCropping.bind(this)
    this.clear = clear.bind(this)
    this.saveImage = saveImage.bind(this)
    this.setBackgroundImage = setBackgroundImage.bind(this);
    this.uploadImage = uploadImage.bind(this);
    this.saveImageAsFile = this.saveImageAsFile.bind(this)
    this.getCurrentColor = getCurrentColor.bind(this)
  }
  componentDidMount() {
    let generetedId = this.generateId(4)
    this.setState({ id: generetedId });
  }
  componentDidUpdate() {
    let canvas = document.getElementById(this.state.id)
    this.canvasInit(canvas, this.state);
  }
  generateId(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  saveImageAsFile(e) {
    let image = this.saveImage()
    let link = document.createElement("a");
    link.setAttribute("href", image);
    link.setAttribute("download", "image-markup");
    link.click();
  }
  render() {
    return (
        <canvas id={this.state.id} width={this.props.width} height={this.props.height}></canvas>
    )
  }
}

export default Editor;
