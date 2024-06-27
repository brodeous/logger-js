
const types: { [key: string]: string[]} = {
    w: ['w', 'Warning', 'yellow'],
    e: ['!', 'Error', 'red'],
    i: ['i', 'DEBUG', 'cyan'],
    o: ['+', 'Okay', 'green'],
}

// Most are place holders
// Don't know when I'll be using them though
const styles: { [key: string]: number} = {
    bold: 1,
    dim: 2,
    italic: 3,
    underline: 4,
    inverse: 5,
    hidden: 6,
    strikeout: 7,

    black: 30,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    magenta: 35,
    cyan: 36,
    white: 37,
    gray: 90
}

const typeNames = Object.keys(types);

// log('w', 'CONFIG', "message...")
// output:
//      [w] Warning: [CONFIG] {message}
const log = (type: string, method: string, message: string, options = {}) => {

    if (!typeNames.includes(type)) {
        throw `log: incorrect type given > w, e, i, o`;
    }

    const color = styles[types[type][2]];
    const letter = types[type][0];
    const status = types[type][1];
    console.log(`\x1b[${color}m[${letter}]\x1b[0m ` + `${status}`.padEnd(8) + `: [\x1b[${styles.yellow}m${method}\x1b[0m] ${message}`);
}

export default log;
