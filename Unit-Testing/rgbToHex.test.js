const { rgbToHexColor } = require('./rgbToHex');
const { assert } = require('chai');

describe('Testing Function rgbToHexColor', () => {
  it('Test 1', () => {
    assert.equal(rgbToHexColor(255, 158, 170), '#FF9EAA', 'Correct Result');
  });

  it('Test 2', () => {
    assert.equal(
      rgbToHexColor('123', 123, 121),
      undefined,
      'Red value is invalid'
    );
    assert.equal(
      rgbToHexColor(123, '123', 121),
      undefined,
      'Green value is invalid'
    );
    assert.equal(
      rgbToHexColor(123, 123, '121'),
      undefined,
      'Blue value is invalid'
    );
  });

  it('Test 5', () => {
    assert.equal(rgbToHexColor('123', '123', '121'), undefined, 'Invalid');
  });

  it('Test 6', () => {
    assert.equal(rgbToHexColor(-1, 21, 26), undefined, 'Invalid');
    assert.equal(rgbToHexColor(0, -1, 26), undefined, 'Invalid');
    assert.equal(rgbToHexColor(200, 255, -1), undefined, 'Invalid');
  });

  it('Test 7', () => {
    assert.equal(rgbToHexColor(290, 222, 222), undefined, 'Invalid');
    assert.equal(rgbToHexColor(122, 280, 254), undefined, 'Invalid');
    assert.equal(rgbToHexColor(222, 253, 277), undefined, 'Invalid');
  });

  it('Test 10', () => {
    assert.equal(rgbToHexColor(1, 1), undefined, 'Invalid');
    assert.equal(rgbToHexColor(1), undefined, 'Invalid');
    assert.equal(rgbToHexColor(), undefined, 'Invalid');
  });

  it('Test 11', () => {
    assert.equal(rgbToHexColor(222, 222, 222), '#DEDEDE', 'Correct');
  });

  it('Test 12', () => {
    assert.equal(rgbToHexColor(166, 166, 166), '#A6A6A6', 'Correct');
  });

  it('Test 13', () => {
    assert.equal(rgbToHexColor(-1, -1, -1), undefined, 'Invalid');
  });

  it('Test 14', () => {
    assert.equal(rgbToHexColor([1], [2], [1]), undefined, 'Invalid');
  });

  it('Test 15', () => {
    assert.equal(rgbToHexColor(22.2, 0, 0), undefined, 'Invalid');
    assert.equal(rgbToHexColor(0, 122.1, 0), undefined, 'Invalid');
    assert.equal(rgbToHexColor(0, 0, 44.2), undefined, 'Invalid');
  });

  it('Test 0 0 0 and 255 255 255', () => {
    assert.equal(rgbToHexColor(0, 0, 0), '#000000', 'Correct');
    assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF', 'Correct');
  });
});
