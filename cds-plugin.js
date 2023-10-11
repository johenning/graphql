const cds = require('@sap/cds')
require('./lib/api').registerCompileTargets()
const protocols = cds.env.protocols ??= {}
if (!protocols.graphql) protocols.graphql = {
  path: "/graphql", impl: "@cap-js/graphql"
}
