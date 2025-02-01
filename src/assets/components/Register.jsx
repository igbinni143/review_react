import React, { useState } from 'react';

const Register = () => {
	const [name, setName] = useState('리액트');
	const [birth, setBirth] = useState('');
	const [country, setCountry] = useState('');
	const [bio, setBio] = useState('');

	const onChangeName = (e) => {
		console.log(e.target.value);
		setName(e.target.value); //사용자가 입력한 값에 접근
	};

	const onChangeBirth = (e) => {
		console.log(e.target.value);
		setBirth(e.target.value);
	};

	const onChangeCountry = (e) => {
		console.log(e.target.value);
		setCountry(e.target.value);
	};

	const onChangeBio = (e) => {
		setBio(e.target.value);
	};
	return (
		<div>
			<div>
				<input
					value={name}
					onChange={onChangeName}
					placeholder={'이름'}
				/>
			</div>
			<div>
				<input
					type='date'
					value={birth}
					onChange={onChangeBirth}
				/>
			</div>
			<div>
				<select value={country} onChange={onChangeCountry}>
					<option></option>
					<option value='kr'>한국</option>
					<option value='us'>미국</option>
					<option value='uk'>영국</option>
				</select>
			</div>
			<div>
				<textarea
					value={bio}
					placeholder='자기소개'
					onChange={onChangeBio}
				/>
			</div>
		</div>
	);
};

export default Register;
