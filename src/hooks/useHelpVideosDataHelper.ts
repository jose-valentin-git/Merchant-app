import { useQuery } from "@tanstack/react-query";
import getHelpVideos from "../services/HelpService";
import ms from "ms";

const useHelpVideosData = () => {
  return useQuery({
    queryKey: ["HelpVideos"],
    queryFn: () => {
      return getHelpVideos();
    },
    staleTime: ms("1h"),
  });
};
export default useHelpVideosData;
