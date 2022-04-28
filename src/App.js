import { Outlet} from "react-router-dom";
import Header from "./component/header/header";

function App() {
  return (
    <div>
        <Header />
        <Outlet />
        <h2>이곳은 메인 정보가 표시될 예정입니다.</h2>
    </div>
  );
}

export default App;
