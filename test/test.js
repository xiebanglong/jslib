const expect = require('expect.js');
// const clone = require('../dist/index')
const clone = require('../src/index').clone;

describe('function clone', () => {
  describe('params data', () => {
    it('正确的测试用例', () => {
      // 基本类型
      expect(clone('abc')).to.equal('abc');
      // 数组
      var arr = [1, 2];
      var cloneArr = clone(arr);
      expect(cloneArr).to.eql(arr);
      expect(cloneArr).not.to.equal(arr);

      // 对象
      var obj = { a: { b: 1 } };
      var cloneObj = clone(obj);
      expect(cloneObj).to.eql(obj);
      expect(cloneObj).not.to.equal(obj);
    });
    it('边界测试用例', () => {
      expect(clone()).to.equal(undefined);
      expect(clone(undefined)).to.equal(undefined);
      expect(clone(null)).to.equal(null);
    });
  });
});
