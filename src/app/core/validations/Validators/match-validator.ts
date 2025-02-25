import {
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

// Validador personalizado para la confirmación de contraseña
export function matchValidator(
  firstValue: string,
  secondValue: string
): ValidatorFn {
  return (control: AbstractControl): null => {
    // Obtiene los valores de dos controles del formulario para compararlos.
    let firstControlValue = control.get(firstValue);
    let secondControlValue = control.get(secondValue);
    if (firstControlValue?.value !== secondControlValue?.value) {
      // Agrega un error de validación al control 'secondControlValue' si su valor no coincide con 'firstControlValue'
      secondControlValue?.setErrors({ mustMatch: true });
    }
    return null;
  };
}
