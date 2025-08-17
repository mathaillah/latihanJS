var jmlAngkot =10;
var angkotBeroperasi = 6;
var noAngkot = 1 ;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    
    if(noAngkot <= 6 && noAngkot !== 5){
        console.log('No Angkot ' + noAngkot + ' beroperasi dengan baik');
    }else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log("No Angkot " + noAngkot + " sedang lembur");
    }else {
        console.log('No Angkot ' + noAngkot + ' sedang tidak beroperasi');
    }
}