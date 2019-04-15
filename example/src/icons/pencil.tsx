import * as React from 'react';
import { Svg, ISvgProps } from './svg';

export const Pencil: React.FunctionComponent<ISvgProps> = props => (
	<Svg {...props} rotate={270}>
		<path d="M864 960c88.364 0 160-71.634 160-160 0-36.020-11.91-69.258-32-96l-64-64-224 224 64 64c26.742 20.090 59.978 32 96 32zM64 224l-64-288 288 64 592 592-224 224-592-592zM715.578 596.422l-448-448-55.156 55.156 448 448 55.156-55.156z" />
	</Svg>
);