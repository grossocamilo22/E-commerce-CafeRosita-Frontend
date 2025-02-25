import { FormControl } from '@angular/forms';



export type LoginFormContent = {
  email: FormControl<string>;
  password: FormControl<string>;
};

export type RegisterFormContent = {
  name: FormControl<string>;
  surname: FormControl<string>;
  phoneNumber: FormControl<number>;
  address: FormControl<string>;
  confirmPassword : FormControl<string>;
} & LoginFormContent;
