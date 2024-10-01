const eventForm = document.getElementById('event-form')
const eventNameInp = document.getElementById('event-name')
const eventDateInp = document.getElementById('event-date')
const eventTimeInp = document.getElementById('event-time')
const eventsList = document.getElementById('events')
//Envio de form
eventForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const eventName = eventNameInp.value,
        eventDate = eventDateInp.value,
        eventTime = eventTimeInp.value;

    
    const li = document.createElement('li');
    li.innerHTML = `<span> ${eventName}- ${eventDate} - ${eventTime} - </span> <button class = "btn-delete">Eliminar</button>`

    eventsList.appendChild(li);

    // eventFrom.rest()

    li.querySelector('.btn-delete').addEventListener('click', function () {
        li.remove();
    })
});

