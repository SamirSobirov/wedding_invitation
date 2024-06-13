const endDate = new Date('June 15, 2024 18:00:00').getTime();

// Функция для обновления счетчика каждую секунду
const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = endDate - now; 

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById('day').innerText = days < 10 ? `0${days}` : days;
    document.getElementById('hour').innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minut').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('second').innerText = seconds < 10 ? `0${seconds}` : seconds;
};


setInterval(updateCountdown, 1000);


updateCountdown();



const button = document.querySelector('button');
const audioPlayer = document.getElementById('player');

let isPlaying

button.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
    } else {
        audioPlayer.play();
        isPlaying = true;
    }
});





// tailwind
// module.exports = {
//     theme: {
//       extend: {
//         screens: {
//           'xs': '375px',
//         },
//         fontSize: {
//           '2px': '2px',
//         },
//       },
//     },
//     variants: {},
//     plugins: [],
//   }
  