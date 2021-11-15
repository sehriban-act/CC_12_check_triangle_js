const aSide = document.querySelector(".one");
const bSide = document.querySelector(".two");
const cSide = document.querySelector(".three");
const checkBtn = document.querySelector(".btn");
const seeBtn = document.querySelector(".btn-success");

const show = document.querySelector('.lead');
console.log(show);


// const triangle = ['a', 'b', 'c'];

checkBtn.addEventListener('click', () => {
    let showType = show.innerHTML;

    let a = parseInt(aSide.value);
    let b = parseInt(bSide.value);
    let c = parseInt(cSide.value);


    if (a == b || a == c || b == c) {
        showType = "isosceles";
    }

    if (a == b && b == c) {
        showType = "equilateral";
    }

    if (a != b && a != c && b != c) {
        showType = "scalene";
    }
    if (a + b == c || a + c == b || c + b == a) {
        showType = "dig deeper";

    }
    if (aSide.value == null || aSide.value == "", bSide.value == null || bSide.value == "", cSide.value == null || cSide.value == "") {
        showType = "Please Fill All Required Field";

    }

    // if (aSide.value == "" || bSide.value == "" || cSide.value == " ") {
    //     showType = "Please Enter  Numbers of a Triangle's Sides";

    // }
    show.innerText = showType;
    aSide.value = "";
    bSide.value = "";
    cSide.value = "";


})

seeBtn.addEventListener('click', () => {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        context.beginPath();
        context.moveTo(75, 100);
        context.lineTo(10, 75);
        context.lineTo(10, 25);
        context.fill();
    }
})