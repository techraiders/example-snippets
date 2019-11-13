import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateAutoFormat]'
})
export class DateAutoFormatDirective {
  constructor() {}

  isShift = false;
  seperator = '/';

  @HostListener('keydown', ['$event']) onKeydown(event) {
    return this.isNumeric(event.target, event.keyCode);
  }
  @HostListener('keyup', ['$event']) onKeyup(event) {
    // return this.ValidateDateFormat(event.target, event.keyCode);
  }

  isNumeric(input, keyCode) {
    if (keyCode === 16) {
      this.isShift = true;
    }
    // Allow only Numeric Keys.
    if (
      ((keyCode >= 48 && keyCode <= 57) ||
        keyCode === 8 ||
        keyCode <= 37 ||
        keyCode <= 39 ||
        (keyCode >= 96 && keyCode <= 105)) &&
      this.isShift === false
    ) {
      if (
        (input.value.length === 2 || input.value.length === 5) &&
        keyCode !== 8
      ) {
        input.value += this.seperator;
      }

      return true;
    } else {
      return false;
    }
  }

  ValidateDateFormat(input, keyCode) {
    const dateString = input.value;
    if (keyCode === 16) {
      this.isShift = false;
    }
    // const regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    const regex = /(((0[1-9]|1[0-2])\/(0|1)[0-9]|2[0-9]|3[0-1])\/((19|20)\d\d))$/;

    // Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString) || dateString.length === 0) {
      this.ShowHideError(input, 'none');
    } else {
      this.ShowHideError(input, 'block');
    }
  }

  ShowHideError(textbox, display) {
    const row = textbox.parentNode.parentNode;
    const errorMsg = row.getElementsByTagName('span')[0];
    if (errorMsg != null) {
      errorMsg.style.display = display;
    }
  }
}
