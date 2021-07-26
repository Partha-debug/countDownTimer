const durationInp = document.getElementById("duration");
const playPauseBtn = document.getElementById("play_pause");
const circle = document.querySelector('circle')

let currentOffset = 0
let tickOffset = 0
let timeGiven;

function resetTimer() {
  currentOffset = 0
  circle.setAttribute('stroke-dashoffset', 0)
  circle.setAttribute('stroke', "green")
}

durationInp.addEventListener('change', function() {
  timeGiven = this.value
  resetTimer()
})

const timer = new Timer(durationInp, playPauseBtn, {

  onStart() {
    circle.setAttribute('stroke', "darkred")
    tickOffset = 282.7 / (timeGiven * 20)
    durationInp.readOnly = true
  },
  onTick() {
    circle.setAttribute('stroke-dashoffset', `${currentOffset}%`)
    currentOffset -= tickOffset
  },
  onComplete() {
    resetTimer()
  },

  onPause() {
    durationInp.readOnly = false
    circle.setAttribute('stroke', "#ff8c00")
  }
});


