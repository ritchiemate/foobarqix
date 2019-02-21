/* global it, describe  */
import chai from 'chai';

import FooBarQix from '../src/foobarqix';

const { expect } = chai;

const PARAMETERISED_RULES = [
  { divisor: 3, output: 'Foo' },
  { divisor: 5, output: 'Bar' },
  { divisor: 7, output: 'Qix' },
];

const PREDICATE_RULES = [
  { output: 'Foo', predicate: val => val % 3 === 0 },
  { output: 'Bar', predicate: val => val % 5 === 0 },
  { output: 'Qix', predicate: val => val % 7 === 0 },
];

const PREDICATE_ZAZZ_RULES = [
  { output: 'Zazz', predicate: val => val < 0 },
  { output: 'Foo', predicate: val => val % 3 === 0 },
  { output: 'Bar', predicate: val => val % 5 === 0 },
  { output: 'Qix', predicate: val => val % 7 === 0 },
];

describe('Foo Bar Qix Simple (3 & 5 only)', () => {
  it('should return the input value', () => {
    expect(FooBarQix.Simple(2)).to.equal(2);
  });

  it('should return Foo for an input which is a multiple of 3', () => {
    expect(FooBarQix.Simple(3)).to.equal('Foo');
    expect(FooBarQix.Simple(9)).to.equal('Foo');
  });

  it('should return Bar for an input which is a multiple of 5', () => {
    expect(FooBarQix.Simple(5)).to.equal('Bar');
    expect(FooBarQix.Simple(20)).to.equal('Bar');
  });

  it('should return FooBar for an input which is a multiple of 3 and 5', () => {
    expect(FooBarQix.Simple(15)).to.equal('FooBar');
    expect(FooBarQix.Simple(45)).to.equal('FooBar');
  });
});

describe('Foo Bar Qix Simple (3, 5 & 7)', () => {
  it('should return the input value', () => {
    expect(FooBarQix.SimpleExtended(2)).to.equal(2);
  });

  it('should return Foo for an input which is a multiple of 3', () => {
    expect(FooBarQix.SimpleExtended(3)).to.equal('Foo');
    expect(FooBarQix.SimpleExtended(9)).to.equal('Foo');
  });

  it('should return Bar for an input which is a multiple of 5', () => {
    expect(FooBarQix.SimpleExtended(5)).to.equal('Bar');
    expect(FooBarQix.SimpleExtended(20)).to.equal('Bar');
  });

  it('should return Qix for an input which is a multiple of 7', () => {
    expect(FooBarQix.SimpleExtended(7)).to.equal('Qix');
    expect(FooBarQix.SimpleExtended(14)).to.equal('Qix');
  });

  it('should return FooBar for an input which is a multiple of 3 and 5', () => {
    expect(FooBarQix.SimpleExtended(15)).to.equal('FooBar');
    expect(FooBarQix.SimpleExtended(45)).to.equal('FooBar');
  });

  it('should return FooQix for an input which is a multiple of 3 and 7', () => {
    expect(FooBarQix.SimpleExtended(21)).to.equal('FooQix');
    expect(FooBarQix.SimpleExtended(63)).to.equal('FooQix');
  });

  it('should return BarQix for an input which is a multiple of 5 and 7', () => {
    expect(FooBarQix.SimpleExtended(35)).to.equal('BarQix');
    expect(FooBarQix.SimpleExtended(70)).to.equal('BarQix');
  });

  it('should return FooBarQix for an input which is a multiple of 3, 5 and 7', () => {
    expect(FooBarQix.SimpleExtended(105)).to.equal('FooBarQix');
    expect(FooBarQix.SimpleExtended(210)).to.equal('FooBarQix');
  });
});

describe('Foo Bar Qix Parameterised', () => {
  it('should return the input value', () => {
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 2)).to.equal(2);
  });

  it('should return Foo for an input which is a multiple of 3', () => {
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 3)).to.equal('Foo');
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 9)).to.equal('Foo');
  });

  it('should return Bar for an input which is a multiple of 5', () => {
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 5)).to.equal('Bar');
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 20)).to.equal('Bar');
  });

  it('should return Qix for an input which is a multiple of 7', () => {
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 7)).to.equal('Qix');
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 14)).to.equal('Qix');
  });

  it('should return FooBar for an input which is a multiple of 3 and 5', () => {
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 15)).to.equal('FooBar');
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 45)).to.equal('FooBar');
  });

  it('should return FooQix for an input which is a multiple of 3 and 7', () => {
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 21)).to.equal('FooQix');
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 63)).to.equal('FooQix');
  });

  it('should return BarQix for an input which is a multiple of 5 and 7', () => {
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 35)).to.equal('BarQix');
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 70)).to.equal('BarQix');
  });

  it('should return FooBarQix for an input which is a multiple of 3, 5 and 7', () => {
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 105)).to.equal('FooBarQix');
    expect(FooBarQix.Parameterised(PARAMETERISED_RULES, 210)).to.equal('FooBarQix');
  });
});

