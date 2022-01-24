

function startClick(){  
    var pokemon = prompt("Name of this pokemon is?");
    var pikachu = "pikachu";
    var lol = document.getElementById("title");
    var pictureCheck = document.getElementById("pokemonPic");
      
      
      if (pokemon == pikachu) {
    pictureCheck.src = "https://images.unsplash.com/photo-1564038057544-f9ca83c46804?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzA1OTg2NQ&ixlib=rb-1.2.1&q=85";
     
     lol.innerHTML = "Good!";
        
      } else {
       lol.innerHTML = "Wrong";
       pictureCheck.src = "https://images.unsplash.com/photo-1527631120902-378417754324?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzA1OTg1MA&ixlib=rb-1.2.1&q=85";
        
      }
        }  
    
    function startReset() {
      document.location.reload(true)
    }