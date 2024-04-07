import './App.css';

export default function App() {
  // 👇️ http://localhost:3001/about
  console.log(window.location.href);

  // 👇️ /about
  console.log(window.location.pathname);

  // 👇️ http:
  console.log(window.location.protocol);

  // localhost
  console.log(window.location.hostname);

  return (
    <div>
      <div>
        <h2>Current URL 👉️ {window.location.href}</h2>
        <h2>Current Pathname 👉️ {window.location.pathname}</h2>
        <h2>Current Protocol 👉️ {window.location.protocol}</h2>
        <h2>Current hostname 👉️ {window.location.hostname}</h2>
      </div>
    </div>
  );
}
