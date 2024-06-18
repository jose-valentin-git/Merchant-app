import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { getDashboardDetails } from "../services/DashboardService";
import { DropDownSelectedDTO } from "../model/dashboard/DropDownSelectedDTO";
import CategoryEnum from "../model/dashboard/enums/CategoryEnum";
import { CategeoryRespectiveDashboardData } from "../model/dashboard/CategeoryRespectiveDashboardData";
import CookieUtils from "../utils/CookieUtils";
import dashboardStore from "../middleware/dashboardStore";

const useDashboardDetails = () => {
  const { startDate, endDate, setDuration, duration } = dashboardStore();
  return useQuery({
    queryKey: ["DashboardDetails", duration, startDate, endDate],
    queryFn: async () => {
      const map = new Map<
        DropDownSelectedDTO,
        Map<CategoryEnum, CategeoryRespectiveDashboardData[]>
      >();

      const user = CookieUtils.getUserDetails();
      if (!user || !user?.doctorId) {
        return map;
      }
      const data = await getDashboardDetails(
        user.doctorId,
        startDate,
        endDate,
        duration
      );

      data?.ageDTOList?.forEach((ageDTO) => {
        const dashboardTime = ageDTO.dashboardTime;

        const categoryMap = map.has(dashboardTime)
          ? map.get(dashboardTime)!
          : new Map<CategoryEnum, CategeoryRespectiveDashboardData[]>();

        const category = CategoryEnum.AgeDTO;
        const list = categoryMap.has(category)
          ? categoryMap.get(category)!
          : [];

        list.push(ageDTO);

        categoryMap.set(category, list);

        map.set(dashboardTime, categoryMap);
      });

      data?.genderPercentageCountDTOList?.forEach((genderDTO) => {
        const dashboardTime = genderDTO.dashboardTime;

        const categoryMap = map.has(dashboardTime)
          ? map.get(dashboardTime)!
          : new Map<CategoryEnum, CategeoryRespectiveDashboardData[]>();

        const category = CategoryEnum.GenderPercentageCountDTO;
        const list = categoryMap.has(category)
          ? categoryMap.get(category)!
          : [];

        list.push(genderDTO);

        categoryMap.set(category, list);

        map.set(dashboardTime, categoryMap);
      });

      data?.leadCategoryDetailsDTOList?.forEach((leadCategoryDTO) => {
        const dashboardTime = leadCategoryDTO.dashboardTime;

        const categoryMap = map.has(dashboardTime)
          ? map.get(dashboardTime)!
          : new Map<CategoryEnum, CategeoryRespectiveDashboardData[]>();

        const category = CategoryEnum.LeadCategoryDetailsDTO;
        const list = categoryMap.has(category)
          ? categoryMap.get(category)!
          : [];

        list.push(leadCategoryDTO);

        categoryMap.set(category, list);

        map.set(dashboardTime, categoryMap);
      });

      data?.totalDigitizedRxDTOList?.forEach((totalRxDTO) => {
        const dashboardTime = totalRxDTO.dashboardTime;

        const categoryMap = map.has(dashboardTime)
          ? map.get(dashboardTime)!
          : new Map<CategoryEnum, CategeoryRespectiveDashboardData[]>();

        const category = CategoryEnum.TotalDigitizedRxDTO;
        const list = categoryMap.has(category)
          ? categoryMap.get(category)!
          : [];

        list.push(totalRxDTO);

        categoryMap.set(category, list);

        map.set(dashboardTime, categoryMap);
      });

      data?.followUpConversionDTOList?.forEach((followUpConversionDTO) => {
        const dashboardTime = followUpConversionDTO.dashboardTime;

        const categoryMap = map.has(dashboardTime)
          ? map.get(dashboardTime)!
          : new Map<CategoryEnum, CategeoryRespectiveDashboardData[]>();

        const category = CategoryEnum.FollowUpConversionDTO;
        const list = categoryMap.has(category)
          ? categoryMap.get(category)!
          : [];

        list.push(followUpConversionDTO);

        categoryMap.set(category, list);

        map.set(dashboardTime, categoryMap);
      });

      data?.patientVisitIndexDTOList?.forEach((patientVisitIndexDTO) => {
        const dashboardTime = patientVisitIndexDTO.dashboardTime;

        const categoryMap = map.has(dashboardTime)
          ? map.get(dashboardTime)!
          : new Map<CategoryEnum, CategeoryRespectiveDashboardData[]>();

        const category = CategoryEnum.PatientVisitIndexDTO;
        const list = categoryMap.has(category)
          ? categoryMap.get(category)!
          : [];

        list.push(patientVisitIndexDTO);

        categoryMap.set(category, list);

        map.set(dashboardTime, categoryMap);
      });

      data?.followUpVisitsDTOList?.forEach((FollowUpVisitsDTO) => {
        const dashboardTime = FollowUpVisitsDTO.dashboardTime;

        const categoryMap = map.has(dashboardTime)
          ? map.get(dashboardTime)!
          : new Map<CategoryEnum, CategeoryRespectiveDashboardData[]>();

        const category = CategoryEnum.FollowUpVisitsDTO;
        const list = categoryMap.has(category)
          ? categoryMap.get(category)!
          : [];

        list.push(FollowUpVisitsDTO);

        categoryMap.set(category, list);

        map.set(dashboardTime, categoryMap);
      });

      const isCustomDate = startDate != null && endDate != null;
      isCustomDate && duration !== "CUSTOM" && setDuration("CUSTOM");

      return map;
    },
    retry: false,
    refetchInterval: false,
    staleTime: ms("2m"), // 1 hour
  });
};

export { useDashboardDetails };
