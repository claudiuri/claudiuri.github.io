var projects = [];

$.get("https://api.github.com/users/claudiuri/repos", (data) => {

    data.forEach(element => {
        let project = { name: element.name, description:  element.description, language: element.language}
        projects.push(project);
    });

});

projects.forEach(element => {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
})

console.log(projects);
