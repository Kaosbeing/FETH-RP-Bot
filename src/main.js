const AnnaClient = require('./structures/AnnaClient')
const { TOKEN, PREFIX } = require('./utils/config')

let client = new AnnaClient({ prefix: PREFIX })

client.login(TOKEN)