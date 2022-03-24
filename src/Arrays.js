/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    var arr = new Array();
    var i = 1,
        x = data[0];
    while (i < data.length) {
        if (data[i] == ',') {
            arr.push(parseInt(x));
            x = data[i + 1];
            i++;
        } else {
            x += data[i];
        }
        i++;
    }
    arr.push(parseInt(x));
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr.join(',');
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    for (let i = 0; i <= data.length; i++) {
        if (data[i] > 100) {
            data.splice(i, 1);
            i--;
        }
    }
    return data;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let arr = new Array();
    for (let i = 0; i < 5; i++) {
        arr.push(array1[i]);
        arr.push(array2[i]);
    }
    return arr;
}
