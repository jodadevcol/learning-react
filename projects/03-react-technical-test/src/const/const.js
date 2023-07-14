const { VITE_CAT_ENDPOINT_PHRASE_RA } = import.meta.env;
const { VITE_CAT_ENDPOINT_IMAGE_URL } = import.meta.env;
const { VITE_CAT_PREFIX_IMAGE } = import.meta.env;

export const CAT_RANDOM_WORD = VITE_CAT_ENDPOINT_PHRASE_RA;
export const CAT_RANDOM_IMAGE = VITE_CAT_ENDPOINT_IMAGE_URL;
export const CAT_PREFIX_IMAGE = VITE_CAT_PREFIX_IMAGE;
