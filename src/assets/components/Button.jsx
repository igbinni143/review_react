const Button = ({ text, color, children }) => {
	console.log({ text, color });

	const onClickEV = (e) => {
		console.log(e);
		console.log(text);
	};

	return (
		<>
			<button onClick={onClickEV} style={{ color: color }}>
				{text}-{color}
				{children}
			</button>
		</>
	);
};

Button.defaultProps = {
	//자동으로 기본값을 설정해준다
	color: 'black',
};

export default Button;
