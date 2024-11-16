export type Response<T> = {
  status?: number;
  data?: T;
  message?: string;
  isSuccess: boolean;
};
