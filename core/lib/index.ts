import {existsSync} from 'fs'
import * as fs from "fs";

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

export function faker(limit: number): string[] {
    const array = ['ben', 'clock', 'phone', 'head', 'heart', 'call', 'You', 'me', 'i', 'wow', 'js', 'ts', 'get', 'lost', 'theme', 'book', 'pen', 'dot', 'daksin-script']
    const arr: string[] = []

    for(let i = 0; i<limit; i++) {
          arr.push(array[Math.floor(Math.random() * array.length)])
    }

    return arr
}

export function rm(path: string): string | undefined {
    try {
        if(fs.existsSync(path)) {
            fs.rmSync(path)
            return `File ${path} was successfully deleted`
        } else {
            return 'file wasn\'t found'
        }
    } catch (e: any) {
        return e
    }
}

export function debug(code: string): any | undefined {
    try {
        return eval(code)
    } catch (e: any) {
        return e
    }
}
