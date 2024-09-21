import { Create } from "./components/Create"
import { Update } from "./components/Update"

export function App() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Create />
      <Update />
    </div>
  )
}