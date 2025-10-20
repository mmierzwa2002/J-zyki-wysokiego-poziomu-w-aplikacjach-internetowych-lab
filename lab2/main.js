const { Worker } = require("worker_threads");

function runWorker(limit) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./sumWorker.js", {
      workerData: { limit: limit },
    });
    worker.on("message", resolve);

    worker.on("error", reject);
  });
}

async function main() {
  console.log("Uruchamiam 4 workerów równolegle...");
  console.time("Całkowity czas");
  const limitValue = 5e7;

  try {
    const results = await Promise.all([
      runWorker(limitValue),
      runWorker(limitValue + 1),
      runWorker(limitValue + 2),
      runWorker(limitValue + 3),
    ]);
    console.log("Wszystkie workery zakończyły pracę.");
    console.log("Wyniki: ", results);
    console.timeEnd("Całkowity czas: ");
  } catch (err) {
    console.error("Jeden z wątków napotkał błąd:", err);
  }
}

main();
