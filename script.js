/*********************************
 * 1. MODEL DATA (ported from Java)
 *********************************/

// Example vocab pools — replace with yours
const poemLines = [
  "the question waiting between us",
  "an evening shaped like a maybe",
  "a table meant for two",
  "the possibility of the night",
  "green and yellow in motion",
  "a future leaning west",
  "wings angled toward Oregon",
  "the moment charged with maybe",
  "plans waiting to be claimed",
  "a night asking to begin",
  "wings testing the distance",
  "a duck bold enough to try",
  "a confident waddle forward",
  "meaning found in proximity",
  "wherever this leads",
  "an ending waiting to be chosen",
  "the question picking up the pace",
  "Jack, somewhere in the stride",
  "flirting at a conversational jog",
  "a heartbeat setting the tempo",
  "plans tying their laces",
  "the comfort of running side by side",
  "wings pumping, confidence steady",
  "a future leaning west at speed",
  "words jogging into place",
  "your pace, your call",
  "we can slow it down",
  "waiting at the start line",
  "my thoughts struggling to keep pace",
  "date night, no qualifying time required",
  "Oregon on the horizon",
  "where even the ducks have endurance",
  "an easy jog of an idea",
  "love warming up at the start line",
  "wondering if you'd like to pace this together",
  "the timing is just right",
  "make me a lucky duck",
  "don't give me the Shortend of the stick",
];

const endingLines = [
  "I'll keep this Short-en sweet... date night?",
  "this poem is Shorten... but date night won't be.",
  "life's too Shorten to not bring me to date night."
];


/*********************************
 * 2. CORE GENERATION LOGIC
 *********************************/

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generatePoem(length) {
  let poem = "";

  for (let i = 0; i < length; i++) {
      poem += randomFrom(poemLines);
      poem += "<br>";
  }

  poem += "<br>" + randomFrom(endingLines);

  poem += "<br><br>" + "<b>Date night with Liz?</b>";

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
  const length = parseInt(document.getElementById("length").value);

  // Simulate terminal-style execution
  const bootLines = [
    "> java DateNight",
    "Preparing date night ask...",
    "",
    "<i><b>Confessions of Liz Williamson</b></i>",

  ];

  let i = 0;

  function printBoot() {
    if (i < bootLines.length) {
      output.innerHTML += bootLines[i] + "<br>";
      i++;
      setTimeout(printBoot, 500);
    } else {
      // Generate and print poem
      output.innerHTML += generatePoem(length);
      output.innerHTML += `
          <div style="margin-top:20px">
            <label>
              <input type="checkbox" id="yesDate">
              Of course, can’t wait!
            </label>
            <label>
               <input type="checkbox" id="noDate">
               Absolutely not.
            </label>
          </div>
        `;
       document.getElementById("yesDate").addEventListener("change", function () {
         if (this.checked) {
           output.innerHTML += `<b>I’ll see you there!😉</b>`;
           this.disabled = true;
         }
       });
       document.getElementById("noDate").addEventListener("change", function () {
                if (this.checked) {
                  output.innerHTML += `<b>Answer not recognized. Read another poem and maybe try a different option.</b>`;
                  this.disabled = true;
                }
              });
    }
  }
  printBoot();

}
