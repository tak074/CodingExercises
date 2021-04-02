const Palindrome = require('./ibmInterview');


// str
test('a', () => {
  expect(Palindrome('a')).toBe(true);

})
test('mom', () => {
  expect(Palindrome('mom')).toBe(true);

})
test('dude', () => {
  expect(Palindrome('dude')).toBe(false);

})
test('mom mom', () => {
  expect(Palindrome('mom mom')).toBe(true);

})
test('mom dad', () => {
  expect(Palindrome('mom dad')).toBe(false);

})
test('', () => {
  expect(Palindrome('')).toThrow('Error');
})
test('moM', () => {
  expect(Palindrome('moM')).toBe(true);
})








// numbers

// has spaces.

// a is a palindrome
// mom is a palindrome
// dude is not a palindrome
// mom mom is a palindrome
// mom dad is not a palindrome
// is a palindrome?
// '' throws an error?
// moM is a palindrome?