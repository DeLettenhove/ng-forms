import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const pass = nameRe.test(control.value);
    return pass ? {password: {value: control.value}} : null;
  };
}