<head>
  <style>
  #block {
    display: flex;
    font-size: 20px;
  }
  </style>
</head>
    
<body>
  <div class="block">
    <div>До окончания таймера осталось:</div>
    <div id = "timer">00:00:30</div>
  </div>
    
  <script>
    let time = 30;
    const timerElement = document.getElementById("timer")

    function updateTimer(){
      const hour = Math.floor(time / 3600)
      const minutes = Math.floor(time / 60);
      const seconds = time % 60
      timerElement.textContent = String(hour).padStart(2,'0') + ":" + String(minutes).padStart(2,'0') + ":" + String(seconds).padStart(2,'0');
      
        if(time <= 0) {
        clearInterval(timerInterval)
        alert("Вы победили в конкурсе")
        }
          
        else {
          time--
        }
    }

    const timerInterval = setInterval(updateTimer,1000)
  </script>
</body>
