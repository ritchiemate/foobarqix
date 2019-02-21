/* global it, describe, beforeEach, afterEach  */
import chai from 'chai';
import sinon from 'sinon';

import FooBarQix from '../src/foobarqix';

const { expect } = chai;

let sandbox;

beforeEach(() => {
  sandbox = sinon.createSandbox();
});

afterEach(() => {
  sandbox.restore();
});

describe('Foo Bar Qix', () => {
  it('should return the expected result', () => {
    expect(FooBarQix(2, 2)).to.equal(4);
  });
});
