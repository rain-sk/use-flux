import * as React from 'react';
import { Svg, ISvgProps } from './svg';

export const Redo: React.FunctionComponent<ISvgProps> = props => (
	<Svg {...props} rotate={180}>
		<path d="M512 896c-141.384 0-269.376-57.32-362.032-149.978l-149.968 149.978v-384h384l-143.532 143.522c69.496 69.492 165.492 112.478 271.532 112.478 212.068 0 384-171.924 384-384 0-114.696-50.292-217.636-130.018-288l84.666-96c106.302 93.816 173.352 231.076 173.352 384 0 282.77-229.23 512-512 512z" />
	</Svg>
);