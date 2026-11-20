
"use client";

import { useEffect, useState } from "react";

type HealthResponse = {
  status: string;
  service: string;
  version: string;
};

export default function BackendStatus() {
  const [health, setHealth] = useState<HealthResponse | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function checkBackend() {
      try {
        const response = await fetch(
          "http://localhost:4000/health",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Backend unavailable");
        }

        const data: HealthResponse = await response.json();
        setHealth(data);
      } catch (err) {
        if (!controller.signal.aborted) {
          setError("Cannot connect to backend");
        }
      }
    }

    checkBackend();

    return () => controller.abort();
  }, []);

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200">
      <h2 className="font-semibold text-slate-900 mb-2">
        Backend API Status
      </h2>

      {health ? (
        <div className="text-green-600">
          ● Connected — {health.service} v{health.version}
        </div>
      ) : error ? (
        <div className="text-red-600">
          ● {error}
        </div>
      ) : (
        <div className="text-slate-500">
          Checking backend connection...
        </div>
      )}
    </div>
  );
}
