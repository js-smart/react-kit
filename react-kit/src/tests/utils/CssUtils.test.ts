import { expect, test } from 'vitest';
import { getCssVariable } from '../../lib/utils/CssUtils';

test('returns the value of a CSS variable', () => {
	document.documentElement.style.setProperty('--test-variable', 'test-value');

	expect(getCssVariable('--test-variable')).toBe('test-value');
});

test('returns an empty string for a non-existent variable', () => {
	expect(getCssVariable('--non-existent-variable')).toBe('');
});
