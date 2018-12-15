//$('#portfolio').hide();
//$('#about').hide();
// $('#contact').hide();
// $('.footer').hide();
// $('.copyright').hide();

// Get all projects in my github
// $.get("https://api.github.com/users/claudioybf/repos", function(data){
//     // var projetos = data;

//     // $('#col-1').html(html);
//     // $('#project1-description').html(data[0].description);
//     // for (i = 1; i < 4; i++) { 

//     //     var html = "<h2 class='text-uppercase text-secondary mb-0'>"+data[i-1].name+"</h2>";
//     //     html += "<hr class='star-dark mb-5'><img class='img-fluid mb-5' src='assets/img/portfolio/cabin.png'>" 
//     //     html += "<p class='mb-5'>"+data[i-1].description+"</p>";

//     //     $('#col-'+ i).html(html);

//     //     console.log(html);
//     // }
// });

// var getReposiorioCalculadora = $.get("https://api.github.com/repos/claudioybf/caluladora");
// var getReposiorioBallons = $.get("https://api.github.com/repos/claudioybf/explode-ballons");
// var getReposiorioHashGame = $.get("https://api.github.com/repos/claudioybf/hash-game");

// $.when(getReposiorioCalculadora, getReposiorioBallons, getReposiorioHashGame)
//     .done(function (repositorioCalculaodra, reposiotrioBallons, reposiorioHashGame) {

//         var repositorios =  {0: repositorioCalculaodra, 1: reposiorioHashGame, 2: reposiotrioBallons} ;
    
//         console.log(repositorios)

//         for (i = 1; i < 4; i++) { 
            
//             var html = "<h2 class='text-uppercase text-secondary mb-0'>"+repositorios[i-1][0].name+"</h2>";
//             html += "<hr class='star-dark mb-5'><img class='img-fluid mb-5' src='assets/img/portfolio/cabin.png'>" 
//             html += "<p class='mb-5'>"+repositorios[i-1][0].description+"</p>";

//             $('#col-'+ i).html(html);
//         }
//     }
// );
    
