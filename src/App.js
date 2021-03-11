import "./App.css";
import Profile from "./profile/Profile";
import user1 from "./profile/conan_detective_tbs.jpg";
import user2 from "./profile/p19054_t178_2020_1_002_000.jpg";
import user3 from "./profile/elon_musk1.jpg";

function App() {
  function handleName(name) {
    alert(`Hello, my name is ${name}`);
  }

  return (
    <div className="App">
      <Profile
        fullName="Shin'ichi Kudo (Conan)"
        bio="Hi, I am the most famous detective in the world, I am passionate 
        with investigation in criminal cases."
        profession="Detective"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={user1}
          alt="profpic"
        />
      </Profile>

      <Profile
        fullName="Leonel Messi"
        bio="Hello, I am a professional footballer who plays as a forward and captains in 
        the Spanish club Barcelona and the Argentina national team."
        profession="Football Player"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={user2}
          alt="profpic"
        />
      </Profile>

      <Profile
        fullName="Elon Musk"
        bio="Greeting, I am the founder, CEO, CTO, and chief designer of SpaceX; 
        early investor, CEO, and product architect of Tesla."
        profession="CEO of Tesla Motors"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={user3}
          alt="profpic"
        />
      </Profile>
    </div>
  );
}

export default App;
