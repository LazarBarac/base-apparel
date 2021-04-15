const dugme = document.getElementById("dugme");

const poruka = document.getElementById("poruka");
const input = document.getElementById("input");
const greska = document.getElementById("greska");


dugme.addEventListener("click", unesi);

function unesi (){

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    const mejl = input.value;

    if ( validateEmail(mejl)) {
        poruka.classList.remove("ne");
        poruka.classList.add("da");
        poruka.innerHTML = "Uspesno ste se prijavili!";
        input.value = "";
    }
    else {
        poruka.classList.remove("da");
        poruka.classList.add("ne");
        poruka.innerHTML = "Molimo unesite ispravnu el.adresu!";
        input.value = "";
        greska.style.visibility = "visible";
    }
}

