import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PASSWORD_PATTERN } from '../../constants';

export function passwordValitor(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    // Expresión regular para contraseña(Al debe tener una letra en mayuscula y un caracter especial)
    const regex = new RegExp(PASSWORD_PATTERN);
    if (value && !regex.test(value)) {
      return { invalidPassword: { value } }; // Retorna un error si no es una contraseña válida
    }
    return null; // Si es una contraseña válida, no hay error
  };
}
