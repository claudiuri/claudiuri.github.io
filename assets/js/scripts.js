var projects = [];
var table = document.getElementById('myTable');

if(localStorage.getItem('projects') == null){
    $.get('https://api.github.com/users/claudiuri/repos', (data) => {
    
        data.forEach(element => {
            let project = { name: element.name, description:  element.description, language: element.language, url: element.html_url}
            projects.push(project);
        });
        
        projects = projects.filter(element => {
            return element.description != null;
        });
        
        localStorage.setItem('projects', JSON.stringify(projects));
        
        insertProjectsInTable(projects);       
    });
}else{
    
    projects = JSON.parse(localStorage.getItem('projects'));
    insertProjectsInTable(projects);
}

function insertProjectsInTable(projects){
    projects.forEach(element => {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = `<a target="_blank" title="Ver projeto no github" rel="noopener" href="${element.url}">${element.name}</a>`;
        cell2.innerHTML = element.description;
        cell3.innerHTML = element.language;
        cell3.className = "d-none d-sm-block";
    });
}

$("#sendMessageButton").click(function (){
    event.preventDefault();

    var spinner = $('.loading-spinner');

    spinner.addClass('active'); 

    var $form = $( this ),
      name = $form.find( "input[name='name']" ).val(),
      email = $form.find( "input[name='email']" ).val(),
      message = $form.find( "input[name='message']" ).val();

    $.ajax({
        url : "https://sen-mail.herokuapp.com/",
        type : 'post',
        data : {
        name : name,
        email : email,
        message: message
        },
        success: function(data) {
            spinner.removeClass('active'); 
            alert(data);
        },
        error: function(error) {
            spinner.removeClass('active'); 
            alert(error);
        },
    });
   
});
