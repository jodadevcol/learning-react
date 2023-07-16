import { useEffect, useState } from "react";
import { CAT_PREFIX_IMAGE, CAT_RANDOM_IMAGE } from "../const/const";

export function useCat({ phrase }) {
  const [cat, setCat] = useState({ id: null, url: "" });

  useEffect(() => {
    if (!phrase) return;

    const threeFirstWords = phrase.split(" ", 3).join(" ");

    fetch(`${CAT_RANDOM_IMAGE}${threeFirstWords}?size=50&color=red&json=true`)
      .then((respon) => respon.json())
      .then((data) => {
        const { _id, url } = data;
        const newCat = {
          id: _id,
          url: `${CAT_PREFIX_IMAGE}${url}`,
        };

        setCat(newCat);
      });
  }, [phrase]);

  return { id: cat.id, url: cat.url };
}
