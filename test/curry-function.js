import { parse } from '../lib';

function getParser(code) {
  return () => parse(code, { sourceType: 'module',Plugin:['jsx'] });
}

console.log(getParser(`{{ const a =2; }}`)().program.body);

describe('curry function syntax', function() {
  it('should parse', function() {
    expect(getParser(`{{ const a =2; }}`)()).toMatchSnapshot();
  });
});
