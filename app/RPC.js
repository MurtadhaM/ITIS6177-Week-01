/*
 * --------------------
 * RPC by 🐸 Murtadha Marzouq 🐍
 * --------------------
 *
 * This is a simple RPC that will open the current directory in the file explorer
 **
 */

var platform = process.platform;
const { exec } = require("child_process");
const http = require("http");

const RPC_Start = () => {
  switch (platform) {
    case "darwin":
      // Fancy Feature
      notifyUser("Openning Finder", platform);
      // Open Finder
      exec("open .");
      break;
    case "win32":
      notifyUser("Openning Explorer", platform);
      exec("start .");
      break;
    default:
      notifyUser("Openning Nautilus", platform);
      exec("nautilus");
  }
};
/**
 * --------------------
 * HELPER FUNCTIONS by 🐸 Murtadha Marzouq 🐍
 * --------------------
 */

/**
 * FLAGS FOR OPTIONS
 * @param {boolean} SPEAK - Flag to enable/disable the notification
 */

const SPEAK = true;

const notifyUser = (message, platform) => {
  if (SPEAK) {
    switch (platform) {
      case "darwin":
        exec(`say ${message}`);
        break;
      case "win32":
        exec(
          `powershell -Command "Add-Type -AssemblyName System.speech ;$speak = New-Object System.Speech.Synthesis.SpeechSynthesizer; $speak.Speak(${message}))"`
        );
        break;
      default:
        // MAYBE LINUX
        exec(`espeak '${message}'`);
    }
  }
};
//Set the port
const PORT = process.env.PORT || 8080;

// Start the server
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Successfully Executed Child Process</h1>");
    RPC_Start();
}).listen(PORT);