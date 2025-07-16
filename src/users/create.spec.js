import { create } from '../users/create';

describe('Receive object user', () => {
    const result = create()

    it('Receive object user', () => {
        expect(result).toEqual({
            name: 'Wiliamis',
            age: 27
        });
    });
});