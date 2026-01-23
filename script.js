/*********************************
 * 1. MODEL DATA (ported from Java)
 *********************************/

// Example vocab pools — replace with yours
const softLines = [
  "The afternoon leans gently forward,",
  "a quiet thought waiting to be spoken,",
  "something warm settles in the air,"
];

const playfulLines = [
  "This line pretends it knows what it’s doing,",
  "a semicolon wonders if it belongs here,",
  "the poem trips but keeps going anyway,"
];

const endingLines = [
  "and maybe this is enough for now.",
  "which feels oddly brave.",
  "and that feels like a good place to stop."
];


/*********************************
 * 2. CORE GENERATION LOGIC
 *********************************/

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generatePoem(tone, length) {
  let poem = "";

  for (let i = 0; i < length; i++) {
    if (tone === "soft") {
      poem += randomFrom(softLines);
    } else {
      poem += randomFrom(playfulLines);
    }
    poem += "<br>";
  }

  poem += "<br>" + randomFrom(endingLines);
  return poem;
}


/*********************************
 * 3. DOM / FRONTEND LOGIC
 *********************************/

function runProgram() {
  const output = document.getElementById("output");

  // Clear previous output
  output.innerHTML = "";

  // Read parameters from UI
  const tone = document.getElementById("tone").value;
  const length = parseInt(document.getElementById("length").value);

  // Simulate terminal-style execution
  const bootLines = [
    "> java PoemGenerator",
    "Initializing language model...",
    "Loading parameters...",
    ""
  ];

  let i = 0;

  function printBoot() {
    if (i < bootLines.length) {
      output.innerHTML += bootLines[i] + "<br>";
      i++;
      setTimeout(printBoot, 500);
    } else {
      // Generate and print poem
      output.innerHTML += generatePoem(tone, length);
    }
  }

  printBoot();
}
