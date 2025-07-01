/*
day01_05 : kpopUL컴포넌트의 부모 컴포넌트
index.js에서 App의 파일 위치 수정 -> 교체 할 거니 App3말고 App으로 두기
*/
import KpopUL from './KpopUL';

export default function App() {
  const twice = ["나연","모모","다현","지효"];
    return (
    <div>
        <KpopUL members={twice} title={"Twice"}></KpopUL>
        <KpopUL members={["슈가","지민","제이홉","뷔"]} title={"BTS"}></KpopUL>
    </div>
  );
}
