import { expect } from 'chai';

describe('When we run tests', (): void => {
    it('Should actually work', (): void => {
        expect(true).to.be.eq(true);
    });
});

describe('When One plus one is indeed 2?', (): void => {
    it('Should return 2', (): void => {
        expect(2).to.be.eq(2);
    });
});
