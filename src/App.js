import './App.css';
import  {useState} from 'react'

const App = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player1wins, setPlayer1Wins] = useState(0);
  const [player2wins, setPlayer2Wins] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="mainContainer">
      <h2 className="heading"> Begin the Game  </h2>
      <div className="card">
        {currentPage === 1 ? <>
          <label className="lb"> Player 1 Name </label>
          <input onChange={(e) => {setPlayer1(e.target.value)}} value={player1} placeholder="Player 1 Name" className="inputBox"></input>
          <label className="lb"> Player 2 Name </label>
          <input onChange={(e) => {setPlayer2(e.target.value)}} value={player2} placeholder="Player 2 Name" className="inputBox"></input>
          <button className="btn" onClick={() => setCurrentPage(2)}> Continue </button>
        </> : <>
            <div className="row">
              <div className="col">
                <label className="lb1"> {player1} </label>
                <label className="lb"> Wins: {player1wins} </label>
              </div>
              <button className="btn2" onClick={() => setPlayer1Wins(player1wins + 1)}> Add Win </button>
            </div>
            <div className="row">
              <div className="col">
                <label className="lb1"> {player2} </label>
                <label className="lb"> Wins: {player2wins} </label>
              </div>
              <button className="btn2" onClick={() => setPlayer2Wins(player2wins + 1)}> Add Win </button>
            </div>
            <div className="divider"> </div>
            <div className="revRow">
              <div className="col">
                <label className="lb"> Current Winner: {player1wins !== player2wins ?  player2wins > player1wins ? player2 : player1 : " Draw"} </label>
                <label className="lb"> Win Difference: {player2wins > player1wins ? (player2wins - player1wins) : ( player1wins - player2wins )} </label>
              </div>
            </div>
            <button className="btn1" onClick={() => setCurrentPage(2)}> Save Game </button>
            <div className="back" onClick={() => setCurrentPage(1)}> Back </div>
        </>
      }
         </div>
    </div>
  );
}

export default App;
