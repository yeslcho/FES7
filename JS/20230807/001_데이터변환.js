// 중요도 높습니다!
// push - 배열의 뒤에 값을 추가한다
// 반환값: undefined
// pop - 뒤에서 값을 꺼내고 반환
// 반환값: 꺼낸 값

// unshift - 배열의 앞에 값을 추가한다
// 반환값: 배열의 길이
// shift - 앞에서 값을 꺼내고 반환
// 반환값: 꺼낸 값

// 문제
// push, pop, unshift, shift를 이용하여 다음과 같은 배열을 만들어보세요.
// 입력값: [10, 20, 30, 40]
// 출력값: [10, 100, 20, 30, 50]

arr.pop();
arr.push(50);
arr.shift();
arr.unshift(100);
arr.unshift(10);


// 1. splice
// arr.splice(start, deleteCount, item1, item2, ...)
let arr = [10, 20, 30]
arr.splice(1, 0, 100) // 1번째에, 0개를 지우고, 100을 넣어라

let arr = [10, 20, 30]
arr.splice(1, 1, 100, 200) // 1번째에, 1개를 지우고, 100과 200을 넣어라

let arr = [10, 20, 30]
arr.splice(1, 1, [100, 200]) // 1번째에, 1개를 지우고, [100, 200]을 넣어라

////////////
// 같이 풀 문제
let arr = [10, 20, 30, 40]
let x = [1, 2, 3]
// 만들고 싶은 값: [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 100]

// 방법 1
let arr = [10, 20, 30, 40]
let x = [1, 2, 3]
arr.splice(1, 0, ...x)
arr.splice(7, 0, ...x) // arr.push(...x) 또는 arr.push(1, 2, 3) 또는 arr.push(...[100, 200, 300])
arr.push(100)

// 방법 2
let arr = [10, 20, 30, 40]
let x = [1, 2, 3]
arr.splice(1, 0, x[0], x[1], x[2])
// 생략

////////////
// splice에서 인자값을 하나만 넣으면, 그 인덱스부터 끝까지 다 지운다.
// splice에서 인자값을 두개만 넣으면, 두번째 인자값부터 끝까지 다 지운다.
let arr = [10, 20, 30, 40]
arr.splice(1) // 1번째부터 끝까지 다 지워라
arr.splice(1, 2) // 1번째부터 2개를 지워라(삽입값은 없습니다.)


// 2. slice
// arr.slice(start, end)
// 주의! 원본은 수정되지 않습니다!
// 비교! splice는 원본을 수정합니다!
let arr = [10, 20, 30, 40]
arr.slice(1, 3) // 1번째부터 3번째 전까지(2번째까지) 자른다.
arr.slice(1, 10000) // index에 없는 값도 오류가 생기지 않습니다! splice도 마찬가지입니다.
arr.slice(100, 10000) // index에 없는 값도 오류가 생기지 않습니다! splice도 마찬가지입니다.
