import { Routes, Route, Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <nav className="flex gap-4 mb-4">
        <Link to="team" className="text-blue-600 hover:underline">
          Team
        </Link>
        <Link to="company" className="text-blue-600 hover:underline">
          Company
        </Link>
      </nav>

      {/* <Routes>
        <Route path="team" element={<Team />} />
        <Route path="company" element={<Company />} />
      </Routes> */}

      <Outlet />
    </section>
  );
}
