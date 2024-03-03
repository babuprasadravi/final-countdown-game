import Challenges from './components/Challenges.jsx';
import Player from './components/Player.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Challenges title="Easy" challengeTime = {1} />
        <Challenges title="Not Easy" challengeTime = {5} />
        <Challenges title="Getting tough" challengeTime = {10} />
        <Challenges title="Pros only" challengeTime = {15} />
      </div>
    </>
  );
}

export default App;
