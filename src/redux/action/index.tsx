export const NAMESECTION = "NAMESECTION";
export const WORKEXPERIENCE = "NAMESECTION";

export function handlingNameHeaderData(data: any) {
  return {
    type: NAMESECTION,
    payload: data,
  };
}

export function handlingWorkExperinceData(data: any) {
  return {
    type: WORKEXPERIENCE,
    payload: data,
  };
}
