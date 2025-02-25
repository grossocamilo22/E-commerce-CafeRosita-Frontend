declare let google: any;
import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginFormContent, RegisterFormContent } from '../interfaces/auth';
import { GOOGLE_CLIENT_ID } from '../../../../environments/enviorement.dev';
import {
  formLoginFields,
  formRegisterFields,
} from '../config/auth-form-config';
import { FormInputConfig } from '../../../core/interfaces';
import { FormValidationService } from '../../../core/validations/form-validation.service';
import { Subject, takeUntil } from 'rxjs';
import { matchValidator } from '../../../core/validations/Validators/match-validator';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, AfterViewInit {
  passwordVisibility: { password: boolean; confirmPassword: boolean } = {
    password: false,
    confirmPassword: false,
  };

  //Observable utilizado para gestionar la destrucción de suscripciones.
  private destroy$ = new Subject<void>();

  //Servicio para la validación de campos del formulario
  formValidationService = inject(FormValidationService);

  //Etiqueta del botón de envío
  submitButtonLabel: string = '';

  //Formulario de autenticación
  authForm!: FormGroup;

  //Indica si el usuario está en la página de inicio de sesión
  isOnLoginPage: boolean = false;

  titleAuthForm: string = '';

  //Definición de los campos del formulario de autenticación con sus propiedades
  formAuthFields!: FormInputConfig[];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}
  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      // El 'client_id' es el identificador de tu aplicación registrada en Google Cloud
      client_id: GOOGLE_CLIENT_ID,
      auto_select: false,
      context: 'use',
      hd: '*',
      // 'función que se ejecutará cuando el usuario complete el inicio de sesión
      callback: (resp: any) => {
        console.log(resp);
      },
    });
    // Renderizamos el botón de inicio de sesión de Google en el contenedor con el id 'google-btn'
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled-blue',
      size: 'large',
      shape: 'pill',
    });
  }

  /**
   * Inicializa el formulario de autenticación al cargar el componente.
   * - Obtiene los datos de la ruta (título y tipo de página).
   * - Define si el usuario está en la página de login o registro.
   * - Configura los campos del formulario en función de la página.
   */
  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.titleAuthForm = data['title'];
      this.submitButtonLabel = data['page'];
      this.isOnLoginPage = data['page'] === 'login' ? true : false;
      const authFormGroup: { [key: string]: FormControl } = {};

      // Selecciona los campos del formulario según el tipo de página
      this.formAuthFields = this.isOnLoginPage
        ? formLoginFields
        : formRegisterFields;

      // Agrega los controles de los campos al grupo de formulario
      this.formAuthFields.forEach((formAuthField) => {
        authFormGroup[formAuthField.formControlName] =
          formAuthField.formControl;
      });

      // Crea el formulario con los campos seleccionados
      this.authForm = this.formBuilder.nonNullable.group<
        LoginFormContent | RegisterFormContent
      >(authFormGroup as LoginFormContent | RegisterFormContent,{validators:matchValidator('password','confirmPassword')});
    });
  }

  // Cambia el ícono y el visbilidad de los campos de confirmación de contraseña y contraseña
  togglePasswordFieldsState(
    FormInputValue: FormInputConfig,
    value: string
  ): void {
    if (value == 'password' || value == 'confirmPassword') {
      FormInputValue.type = !this.passwordVisibility[value]
        ? 'text'
        : 'password';
      this.passwordVisibility[value] = !this.passwordVisibility[value];
    }
  }

  // Aplica los atributos de validación a un elemento html(input)
  // si "shouldAddValidation" es "true" en la configuracion.
  // Luego, desactiva `shouldAddValidation` para evitar que se apliquen múltiples veces.
  applyValidationAttributes(
    htmlElement: HTMLInputElement,
    formInputConfig: FormInputConfig
  ) {
    // Verifica si hay campos de atributos de validación definidos y si la validación debe ser aplicada
    if (
      formInputConfig.validationAttributesFields &&
      formInputConfig?.validationAttributesFields.shouldAddValidation
    ) {
      // Obtiene los atributos de validación definidos en la configuración
      let attributes =
        formInputConfig.validationAttributesFields.htmlAttributes;

      // Recorre todos los atributos y los aplica al elemento HTML
      Object.keys(attributes).forEach((key) => {
        htmlElement.setAttribute(key, String(attributes[key]));
      });

      // Evita que se aplique la validación nuevamente
      formInputConfig.validationAttributesFields.shouldAddValidation = false;
    }
  }

  //
  submitForm() {}

  //Método del ciclo de vida de Angular que se ejecuta cuando el componente se destruye.
  ngOnDestroy(): void {
    this.destroy$.next(); // Notifica a las suscripciones que deben cancelarse.
    this.destroy$.complete(); // Completa el Subject para liberar recursos.
  }
}
