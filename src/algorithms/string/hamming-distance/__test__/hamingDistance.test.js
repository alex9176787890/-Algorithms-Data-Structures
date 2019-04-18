const hammingDistance = require('../hamingDistance');
describe('hammingDistance', () => {
    it('should throw an error when trying to compare the strings of different lengths', () => {
        const compareStringsOfDifferentLength = () => {
            hammingDistance('1', '12');
        };

        expect(compareStringsOfDifferentLength).toThrowError();
    });

    it('should calculate difference between two strings', () => {
        expect(hammingDistance('123', '123')).toBe(0);
        expect(hammingDistance('1234', '1233')).toBe(1);
        expect(hammingDistance('abcde', 'ab123')).toBe(3);
    });
});
