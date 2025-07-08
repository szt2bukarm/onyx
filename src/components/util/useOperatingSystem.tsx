import { useEffect, useState } from "react";

export default function useOperatingSystem(): "Windows" | "Mac" | "Other" {
  const [os, setOs] = useState<"Windows" | "Mac" | "Other">("Other");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    if (/Windows/i.test(userAgent)) {
      setOs("Windows");
    } else if (/Macintosh|Mac OS X/i.test(userAgent)) {
      setOs("Mac");
    } else {
      setOs("Other");
    }
  }, []);

  return os;
}
