 async function main() {
      let terminal = document.getElementById("terminal");
      terminal.style.color = "#39ff14";
      let dots = "";

      let hacker = [
        "Initializing Hacking",
        "Reading your Files",
        " Password files Detected",
        "Sending all passwords and personal files to server",
        " Cleaning up",
      ];

      for (let i = 0; i < hacker.length; i++) {
        const element = hacker[i];
        console.log(element);
        let line = document.createElement("div");
        line.innerHTML = element;
        terminal.appendChild(line);
        setInterval(() => {
          if (dots.length == 3) {
            dots = "";
          } else {
            dots += ".";
          }
          line.innerHTML = element + dots;
        }, 400);
        await delay();
      }

      function delay() {
        let randomTime = Math.floor(Math.random() * 7) + 1;
        let time = randomTime * 1000;
        let prom1 = new Promise(function (resolve, reject) {
          setTimeout(() => {
            resolve();
          }, time);
        });
        return prom1;
      }
    }
    main();