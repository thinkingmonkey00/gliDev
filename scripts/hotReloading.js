hotModLoad();
function hotModLoad() {
  if (module.hot) {
    module.hot.accept(function () {
      window.location.reload();
    });
  }
}

