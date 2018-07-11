(function() {
  function counter(state, action) {
    if (typeof state === "undefined") {
      return 0;
    }
    switch (action.type) {
      case "INCREMENT": {
        console.log("incrementing");
        return state + 1;
      }
      case "DECREMENT": {
        console.log("decrementing");
        return state - 1;
      }
      default:
        return state;
    }
  }

  var store = Redux.createStore(
    counter,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({
        serialize: true
      })
  );

  var valueEl = document.getElementById("value");

  function render() {
    valueEl.innerHTML = store.getState().toString();
  }

  store.subscribe(render);

  document.getElementById("increment").addEventListener("click", function() {
    store.dispatch({ type: "INCREMENT" });
  });
  document.getElementById("decrement").addEventListener("click", function() {
    store.dispatch({ type: "DECREMENT" });
  });

  render();
})();
