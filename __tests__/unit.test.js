// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// phone
test('9493231234 is not a valid phone #', () => {
  expect(isPhoneNumber("9493231234")).toBe(false);
});

test('949-323-1234 is valid phone #', () => {
  expect(isPhoneNumber("949-323-1234")).toBe(true);
});

test('1-949-323-1234 is valid phone #', () => {
  expect(isPhoneNumber("1-949-323-1234")).toBe(true);
});

test('(949)-323-1234 is not valid phone #', () => {
  expect(isPhoneNumber("abcde")).toBe(false);
});

// email
test('test@example.com is a valid email', () => {
  expect(isEmail("test@example.com")).toBe(true);
});

test('testemail@google.co is a valid email', () => {
  expect(isEmail("testemail@google.co")).toBe(true);
});

test('test.example.com is not a valid email', () => {
  expect(isEmail("test.example.com")).toBe(false);
});

test('test@.com is not a valid email', () => {
  expect(isEmail("test@.com")).toBe(false);
});

// password
test('Pass1234 is a strong password', () => {
  expect(isStrongPassword("Pass1234")).toBe(true);
});

test('a12345678901234 is a strong password', () => {
  expect(isStrongPassword("a12345678901234")).toBe(true);
});

test('12345678Aa! is not a strong password', () => {
  expect(isStrongPassword("12345678Aa!")).toBe(false);
});

test('pas is not a strong password', () => {
  expect(isStrongPassword("pas")).toBe(false);
});

// date
test('12/31/2021 is a valid date', () => {
  expect(isDate("12/31/2021")).toBe(true);
});

test('1/1/2021 is a valid date', () => {
  expect(isDate("1/1/2021")).toBe(true);
});

test('2021-01-01 is not a valid date', () => {
  expect(isDate("2021-01-01")).toBe(false);
});

test('3112/2021 is not a valid date', () => {
  expect(isDate("3112/2021")).toBe(false);
});

// hex
test('#ff5733 is a valid hex color', () => {
  expect(isHexColor("#ff5733")).toBe(true);
});

test('#FFF is a valid hex color', () => {
  expect(isHexColor("#FFF")).toBe(true);
});

test('#GGG is not a valid hex color', () => {
  expect(isHexColor("#GGG")).toBe(false);
});

test('f@@5733 is not a valid hex color', () => {
  expect(isHexColor("f@@5733")).toBe(false);
});


