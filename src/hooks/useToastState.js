import { useDispatch } from 'react-redux';
import { addToast, deleteToast } from '../temp/toastListSlice';

export const useToastState = () => {

	const dispatch = useDispatch();

	// 리덕스 연동되면 리스트로 관리해서 handle할때 넣어주고 useEffect로 빼주면 가능할듯?

  const handleToast = (message, success) => {
		//여기서 리스트에 넣으니까 객체 생성할때 편하게 값을 받으면 될듯
		dispatch(addToast({
			message: message,
			success: success,
		}))
		setTimeout(() => {
			dispatch(deleteToast())
			//상태값 대신에 그냥 리덕스 리스트에서 제거시키면 됨
    }, 3500)
  }

	return handleToast
}