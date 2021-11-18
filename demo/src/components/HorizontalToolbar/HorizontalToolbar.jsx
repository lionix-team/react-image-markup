import React from 'react';
import Tool from '../Tools/Tool';
class HorizontalToolbar extends React.Component {
  render() {
    return (
      <div className="header">
        <Tool iconClassName="fas fa-undo-alt fa-lg" event={() => this.props.editor.current.undo()} />
        <Tool iconClassName="fas fa-redo-alt fa-lg" event={() => this.props.editor.current.redo()} />
        <Tool iconClassName="fas fa-trash-alt fa-lg" event={() => this.props.editor.current.clear()} />
        <div className="upload-image">
          <label htmlFor="chooseImage"><Tool iconClassName="fas fa-file-upload fa-lg" /></label>
          <input id="chooseImage" style={{ visibility: 'hidden' }} type="file" onChange={(e) => this.props.editor.current.uploadImage(e)} accept="image/*" />
        </div>
        <Tool iconClassName="fas fa-save fa-lg" event={() => this.props.editor.current.saveImageAsFile()} />
      </div>
    );
  }


}
export default HorizontalToolbar;
