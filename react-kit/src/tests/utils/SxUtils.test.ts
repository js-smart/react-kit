import { mergeSx } from '../../lib/utils/SxUtils';

describe('mergeSx', () => {
	const base = { borderRadius: '0.375rem' };

	it('returns base when no sx is given', () => {
		expect(mergeSx(base)).toBe(base);
	});

	it('appends an object sx after base so consumer styles win', () => {
		expect(mergeSx(base, { m: 1 })).toEqual([base, { m: 1 }]);
	});

	it('flattens an array sx', () => {
		expect(mergeSx(base, [{ m: 1 }, { p: 2 }])).toEqual([base, { m: 1 }, { p: 2 }]);
	});
});
