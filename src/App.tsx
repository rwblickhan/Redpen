import Sidebar from "./Sidebar";
import Tiptap from "./Tiptap";

export default function App() {
  return (
    <div className="flex flex-row">
      <Sidebar className="h-screen basis-1/6" />
      <Tiptap className="h-screen basis-5/6" />
    </div>
  );
}
