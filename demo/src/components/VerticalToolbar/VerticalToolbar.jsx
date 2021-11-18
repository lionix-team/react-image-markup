import React from 'react';
import Tool from '../Tools/Tool';
import ColorPanel from '../ColorPanel/ColorPanel';

class VerticalToolbar extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
          colors: ['black', 'red', 'green', 'yellow', 'blue', 'pink', 'orange', 'purple', 'crimson'],
          croppingImage: false,
        }
      }
      applyCrop = () => {
        this.props.editor.current.applyCropping()
        this.setState({
          croppingImage: false
        });
      }
      cropImage() {
        this.props.editor.current.set('crop')
        this.setState({
          croppingImage: true
        });
      }
    render(){
        return (
            <div className="tools">
                <ColorPanel colors={this.state.colors} editor={this.props.editor} />
                <Tool iconClassName="fas fa-font fa-lg" event={() => this.props.editor.current.set('text')} />
                <Tool iconClassName="fas fa-pencil-alt fa-lg" event={() => this.props.editor.current.set('freeDrawing')} />
                <Tool iconClassName="far fa-circle fa-lg" event={() => this.props.editor.current.set('circle')} />
                <Tool iconClassName="far fa-square fa-lg" event={() => this.props.editor.current.set('rect')} />
                <Tool iconClassName="fas fa-long-arrow-alt-down fa-lg" event={() => this.props.editor.current.set('arrow')} />
                <Tool iconClassName="fas fa-arrows-alt fa-lg" event={() => this.props.editor.current.set('selectMode')} />
                {this.state.croppingImage ?
                <Tool iconClassName="far fa-check-circle fa-lg" event={() => this.applyCrop()} /> :
                <Tool iconClassName="fas fa-crop-alt fa-lg" event={() => this.cropImage()} />
                }
            </div>
        );
    }
    

}
export default VerticalToolbar;
