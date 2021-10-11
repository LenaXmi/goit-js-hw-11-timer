

class CountdownTimer {
  constructor(targetDate, markup) {
    this.markup = markup;
    this.targetDate = targetDate;
    this.intId = null;
    this.deltaTime = 0;
  }

  start() {
    this.intId = setInterval(() => {
      const currentDate = new Date();
      this.deltaTime = this.targetDate - currentDate;
      const{days, hours,mins,secs }= this.getTimeComponents(this.deltaTime);
      this.insertValues(days,hours,mins,secs );

 
         if (this.deltaTime <= 0) {
        clearInterval(this.intId);
        
     this.insertValues(0,0,0,0)
    }
   
    }, 1000);
      
 
  }


  pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimeComponents(time) {
    this.deltaTime = time;
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  insertValues(d, h, m, s, msg) {
    const { days, hours, mins, secs } = this.markup;
    days.textContent = `${d}`;
    hours.textContent = `${h}`;
    mins.textContent = `${m}`;
      secs.textContent = `${s}`;
    
  }
}

const timer = new CountdownTimer(new Date('Jan 01, 2022'), {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),

});


timer.start()
