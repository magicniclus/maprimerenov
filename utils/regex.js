export const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
export const passwordRegex = new RegExp(/^[A-Za-z]\w{7,14}$/);
export const zipCodeRegex = new RegExp(/[0-9]{5}/g)
export const phoneRegex = new RegExp(/(0|\\+33|0033)[1-9][0-9]{8}/)