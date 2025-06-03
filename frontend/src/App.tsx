import { type FC } from "react";
import { Outlet } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm p-4">
        <h1 className="text-xl font-semibold">Mi Aplicación</h1>
      </nav>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
