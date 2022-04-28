// getting chair imported
const chai = window.chai;
const expect = chai.expect;

// general format to follow to write tests

// describe('put your function name', function(){
//     it('a brief description', function(){
//         expect('function name here').to.equal('expected value here')
//     })
// })

// testing code here

// CTRL Slash to uncomment in VSCode

// // passing
// describe('addTwoNumbers', function () {
//     it('should return right sum', function () {
//         expect(7).to.equal(5 + 2)
//     })
// })

// // failing test
// describe('addTwoNumbers', function () {
//     it('should return right sum', function () {
//         expect(7).to.equal(5 + 9)
//     })
// })

// describe('addTwoNumbers', function () {
//     it('should return right sum', function () {
//         expect(true).to.equal(true)
//     })
// })

// testing addTwoNumbers fn in app.js
describe('addTwoNumbers', function () {
    it('should return right sum', function () {
        let result = addTwoNumbers(10, 15)
        expect(result).to.equal(25)

    })

    it('should check for string arguments', function () {
        let result = addTwoNumbers('test', 15)
        expect(result).to.be.false;

    })

    it('should return 0', function () {
        let result = addTwoNumbers()
        expect(result).to.be.equal(0);

    })
})


// testing multTwoNumbers fn in app.js
describe('multTwoNumbers', function () {
    it('should return right sum for two positive numbers', function () {
        let result = multTwoNumbers(10, 15)
        expect(result).to.equal(150)

    })

    it('should return right sum for a negative number', function () {
        let result = multTwoNumbers(-10, 15)
        expect(result).to.equal(-150)

    })

    it('should return right sum for two negative numbers', function () {
        let result = multTwoNumbers(-10, -10)
        expect(result).to.equal(100)

    })

    it('should check for string arguments', function () {
        let result = multTwoNumbers('test', 15)
        expect(result).to.be.false;

    })

    it('should return 0', function () {
        let result = multTwoNumbers()
        expect(result).to.be.equal(0);

    })
})


// test show data fn
describe('show_data()', function () {
    it('should print name and age successfully', function () {
        let result = show_data('test', 55);
        expect(result).to.be.true;
    })
})