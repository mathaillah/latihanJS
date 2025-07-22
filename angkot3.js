var jmlAngkot =10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    
    if(noAngkot <= 6){
        console.log('No Angkot ' + noAngkot + ' beroperasi dengan baik');
    } else {
        console.log('No Angkot ' + noAngkot + ' sedang tidak beroperasi');
    }
}