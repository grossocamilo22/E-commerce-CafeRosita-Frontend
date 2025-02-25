// Patrones regex para validaciones de formularios
export const NAME_PATTERN = '^[A-Za-zäÄëËïÏöÖüÜáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ. \-]+$'; //solo letras y un espacio
export const EMAIL_PATTERN =
  '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'; //formato de correo valido
export const NUMBER_PATTERN = '^[0-9]+$'; //solo números
export const PASSWORD_PATTERN = '^(?=.*[A-Z])(?=.*[\\W_]).*$'; //Al menos una letra en mayúscula y un carácter especial
