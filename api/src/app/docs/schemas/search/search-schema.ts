export const searchSchema = {
  type: 'object',
  properties: {
    message: {
      type: 'string'
    },
    statusCode: {
      type: 'string'
    },
    data: {
      type: 'object',
      properties: {
        total_count: {
          type: 'number'
        },
        incomplete_results: {
          type: 'boolean'
        },
        items: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              login: {
                type: 'string'
              },
              id: {
                type: 'integer',
                format: 'int32'
              },
              node_id: {
                type: 'string'
              },
              avatar_url: {
                type: 'string'
              },
              gravatar_id: {
                type: 'string'
              },
              url: {
                type: 'string'
              },
              html_url: {
                type: 'string'
              },
              followers_url: {
                type: 'string'
              },
              following_url: {
                type: 'string'
              },
              gists_url: {
                type: 'string'
              },
              starred_url: {
                type: 'string'
              },
              subscriptions_url: {
                type: 'string'
              },
              organizations_url: {
                type: 'string'
              },
              repos_url: {
                type: 'string'
              },
              events_url: {
                type: 'string'
              },
              received_events_url: {
                type: 'string'
              },
              type: {
                type: 'string'
              },
              site_admin: {
                type: 'boolean'
              },
              score: {
                type: 'integer',
                format: 'int32'
              }
            }
          }
        }
      }
    }
  }
}

// response
