import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appDisableArabic]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DisableArabicDirective,
      multi: true,
    },
  ],
})
export class DisableArabicDirective implements Validator {
  arabicRegex = /[\u0600-\u06FF]/;

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    let value = control.value;
    if (this.arabicRegex.test(value)) {
      return { noArabic: true };
    }
    return null;
  }
}
