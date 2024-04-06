import { Button } from "./components/Button";

function App() {
  return (
    <div className="h-screen w-full">
      <main className="bg-gray-200 h-full flex justify-center items-center flex-col gap-4">
        <h1 className="text-3xl">
          React + Vite + Typescript + TailwindCSS + Vitest (Template)
        </h1>
        <Button>This is a button</Button>
      </main>
    </div>
  );
}

export default App;
