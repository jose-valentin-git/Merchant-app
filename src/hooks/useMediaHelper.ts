import { useQuery } from "@tanstack/react-query";
import { getTemporyURL } from "../services/MediaService";
import ms from "ms";

const useDownloadMedia = (mediaId: number | null = null) => {
  return useQuery({
    queryKey: ["media", mediaId],
    queryFn: () => {
      if (!mediaId) return "";
      return getTemporyURL(mediaId);
    },
    retry: false,
    staleTime: ms("1h"), // 1 hour
  });
};

export { useDownloadMedia };
