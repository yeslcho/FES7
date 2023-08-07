let data = [
    {
        "_id": "64d072367a17c0be080da71b",
        "index": 0,
        "guid": "29a059c2-a8f9-4912-af3c-8a26da9f9d8b",
        "age": 40,
        "name": "Gabriela Farrell",
        "gender": "female"
    },
    {
        "_id": "64d072366a8282802f94cce0",
        "index": 1,
        "guid": "3ae0c4cb-94b2-4bb3-993b-84ca4809ce15",
        "age": 29,
        "name": "Molina Webster",
        "gender": "male"
    },
    {
        "_id": "64d0723688c5598adb0de72d",
        "index": 2,
        "guid": "dff6a126-450a-4707-9203-33b764b11c65",
        "age": 29,
        "name": "Ruiz Henderson",
        "gender": "male"
    },
    {
        "_id": "64d072361ebc88a17a314aee",
        "index": 3,
        "guid": "30e4c4cc-0541-490d-9fbd-895d54bf904f",
        "age": 31,
        "name": "Bender Sampson",
        "gender": "male"
    }
]

// 면접에서 map을 물어본다면!?
// 이러한 데이터의 형태를 json이라고 합니다. json은 별도로 배웁니다.
let data = [
    {
        "_id": "a",
        "index": 0,
        "age": 40,
        "name": "hojun",
        "gender": "female"
    },
    {
        "_id": "b",
        "index": 1,
        "age": 29,
        "name": "gildong",
        "gender": "male"
    },
    {
        "_id": "c",
        "index": 2,
        "age": 29,
        "name": "Ruiz",
        "gender": "male"
    },
    {
        "_id": "d",
        "index": 3,
        "age": 31,
        "name": "Bender",
        "gender": "male"
    }
]

data[0]
data[0]['name']
data[0]['age']
    (data[0]['age'] + data[1]['age'] + data[2]['age'] + data[3]['age']) / 4
data.map(v => v['age'])
data.map(v => {
    return v['age']
})
// 이게 도대체 어떻게 돌아가는 것일까요?
// [1, 2, 3, 4].map(v => v * 2)이런 예제로는 10번 공부하셔도 이해가 힘듭니다.
// 여기서 v는 1개의 object입니다.
// 마치 아래와 같습니다.
let v = {
    "_id": "aa",
    "index": 0,
    "age": 40,
    "name": "Gabriela Farrell",
    "gender": "female"
}
v['age']