export interface Client {
  backgroundColor: string;
  barcode: string;
  birthday: string;
  bonus: string;
  date_last: string;
  delivery_form: string;
  discount: string;
  email: string;
  fio: string;
  first_name: string;
  last_name: string;
  pat_name: string;
  link: string;
  loyalty_level: string;
  o_s: string;
  phone: string;
  referal: string;
  sms_verify: boolean;
  summ: string;
  summ_all: string;
  summ_last: string;
  template: string;
  trg_action_type: string;
  trg_action_value: string;
  user_id: number;
  visits: string;
  visits_all: string;
  write_off_last: string;
}

export interface GetClientListResponse {
  passes: Client[];
  meta: {
    size: number;
    limit: number;
    offset: number;
  };
}

export interface PushRequestResponse {
  message_id: number;
  users_count: number;
}
