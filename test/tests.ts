import { describe, it } from 'mocha';
import { expect } from 'chai';
// eslint-disable-next-line
import test from '../src';

describe('Test Suite', () => {
  it('should pass when perfect match', () => {
    expect(test('8.10.0')).to.eql(true);
    expect(test('v8.10.0')).to.eql(true);
  });

  it('should fail if verbose version is not exactly the same', () => {
    expect(test('8.10.1')).to.eql(false);
    expect(test('v8.10.1')).to.eql(false);

    expect(test('8.9.1')).to.eql(false);
    expect(test('v8.9.1')).to.eql(false);

    expect(test('8.11.0')).to.eql(false);
    expect(test('v8.11.0')).to.eql(false);
  });

  it('should pass when major and minor matches', () => {
    expect(test('8.10')).to.eql(true);
    expect(test('v8.10')).to.eql(true);
  });

  it('should pass when major matches', () => {
    expect(test('8')).to.eql(true);
    expect(test('v8')).to.eql(true);
  });

  it('should fail when major doesnt match', () => {
    expect(test('7')).to.eql(false);
    expect(test('v7')).to.eql(false);

    expect(test('9')).to.eql(false);
    expect(test('v9')).to.eql(false);
  });
});
