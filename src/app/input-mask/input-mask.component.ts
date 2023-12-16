import { Component, Input } from '@angular/core';
/**
 * This component provides an input field with a specified mask pattern and shape.
 */
@Component({
  selector: 'input-mask',
  templateUrl: './input-mask.component.html'
})
export class InputMaskComponent {
  /**
  * The mask pattern for input validation.
  */
  @Input() maskPattern!: string;

  /**
   * The shape of the input field (e.g., '(000-000)' or '000' 0 is the repacement of the char or number).
   */
  @Input() maskShape!: string;

  @Input() styleObject: { [key: string]: string } = {
    'border': '1px solid #ccc',
    'padding': '5px',
    'font-size': '16px'
  };
  customPatterns: {
    [character: string]: {
      pattern: RegExp;
      optional?: boolean | undefined;
      symbol?: string | undefined;
    };
  } = { '0': { pattern: new RegExp(this.maskPattern) } }
  ngOnInit() {
    /**
* A custom pattern object based on the provided `maskPattern`.
*/
    this.customPatterns = { '0': { pattern: new RegExp(this.maskPattern) } };
  }
}
