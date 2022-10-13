import "./App.css";
const comment = [
  {
    id: 1,
    date: new Date().toLocaleDateString(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/62/62",
    },
  },
  {
    id: 2,
    date: new Date().toLocaleDateString(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
  {
    id: 3,
    date: new Date().toLocaleDateString(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
];

function App() {
  return (
    <div className="App">
      {comment.map((el) => {
        return (
          <div key={el.id} className="Container">
            <div className="Item-first">
              <img src={el.author.avatarUrl} alt="code" />
              <h1>{el.author.name}</h1>
            </div>
            <div className="Item-second">
              <p>{el.text}</p>
              <span>{el.date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
