"use strict";

class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  createElem(text) {
    const elem = document.createElement("div");
    document.body.appendChild(elem);
    let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    elem.style.cssText = param;
    elem.textContent = text;
  }
}

const square = new Options(100, 300, "green", 18, "center");

square.createElem("This is new elem");
