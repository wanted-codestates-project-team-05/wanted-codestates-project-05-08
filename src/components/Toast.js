import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

export const Toast = (props) => {

	const { message, isSuccess } = props;

	return (
		<Container 
			success={isSuccess}
		>
			{message}
		</Container>
	)
}

const Container = styled.div`
	width: 15.625rem;
	height: 3.125rem;
	background-color: ${(props) => props.success ? theme.colors.darkGreen : theme.colors.red};
	color: ${() => theme.colors.white};
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;

	@keyframes In {
		from { transform: translate3d(-100%, 0, 0); opacity: 0; }
		to { transform: translateZ(0); opacity: 1; }
	};
	@keyframes Out {
		from { opacity: 1; }
		to { opacity: 0; }
	};
	animation-fill-mode: forwards;
  animation-name: In, Out;
  animation-delay: 0s, 2.5s;
  animation-duration: 1s, 1s;
	-webkit-animation-fill-mode: forwards;
  -webkit-animation-name: In, Out;
  -webkit-animation-delay: 0s, 2s;
  -webkit-animation-duration: 1s, 1.5s;
`