import { ProgressState } from '../types/ProgressState';

/**
 * Initialize Loading or Update ProgressState
 *
 * @return Updated State Object
 *
 * @author Pavan Kumar Jadda
 * @since 1.4.6
 */
export const initializeState = (): ProgressState => ({
  loading: false,
  success: false,
  error: false,
  complete: false,
  message: '',
});

/**
 * Initialize Loading or Update ProgressState
 *
 * @param progressState Object to initialize
 * @return ProgressState Updated State Object
 *
 * @author Pavan Kumar Jadda
 * @since 0.2.30
 */
export const markLoading = (progressState: ProgressState): ProgressState => ({
  ...progressState,
  loading: true,
  success: false,
  error: false,
  message: '',
});

/**
 * Update state as success
 *
 * @return ProgressState Updated State Object
 *
 * @author Pavan Kumar Jadda
 * @since 0.2.30
 */
export const markSuccess = (
  progressState: ProgressState,
  message?: string
): ProgressState => ({
  ...progressState,
  loading: false,
  success: true,
  error: false,
  complete: true,
  message: message || '',
});

/**
 * Update state as failure or error
 *
 * @return ProgressState Updated State Object
 *
 * @author Pavan Kumar Jadda
 * @since 0.2.30
 */
export const markError = (
  progressState: ProgressState,
  message?: string
): ProgressState => ({
  ...progressState,
  loading: false,
  success: false,
  error: true,
  complete: true,
  message: message || '',
});
