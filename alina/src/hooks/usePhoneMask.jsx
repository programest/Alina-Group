import { useEffect } from 'react';

function usePhoneMask({ setValue, value }) {
	// Эффект, выполняющийся при каждом изменении value
	useEffect(() => {
		// Функция для получения только числового значения из введенного номера телефона
		const getInputNumbersValue = (input) => {
			return input.value.replace(/\D/g, "");
		};

		// Обработчик вставки номера телефона
		const onPhonePaste = (e) => {
			const input = e.target;
			const inputNumbersValue = getInputNumbersValue(input);
			const pasted = e.clipboardData || window.clipboardData;
			if (pasted) {
				const pastedText = pasted.getData("Text");
				if (/\D/g.test(pastedText)) {
					input.value = inputNumbersValue;
					return;
				}
			}
		};

		// Обработчик ввода номера телефона
		const onPhoneInput = (e) => {
			const input = e.target;
			const inputNumbersValue = getInputNumbersValue(input);
			const selectionStart = input.selectionStart;
			let formattedInputValue = "";

			if (input.value.length !== selectionStart) {
				if (e.data && /\D/g.test(e.data)) {
					input.value = inputNumbersValue;
				}
				return;
			} else {
				if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
					if (inputNumbersValue[0] === "9") {
						inputNumbersValue = "7" + inputNumbersValue;
					}
					const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
					formattedInputValue = firstSymbols + " ";
					if (inputNumbersValue.length > 1) {
						formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
					}
					if (inputNumbersValue.length >= 5) {
						formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
					}
					if (inputNumbersValue.length >= 8) {
						formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
					}
					if (inputNumbersValue.length >= 10) {
						formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
					}
				} else {
					formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
				}
				input.value = formattedInputValue;
				setValue(formattedInputValue);
			}
		};

		// Обработчик нажатия клавиши на поле ввода номера телефона
		const onPhoneKeyDown = (e) => {
			const inputValue = e.target.value.replace(/\D/g, "");
			if (e.keyCode === 8 && inputValue.length === 1) {
				e.target.value = "";
			}
		};

		// Получение всех полей ввода номера телефона и назначение обработчиков событий
		const phoneInputs = document.querySelectorAll("input[data-tel-input]");
		for (const phoneInput of phoneInputs) {
			phoneInput.addEventListener("keydown", onPhoneKeyDown);
			phoneInput.addEventListener("input", onPhoneInput);
			phoneInput.addEventListener("paste", onPhonePaste);
		}
	}, [value]);
}

export default usePhoneMask;