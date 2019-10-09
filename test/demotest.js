const assert = require('assert');
const sumar = require('../index');

//afirmaciones
describe('Probar las sumas de num',()=>{
    it('Cinco más cinco es diez',()=>{
        assert.equal(10,sumar(5,5));
    });
    it('Cinco más cinco no son veinte',()=>{
        assert.notEqual(20, sumar(5,5));
    })
});

