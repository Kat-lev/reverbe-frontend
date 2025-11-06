import { useState, useMemo } from "react";
import { useMessages } from "./useMessages";

export function useSortedMessages() {
  const { messages, loading } = useMessages();

  const [dataEnabled, setDataEnabled] = useState(false);
  const [authorEnabled, setAuthorEnabled] = useState(false);
  const [dataOrder, setDataOrder] = useState("newest");
  const [authorOrder, setAuthorOrder] = useState("az");

  const sortedMessages = useMemo(() => {
    if (!messages || !messages.length) return [];

    return [...messages].sort((a, b) => {
      const aRevs = a.reverberacions || [];
      const bRevs = b.reverberacions || [];

      if (!aRevs.length) return 1;
      if (!bRevs.length) return -1;

      if (dataEnabled) {
        const aDate = new Date(Math.max(...aRevs.map(r => new Date(r.data))));
        const bDate = new Date(Math.max(...bRevs.map(r => new Date(r.data))));
        return dataOrder === "newest" ? bDate - aDate : aDate - bDate;
      }

      if (authorEnabled) {
        const aAuthor = aRevs[0].remitent.toLowerCase();
        const bAuthor = bRevs[0].remitent.toLowerCase();
        if (authorOrder === "az") return aAuthor.localeCompare(bAuthor);
        if (authorOrder === "za") return bAuthor.localeCompare(aAuthor);
      }

      return 0;
    });
  }, [messages, dataEnabled, authorEnabled, dataOrder, authorOrder]);

  return {
    messages,
    sortedMessages,
    loading,
    dataEnabled,
    setDataEnabled,
    authorEnabled,
    setAuthorEnabled,
    dataOrder,
    setDataOrder,
    authorOrder,
    setAuthorOrder,
  };
}
