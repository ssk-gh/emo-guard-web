import fs from 'fs'
import path from 'path'
import glob from 'glob'

const getCode = (parentCount) => {
    const parentPath = [...Array(parentCount)].map((x) => '..').join('/')
    return `import { Redirect } from '${parentPath}/components/redirect'
export default Redirect`
}

const pages = glob.sync('pages/\\[locale\\]/**/*.tsx')

pages.forEach((page) => {
    const parentCount = page.split('/').length - 2
    const code = getCode(parentCount)
    const dest = page.replace('/[locale]', '')
    const dirname = path.dirname(dest)

    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true })
    }
    fs.writeFileSync(dest, code, { encoding: 'utf8' })
})
