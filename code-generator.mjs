import fs from 'fs'
import path from 'path'
import glob from 'glob'

// Generate files to provide paths for Redirect

const getCode = (parentCount) => {
    const parentPath = [...Array(parentCount)].map((x) => '..').join('/')
    return `// This is the generated code for Redirect. See code-generator.mjs
import { Redirect } from '${parentPath}/components/redirect'
export default Redirect`
}

const generateCodes = () => {
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
}

generateCodes()
