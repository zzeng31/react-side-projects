import Steps from "./Steps";
const messages = [
  "Learn HTML && CSS 📚",
  "Learn Javascript 📚",
  "Learn React 📚",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  return <Steps steps={messages} />;
}

export default App;
