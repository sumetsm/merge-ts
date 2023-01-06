import { merge } from '../src/index';

describe('Merge collection_1 and collection_2', () => {
  test('collection_1 = [1,3,5,7] collection_2 = [2,4,6,8,10]', () => {
    expect(merge([1,3,5,7],[2,4,6,8,10])).toStrictEqual([1,2,3,4,5,6,7,8,10])
  })
  test('collection_1 = [1,2,3] collection_2 = [4,5,6]', () => {
    expect(merge([1,2,3],[4,5,6])).toStrictEqual([1,2,3,4,5,6])
  })
  test('collection_1 = [] collection_2 = [2,4,6,8,10]', () => {
    expect(merge([],[2,4,6,8,10])).toStrictEqual([2,4,6,8,10])
  })
})