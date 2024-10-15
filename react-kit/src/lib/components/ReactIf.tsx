import React from 'react';

/**
 * Reusable If component, that renders content if the condition is true. Similar to *ngIf from Angular
 *
 * @param props Properties of the React Node
 *
 * @author Pavan Kumar Jadda
 * @since 0.1.0
 */
export function ReactIf(props: { condition: boolean | undefined; children: React.ReactNode }): React.ReactNode {
	return props.condition === undefined || !props.condition ? null : props.children;
}
