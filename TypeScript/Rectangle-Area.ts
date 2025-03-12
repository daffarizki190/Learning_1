import * as readline from 'readline';

function hitungLuasPersegiPanjang(panjang: number, lebar: number): number {
    return panjang * lebar;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== LUAS PERSEGI PANJANG ===");

rl.question('Masukkan panjang: ', (inputPanjang) => {
    const panjang = parseFloat(inputPanjang);

    if (isNaN(panjang)) {
        console.log("Error: Mohon masukkan angka yang valid untuk panjang");
        rl.close();
        return;
    }

    rl.question('Masukkan lebar: ', (inputLebar) => {
        const lebar = parseFloat(inputLebar);

        if (isNaN(lebar)) {
            console.log("Error: Mohon masukkan angka yang valid untuk lebar");
            rl.close();
            return;
        }

        const luas = hitungLuasPersegiPanjang(panjang, lebar);

        console.log("\nHasil:");
        console.log(`Panjang = ${panjang}`);
        console.log(`Lebar = ${lebar}`);
        console.log(`Luas Persegi Panjang = ${luas}`);

        rl.close();
    });
});