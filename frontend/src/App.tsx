import { useState,useEffect} from "react";
import io from "socket.io-client";

const App = () => {
  const [socket, setSocket] = useState<any>();
  const [socketConnected, setSocketConnected] = useState(false);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    setSocket(io("http://localhost:8080"));
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.emit("GenerateProject","xamarin")
    
    socket.on("connect", () => {
      setSocketConnected(socket.connected);
    });

    socket.on("disconnect", () => {
      setSocketConnected(socket.connected);
    });

    socket.on("response", () => {
      alert("asdfajhsdfkg")
    })

  },[socket])
  return (
    <div style={{ fontSize: "20px" }}>
      {navigator.userAgent.toLowerCase().indexOf(" electron/") > -1
        ? `Running on electron`
        : `Not Running on electron`}
    </div>
  );
};

export default App;
