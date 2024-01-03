
const destination = document.getElementById("destination");

function findLuck() {
    const luck = Math.floor(Math.random() * 2);
        if (luck == 0) {
          destination.classList.add("Wins");
          destination.src = "img/Heads.png";
        } else {
          destination.classList.add("Wins");
          destination.src = "img/Tail.png";
        }
    }

    function clearToss() {
        destination.classList.remove("Wins");
        setTimeout(findLuck, 100);
    }