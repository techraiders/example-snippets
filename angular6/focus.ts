import { Renderer } from 'angular/core';

constructor(private _renderer : Renderer) {
  this._renderer.invokeElementMethod(this.input1.nativeElement, 'focus', []);
}
