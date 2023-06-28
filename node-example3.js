const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
};
function solveRect(l,w) {
    console.log(`Solving for reatangle with dimensions: ${l}, ${w}`);
    if (l <= 0 || w <= 0) {
        console.log(`rectangle must be greater than zero, value: ${l}, ${w}`);
    } else {
        console.log(`Area of reatangle :${rect.area(l, w)}`);
        console.log(`Perimeter of reatangle :${rect.perimeter(l, w)}`);
    }
}

solveRect(6,2);
solveRect(8,1);
solveRect(0,9);
solveRect(4,-1);
