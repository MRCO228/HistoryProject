var maree=["1 (1).jpg", "1 (1).jpeg", "1 (2).jpg", "1 (2).jpeg", "1 (3).jpg", "1 (4).jpg", "1 (4).jpeg", "1 (5).jpg"];
let j = 0;
function fyn() {
    if(j != 5) {
        j=j+1;
    }
    else if (j===5) {
        j=0;
    }
    document.querySelector("img").src = maree[j];
}