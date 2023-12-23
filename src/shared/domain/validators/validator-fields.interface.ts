export type FieldsErrors = {
  [field: string]: string[]
}

export interface ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsErrors
  valitatedData: PropsValidated
  validate(data: any): boolean
}
