import { FormControl } from '@angular/forms';

//Configuración para un campo de entrada en un formulario.
export interface FormInputConfig {
  type: string; //Tipo de campo de entrada (por ejemplo, 'text', 'email').
  formControlName: string; //Nombre del control en el FormGroup.
  label: string; //Etiqueta descriptiva del campo.
  formControl: FormControl; //Instancia de FormControl para manejar estado y validación.
  validationAttributesFields?: {
    //Atributos de validación opcionales.
    htmlAttributes: { [key: string]: string | number | boolean }; //Atributos HTML personalizados (por ejemplo, 'required', 'minlength').
    shouldAddValidation: boolean; //Si es `true`, se aplican los `htmlAttributes`.
  };
}
