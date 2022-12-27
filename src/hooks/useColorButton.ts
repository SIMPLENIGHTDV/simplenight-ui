interface ColorStates {
  default: string;
  hover: string;
  focused: string;
  pressed: string;
  disabled: string;
}

const getPrimaryColors = () => ({
  default: 'bg-primary-1000 border-transparent text-white',
  hover: 'hover:bg-primary-800 hover:text-white',
  focused: 'focus:bg-red-800 focus:border-primary-600 focus:text-white',
  pressed: 'active:bg-red-800 active:border-primary-600 active:text-white',
  disabled: 'bg-dark-300 border-transparent text-dark-700',
});

const getOutlinedColors = () => ({
  default: 'bg-white border-dark-1000 text-dark-1000',
  hover: 'hover:bg-dark-1000 hover:text-white',
  focused: 'focus:bg-dark-100 focus:border-dark-700 focus:text-dark-1000',
  pressed: 'active:bg-dark-300 active:border-dark-1000 active:text-dark-1000',
  disabled: 'bg-dark-300 border-transparent text-dark-700',
});

const getDangerColors = (): ColorStates => ({
  default: 'bg-error-1000 border-transparent text-white',
  hover: 'hover:bg-error-800 hover:text-white',
  focused: 'focus:bg-error-1000 focus:border-error-700 focus:text-white',
  pressed: 'active:bg-error-800 active:border-error-700 active:text-white',
  disabled: 'bg-dark-300 border-transparent text-dark-700',
});

const useColorButton = (type: string): ColorStates => {
  if (type === 'outlined') return getOutlinedColors();
  if (type === 'danger') return getDangerColors();
  return getPrimaryColors();
};

export default useColorButton;