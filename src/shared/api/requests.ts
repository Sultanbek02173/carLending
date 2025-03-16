import axiosApi from "./axiosApi"

export const getBannerDate = () => {
    return axiosApi.get('/api/v1/base/base/')
}