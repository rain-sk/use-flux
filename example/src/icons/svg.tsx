import * as React from 'react';
import { ISvgProps } from './svg';

export interface ISvgProps {
	width?: number;
	height?: number;
	fill?: string;
	rotate?: number;
}

export const Svg: React.FunctionComponent<ISvgProps> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width={`${props.width || 25}px`} height={`${props.height || 25}px`} style={{ transform: `rotateZ(${props.rotate || 0}deg)` }} fill={props.fill || ''}>
		{props.children}
	</svg>
);