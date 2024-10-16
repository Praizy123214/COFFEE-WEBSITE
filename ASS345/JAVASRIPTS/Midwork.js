var sales = [
    [405, 49, 930, 284],
    [24, 345, 21, 456],
    [284, 349, 38, 432],
    [24, 34, 245, 34],
    [283, 293, 289, 293],
    [384, 89, 86, 848],
    [245, 43, 44, 324]
    
];

var total = 0;
var sum = 0;

var t = sales.length;

var sumIng = new Array();
var large  = 0;
var small = 0;

for (i = 0;  i < t; i++) {
    sum = 0;

    for (j = 0; j <= t / 2; j++) {
        document.write("<br /> sum = " + sum + "+" + sales[i][j]);
        sum += sales[i][j];
    }
    total += sum;
    document.write("<br /><b>  T sum = </b>" + sum + "<br />");

    sumIng[i] = sum;

}

document.write("<br /> Grand = " + total);
document.write("<br /> The End");
small = sumIng[0];
for (i = 0; i < t; i++) {
    if (sumIng[i] < small) {
        small = sumIng[i];
    } else {
        small = small;
    }
};

document.write("<br /> Smallest: " + small);
large = sumIng[0];
for (i = 0; i < t; i++) {
    if (sumIng[i] < large) {
        large = sumIng[i];
    } else {
        large = large;
  
    }

}

