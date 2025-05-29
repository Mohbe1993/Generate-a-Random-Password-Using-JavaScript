const passbox = document.getElementById("pass");
const length = 12;
const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const low = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
const num = "1234567890";
const car = "@#$%^&*\\()''\"_+=-`~";
const all = up + low + num + car;

function create() {
  let pass = "";
  pass += up[Math.floor(Math.random() * up.length)];
  pass += low[Math.floor(Math.random() * low.length)];
  pass += num[Math.floor(Math.random() * num.length)];
  pass += car[Math.floor(Math.random() * car.length)];

  while (length > pass.length) {
    pass += all[Math.floor(Math.random() * all.length)];
  }
  passbox.value = pass;
}

function copy() {
    passbox.select();
    document.execCommand('copy')

}

