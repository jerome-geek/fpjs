/**
 * _curry
 * - curry 함수를 실행한 결과의 인자가 2개인 경우 바로 함수 실행
 * - curry 함수를 실행한 결과의 인자가 2개가 아닌 경우 함수 실행을 뒤로 미룸
 */
function _curry(fn) {
    return function (a, b) {
        return arguments.length === 2
            ? fn(a, b)
            : function (b) {
                  return fn(a, b);
              };
    };
}

function _curryr(fn) {
    return function (a, b) {
        return arguments.length === 2
            ? fn(a, b)
            : function (b) {
                  return fn(b, a);
              };
    };
}

var _get = _curryr(function (obj, key) {
    return obj == null ? undefined : obj[key];
});

function _filter(list, predi) {
    var new_list = [];
    _each(list, function (val) {
        if (predi(val)) {
            new_list.push(val);
        }
    });
    return new_list;
}

function _map(list, mapper) {
    var new_list = [];
    _each(list, function (val) {
        new_list.push(mapper(val));
    });
    return new_list;
}

/**
 * 순회하는 행위를 _each 함수로 만듦으로써 명령형 코드를 선언형 코드로 바꿀 수 있다
 * list가 length가 있고, 해당하는 키로 값에 접근이 가능하면 _each함수 사용 가능(다형성이 높다)
 */
function _each(list, iter) {
    for (var i = 0; i < list.length; i++) {
        iter(list[i]);
    }

    return list;
}

var _map = _curryr(_map),
    _filter = _curryr(_filter);

var slice = Array.prototype.slice;
function _rest(list, num) {
    return slice.call(list, num || 1);
}

function _reduce(list, iter, memo) {
    if (arguments.length === 2) {
        memo = list[0];
        list = _rest(list);
    }

    _each(list, function (val) {
        memo = iter(memo, val);
    });

    return memo;
}

/**
 * _pipe
 *
 * - 함수를 리턴하는 함수
 */
function _pipe() {
    var fns = arguments;
    return function (arg) {
        return _reduce(
            fns,
            function (arg, fn) {
                return fn(arg);
            },
            arg,
        );
    };
}

/**
 * _go
 *
 * - 즉시 실행되는 _pipe함수
 */
function _go(arg) {
    var fns = _rest(arguments);
    return _pipe.apply(null, fns)(arg);
}
