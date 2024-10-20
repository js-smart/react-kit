import { getCssVariable } from '../../lib/utils/CssUtils';

describe('getCssVariable', () => {
	beforeAll(() => {
		document.documentElement.style.setProperty('--test-variable', 'test-value');
	});

	it('should return the value of the CSS variable', () => {
		const value = getCssVariable('--test-variable');
		expect(value).toBe('test-value');
	});

	it('should return an empty string for a non-existent variable', () => {
		const value = getCssVariable('--non-existent-variable');
		expect(value).toBe('');
	});
});
