container = document.getElementById("container")

let a
let date;
let day



setInterval(() => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    a = new Date()
    date = a.getDate()
    day = days[a.getDay()]
    let time = a.getHours()+ ":" + a.getMinutes()+ ':' + a.getSeconds()
    
    container.innerHTML = "Current Time is: " + time + "<br>on " + "Day:"+day + " Date:"+date+"<hr><br> <p class = 'text'>This is a Simple Clock. Check out the About Page for More Information.</p>"
}, 1000);