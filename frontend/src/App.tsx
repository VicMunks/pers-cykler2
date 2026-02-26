import { useEffect, useState } from "react";

export default function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.text())
      .then(setStatus)
      .catch(() => setStatus("Backend unreachable"));
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Pers Cykler</h1>
      <p>Backend status: {status}</p>
    </div>
  );
}