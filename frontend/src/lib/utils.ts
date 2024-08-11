import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function getBrowserAndOSInfo() {
  const userAgent = navigator.userAgent;
  let browserName = "Unknown";
  let osName = "Unknown";

  // Detect browser name
  if (/Firefox/.test(userAgent)) {
    browserName = "Firefox";
  } else if (/Opera|OPR/.test(userAgent)) {
    browserName = "Opera";
  } else if (/Chrome/.test(userAgent)) {
    browserName = "Chrome";
  } else if (/Safari/.test(userAgent)) {
    browserName = "Safari";
  } else if (/MSIE|Trident/.test(userAgent)) {
    browserName = "Internet Explorer";
  }

  // Detect OS name and distribution
  if (/Windows NT 11.0/.test(userAgent)) {
    osName = "Windows 11";
  } else if (/Windows NT 10.0/.test(userAgent)) {
    osName = "Windows 10";
  } else if (/Macintosh|Mac OS X/.test(userAgent)) {
    osName = "MacOS";
  } else if (/X11/.test(userAgent) && !/Linux/.test(userAgent)) {
    osName = "UNIX";
  } else if (/Linux/.test(userAgent)) {
    const linuxDistros = {
      Ubuntu: "Ubuntu",
      Debian: "Debian",
      Kali: "Kali Linux",
      Fedora: "Fedora",
      CentOS: "CentOS",
      Gentoo: "Gentoo",
      "Red Hat": "Red Hat",
      "Linux Mint": "Linux Mint",
      "Arch Linux": "Arch Linux",
      Manjaro: "Manjaro",
    };

    for (const [key, value] of Object.entries(linuxDistros)) {
      if (userAgent.includes(key)) {
        osName = value;
        break;
      }
    }

    if (osName === "Unknown") {
      osName = "Linux";
    }
  } else {
    osName = "Other";
  }

  return { browserName, osName };
}

function getDateTimeInfo() {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const time = new Date().toLocaleTimeString("en-US", { hour12: false });
  const timeZoneShort = new Date()
    .toLocaleTimeString("en-US", { timeZoneName: "short" })
    .split(" ")[2];

  return { timeZone, date, time, timeZoneShort };
}

export function generateLoginInfo() {
  const { browserName, osName } = getBrowserAndOSInfo();
  const { time, timeZoneShort, date } = getDateTimeInfo();

  return { browserName, osName, time, timeZoneShort, date };
}
