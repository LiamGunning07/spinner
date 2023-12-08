process.stdout.write('hello from spinner1.js... \rheyyy\n');
const frames = ['|', '/', '-', '\\'];
let i = 0;

function animateSpinner() {
  process.stdout.write(`\r${frames[i]}   `);
  i = (i + 1) % frames.length;
}
setInterval(animateSpinner, 150);
