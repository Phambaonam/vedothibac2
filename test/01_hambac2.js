let chai = require('chai');
chai.should();

const math = require('./../math/hambac2');

describe("Test validate input a, b, c and delta", () => {

    it('if a not a number throw error', () => {
        (() => {
            math.validate_abc('ss', 1, 4)
        }).should.throw('a is not number');
    });

    it('if b not a number throw error', () => {
        (() => {
            math.validate_abc(1, 'silly param', 3)
        }).should.throw('b is not number');
    });

    it('if c not a number throw error', () => {
        (() => {
            math.validate_abc(1, 4, 'silly param')
        }).should.throw('c is not number');
    });

    it('if a equal 0 throw error', () => {
        (() => {
            math.validate_abc(0, 1, 2)
        }).should.throw('a equal to zero');
    });

});

describe('Test delta and return x1,x2', () => {

    it('if delta less than 0 throw error', () => {
        (() => {
            math.findX(1, 4, 5)
        }).should.throw('delta less than zero');
    });

    it('Return x1, x2', () => {
        math.findX(1, 4, 4).should.deep.equal([-2, -2]);
    });

});

describe('Test return value y = a*x^2 + b*x + c, params:a,b,c,x', () => {

    it('Return value of y', () => {
        math.findY(1, 4, 4, -1).should.equal(1);
    });

});

