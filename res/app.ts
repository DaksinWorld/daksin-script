import bcrypt from 'bcryptjs'
import {returnFunction, evaluateFunction, latestItem, getObjectKeys, faker, rm, debug} from '../core/lib/index'

export function start(password: string): boolean | string | undefined {
    const salt = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password, salt)
    const compared = bcrypt.compareSync(password, '$2a$10$77KuF/2bVlhffSnXeDuNUu96MtfMzjTl6AvOMMVg0Ls25Q7Ma2Sb6')

    console.log(returnFunction('string'))
    console.log(evaluateFunction('2+2'))
    console.log(latestItem(['asdd', 'adasd', 'last']))
    console.log(getObjectKeys({data: {name: 'asdasd'}, data2: {name: 'sadasd'}}))
    console.log(faker())
    console.log(rm('./text.txt'))
    console.log(debug('2+2'))
    if (compared) {
        return 'Success!'
    }  else if (!compared){
        return 'Error!'
    }
}
