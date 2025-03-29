import api from "@/utils/request";
import { useQuery, useMutation } from "react-query";

export const useGetBusinesses = () => useQuery({
    queryKey: ["get-businesses"],
    queryFn: async () => {
        const res = await api.get("businessLocations");
        return res.data as IAPIRes<IBusiness[]>;
    },
});

export const useCreateBusiness = () => useMutation({
    mutationKey: ["create-business"],
    mutationFn: async (data: object) => {
        const res = await api.post("", data);
        return res.data as IAPIRes<{}>;
    },
    onSuccess: () => { }
});