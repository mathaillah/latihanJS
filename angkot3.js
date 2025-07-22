var jmlAngkot =100;
var angkotBeroperasi = 7;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    
    if(noAngkot <= 7){
        console.log('No Angkot ' + noAngkot + ' beroperasi dengan baik');
    } else {
        console.log('No Angkot ' + noAngkot + ' sedang tidak beroperasi');
    }
}