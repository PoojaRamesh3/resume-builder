export const DATA = "DATA";

export function handleChange(data: any) {
  return {
    type: DATA,
    payload: data,
  };
}
