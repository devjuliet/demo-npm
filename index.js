const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'all';
logger.isTraceEnabled();

let x = 4;
logger.debug(`El valor de la variable x es ${x}`);
logger.error(`El valor de la variable x es ${x}`);
logger.info(`El valor de la variable x es ${x}`);
logger.warn(`El valor de la variable x es ${x}`);
logger.fatal(`El valor de la variable x es ${x}`);
logger.trace(`El valor de la variable x es ${x}`);

function sumar(x,y){
    return x+y;
}

module.exports = sumar;