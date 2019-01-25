class EventCalendar {
  constructor(now = new Date()) {
    this.events = [];
    this.now = now;
    }

  addEvent(event) {
    this.events.push(event);
  }

  elementToDisplay() {
    let div = document.createElement('div');
    let event = this.events;
    this.sortedFutureEvents().forEach((event) => {
      let eventHTML = event.elementToDisplay();
      div.appendChild(eventHTML);
    })
    return div
  }

  futureEvents() {
    let futureEvents = [];
    this.events.forEach((event) => {
      let dateNow = this.now;
      console.log(event.date)
      if (event.getDateObject() > dateNow) {
        futureEvents.push(event);
      }
    })
    return futureEvents;
  }

  sortedFutureEvents() {
    let result = this.futureEvents();
    result.sort((e1, e2) => {
      let date1 = e1.getDateObject();
      let date2 = e2.getDateObject();
      return date1 - date2;
    })
    return result;
  }
}
