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
      setError("No hay parametro de busqueda.");
      return;
    }

    if (query.match(/^\d+$/)) {
      setError("No se puede buscar por un numero al inicio.");
      return;
    }

    if (query.length < 2) {
      setError("Ingrese mas de 2 (dos) caracteres.");
      return;
    }

    setError(null);
  }, [query]);

  return { query, setQuery, error };
}
