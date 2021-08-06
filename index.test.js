const doors = require('./doors')

describe('the 100 doors kata', () => {
    it('exists', () => {
        expect(doors).toBeDefined();
    })

    describe('when making one pass', () => {
        it('toggles all doors to open', () => {
            let result = doors.open(1, 100);
            expect(result).toEqual('@'.repeat(100));
        })
    })

    describe('when making two passes', () => {
        it('toggles every other door', () => {
            let result = doors.open(2, 100);
            expect(result).toEqual('@#'.repeat(50));
        })
    })

    describe('on the third pass', () => {
        it('toggles every third door to open', () => {
            let result = doors.open(3, 100);
            expect(result).toEqual('@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###');
        })
    })

    describe('on the 100th pass', () => {
        it('toggles the correct doors', () => {
            let result = doors.open(100, 100);
            expect(result).toEqual('@##@####@######@########@##########@############@##############@################@##################@');
        })
    })
})