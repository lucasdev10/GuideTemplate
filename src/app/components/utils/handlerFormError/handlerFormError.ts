export class HandlerFormError {
  static getErrorMsg(
    fieldName: string,
    validatorName: string,
    validatorValue?: any
  ) {
    const config = {
      email: `${fieldName} is invalid.`,
      required: `${fieldName} is required.`,
      minlength: `${fieldName} need to have at least ${validatorValue.requiredLength} characters.`,
      maxlength: `${fieldName} need to have at most ${validatorValue.requiredLength} characters.`,
      pattern: 'Invalid field.',
    };

    return config[validatorName];
  }
}
