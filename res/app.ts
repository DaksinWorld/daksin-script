import bcrypt from 'bcryptjs'

export function start(password: string): boolean {
    const salt = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password, salt)
    const compared = bcrypt.compareSync(password, '$2a$10$77KuF/2bVlhffSnXeDuNUu96MtfMzjTl6AvOMMVg0Ls25Q7Ma2Sb6')
    return compared
}
