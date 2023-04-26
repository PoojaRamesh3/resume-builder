export const DATA = "DATA";

export function handlegggChange(data: any) {
  return {
    type: DATA,
    payload: data,
  };
}
