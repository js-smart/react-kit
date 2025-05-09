import React, { ReactNode } from 'react';

type ReactIfProps = {
	/**
	 * The condition that determines whether children should be rendered
	 */
	condition: boolean | null | undefined;

	/**
	 * Content to render when condition is true.
	 * Can be either a ReactNode or a function returning a ReactNode
	 */
	children: ReactNode | (() => ReactNode);

	/**
	 * Optional content to render when condition is false
	 */
	else?: ReactNode | (() => ReactNode);
};

/**
 * Reusable If component, that renders content if the condition is true. Similar to *ngIf from Angular
 *
 * @param props Properties of the component
 *
 * @example
 * ```tsx
 * <ReactIf condition={isVisible}>
 *   <div>Visible content</div>
 * </ReactIf>
 *
 * <ReactIf condition={isVisible} else={<div>Alternative content</div>}>
 *   <div>Main content</div>
 * </ReactIf>
 *```
 * @author Pavan Kumar Jadda
 * @since 0.1.0
 */
export function ReactIf(props: ReactIfProps): React.ReactNode {
	const { condition, children, else: elseContent } = props;

	// Check if condition is true
	if (condition) {
		return typeof children === 'function' ? children() : children;
	}

	// Render else content or null
	if (elseContent) {
		return typeof elseContent === 'function' ? elseContent() : elseContent;
	} else {
		return null;
	}
}
