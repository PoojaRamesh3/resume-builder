export const DATA = "DATA";

export function handlingStoreData(data: any) {
  return {
    type: DATA,
    payload: data,
  };
}
