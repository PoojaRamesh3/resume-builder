export const DATA = "DATA";

export function handleStore(data: any) {
  return {
    type: DATA,
    payload: data,
  };
}
