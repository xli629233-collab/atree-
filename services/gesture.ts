
import { GestureType } from "../types";

// Hand detection logic has been removed as per request.
// These functions are kept as stubs to maintain project structure if needed later, 
// or can be completely removed if strict cleanup is desired.

export const initializeHandDetection = async () => {
  return false;
};

export const detectHands = (video: HTMLVideoElement): { x: number; gesture: GestureType } | null => {
  return null;
};
