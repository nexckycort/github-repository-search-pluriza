import { SEARCH_TYPE } from 'domain/models/search-model'
import { Validator } from 'infrastructure/lib/validator'

export const schemaSearch = Validator.object().keys({
  type: Validator.string()
    .min(3)
    .max(30)
    .valid(...SEARCH_TYPE)
    .required(),
  q: Validator.string().min(1).max(100).required()
})
