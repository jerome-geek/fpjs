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
