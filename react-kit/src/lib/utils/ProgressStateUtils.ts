import { ProgressState } from "../types/ProgressState";

/**
 * Initialize Loading or Update ProgressState
 *
 * @return Updated State Object
 *
 * @author Pavan Kumar Jadda
 * @since 1.4.6
 */
export const initializeState = (): ProgressState => ({
  isLoading: false,
  isSuccess: false,
  isError: false,
  isComplete: false,
  message: "",
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
  isLoading: true,
  isSuccess: false,
  isError: false,
  message: "",
});

/**
 * Update state as isSuccess
 *
 * @return ProgressState Updated State Object
 *
 * @author Pavan Kumar Jadda
 * @since 0.2.30
 */
export const markSuccess = (progressState: ProgressState, message?: string): ProgressState => ({
  ...progressState,
  isLoading: false,
  isSuccess: true,
  isError: false,
  isComplete: true,
  message: message || "",
});

/**
 * Update state as failure or isError
 *
 * @return ProgressState Updated State Object
 *
 * @author Pavan Kumar Jadda
 * @since 0.2.30
 */
export const markError = (progressState: ProgressState, message?: string): ProgressState => ({
  ...progressState,
  isLoading: false,
  isSuccess: false,
  isError: true,
  isComplete: true,
  message: message || "",
});
