$.when($.get("https://api.github.com/repos/claudioybf/calculadora") , $.get("https://api.github.com/repos/claudioybf/explode-ballons"), $.get("https://api.github.com/repos/claudioybf/hash-game"))
    .done(function (data1 , data2, data3) {

        var repositorios =  {0: data1, 1: data2, 2: data3} ;

        for (i = 1; i < 4; i++) { 
            
            var html = "<h2 class='text-uppercase text-secondary mb-0'>"+repositorios[i-1][0].name+"</h2>";
            html += "<hr class='star-dark mb-5'><img class='img-fluid mb-5' src='assets/img/portfolio/cabin.png'>" 
            html += "<p class='mb-5'>"+repositorios[i-1][0].description+"</p>";

            $('#col-'+ i).html(html);
        }
    }
);
