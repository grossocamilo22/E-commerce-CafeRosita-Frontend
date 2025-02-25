type ValidationMessages = {
  required: (name: string) => string;
  minlength: (name: string, minLength?: string) => string;
  maxlength: (name: string, maxLength?: string) => string;
  invalidName: (name: string) => string;
  invalidNumber: (name: string) => string;
  email: (name: string) => string;
  invalidPassword: (name: string) => string;
  mustMatch: ()=> string;
};

export const validationMessages: ValidationMessages = {
  required: (name: string) => `Se requiere ${name}.`,
  minlength: (name: string, minLength?: string) =>
    `${name} debe tener al menos ${minLength} caracteres.`,
  maxlength: (name: string, maxLength?: string) =>
    `${name} no debe tener más de ${maxLength} caracteres.`,
  invalidName: (name: string) =>
    `${name} no es válido. Solo se permiten letras y espacios.`,
  invalidNumber: (name: string) => `${name} debe contener solo números.`,
  email: (name: string) => `${name} debe ser válido.`,
  invalidPassword: (name: string) =>
    `${name} debe contener al menos una letra mayúscula y un carácter especial.`,
  mustMatch: () => 'Las contraseñas no coinciden.'
};

// Función para obtener el mensaje de error
export function getErrorMessage(
  errorType: string | null,
  label: string,
  errors: any
) {
  if (errorType) {
    // Si el tipo de error es 'minLength' o 'maxLength', se requiere un valor adicional
    if (errorType === 'minlength' || errorType === 'maxlength') {
      return validationMessages[errorType as keyof ValidationMessages](
        label,
        errors[errorType].requiredLength
      );
    }
    // Para otros tipos de error, no se necesita el valor adicional
    return validationMessages[errorType as keyof ValidationMessages](label);
  }
  return ''; // O un mensaje de error por defecto si no se encuentra el `errorType`
}
