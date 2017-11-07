class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = 'up';
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    this.interval = setInterval(() => {
      this.update()
    }, 500)
  }

  stop() {
    clearInterval(this.interval)
  }

  update(passenger) {
    this.log();
    if (this.floor < 10 && this.direction == 'up') {
      this.floorUp()
    } else if (this.floor == 0) {
      this.floorUp()
    } else {
      this.floorDown()
    }
    this._passengersEnter(passenger);
    this._passengersLeave(passenger);
  }

  _passengersEnter(passenger) {
    for (var i = 0; i < this.waitingList.length; i++) {
      if (this.waitingList[i].originFloor == this.floor) {
        this.passengers.push(passenger);
        this.waitingList.splice(passenger);
        this.requests.push(passenger)
        console.log(`${passenger.name} has entered the elevator. `);
      }
    }
  }

  _passengersLeave(passenger) {
    for (var i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i] == this.floor) {
        this.passengers.splice(this.passengers[i]);
        console.log(`${passenger.name} has left the elevator. `);
      }
    }
  }

  floorUp() {
    this.direction = 'up';
    this.floor += 1;
  }

  floorDown() {
    this.direction = 'down';
    this.floor -= 1;
  }
  call(passenger) {
    this.waitingList.push(passenger);
    this.requests.push(passenger)
  }

  log() {
    console.log('direction ' + this.direction + ' ' + 'floor ' + this.floor)
  }
}

module.exports = Elevator;
