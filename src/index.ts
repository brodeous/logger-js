import chalk from 'chalk';

const types = {
    w: ['w', 'Warning', 'yellow'],
    e: ['!', 'Error', 'red'],
    i: ['i', 'DEBUG', 'cyan'],
    o: ['+', 'Okay', 'green'],
}

const styles = {
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
const typeCodes = Object.values(types);
const styleNames = Object.keys(styles);
const styleCodes = Object.values(styles);

// log('w', 'CONFIG', "message...")
// output:
//      [w] Warning: [CONFIG] {message}
const log = (type: string, method: string, message: string, options = {}) => {
      
    if (!typeNames.includes(type)) {
        throw `log: incorrect type given > w, e, i, o`;
    }

    const t_idx = typeNames.indexOf(type);
    const s_idx = stylesNames.map( (
}

export default log;
