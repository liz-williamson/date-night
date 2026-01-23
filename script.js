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

function typeText(text, element, speed = 40) {
  let i = 0;

  function typeChar() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    } else {
      element.innerHTML += "<br>";
    }
  }

  typeChar();
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
  output.innerHTML = "";

  const tone = document.getElementById("tone").value;
  const length = parseInt(document.getElementById("length").value);

  const bootLines = [
    "> java PoemGenerator",
    "Initializing language model...",
    "Loading parameters...",
    ""
  ];

  let i = 0;

  function bootSequence() {
    if (i < bootLines.length) {
      typeText(bootLines[i], output, 30);
      i++;
      setTimeout(bootSequence, 600);
    } else {
      const poem = generatePoem(tone, length).split("<br>");
      typePoem(poem, 0);
    }
  }

  function typePoem(lines, index) {
    if (index < lines.length) {
      typeText(lines[index], output, 40);
      setTimeout(() => typePoem(lines, index + 1), 700);
    }
  }

  bootSequence();
}
