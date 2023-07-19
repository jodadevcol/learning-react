import { useEffect, useRef, useState } from "react";

export function useQuery() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const isFirstSearch = useRef(true);

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = query === "";
      return;
    }

    if (query === "") {
      setError("No se pueden buscar peliculas con el buscador vacio");
      return;
    }

    if (query.match(/^\d+$/)) {
      setError("No se pueden buscar peliculas con un numero");
      return;
    }

    if (query.length < 2) {
      setError("No se puede buscar peliculas con menos de 2 caracteres");
      return;
    }

    setError(null);
  }, [query]);

  return { query, setQuery, error };
}
