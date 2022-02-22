const fs = require('fs')

const {readFile, writeFile} = require('fs/promises')

export async function main(): Promise<any> {
    if(fs.existsSync('./res')) {
        fs.rmSync('./res', {recursive: true, force:true})
    }
    const files = fs.readdirSync('./files', {withFileTypes: true})
    fs.mkdirSync('./res')

    for(let i = 0; i<files.length; i++) {
        const file = await readFile(`./files/${files[i].name}`, 'utf-8')
        const findFunctions = file.match(/function/gm)
        if(findFunctions) {
            console.log('u have unexpected code')
        }

        const firstStage = file.replace(/func/gm, 'function')
        const secondStage = firstStage.replace(/rtn/gm, 'return')
        const thirdStage = secondStage.replace(/\elif/gm, 'else if')
        const s4 = thirdStage.replace(/cl\(/gm, 'console.log(')
        const s5 = s4.replace(/\.djs/gm, '')
        const s6 = s5.replace(/\ ->/gm, ':')
        const s7 = s6.replace(/\|or\|/gm, '|')
        const nameForFile = files[i].name.replace(/\.djs/gm, '.ts')
        await writeFile(`./res/${nameForFile}`, s7, 'utf-8', (err: any) => {
            if (err) throw err;
            console.log('done')
        })
    }
}
main()
