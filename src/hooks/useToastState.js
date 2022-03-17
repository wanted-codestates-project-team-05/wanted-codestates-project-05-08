import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToast, deleteToast } from '../store/toastList-slice';
import useDebounce from './useDebounce';

export const useToastState = () => {

	const toastList = useDebounce(useSelector(state => state.toastList), 3500)
	const dispatch = useDispatch();

  const handleToast = (message, success) => {
		dispatch(addToast({
			message: message,
			success: success,
		}))
  }



	useEffect(() => {
		toastList.map(() => {
			dispatch(deleteToast())
		})
	}, [toastList])

	return handleToast
}