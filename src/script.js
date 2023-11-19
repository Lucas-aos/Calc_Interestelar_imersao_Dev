// função para calcular km em anos Luz
function newInp() {
  var lightYear = document.getElementById("inp2").value;
  var kilometer = 0.0000000000001057; // corresponde a 1km in ly
  var name = document.getElementById("inp1").value;
  var conversion = lightYear * kilometer;
  if (name == "") {
    alert("Preencha o seu nome");
  } else if (lightYear == "") {
    alert("Preencha um valor");
  } else {
    alert(
      "Olá " +
        name +
        ", " +
        lightYear +
        " quilômetro(s) corresponde(m) a " +
        conversion +
        " Anos Luz!"
    );
  }
}

// função para calcular tempo de viagem para uma estrela
function stars() {
  var vel = document.getElementById("velo").value;
  var destinoF = document.getElementById("star2").value;
  var lYAlf = 40680000000000000; //quilômetros em anos luz de Alpha Centauri
  var lYEe = 99338000000000000; //quilômetros em anos luz de Epsilon Eridani
  var hA = 8760; //horas em 1 ano
  var value1Ac = lYAlf / vel;
  var value2Ac = value1Ac / 8760;
  var value1Ee = lYEe / vel;
  var value2Ee = value1Ee / 8760;

  if (vel == 0) {
    alert(
      ' "Um objeto parado sempre tende a permanecer parado". Digite uma velocidade!'
    );
  } else if (destinoF == "Alpha Centauri") {
    alert(
      "Viajando do nosso Sol até a estrela " +
        destinoF +
        ", na velocidade de " +
        vel +
        " Km/h, você chegaria até lá em " +
        value2Ac.toFixed() +
        " anos!"
    );
  } else {
    alert(
      "Viajando do nosso Sol até a estrela " +
        destinoF +
        ", na velocidade de " +
        vel +
        " Km/h, você chegaria até lá em " +
        value2Ee.toFixed() +
        " anos!"
    );
  }
}
