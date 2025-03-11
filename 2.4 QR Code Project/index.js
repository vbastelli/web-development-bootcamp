/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    {
        type: "input",
        name:'url',
        message: 'Type the URL:  '
    }
  ])

  .then((answers) => {
    var img = qr.image(answers.url, {type: 'png'});
    var imgPath = `qrcode.png`
    img.pipe(fs.createWriteStream(imgPath));

    fs.writeFileSync("url.txt", answers.url, "utf8");

    console.log(`QR code gerado e salvo como ${imgPath}`);
    console.log('URL salva em url.txt');
    
  })

  .catch((error) => {
    console.error('Error:', error);
  });