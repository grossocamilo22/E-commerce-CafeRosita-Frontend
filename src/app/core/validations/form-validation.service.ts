import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { getErrorMessage } from './messages-validations';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  // Función que valida un campo del formulario y obtiene el mensaje de error correspondiente.
  public formValidation = (
    formGroup: FormGroup,
    formControlName: string,
    label: string
  ): string => {
    // Obtener los errores del formulario asociados al control
    const errors = formGroup.get(formControlName)?.errors || {};

    // Obtener el primer tipo de error (si lo hay) del control
    let errorType = Object.keys(errors) ? Object.keys(errors)[0] : null;

    // Retornar el mensaje de error correspondiente usando la función getErrorMessage
    return getErrorMessage(errorType, label, errors);
  };

  // Función que verifica si un campo es inválido (es decir, si tiene errores y ha sido tocado o modificado).
  public invalidField(form: FormGroup, formControlName: string) {
    // Retorna verdadero si el control tiene errores y ha sido tocado o modificado
    return (
      form.get(formControlName)?.errors &&
      (form.get(formControlName)?.touched || form.get(formControlName)?.dirty)
    );
  }
}
