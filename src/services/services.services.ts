import { axiosInstance, BASE_URL } from "@/config/axios.config";
import {
  IAddMemberToService,
  IAddService,
  ICreateService,
  IService,
} from "@/interfaces";
import { IMember } from "@/interfaces/member.iterface";

export class ServicesServices {
  static async getAll(): Promise<IService[]> {
    const res = await axiosInstance.get(`${BASE_URL}/services`);

    return res.data;
  }
  static async getById(id: string): Promise<IService> {
    const res = await axiosInstance.get(`${BASE_URL}/services/${id}`);

    return res.data;
  }
  static async getByMemberId(id: string): Promise<IService[]> {
    const res = await axiosInstance.get(`${BASE_URL}/services/by-user/${id}`);

    return res.data;
  }
  static async getMembers(id: string): Promise<IMember[]> {
    const res = await axiosInstance.get(`${BASE_URL}/services/members/${id}`);

    return res.data;
  }
  static async createService(data: ICreateService): Promise<IService> {
    const res = await axiosInstance.post(`${BASE_URL}/services`, data);

    return res.data;
  }
  static async addToCompany(data: IAddService): Promise<IService> {
    const res = await axiosInstance.post(
      `${BASE_URL}/services/add-to-company`,
      data
    );

    return res.data;
  }

  static async removeFromCompany(data: IAddService): Promise<IService> {
    const res = await axiosInstance.post(
      `${BASE_URL}/services/remove-from-company`,
      data
    );

    return res.data;
  }
  static async addMember(data: IAddMemberToService): Promise<IService> {
    const res = await axiosInstance.post(
      `${BASE_URL}/services/add-member`,
      data
    );

    return res.data;
  }
  static async removeMember(data: IAddMemberToService): Promise<IService> {
    const res = await axiosInstance.post(
      `${BASE_URL}/services/remove-member`,
      data
    );

    return res.data;
  }
}
