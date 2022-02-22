export function returnFunction(arg: any): any {
    return arg;
}

export function evaluateFunction(arg: string): string {
    return eval(arg);
}

export function latestItem(array: any[]): any {
    return array[array.length - 1]
}

export function getObjectKeys(obj: object): string[] {
    return Object.keys(obj)
}

export function faker(): string[] {
    const array = ['ben', 'clock', 'phone', 'head', 'heart', 'call', 'You', 'me', 'i', 'wow', 'js', 'ts', 'get', 'lost', 'theme', 'book', 'pen', 'dot', 'daksin-script']
    const arr: string[] = []

    for(let i = 0; i<5; i++) {
          arr.push(array[Math.floor(Math.random() * array.length)])
    }

    return arr
}
