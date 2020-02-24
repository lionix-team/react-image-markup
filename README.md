# Markup Image with React.js (customizable)

`react-image-markup` will provide you to edit uploaded image easily and save it. 


## Installation

`npm i react-image-markup`

or

`yarn add react-image-markup`

## Usage

First import the Editor component inside 
your React component.
```react
 import Editor from 'react-image-markup'
```

Then you'll be able to use Editor component.

#### Example:

You must give your editor component ```ref```,which will help you to call the functions to set editor mode,clean objects or undo/redo your changes.
```react
<Editor height="700" width="700" ref={this.editor} />

componentDidMount() {
    this.editor.current.set(this.editor.mode,this.editor.options)
}

```

`width` prop will set editor width

`height` prop will set editor height

`ref` with the help of ref, you will control the editor

## Function set(`type`,`params`)
##### With the set() function you choose editor's mode,which should get two parameters `type` and `params`
Editor have 6 modes
 - text
 - circle
 - rect
 - selectMode
 - arrow
 - freeDrawing
 - crop
 
`params`  parameter must be an object which set the type and every type have it's own options.

 #### Text Mode
##### `set('text',params)` to enable text mode in editor,where `params` must be object and has it's default value
```javascript
this.editor.current.set('text')
```
Object key         | Default Value | Description 
-------------       | ------------- | -------------
fill                | `black`   | color
fontFamily          | `Arial`   | font-family
fontSize            | `32`      | font-size
placeholder         | `Add Text`  | default text placeholder when the text will be added
or you can customize your editor text mode styles by overwriting default values.
```javascript
 let textModeOptions = { fill: 'red', fontFamily: 'Verdana',fontSize: 16, placeholder: 'Type something'}
 this.editor.current.set('text',textModeOptions)
```
 #### Circle Mode
##### `set('circle',params)` to enable circle mode in editor,where `params` must be object and has it's default value
```javascript
this.editor.current.set('circle')
```
Object key         | Default Value       | Description 
-------------       | -------------      | -------------
fill                | `transparent`        | Color inside circle
stroke              | `black`              | Circe border color
strokeWidth         | `7`                  | Circle border width
disableCircleEditing| `false`              | When `false`, can be painted custom circle. When `true`, always will be added circle of fixed height and width
top                | `0`                 | Top position of an object 
left                | `0`                   |Left position of an object 
radius            | `20`                | Radius of the circle
strokeUniform       | `true`         | When `false`, the stoke width will scale with the object. When `true`, the stroke will always match the exact pixel size entered for stroke width
noScaleCache        | `false`         |When `true`, cache does not get updated during scaling. The picture will get block if scaled too much and will be redrawn with correct details at the end of scaling. this setting is performance and application dependant

or you can customize your editor circle mode styles by overwriting default values. 
```javascript
 let circleModeParams = { fill: 'blue',stroke: 'white' }
 this.editor.current.set('circle',circleModeParams)
```
 #### Rectangle Mode
##### `set('rect',params)` to enable rect mode in editor,where `params` must be object and has it's default value
```javascript
this.editor.current.set('rect')
```
Object key         | Default Value       | Description 
-------------       | -------------      | -------------
fill                | `transparent`        | Color inside rectangle
stroke              | `black`              | Rectangle is rendered via stroke and this property specifies its color
strokeWidth         | `7`                  | Rectangle border width
angle               | `0`                  | Angle of rotation of an object (in degrees)
width               | `0`                  | if rectangle width and height is not 0,editor disable editing rectangle and add the rectangles with fixed properties 
height               | `0`                  | if rectangle width and height is not 0,editor disable editing rectangle and add the rectangles with fixed properties 
top                | `0`                    | Top position of rectangle 
left                | `0`                   |Left position of rectangle 
opacity            | `1`                    | Opacity of rectangle
strokeUniform       | `true`                | When `false`, the stoke width will scale with the object. When `true`, the stroke will always match the exact pixel size entered for stroke width
noScaleCache        | `false`               |When `true`, cache does not get updated during scaling. The picture will get block if scaled too much and will be redrawn with correct details at the end of scaling. this setting is performance and application dependant

or you can customize your editor rectangle mode styles by overwriting default values. 
```javascript
 let customizeRectangle = { fill: 'blue',stroke: 'white',strokeWidth: "5" }
 this.editor.current.set('rect',customizeRectangle)
```
#### Select Mode
##### `set('selectMode')` to enable select mode in editor. This mode disable all other types editing and enable select mode for user can move,resize or rotate selected object.This function hasn't `params` parameter

