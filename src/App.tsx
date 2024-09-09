// import { SZPlusGroup } from "./components/SZPlusGroup/SZPlusGroup";
import { SZPlusGroup } from "./solution/SZPlusGroup/SZPlusGroup";
import mockData from "./mocks/mock.json";

export const App: React.FC = () => (
  <SZPlusGroup
    href={mockData.href}
    title={mockData.title}
    teasers={mockData.teasers}
  />
);

export default App;
