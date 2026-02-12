// // target 3 buttons
// // target the form event form

// const sampleEvent = [{
//     title:
//     date:
//     category:
//     description:

// }.

// {
//     title:
//     date:
//     category:
//     description:
// }]






const eventForm = document.getElementById('eventForm');
const eventTitle = document.getElementById('eventTitle');
const eventDate = document.getElementById('eventDate');
const eventCategory = document.getElementById('eventCategory');
const eventDescription = document.getElementById('eventDescription');
const clearAllBtn = document.getElementById('clearAllBtn');
const addsampleBtn = document.getElementById('addSampleBtn');
const eventsContainer = document.getElementById('eventsContainer');
const democontent = document.getElementById('democontent');



const sampleEvent = 
[
{

    title:"Web dev",
    date:"4-5-2026",
    category:"workshop",
    description:"usd ius sijijsahjxdajkhskjb sn"

},

{
    title:"web dev 2",
    date: "4-6-2026",
    category:"conference",
    description:"this is sanbckabs a dsn "
}
]

function CreateEventCard(evenData) {
    const card = document.getcreateElement("div");

    card.inerHtml = `
    <button class="delete-btn">X</button>
    <h3>{(eventData.Title)}
    
    `
}