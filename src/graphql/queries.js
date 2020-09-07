/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMonitor = /* GraphQL */ `
  query GetMonitor($id: ID!) {
    getMonitor(id: $id) {
      id
      name
      url
      description
      status
      sslStatus
      createdAt
      updatedAt
    }
  }
`;
export const listMonitors = /* GraphQL */ `
  query ListMonitors(
    $filter: ModelMonitorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMonitors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        url
        description
        status
        sslStatus
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
