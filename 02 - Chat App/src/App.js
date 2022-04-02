import { ChatEngine } from "react-chat-engine";

import './App.css';

import LoginForm from "./components/LoginForm";
import ChatFeed from './components/ChatFeed';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID="14885b83-3795-4786-83ad-505100867460"
      userName={ localStorage.getItem('username') }
      userSecret={ localStorage.getItem('password') }
      renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  );
};

export default App;