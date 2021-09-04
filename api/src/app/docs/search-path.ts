export const searchPath = {
  post: {
    tags: ['Search'],
    summary: 'API to search on github',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/searchParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/search'
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
