

var message = '';
var student;
var search = true;


var print = message => {
    var div = document.getElementById('output');
    div.innerHTML = message;
};

var getStudent = student => {
    var report = "<h2> Student: " + student.name + "</h2>";
    report += "<p> Track: " + student.track + "</p>";
    report += "<p> Points: " + student.points + "</p>";
    report += "<p> Achievements: " + student.achievements + "</p>";
    return report;
}

while(search){
    response = prompt("Enter name to search or type quit to exit :");
    if(response.toLowerCase() === 'quit' || response === null){
        break;
    };
    for(var i = 0; i < students.length; i++){
        student = students[i];
        if(student.name === response){
            message = getStudent(student);
            document.write(message);
            // print(message);
            search = false;
        }
    }
}

