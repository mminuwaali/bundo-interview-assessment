import api from "@/utils/request";
import { useQuery } from "react-query";

export const useGetMarkets = () => useQuery({
    queryKey: ["get-market"],
    queryFn: async () => {
        const res = await api.get("")
        return res.data as IAPIRes<IMarket[]>;
    },
});
