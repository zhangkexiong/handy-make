const { Fragment } = React;

ReactDOM.render(
  <Fragment>
    <h1>demo</h1>
    <ul>
      <li>
        <a href="/index">index</a>
      </li>
      <li>
        <a href="/normal">normal</a>
      </li>
      <li>
        <a href="/mobx">mobx</a>
      </li>
    </ul>
  </Fragment>,
  document.getElementById("root")
);

if ((module as any).hot) {
  (module as any).hot.accept(() => {});
}
