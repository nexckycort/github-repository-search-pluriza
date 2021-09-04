export const searchParamsSchema = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['users', 'repositories', 'issues']
    },
    q: {
      type: 'string'
    }
  },
  required: ['type', 'q']
}

// request
