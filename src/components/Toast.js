import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

export const Toast = (props) => {

	const { message, isSuccess } = props;

	return (
		<>
		<Container success={isSuccess}>
			<span style={{zIndex: 999}}>{message}</span>
			<ProgressBar success={isSuccess}/>
		</Container>
		</>
	)
}

const Container = styled.div`
	width: 15.625rem;
	height: 3.125rem;
	background-color: ${(props) => props.success ? theme.colors.green : theme.colors.red};
	color: ${() => theme.colors.white};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
	font-size: ${() => theme.fontSizes.xSmall};
	position: relative;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

	@keyframes In {
		from { transform: translate3d(-100%, 0, 0); opacity: 0; }
		to { transform: translateZ(0); opacity: 1; }
	};
	@keyframes Out {
		from { opacity: 0; }
		to { height: 0; opacity: 0; margin-bottom: 0; }
	};
	animation-fill-mode: forwards;
  animation-name: In, Out;
  animation-delay: 0s, 3s;
  animation-duration: 1s, 0.5s;
	-webkit-animation-fill-mode: forwards;
  -webkit-animation-name: In, Out;
  -webkit-animation-delay: 0s, 3s;
  -webkit-animation-duration: 1s, 0.5s;

`

const ProgressBar = styled.div`
	width: 15.625rem;
	height: 100%;
	background-color: ${(props) => props.success ? theme.colors.darkGreen : theme.colors.lightRed};
	border-radius: 10px;
	position: absolute;
	left: 0;
	bottom: 0;
	@keyframes Progress {
		0% { width: 0; }
		90% { width: 15.625rem; }
	};

	animation: Progress 3.5s;

`