'use struct';

const assert = require('power-assert');
const l = require('..'); // persistentLinkedList

function toArray(list) {
  let ret = [];
  let list_ = list;
  while (list_ !== null) {
    ret.push(list_.head);
    list_ = list_.tail;
  }
  return ret;
}

describe('persistentLinkedList', function() {
  it('len', function() {
    let list0 = l.cons(1, null);
    let list1 = l.cons(1, l.cons(2, null));
    let list2 = l.cons(1, l.cons(2, l.cons(3, null)));
    assert.equal(l.len(list0), 1);
    assert.equal(l.len(list1), 2);
    assert.equal(l.len(list2), 3);
  });
  it('concat', function() {
    let list0 = l.cons(1, l.cons(2, null));
    let list1 = l.cons(10, l.cons(20, l.cons(30, null)));
    let list2 = l.concat(list0, list1);
    assert.deepEqual(toArray(list2), [1, 2, 10, 20, 30]);
  });
  it('insert', function() {
    let list0 = null;
    let list1 = l.cons(1, null);
    let list2 = l.cons(1, l.cons(2, l.cons(3, null)));
    let list3 = l.insert(list0, 0, 10);
    let list4 = l.insert(list1, 1, 10);
    let list5 = l.insert(list2, 1, 10);
    assert.deepEqual(toArray(list3), [10]);
    assert.deepEqual(toArray(list4), [1, 10]);
    assert.deepEqual(toArray(list5), [1, 10, 2, 3]);
  });
  it('update', function() {
    let list0 = l.cons(1, null);
    let list1 = l.cons(1, l.cons(2, l.cons(3, null)));
    let list2 = l.update(list0, 0, 10);
    let list3 = l.update(list1, 1, 10);
    assert.deepEqual(toArray(list2), [10]);
    assert.deepEqual(toArray(list3), [1, 10, 3]);
  });
});
