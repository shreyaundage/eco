import PixelLayout from "@/components/PixelLayout";
import { useState } from "react";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("admin");
  const [password, setPassword] = useState("");
  const [submissions, setSubmissions] = useState(
    Array.from({ length: 5 }).map((_, i) => ({
      id: i + 1,
      user: `user${i + 1}`,
      activity: "Tree planted",
      status: "pending",
    })),
  );
  const [events, setEvents] = useState(
    Array.from({ length: 3 }).map((_, i) => ({
      id: i + 1,
      name: `Event ${i + 1}`,
      date: "2025-10-0" + (i + 1),
    })),
  );

  function approve(id: number) {
    setSubmissions((s) =>
      s.map((x) => (x.id === id ? { ...x, status: "approved" } : x)),
    );
  }
  function reject(id: number) {
    setSubmissions((s) =>
      s.map((x) => (x.id === id ? { ...x, status: "rejected" } : x)),
    );
  }

  return (
    <PixelLayout>
      <div className="space-y-4 max-w-4xl mx-auto">
        <h1 className="font-pixel text-xl">Admin Approval (Demo)</h1>
        {!loggedIn ? (
          <div className="pixel-card p-4">
            <div className="mb-2">Demo login</div>
            <input
              placeholder="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full p-2 mb-2 pixel-border"
            />
            <input
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-2 pixel-border"
            />
            <button className="pixel-button" onClick={() => setLoggedIn(true)}>
              Login
            </button>
          </div>
        ) : (
          <>
            <section className="pixel-card">
              <div className="font-pixel mb-2">Pending Submissions</div>
              <div className="space-y-2">
                {submissions.map((s) => (
                  <div
                    key={s.id}
                    className="pixel-card flex items-center justify-between"
                  >
                    <div>
                      <div className="font-semibold">{s.user}</div>
                      <div className="text-sm opacity-70">{s.activity}</div>
                      <div className="text-xs opacity-70">
                        Status: {s.status}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="pixel-button"
                        onClick={() => approve(s.id)}
                      >
                        Approve
                      </button>
                      <button
                        className="pixel-button"
                        onClick={() => reject(s.id)}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="pixel-card">
              <div className="font-pixel mb-2">Manage Events</div>
              <div className="space-y-2">
                {events.map((ev) => (
                  <div
                    key={ev.id}
                    className="flex items-center justify-between pixel-card p-3"
                  >
                    <div>
                      <div className="font-semibold">{ev.name}</div>
                      <div className="text-xs opacity-70">{ev.date}</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="pixel-button">Edit</button>
                      <button className="pixel-button">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </PixelLayout>
  );
}
