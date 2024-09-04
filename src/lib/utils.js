import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const checkInputHandler = (event) => {
  if (event.target?.type === 'text') {
    const allowedChar = /^[a-zA-Z\s]*$/;
    if (allowedChar.test(event.target.value)) return true;
    else return false;
  } else if (event.target?.type === 'number') {
    const allowedChar = /^[0-9]*$/;
    if (allowedChar.test(event.target.value)) return true;
    else return false;
  } else return true;
};

export const onChangeHandler = (e, setState, state) => {
  if (checkInputHandler(e)) setState({ ...state, [e.target.name]: e.target.value });
};

export const handleImageChange = (event, setSelectedImage) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  } else {
    setSelectedImage(null);
  }
};
