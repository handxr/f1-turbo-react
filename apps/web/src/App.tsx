import { Button } from "./components/ui/button";

export default function App() {
  return (
    <Button onClick={() => globalThis.window.alert("Hello world!")}>
      Click me
    </Button>
  );
}
