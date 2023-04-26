export const NAME = "NAME";
export const POSITION = "POSITION";
export const DESCRIPTION = "DESCRIPTION";
export const EMAIL = "EMAIL";

export function handleNameChange(data: any) {
  return {
    type: NAME,
    payload: data,
  };
}

export function handlePositionChange(data: any) {
  return {
    type: POSITION,
    payload: data,
  };
}

export function handleDescChange(data: any) {
  return {
    type: DESCRIPTION,
    payload: data,
  };
}

export function handleEmailChange(data: any) {
  return {
    type: EMAIL,
    payload: data,
  };
}