describe('Foo Bar Qix Predicate', () => {
  it('should return the input value', () => {
    expect(FooBarQix.Predicate(PREDICATE_RULES, 2)).to.equal(2);
  });

  it('should return Foo for an input which is a multiple of 3', () => {
    expect(FooBarQix.Predicate(PREDICATE_RULES, 3)).to.equal('Foo');
    expect(FooBarQix.Predicate(PREDICATE_RULES, 9)).to.equal('Foo');
  });

  it('should return Bar for an input which is a multiple of 5', () => {
    expect(FooBarQix.Predicate(PREDICATE_RULES, 5)).to.equal('Bar');
    expect(FooBarQix.Predicate(PREDICATE_RULES, 20)).to.equal('Bar');
  });

  it('should return Qix for an input which is a multiple of 7', () => {
    expect(FooBarQix.Predicate(PREDICATE_RULES, 7)).to.equal('Qix');
    expect(FooBarQix.Predicate(PREDICATE_RULES, 14)).to.equal('Qix');
  });

  it('should return FooBar for an input which is a multiple of 3 and 5', () => {
    expect(FooBarQix.Predicate(PREDICATE_RULES, 15)).to.equal('FooBar');
    expect(FooBarQix.Predicate(PREDICATE_RULES, 45)).to.equal('FooBar');
  });

  it('should return FooQix for an input which is a multiple of 3 and 7', () => {
    expect(FooBarQix.Predicate(PREDICATE_RULES, 21)).to.equal('FooQix');
    expect(FooBarQix.Predicate(PREDICATE_RULES, 63)).to.equal('FooQix');
  });

  it('should return BarQix for an input which is a multiple of 5 and 7', () => {
    expect(FooBarQix.Predicate(PREDICATE_RULES, 35)).to.equal('BarQix');
    expect(FooBarQix.Predicate(PREDICATE_RULES, 70)).to.equal('BarQix');
  });

  it('should return FooBarQix for an input which is a multiple of 3, 5 and 7', () => {
    expect(FooBarQix.Predicate(PREDICATE_RULES, 105)).to.equal('FooBarQix');
    expect(FooBarQix.Predicate(PREDICATE_RULES, 210)).to.equal('FooBarQix');
  });
});

describe('Foo Bar Qix Zazz Predicate', () => {
  it('should return the input value', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 2)).to.equal(2);
  });

  it('should return Zazz if the input value is negative', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -2)).to.equal('Zazz');
  });

  it('should return Foo for an input which is a multiple of 3', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 3)).to.equal('Foo');
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 9)).to.equal('Foo');
  });

  it('should return ZazzFoo for a negative input which is a multiple of 3', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -3)).to.equal('ZazzFoo');
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -9)).to.equal('ZazzFoo');
  });

  it('should return Bar for an input which is a multiple of 5', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 5)).to.equal('Bar');
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 20)).to.equal('Bar');
  });

  it('should return ZazzBar for a negative input which is a multiple of 5', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -5)).to.equal('ZazzBar');
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -20)).to.equal('ZazzBar');
  });

  it('should return Qix for an input which is a multiple of 7', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 7)).to.equal('Qix');
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 14)).to.equal('Qix');
  });

  it('should return ZazzQix for a negative input which is a multiple of 7', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -7)).to.equal('ZazzQix');
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -14)).to.equal('ZazzQix');
  });

  it('should return FooBar for an input which is a multiple of 3 and 5', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 15)).to.equal('FooBar');
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 45)).to.equal('FooBar');
  });

  it('should return ZazzFooBar for a negative input which is a multiple of 3 and 5', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -15)).to.equal('ZazzFooBar');
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -45)).to.equal('ZazzFooBar');
  });

  it('should return FooQix for an input which is a multiple of 3 and 7', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 21)).to.equal('FooQix');
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 63)).to.equal('FooQix');
  });

  it('should return ZazzFooQix for a negative input which is a multiple of 3 and 7', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -21)).to.equal('ZazzFooQix');
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -63)).to.equal('ZazzFooQix');
  });

  it('should return BarQix for an input which is a multiple of 5 and 7', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 35)).to.equal('BarQix');
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 70)).to.equal('BarQix');
  });

  it('should return ZazzBarQix for a negative input which is a multiple of 5 and 7', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -35)).to.equal('ZazzBarQix');
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -70)).to.equal('ZazzBarQix');
  });

  it('should return FooBarQix for an input which is a multiple of 3, 5 and 7', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 105)).to.equal('FooBarQix');
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, 210)).to.equal('FooBarQix');
  });

  it('should return ZazzFooBarQix for a negative input which is a multiple of 3, 5 and 7', () => {
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -105)).to.equal('ZazzFooBarQix');
    expect(FooBarQix.Predicate(PREDICATE_ZAZZ_RULES, -210)).to.equal('ZazzFooBarQix');
  });
});
