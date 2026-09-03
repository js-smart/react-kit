import { toastStore, toast } from '../../lib/components/toast/ToastManager';
import jest from 'jest-mock';

describe('ToastManager', () => {
	afterEach(() => {
		toastStore.close();
	});

	it('starts with closed state', () => {
		const state = toastStore.getSnapshot();
		expect(state.open).toBe(false);
		expect(state.message).toBe('');
	});

	it('show() updates state to open with message', () => {
		toastStore.show('Hello', 'success', 5000);
		const state = toastStore.getSnapshot();
		expect(state.open).toBe(true);
		expect(state.message).toBe('Hello');
		expect(state.type).toBe('success');
		expect(state.autoHideDuration).toBe(5000);
	});

	it('close() sets open to false', () => {
		toastStore.show('Test');
		toastStore.close();
		expect(toastStore.getSnapshot().open).toBe(false);
	});

	it('notifies subscribers on show', () => {
		const listener = jest.fn();
		const unsub = toastStore.subscribe(listener);
		toastStore.show('Notify');
		expect(listener).toHaveBeenCalled();
		unsub();
	});

	it('unsubscribe stops notifications', () => {
		const listener = jest.fn();
		const unsub = toastStore.subscribe(listener);
		unsub();
		toastStore.show('No notify');
		expect(listener).not.toHaveBeenCalled();
	});

	it('toast() is a shortcut for toastStore.show()', () => {
		toast('Quick toast', 'warning');
		const state = toastStore.getSnapshot();
		expect(state.open).toBe(true);
		expect(state.message).toBe('Quick toast');
		expect(state.type).toBe('warning');
	});

	it('defaults to info type', () => {
		toastStore.show('Default type');
		expect(toastStore.getSnapshot().type).toBe('info');
	});

	it('defaults autoHideDuration to 3000', () => {
		toastStore.show('Duration test');
		expect(toastStore.getSnapshot().autoHideDuration).toBe(3000);
	});
});
