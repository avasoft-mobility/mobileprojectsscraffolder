const App = () => {
  return (
    <div style={{ fontSize: "20px" }}>
      {navigator.userAgent.toLowerCase().indexOf(" electron/") > -1
        ? `Running on electron`
        : `Not Running on electron`}
    </div>
  );
};

export default App;
