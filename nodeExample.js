
const readline = require('readline');
const cafeInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function getCafeDetails() {
    cafeInput.question('Enter the name of the cafe: ', (name) => {
        cafeInput.question('Enter the location of the cafe: ', (location) => {
            cafeInput.question('Enter the rating of the cafe (out of 5): ', (rating) => {
                console.log('\nCafe Details:');
                console.log('Name:', name);
                console.log('Location:', location);
                console.log('Rating:', rating);
                cafeInput.close();
            });
        });
    });

}
getCafeDetails();
