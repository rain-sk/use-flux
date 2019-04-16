import * as React from 'react';

interface IKeyboardListenerProps {
	event: keyof WindowEventMap;
	keyCode: number;
	callback: () => void;
}

export const KeyboardListener: React.FunctionComponent<IKeyboardListenerProps> = ({ event, keyCode, callback }) => {

	const eventCallback = (e: KeyboardEvent) => {
		if ((document.activeElement as Element).tagName.toLowerCase() !== 'input') {
			switch (e.which || e.keyCode) {
				case keyCode:
					callback();
			}
		}
	};

	React.useEffect(() => {
		document.addEventListener(event, eventCallback);

		return () => {
			document.removeEventListener(event, eventCallback);
		}
	}, [false]);

	return null;
};