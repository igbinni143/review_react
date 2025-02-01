import React, { useState } from 'react';

export const Viewer = ({ count }) => {
	return (
		<div>
			현재 카운트:
			<h1>{count}</h1>
		</div>
	);
};
