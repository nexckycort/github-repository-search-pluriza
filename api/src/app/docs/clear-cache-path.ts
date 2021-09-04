export const clearCachePath = {
  delete: {
    tags: ['Search'],
    summary: 'API to clear cache',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/clearCache'
            }
          }
        }
      },
      404: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
