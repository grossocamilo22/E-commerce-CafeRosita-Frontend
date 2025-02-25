import { FormControl, Validators } from '@angular/forms';
import { FormInputConfig } from '../../../core/interfaces';
import { nameValidator } from '../../../core/validations/Validators/name-validator';
import { NumberValidator } from '../../../core/validations/Validators/number-validator';
import { passwordValitor } from '../../../core/validations/Validators/password-validator';
import { EMAIL_PATTERN, NAME_PATTERN, NUMBER_PATTERN, PASSWORD_PATTERN } from '../../../core/constants';

//Configuración de los campos del formulario de registro de usuarios
//Cada objeto representa un campo con su tipo, validaciones y atributos HTML.
export const formRegisterFields: FormInputConfig[] = [
  {
    type: 'text',
    formControlName: 'name',
    label: 'el nombre',
    formControl: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required,nameValidator()],
    }),
    validationAttributesFields: {
      htmlAttributes: {
        required: true,
        minlenght: 3,
        pattern: NAME_PATTERN,
      },
      shouldAddValidation: true,
    },
  },
  {
    type: 'text',
    formControlName: 'surname',
    label: 'el apellido',
    formControl: new FormControl<String>('', {
      nonNullable: true,
      validators: [Validators.required,nameValidator()],
    }),
    validationAttributesFields: {
      htmlAttributes: {
        required: true,
        minlenght: 3,
        pattern: NAME_PATTERN,
      },
      shouldAddValidation: true,
    },
  },
  {
    type: 'text',
    formControlName: 'address',
    label: 'la dirección',
    formControl: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  },
  {
    type: 'number',
    formControlName: 'phoneNumber',
    label: 'el numero de celular',
    formControl: new FormControl<number>(0, {
      nonNullable: true,
      validators: [Validators.required,Validators.minLength(8), Validators.maxLength(10),NumberValidator()],
    }),
    validationAttributesFields: {
      htmlAttributes: {
        required: true,
        min: 7,
        max: 10,
        pattern: NUMBER_PATTERN,
      },
      shouldAddValidation: true,
    },
  },
  {
    type: 'email',
    formControlName: 'email',
    label: 'el correo electrónico',
    formControl: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required,Validators.email],
    }),
    validationAttributesFields: {
      htmlAttributes: {
        required: true,
        pattern: EMAIL_PATTERN,
      },
      shouldAddValidation: true,
    },
  },
  {
    type: 'password',
    formControlName: 'password',
    label: 'la contraseña',
    formControl: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required,Validators.minLength(8),passwordValitor()],
    }),
    validationAttributesFields: {
      htmlAttributes: {
        required: true,
        minLength: 8,
        pattern: PASSWORD_PATTERN,
      },
      shouldAddValidation: true,
    },
  },
  {
    type: 'password',
    formControlName: 'confirmPassword',
    label: 'la confirmación de contraseña',
    formControl: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    validationAttributesFields: {
      htmlAttributes: { required: true },
      shouldAddValidation: true,
    },
  },
];

//Configuración de los campos del formulario de inicio de sesión de usuarios
//Cada objeto representa un campo con su tipo, validaciones y atributos HTML.
export const formLoginFields: FormInputConfig[] = [
  {
    type: 'email',
    formControlName: 'email',
    label: 'el correo electrónico',
    formControl: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    validationAttributesFields: {
      htmlAttributes: {
        required: true,
      },
      shouldAddValidation: true,
    },
  },
  {
    type: 'password',
    formControlName: 'password',
    label: 'la contraseña',
    formControl: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    validationAttributesFields: {
      htmlAttributes: {
        required: true,
      },
      shouldAddValidation: true,
    },
  },
];
