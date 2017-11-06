class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = 'up';
    this.waitingList = [];
    this.passenger = [];
  }

  start() {
    this.interval = setInterval(() => {
      this.update()
    }, 500)
  }

  stop() {
    clearInterval(this.interval)
  }

  update() {
    this.log();
    if (this.floor < 10 && this.direction == 'up') {
      this.floorUp()
    }else if (this.floor == 0){
      this.floorUp()
    }else{
      this.floorDown()
    }
  }

  _passengersEnter() { }
  _passengersLeave() { }

  floorUp() {
    this.direction = 'up';
    this.floor += 1;
  }

  floorDown() {
    this.direction = 'down';
    this.floor -= 1;
  }
  call() {
    this.requests.push()
  }
  log() {
    console.log('direction ' + this.direction + ' ' + 'floor ' + this.floor)
  }
}

module.exports = Elevator;
