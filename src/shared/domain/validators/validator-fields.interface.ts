export type FieldsErrors = {
  [field: string]: string[]
}

export interface ValidatorFieldsInterface<PropsValidated> {
  erros: FieldsErrors
  valitatedData: PropsValidated
  validate(data: any): boolean
}
