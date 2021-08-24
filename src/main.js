const AnnaClient = require('./structures/AnnaClient')
const { TOKEN } = require('./utils/config')

let client = new AnnaClient({ prefix: '!' })

client.login(TOKEN)