class Event {
  constructor(description, date) {
    this.description = description;
    this.date = date;
  }

  elementToDisplay() {
    let div = document.createElement('div');
    div.innerText = `${this.description} at ${this.date}`;
    return div;
  }

  getDateObject() {
    return Date.parse(this.date)
  }
}
