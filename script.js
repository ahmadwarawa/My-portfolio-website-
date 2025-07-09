  let name = prompt("What is your name?");
    if (name) {
      document.getElementById("greeting").innerHTML = "Hello, " + name + "!!! ";
    }

    // Display current date & time
    function DisplayDateTime() {
      let now = new Date();
      document.getElementById("DisplayDateTime").innerHTML = "Current date & time: " + now.toLocaleString();
    }
    DisplayDateTime();

    // Change background color
    function changeBackground() {
      let colors = ["#f0f0f0", "#ffe4e1", "#d0f0c0", "#add8e6", "#f9f9b6", "#f0e68c"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    }

    // Show random motivational quote
    function showQuote() {
      let quotes = [
        "Believe in yourself and all that you are.",
        "Every journey begins with a single step.",
        "Stay positive, work hard, and make it happen.",
        "Dream big and dare to fail.",
        "Success is not for the lazy!"
      ];
      let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").innerHTML = '"' + randomQuote + '"';
    }