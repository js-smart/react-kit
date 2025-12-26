import {
  initializeState,
  markError,
  markLoading,
  markSuccess,
} from "../../lib/utils/ProgressStateUtils";
import { ProgressState } from "../../lib/types/ProgressState";

describe("ProgressStateUtils", () => {
  describe("initializeState", () => {
    it("should initialize the state correctly", () => {
      const expectedState: ProgressState = {
        isLoading: false,
        isSuccess: false,
        isError: false,
        isComplete: false,
        message: "",
      };

      const result = initializeState();

      expect(result).toEqual(expectedState);
    });
  });

  describe("markLoading", () => {
    it("should update the state to loading", () => {
      const initialState: ProgressState = {
        isLoading: false,
        isSuccess: false,
        isError: false,
        isComplete: false,
        message: "",
      };

      const expectedState: ProgressState = {
        ...initialState,
        isLoading: true,
      };

      const result = markLoading(initialState);

      expect(result).toEqual(expectedState);
    });
  });

  describe("markSuccess", () => {
    it("should update the state to success with a message", () => {
      const initialState: ProgressState = {
        isLoading: false,
        isSuccess: false,
        isError: false,
        isComplete: false,
        message: "",
      };

      const message = "Operation successful";
      const expectedState: ProgressState = {
        ...initialState,
        isSuccess: true,
        isComplete: true,
        message,
      };

      const result = markSuccess(initialState, message);

      expect(result).toEqual(expectedState);
    });

    it("should update the state to success without a message", () => {
      const initialState: ProgressState = {
        isLoading: false,
        isSuccess: false,
        isError: false,
        isComplete: false,
        message: "",
      };

      const expectedState: ProgressState = {
        ...initialState,
        isSuccess: true,
        isComplete: true,
        message: "",
      };

      const result = markSuccess(initialState);

      expect(result).toEqual(expectedState);
    });
  });

  describe("markError", () => {
    it("should update the state to error with a message", () => {
      const initialState: ProgressState = {
        isLoading: false,
        isSuccess: false,
        isError: false,
        isComplete: false,
        message: "",
      };

      const message = "Operation failed";
      const expectedState: ProgressState = {
        ...initialState,
        isError: true,
        isComplete: true,
        message,
      };

      const result = markError(initialState, message);

      expect(result).toEqual(expectedState);
    });

    it("should update the state to error without a message", () => {
      const initialState: ProgressState = {
        isLoading: false,
        isSuccess: false,
        isError: false,
        isComplete: false,
        message: "",
      };

      const expectedState: ProgressState = {
        ...initialState,
        isError: true,
        isComplete: true,
        message: "",
      };

      const result = markError(initialState);

      expect(result).toEqual(expectedState);
    });
  });
});
