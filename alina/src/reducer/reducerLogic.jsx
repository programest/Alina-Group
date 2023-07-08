const defaultState = {
	TITLE: '',
	NUM: 0,
	PHONE: '',
	SUM: null,
	TYPE: 'Выберите тип',
	CITY: 'Не выбранно',
	PAGE: false,
	DATE: '',
	RADIO: false,
	CHECKBOX: false,

};

export const reducerLogicInput = (state = defaultState, action) => {
	switch (action.type) {
		case "TITLE":
			return { ...state, TITLE: action.payload };
		case "NUM":
			return { ...state, NUM: action.payload };
		case "PHONE":
			return { ...state, PHONE: action.payload };
		case "SUM":
			return { ...state, SUM: action.payload };
		case "TYPE":
			return { ...state, TYPE: action.payload };
		case "CITY":
			return { ...state, CITY: action.payload };
		case "DATE":
			return { ...state, DATE: action.payload };
		case "RADIO":
			return { ...state, RADIO: action.payload };
		case "CHECKBOX":
			return { ...state, CHECKBOX: action.payload };
		case "CLEAR":
			return { ...defaultState }; // Сбросить состояние до исходного состояния defaultState
		case "PAGE":
			return { ...state, PAGE: action.payload };
		default:
			return state;
	}
};