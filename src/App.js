import { Outlet } from "react-router-dom";
import Header from "./component/header/header";

function App () {
    return (
        <div>
            <Header/>
            <Outlet/>
            <h2>로그인 연습용 사이트입니다.</h2>
            <div>
                <h3>사용 기술</h3>
                <h4>프론트 엔드</h4>
                <ul>
                    <li>react(javascript)</li>
                    <li>redux</li>
                    <li>redux-toolkit</li>
                    <li>redux-persist</li>
                    <li>axios</li>
                </ul>
                <h4>백엔드</h4>
                <ul>
                    <li>express(node.js)</li>
                    <li>jwt</li>
                    <li>cookie</li>
                    <li>암호화</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
