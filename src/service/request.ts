import axiosInstance from "./axios";

export const fetchLocation = async () => {
  const { data } = await axiosInstance.get(
    `/flights/searchDestination?query=${"new"}`
  );
  return data;
};

export const fetchFlights = async (params: any) => {
  const { data } = await axiosInstance.get(`/flights/searchFlights`, {
    params,
  });
  return data;
};

// export const fetchPostAccountMetrics = async (account_id) => {
//   const { data } = await axiosInstance.get(
//     `scheduler/${account_id}/account-metrics`
//   );
//   return data;
// };

// export const getPostCampaigns = async (params) => {
//   const { data } = await axiosInstance.get(
//     `scheduler?page=${params.page}&search=${params.search}&xAccount=${params.xAccount}`
//   );
//   return data;
// };

// export const pausePostCampaigns = async (id) => {
//   const { data } = await axiosInstance.put(`scheduler/${id}/pause`);
//   return data;
// };

// export const deletePostCampaigns = async (id) => {
//   const { data } = await axiosInstance.delete(`scheduler/${id}/delete`);
//   return data;
// };

// export const playPostCampaigns = async (id) => {
//   const { data } = await axiosInstance.put(`scheduler/${id}/resume`);
//   return data;
// };
