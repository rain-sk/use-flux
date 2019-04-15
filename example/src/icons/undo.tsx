import * as React from 'react';
import { Svg, ISvgProps } from './svg';

export const Undo: React.FunctionComponent<ISvgProps> = props => (
	<Svg {...props} rotate={180}>
		<path d="M0 384c0-152.924 67.048-290.184 173.35-384l84.666 96c-79.726 70.364-130.016 173.304-130.016 288 0 212.076 171.93 384 384 384 106.042 0 202.038-42.986 271.53-112.478l-143.53-143.522h384v384l-149.97-149.978c-92.654 92.658-220.644 149.978-362.030 149.978-282.77 0-512-229.23-512-512z" />
	</Svg>
);