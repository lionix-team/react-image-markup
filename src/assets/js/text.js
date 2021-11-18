import { fabric } from 'fabric';
import CanvasHistory from './canvasHistory';

export default (function () {
  let activeObject = false;
  let drag, textColor, textFontFamily, textFontSize, customText, color;
  function Text(canvas, draggable = false, params) {
    this.canvas = canvas;
    this.className = 'text';
    this.isDrawing = false;
    this.origX = 0;
    this.origY = 0;
    this.selectedFont = 32;
    this.bindEvents();
    drag = draggable;
    if (color && color !== params.fill) {
      color = params.fill;
      return Text;
    }
    if (params) {
      textColor = params.fill;
      textFontFamily = params.fontFamily;
      textFontSize = params.fontSize;
      customText = params.placeholder;
    }
  }
  Text.prototype.bindEvents = function () {
    let instance = this;
    instance.selectable = true;
    instance.canvas.on('mouse:down', function (o) {
      instance.onMouseDown(o);
    });
    instance.canvas.on('mouse:move', function (o) {
      instance.onMouseMove(o);
    });
    instance.canvas.on('mouse:up', function (o) {
      instance.onMouseUp(o);
    });
    Text.prototype.onMouseUp = function () {
      return Text;
    };
    Text.prototype.onMouseMove = function () {
      let inst = this;
      if (!inst.isEnable()) {
        return;
      }
      if (inst.canvas.getActiveObject()) {
        activeObject = true;
      } else {
        activeObject = false;
      }
      inst.canvas.renderAll();
    };
    Text.prototype.onMouseDown = function (o) {
      let inst = this;
      if (drag) {
        inst.enable();
        if (inst.canvas.getActiveObject() && !inst.canvas.getActiveObject().text) {
          inst.canvas.getActiveObject().selectable = false;
          inst.canvas.getActiveObject().evented = false;
        }
        if (
          (!inst.canvas.getActiveObject() && !activeObject) ||
          (inst.canvas.getActiveObject() && !inst.canvas.getActiveObject().text)
        ) {
          let pointer = inst.canvas.getPointer(o.e);
          this.origX = pointer.x;
          this.origY = pointer.y;
          let text = new fabric.IText(customText, {
            fill: textColor,
            fontFamily: textFontFamily,
            left: this.origX,
            top: this.origY,
            fontSize: textFontSize,
            hasBorders: false,
            hasControls: false,
          });

          text.selectionStart = 0;
          text.selectionEnd = text.text.length;
          inst.canvas.add(text).setActiveObject(text);
          text.enterEditing();
          text.hiddenTextarea.focus();
          inst.canvas.requestRenderAll();
          new CanvasHistory(inst.canvas);
        }
        if (
          inst.canvas.getActiveObject() &&
          activeObject &&
          inst.canvas.getActiveObject().hiddenTextarea
        ) {
          inst.canvas.getActiveObject().hasControls = true;
          inst.canvas.getActiveObject().hasBorders = true;
          inst.canvas.getActiveObject().lockMovementX = true;
          inst.canvas.getActiveObject().lockMovementY = true;
          inst.canvas.getActiveObject().lockUniScaling = true;
          inst.canvas.renderAll();
        }
      }
    };
  };
  Text.prototype.isEnable = function () {
    return this.isDrawing;
  };
  Text.prototype.enable = function () {
    this.isDrawing = true;
  };
  Text.prototype.disable = function () {
    this.isDrawing = false;
  };
  return Text;
})();
