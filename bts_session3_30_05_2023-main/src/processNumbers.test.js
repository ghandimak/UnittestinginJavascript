const processNumbers = require('./processNumbers');

test('processNumbers calculates maximum number and total sum correctly', () => {
  const jsonData = {
    numbers: [5, 10, 2, 8, 3],
  };

  const result = processNumbers(jsonData);

  expect(result.maxNumber).toBe(10);
  expect(result.sum).toBe(28);
});
