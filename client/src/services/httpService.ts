import axios, { type AxiosInstance } from "axios";

class HttpService {

	private service: AxiosInstance;

	constructor() {
		// I should probably move this to an env variable
		this.service = axios.create({
			baseURL: "http://localhost:5000",
			headers: {
				"Content-Type": "application/json",
			},
			timeout: 10000,
		});
	}

	public async get<T>(url: string): Promise<T> {
		const response = await this.service.get<T>(url);
		return response.data;
	}

	public async post<T>(url: string, data: any): Promise<T> {
		const response = await this.service.post<T>(url, data);
		return response.data;
	}

	public async patch<T>(url: string, data: any): Promise<T> {
		const response = await this.service.patch<T>(url, data);
		return response.data;
	}

	public async patchNoData<T>(url: string): Promise<T> {
		const response = await this.service.patch<T>(url);
		return response.data;
	}

	public async delete<T>(url: string): Promise<T> {
		const response = await this.service.delete<T>(url);
		return response.data;
	}

}

export default new HttpService();