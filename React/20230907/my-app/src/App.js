import './App.css';

function App() {
  const name = '라이켓';
  function 함수() {
    return '함수';
  }
  const someStyle = { backgroundColor: "yellow", color: "white" };

  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();



  return (
    <div>
      <div>
        <h1 className="h1">안녕 {함수() ? '함수' : 'JSX'}!</h1>
        <h1 className='newClass'>안녕 라이켓!</h1>
        <input type="text" style={{ backgroundColor: "red" }} />
      </div>
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <h1 style={{ color: 'red' }}>년 : {year}</h1>
        <h2>월/일 : {month + 1}/{date}</h2>
        <h3>시간 : {hour}시 {min}분 {sec}초</h3>
      </div>
    </div>
  );
}

export default App;