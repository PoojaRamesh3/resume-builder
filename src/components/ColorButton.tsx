const ColorButton = (props: any) => {
  return (
    <div
      className={`w-8 h-8 bg-${props.color}-600 rounded-full cursor-pointer`}
    ></div>
  );
};

export default ColorButton;
