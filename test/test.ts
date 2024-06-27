import log from '../src/index.js';

const test = () => {
    log('i', 'test', 'This is a DEBUG log');
    log('w', 'test', 'This is a Warning');
    log('o', 'test', 'Everything Works');
    log('e', 'test', 'There is an ERROR!!!');
}

test();
