
const uniqIdentifer = Symbol('uniq');
const student = {
    name: "Venkata Sai Kumar",
    age: 21,
    address: "Guntur,Andhra Pradesh",
    marks: [
        {
            subject: "Maths",
            percentage: 0x90
        },
        {
            subject: "Science",
            percentage: 95.5
        },
    ],
    isPass: true,
    thisIsUndefined: undefined,
    phone: 123456789n,
    extraCurricualr: null,
    [uniqIdentifer]: "123242542xxx31", //dynamic key
}
function averageMark(student) {
    s = 0
    n = student.marks.length;
    // for(i=0;i<n;i++){
    //     s=s+student.marks[i].percentage;
    // }
    // return s/n;
    student.marks.forEach(function (item) {
        console.log("subjects are", item);
        s = s + item.percentage;
    });
    console.log("sum is: ", s);
    return s / n;
}

const avg = averageMark(student);


const personInfo = {
    id: '32x2-232',
    data: [
        {
            num: 13,
            rate: 5
        },
        {
            num: 10,
            rate: 15
        },
        {
            num: 27,
            rate: 11
        },
        {
            num: 12,
            rate: 111
        },
        {
            num: 15,
            rate: 91
        },
    ]
}
function transformation(argument) {
    const data = argument.data;
    const transFormeddata = data.map(function add(item) {
        const num = item.num * 2;
        const rate = item.rate * 2;
        const i = { num, rate };
        return i;

    });
    return transFormeddata;
}
const result = transformation(personInfo)
console.log("result is", result);
