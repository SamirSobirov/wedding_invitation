function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
  }

  // Функция для обратного отсчета до 13 июня
  function countdown() {
    var endDate = new Date("2024-06-13T00:00:00"); // Установите дату окончания отсчета
    var currentDate = new Date();

    var totalSeconds = Math.floor((endDate - currentDate) / 1000);

    var days = Math.floor(totalSeconds / (3600 * 24));
    var hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = Math.floor(totalSeconds % 60);

    // Обновление элементов на странице
    document.getElementById("day").innerText = addLeadingZero(days);
    document.getElementById("hour").innerText = addLeadingZero(hours);
    document.getElementById("minut").innerText = addLeadingZero(minutes);
    document.getElementById("second").innerText = addLeadingZero(seconds);

    // Обновление каждую секунду
    setTimeout(countdown, 1000);
  }

  // Запуск функции обратного отсчета при загрузке страницы
  countdown();



  

