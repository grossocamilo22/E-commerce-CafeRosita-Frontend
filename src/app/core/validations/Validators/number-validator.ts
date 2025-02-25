import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NUMBER_PATTERN } from '../../constants';

// Validador personalizado para permitir solo números
export function NumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    // Expresión regular que permite solo números
    const regex = new RegExp(NUMBER_PATTERN);
    if (value && !regex.test(value)) {
      return {invalidNumber:{value}}; // Retorna un error si no es un número
    }
    return null; // Si es un número válido, no hay error
  };
}
