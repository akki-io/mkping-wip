/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMonitor = /* GraphQL */ `
  mutation CreateMonitor(
    $input: CreateMonitorInput!
    $condition: ModelMonitorConditionInput
  ) {
    createMonitor(input: $input, condition: $condition) {
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
export const updateMonitor = /* GraphQL */ `
  mutation UpdateMonitor(
    $input: UpdateMonitorInput!
    $condition: ModelMonitorConditionInput
  ) {
    updateMonitor(input: $input, condition: $condition) {
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
export const deleteMonitor = /* GraphQL */ `
  mutation DeleteMonitor(
    $input: DeleteMonitorInput!
    $condition: ModelMonitorConditionInput
  ) {
    deleteMonitor(input: $input, condition: $condition) {
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
