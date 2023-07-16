import { CAT_RANDOM_WORD } from "../const/const";

export async function getRandomFact() {
  const respon = await fetch(CAT_RANDOM_WORD);
  const dataJSON = await respon.json();
  const { fact } = dataJSON;

  return fact;
}
