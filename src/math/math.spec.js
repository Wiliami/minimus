import { sum, sub } from './math';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 - 2 to equal -1', () => {
  expect(sub(1, 2)).toBe(-1);
});