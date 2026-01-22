const lines = [
  "Initializing poem...",
  "",
  "Sometimes poetry rhymes.",
  "Sometimes it doesn’t.",
  "Sometimes you write code",
  "because feelings are hard.",
  "",
  "Would you go to date night with me?"
];

let index = 0;
const output = document.getElementById("output");

function runProgram() {
  if (index < lines.length) {
    output.innerHTML += lines[index] + "<br>";
    index++;
    setTimeout(runProgram, 800);
  }
}
