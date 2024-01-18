export type IUser = {
  email: string;
  email_notifications: number;
  first_name: string;
  id: number;
  last_name: string;
  ot_access_token: null | string;
  ot_refresh_token: null | string;
  ot_username: null | string;
  password: string;
  phone: string;
  phone_notifications: number;
  resy_api_key: string;
  resy_password: string;
  resy_token: string;
  resy_username: string;
  stripe_customer_id: string;
  subscription_type: string;
};
