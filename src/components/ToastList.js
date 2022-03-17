import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Toast } from './Toast';

export const ToastList = () => {

  const toastList = useSelector(state => state.toastList);

	return (
		<Warpper>
			{ toastList.map((item) => (
					<Toast message={item.message} isSuccess={item.success}/>
				))}
		</Warpper>
	)
}

const Warpper = styled.div`
	width: 15.625rem;
	height: auto;
	position: absolute;
	right: 0;
	top: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	z-index: 999;
`