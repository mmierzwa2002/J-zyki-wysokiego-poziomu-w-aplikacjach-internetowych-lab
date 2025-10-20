const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Referencja do obiektu export
const math1 = require("./math1");
// Podejście obiektowe
const MathModule = require("./math2");
const math2 = new MathModule();

function ask(question) {
  return new Promise((resolve) =>
    rl.question(question, (answer) => resolve(answer))
  );
}

(async function () {
  console.log("Wybierz wersję modułu matematycznego:");
  console.log("1 - Wersja z referencją do export (math1)");
  console.log("2 - Wersja obiektowa (math2)");
  let versionChoice = await ask("Twój wybór (1/2): ");

  let math;
  if (versionChoice === "1") {
    math = math1;
  } else if (versionChoice === "2") {
    math = math2;
  } else {
    console.log("Nieprawidłowy wybór");
    rl.close();
    return;
  }

  console.log("\nWybierz operację matematyczną:");
  console.log("1 - Kwadrat liczby");
  console.log("2 - Pierwiastek kwadratowy");
  console.log("3 - Sześcian liczby");
  console.log("4 - Pierwiastek sześcienny");
  console.log("5 - Rozwiązanie równania kwadratowego");

  let operation = await ask("Twój wybór (1-5): ");
  let result;

  switch (operation) {
    case "1": {
      let num = parseFloat(await ask("Podaj liczbę: "));
      result = math.square(num);
      break;
    }
    case "2": {
      let num = parseFloat(await ask("Podaj liczbę: "));
      result = math.cube(num);
      break;
    }
    case "3": {
      let num = parseFloat(await ask("Podaj liczbę: "));
      result = math.cube(num);
      break;
    }
    case "4": {
      let num = parseFloat(await ask("Podaj liczbę: "));
      result = math.cubeRoot(num);
      break;
    }
    case "5": {
      let a = parseFloat(await ask("Podaj a: "));
      let b = parseFloat(await ask("Podaj b: "));
      let c = parseFloat(await ask("Podaj c: "));
      result = math.quadraticEquation(a, b, c);
      break;
    }
    default:
      console.log("Nieprawidłowy wybór operacji.");
      rl.close();
      return;
  }
  console.log("\nWynik: ", result);
  rl.close();
})();
