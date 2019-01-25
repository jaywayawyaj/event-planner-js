window.addEventListener('load', () => {

  let eventDisplay = new EventCalendar();

  let button = document.getElementById('event-submit-button');
  button.addEventListener('click', () => {
    let description = document.getElementById('input-desc').value
    let dateString = document.getElementById('input-date').value
    let event = new Event(description, dateString);
    eventDisplay.addEvent(event);

    display();
  })

  const display = () => {
    let eventsDiv = document.getElementById('eventListing');
    let events = eventDisplay.elementToDisplay();
    eventsDiv.innerHTML = '';
    eventsDiv.appendChild(events);
  }

})
