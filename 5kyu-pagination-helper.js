'use strict'; 

// PaginationHelper
// https://www.codewars.com/kata/paginationhelper/train/javascript

// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, 
// which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. 
// The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  // console.log('item count', this.collection.length);
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  // console.log('page count', Math.ceil(this.collection.length / this.itemsPerPage));
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  let length = this.collection.length;
  let pageIndexCapacity = (pageIndex + 1) * this.itemsPerPage;
  if (length > pageIndexCapacity) {
    return (this.itemsPerPage);
  } else if (pageIndexCapacity - length < this.itemsPerPage) {
    return (this.itemsPerPage - (pageIndexCapacity - length));
  } else {
    return -1;
  }
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  let length = this.collection.length;
  let itemsPerPage = this.itemsPerPage;
  let totalPages = Math.ceil(length / itemsPerPage);
  let itemPage = Math.floor(itemIndex / itemsPerPage);
  if (this.collection === undefined || length === 0) {
    return -1;
  }
  if (itemPage > totalPages || itemPage < 0) {
    return -1;
  } else {
    return itemPage;
  }
};



// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1
var helper = new PaginationHelper([], 10);
console.log(helper.pageIndex(0));
// var helper = new PaginationHelper([ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23, 24 ], 10);
console.log(helper.pageCount()); //should == 2
console.log(helper.itemCount()); //should == 6
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); //should == 1 (zero based index)
console.log(helper.pageIndex(2)); //should == 0
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(-10)); //should == -1


// Alternative solutions

// Solution #1
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection, this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
}

PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  return pageIndex < this.pageCount()
    ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
    : -1;
}

PaginationHelper.prototype.pageIndex = function (itemIndex) {
  return itemIndex < this.collection.length && itemIndex >= 0
    ? Math.floor(itemIndex / this.itemsPerPage)
    : -1;
}

// Solution #2
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
    this.pages = Math.ceil(collection.length / itemsPerPage)
  }

  itemCount() {
    return this.collection.length
  }

  pageCount() {
    return this.pages
  }

  pageItemCount(pageIndex) {
    if (pageIndex >= this.pages || pageIndex < 0) {
      return -1
    } else if (pageIndex === this.pages - 1) {
      return (this.collection.length % this.itemsPerPage)
    } else {
      return this.itemsPerPage
    }
  }

  pageIndex(itemIndex) {
    if (itemIndex >= 0 && itemIndex < this.collection.length) {
      return Math.max(Math.ceil(itemIndex / this.itemsPerPage) - 1, 0)
    } else {
      return -1
    }
  }
}

// Solution #3
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection, this.len = this.collection.length, this.ipp = itemsPerPage;
}
PaginationHelper.prototype.itemCount = function () { return this.len; }
PaginationHelper.prototype.pageCount = function () { return Math.ceil(this.len / this.ipp); }
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  var pc = this.pageCount();
  return pc <= pageIndex || pageIndex < 0 ? -1 : pc - 1 == pageIndex ? this.len % this.ipp : this.ipp;
}
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  return this.len <= itemIndex || itemIndex < 0 ? -1 : Math.floor(itemIndex / this.ipp);
}