import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './project'
import { homepage } from './homepage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, homepage],
}
