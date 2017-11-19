'use strict';

function cons(head, tail) {
  return {head: head, tail: tail};
}

function len(list) {
  if (list === null) {
    return 0;
  }
  return 1 + len(list.tail);
}

function concat(list0, list1) {
  if (list0 === null) {
    return list1;
  }
  return cons(list0.head, concat(list0.tail, list1));
}

function insert(list, idx, elem) {
  if (idx === 0) {
    return cons(elem, list);
  }
  return cons(list.head, insert(list.tail, idx - 1, elem));
}

function update(list, idx, elem) {
  if (idx === 0) {
    return cons(elem, list.tail);
  }
  return cons(list.head, update(list.tail, idx - 1, elem));
}

module.exports = {
  cons: cons,
  len: len,
  concat: concat,
  insert: insert,
  update: update,
};
