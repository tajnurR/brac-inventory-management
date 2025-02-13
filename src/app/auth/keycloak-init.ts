import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'https://erpdevelopment.brac.net/idp', // Keycloak server URL
  realm: 'brac', // Your realm
  clientId: 'erp', // Your client ID
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
