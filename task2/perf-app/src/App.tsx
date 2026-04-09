import { RegularList } from "./components/RegularList";
import { VirtualList } from "./components/VirtualList";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ flex: 1 }}>
        <h2>Regular List</h2>
        <RegularList itemCount={1000} />
      </div>
      <div style={{ flex: 1 }}>
        <h2>Virtual List</h2>
        <VirtualList itemCount={10000} height={600} />
      </div>
    </div>
  );
}

export default App;