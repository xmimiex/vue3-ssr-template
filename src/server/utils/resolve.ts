import * as path from 'path'

export default (p: string) => path.resolve(process.cwd(), p)
