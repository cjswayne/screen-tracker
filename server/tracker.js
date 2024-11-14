import robot from "robotjs";
import { activeWindow } from "active-win";
import { exec } from "child_process";

let lastActiveTime = Date.now();
let currentApp = "";

// Function to check idle time
const checkIdleTime = () => {
  const currentTime = Date.now();
  const idleTime = currentTime - lastActiveTime;
  console.log(`Idle Time: ${idleTime / 1000} seconds`);

  if (idleTime > 60000) {
    // If idle for more than 1 minute
    console.log("System is idle for more than a minute");
  }
};

// Function to track active window
const trackActiveWindow = async () => {
  // Get current active window title
  try {
    const window = await activeWindow();

    if (window && window.owner.name !== currentApp)
      console.log(`App switched: ${window.owner.name}`);
  } catch (error) {
    console.error(error);
  }
};

setInterval(() => {
  trackActiveWindow();
  checkIdleTime();
}, 1000); // Check every second
