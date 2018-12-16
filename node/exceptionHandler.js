// Handling exceptions
process.on("uncaughtException", error => {
  if (error.code === "EADDRINUSE") {
    find("port", PORT).then(list => {
      const blockingApplication = list[0];
      if (blockingApplication) {
        console.log(
          `Port "${PORT}" is blocked by "${blockingApplication.name}".`
        );
        console.log("Shutting down blocking application...");
        process.kill(blockingApplication.pid);
        // TODO: Restart server
      }
    });
  }
});
