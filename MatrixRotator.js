const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
    console.log(this.matrix);
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    // do work here
    let outerArr = [];
    let innerArr = [];
    let length = this.matrix.length;
        console.log(this.matrix.length);
    
    if (direction === Direction.CW){
      for (var i = 0; i < length; i++){
        innerArr = [];
        outerArr.push(innerArr);
        for (var j = length - 1; j >= 0; j--){
          innerArr.push(this.matrix[j][i]);
        }
      }
    } else { 
      for (var i = 0; i < length; i++){
          innerArr = [];
          outerArr.unshift(innerArr);
          for (var j = length - 1; j >= 0; j--){
            innerArr.unshift(this.matrix[j][i]);
          }
        }
      }
      this.matrix = outerArr;
    }
    // must be a valid Direction, see Direction.js
};
