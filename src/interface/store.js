import { createStore } from "../usecases/manageState.js";
import { withLogger } from "../infrastructure/loggerMiddleware.js";

export function createDefaultStore(initialState) {
    return createStore(initialState, [withLogger()]);
  }