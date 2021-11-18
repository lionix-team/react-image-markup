import React from 'react';
import ColorPicker from './ColorPicker/ColorPicker';
import style from './ColorPanel.module.css';


class ColorPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentColor: '#000',
      isOpened: false
    }
    this.updateColor = this.updateColor.bind(this)
  }
  togglePanel() {
    this.setState(prev => ({
      isOpened: !prev.isOpened
    }),
    )
  }
  updateColor(color) {
    this.setState({ currentColor: color })
  }
  colors() {
    if (this.state.isOpened && this.props.colors) {
      return (
        <div className={style.colorPicker}>
          {this.props.colors.map((color, i) => <ColorPicker color={color} updateColor={this.updateColor} key={i} editor={this.props.editor}/>)}
        </div>
      )
    }
  }
  render() {
    return (
      <div className={style.colorPanel} onMouseEnter={() => this.togglePanel()} onMouseLeave={() => this.togglePanel()}>
        <div className={style.currentColor} style={(this.state.currentColor) ? { backgroundColor: this.state.currentColor } : {}}>
        </div>
        {this.colors()}
      </div>
    );
  }


}
export default ColorPanel;