```javascript
this.editor.current.set('selectMode')
```
 #### Arrow Mode
##### `set('arrow',params)` to enable arrow mode in editor,where `params` must be object and has it's default value
```javascript
this.editor.current.set('arrow')
```
Object key         | Default Value       | Description 
-------------       | -------------      | -------------
stroke              | `black`              | Arrow is rendered via stroke and this property specifies its color
strokeWidth         | `7`                  | Arrow border width
strokeUniform       | `true`                | When `false`, the stroke width will scale with the object. When `true`, the stroke will always match the exact pixel size entered for stroke width
noScaleCache        | `false`               |When `true`, cache does not get updated during scaling. The picture will get blocky if scaled too much and will be redrawn with correct details at the end of scaling. this setting is performance and application dependant

or you can customize your editor's arrow mode styles by overwriting default values. 
```javascript
 let customizeArrow = { stroke: 'red',strokeWidth: "3" }
 this.editor.current.set('arrow',customizeArrow)
```
 #### Free Drawing Mode
##### `set('freeDrawing',params)` to enable free drawing mode in editor,where `params` must be object and has it's default value
```javascript
this.editor.current.set('freeDrawing')
```
Object key         | Default Value       | Description 
-------------       | -------------      | -------------
stroke              | `black`              | brush's color
strokeWidth         | `7`                  | brush's width

or you can customize your editor's free drawing mode styles by overwriting default values. 
```javascript
 let customizeFreeDrawing = { stroke: 'yellow',strokeWidth: "5" }
 this.editor.current.set('freeDrawing',customizeFreeDrawing)
```
#### Crop Mode
##### `set('crop')` to enable crop mode in editor,where `params` must be cropper's parameters and has it's default value. After calling the function, the cropper will be shown in editor.
```javascript
this.editor.current.set('crop',params)  
```
Object key         | Default Value | Description 
-------------       | ------------- | -------------
width               | `200`   | cropper's width
height              | `200`      | cropper's height
overlayColor        | `#000`  | color of background overlay
overlayOpacity      | `0.7`  | opacity of background overlay
transparentCorner     | `false`  | when set to `true`, cropper's controlling corners are rendered as transparent inside
hasRotatingPoint     | `false`  | when set to `false`, cropper's controlling rotating point will not be visible or selectable
hasControls     | `true`  | when set to `false`, cropper's controls are not displayed and can not be used to manipulate object
cornerSize     | `10`  | size of cropper's controlling corners (in pixels)
borderColor     | `#000`  | color of controlling borders of cropper (when it's active)
cornerColor     | `#000`  | color of controlling corners of the cropper (when it's active)
cornerStyle    | `circle`  | specify style of control, 'rect' or 'circle'

or you can customize your editor crop mode styles by overwriting default values.
```javascript
 let cropModeOptions = { width: '50', height: '100', overlayOpacity: '0.9'}
 this.editor.current.set('crop',cropModeOptions)
```


 If you choose the area which will be cropped,you must call `applyCropping()` function.
```javascript
 this.editor.current.applyCropping()
```
## Function setBackgroundImage(imageUrl)
##### `setBackgroundImage(imageUrl)` to set editor background image
```react
this.state = {
 imageUrl:"example.png"
}
componentDidMount{    
    this.editor.current.setBackgroundImage(this.state.imageUrl);
}
```

## Function changeColor(colorHex)
##### `changeColor(colorHex)` to set color of tools
```javascript
 this.editor.current.changeColor('#371492')
```

## Function uploadImage(e)
##### `uploadImage(e)` to set background of canvas
```javascript
 this.editor.current.uploadImage(e)
```
## Function saveImage()
##### `saveImage()` to save your image,which returns image in base64 format.
```javascript
 this.editor.current.saveImage()
```
## Function saveImageAsFile()
##### `saveImageAsFile()` to save your image as file.
```javascript
 this.editor.current.saveImageAsFile()
```

## Function clear()
##### `clear()` function delete editor's all objects
```javascript
 this.editor.current.clear()
```
## Function undo()
##### With the help of undo() function you will be able to remove your last object you have added
```javascript
 this.editor.current.undo()
```
## Function redo()
##### With the help of redo() method you will be able to restore your last object which have been removed
```javascript
 this.editor.current.redo()
```


## Credits

- [Lilit Simonyan](https://github.com/lilitsimonyan98)
- [Lionix Team](https://github.com/lionix-team)