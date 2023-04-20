export const ColoredMessage = (props) => {
  //propsを分割代入
  const { color, children } = props;


  const contentStyle = {
    color: color,
    fontSize: props.fontSize,
  };

  return <p style={contentStyle}>{children}</p>
};
