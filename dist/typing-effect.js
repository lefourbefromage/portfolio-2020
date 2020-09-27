"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var wrapper;

var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

function writingAll(_x, _x2) {
  return _writingAll.apply(this, arguments);
}

function _writingAll() {
  _writingAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(stringTarget, container) {
    var stringsContainer, string;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            wrapper = document.querySelector('[' + container + ']');
            stringsContainer = document.getElementsByClassName(stringTarget);

          case 2:
            if (!wrapper) {
              _context.next = 20;
              break;
            }

            i = 0;

          case 4:
            if (!(i < stringsContainer.length)) {
              _context.next = 17;
              break;
            }

            string = stringsContainer[i].textContent;
            _context.next = 8;
            return write(string);

          case 8:
            _context.next = 10;
            return sleep(1000);

          case 10:
            _context.next = 12;
            return erase();

          case 12:
            _context.next = 14;
            return sleep(1000);

          case 14:
            i++;
            _context.next = 4;
            break;

          case 17:
            ;
            _context.next = 2;
            break;

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _writingAll.apply(this, arguments);
}

;

function write(_x3) {
  return _write.apply(this, arguments);
}

function _write() {
  _write = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(text) {
    var index, timeout;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            index = 0;

          case 1:
            if (!(index < text.length)) {
              _context2.next = 9;
              break;
            }

            timeout = 100;
            _context2.next = 5;
            return sleep(timeout);

          case 5:
            index++;
            wrapper.innerHTML = text.substring(0, index);
            _context2.next = 1;
            break;

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _write.apply(this, arguments);
}

;

function erase() {
  return _erase.apply(this, arguments);
}

function _erase() {
  _erase = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var timeout;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!wrapper.textContent.length) {
              _context3.next = 7;
              break;
            }

            timeout = 100;
            _context3.next = 4;
            return sleep(timeout);

          case 4:
            wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2);
            _context3.next = 0;
            break;

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _erase.apply(this, arguments);
}

;
writingAll('item', 'data-text-typing');
//# sourceMappingURL=typing-effect.js.map