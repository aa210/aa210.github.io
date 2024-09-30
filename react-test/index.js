function Hello() {
        return <div>
          <h1>Hello World!</h1>
          <h2> How's It Going?</h2>
          </div>;
      }

      const container = document.getElementById('mydiv');
      const root = ReactDOM.createRoot(container);
      root.render(<Hello />)
