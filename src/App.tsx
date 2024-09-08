import { SZPlusGroup } from "./components/SZPlusGroup/SZPlusGroup";
import mockData from "./mocks/mock.json";

function App() {
  return (
    <SZPlusGroup
      href={mockData.href}
      title={mockData.title}
      teasers={mockData.teasers}
    />
  );
}

export default App;
