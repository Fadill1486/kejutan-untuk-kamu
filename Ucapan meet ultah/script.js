const pembuka = document.getElementById('pembuka');
const halamanKue = document.getElementById('halaman-kue');
const halamanUcapan = document.getElementById('halaman-ucapan');
const btnbuka = document.getElementById('btn-buka');
const btntiup = document.getElementById('btn-tiup');
const apiLilin = document.querySelector('.api');
const asapLilin = document.querySelector('.asap');

btnbuka.addEventListener('click', function() {
    pembuka.hidden = true;
    halamanKue.hidden = false;
    halamanKue.style.animation = 'none';
    halamanKue.offsetHeight; /* Trigger reflow */
    halamanKue.style.animation = null;
});

btntiup.addEventListener('click', function() {
    apiLilin.classList.add('mati');
    asapLilin.classList.add('keluar');

    btntiup.innerText = 'Wuuisshh...!, Yeaayyy Lilin berhasil di tiup 🎉'
    btntiup.disabled = true;

    setTimeout(function() {
        halamanKue.hidden = true;
        halamanUcapan.hidden = false;
        halamanUcapan.style.animation = 'none';
        halamanUcapan.offsetHeight;
        halamanUcapan.style.animation = null;
    },  2000);
});