/**
 * Encode a string as a Leo field (for use in transition inputs).
 * Leo fields are integers; we encode UTF-8 bytes as a big-endian integer.
 */
export function stringToField(str: string, maxBytes = 31): string {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str.slice(0, maxBytes));
  let value = BigInt(0);
  for (let i = 0; i < bytes.length; i++) {
    value += BigInt(bytes[i]) * BigInt(256) ** BigInt(i);
  }
  return `${value}field`;
}

/**
 * Decode a Leo field back to string (for display).
 */
export function fieldToString(field: string): string {
  const value = BigInt(field.replace(/field$/, ""));
  const bytes: number[] = [];
  let v = value;
  const ZERO = BigInt(0);
  const BASE = BigInt(256);
  while (v > ZERO) {
    bytes.push(Number(v % BASE));
    v /= BASE;
  }
  return new TextDecoder().decode(new Uint8Array(bytes)).replace(/\0/g, "");
}

export const PROGRAM_ID = "onchainbio.aleo";
export const CREDITS_PROGRAM_ID = "credits.aleo";
