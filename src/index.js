/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    
    let uniqueLoveTriangles = []; // массив для подсчёта треугольников

    function UniqueTriangleList(triangle) {
        triangle.sort(function (a, b) {
            return (a - b)
        });
        let unique = true;
        for (let alreadyFoundedTriangle of uniqueLoveTriangles) {
            if (alreadyFoundedTriangle[0] === triangle[0] && alreadyFoundedTriangle[1] === triangle[1]
                && alreadyFoundedTriangle[2] === triangle[2]) {
                unique = false;
                break;
            }
        }
        if (unique) {
            uniqueLoveTriangles.push(triangle);
        }
    }
    let length = preferences.length;
    for (let i = 0; i < length; i++) { 
        let elem = preferences[i]; 
        let positionFirst = i + 1;
        for (let j = 0; j < length; j++) {
            if (preferences[j] === positionFirst) {
                if (j + 1 !== elem
                    && elem <= length
                    && preferences[elem - 1] === j + 1) {
                    UniqueTriangleList([elem, positionFirst, preferences[elem - 1]]);
                    break;
                }
            }
        }
    }
    return uniqueLoveTriangles.length; 
}