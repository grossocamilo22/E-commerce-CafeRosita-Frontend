import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NAME_PATTERN } from '../../constants';

// Validador personalizado para nombres y apellidos
export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    // Expresión regular para validar nombres y apellidos (letras, acentos, diéresis, espacios, punto, guion y ñ)
    const regex = new RegExp(NAME_PATTERN);
    if (value && !regex.test(value)) {
      return { invalidName: { value } }; // Retorna un error si no es válido
    }

    return null; // Si es válido, no hay error
  };
}
