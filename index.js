const Button = (props) => {
  const { text, className } = props;

  return <button className={className}>{text}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button text="Like" className="like" />
      <Button text="Comment" className="comment" />
      <Button text=" Share" className="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
