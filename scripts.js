var s = '';
{}

for (var i = 0; i < 15; i++){
    for (var j = 0; j <= i; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s);
/* output
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
**************
***************
*/

// var string = '';

// for (var i = 0; i < 10; i++) {
//     // Tambahkan spasi di awal setiap baris
//     for (var j = 0; j < i; j++) {
//         string += ' ';
//     }
//     // Tambahkan bintang
//     for (var k = 0; k < 10 - i; k++) {
//         string += '*';
//     }
//     string += '\n';
// }
// console.log(string);
/* output
**********
 *********
  ********
   *******
    ******
     *****
      ****
       ***
        **
         *
*/

// let n = 5;
// let string = "";


// // create ROW
// for (let i = 1; i <= 10; i++) {
//   // printing STAR
//   for (let j = 1; j <= n; j++) {
//       //kita cek setiap barisnya, setiap variable i bilangan ganjil spasi di kanan, dan setiap variable i bilangan genap spasi di kiri.
//     if (i % 2 == 1) {
//         string += "# ";
//     }
    
//     else {
//         string += " #";
//     }
//   }
//   string += "\n";
// }
// console.log(string);
/*output
# # # # # 
 # # # # #
# # # # # 
 # # # # #
# # # # # 
 # # # # #
# # # # # 
 # # # # #
# # # # # 
 # # # # #
*/
