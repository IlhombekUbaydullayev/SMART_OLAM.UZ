
var image = [
    {
       text : "Frontend kursi",
       rasm : './smart_olam.jpg',
       davomiyligi : '6 oy'
    },
    {
       text : "Backend kursi",
       rasm : './smart_olam.jpg',
       davomiyligi : '12 oy'
    },
    {
       text : "Kompyuter savodxonligi",
       rasm : './smart_olam.jpg',
       davomiyligi : '3 oy'
    },
    {
       text : "Bugalteriya",
       rasm : './smart_olam.jpg',
       davomiyligi : '4 oy'
    },
    {
       text : "Robotexnika",
       rasm : './smart_olam.jpg',
       davomiyligi : '6 oy'
    },
    {
       text : "Ingliz tili",
       rasm : './smart_olam.jpg',
       davomiyligi : '12 oy'
    } 
]



for(var i = 0; i < image.length; i++){
     var text = `
          <div class="course_box" onclick='sendData(${JSON.stringify(image[i])})'>
            <img src="${image[i].rasm}" alt="" class="img_course">
            <h3>${image[i].text}</h3>
            <p> davomiyligi :  ${image[i].davomiyligi} </p>
          </div>
        `
     document.getElementById("course_b").innerHTML += text 
}

function sendData(image){
    localStorage.setItem("text",image.text)
    window.location.href = "courses.html"
}