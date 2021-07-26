class Timer {
    constructor(durationInp, playPauseBtn, callBacks) {
      this.durationInp = durationInp;
      this.playPauseBtn = playPauseBtn;
      if (callBacks) {
        const { onStart, onTick, onComplete, onPause } = callBacks;
        this.onStart = onStart;
        this.onTick = onTick;
        this.onComplete = onComplete;
        this.onPause = onPause
      }
      this.paused = true;
  
      this.playPauseBtn.addEventListener("click", () => {
        if (this.paused) {
          this.start();
        } else {
          this.pause();
        }
      });
    }
  
    start() {
      this.paused = false;
      this.playPauseBtn.setAttribute('class', 'fas fa-pause')
      if (this.onStart) {
        this.onStart();
      }
      this.tick();
      this.interval = setInterval(() => this.tick(), 50); // Using an arrow function here as this methord is getting called by an setInter val so 'this' will be set to the window object if we don't use an arrow function
    }
  
    pause() {
      this.paused = true;
      this.playPauseBtn.setAttribute('class', 'fas fa-play')
      clearInterval(this.interval);
      if (this.onPause) {
        this.onPause();
      }
    }
  
    tick() {
        let timeRemaining = this.durationInp.value
      if (timeRemaining <= 0) {
        this.pause();
        if (this.onComplete) {
          this.onComplete();
        }
      } else {
        this.durationInp.value = parseFloat(timeRemaining - 0.05).toFixed(2);
        if (this.onTick) {
          this.onTick();
        }
      }
    }
}
  
