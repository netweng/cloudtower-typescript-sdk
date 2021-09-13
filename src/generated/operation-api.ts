/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type NotifierLanguageCode = "EN_US" | "ZH_CN";

export type NotifierSecurityMode = "SSL" | "STARTTLS" | "UNSPECIFIED";

export interface AlertNotifier {
  disabled: boolean;
  email_from?: string | null;
  email_tos: string[];
  id: string;
  language_code?: NotifierLanguageCode | null;
  notice_severities: string[];
  security_mode?: NotifierSecurityMode | null;
  smtp_server_host?: string | null;

  /** @format double */
  smtp_server_port?: number | null;
  username?: string | null;
}

export type AlertNotifierOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "disabled_ASC"
  | "disabled_DESC"
  | "email_from_ASC"
  | "email_from_DESC"
  | "id_ASC"
  | "id_DESC"
  | "language_code_ASC"
  | "language_code_DESC"
  | "password_ASC"
  | "password_DESC"
  | "security_mode_ASC"
  | "security_mode_DESC"
  | "smtp_server_host_ASC"
  | "smtp_server_host_DESC"
  | "smtp_server_port_ASC"
  | "smtp_server_port_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "username_ASC"
  | "username_DESC";

export interface AlertNotifierWhereInput {
  AND?: AlertNotifierWhereInput[] | null;
  disabled?: boolean | null;
  disabled_not?: boolean | null;
  email_from?: string | null;
  email_from_contains?: string | null;
  email_from_ends_with?: string | null;
  email_from_gt?: string | null;
  email_from_gte?: string | null;
  email_from_in?: string[] | null;
  email_from_lt?: string | null;
  email_from_lte?: string | null;
  email_from_not?: string | null;
  email_from_not_contains?: string | null;
  email_from_not_ends_with?: string | null;
  email_from_not_in?: string[] | null;
  email_from_not_starts_with?: string | null;
  email_from_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  language_code?: NotifierLanguageCode | null;
  language_code_in?: NotifierLanguageCode[] | null;
  language_code_not?: NotifierLanguageCode | null;
  language_code_not_in?: NotifierLanguageCode[] | null;
  NOT?: AlertNotifierWhereInput[] | null;
  OR?: AlertNotifierWhereInput[] | null;
  password?: string | null;
  password_contains?: string | null;
  password_ends_with?: string | null;
  password_gt?: string | null;
  password_gte?: string | null;
  password_in?: string[] | null;
  password_lt?: string | null;
  password_lte?: string | null;
  password_not?: string | null;
  password_not_contains?: string | null;
  password_not_ends_with?: string | null;
  password_not_in?: string[] | null;
  password_not_starts_with?: string | null;
  password_starts_with?: string | null;
  security_mode?: NotifierSecurityMode | null;
  security_mode_in?: NotifierSecurityMode[] | null;
  security_mode_not?: NotifierSecurityMode | null;
  security_mode_not_in?: NotifierSecurityMode[] | null;
  smtp_server_host?: string | null;
  smtp_server_host_contains?: string | null;
  smtp_server_host_ends_with?: string | null;
  smtp_server_host_gt?: string | null;
  smtp_server_host_gte?: string | null;
  smtp_server_host_in?: string[] | null;
  smtp_server_host_lt?: string | null;
  smtp_server_host_lte?: string | null;
  smtp_server_host_not?: string | null;
  smtp_server_host_not_contains?: string | null;
  smtp_server_host_not_ends_with?: string | null;
  smtp_server_host_not_in?: string[] | null;
  smtp_server_host_not_starts_with?: string | null;
  smtp_server_host_starts_with?: string | null;

  /** @format double */
  smtp_server_port?: number | null;

  /** @format double */
  smtp_server_port_gt?: number | null;

  /** @format double */
  smtp_server_port_gte?: number | null;
  smtp_server_port_in?: number[] | null;

  /** @format double */
  smtp_server_port_lt?: number | null;

  /** @format double */
  smtp_server_port_lte?: number | null;

  /** @format double */
  smtp_server_port_not?: number | null;
  smtp_server_port_not_in?: number[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
}

export interface GetAlertNotifiersRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: AlertNotifierOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: AlertNotifierWhereInput | null;
}

export interface AlertNotifierConnection {
  aggregate: { count: number };
}

export interface GetAlertNotifiersConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: AlertNotifierOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: AlertNotifierWhereInput | null;
}

export type SeverityEnum = "CRITICAL" | "INFO" | "NOTICE" | "SEVERITY_UNSPECIFIED";

export interface AlertRule {
  cluster: { name: string; id: string };
  customized: boolean;
  disabled: boolean;
  global_alert_rule: { name: string; id: string };
  id: string;
  local_id: string;
  thresholds: { value?: number | null; severity?: SeverityEnum | null; quantile?: number | null }[];
}

export type AlertRuleOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "customized_ASC"
  | "customized_DESC"
  | "disabled_ASC"
  | "disabled_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "thresholds_ASC"
  | "thresholds_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface AlertRuleWhereInput {
  AND?: AlertRuleWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  customized?: boolean | null;
  customized_not?: boolean | null;
  disabled?: boolean | null;
  disabled_not?: boolean | null;
  global_alert_rule?: GlobalAlertRuleWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  NOT?: AlertRuleWhereInput[] | null;
  OR?: AlertRuleWhereInput[] | null;
}

export interface ClusterWhereInput {
  AND?: ClusterWhereInput[] | null;
  applications_every?: ApplicationWhereInput | null;
  applications_none?: ApplicationWhereInput | null;
  applications_some?: ApplicationWhereInput | null;
  architecture?: Architecture | null;
  architecture_in?: Architecture[] | null;
  architecture_not?: Architecture | null;
  architecture_not_in?: Architecture[] | null;
  auto_converge?: boolean | null;
  auto_converge_not?: boolean | null;
  connect_state?: ConnectState | null;
  connect_state_in?: ConnectState[] | null;
  connect_state_not?: ConnectState | null;
  connect_state_not_in?: ConnectState[] | null;
  consistency_groups_every?: ConsistencyGroupWhereInput | null;
  consistency_groups_none?: ConsistencyGroupWhereInput | null;
  consistency_groups_some?: ConsistencyGroupWhereInput | null;
  current_cpu_model?: string | null;
  current_cpu_model_contains?: string | null;
  current_cpu_model_ends_with?: string | null;
  current_cpu_model_gt?: string | null;
  current_cpu_model_gte?: string | null;
  current_cpu_model_in?: string[] | null;
  current_cpu_model_lt?: string | null;
  current_cpu_model_lte?: string | null;
  current_cpu_model_not?: string | null;
  current_cpu_model_not_contains?: string | null;
  current_cpu_model_not_ends_with?: string | null;
  current_cpu_model_not_in?: string[] | null;
  current_cpu_model_not_starts_with?: string | null;
  current_cpu_model_starts_with?: string | null;
  datacenters_every?: DatacenterWhereInput | null;
  datacenters_none?: DatacenterWhereInput | null;
  datacenters_some?: DatacenterWhereInput | null;
  disconnected_date?: string | null;
  disconnected_date_gt?: string | null;
  disconnected_date_gte?: string | null;
  disconnected_date_in?: string[] | null;
  disconnected_date_lt?: string | null;
  disconnected_date_lte?: string | null;
  disconnected_date_not?: string | null;
  disconnected_date_not_in?: string[] | null;
  disconnected_reason?: ClusterConnectorErrorCode | null;
  disconnected_reason_in?: ClusterConnectorErrorCode[] | null;
  disconnected_reason_not?: ClusterConnectorErrorCode | null;
  disconnected_reason_not_in?: ClusterConnectorErrorCode[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;

  /** @format double */
  failure_data_space?: number | null;

  /** @format double */
  failure_data_space_gt?: number | null;

  /** @format double */
  failure_data_space_gte?: number | null;
  failure_data_space_in?: number[] | null;

  /** @format double */
  failure_data_space_lt?: number | null;

  /** @format double */
  failure_data_space_lte?: number | null;

  /** @format double */
  failure_data_space_not?: number | null;
  failure_data_space_not_in?: number[] | null;
  has_metrox?: boolean | null;
  has_metrox_not?: boolean | null;
  has_remote_backup?: boolean | null;
  has_remote_backup_not?: boolean | null;

  /** @format double */
  host_num?: number | null;

  /** @format double */
  host_num_gt?: number | null;

  /** @format double */
  host_num_gte?: number | null;
  host_num_in?: number[] | null;

  /** @format double */
  host_num_lt?: number | null;

  /** @format double */
  host_num_lte?: number | null;

  /** @format double */
  host_num_not?: number | null;
  host_num_not_in?: number[] | null;
  hosts_every?: HostWhereInput | null;
  hosts_none?: HostWhereInput | null;
  hosts_some?: HostWhereInput | null;
  hypervisor?: Hypervisor | null;
  hypervisor_in?: Hypervisor[] | null;
  hypervisor_not?: Hypervisor | null;
  hypervisor_not_in?: Hypervisor[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  ip?: string | null;
  ip_contains?: string | null;
  ip_ends_with?: string | null;
  ip_gt?: string | null;
  ip_gte?: string | null;
  ip_in?: string[] | null;
  ip_lt?: string | null;
  ip_lte?: string | null;
  ip_not?: string | null;
  ip_not_contains?: string | null;
  ip_not_ends_with?: string | null;
  ip_not_in?: string[] | null;
  ip_not_starts_with?: string | null;
  ip_starts_with?: string | null;
  is_all_flash?: boolean | null;
  is_all_flash_not?: boolean | null;
  iscsi_vip?: string | null;
  iscsi_vip_contains?: string | null;
  iscsi_vip_ends_with?: string | null;
  iscsi_vip_gt?: string | null;
  iscsi_vip_gte?: string | null;
  iscsi_vip_in?: string[] | null;
  iscsi_vip_lt?: string | null;
  iscsi_vip_lte?: string | null;
  iscsi_vip_not?: string | null;
  iscsi_vip_not_contains?: string | null;
  iscsi_vip_not_ends_with?: string | null;
  iscsi_vip_not_in?: string[] | null;
  iscsi_vip_not_starts_with?: string | null;
  iscsi_vip_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  license_expire_date?: string | null;
  license_expire_date_gt?: string | null;
  license_expire_date_gte?: string | null;
  license_expire_date_in?: string[] | null;
  license_expire_date_lt?: string | null;
  license_expire_date_lte?: string | null;
  license_expire_date_not?: string | null;
  license_expire_date_not_in?: string[] | null;
  license_serial?: string | null;
  license_serial_contains?: string | null;
  license_serial_ends_with?: string | null;
  license_serial_gt?: string | null;
  license_serial_gte?: string | null;
  license_serial_in?: string[] | null;
  license_serial_lt?: string | null;
  license_serial_lte?: string | null;
  license_serial_not?: string | null;
  license_serial_not_contains?: string | null;
  license_serial_not_ends_with?: string | null;
  license_serial_not_in?: string[] | null;
  license_serial_not_starts_with?: string | null;
  license_serial_starts_with?: string | null;
  license_sign_date?: string | null;
  license_sign_date_gt?: string | null;
  license_sign_date_gte?: string | null;
  license_sign_date_in?: string[] | null;
  license_sign_date_lt?: string | null;
  license_sign_date_lte?: string | null;
  license_sign_date_not?: string | null;
  license_sign_date_not_in?: string[] | null;
  license_type?: LicenseType | null;
  license_type_in?: LicenseType[] | null;
  license_type_not?: LicenseType | null;
  license_type_not_in?: LicenseType[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  maintenance_end_date?: string | null;
  maintenance_end_date_gt?: string | null;
  maintenance_end_date_gte?: string | null;
  maintenance_end_date_in?: string[] | null;
  maintenance_end_date_lt?: string | null;
  maintenance_end_date_lte?: string | null;
  maintenance_end_date_not?: string | null;
  maintenance_end_date_not_in?: string[] | null;
  maintenance_start_date?: string | null;
  maintenance_start_date_gt?: string | null;
  maintenance_start_date_gte?: string | null;
  maintenance_start_date_in?: string[] | null;
  maintenance_start_date_lt?: string | null;
  maintenance_start_date_lte?: string | null;
  maintenance_start_date_not?: string | null;
  maintenance_start_date_not_in?: string[] | null;
  management_vip?: string | null;
  management_vip_contains?: string | null;
  management_vip_ends_with?: string | null;
  management_vip_gt?: string | null;
  management_vip_gte?: string | null;
  management_vip_in?: string[] | null;
  management_vip_lt?: string | null;
  management_vip_lte?: string | null;
  management_vip_not?: string | null;
  management_vip_not_contains?: string | null;
  management_vip_not_ends_with?: string | null;
  management_vip_not_in?: string[] | null;
  management_vip_not_starts_with?: string | null;
  management_vip_starts_with?: string | null;

  /** @format double */
  max_chunk_num?: number | null;

  /** @format double */
  max_chunk_num_gt?: number | null;

  /** @format double */
  max_chunk_num_gte?: number | null;
  max_chunk_num_in?: number[] | null;

  /** @format double */
  max_chunk_num_lt?: number | null;

  /** @format double */
  max_chunk_num_lte?: number | null;

  /** @format double */
  max_chunk_num_not?: number | null;
  max_chunk_num_not_in?: number[] | null;

  /** @format double */
  max_physical_data_capacity?: number | null;

  /** @format double */
  max_physical_data_capacity_gt?: number | null;

  /** @format double */
  max_physical_data_capacity_gte?: number | null;
  max_physical_data_capacity_in?: number[] | null;

  /** @format double */
  max_physical_data_capacity_lt?: number | null;

  /** @format double */
  max_physical_data_capacity_lte?: number | null;

  /** @format double */
  max_physical_data_capacity_not?: number | null;
  max_physical_data_capacity_not_in?: number[] | null;

  /** @format double */
  max_physical_data_capacity_per_node?: number | null;

  /** @format double */
  max_physical_data_capacity_per_node_gt?: number | null;

  /** @format double */
  max_physical_data_capacity_per_node_gte?: number | null;
  max_physical_data_capacity_per_node_in?: number[] | null;

  /** @format double */
  max_physical_data_capacity_per_node_lt?: number | null;

  /** @format double */
  max_physical_data_capacity_per_node_lte?: number | null;

  /** @format double */
  max_physical_data_capacity_per_node_not?: number | null;
  max_physical_data_capacity_per_node_not_in?: number[] | null;
  mgt_gateway?: string | null;
  mgt_gateway_contains?: string | null;
  mgt_gateway_ends_with?: string | null;
  mgt_gateway_gt?: string | null;
  mgt_gateway_gte?: string | null;
  mgt_gateway_in?: string[] | null;
  mgt_gateway_lt?: string | null;
  mgt_gateway_lte?: string | null;
  mgt_gateway_not?: string | null;
  mgt_gateway_not_contains?: string | null;
  mgt_gateway_not_ends_with?: string | null;
  mgt_gateway_not_in?: string[] | null;
  mgt_gateway_not_starts_with?: string | null;
  mgt_gateway_starts_with?: string | null;
  mgt_netmask?: string | null;
  mgt_netmask_contains?: string | null;
  mgt_netmask_ends_with?: string | null;
  mgt_netmask_gt?: string | null;
  mgt_netmask_gte?: string | null;
  mgt_netmask_in?: string[] | null;
  mgt_netmask_lt?: string | null;
  mgt_netmask_lte?: string | null;
  mgt_netmask_not?: string | null;
  mgt_netmask_not_contains?: string | null;
  mgt_netmask_not_ends_with?: string | null;
  mgt_netmask_not_in?: string[] | null;
  mgt_netmask_not_starts_with?: string | null;
  mgt_netmask_starts_with?: string | null;

  /** @format double */
  migration_data_size?: number | null;

  /** @format double */
  migration_data_size_gt?: number | null;

  /** @format double */
  migration_data_size_gte?: number | null;
  migration_data_size_in?: number[] | null;

  /** @format double */
  migration_data_size_lt?: number | null;

  /** @format double */
  migration_data_size_lte?: number | null;

  /** @format double */
  migration_data_size_not?: number | null;
  migration_data_size_not_in?: number[] | null;

  /** @format double */
  migration_speed?: number | null;

  /** @format double */
  migration_speed_gt?: number | null;

  /** @format double */
  migration_speed_gte?: number | null;
  migration_speed_in?: number[] | null;

  /** @format double */
  migration_speed_lt?: number | null;

  /** @format double */
  migration_speed_lte?: number | null;

  /** @format double */
  migration_speed_not?: number | null;
  migration_speed_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: ClusterWhereInput[] | null;
  ntp_mode?: NtpMode | null;
  ntp_mode_in?: NtpMode[] | null;
  ntp_mode_not?: NtpMode | null;
  ntp_mode_not_in?: NtpMode[] | null;
  nvmf_enabled?: boolean | null;
  nvmf_enabled_not?: boolean | null;
  OR?: ClusterWhereInput[] | null;
  password?: string | null;
  password_contains?: string | null;
  password_ends_with?: string | null;
  password_gt?: string | null;
  password_gte?: string | null;
  password_in?: string[] | null;
  password_lt?: string | null;
  password_lte?: string | null;
  password_not?: string | null;
  password_not_contains?: string | null;
  password_not_ends_with?: string | null;
  password_not_in?: string[] | null;
  password_not_starts_with?: string | null;
  password_starts_with?: string | null;
  pmem_enabled?: boolean | null;
  pmem_enabled_not?: boolean | null;

  /** @format double */
  provisioned_cpu_cores?: number | null;

  /** @format double */
  provisioned_cpu_cores_for_active_vm?: number | null;

  /** @format double */
  provisioned_cpu_cores_for_active_vm_gt?: number | null;

  /** @format double */
  provisioned_cpu_cores_for_active_vm_gte?: number | null;
  provisioned_cpu_cores_for_active_vm_in?: number[] | null;

  /** @format double */
  provisioned_cpu_cores_for_active_vm_lt?: number | null;

  /** @format double */
  provisioned_cpu_cores_for_active_vm_lte?: number | null;

  /** @format double */
  provisioned_cpu_cores_for_active_vm_not?: number | null;
  provisioned_cpu_cores_for_active_vm_not_in?: number[] | null;

  /** @format double */
  provisioned_cpu_cores_gt?: number | null;

  /** @format double */
  provisioned_cpu_cores_gte?: number | null;
  provisioned_cpu_cores_in?: number[] | null;

  /** @format double */
  provisioned_cpu_cores_lt?: number | null;

  /** @format double */
  provisioned_cpu_cores_lte?: number | null;

  /** @format double */
  provisioned_cpu_cores_not?: number | null;
  provisioned_cpu_cores_not_in?: number[] | null;

  /** @format double */
  provisioned_for_active_vm_ratio?: number | null;

  /** @format double */
  provisioned_for_active_vm_ratio_gt?: number | null;

  /** @format double */
  provisioned_for_active_vm_ratio_gte?: number | null;
  provisioned_for_active_vm_ratio_in?: number[] | null;

  /** @format double */
  provisioned_for_active_vm_ratio_lt?: number | null;

  /** @format double */
  provisioned_for_active_vm_ratio_lte?: number | null;

  /** @format double */
  provisioned_for_active_vm_ratio_not?: number | null;
  provisioned_for_active_vm_ratio_not_in?: number[] | null;

  /** @format double */
  provisioned_memory_bytes?: number | null;

  /** @format double */
  provisioned_memory_bytes_gt?: number | null;

  /** @format double */
  provisioned_memory_bytes_gte?: number | null;
  provisioned_memory_bytes_in?: number[] | null;

  /** @format double */
  provisioned_memory_bytes_lt?: number | null;

  /** @format double */
  provisioned_memory_bytes_lte?: number | null;

  /** @format double */
  provisioned_memory_bytes_not?: number | null;
  provisioned_memory_bytes_not_in?: number[] | null;

  /** @format double */
  provisioned_ratio?: number | null;

  /** @format double */
  provisioned_ratio_gt?: number | null;

  /** @format double */
  provisioned_ratio_gte?: number | null;
  provisioned_ratio_in?: number[] | null;

  /** @format double */
  provisioned_ratio_lt?: number | null;

  /** @format double */
  provisioned_ratio_lte?: number | null;

  /** @format double */
  provisioned_ratio_not?: number | null;
  provisioned_ratio_not_in?: number[] | null;
  rdma_enabled?: boolean | null;
  rdma_enabled_not?: boolean | null;

  /** @format double */
  recover_data_size?: number | null;

  /** @format double */
  recover_data_size_gt?: number | null;

  /** @format double */
  recover_data_size_gte?: number | null;
  recover_data_size_in?: number[] | null;

  /** @format double */
  recover_data_size_lt?: number | null;

  /** @format double */
  recover_data_size_lte?: number | null;

  /** @format double */
  recover_data_size_not?: number | null;
  recover_data_size_not_in?: number[] | null;

  /** @format double */
  recover_speed?: number | null;

  /** @format double */
  recover_speed_gt?: number | null;

  /** @format double */
  recover_speed_gte?: number | null;
  recover_speed_in?: number[] | null;

  /** @format double */
  recover_speed_lt?: number | null;

  /** @format double */
  recover_speed_lte?: number | null;

  /** @format double */
  recover_speed_not?: number | null;
  recover_speed_not_in?: number[] | null;

  /** @format double */
  reserved_cpu_cores_for_system_service?: number | null;

  /** @format double */
  reserved_cpu_cores_for_system_service_gt?: number | null;

  /** @format double */
  reserved_cpu_cores_for_system_service_gte?: number | null;
  reserved_cpu_cores_for_system_service_in?: number[] | null;

  /** @format double */
  reserved_cpu_cores_for_system_service_lt?: number | null;

  /** @format double */
  reserved_cpu_cores_for_system_service_lte?: number | null;

  /** @format double */
  reserved_cpu_cores_for_system_service_not?: number | null;
  reserved_cpu_cores_for_system_service_not_in?: number[] | null;

  /** @format double */
  running_vm_num?: number | null;

  /** @format double */
  running_vm_num_gt?: number | null;

  /** @format double */
  running_vm_num_gte?: number | null;
  running_vm_num_in?: number[] | null;

  /** @format double */
  running_vm_num_lt?: number | null;

  /** @format double */
  running_vm_num_lte?: number | null;

  /** @format double */
  running_vm_num_not?: number | null;
  running_vm_num_not_in?: number[] | null;
  settings?: ClusterSettingsWhereInput | null;
  software_edition?: SoftwareEdition | null;
  software_edition_in?: SoftwareEdition[] | null;
  software_edition_not?: SoftwareEdition | null;
  software_edition_not_in?: SoftwareEdition[] | null;

  /** @format double */
  stopped_vm_num?: number | null;

  /** @format double */
  stopped_vm_num_gt?: number | null;

  /** @format double */
  stopped_vm_num_gte?: number | null;
  stopped_vm_num_in?: number[] | null;

  /** @format double */
  stopped_vm_num_lt?: number | null;

  /** @format double */
  stopped_vm_num_lte?: number | null;

  /** @format double */
  stopped_vm_num_not?: number | null;
  stopped_vm_num_not_in?: number[] | null;
  stretch?: boolean | null;
  stretch_not?: boolean | null;

  /** @format double */
  suspended_vm_num?: number | null;

  /** @format double */
  suspended_vm_num_gt?: number | null;

  /** @format double */
  suspended_vm_num_gte?: number | null;
  suspended_vm_num_in?: number[] | null;

  /** @format double */
  suspended_vm_num_lt?: number | null;

  /** @format double */
  suspended_vm_num_lte?: number | null;

  /** @format double */
  suspended_vm_num_not?: number | null;
  suspended_vm_num_not_in?: number[] | null;

  /** @format double */
  total_cache_capacity?: number | null;

  /** @format double */
  total_cache_capacity_gt?: number | null;

  /** @format double */
  total_cache_capacity_gte?: number | null;
  total_cache_capacity_in?: number[] | null;

  /** @format double */
  total_cache_capacity_lt?: number | null;

  /** @format double */
  total_cache_capacity_lte?: number | null;

  /** @format double */
  total_cache_capacity_not?: number | null;
  total_cache_capacity_not_in?: number[] | null;

  /** @format double */
  total_cpu_cores?: number | null;

  /** @format double */
  total_cpu_cores_gt?: number | null;

  /** @format double */
  total_cpu_cores_gte?: number | null;
  total_cpu_cores_in?: number[] | null;

  /** @format double */
  total_cpu_cores_lt?: number | null;

  /** @format double */
  total_cpu_cores_lte?: number | null;

  /** @format double */
  total_cpu_cores_not?: number | null;
  total_cpu_cores_not_in?: number[] | null;

  /** @format double */
  total_cpu_hz?: number | null;

  /** @format double */
  total_cpu_hz_gt?: number | null;

  /** @format double */
  total_cpu_hz_gte?: number | null;
  total_cpu_hz_in?: number[] | null;

  /** @format double */
  total_cpu_hz_lt?: number | null;

  /** @format double */
  total_cpu_hz_lte?: number | null;

  /** @format double */
  total_cpu_hz_not?: number | null;
  total_cpu_hz_not_in?: number[] | null;

  /** @format double */
  total_data_capacity?: number | null;

  /** @format double */
  total_data_capacity_gt?: number | null;

  /** @format double */
  total_data_capacity_gte?: number | null;
  total_data_capacity_in?: number[] | null;

  /** @format double */
  total_data_capacity_lt?: number | null;

  /** @format double */
  total_data_capacity_lte?: number | null;

  /** @format double */
  total_data_capacity_not?: number | null;
  total_data_capacity_not_in?: number[] | null;

  /** @format double */
  total_memory_bytes?: number | null;

  /** @format double */
  total_memory_bytes_gt?: number | null;

  /** @format double */
  total_memory_bytes_gte?: number | null;
  total_memory_bytes_in?: number[] | null;

  /** @format double */
  total_memory_bytes_lt?: number | null;

  /** @format double */
  total_memory_bytes_lte?: number | null;

  /** @format double */
  total_memory_bytes_not?: number | null;
  total_memory_bytes_not_in?: number[] | null;
  type?: ClusterType | null;
  type_in?: ClusterType[] | null;
  type_not?: ClusterType | null;
  type_not_in?: ClusterType[] | null;

  /** @format double */
  used_cpu_hz?: number | null;

  /** @format double */
  used_cpu_hz_gt?: number | null;

  /** @format double */
  used_cpu_hz_gte?: number | null;
  used_cpu_hz_in?: number[] | null;

  /** @format double */
  used_cpu_hz_lt?: number | null;

  /** @format double */
  used_cpu_hz_lte?: number | null;

  /** @format double */
  used_cpu_hz_not?: number | null;
  used_cpu_hz_not_in?: number[] | null;

  /** @format double */
  used_data_space?: number | null;

  /** @format double */
  used_data_space_gt?: number | null;

  /** @format double */
  used_data_space_gte?: number | null;
  used_data_space_in?: number[] | null;

  /** @format double */
  used_data_space_lt?: number | null;

  /** @format double */
  used_data_space_lte?: number | null;

  /** @format double */
  used_data_space_not?: number | null;
  used_data_space_not_in?: number[] | null;

  /** @format double */
  used_memory_bytes?: number | null;

  /** @format double */
  used_memory_bytes_gt?: number | null;

  /** @format double */
  used_memory_bytes_gte?: number | null;
  used_memory_bytes_in?: number[] | null;

  /** @format double */
  used_memory_bytes_lt?: number | null;

  /** @format double */
  used_memory_bytes_lte?: number | null;

  /** @format double */
  used_memory_bytes_not?: number | null;
  used_memory_bytes_not_in?: number[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;

  /** @format double */
  valid_data_space?: number | null;

  /** @format double */
  valid_data_space_gt?: number | null;

  /** @format double */
  valid_data_space_gte?: number | null;
  valid_data_space_in?: number[] | null;

  /** @format double */
  valid_data_space_lt?: number | null;

  /** @format double */
  valid_data_space_lte?: number | null;

  /** @format double */
  valid_data_space_not?: number | null;
  valid_data_space_not_in?: number[] | null;
  vcenterAccount?: VcenterAccountWhereInput | null;
  vdses_every?: VdsWhereInput | null;
  vdses_none?: VdsWhereInput | null;
  vdses_some?: VdsWhereInput | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_semantic_gt?: string | null;
  version_semantic_gte?: string | null;
  version_semantic_lt?: string | null;
  version_semantic_lte?: string | null;
  version_starts_with?: string | null;
  vhost_enabled?: boolean | null;
  vhost_enabled_not?: boolean | null;
  vm_folders_every?: VmFolderWhereInput | null;
  vm_folders_none?: VmFolderWhereInput | null;
  vm_folders_some?: VmFolderWhereInput | null;

  /** @format double */
  vm_num?: number | null;

  /** @format double */
  vm_num_gt?: number | null;

  /** @format double */
  vm_num_gte?: number | null;
  vm_num_in?: number[] | null;

  /** @format double */
  vm_num_lt?: number | null;

  /** @format double */
  vm_num_lte?: number | null;

  /** @format double */
  vm_num_not?: number | null;
  vm_num_not_in?: number[] | null;
  vm_templates_every?: VmTemplateWhereInput | null;
  vm_templates_none?: VmTemplateWhereInput | null;
  vm_templates_some?: VmTemplateWhereInput | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
  witness?: WitnessWhereInput | null;
  zones_every?: ZoneWhereInput | null;
  zones_none?: ZoneWhereInput | null;
  zones_some?: ZoneWhereInput | null;
}

export interface ApplicationWhereInput {
  AND?: ApplicationWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  error_message?: string | null;
  error_message_contains?: string | null;
  error_message_ends_with?: string | null;
  error_message_gt?: string | null;
  error_message_gte?: string | null;
  error_message_in?: string[] | null;
  error_message_lt?: string | null;
  error_message_lte?: string | null;
  error_message_not?: string | null;
  error_message_not_contains?: string | null;
  error_message_not_ends_with?: string | null;
  error_message_not_in?: string[] | null;
  error_message_not_starts_with?: string | null;
  error_message_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  image_name?: string | null;
  image_name_contains?: string | null;
  image_name_ends_with?: string | null;
  image_name_gt?: string | null;
  image_name_gte?: string | null;
  image_name_in?: string[] | null;
  image_name_lt?: string | null;
  image_name_lte?: string | null;
  image_name_not?: string | null;
  image_name_not_contains?: string | null;
  image_name_not_ends_with?: string | null;
  image_name_not_in?: string[] | null;
  image_name_not_starts_with?: string | null;
  image_name_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format double */
  memory?: number | null;

  /** @format double */
  memory_gt?: number | null;

  /** @format double */
  memory_gte?: number | null;
  memory_in?: number[] | null;

  /** @format double */
  memory_lt?: number | null;

  /** @format double */
  memory_lte?: number | null;

  /** @format double */
  memory_not?: number | null;
  memory_not_in?: number[] | null;
  NOT?: ApplicationWhereInput[] | null;
  OR?: ApplicationWhereInput[] | null;
  state?: ApplicationState | null;
  state_in?: ApplicationState[] | null;
  state_not?: ApplicationState | null;
  state_not_in?: ApplicationState[] | null;
  storage_ip?: string | null;
  storage_ip_contains?: string | null;
  storage_ip_ends_with?: string | null;
  storage_ip_gt?: string | null;
  storage_ip_gte?: string | null;
  storage_ip_in?: string[] | null;
  storage_ip_lt?: string | null;
  storage_ip_lte?: string | null;
  storage_ip_not?: string | null;
  storage_ip_not_contains?: string | null;
  storage_ip_not_ends_with?: string | null;
  storage_ip_not_in?: string[] | null;
  storage_ip_not_starts_with?: string | null;
  storage_ip_starts_with?: string | null;
  type?: ApplicationType | null;
  type_in?: ApplicationType[] | null;
  type_not?: ApplicationType | null;
  type_not_in?: ApplicationType[] | null;
  update_time?: string | null;
  update_time_gt?: string | null;
  update_time_gte?: string | null;
  update_time_in?: string[] | null;
  update_time_lt?: string | null;
  update_time_lte?: string | null;
  update_time_not?: string | null;
  update_time_not_in?: string[] | null;

  /** @format double */
  vcpu?: number | null;

  /** @format double */
  vcpu_gt?: number | null;

  /** @format double */
  vcpu_gte?: number | null;
  vcpu_in?: number[] | null;

  /** @format double */
  vcpu_lt?: number | null;

  /** @format double */
  vcpu_lte?: number | null;

  /** @format double */
  vcpu_not?: number | null;
  vcpu_not_in?: number[] | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_starts_with?: string | null;

  /** @format double */
  volume_size?: number | null;

  /** @format double */
  volume_size_gt?: number | null;

  /** @format double */
  volume_size_gte?: number | null;
  volume_size_in?: number[] | null;

  /** @format double */
  volume_size_lt?: number | null;

  /** @format double */
  volume_size_lte?: number | null;

  /** @format double */
  volume_size_not?: number | null;
  volume_size_not_in?: number[] | null;
}

export type ApplicationState =
  | "DEPLOY_ERROR"
  | "DEPLOYED"
  | "DEPLOYING"
  | "EDITING"
  | "NOT_DEPLOYED"
  | "STOP_ERROR"
  | "STOPPED"
  | "STOPPING"
  | "UPGRADING";

export type ApplicationType = "MONITOR";

export type Architecture = "AARCH64" | "X86_64";

export type ConnectState = "CONNECTED" | "DISCONNECTED" | "INITIALIZING" | "REMOVING";

export interface ConsistencyGroupWhereInput {
  AND?: ConsistencyGroupWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  consistency_group_snapshots_every?: ConsistencyGroupSnapshotWhereInput | null;
  consistency_group_snapshots_none?: ConsistencyGroupSnapshotWhereInput | null;
  consistency_group_snapshots_some?: ConsistencyGroupSnapshotWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  iscsi_luns_every?: IscsiLunWhereInput | null;
  iscsi_luns_none?: IscsiLunWhereInput | null;
  iscsi_luns_some?: IscsiLunWhereInput | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  namespaces_every?: NvmfNamespaceWhereInput | null;
  namespaces_none?: NvmfNamespaceWhereInput | null;
  namespaces_some?: NvmfNamespaceWhereInput | null;
  NOT?: ConsistencyGroupWhereInput[] | null;
  OR?: ConsistencyGroupWhereInput[] | null;

  /** @format double */
  unique_size?: number | null;

  /** @format double */
  unique_size_gt?: number | null;

  /** @format double */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format double */
  unique_size_lt?: number | null;

  /** @format double */
  unique_size_lte?: number | null;

  /** @format double */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
}

export interface ConsistencyGroupSnapshotWhereInput {
  AND?: ConsistencyGroupSnapshotWhereInput[] | null;
  consistency_group?: ConsistencyGroupWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  Iscsi_lun_snapshots_every?: IscsiLunSnapshotWhereInput | null;
  Iscsi_lun_snapshots_none?: IscsiLunSnapshotWhereInput | null;
  Iscsi_lun_snapshots_some?: IscsiLunSnapshotWhereInput | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: ConsistencyGroupSnapshotWhereInput[] | null;
  nvmf_namespace_snapshots_every?: NvmfNamespaceSnapshotWhereInput | null;
  nvmf_namespace_snapshots_none?: NvmfNamespaceSnapshotWhereInput | null;
  nvmf_namespace_snapshots_some?: NvmfNamespaceSnapshotWhereInput | null;
  OR?: ConsistencyGroupSnapshotWhereInput[] | null;

  /** @format double */
  unique_size?: number | null;

  /** @format double */
  unique_size_gt?: number | null;

  /** @format double */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format double */
  unique_size_lt?: number | null;

  /** @format double */
  unique_size_lte?: number | null;

  /** @format double */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
}

export type EntityAsyncStatus = "CREATING" | "DELETING" | "UPDATING";

export interface IscsiLunSnapshotWhereInput {
  AND?: IscsiLunSnapshotWhereInput[] | null;
  consistency_group_snapshot?: ConsistencyGroupSnapshotWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  iscsi_lun?: IscsiLunWhereInput | null;
  iscsi_target?: IscsiTargetWhereInput | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: IscsiLunSnapshotWhereInput[] | null;
  OR?: IscsiLunSnapshotWhereInput[] | null;

  /** @format double */
  unique_size?: number | null;

  /** @format double */
  unique_size_gt?: number | null;

  /** @format double */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format double */
  unique_size_lt?: number | null;

  /** @format double */
  unique_size_lte?: number | null;

  /** @format double */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
}

export interface IscsiLunWhereInput {
  allowed_initiators?: string | null;
  allowed_initiators_contains?: string | null;
  allowed_initiators_ends_with?: string | null;
  allowed_initiators_gt?: string | null;
  allowed_initiators_gte?: string | null;
  allowed_initiators_in?: string[] | null;
  allowed_initiators_lt?: string | null;
  allowed_initiators_lte?: string | null;
  allowed_initiators_not?: string | null;
  allowed_initiators_not_contains?: string | null;
  allowed_initiators_not_ends_with?: string | null;
  allowed_initiators_not_in?: string[] | null;
  allowed_initiators_not_starts_with?: string | null;
  allowed_initiators_starts_with?: string | null;
  AND?: IscsiLunWhereInput[] | null;

  /** @format double */
  assigned_size?: number | null;

  /** @format double */
  assigned_size_gt?: number | null;

  /** @format double */
  assigned_size_gte?: number | null;
  assigned_size_in?: number[] | null;

  /** @format double */
  assigned_size_lt?: number | null;

  /** @format double */
  assigned_size_lte?: number | null;

  /** @format double */
  assigned_size_not?: number | null;
  assigned_size_not_in?: number[] | null;

  /** @format double */
  bps?: number | null;

  /** @format double */
  bps_gt?: number | null;

  /** @format double */
  bps_gte?: number | null;
  bps_in?: number[] | null;

  /** @format double */
  bps_lt?: number | null;

  /** @format double */
  bps_lte?: number | null;

  /** @format double */
  bps_max?: number | null;

  /** @format double */
  bps_max_gt?: number | null;

  /** @format double */
  bps_max_gte?: number | null;
  bps_max_in?: number[] | null;

  /** @format double */
  bps_max_length?: number | null;

  /** @format double */
  bps_max_length_gt?: number | null;

  /** @format double */
  bps_max_length_gte?: number | null;
  bps_max_length_in?: number[] | null;

  /** @format double */
  bps_max_length_lt?: number | null;

  /** @format double */
  bps_max_length_lte?: number | null;

  /** @format double */
  bps_max_length_not?: number | null;
  bps_max_length_not_in?: number[] | null;

  /** @format double */
  bps_max_lt?: number | null;

  /** @format double */
  bps_max_lte?: number | null;

  /** @format double */
  bps_max_not?: number | null;
  bps_max_not_in?: number[] | null;

  /** @format double */
  bps_not?: number | null;
  bps_not_in?: number[] | null;

  /** @format double */
  bps_rd?: number | null;

  /** @format double */
  bps_rd_gt?: number | null;

  /** @format double */
  bps_rd_gte?: number | null;
  bps_rd_in?: number[] | null;

  /** @format double */
  bps_rd_lt?: number | null;

  /** @format double */
  bps_rd_lte?: number | null;

  /** @format double */
  bps_rd_max?: number | null;

  /** @format double */
  bps_rd_max_gt?: number | null;

  /** @format double */
  bps_rd_max_gte?: number | null;
  bps_rd_max_in?: number[] | null;

  /** @format double */
  bps_rd_max_length?: number | null;

  /** @format double */
  bps_rd_max_length_gt?: number | null;

  /** @format double */
  bps_rd_max_length_gte?: number | null;
  bps_rd_max_length_in?: number[] | null;

  /** @format double */
  bps_rd_max_length_lt?: number | null;

  /** @format double */
  bps_rd_max_length_lte?: number | null;

  /** @format double */
  bps_rd_max_length_not?: number | null;
  bps_rd_max_length_not_in?: number[] | null;

  /** @format double */
  bps_rd_max_lt?: number | null;

  /** @format double */
  bps_rd_max_lte?: number | null;

  /** @format double */
  bps_rd_max_not?: number | null;
  bps_rd_max_not_in?: number[] | null;

  /** @format double */
  bps_rd_not?: number | null;
  bps_rd_not_in?: number[] | null;

  /** @format double */
  bps_wr?: number | null;

  /** @format double */
  bps_wr_gt?: number | null;

  /** @format double */
  bps_wr_gte?: number | null;
  bps_wr_in?: number[] | null;

  /** @format double */
  bps_wr_lt?: number | null;

  /** @format double */
  bps_wr_lte?: number | null;

  /** @format double */
  bps_wr_max?: number | null;

  /** @format double */
  bps_wr_max_gt?: number | null;

  /** @format double */
  bps_wr_max_gte?: number | null;
  bps_wr_max_in?: number[] | null;

  /** @format double */
  bps_wr_max_length?: number | null;

  /** @format double */
  bps_wr_max_length_gt?: number | null;

  /** @format double */
  bps_wr_max_length_gte?: number | null;
  bps_wr_max_length_in?: number[] | null;

  /** @format double */
  bps_wr_max_length_lt?: number | null;

  /** @format double */
  bps_wr_max_length_lte?: number | null;

  /** @format double */
  bps_wr_max_length_not?: number | null;
  bps_wr_max_length_not_in?: number[] | null;

  /** @format double */
  bps_wr_max_lt?: number | null;

  /** @format double */
  bps_wr_max_lte?: number | null;

  /** @format double */
  bps_wr_max_not?: number | null;
  bps_wr_max_not_in?: number[] | null;

  /** @format double */
  bps_wr_not?: number | null;
  bps_wr_not_in?: number[] | null;
  consistency_group?: ConsistencyGroupWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;

  /** @format double */
  io_size?: number | null;

  /** @format double */
  io_size_gt?: number | null;

  /** @format double */
  io_size_gte?: number | null;
  io_size_in?: number[] | null;

  /** @format double */
  io_size_lt?: number | null;

  /** @format double */
  io_size_lte?: number | null;

  /** @format double */
  io_size_not?: number | null;
  io_size_not_in?: number[] | null;

  /** @format double */
  iops?: number | null;

  /** @format double */
  iops_gt?: number | null;

  /** @format double */
  iops_gte?: number | null;
  iops_in?: number[] | null;

  /** @format double */
  iops_lt?: number | null;

  /** @format double */
  iops_lte?: number | null;

  /** @format double */
  iops_max?: number | null;

  /** @format double */
  iops_max_gt?: number | null;

  /** @format double */
  iops_max_gte?: number | null;
  iops_max_in?: number[] | null;

  /** @format double */
  iops_max_length?: number | null;

  /** @format double */
  iops_max_length_gt?: number | null;

  /** @format double */
  iops_max_length_gte?: number | null;
  iops_max_length_in?: number[] | null;

  /** @format double */
  iops_max_length_lt?: number | null;

  /** @format double */
  iops_max_length_lte?: number | null;

  /** @format double */
  iops_max_length_not?: number | null;
  iops_max_length_not_in?: number[] | null;

  /** @format double */
  iops_max_lt?: number | null;

  /** @format double */
  iops_max_lte?: number | null;

  /** @format double */
  iops_max_not?: number | null;
  iops_max_not_in?: number[] | null;

  /** @format double */
  iops_not?: number | null;
  iops_not_in?: number[] | null;

  /** @format double */
  iops_rd?: number | null;

  /** @format double */
  iops_rd_gt?: number | null;

  /** @format double */
  iops_rd_gte?: number | null;
  iops_rd_in?: number[] | null;

  /** @format double */
  iops_rd_lt?: number | null;

  /** @format double */
  iops_rd_lte?: number | null;

  /** @format double */
  iops_rd_max?: number | null;

  /** @format double */
  iops_rd_max_gt?: number | null;

  /** @format double */
  iops_rd_max_gte?: number | null;
  iops_rd_max_in?: number[] | null;

  /** @format double */
  iops_rd_max_length?: number | null;

  /** @format double */
  iops_rd_max_length_gt?: number | null;

  /** @format double */
  iops_rd_max_length_gte?: number | null;
  iops_rd_max_length_in?: number[] | null;

  /** @format double */
  iops_rd_max_length_lt?: number | null;

  /** @format double */
  iops_rd_max_length_lte?: number | null;

  /** @format double */
  iops_rd_max_length_not?: number | null;
  iops_rd_max_length_not_in?: number[] | null;

  /** @format double */
  iops_rd_max_lt?: number | null;

  /** @format double */
  iops_rd_max_lte?: number | null;

  /** @format double */
  iops_rd_max_not?: number | null;
  iops_rd_max_not_in?: number[] | null;

  /** @format double */
  iops_rd_not?: number | null;
  iops_rd_not_in?: number[] | null;

  /** @format double */
  iops_wr?: number | null;

  /** @format double */
  iops_wr_gt?: number | null;

  /** @format double */
  iops_wr_gte?: number | null;
  iops_wr_in?: number[] | null;

  /** @format double */
  iops_wr_lt?: number | null;

  /** @format double */
  iops_wr_lte?: number | null;

  /** @format double */
  iops_wr_max?: number | null;

  /** @format double */
  iops_wr_max_gt?: number | null;

  /** @format double */
  iops_wr_max_gte?: number | null;
  iops_wr_max_in?: number[] | null;

  /** @format double */
  iops_wr_max_length?: number | null;

  /** @format double */
  iops_wr_max_length_gt?: number | null;

  /** @format double */
  iops_wr_max_length_gte?: number | null;
  iops_wr_max_length_in?: number[] | null;

  /** @format double */
  iops_wr_max_length_lt?: number | null;

  /** @format double */
  iops_wr_max_length_lte?: number | null;

  /** @format double */
  iops_wr_max_length_not?: number | null;
  iops_wr_max_length_not_in?: number[] | null;

  /** @format double */
  iops_wr_max_lt?: number | null;

  /** @format double */
  iops_wr_max_lte?: number | null;

  /** @format double */
  iops_wr_max_not?: number | null;
  iops_wr_max_not_in?: number[] | null;

  /** @format double */
  iops_wr_not?: number | null;
  iops_wr_not_in?: number[] | null;
  iscsi_target?: IscsiTargetWhereInput | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format double */
  lun_id?: number | null;

  /** @format double */
  lun_id_gt?: number | null;

  /** @format double */
  lun_id_gte?: number | null;
  lun_id_in?: number[] | null;

  /** @format double */
  lun_id_lt?: number | null;

  /** @format double */
  lun_id_lte?: number | null;

  /** @format double */
  lun_id_not?: number | null;
  lun_id_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: IscsiLunWhereInput[] | null;
  OR?: IscsiLunWhereInput[] | null;

  /** @format double */
  replica_num?: number | null;

  /** @format double */
  replica_num_gt?: number | null;

  /** @format double */
  replica_num_gte?: number | null;
  replica_num_in?: number[] | null;

  /** @format double */
  replica_num_lt?: number | null;

  /** @format double */
  replica_num_lte?: number | null;

  /** @format double */
  replica_num_not?: number | null;
  replica_num_not_in?: number[] | null;

  /** @format double */
  shared_size?: number | null;

  /** @format double */
  shared_size_gt?: number | null;

  /** @format double */
  shared_size_gte?: number | null;
  shared_size_in?: number[] | null;

  /** @format double */
  shared_size_lt?: number | null;

  /** @format double */
  shared_size_lte?: number | null;

  /** @format double */
  shared_size_not?: number | null;
  shared_size_not_in?: number[] | null;

  /** @format double */
  snapshot_num?: number | null;

  /** @format double */
  snapshot_num_gt?: number | null;

  /** @format double */
  snapshot_num_gte?: number | null;
  snapshot_num_in?: number[] | null;

  /** @format double */
  snapshot_num_lt?: number | null;

  /** @format double */
  snapshot_num_lte?: number | null;

  /** @format double */
  snapshot_num_not?: number | null;
  snapshot_num_not_in?: number[] | null;

  /** @format double */
  stripe_num?: number | null;

  /** @format double */
  stripe_num_gt?: number | null;

  /** @format double */
  stripe_num_gte?: number | null;
  stripe_num_in?: number[] | null;

  /** @format double */
  stripe_num_lt?: number | null;

  /** @format double */
  stripe_num_lte?: number | null;

  /** @format double */
  stripe_num_not?: number | null;
  stripe_num_not_in?: number[] | null;

  /** @format double */
  stripe_size?: number | null;

  /** @format double */
  stripe_size_gt?: number | null;

  /** @format double */
  stripe_size_gte?: number | null;
  stripe_size_in?: number[] | null;

  /** @format double */
  stripe_size_lt?: number | null;

  /** @format double */
  stripe_size_lte?: number | null;

  /** @format double */
  stripe_size_not?: number | null;
  stripe_size_not_in?: number[] | null;
  thin_provision?: boolean | null;
  thin_provision_not?: boolean | null;

  /** @format double */
  unique_size?: number | null;

  /** @format double */
  unique_size_gt?: number | null;

  /** @format double */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format double */
  unique_size_lt?: number | null;

  /** @format double */
  unique_size_lte?: number | null;

  /** @format double */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
  zbs_volume_id?: string | null;
  zbs_volume_id_contains?: string | null;
  zbs_volume_id_ends_with?: string | null;
  zbs_volume_id_gt?: string | null;
  zbs_volume_id_gte?: string | null;
  zbs_volume_id_in?: string[] | null;
  zbs_volume_id_lt?: string | null;
  zbs_volume_id_lte?: string | null;
  zbs_volume_id_not?: string | null;
  zbs_volume_id_not_contains?: string | null;
  zbs_volume_id_not_ends_with?: string | null;
  zbs_volume_id_not_in?: string[] | null;
  zbs_volume_id_not_starts_with?: string | null;
  zbs_volume_id_starts_with?: string | null;
}

export interface IscsiTargetWhereInput {
  AND?: IscsiTargetWhereInput[] | null;

  /** @format double */
  bps?: number | null;

  /** @format double */
  bps_gt?: number | null;

  /** @format double */
  bps_gte?: number | null;
  bps_in?: number[] | null;

  /** @format double */
  bps_lt?: number | null;

  /** @format double */
  bps_lte?: number | null;

  /** @format double */
  bps_max?: number | null;

  /** @format double */
  bps_max_gt?: number | null;

  /** @format double */
  bps_max_gte?: number | null;
  bps_max_in?: number[] | null;

  /** @format double */
  bps_max_length?: number | null;

  /** @format double */
  bps_max_length_gt?: number | null;

  /** @format double */
  bps_max_length_gte?: number | null;
  bps_max_length_in?: number[] | null;

  /** @format double */
  bps_max_length_lt?: number | null;

  /** @format double */
  bps_max_length_lte?: number | null;

  /** @format double */
  bps_max_length_not?: number | null;
  bps_max_length_not_in?: number[] | null;

  /** @format double */
  bps_max_lt?: number | null;

  /** @format double */
  bps_max_lte?: number | null;

  /** @format double */
  bps_max_not?: number | null;
  bps_max_not_in?: number[] | null;

  /** @format double */
  bps_not?: number | null;
  bps_not_in?: number[] | null;

  /** @format double */
  bps_rd?: number | null;

  /** @format double */
  bps_rd_gt?: number | null;

  /** @format double */
  bps_rd_gte?: number | null;
  bps_rd_in?: number[] | null;

  /** @format double */
  bps_rd_lt?: number | null;

  /** @format double */
  bps_rd_lte?: number | null;

  /** @format double */
  bps_rd_max?: number | null;

  /** @format double */
  bps_rd_max_gt?: number | null;

  /** @format double */
  bps_rd_max_gte?: number | null;
  bps_rd_max_in?: number[] | null;

  /** @format double */
  bps_rd_max_length?: number | null;

  /** @format double */
  bps_rd_max_length_gt?: number | null;

  /** @format double */
  bps_rd_max_length_gte?: number | null;
  bps_rd_max_length_in?: number[] | null;

  /** @format double */
  bps_rd_max_length_lt?: number | null;

  /** @format double */
  bps_rd_max_length_lte?: number | null;

  /** @format double */
  bps_rd_max_length_not?: number | null;
  bps_rd_max_length_not_in?: number[] | null;

  /** @format double */
  bps_rd_max_lt?: number | null;

  /** @format double */
  bps_rd_max_lte?: number | null;

  /** @format double */
  bps_rd_max_not?: number | null;
  bps_rd_max_not_in?: number[] | null;

  /** @format double */
  bps_rd_not?: number | null;
  bps_rd_not_in?: number[] | null;

  /** @format double */
  bps_wr?: number | null;

  /** @format double */
  bps_wr_gt?: number | null;

  /** @format double */
  bps_wr_gte?: number | null;
  bps_wr_in?: number[] | null;

  /** @format double */
  bps_wr_lt?: number | null;

  /** @format double */
  bps_wr_lte?: number | null;

  /** @format double */
  bps_wr_max?: number | null;

  /** @format double */
  bps_wr_max_gt?: number | null;

  /** @format double */
  bps_wr_max_gte?: number | null;
  bps_wr_max_in?: number[] | null;

  /** @format double */
  bps_wr_max_length?: number | null;

  /** @format double */
  bps_wr_max_length_gt?: number | null;

  /** @format double */
  bps_wr_max_length_gte?: number | null;
  bps_wr_max_length_in?: number[] | null;

  /** @format double */
  bps_wr_max_length_lt?: number | null;

  /** @format double */
  bps_wr_max_length_lte?: number | null;

  /** @format double */
  bps_wr_max_length_not?: number | null;
  bps_wr_max_length_not_in?: number[] | null;

  /** @format double */
  bps_wr_max_lt?: number | null;

  /** @format double */
  bps_wr_max_lte?: number | null;

  /** @format double */
  bps_wr_max_not?: number | null;
  bps_wr_max_not_in?: number[] | null;

  /** @format double */
  bps_wr_not?: number | null;
  bps_wr_not_in?: number[] | null;
  chap_enabled?: boolean | null;
  chap_enabled_not?: boolean | null;
  chap_name?: string | null;
  chap_name_contains?: string | null;
  chap_name_ends_with?: string | null;
  chap_name_gt?: string | null;
  chap_name_gte?: string | null;
  chap_name_in?: string[] | null;
  chap_name_lt?: string | null;
  chap_name_lte?: string | null;
  chap_name_not?: string | null;
  chap_name_not_contains?: string | null;
  chap_name_not_ends_with?: string | null;
  chap_name_not_in?: string[] | null;
  chap_name_not_starts_with?: string | null;
  chap_name_starts_with?: string | null;
  chap_secret?: string | null;
  chap_secret_contains?: string | null;
  chap_secret_ends_with?: string | null;
  chap_secret_gt?: string | null;
  chap_secret_gte?: string | null;
  chap_secret_in?: string[] | null;
  chap_secret_lt?: string | null;
  chap_secret_lte?: string | null;
  chap_secret_not?: string | null;
  chap_secret_not_contains?: string | null;
  chap_secret_not_ends_with?: string | null;
  chap_secret_not_in?: string[] | null;
  chap_secret_not_starts_with?: string | null;
  chap_secret_starts_with?: string | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  external_use?: boolean | null;
  external_use_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;

  /** @format double */
  io_size?: number | null;

  /** @format double */
  io_size_gt?: number | null;

  /** @format double */
  io_size_gte?: number | null;
  io_size_in?: number[] | null;

  /** @format double */
  io_size_lt?: number | null;

  /** @format double */
  io_size_lte?: number | null;

  /** @format double */
  io_size_not?: number | null;
  io_size_not_in?: number[] | null;

  /** @format double */
  iops?: number | null;

  /** @format double */
  iops_gt?: number | null;

  /** @format double */
  iops_gte?: number | null;
  iops_in?: number[] | null;

  /** @format double */
  iops_lt?: number | null;

  /** @format double */
  iops_lte?: number | null;

  /** @format double */
  iops_max?: number | null;

  /** @format double */
  iops_max_gt?: number | null;

  /** @format double */
  iops_max_gte?: number | null;
  iops_max_in?: number[] | null;

  /** @format double */
  iops_max_length?: number | null;

  /** @format double */
  iops_max_length_gt?: number | null;

  /** @format double */
  iops_max_length_gte?: number | null;
  iops_max_length_in?: number[] | null;

  /** @format double */
  iops_max_length_lt?: number | null;

  /** @format double */
  iops_max_length_lte?: number | null;

  /** @format double */
  iops_max_length_not?: number | null;
  iops_max_length_not_in?: number[] | null;

  /** @format double */
  iops_max_lt?: number | null;

  /** @format double */
  iops_max_lte?: number | null;

  /** @format double */
  iops_max_not?: number | null;
  iops_max_not_in?: number[] | null;

  /** @format double */
  iops_not?: number | null;
  iops_not_in?: number[] | null;

  /** @format double */
  iops_rd?: number | null;

  /** @format double */
  iops_rd_gt?: number | null;

  /** @format double */
  iops_rd_gte?: number | null;
  iops_rd_in?: number[] | null;

  /** @format double */
  iops_rd_lt?: number | null;

  /** @format double */
  iops_rd_lte?: number | null;

  /** @format double */
  iops_rd_max?: number | null;

  /** @format double */
  iops_rd_max_gt?: number | null;

  /** @format double */
  iops_rd_max_gte?: number | null;
  iops_rd_max_in?: number[] | null;

  /** @format double */
  iops_rd_max_length?: number | null;

  /** @format double */
  iops_rd_max_length_gt?: number | null;

  /** @format double */
  iops_rd_max_length_gte?: number | null;
  iops_rd_max_length_in?: number[] | null;

  /** @format double */
  iops_rd_max_length_lt?: number | null;

  /** @format double */
  iops_rd_max_length_lte?: number | null;

  /** @format double */
  iops_rd_max_length_not?: number | null;
  iops_rd_max_length_not_in?: number[] | null;

  /** @format double */
  iops_rd_max_lt?: number | null;

  /** @format double */
  iops_rd_max_lte?: number | null;

  /** @format double */
  iops_rd_max_not?: number | null;
  iops_rd_max_not_in?: number[] | null;

  /** @format double */
  iops_rd_not?: number | null;
  iops_rd_not_in?: number[] | null;

  /** @format double */
  iops_wr?: number | null;

  /** @format double */
  iops_wr_gt?: number | null;

  /** @format double */
  iops_wr_gte?: number | null;
  iops_wr_in?: number[] | null;

  /** @format double */
  iops_wr_lt?: number | null;

  /** @format double */
  iops_wr_lte?: number | null;

  /** @format double */
  iops_wr_max?: number | null;

  /** @format double */
  iops_wr_max_gt?: number | null;

  /** @format double */
  iops_wr_max_gte?: number | null;
  iops_wr_max_in?: number[] | null;

  /** @format double */
  iops_wr_max_length?: number | null;

  /** @format double */
  iops_wr_max_length_gt?: number | null;

  /** @format double */
  iops_wr_max_length_gte?: number | null;
  iops_wr_max_length_in?: number[] | null;

  /** @format double */
  iops_wr_max_length_lt?: number | null;

  /** @format double */
  iops_wr_max_length_lte?: number | null;

  /** @format double */
  iops_wr_max_length_not?: number | null;
  iops_wr_max_length_not_in?: number[] | null;

  /** @format double */
  iops_wr_max_lt?: number | null;

  /** @format double */
  iops_wr_max_lte?: number | null;

  /** @format double */
  iops_wr_max_not?: number | null;
  iops_wr_max_not_in?: number[] | null;

  /** @format double */
  iops_wr_not?: number | null;
  iops_wr_not_in?: number[] | null;
  ip_whitelist?: string | null;
  ip_whitelist_contains?: string | null;
  ip_whitelist_ends_with?: string | null;
  ip_whitelist_gt?: string | null;
  ip_whitelist_gte?: string | null;
  ip_whitelist_in?: string[] | null;
  ip_whitelist_lt?: string | null;
  ip_whitelist_lte?: string | null;
  ip_whitelist_not?: string | null;
  ip_whitelist_not_contains?: string | null;
  ip_whitelist_not_ends_with?: string | null;
  ip_whitelist_not_in?: string[] | null;
  ip_whitelist_not_starts_with?: string | null;
  ip_whitelist_starts_with?: string | null;
  iqn_name?: string | null;
  iqn_name_contains?: string | null;
  iqn_name_ends_with?: string | null;
  iqn_name_gt?: string | null;
  iqn_name_gte?: string | null;
  iqn_name_in?: string[] | null;
  iqn_name_lt?: string | null;
  iqn_name_lte?: string | null;
  iqn_name_not?: string | null;
  iqn_name_not_contains?: string | null;
  iqn_name_not_ends_with?: string | null;
  iqn_name_not_in?: string[] | null;
  iqn_name_not_starts_with?: string | null;
  iqn_name_starts_with?: string | null;
  iqn_whitelist?: string | null;
  iqn_whitelist_contains?: string | null;
  iqn_whitelist_ends_with?: string | null;
  iqn_whitelist_gt?: string | null;
  iqn_whitelist_gte?: string | null;
  iqn_whitelist_in?: string[] | null;
  iqn_whitelist_lt?: string | null;
  iqn_whitelist_lte?: string | null;
  iqn_whitelist_not?: string | null;
  iqn_whitelist_not_contains?: string | null;
  iqn_whitelist_not_ends_with?: string | null;
  iqn_whitelist_not_in?: string[] | null;
  iqn_whitelist_not_starts_with?: string | null;
  iqn_whitelist_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  luns_every?: IscsiLunWhereInput | null;
  luns_none?: IscsiLunWhereInput | null;
  luns_some?: IscsiLunWhereInput | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: IscsiTargetWhereInput[] | null;
  OR?: IscsiTargetWhereInput[] | null;

  /** @format double */
  replica_num?: number | null;

  /** @format double */
  replica_num_gt?: number | null;

  /** @format double */
  replica_num_gte?: number | null;
  replica_num_in?: number[] | null;

  /** @format double */
  replica_num_lt?: number | null;

  /** @format double */
  replica_num_lte?: number | null;

  /** @format double */
  replica_num_not?: number | null;
  replica_num_not_in?: number[] | null;

  /** @format double */
  stripe_num?: number | null;

  /** @format double */
  stripe_num_gt?: number | null;

  /** @format double */
  stripe_num_gte?: number | null;
  stripe_num_in?: number[] | null;

  /** @format double */
  stripe_num_lt?: number | null;

  /** @format double */
  stripe_num_lte?: number | null;

  /** @format double */
  stripe_num_not?: number | null;
  stripe_num_not_in?: number[] | null;

  /** @format double */
  stripe_size?: number | null;

  /** @format double */
  stripe_size_gt?: number | null;

  /** @format double */
  stripe_size_gte?: number | null;
  stripe_size_in?: number[] | null;

  /** @format double */
  stripe_size_lt?: number | null;

  /** @format double */
  stripe_size_lte?: number | null;

  /** @format double */
  stripe_size_not?: number | null;
  stripe_size_not_in?: number[] | null;
  thin_provision?: boolean | null;
  thin_provision_not?: boolean | null;
}

export interface LabelWhereInput {
  AND?: LabelWhereInput[] | null;

  /** @format double */
  cluster_num?: number | null;

  /** @format double */
  cluster_num_gt?: number | null;

  /** @format double */
  cluster_num_gte?: number | null;
  cluster_num_in?: number[] | null;

  /** @format double */
  cluster_num_lt?: number | null;

  /** @format double */
  cluster_num_lte?: number | null;

  /** @format double */
  cluster_num_not?: number | null;
  cluster_num_not_in?: number[] | null;
  clusters_every?: ClusterWhereInput | null;
  clusters_none?: ClusterWhereInput | null;
  clusters_some?: ClusterWhereInput | null;

  /** @format double */
  consistency_group_num?: number | null;

  /** @format double */
  consistency_group_num_gt?: number | null;

  /** @format double */
  consistency_group_num_gte?: number | null;
  consistency_group_num_in?: number[] | null;

  /** @format double */
  consistency_group_num_lt?: number | null;

  /** @format double */
  consistency_group_num_lte?: number | null;

  /** @format double */
  consistency_group_num_not?: number | null;
  consistency_group_num_not_in?: number[] | null;

  /** @format double */
  consistency_group_snapshot_num?: number | null;

  /** @format double */
  consistency_group_snapshot_num_gt?: number | null;

  /** @format double */
  consistency_group_snapshot_num_gte?: number | null;
  consistency_group_snapshot_num_in?: number[] | null;

  /** @format double */
  consistency_group_snapshot_num_lt?: number | null;

  /** @format double */
  consistency_group_snapshot_num_lte?: number | null;

  /** @format double */
  consistency_group_snapshot_num_not?: number | null;
  consistency_group_snapshot_num_not_in?: number[] | null;
  consistency_group_snapshots_every?: ConsistencyGroupSnapshotWhereInput | null;
  consistency_group_snapshots_none?: ConsistencyGroupSnapshotWhereInput | null;
  consistency_group_snapshots_some?: ConsistencyGroupSnapshotWhereInput | null;
  consistency_groups_every?: ConsistencyGroupWhereInput | null;
  consistency_groups_none?: ConsistencyGroupWhereInput | null;
  consistency_groups_some?: ConsistencyGroupWhereInput | null;
  createdAt?: string | null;
  createdAt_gt?: string | null;
  createdAt_gte?: string | null;
  createdAt_in?: string[] | null;
  createdAt_lt?: string | null;
  createdAt_lte?: string | null;
  createdAt_not?: string | null;
  createdAt_not_in?: string[] | null;

  /** @format double */
  datacenter_num?: number | null;

  /** @format double */
  datacenter_num_gt?: number | null;

  /** @format double */
  datacenter_num_gte?: number | null;
  datacenter_num_in?: number[] | null;

  /** @format double */
  datacenter_num_lt?: number | null;

  /** @format double */
  datacenter_num_lte?: number | null;

  /** @format double */
  datacenter_num_not?: number | null;
  datacenter_num_not_in?: number[] | null;
  datacenters_every?: DatacenterWhereInput | null;
  datacenters_none?: DatacenterWhereInput | null;
  datacenters_some?: DatacenterWhereInput | null;

  /** @format double */
  disk_num?: number | null;

  /** @format double */
  disk_num_gt?: number | null;

  /** @format double */
  disk_num_gte?: number | null;
  disk_num_in?: number[] | null;

  /** @format double */
  disk_num_lt?: number | null;

  /** @format double */
  disk_num_lte?: number | null;

  /** @format double */
  disk_num_not?: number | null;
  disk_num_not_in?: number[] | null;
  disks_every?: DiskWhereInput | null;
  disks_none?: DiskWhereInput | null;
  disks_some?: DiskWhereInput | null;

  /** @format double */
  elf_image_num?: number | null;

  /** @format double */
  elf_image_num_gt?: number | null;

  /** @format double */
  elf_image_num_gte?: number | null;
  elf_image_num_in?: number[] | null;

  /** @format double */
  elf_image_num_lt?: number | null;

  /** @format double */
  elf_image_num_lte?: number | null;

  /** @format double */
  elf_image_num_not?: number | null;
  elf_image_num_not_in?: number[] | null;
  elf_images_every?: ElfImageWhereInput | null;
  elf_images_none?: ElfImageWhereInput | null;
  elf_images_some?: ElfImageWhereInput | null;

  /** @format double */
  host_num?: number | null;

  /** @format double */
  host_num_gt?: number | null;

  /** @format double */
  host_num_gte?: number | null;
  host_num_in?: number[] | null;

  /** @format double */
  host_num_lt?: number | null;

  /** @format double */
  host_num_lte?: number | null;

  /** @format double */
  host_num_not?: number | null;
  host_num_not_in?: number[] | null;
  hosts_every?: HostWhereInput | null;
  hosts_none?: HostWhereInput | null;
  hosts_some?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;

  /** @format double */
  iscsi_lun_num?: number | null;

  /** @format double */
  iscsi_lun_num_gt?: number | null;

  /** @format double */
  iscsi_lun_num_gte?: number | null;
  iscsi_lun_num_in?: number[] | null;

  /** @format double */
  iscsi_lun_num_lt?: number | null;

  /** @format double */
  iscsi_lun_num_lte?: number | null;

  /** @format double */
  iscsi_lun_num_not?: number | null;
  iscsi_lun_num_not_in?: number[] | null;

  /** @format double */
  iscsi_lun_snapshot_num?: number | null;

  /** @format double */
  iscsi_lun_snapshot_num_gt?: number | null;

  /** @format double */
  iscsi_lun_snapshot_num_gte?: number | null;
  iscsi_lun_snapshot_num_in?: number[] | null;

  /** @format double */
  iscsi_lun_snapshot_num_lt?: number | null;

  /** @format double */
  iscsi_lun_snapshot_num_lte?: number | null;

  /** @format double */
  iscsi_lun_snapshot_num_not?: number | null;
  iscsi_lun_snapshot_num_not_in?: number[] | null;
  iscsi_lun_snapshots_every?: IscsiLunSnapshotWhereInput | null;
  iscsi_lun_snapshots_none?: IscsiLunSnapshotWhereInput | null;
  iscsi_lun_snapshots_some?: IscsiLunSnapshotWhereInput | null;
  iscsi_luns_every?: IscsiLunWhereInput | null;
  iscsi_luns_none?: IscsiLunWhereInput | null;
  iscsi_luns_some?: IscsiLunWhereInput | null;

  /** @format double */
  iscsi_target_num?: number | null;

  /** @format double */
  iscsi_target_num_gt?: number | null;

  /** @format double */
  iscsi_target_num_gte?: number | null;
  iscsi_target_num_in?: number[] | null;

  /** @format double */
  iscsi_target_num_lt?: number | null;

  /** @format double */
  iscsi_target_num_lte?: number | null;

  /** @format double */
  iscsi_target_num_not?: number | null;
  iscsi_target_num_not_in?: number[] | null;
  iscsi_targets_every?: IscsiTargetWhereInput | null;
  iscsi_targets_none?: IscsiTargetWhereInput | null;
  iscsi_targets_some?: IscsiTargetWhereInput | null;
  key?: string | null;
  key_contains?: string | null;
  key_ends_with?: string | null;
  key_gt?: string | null;
  key_gte?: string | null;
  key_in?: string[] | null;
  key_lt?: string | null;
  key_lte?: string | null;
  key_not?: string | null;
  key_not_contains?: string | null;
  key_not_ends_with?: string | null;
  key_not_in?: string[] | null;
  key_not_starts_with?: string | null;
  key_starts_with?: string | null;

  /** @format double */
  namespace_group_num?: number | null;

  /** @format double */
  namespace_group_num_gt?: number | null;

  /** @format double */
  namespace_group_num_gte?: number | null;
  namespace_group_num_in?: number[] | null;

  /** @format double */
  namespace_group_num_lt?: number | null;

  /** @format double */
  namespace_group_num_lte?: number | null;

  /** @format double */
  namespace_group_num_not?: number | null;
  namespace_group_num_not_in?: number[] | null;
  namespace_groups_every?: NamespaceGroupWhereInput | null;
  namespace_groups_none?: NamespaceGroupWhereInput | null;
  namespace_groups_some?: NamespaceGroupWhereInput | null;

  /** @format double */
  nfs_export_num?: number | null;

  /** @format double */
  nfs_export_num_gt?: number | null;

  /** @format double */
  nfs_export_num_gte?: number | null;
  nfs_export_num_in?: number[] | null;

  /** @format double */
  nfs_export_num_lt?: number | null;

  /** @format double */
  nfs_export_num_lte?: number | null;

  /** @format double */
  nfs_export_num_not?: number | null;
  nfs_export_num_not_in?: number[] | null;
  nfs_exports_every?: NfsExportWhereInput | null;
  nfs_exports_none?: NfsExportWhereInput | null;
  nfs_exports_some?: NfsExportWhereInput | null;

  /** @format double */
  nfs_inode_num?: number | null;

  /** @format double */
  nfs_inode_num_gt?: number | null;

  /** @format double */
  nfs_inode_num_gte?: number | null;
  nfs_inode_num_in?: number[] | null;

  /** @format double */
  nfs_inode_num_lt?: number | null;

  /** @format double */
  nfs_inode_num_lte?: number | null;

  /** @format double */
  nfs_inode_num_not?: number | null;
  nfs_inode_num_not_in?: number[] | null;
  nfs_inodes_every?: NfsInodeWhereInput | null;
  nfs_inodes_none?: NfsInodeWhereInput | null;
  nfs_inodes_some?: NfsInodeWhereInput | null;

  /** @format double */
  nic_num?: number | null;

  /** @format double */
  nic_num_gt?: number | null;

  /** @format double */
  nic_num_gte?: number | null;
  nic_num_in?: number[] | null;

  /** @format double */
  nic_num_lt?: number | null;

  /** @format double */
  nic_num_lte?: number | null;

  /** @format double */
  nic_num_not?: number | null;
  nic_num_not_in?: number[] | null;
  nics_every?: NicWhereInput | null;
  nics_none?: NicWhereInput | null;
  nics_some?: NicWhereInput | null;
  NOT?: LabelWhereInput[] | null;

  /** @format double */
  nvmf_namespace_num?: number | null;

  /** @format double */
  nvmf_namespace_num_gt?: number | null;

  /** @format double */
  nvmf_namespace_num_gte?: number | null;
  nvmf_namespace_num_in?: number[] | null;

  /** @format double */
  nvmf_namespace_num_lt?: number | null;

  /** @format double */
  nvmf_namespace_num_lte?: number | null;

  /** @format double */
  nvmf_namespace_num_not?: number | null;
  nvmf_namespace_num_not_in?: number[] | null;

  /** @format double */
  nvmf_namespace_snapshot_num?: number | null;

  /** @format double */
  nvmf_namespace_snapshot_num_gt?: number | null;

  /** @format double */
  nvmf_namespace_snapshot_num_gte?: number | null;
  nvmf_namespace_snapshot_num_in?: number[] | null;

  /** @format double */
  nvmf_namespace_snapshot_num_lt?: number | null;

  /** @format double */
  nvmf_namespace_snapshot_num_lte?: number | null;

  /** @format double */
  nvmf_namespace_snapshot_num_not?: number | null;
  nvmf_namespace_snapshot_num_not_in?: number[] | null;
  nvmf_namespace_snapshots_every?: NvmfNamespaceSnapshotWhereInput | null;
  nvmf_namespace_snapshots_none?: NvmfNamespaceSnapshotWhereInput | null;
  nvmf_namespace_snapshots_some?: NvmfNamespaceSnapshotWhereInput | null;
  nvmf_namespaces_every?: NvmfNamespaceWhereInput | null;
  nvmf_namespaces_none?: NvmfNamespaceWhereInput | null;
  nvmf_namespaces_some?: NvmfNamespaceWhereInput | null;

  /** @format double */
  nvmf_subsystem_num?: number | null;

  /** @format double */
  nvmf_subsystem_num_gt?: number | null;

  /** @format double */
  nvmf_subsystem_num_gte?: number | null;
  nvmf_subsystem_num_in?: number[] | null;

  /** @format double */
  nvmf_subsystem_num_lt?: number | null;

  /** @format double */
  nvmf_subsystem_num_lte?: number | null;

  /** @format double */
  nvmf_subsystem_num_not?: number | null;
  nvmf_subsystem_num_not_in?: number[] | null;
  nvmf_subsystems_every?: NvmfSubsystemWhereInput | null;
  nvmf_subsystems_none?: NvmfSubsystemWhereInput | null;
  nvmf_subsystems_some?: NvmfSubsystemWhereInput | null;
  OR?: LabelWhereInput[] | null;

  /** @format double */
  system_vlan_num?: number | null;

  /** @format double */
  system_vlan_num_gt?: number | null;

  /** @format double */
  system_vlan_num_gte?: number | null;
  system_vlan_num_in?: number[] | null;

  /** @format double */
  system_vlan_num_lt?: number | null;

  /** @format double */
  system_vlan_num_lte?: number | null;

  /** @format double */
  system_vlan_num_not?: number | null;
  system_vlan_num_not_in?: number[] | null;

  /** @format double */
  total_num?: number | null;

  /** @format double */
  total_num_gt?: number | null;

  /** @format double */
  total_num_gte?: number | null;
  total_num_in?: number[] | null;

  /** @format double */
  total_num_lt?: number | null;

  /** @format double */
  total_num_lte?: number | null;

  /** @format double */
  total_num_not?: number | null;
  total_num_not_in?: number[] | null;
  value?: string | null;
  value_contains?: string | null;
  value_ends_with?: string | null;
  value_gt?: string | null;
  value_gte?: string | null;
  value_in?: string[] | null;
  value_lt?: string | null;
  value_lte?: string | null;
  value_not?: string | null;
  value_not_contains?: string | null;
  value_not_ends_with?: string | null;
  value_not_in?: string[] | null;
  value_not_starts_with?: string | null;
  value_starts_with?: string | null;

  /** @format double */
  vds_num?: number | null;

  /** @format double */
  vds_num_gt?: number | null;

  /** @format double */
  vds_num_gte?: number | null;
  vds_num_in?: number[] | null;

  /** @format double */
  vds_num_lt?: number | null;

  /** @format double */
  vds_num_lte?: number | null;

  /** @format double */
  vds_num_not?: number | null;
  vds_num_not_in?: number[] | null;
  vdses_every?: VdsWhereInput | null;
  vdses_none?: VdsWhereInput | null;
  vdses_some?: VdsWhereInput | null;
  vlans_every?: VlanWhereInput | null;
  vlans_none?: VlanWhereInput | null;
  vlans_some?: VlanWhereInput | null;

  /** @format double */
  vm_num?: number | null;

  /** @format double */
  vm_num_gt?: number | null;

  /** @format double */
  vm_num_gte?: number | null;
  vm_num_in?: number[] | null;

  /** @format double */
  vm_num_lt?: number | null;

  /** @format double */
  vm_num_lte?: number | null;

  /** @format double */
  vm_num_not?: number | null;
  vm_num_not_in?: number[] | null;

  /** @format double */
  vm_snapshot_num?: number | null;

  /** @format double */
  vm_snapshot_num_gt?: number | null;

  /** @format double */
  vm_snapshot_num_gte?: number | null;
  vm_snapshot_num_in?: number[] | null;

  /** @format double */
  vm_snapshot_num_lt?: number | null;

  /** @format double */
  vm_snapshot_num_lte?: number | null;

  /** @format double */
  vm_snapshot_num_not?: number | null;
  vm_snapshot_num_not_in?: number[] | null;
  vm_snapshots_every?: VmSnapshotWhereInput | null;
  vm_snapshots_none?: VmSnapshotWhereInput | null;
  vm_snapshots_some?: VmSnapshotWhereInput | null;

  /** @format double */
  vm_template_num?: number | null;

  /** @format double */
  vm_template_num_gt?: number | null;

  /** @format double */
  vm_template_num_gte?: number | null;
  vm_template_num_in?: number[] | null;

  /** @format double */
  vm_template_num_lt?: number | null;

  /** @format double */
  vm_template_num_lte?: number | null;

  /** @format double */
  vm_template_num_not?: number | null;
  vm_template_num_not_in?: number[] | null;
  vm_templates_every?: VmTemplateWhereInput | null;
  vm_templates_none?: VmTemplateWhereInput | null;
  vm_templates_some?: VmTemplateWhereInput | null;

  /** @format double */
  vm_vlan_num?: number | null;

  /** @format double */
  vm_vlan_num_gt?: number | null;

  /** @format double */
  vm_vlan_num_gte?: number | null;
  vm_vlan_num_in?: number[] | null;

  /** @format double */
  vm_vlan_num_lt?: number | null;

  /** @format double */
  vm_vlan_num_lte?: number | null;

  /** @format double */
  vm_vlan_num_not?: number | null;
  vm_vlan_num_not_in?: number[] | null;

  /** @format double */
  vm_volume_num?: number | null;

  /** @format double */
  vm_volume_num_gt?: number | null;

  /** @format double */
  vm_volume_num_gte?: number | null;
  vm_volume_num_in?: number[] | null;

  /** @format double */
  vm_volume_num_lt?: number | null;

  /** @format double */
  vm_volume_num_lte?: number | null;

  /** @format double */
  vm_volume_num_not?: number | null;
  vm_volume_num_not_in?: number[] | null;
  vm_volumes_every?: VmVolumeWhereInput | null;
  vm_volumes_none?: VmVolumeWhereInput | null;
  vm_volumes_some?: VmVolumeWhereInput | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
}

export interface DatacenterWhereInput {
  AND?: DatacenterWhereInput[] | null;

  /** @format double */
  cluster_num?: number | null;

  /** @format double */
  cluster_num_gt?: number | null;

  /** @format double */
  cluster_num_gte?: number | null;
  cluster_num_in?: number[] | null;

  /** @format double */
  cluster_num_lt?: number | null;

  /** @format double */
  cluster_num_lte?: number | null;

  /** @format double */
  cluster_num_not?: number | null;
  cluster_num_not_in?: number[] | null;
  clusters_every?: ClusterWhereInput | null;
  clusters_none?: ClusterWhereInput | null;
  clusters_some?: ClusterWhereInput | null;

  /** @format double */
  failure_data_space?: number | null;

  /** @format double */
  failure_data_space_gt?: number | null;

  /** @format double */
  failure_data_space_gte?: number | null;
  failure_data_space_in?: number[] | null;

  /** @format double */
  failure_data_space_lt?: number | null;

  /** @format double */
  failure_data_space_lte?: number | null;

  /** @format double */
  failure_data_space_not?: number | null;
  failure_data_space_not_in?: number[] | null;

  /** @format double */
  host_num?: number | null;

  /** @format double */
  host_num_gt?: number | null;

  /** @format double */
  host_num_gte?: number | null;
  host_num_in?: number[] | null;

  /** @format double */
  host_num_lt?: number | null;

  /** @format double */
  host_num_lte?: number | null;

  /** @format double */
  host_num_not?: number | null;
  host_num_not_in?: number[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: DatacenterWhereInput[] | null;
  OR?: DatacenterWhereInput[] | null;
  organization?: OrganizationWhereInput | null;

  /** @format double */
  total_cpu_hz?: number | null;

  /** @format double */
  total_cpu_hz_gt?: number | null;

  /** @format double */
  total_cpu_hz_gte?: number | null;
  total_cpu_hz_in?: number[] | null;

  /** @format double */
  total_cpu_hz_lt?: number | null;

  /** @format double */
  total_cpu_hz_lte?: number | null;

  /** @format double */
  total_cpu_hz_not?: number | null;
  total_cpu_hz_not_in?: number[] | null;

  /** @format double */
  total_data_capacity?: number | null;

  /** @format double */
  total_data_capacity_gt?: number | null;

  /** @format double */
  total_data_capacity_gte?: number | null;
  total_data_capacity_in?: number[] | null;

  /** @format double */
  total_data_capacity_lt?: number | null;

  /** @format double */
  total_data_capacity_lte?: number | null;

  /** @format double */
  total_data_capacity_not?: number | null;
  total_data_capacity_not_in?: number[] | null;

  /** @format double */
  total_memory_bytes?: number | null;

  /** @format double */
  total_memory_bytes_gt?: number | null;

  /** @format double */
  total_memory_bytes_gte?: number | null;
  total_memory_bytes_in?: number[] | null;

  /** @format double */
  total_memory_bytes_lt?: number | null;

  /** @format double */
  total_memory_bytes_lte?: number | null;

  /** @format double */
  total_memory_bytes_not?: number | null;
  total_memory_bytes_not_in?: number[] | null;

  /** @format double */
  used_cpu_hz?: number | null;

  /** @format double */
  used_cpu_hz_gt?: number | null;

  /** @format double */
  used_cpu_hz_gte?: number | null;
  used_cpu_hz_in?: number[] | null;

  /** @format double */
  used_cpu_hz_lt?: number | null;

  /** @format double */
  used_cpu_hz_lte?: number | null;

  /** @format double */
  used_cpu_hz_not?: number | null;
  used_cpu_hz_not_in?: number[] | null;

  /** @format double */
  used_data_space?: number | null;

  /** @format double */
  used_data_space_gt?: number | null;

  /** @format double */
  used_data_space_gte?: number | null;
  used_data_space_in?: number[] | null;

  /** @format double */
  used_data_space_lt?: number | null;

  /** @format double */
  used_data_space_lte?: number | null;

  /** @format double */
  used_data_space_not?: number | null;
  used_data_space_not_in?: number[] | null;

  /** @format double */
  used_memory_bytes?: number | null;

  /** @format double */
  used_memory_bytes_gt?: number | null;

  /** @format double */
  used_memory_bytes_gte?: number | null;
  used_memory_bytes_in?: number[] | null;

  /** @format double */
  used_memory_bytes_lt?: number | null;

  /** @format double */
  used_memory_bytes_lte?: number | null;

  /** @format double */
  used_memory_bytes_not?: number | null;
  used_memory_bytes_not_in?: number[] | null;

  /** @format double */
  vm_num?: number | null;

  /** @format double */
  vm_num_gt?: number | null;

  /** @format double */
  vm_num_gte?: number | null;
  vm_num_in?: number[] | null;

  /** @format double */
  vm_num_lt?: number | null;

  /** @format double */
  vm_num_lte?: number | null;

  /** @format double */
  vm_num_not?: number | null;
  vm_num_not_in?: number[] | null;
}

export interface OrganizationWhereInput {
  AND?: OrganizationWhereInput[] | null;
  datacenters_every?: DatacenterWhereInput | null;
  datacenters_none?: DatacenterWhereInput | null;
  datacenters_some?: DatacenterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: OrganizationWhereInput[] | null;
  OR?: OrganizationWhereInput[] | null;
}

export interface DiskWhereInput {
  AND?: DiskWhereInput[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  firmware?: string | null;
  firmware_contains?: string | null;
  firmware_ends_with?: string | null;
  firmware_gt?: string | null;
  firmware_gte?: string | null;
  firmware_in?: string[] | null;
  firmware_lt?: string | null;
  firmware_lte?: string | null;
  firmware_not?: string | null;
  firmware_not_contains?: string | null;
  firmware_not_ends_with?: string | null;
  firmware_not_in?: string[] | null;
  firmware_not_starts_with?: string | null;
  firmware_starts_with?: string | null;
  function?: DiskFunction | null;
  function_in?: DiskFunction[] | null;
  function_not?: DiskFunction | null;
  function_not_in?: DiskFunction[] | null;
  health_status?: DiskHealthStatus | null;
  health_status_in?: DiskHealthStatus[] | null;
  health_status_not?: DiskHealthStatus | null;
  health_status_not_in?: DiskHealthStatus[] | null;
  healthy?: boolean | null;
  healthy_not?: boolean | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  model?: string | null;
  model_contains?: string | null;
  model_ends_with?: string | null;
  model_gt?: string | null;
  model_gte?: string | null;
  model_in?: string[] | null;
  model_lt?: string | null;
  model_lte?: string | null;
  model_not?: string | null;
  model_not_contains?: string | null;
  model_not_ends_with?: string | null;
  model_not_in?: string[] | null;
  model_not_starts_with?: string | null;
  model_starts_with?: string | null;
  mounted?: boolean | null;
  mounted_not?: boolean | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: DiskWhereInput[] | null;

  /** @format double */
  numa_node?: number | null;

  /** @format double */
  numa_node_gt?: number | null;

  /** @format double */
  numa_node_gte?: number | null;
  numa_node_in?: number[] | null;

  /** @format double */
  numa_node_lt?: number | null;

  /** @format double */
  numa_node_lte?: number | null;

  /** @format double */
  numa_node_not?: number | null;
  numa_node_not_in?: number[] | null;
  offline?: boolean | null;
  offline_not?: boolean | null;
  OR?: DiskWhereInput[] | null;
  path?: string | null;
  path_contains?: string | null;
  path_ends_with?: string | null;
  path_gt?: string | null;
  path_gte?: string | null;
  path_in?: string[] | null;
  path_lt?: string | null;
  path_lte?: string | null;
  path_not?: string | null;
  path_not_contains?: string | null;
  path_not_ends_with?: string | null;
  path_not_in?: string[] | null;
  path_not_starts_with?: string | null;
  path_starts_with?: string | null;
  persistent_memory_type?: string | null;
  persistent_memory_type_contains?: string | null;
  persistent_memory_type_ends_with?: string | null;
  persistent_memory_type_gt?: string | null;
  persistent_memory_type_gte?: string | null;
  persistent_memory_type_in?: string[] | null;
  persistent_memory_type_lt?: string | null;
  persistent_memory_type_lte?: string | null;
  persistent_memory_type_not?: string | null;
  persistent_memory_type_not_contains?: string | null;
  persistent_memory_type_not_ends_with?: string | null;
  persistent_memory_type_not_in?: string[] | null;
  persistent_memory_type_not_starts_with?: string | null;
  persistent_memory_type_starts_with?: string | null;

  /** @format double */
  physical_slot_on_brick?: number | null;

  /** @format double */
  physical_slot_on_brick_gt?: number | null;

  /** @format double */
  physical_slot_on_brick_gte?: number | null;
  physical_slot_on_brick_in?: number[] | null;

  /** @format double */
  physical_slot_on_brick_lt?: number | null;

  /** @format double */
  physical_slot_on_brick_lte?: number | null;

  /** @format double */
  physical_slot_on_brick_not?: number | null;
  physical_slot_on_brick_not_in?: number[] | null;
  pmem_dimms_every?: PmemDimmWhereInput | null;
  pmem_dimms_none?: PmemDimmWhereInput | null;
  pmem_dimms_some?: PmemDimmWhereInput | null;
  recommended_usage?: DiskUsage | null;
  recommended_usage_in?: DiskUsage[] | null;
  recommended_usage_not?: DiskUsage | null;
  recommended_usage_not_in?: DiskUsage[] | null;

  /** @format double */
  remaining_life_percent?: number | null;

  /** @format double */
  remaining_life_percent_gt?: number | null;

  /** @format double */
  remaining_life_percent_gte?: number | null;
  remaining_life_percent_in?: number[] | null;

  /** @format double */
  remaining_life_percent_lt?: number | null;

  /** @format double */
  remaining_life_percent_lte?: number | null;

  /** @format double */
  remaining_life_percent_not?: number | null;
  remaining_life_percent_not_in?: number[] | null;
  serial?: string | null;
  serial_contains?: string | null;
  serial_ends_with?: string | null;
  serial_gt?: string | null;
  serial_gte?: string | null;
  serial_in?: string[] | null;
  serial_lt?: string | null;
  serial_lte?: string | null;
  serial_not?: string | null;
  serial_not_contains?: string | null;
  serial_not_ends_with?: string | null;
  serial_not_in?: string[] | null;
  serial_not_starts_with?: string | null;
  serial_starts_with?: string | null;

  /** @format double */
  size?: number | null;

  /** @format double */
  size_gt?: number | null;

  /** @format double */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format double */
  size_lt?: number | null;

  /** @format double */
  size_lte?: number | null;

  /** @format double */
  size_not?: number | null;
  size_not_in?: number[] | null;
  type?: DiskType | null;
  type_in?: DiskType[] | null;
  type_not?: DiskType | null;
  type_not_in?: DiskType[] | null;
  usage?: DiskUsage | null;
  usage_in?: DiskUsage[] | null;
  usage_not?: DiskUsage | null;
  usage_not_in?: DiskUsage[] | null;
  usage_status?: DiskUsageStatus | null;
  usage_status_in?: DiskUsageStatus[] | null;
  usage_status_not?: DiskUsageStatus | null;
  usage_status_not_in?: DiskUsageStatus[] | null;
}

export type DiskFunction = "CACHE" | "DATA" | "SMTX_SYSTEM";

export type DiskHealthStatus = "HEALTHY" | "SMART_FAILED" | "SUBHEALTHY" | "UNHEALTHY";

export interface HostWhereInput {
  access_ip?: string | null;
  access_ip_contains?: string | null;
  access_ip_ends_with?: string | null;
  access_ip_gt?: string | null;
  access_ip_gte?: string | null;
  access_ip_in?: string[] | null;
  access_ip_lt?: string | null;
  access_ip_lte?: string | null;
  access_ip_not?: string | null;
  access_ip_not_contains?: string | null;
  access_ip_not_ends_with?: string | null;
  access_ip_not_in?: string[] | null;
  access_ip_not_starts_with?: string | null;
  access_ip_starts_with?: string | null;

  /** @format double */
  allocatable_memory_bytes?: number | null;

  /** @format double */
  allocatable_memory_bytes_gt?: number | null;

  /** @format double */
  allocatable_memory_bytes_gte?: number | null;
  allocatable_memory_bytes_in?: number[] | null;

  /** @format double */
  allocatable_memory_bytes_lt?: number | null;

  /** @format double */
  allocatable_memory_bytes_lte?: number | null;

  /** @format double */
  allocatable_memory_bytes_not?: number | null;
  allocatable_memory_bytes_not_in?: number[] | null;
  AND?: HostWhereInput[] | null;
  chunk_id?: string | null;
  chunk_id_contains?: string | null;
  chunk_id_ends_with?: string | null;
  chunk_id_gt?: string | null;
  chunk_id_gte?: string | null;
  chunk_id_in?: string[] | null;
  chunk_id_lt?: string | null;
  chunk_id_lte?: string | null;
  chunk_id_not?: string | null;
  chunk_id_not_contains?: string | null;
  chunk_id_not_ends_with?: string | null;
  chunk_id_not_in?: string[] | null;
  chunk_id_not_starts_with?: string | null;
  chunk_id_starts_with?: string | null;
  cluster?: ClusterWhereInput | null;
  cpu_brand?: string | null;
  cpu_brand_contains?: string | null;
  cpu_brand_ends_with?: string | null;
  cpu_brand_gt?: string | null;
  cpu_brand_gte?: string | null;
  cpu_brand_in?: string[] | null;
  cpu_brand_lt?: string | null;
  cpu_brand_lte?: string | null;
  cpu_brand_not?: string | null;
  cpu_brand_not_contains?: string | null;
  cpu_brand_not_ends_with?: string | null;
  cpu_brand_not_in?: string[] | null;
  cpu_brand_not_starts_with?: string | null;
  cpu_brand_starts_with?: string | null;
  cpu_fan_speed_unit?: CpuFanSpeedUnit | null;
  cpu_fan_speed_unit_in?: CpuFanSpeedUnit[] | null;
  cpu_fan_speed_unit_not?: CpuFanSpeedUnit | null;
  cpu_fan_speed_unit_not_in?: CpuFanSpeedUnit[] | null;

  /** @format double */
  cpu_hz_per_core?: number | null;

  /** @format double */
  cpu_hz_per_core_gt?: number | null;

  /** @format double */
  cpu_hz_per_core_gte?: number | null;
  cpu_hz_per_core_in?: number[] | null;

  /** @format double */
  cpu_hz_per_core_lt?: number | null;

  /** @format double */
  cpu_hz_per_core_lte?: number | null;

  /** @format double */
  cpu_hz_per_core_not?: number | null;
  cpu_hz_per_core_not_in?: number[] | null;
  cpu_model?: string | null;
  cpu_model_contains?: string | null;
  cpu_model_ends_with?: string | null;
  cpu_model_gt?: string | null;
  cpu_model_gte?: string | null;
  cpu_model_in?: string[] | null;
  cpu_model_lt?: string | null;
  cpu_model_lte?: string | null;
  cpu_model_not?: string | null;
  cpu_model_not_contains?: string | null;
  cpu_model_not_ends_with?: string | null;
  cpu_model_not_in?: string[] | null;
  cpu_model_not_starts_with?: string | null;
  cpu_model_starts_with?: string | null;
  data_ip?: string | null;
  data_ip_contains?: string | null;
  data_ip_ends_with?: string | null;
  data_ip_gt?: string | null;
  data_ip_gte?: string | null;
  data_ip_in?: string[] | null;
  data_ip_lt?: string | null;
  data_ip_lte?: string | null;
  data_ip_not?: string | null;
  data_ip_not_contains?: string | null;
  data_ip_not_ends_with?: string | null;
  data_ip_not_in?: string[] | null;
  data_ip_not_starts_with?: string | null;
  data_ip_starts_with?: string | null;
  disks_every?: DiskWhereInput | null;
  disks_none?: DiskWhereInput | null;
  disks_some?: DiskWhereInput | null;

  /** @format double */
  failure_data_space?: number | null;

  /** @format double */
  failure_data_space_gt?: number | null;

  /** @format double */
  failure_data_space_gte?: number | null;
  failure_data_space_in?: number[] | null;

  /** @format double */
  failure_data_space_lt?: number | null;

  /** @format double */
  failure_data_space_lte?: number | null;

  /** @format double */
  failure_data_space_not?: number | null;
  failure_data_space_not_in?: number[] | null;

  /** @format double */
  hdd_data_capacity?: number | null;

  /** @format double */
  hdd_data_capacity_gt?: number | null;

  /** @format double */
  hdd_data_capacity_gte?: number | null;
  hdd_data_capacity_in?: number[] | null;

  /** @format double */
  hdd_data_capacity_lt?: number | null;

  /** @format double */
  hdd_data_capacity_lte?: number | null;

  /** @format double */
  hdd_data_capacity_not?: number | null;
  hdd_data_capacity_not_in?: number[] | null;

  /** @format double */
  hdd_disk_count?: number | null;

  /** @format double */
  hdd_disk_count_gt?: number | null;

  /** @format double */
  hdd_disk_count_gte?: number | null;
  hdd_disk_count_in?: number[] | null;

  /** @format double */
  hdd_disk_count_lt?: number | null;

  /** @format double */
  hdd_disk_count_lte?: number | null;

  /** @format double */
  hdd_disk_count_not?: number | null;
  hdd_disk_count_not_in?: number[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  ipmi?: IpmiWhereInput | null;
  is_os_in_raid1?: boolean | null;
  is_os_in_raid1_not?: boolean | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  lsm_cap_disk_safe_umount?: boolean | null;
  lsm_cap_disk_safe_umount_not?: boolean | null;
  management_ip?: string | null;
  management_ip_contains?: string | null;
  management_ip_ends_with?: string | null;
  management_ip_gt?: string | null;
  management_ip_gte?: string | null;
  management_ip_in?: string[] | null;
  management_ip_lt?: string | null;
  management_ip_lte?: string | null;
  management_ip_not?: string | null;
  management_ip_not_contains?: string | null;
  management_ip_not_ends_with?: string | null;
  management_ip_not_in?: string[] | null;
  management_ip_not_starts_with?: string | null;
  management_ip_starts_with?: string | null;
  model?: string | null;
  model_contains?: string | null;
  model_ends_with?: string | null;
  model_gt?: string | null;
  model_gte?: string | null;
  model_in?: string[] | null;
  model_lt?: string | null;
  model_lte?: string | null;
  model_not?: string | null;
  model_not_contains?: string | null;
  model_not_ends_with?: string | null;
  model_not_in?: string[] | null;
  model_not_starts_with?: string | null;
  model_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nested_virtualization?: boolean | null;
  nested_virtualization_not?: boolean | null;

  /** @format double */
  nic_count?: number | null;

  /** @format double */
  nic_count_gt?: number | null;

  /** @format double */
  nic_count_gte?: number | null;
  nic_count_in?: number[] | null;

  /** @format double */
  nic_count_lt?: number | null;

  /** @format double */
  nic_count_lte?: number | null;

  /** @format double */
  nic_count_not?: number | null;
  nic_count_not_in?: number[] | null;
  nics_every?: NicWhereInput | null;
  nics_none?: NicWhereInput | null;
  nics_some?: NicWhereInput | null;
  node_topo_local_id?: string | null;
  node_topo_local_id_contains?: string | null;
  node_topo_local_id_ends_with?: string | null;
  node_topo_local_id_gt?: string | null;
  node_topo_local_id_gte?: string | null;
  node_topo_local_id_in?: string[] | null;
  node_topo_local_id_lt?: string | null;
  node_topo_local_id_lte?: string | null;
  node_topo_local_id_not?: string | null;
  node_topo_local_id_not_contains?: string | null;
  node_topo_local_id_not_ends_with?: string | null;
  node_topo_local_id_not_in?: string[] | null;
  node_topo_local_id_not_starts_with?: string | null;
  node_topo_local_id_starts_with?: string | null;
  NOT?: HostWhereInput[] | null;
  OR?: HostWhereInput[] | null;

  /** @format double */
  os_memory_bytes?: number | null;

  /** @format double */
  os_memory_bytes_gt?: number | null;

  /** @format double */
  os_memory_bytes_gte?: number | null;
  os_memory_bytes_in?: number[] | null;

  /** @format double */
  os_memory_bytes_lt?: number | null;

  /** @format double */
  os_memory_bytes_lte?: number | null;

  /** @format double */
  os_memory_bytes_not?: number | null;
  os_memory_bytes_not_in?: number[] | null;
  os_version?: string | null;
  os_version_contains?: string | null;
  os_version_ends_with?: string | null;
  os_version_gt?: string | null;
  os_version_gte?: string | null;
  os_version_in?: string[] | null;
  os_version_lt?: string | null;
  os_version_lte?: string | null;
  os_version_not?: string | null;
  os_version_not_contains?: string | null;
  os_version_not_ends_with?: string | null;
  os_version_not_in?: string[] | null;
  os_version_not_starts_with?: string | null;
  os_version_starts_with?: string | null;

  /** @format double */
  pmem_dimm_capacity?: number | null;

  /** @format double */
  pmem_dimm_capacity_gt?: number | null;

  /** @format double */
  pmem_dimm_capacity_gte?: number | null;
  pmem_dimm_capacity_in?: number[] | null;

  /** @format double */
  pmem_dimm_capacity_lt?: number | null;

  /** @format double */
  pmem_dimm_capacity_lte?: number | null;

  /** @format double */
  pmem_dimm_capacity_not?: number | null;
  pmem_dimm_capacity_not_in?: number[] | null;

  /** @format double */
  pmem_dimm_count?: number | null;

  /** @format double */
  pmem_dimm_count_gt?: number | null;

  /** @format double */
  pmem_dimm_count_gte?: number | null;
  pmem_dimm_count_in?: number[] | null;

  /** @format double */
  pmem_dimm_count_lt?: number | null;

  /** @format double */
  pmem_dimm_count_lte?: number | null;

  /** @format double */
  pmem_dimm_count_not?: number | null;
  pmem_dimm_count_not_in?: number[] | null;
  pmem_dimms_every?: PmemDimmWhereInput | null;
  pmem_dimms_none?: PmemDimmWhereInput | null;
  pmem_dimms_some?: PmemDimmWhereInput | null;

  /** @format double */
  pmem_disk_count?: number | null;

  /** @format double */
  pmem_disk_count_gt?: number | null;

  /** @format double */
  pmem_disk_count_gte?: number | null;
  pmem_disk_count_in?: number[] | null;

  /** @format double */
  pmem_disk_count_lt?: number | null;

  /** @format double */
  pmem_disk_count_lte?: number | null;

  /** @format double */
  pmem_disk_count_not?: number | null;
  pmem_disk_count_not_in?: number[] | null;

  /** @format double */
  provisioned_cpu_cores?: number | null;

  /** @format double */
  provisioned_cpu_cores_gt?: number | null;

  /** @format double */
  provisioned_cpu_cores_gte?: number | null;
  provisioned_cpu_cores_in?: number[] | null;

  /** @format double */
  provisioned_cpu_cores_lt?: number | null;

  /** @format double */
  provisioned_cpu_cores_lte?: number | null;

  /** @format double */
  provisioned_cpu_cores_not?: number | null;
  provisioned_cpu_cores_not_in?: number[] | null;

  /** @format double */
  provisioned_memory_bytes?: number | null;

  /** @format double */
  provisioned_memory_bytes_gt?: number | null;

  /** @format double */
  provisioned_memory_bytes_gte?: number | null;
  provisioned_memory_bytes_in?: number[] | null;

  /** @format double */
  provisioned_memory_bytes_lt?: number | null;

  /** @format double */
  provisioned_memory_bytes_lte?: number | null;

  /** @format double */
  provisioned_memory_bytes_not?: number | null;
  provisioned_memory_bytes_not_in?: number[] | null;

  /** @format double */
  running_pause_vm_memory_bytes?: number | null;

  /** @format double */
  running_pause_vm_memory_bytes_gt?: number | null;

  /** @format double */
  running_pause_vm_memory_bytes_gte?: number | null;
  running_pause_vm_memory_bytes_in?: number[] | null;

  /** @format double */
  running_pause_vm_memory_bytes_lt?: number | null;

  /** @format double */
  running_pause_vm_memory_bytes_lte?: number | null;

  /** @format double */
  running_pause_vm_memory_bytes_not?: number | null;
  running_pause_vm_memory_bytes_not_in?: number[] | null;

  /** @format double */
  running_vm_num?: number | null;

  /** @format double */
  running_vm_num_gt?: number | null;

  /** @format double */
  running_vm_num_gte?: number | null;
  running_vm_num_in?: number[] | null;

  /** @format double */
  running_vm_num_lt?: number | null;

  /** @format double */
  running_vm_num_lte?: number | null;

  /** @format double */
  running_vm_num_not?: number | null;
  running_vm_num_not_in?: number[] | null;

  /** @format double */
  scvm_cpu?: number | null;

  /** @format double */
  scvm_cpu_gt?: number | null;

  /** @format double */
  scvm_cpu_gte?: number | null;
  scvm_cpu_in?: number[] | null;

  /** @format double */
  scvm_cpu_lt?: number | null;

  /** @format double */
  scvm_cpu_lte?: number | null;

  /** @format double */
  scvm_cpu_not?: number | null;
  scvm_cpu_not_in?: number[] | null;

  /** @format double */
  scvm_memory?: number | null;

  /** @format double */
  scvm_memory_gt?: number | null;

  /** @format double */
  scvm_memory_gte?: number | null;
  scvm_memory_in?: number[] | null;

  /** @format double */
  scvm_memory_lt?: number | null;

  /** @format double */
  scvm_memory_lte?: number | null;

  /** @format double */
  scvm_memory_not?: number | null;
  scvm_memory_not_in?: number[] | null;
  scvm_name?: string | null;
  scvm_name_contains?: string | null;
  scvm_name_ends_with?: string | null;
  scvm_name_gt?: string | null;
  scvm_name_gte?: string | null;
  scvm_name_in?: string[] | null;
  scvm_name_lt?: string | null;
  scvm_name_lte?: string | null;
  scvm_name_not?: string | null;
  scvm_name_not_contains?: string | null;
  scvm_name_not_ends_with?: string | null;
  scvm_name_not_in?: string[] | null;
  scvm_name_not_starts_with?: string | null;
  scvm_name_starts_with?: string | null;
  serial?: string | null;
  serial_contains?: string | null;
  serial_ends_with?: string | null;
  serial_gt?: string | null;
  serial_gte?: string | null;
  serial_in?: string[] | null;
  serial_lt?: string | null;
  serial_lte?: string | null;
  serial_not?: string | null;
  serial_not_contains?: string | null;
  serial_not_ends_with?: string | null;
  serial_not_in?: string[] | null;
  serial_not_starts_with?: string | null;
  serial_starts_with?: string | null;

  /** @format double */
  ssd_data_capacity?: number | null;

  /** @format double */
  ssd_data_capacity_gt?: number | null;

  /** @format double */
  ssd_data_capacity_gte?: number | null;
  ssd_data_capacity_in?: number[] | null;

  /** @format double */
  ssd_data_capacity_lt?: number | null;

  /** @format double */
  ssd_data_capacity_lte?: number | null;

  /** @format double */
  ssd_data_capacity_not?: number | null;
  ssd_data_capacity_not_in?: number[] | null;

  /** @format double */
  ssd_disk_count?: number | null;

  /** @format double */
  ssd_disk_count_gt?: number | null;

  /** @format double */
  ssd_disk_count_gte?: number | null;
  ssd_disk_count_in?: number[] | null;

  /** @format double */
  ssd_disk_count_lt?: number | null;

  /** @format double */
  ssd_disk_count_lte?: number | null;

  /** @format double */
  ssd_disk_count_not?: number | null;
  ssd_disk_count_not_in?: number[] | null;
  state?: HostState | null;
  state_in?: HostState[] | null;
  state_not?: HostState | null;
  state_not_in?: HostState[] | null;
  status?: HostStatus | null;
  status_in?: HostStatus[] | null;
  status_not?: HostStatus | null;
  status_not_in?: HostStatus[] | null;

  /** @format double */
  stopped_vm_num?: number | null;

  /** @format double */
  stopped_vm_num_gt?: number | null;

  /** @format double */
  stopped_vm_num_gte?: number | null;
  stopped_vm_num_in?: number[] | null;

  /** @format double */
  stopped_vm_num_lt?: number | null;

  /** @format double */
  stopped_vm_num_lte?: number | null;

  /** @format double */
  stopped_vm_num_not?: number | null;
  stopped_vm_num_not_in?: number[] | null;

  /** @format double */
  suspended_vm_num?: number | null;

  /** @format double */
  suspended_vm_num_gt?: number | null;

  /** @format double */
  suspended_vm_num_gte?: number | null;
  suspended_vm_num_in?: number[] | null;

  /** @format double */
  suspended_vm_num_lt?: number | null;

  /** @format double */
  suspended_vm_num_lte?: number | null;

  /** @format double */
  suspended_vm_num_not?: number | null;
  suspended_vm_num_not_in?: number[] | null;

  /** @format double */
  total_cache_capacity?: number | null;

  /** @format double */
  total_cache_capacity_gt?: number | null;

  /** @format double */
  total_cache_capacity_gte?: number | null;
  total_cache_capacity_in?: number[] | null;

  /** @format double */
  total_cache_capacity_lt?: number | null;

  /** @format double */
  total_cache_capacity_lte?: number | null;

  /** @format double */
  total_cache_capacity_not?: number | null;
  total_cache_capacity_not_in?: number[] | null;

  /** @format double */
  total_cpu_cores?: number | null;

  /** @format double */
  total_cpu_cores_gt?: number | null;

  /** @format double */
  total_cpu_cores_gte?: number | null;
  total_cpu_cores_in?: number[] | null;

  /** @format double */
  total_cpu_cores_lt?: number | null;

  /** @format double */
  total_cpu_cores_lte?: number | null;

  /** @format double */
  total_cpu_cores_not?: number | null;
  total_cpu_cores_not_in?: number[] | null;

  /** @format double */
  total_cpu_hz?: number | null;

  /** @format double */
  total_cpu_hz_gt?: number | null;

  /** @format double */
  total_cpu_hz_gte?: number | null;
  total_cpu_hz_in?: number[] | null;

  /** @format double */
  total_cpu_hz_lt?: number | null;

  /** @format double */
  total_cpu_hz_lte?: number | null;

  /** @format double */
  total_cpu_hz_not?: number | null;
  total_cpu_hz_not_in?: number[] | null;

  /** @format double */
  total_data_capacity?: number | null;

  /** @format double */
  total_data_capacity_gt?: number | null;

  /** @format double */
  total_data_capacity_gte?: number | null;
  total_data_capacity_in?: number[] | null;

  /** @format double */
  total_data_capacity_lt?: number | null;

  /** @format double */
  total_data_capacity_lte?: number | null;

  /** @format double */
  total_data_capacity_not?: number | null;
  total_data_capacity_not_in?: number[] | null;

  /** @format double */
  total_memory_bytes?: number | null;

  /** @format double */
  total_memory_bytes_gt?: number | null;

  /** @format double */
  total_memory_bytes_gte?: number | null;
  total_memory_bytes_in?: number[] | null;

  /** @format double */
  total_memory_bytes_lt?: number | null;

  /** @format double */
  total_memory_bytes_lte?: number | null;

  /** @format double */
  total_memory_bytes_not?: number | null;
  total_memory_bytes_not_in?: number[] | null;
  usb_devices_every?: UsbDeviceWhereInput | null;
  usb_devices_none?: UsbDeviceWhereInput | null;
  usb_devices_some?: UsbDeviceWhereInput | null;

  /** @format double */
  used_cpu_hz?: number | null;

  /** @format double */
  used_cpu_hz_gt?: number | null;

  /** @format double */
  used_cpu_hz_gte?: number | null;
  used_cpu_hz_in?: number[] | null;

  /** @format double */
  used_cpu_hz_lt?: number | null;

  /** @format double */
  used_cpu_hz_lte?: number | null;

  /** @format double */
  used_cpu_hz_not?: number | null;
  used_cpu_hz_not_in?: number[] | null;

  /** @format double */
  used_data_space?: number | null;

  /** @format double */
  used_data_space_gt?: number | null;

  /** @format double */
  used_data_space_gte?: number | null;
  used_data_space_in?: number[] | null;

  /** @format double */
  used_data_space_lt?: number | null;

  /** @format double */
  used_data_space_lte?: number | null;

  /** @format double */
  used_data_space_not?: number | null;
  used_data_space_not_in?: number[] | null;

  /** @format double */
  used_memory_bytes?: number | null;

  /** @format double */
  used_memory_bytes_gt?: number | null;

  /** @format double */
  used_memory_bytes_gte?: number | null;
  used_memory_bytes_in?: number[] | null;

  /** @format double */
  used_memory_bytes_lt?: number | null;

  /** @format double */
  used_memory_bytes_lte?: number | null;

  /** @format double */
  used_memory_bytes_not?: number | null;
  used_memory_bytes_not_in?: number[] | null;

  /** @format double */
  vm_num?: number | null;

  /** @format double */
  vm_num_gt?: number | null;

  /** @format double */
  vm_num_gte?: number | null;
  vm_num_in?: number[] | null;

  /** @format double */
  vm_num_lt?: number | null;

  /** @format double */
  vm_num_lte?: number | null;

  /** @format double */
  vm_num_not?: number | null;
  vm_num_not_in?: number[] | null;
  vmotion_ip?: string | null;
  vmotion_ip_contains?: string | null;
  vmotion_ip_ends_with?: string | null;
  vmotion_ip_gt?: string | null;
  vmotion_ip_gte?: string | null;
  vmotion_ip_in?: string[] | null;
  vmotion_ip_lt?: string | null;
  vmotion_ip_lte?: string | null;
  vmotion_ip_not?: string | null;
  vmotion_ip_not_contains?: string | null;
  vmotion_ip_not_ends_with?: string | null;
  vmotion_ip_not_in?: string[] | null;
  vmotion_ip_not_starts_with?: string | null;
  vmotion_ip_starts_with?: string | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
  vsphereEsxiAccount?: VsphereEsxiAccountWhereInput | null;
  with_faster_ssd_as_cache?: boolean | null;
  with_faster_ssd_as_cache_not?: boolean | null;
  zone?: ZoneWhereInput | null;
}

export type CpuFanSpeedUnit = "PERCENT" | "RPM";

export interface IpmiWhereInput {
  AND?: IpmiWhereInput[] | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  ip?: string | null;
  ip_contains?: string | null;
  ip_ends_with?: string | null;
  ip_gt?: string | null;
  ip_gte?: string | null;
  ip_in?: string[] | null;
  ip_lt?: string | null;
  ip_lte?: string | null;
  ip_not?: string | null;
  ip_not_contains?: string | null;
  ip_not_ends_with?: string | null;
  ip_not_in?: string[] | null;
  ip_not_starts_with?: string | null;
  ip_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  NOT?: IpmiWhereInput[] | null;
  OR?: IpmiWhereInput[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
  valid?: boolean | null;
  valid_not?: boolean | null;
}

export interface NicWhereInput {
  AND?: NicWhereInput[] | null;
  driver?: string | null;
  driver_contains?: string | null;
  driver_ends_with?: string | null;
  driver_gt?: string | null;
  driver_gte?: string | null;
  driver_in?: string[] | null;
  driver_lt?: string | null;
  driver_lte?: string | null;
  driver_not?: string | null;
  driver_not_contains?: string | null;
  driver_not_ends_with?: string | null;
  driver_not_in?: string[] | null;
  driver_not_starts_with?: string | null;
  driver_starts_with?: string | null;
  driver_state?: NicDriverState | null;
  driver_state_in?: NicDriverState[] | null;
  driver_state_not?: NicDriverState | null;
  driver_state_not_in?: NicDriverState[] | null;
  gateway_ip?: string | null;
  gateway_ip_contains?: string | null;
  gateway_ip_ends_with?: string | null;
  gateway_ip_gt?: string | null;
  gateway_ip_gte?: string | null;
  gateway_ip_in?: string[] | null;
  gateway_ip_lt?: string | null;
  gateway_ip_lte?: string | null;
  gateway_ip_not?: string | null;
  gateway_ip_not_contains?: string | null;
  gateway_ip_not_ends_with?: string | null;
  gateway_ip_not_in?: string[] | null;
  gateway_ip_not_starts_with?: string | null;
  gateway_ip_starts_with?: string | null;
  host?: HostWhereInput | null;
  ibdev?: string | null;
  ibdev_contains?: string | null;
  ibdev_ends_with?: string | null;
  ibdev_gt?: string | null;
  ibdev_gte?: string | null;
  ibdev_in?: string[] | null;
  ibdev_lt?: string | null;
  ibdev_lte?: string | null;
  ibdev_not?: string | null;
  ibdev_not_contains?: string | null;
  ibdev_not_ends_with?: string | null;
  ibdev_not_in?: string[] | null;
  ibdev_not_starts_with?: string | null;
  ibdev_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  ip_address?: string | null;
  ip_address_contains?: string | null;
  ip_address_ends_with?: string | null;
  ip_address_gt?: string | null;
  ip_address_gte?: string | null;
  ip_address_in?: string[] | null;
  ip_address_lt?: string | null;
  ip_address_lte?: string | null;
  ip_address_not?: string | null;
  ip_address_not_contains?: string | null;
  ip_address_not_ends_with?: string | null;
  ip_address_not_in?: string[] | null;
  ip_address_not_starts_with?: string | null;
  ip_address_starts_with?: string | null;
  is_sriov?: boolean | null;
  is_sriov_not?: boolean | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  mac_address?: string | null;
  mac_address_contains?: string | null;
  mac_address_ends_with?: string | null;
  mac_address_gt?: string | null;
  mac_address_gte?: string | null;
  mac_address_in?: string[] | null;
  mac_address_lt?: string | null;
  mac_address_lte?: string | null;
  mac_address_not?: string | null;
  mac_address_not_contains?: string | null;
  mac_address_not_ends_with?: string | null;
  mac_address_not_in?: string[] | null;
  mac_address_not_starts_with?: string | null;
  mac_address_starts_with?: string | null;

  /** @format double */
  max_vf_num?: number | null;

  /** @format double */
  max_vf_num_gt?: number | null;

  /** @format double */
  max_vf_num_gte?: number | null;
  max_vf_num_in?: number[] | null;

  /** @format double */
  max_vf_num_lt?: number | null;

  /** @format double */
  max_vf_num_lte?: number | null;

  /** @format double */
  max_vf_num_not?: number | null;
  max_vf_num_not_in?: number[] | null;
  model?: string | null;
  model_contains?: string | null;
  model_ends_with?: string | null;
  model_gt?: string | null;
  model_gte?: string | null;
  model_in?: string[] | null;
  model_lt?: string | null;
  model_lte?: string | null;
  model_not?: string | null;
  model_not_contains?: string | null;
  model_not_ends_with?: string | null;
  model_not_in?: string[] | null;
  model_not_starts_with?: string | null;
  model_starts_with?: string | null;

  /** @format double */
  mtu?: number | null;

  /** @format double */
  mtu_gt?: number | null;

  /** @format double */
  mtu_gte?: number | null;
  mtu_in?: number[] | null;

  /** @format double */
  mtu_lt?: number | null;

  /** @format double */
  mtu_lte?: number | null;

  /** @format double */
  mtu_not?: number | null;
  mtu_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nic_uuid?: string | null;
  nic_uuid_contains?: string | null;
  nic_uuid_ends_with?: string | null;
  nic_uuid_gt?: string | null;
  nic_uuid_gte?: string | null;
  nic_uuid_in?: string[] | null;
  nic_uuid_lt?: string | null;
  nic_uuid_lte?: string | null;
  nic_uuid_not?: string | null;
  nic_uuid_not_contains?: string | null;
  nic_uuid_not_ends_with?: string | null;
  nic_uuid_not_in?: string[] | null;
  nic_uuid_not_starts_with?: string | null;
  nic_uuid_starts_with?: string | null;
  NOT?: NicWhereInput[] | null;
  OR?: NicWhereInput[] | null;
  physical?: boolean | null;
  physical_not?: boolean | null;
  rdma_enabled?: boolean | null;
  rdma_enabled_not?: boolean | null;
  running?: boolean | null;
  running_not?: boolean | null;

  /** @format double */
  speed?: number | null;

  /** @format double */
  speed_gt?: number | null;

  /** @format double */
  speed_gte?: number | null;
  speed_in?: number[] | null;

  /** @format double */
  speed_lt?: number | null;

  /** @format double */
  speed_lte?: number | null;

  /** @format double */
  speed_not?: number | null;
  speed_not_in?: number[] | null;
  subnet_mask?: string | null;
  subnet_mask_contains?: string | null;
  subnet_mask_ends_with?: string | null;
  subnet_mask_gt?: string | null;
  subnet_mask_gte?: string | null;
  subnet_mask_in?: string[] | null;
  subnet_mask_lt?: string | null;
  subnet_mask_lte?: string | null;
  subnet_mask_not?: string | null;
  subnet_mask_not_contains?: string | null;
  subnet_mask_not_ends_with?: string | null;
  subnet_mask_not_in?: string[] | null;
  subnet_mask_not_starts_with?: string | null;
  subnet_mask_starts_with?: string | null;

  /** @format double */
  total_vf_num?: number | null;

  /** @format double */
  total_vf_num_gt?: number | null;

  /** @format double */
  total_vf_num_gte?: number | null;
  total_vf_num_in?: number[] | null;

  /** @format double */
  total_vf_num_lt?: number | null;

  /** @format double */
  total_vf_num_lte?: number | null;

  /** @format double */
  total_vf_num_not?: number | null;
  total_vf_num_not_in?: number[] | null;
  type?: NetworkType | null;
  type_in?: NetworkType[] | null;
  type_not?: NetworkType | null;
  type_not_in?: NetworkType[] | null;
  up?: boolean | null;
  up_not?: boolean | null;

  /** @format double */
  used_vf_num?: number | null;

  /** @format double */
  used_vf_num_gt?: number | null;

  /** @format double */
  used_vf_num_gte?: number | null;
  used_vf_num_in?: number[] | null;

  /** @format double */
  used_vf_num_lt?: number | null;

  /** @format double */
  used_vf_num_lte?: number | null;

  /** @format double */
  used_vf_num_not?: number | null;
  used_vf_num_not_in?: number[] | null;
  vds?: VdsWhereInput | null;
}

export type NicDriverState = "NEED_REBOOT" | "NO_DRIVER" | "NOT_READY" | "READY";

export type NetworkType = "ACCESS" | "MANAGEMENT" | "MIGRATION" | "STORAGE" | "VM";

export interface VdsWhereInput {
  AND?: VdsWhereInput[] | null;
  bond_mode?: string | null;
  bond_mode_contains?: string | null;
  bond_mode_ends_with?: string | null;
  bond_mode_gt?: string | null;
  bond_mode_gte?: string | null;
  bond_mode_in?: string[] | null;
  bond_mode_lt?: string | null;
  bond_mode_lte?: string | null;
  bond_mode_not?: string | null;
  bond_mode_not_contains?: string | null;
  bond_mode_not_ends_with?: string | null;
  bond_mode_not_in?: string[] | null;
  bond_mode_not_starts_with?: string | null;
  bond_mode_starts_with?: string | null;
  cluster?: ClusterWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nics_every?: NicWhereInput | null;
  nics_none?: NicWhereInput | null;
  nics_some?: NicWhereInput | null;
  NOT?: VdsWhereInput[] | null;
  OR?: VdsWhereInput[] | null;
  ovsbr_name?: string | null;
  ovsbr_name_contains?: string | null;
  ovsbr_name_ends_with?: string | null;
  ovsbr_name_gt?: string | null;
  ovsbr_name_gte?: string | null;
  ovsbr_name_in?: string[] | null;
  ovsbr_name_lt?: string | null;
  ovsbr_name_lte?: string | null;
  ovsbr_name_not?: string | null;
  ovsbr_name_not_contains?: string | null;
  ovsbr_name_not_ends_with?: string | null;
  ovsbr_name_not_in?: string[] | null;
  ovsbr_name_not_starts_with?: string | null;
  ovsbr_name_starts_with?: string | null;
  type?: NetworkType | null;
  type_in?: NetworkType[] | null;
  type_not?: NetworkType | null;
  type_not_in?: NetworkType[] | null;
  vlans_every?: VlanWhereInput | null;
  vlans_none?: VlanWhereInput | null;

  /** @format double */
  vlans_num?: number | null;

  /** @format double */
  vlans_num_gt?: number | null;

  /** @format double */
  vlans_num_gte?: number | null;
  vlans_num_in?: number[] | null;

  /** @format double */
  vlans_num_lt?: number | null;

  /** @format double */
  vlans_num_lte?: number | null;

  /** @format double */
  vlans_num_not?: number | null;
  vlans_num_not_in?: number[] | null;
  vlans_some?: VlanWhereInput | null;
}

export interface VlanWhereInput {
  AND?: VlanWhereInput[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  gateway_ip?: string | null;
  gateway_ip_contains?: string | null;
  gateway_ip_ends_with?: string | null;
  gateway_ip_gt?: string | null;
  gateway_ip_gte?: string | null;
  gateway_ip_in?: string[] | null;
  gateway_ip_lt?: string | null;
  gateway_ip_lte?: string | null;
  gateway_ip_not?: string | null;
  gateway_ip_not_contains?: string | null;
  gateway_ip_not_ends_with?: string | null;
  gateway_ip_not_in?: string[] | null;
  gateway_ip_not_starts_with?: string | null;
  gateway_ip_starts_with?: string | null;
  gateway_subnetmask?: string | null;
  gateway_subnetmask_contains?: string | null;
  gateway_subnetmask_ends_with?: string | null;
  gateway_subnetmask_gt?: string | null;
  gateway_subnetmask_gte?: string | null;
  gateway_subnetmask_in?: string[] | null;
  gateway_subnetmask_lt?: string | null;
  gateway_subnetmask_lte?: string | null;
  gateway_subnetmask_not?: string | null;
  gateway_subnetmask_not_contains?: string | null;
  gateway_subnetmask_not_ends_with?: string | null;
  gateway_subnetmask_not_in?: string[] | null;
  gateway_subnetmask_not_starts_with?: string | null;
  gateway_subnetmask_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: VlanWhereInput[] | null;
  OR?: VlanWhereInput[] | null;
  subnetmask?: string | null;
  subnetmask_contains?: string | null;
  subnetmask_ends_with?: string | null;
  subnetmask_gt?: string | null;
  subnetmask_gte?: string | null;
  subnetmask_in?: string[] | null;
  subnetmask_lt?: string | null;
  subnetmask_lte?: string | null;
  subnetmask_not?: string | null;
  subnetmask_not_contains?: string | null;
  subnetmask_not_ends_with?: string | null;
  subnetmask_not_in?: string[] | null;
  subnetmask_not_starts_with?: string | null;
  subnetmask_starts_with?: string | null;
  type?: NetworkType | null;
  type_in?: NetworkType[] | null;
  type_not?: NetworkType | null;
  type_not_in?: NetworkType[] | null;
  vds?: VdsWhereInput | null;

  /** @format double */
  vlan_id?: number | null;

  /** @format double */
  vlan_id_gt?: number | null;

  /** @format double */
  vlan_id_gte?: number | null;
  vlan_id_in?: number[] | null;

  /** @format double */
  vlan_id_lt?: number | null;

  /** @format double */
  vlan_id_lte?: number | null;

  /** @format double */
  vlan_id_not?: number | null;
  vlan_id_not_in?: number[] | null;
  vm_nics_every?: VmNicWhereInput | null;
  vm_nics_none?: VmNicWhereInput | null;
  vm_nics_some?: VmNicWhereInput | null;
}

export interface VmNicWhereInput {
  AND?: VmNicWhereInput[] | null;
  enabled?: boolean | null;
  enabled_not?: boolean | null;
  gateway?: string | null;
  gateway_contains?: string | null;
  gateway_ends_with?: string | null;
  gateway_gt?: string | null;
  gateway_gte?: string | null;
  gateway_in?: string[] | null;
  gateway_lt?: string | null;
  gateway_lte?: string | null;
  gateway_not?: string | null;
  gateway_not_contains?: string | null;
  gateway_not_ends_with?: string | null;
  gateway_not_in?: string[] | null;
  gateway_not_starts_with?: string | null;
  gateway_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  interface_id?: string | null;
  interface_id_contains?: string | null;
  interface_id_ends_with?: string | null;
  interface_id_gt?: string | null;
  interface_id_gte?: string | null;
  interface_id_in?: string[] | null;
  interface_id_lt?: string | null;
  interface_id_lte?: string | null;
  interface_id_not?: string | null;
  interface_id_not_contains?: string | null;
  interface_id_not_ends_with?: string | null;
  interface_id_not_in?: string[] | null;
  interface_id_not_starts_with?: string | null;
  interface_id_starts_with?: string | null;
  ip_address?: string | null;
  ip_address_contains?: string | null;
  ip_address_ends_with?: string | null;
  ip_address_gt?: string | null;
  ip_address_gte?: string | null;
  ip_address_in?: string[] | null;
  ip_address_lt?: string | null;
  ip_address_lte?: string | null;
  ip_address_not?: string | null;
  ip_address_not_contains?: string | null;
  ip_address_not_ends_with?: string | null;
  ip_address_not_in?: string[] | null;
  ip_address_not_starts_with?: string | null;
  ip_address_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  mac_address?: string | null;
  mac_address_contains?: string | null;
  mac_address_ends_with?: string | null;
  mac_address_gt?: string | null;
  mac_address_gte?: string | null;
  mac_address_in?: string[] | null;
  mac_address_lt?: string | null;
  mac_address_lte?: string | null;
  mac_address_not?: string | null;
  mac_address_not_contains?: string | null;
  mac_address_not_ends_with?: string | null;
  mac_address_not_in?: string[] | null;
  mac_address_not_starts_with?: string | null;
  mac_address_starts_with?: string | null;
  mirror?: boolean | null;
  mirror_not?: boolean | null;
  model?: VmNicModel | null;
  model_in?: VmNicModel[] | null;
  model_not?: VmNicModel | null;
  model_not_in?: VmNicModel[] | null;
  nic?: NicWhereInput | null;
  NOT?: VmNicWhereInput[] | null;
  OR?: VmNicWhereInput[] | null;

  /** @format double */
  order?: number | null;

  /** @format double */
  order_gt?: number | null;

  /** @format double */
  order_gte?: number | null;
  order_in?: number[] | null;

  /** @format double */
  order_lt?: number | null;

  /** @format double */
  order_lte?: number | null;

  /** @format double */
  order_not?: number | null;
  order_not_in?: number[] | null;
  subnet_mask?: string | null;
  subnet_mask_contains?: string | null;
  subnet_mask_ends_with?: string | null;
  subnet_mask_gt?: string | null;
  subnet_mask_gte?: string | null;
  subnet_mask_in?: string[] | null;
  subnet_mask_lt?: string | null;
  subnet_mask_lte?: string | null;
  subnet_mask_not?: string | null;
  subnet_mask_not_contains?: string | null;
  subnet_mask_not_ends_with?: string | null;
  subnet_mask_not_in?: string[] | null;
  subnet_mask_not_starts_with?: string | null;
  subnet_mask_starts_with?: string | null;
  vlan?: VlanWhereInput | null;
  vm?: VmWhereInput | null;
}

export type VmNicModel = "E1000" | "SRIOV" | "VIRTIO";

export interface VmWhereInput {
  AND?: VmWhereInput[] | null;
  clock_offset?: VmClockOffset | null;
  clock_offset_in?: VmClockOffset[] | null;
  clock_offset_not?: VmClockOffset | null;
  clock_offset_not_in?: VmClockOffset[] | null;
  cluster?: ClusterWhereInput | null;
  cpu_model?: string | null;
  cpu_model_contains?: string | null;
  cpu_model_ends_with?: string | null;
  cpu_model_gt?: string | null;
  cpu_model_gte?: string | null;
  cpu_model_in?: string[] | null;
  cpu_model_lt?: string | null;
  cpu_model_lte?: string | null;
  cpu_model_not?: string | null;
  cpu_model_not_contains?: string | null;
  cpu_model_not_ends_with?: string | null;
  cpu_model_not_in?: string[] | null;
  cpu_model_not_starts_with?: string | null;
  cpu_model_starts_with?: string | null;

  /** @format double */
  cpu_usage?: number | null;

  /** @format double */
  cpu_usage_gt?: number | null;

  /** @format double */
  cpu_usage_gte?: number | null;
  cpu_usage_in?: number[] | null;

  /** @format double */
  cpu_usage_lt?: number | null;

  /** @format double */
  cpu_usage_lte?: number | null;

  /** @format double */
  cpu_usage_not?: number | null;
  cpu_usage_not_in?: number[] | null;
  deleted_at?: string | null;
  deleted_at_gt?: string | null;
  deleted_at_gte?: string | null;
  deleted_at_in?: string[] | null;
  deleted_at_lt?: string | null;
  deleted_at_lte?: string | null;
  deleted_at_not?: string | null;
  deleted_at_not_in?: string[] | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  dns_servers?: string | null;
  dns_servers_contains?: string | null;
  dns_servers_ends_with?: string | null;
  dns_servers_gt?: string | null;
  dns_servers_gte?: string | null;
  dns_servers_in?: string[] | null;
  dns_servers_lt?: string | null;
  dns_servers_lte?: string | null;
  dns_servers_not?: string | null;
  dns_servers_not_contains?: string | null;
  dns_servers_not_ends_with?: string | null;
  dns_servers_not_in?: string[] | null;
  dns_servers_not_starts_with?: string | null;
  dns_servers_starts_with?: string | null;
  entity_filter_results_every?: VmEntityFilterResultWhereInput | null;
  entity_filter_results_none?: VmEntityFilterResultWhereInput | null;
  entity_filter_results_some?: VmEntityFilterResultWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  firmware?: VmFirmware | null;
  firmware_in?: VmFirmware[] | null;
  firmware_not?: VmFirmware | null;
  firmware_not_in?: VmFirmware[] | null;
  folder?: VmFolderWhereInput | null;
  guest_cpu_model?: string | null;
  guest_cpu_model_contains?: string | null;
  guest_cpu_model_ends_with?: string | null;
  guest_cpu_model_gt?: string | null;
  guest_cpu_model_gte?: string | null;
  guest_cpu_model_in?: string[] | null;
  guest_cpu_model_lt?: string | null;
  guest_cpu_model_lte?: string | null;
  guest_cpu_model_not?: string | null;
  guest_cpu_model_not_contains?: string | null;
  guest_cpu_model_not_ends_with?: string | null;
  guest_cpu_model_not_in?: string[] | null;
  guest_cpu_model_not_starts_with?: string | null;
  guest_cpu_model_starts_with?: string | null;
  guest_os_type?: VmGuestsOperationSystem | null;
  guest_os_type_in?: VmGuestsOperationSystem[] | null;
  guest_os_type_not?: VmGuestsOperationSystem | null;
  guest_os_type_not_in?: VmGuestsOperationSystem[] | null;

  /** @format double */
  guest_size_usage?: number | null;

  /** @format double */
  guest_size_usage_gt?: number | null;

  /** @format double */
  guest_size_usage_gte?: number | null;
  guest_size_usage_in?: number[] | null;

  /** @format double */
  guest_size_usage_lt?: number | null;

  /** @format double */
  guest_size_usage_lte?: number | null;

  /** @format double */
  guest_size_usage_not?: number | null;
  guest_size_usage_not_in?: number[] | null;

  /** @format double */
  guest_used_size?: number | null;

  /** @format double */
  guest_used_size_gt?: number | null;

  /** @format double */
  guest_used_size_gte?: number | null;
  guest_used_size_in?: number[] | null;

  /** @format double */
  guest_used_size_lt?: number | null;

  /** @format double */
  guest_used_size_lte?: number | null;

  /** @format double */
  guest_used_size_not?: number | null;
  guest_used_size_not_in?: number[] | null;
  ha?: boolean | null;
  ha_not?: boolean | null;
  host?: HostWhereInput | null;
  hostname?: string | null;
  hostname_contains?: string | null;
  hostname_ends_with?: string | null;
  hostname_gt?: string | null;
  hostname_gte?: string | null;
  hostname_in?: string[] | null;
  hostname_lt?: string | null;
  hostname_lte?: string | null;
  hostname_not?: string | null;
  hostname_not_contains?: string | null;
  hostname_not_ends_with?: string | null;
  hostname_not_in?: string[] | null;
  hostname_not_starts_with?: string | null;
  hostname_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  in_recycle_bin?: boolean | null;
  in_recycle_bin_not?: boolean | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  io_policy?: VmDiskIoPolicy | null;
  io_policy_in?: VmDiskIoPolicy[] | null;
  io_policy_not?: VmDiskIoPolicy | null;
  io_policy_not_in?: VmDiskIoPolicy[] | null;
  ips?: string | null;
  ips_contains?: string | null;
  ips_ends_with?: string | null;
  ips_gt?: string | null;
  ips_gte?: string | null;
  ips_in?: string[] | null;
  ips_lt?: string | null;
  ips_lte?: string | null;
  ips_not?: string | null;
  ips_not_contains?: string | null;
  ips_not_ends_with?: string | null;
  ips_not_in?: string[] | null;
  ips_not_starts_with?: string | null;
  ips_starts_with?: string | null;
  kernel_info?: string | null;
  kernel_info_contains?: string | null;
  kernel_info_ends_with?: string | null;
  kernel_info_gt?: string | null;
  kernel_info_gte?: string | null;
  kernel_info_in?: string[] | null;
  kernel_info_lt?: string | null;
  kernel_info_lte?: string | null;
  kernel_info_not?: string | null;
  kernel_info_not_contains?: string | null;
  kernel_info_not_ends_with?: string | null;
  kernel_info_not_in?: string[] | null;
  kernel_info_not_starts_with?: string | null;
  kernel_info_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  last_shutdown_time?: string | null;
  last_shutdown_time_gt?: string | null;
  last_shutdown_time_gte?: string | null;
  last_shutdown_time_in?: string[] | null;
  last_shutdown_time_lt?: string | null;
  last_shutdown_time_lte?: string | null;
  last_shutdown_time_not?: string | null;
  last_shutdown_time_not_in?: string[] | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format double */
  logical_size_bytes?: number | null;

  /** @format double */
  logical_size_bytes_gt?: number | null;

  /** @format double */
  logical_size_bytes_gte?: number | null;
  logical_size_bytes_in?: number[] | null;

  /** @format double */
  logical_size_bytes_lt?: number | null;

  /** @format double */
  logical_size_bytes_lte?: number | null;

  /** @format double */
  logical_size_bytes_not?: number | null;
  logical_size_bytes_not_in?: number[] | null;

  /** @format double */
  max_bandwidth?: number | null;

  /** @format double */
  max_bandwidth_gt?: number | null;

  /** @format double */
  max_bandwidth_gte?: number | null;
  max_bandwidth_in?: number[] | null;

  /** @format double */
  max_bandwidth_lt?: number | null;

  /** @format double */
  max_bandwidth_lte?: number | null;

  /** @format double */
  max_bandwidth_not?: number | null;
  max_bandwidth_not_in?: number[] | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_in?: VmDiskIoRestrictType[] | null;
  max_bandwidth_policy_not?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_not_in?: VmDiskIoRestrictType[] | null;

  /** @format double */
  max_iops?: number | null;

  /** @format double */
  max_iops_gt?: number | null;

  /** @format double */
  max_iops_gte?: number | null;
  max_iops_in?: number[] | null;

  /** @format double */
  max_iops_lt?: number | null;

  /** @format double */
  max_iops_lte?: number | null;

  /** @format double */
  max_iops_not?: number | null;
  max_iops_not_in?: number[] | null;
  max_iops_policy?: VmDiskIoRestrictType | null;
  max_iops_policy_in?: VmDiskIoRestrictType[] | null;
  max_iops_policy_not?: VmDiskIoRestrictType | null;
  max_iops_policy_not_in?: VmDiskIoRestrictType[] | null;

  /** @format double */
  memory?: number | null;

  /** @format double */
  memory_gt?: number | null;

  /** @format double */
  memory_gte?: number | null;
  memory_in?: number[] | null;

  /** @format double */
  memory_lt?: number | null;

  /** @format double */
  memory_lte?: number | null;

  /** @format double */
  memory_not?: number | null;
  memory_not_in?: number[] | null;

  /** @format double */
  memory_usage?: number | null;

  /** @format double */
  memory_usage_gt?: number | null;

  /** @format double */
  memory_usage_gte?: number | null;
  memory_usage_in?: number[] | null;

  /** @format double */
  memory_usage_lt?: number | null;

  /** @format double */
  memory_usage_lte?: number | null;

  /** @format double */
  memory_usage_not?: number | null;
  memory_usage_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nested_virtualization?: boolean | null;
  nested_virtualization_not?: boolean | null;
  node_ip?: string | null;
  node_ip_contains?: string | null;
  node_ip_ends_with?: string | null;
  node_ip_gt?: string | null;
  node_ip_gte?: string | null;
  node_ip_in?: string[] | null;
  node_ip_lt?: string | null;
  node_ip_lte?: string | null;
  node_ip_not?: string | null;
  node_ip_not_contains?: string | null;
  node_ip_not_ends_with?: string | null;
  node_ip_not_in?: string[] | null;
  node_ip_not_starts_with?: string | null;
  node_ip_starts_with?: string | null;
  NOT?: VmWhereInput[] | null;
  OR?: VmWhereInput[] | null;
  original_name?: string | null;
  original_name_contains?: string | null;
  original_name_ends_with?: string | null;
  original_name_gt?: string | null;
  original_name_gte?: string | null;
  original_name_in?: string[] | null;
  original_name_lt?: string | null;
  original_name_lte?: string | null;
  original_name_not?: string | null;
  original_name_not_contains?: string | null;
  original_name_not_ends_with?: string | null;
  original_name_not_in?: string[] | null;
  original_name_not_starts_with?: string | null;
  original_name_starts_with?: string | null;
  os?: string | null;
  os_contains?: string | null;
  os_ends_with?: string | null;
  os_gt?: string | null;
  os_gte?: string | null;
  os_in?: string[] | null;
  os_lt?: string | null;
  os_lte?: string | null;
  os_not?: string | null;
  os_not_contains?: string | null;
  os_not_ends_with?: string | null;
  os_not_in?: string[] | null;
  os_not_starts_with?: string | null;
  os_starts_with?: string | null;
  protected?: boolean | null;
  protected_not?: boolean | null;

  /** @format double */
  provisioned_size?: number | null;

  /** @format double */
  provisioned_size_gt?: number | null;

  /** @format double */
  provisioned_size_gte?: number | null;
  provisioned_size_in?: number[] | null;

  /** @format double */
  provisioned_size_lt?: number | null;

  /** @format double */
  provisioned_size_lte?: number | null;

  /** @format double */
  provisioned_size_not?: number | null;
  provisioned_size_not_in?: number[] | null;

  /** @format double */
  size?: number | null;

  /** @format double */
  size_gt?: number | null;

  /** @format double */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format double */
  size_lt?: number | null;

  /** @format double */
  size_lte?: number | null;

  /** @format double */
  size_not?: number | null;
  size_not_in?: number[] | null;
  snapshot_plan?: SnapshotPlanWhereInput | null;
  snapshots_every?: VmSnapshotWhereInput | null;
  snapshots_none?: VmSnapshotWhereInput | null;
  snapshots_some?: VmSnapshotWhereInput | null;
  status?: VmStatus | null;
  status_in?: VmStatus[] | null;
  status_not?: VmStatus | null;
  status_not_in?: VmStatus[] | null;

  /** @format double */
  unique_size?: number | null;

  /** @format double */
  unique_size_gt?: number | null;

  /** @format double */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format double */
  unique_size_lt?: number | null;

  /** @format double */
  unique_size_lte?: number | null;

  /** @format double */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
  usb_devices_every?: UsbDeviceWhereInput | null;
  usb_devices_none?: UsbDeviceWhereInput | null;
  usb_devices_some?: UsbDeviceWhereInput | null;

  /** @format double */
  vcpu?: number | null;

  /** @format double */
  vcpu_gt?: number | null;

  /** @format double */
  vcpu_gte?: number | null;
  vcpu_in?: number[] | null;

  /** @format double */
  vcpu_lt?: number | null;

  /** @format double */
  vcpu_lte?: number | null;

  /** @format double */
  vcpu_not?: number | null;
  vcpu_not_in?: number[] | null;
  video_type?: VmVideoType | null;
  video_type_in?: VmVideoType[] | null;
  video_type_not?: VmVideoType | null;
  video_type_not_in?: VmVideoType[] | null;
  vm_disks_every?: VmDiskWhereInput | null;
  vm_disks_none?: VmDiskWhereInput | null;
  vm_disks_some?: VmDiskWhereInput | null;
  vm_nics_every?: VmNicWhereInput | null;
  vm_nics_none?: VmNicWhereInput | null;
  vm_nics_some?: VmNicWhereInput | null;
  vm_placement_group_every?: VmPlacementGroupWhereInput | null;
  vm_placement_group_none?: VmPlacementGroupWhereInput | null;
  vm_placement_group_some?: VmPlacementGroupWhereInput | null;
  vm_tools_status?: VmToolsStatus | null;
  vm_tools_status_in?: VmToolsStatus[] | null;
  vm_tools_status_not?: VmToolsStatus | null;
  vm_tools_status_not_in?: VmToolsStatus[] | null;
  vm_tools_version?: string | null;
  vm_tools_version_contains?: string | null;
  vm_tools_version_ends_with?: string | null;
  vm_tools_version_gt?: string | null;
  vm_tools_version_gte?: string | null;
  vm_tools_version_in?: string[] | null;
  vm_tools_version_lt?: string | null;
  vm_tools_version_lte?: string | null;
  vm_tools_version_not?: string | null;
  vm_tools_version_not_contains?: string | null;
  vm_tools_version_not_ends_with?: string | null;
  vm_tools_version_not_in?: string[] | null;
  vm_tools_version_not_starts_with?: string | null;
  vm_tools_version_starts_with?: string | null;
  win_opt?: boolean | null;
  win_opt_not?: boolean | null;
}

export type VmClockOffset = "LOCALTIME" | "UTC";

export interface VmEntityFilterResultWhereInput {
  AND?: VmEntityFilterResultWhereInput[] | null;
  entityFilter?: EntityFilterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  NOT?: VmEntityFilterResultWhereInput[] | null;
  OR?: VmEntityFilterResultWhereInput[] | null;
  vm?: VmWhereInput | null;
}

export interface EntityFilterWhereInput {
  AND?: EntityFilterWhereInput[] | null;
  apply_to_all_clusters?: boolean | null;
  apply_to_all_clusters_not?: boolean | null;
  clusters_every?: ClusterWhereInput | null;
  clusters_none?: ClusterWhereInput | null;
  clusters_some?: ClusterWhereInput | null;
  entity_type?: EntityType | null;
  entity_type_in?: EntityType[] | null;
  entity_type_not?: EntityType | null;
  entity_type_not_in?: EntityType[] | null;
  exec_failed_cluster_every?: ClusterWhereInput | null;
  exec_failed_cluster_none?: ClusterWhereInput | null;
  exec_failed_cluster_some?: ClusterWhereInput | null;
  filter_status?: FilterStatus | null;
  filter_status_in?: FilterStatus[] | null;
  filter_status_not?: FilterStatus | null;
  filter_status_not_in?: FilterStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  last_executed_at?: string | null;
  last_executed_at_gt?: string | null;
  last_executed_at_gte?: string | null;
  last_executed_at_in?: string[] | null;
  last_executed_at_lt?: string | null;
  last_executed_at_lte?: string | null;
  last_executed_at_not?: string | null;
  last_executed_at_not_in?: string[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: EntityFilterWhereInput[] | null;
  OR?: EntityFilterWhereInput[] | null;
  preset?: string | null;
  preset_contains?: string | null;
  preset_ends_with?: string | null;
  preset_gt?: string | null;
  preset_gte?: string | null;
  preset_in?: string[] | null;
  preset_lt?: string | null;
  preset_lte?: string | null;
  preset_not?: string | null;
  preset_not_contains?: string | null;
  preset_not_ends_with?: string | null;
  preset_not_in?: string[] | null;
  preset_not_starts_with?: string | null;
  preset_starts_with?: string | null;
}

export type EntityType = "VM";

export type FilterStatus = "EXECUTING" | "FAILED" | "INITIALIZING" | "PARTIAL_SUCCESSED" | "SUCCESSED";

export type VmFirmware = "BIOS" | "UEFI";

export interface VmFolderWhereInput {
  AND?: VmFolderWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: VmFolderWhereInput[] | null;
  OR?: VmFolderWhereInput[] | null;

  /** @format double */
  vm_num?: number | null;

  /** @format double */
  vm_num_gt?: number | null;

  /** @format double */
  vm_num_gte?: number | null;
  vm_num_in?: number[] | null;

  /** @format double */
  vm_num_lt?: number | null;

  /** @format double */
  vm_num_lte?: number | null;

  /** @format double */
  vm_num_not?: number | null;
  vm_num_not_in?: number[] | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
}

export type VmGuestsOperationSystem = "LINUX" | "UNKNOWN" | "WINDOWS";

export type VmDiskIoPolicy = "RESTRICT_EACH_DISK" | "RESTRICT_WHOLE_VM";

export type VmDiskIoRestrictType = "DYNAMIC" | "FORCED";

export interface SnapshotPlanWhereInput {
  AND?: SnapshotPlanWhereInput[] | null;

  /** @format double */
  auto_delete_num?: number | null;

  /** @format double */
  auto_delete_num_gt?: number | null;

  /** @format double */
  auto_delete_num_gte?: number | null;
  auto_delete_num_in?: number[] | null;

  /** @format double */
  auto_delete_num_lt?: number | null;

  /** @format double */
  auto_delete_num_lte?: number | null;

  /** @format double */
  auto_delete_num_not?: number | null;
  auto_delete_num_not_in?: number[] | null;

  /** @format double */
  auto_execute_num?: number | null;

  /** @format double */
  auto_execute_num_gt?: number | null;

  /** @format double */
  auto_execute_num_gte?: number | null;
  auto_execute_num_in?: number[] | null;

  /** @format double */
  auto_execute_num_lt?: number | null;

  /** @format double */
  auto_execute_num_lte?: number | null;

  /** @format double */
  auto_execute_num_not?: number | null;
  auto_execute_num_not_in?: number[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  end_time?: string | null;
  end_time_gt?: string | null;
  end_time_gte?: string | null;
  end_time_in?: string[] | null;
  end_time_lt?: string | null;
  end_time_lte?: string | null;
  end_time_not?: string | null;
  end_time_not_in?: string[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  execute_plan_type?: SnapshotPlanExecuteType | null;
  execute_plan_type_in?: SnapshotPlanExecuteType[] | null;
  execute_plan_type_not?: SnapshotPlanExecuteType | null;
  execute_plan_type_not_in?: SnapshotPlanExecuteType[] | null;
  execution_tasks_every?: SnapshotPlanTaskWhereInput | null;
  execution_tasks_none?: SnapshotPlanTaskWhereInput | null;
  execution_tasks_some?: SnapshotPlanTaskWhereInput | null;
  healthy?: boolean | null;
  healthy_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  last_execute_end_time?: string | null;
  last_execute_end_time_gt?: string | null;
  last_execute_end_time_gte?: string | null;
  last_execute_end_time_in?: string[] | null;
  last_execute_end_time_lt?: string | null;
  last_execute_end_time_lte?: string | null;
  last_execute_end_time_not?: string | null;
  last_execute_end_time_not_in?: string[] | null;
  last_execute_status?: SnapshotPlanExecuteStatus | null;
  last_execute_status_in?: SnapshotPlanExecuteStatus[] | null;
  last_execute_status_not?: SnapshotPlanExecuteStatus | null;
  last_execute_status_not_in?: SnapshotPlanExecuteStatus[] | null;
  last_execute_time?: string | null;
  last_execute_time_gt?: string | null;
  last_execute_time_gte?: string | null;
  last_execute_time_in?: string[] | null;
  last_execute_time_lt?: string | null;
  last_execute_time_lte?: string | null;
  last_execute_time_not?: string | null;
  last_execute_time_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format double */
  logical_size_bytes?: number | null;

  /** @format double */
  logical_size_bytes_gt?: number | null;

  /** @format double */
  logical_size_bytes_gte?: number | null;
  logical_size_bytes_in?: number[] | null;

  /** @format double */
  logical_size_bytes_lt?: number | null;

  /** @format double */
  logical_size_bytes_lte?: number | null;

  /** @format double */
  logical_size_bytes_not?: number | null;
  logical_size_bytes_not_in?: number[] | null;

  /** @format double */
  manual_delete_num?: number | null;

  /** @format double */
  manual_delete_num_gt?: number | null;

  /** @format double */
  manual_delete_num_gte?: number | null;
  manual_delete_num_in?: number[] | null;

  /** @format double */
  manual_delete_num_lt?: number | null;

  /** @format double */
  manual_delete_num_lte?: number | null;

  /** @format double */
  manual_delete_num_not?: number | null;
  manual_delete_num_not_in?: number[] | null;

  /** @format double */
  manual_execute_num?: number | null;

  /** @format double */
  manual_execute_num_gt?: number | null;

  /** @format double */
  manual_execute_num_gte?: number | null;
  manual_execute_num_in?: number[] | null;

  /** @format double */
  manual_execute_num_lt?: number | null;

  /** @format double */
  manual_execute_num_lte?: number | null;

  /** @format double */
  manual_execute_num_not?: number | null;
  manual_execute_num_not_in?: number[] | null;
  mirror?: boolean | null;
  mirror_not?: boolean | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  next_execute_time?: string | null;
  next_execute_time_gt?: string | null;
  next_execute_time_gte?: string | null;
  next_execute_time_in?: string[] | null;
  next_execute_time_lt?: string | null;
  next_execute_time_lte?: string | null;
  next_execute_time_not?: string | null;
  next_execute_time_not_in?: string[] | null;
  NOT?: SnapshotPlanWhereInput[] | null;

  /** @format double */
  object_num?: number | null;

  /** @format double */
  object_num_gt?: number | null;

  /** @format double */
  object_num_gte?: number | null;
  object_num_in?: number[] | null;

  /** @format double */
  object_num_lt?: number | null;

  /** @format double */
  object_num_lte?: number | null;

  /** @format double */
  object_num_not?: number | null;
  object_num_not_in?: number[] | null;
  OR?: SnapshotPlanWhereInput[] | null;

  /** @format double */
  physical_size_bytes?: number | null;

  /** @format double */
  physical_size_bytes_gt?: number | null;

  /** @format double */
  physical_size_bytes_gte?: number | null;
  physical_size_bytes_in?: number[] | null;

  /** @format double */
  physical_size_bytes_lt?: number | null;

  /** @format double */
  physical_size_bytes_lte?: number | null;

  /** @format double */
  physical_size_bytes_not?: number | null;
  physical_size_bytes_not_in?: number[] | null;

  /** @format double */
  remain_snapshot_num?: number | null;

  /** @format double */
  remain_snapshot_num_gt?: number | null;

  /** @format double */
  remain_snapshot_num_gte?: number | null;
  remain_snapshot_num_in?: number[] | null;

  /** @format double */
  remain_snapshot_num_lt?: number | null;

  /** @format double */
  remain_snapshot_num_lte?: number | null;

  /** @format double */
  remain_snapshot_num_not?: number | null;
  remain_snapshot_num_not_in?: number[] | null;

  /** @format double */
  snapshot_group_num?: number | null;

  /** @format double */
  snapshot_group_num_gt?: number | null;

  /** @format double */
  snapshot_group_num_gte?: number | null;
  snapshot_group_num_in?: number[] | null;

  /** @format double */
  snapshot_group_num_lt?: number | null;

  /** @format double */
  snapshot_group_num_lte?: number | null;

  /** @format double */
  snapshot_group_num_not?: number | null;
  snapshot_group_num_not_in?: number[] | null;
  start_time?: string | null;
  start_time_gt?: string | null;
  start_time_gte?: string | null;
  start_time_in?: string[] | null;
  start_time_lt?: string | null;
  start_time_lte?: string | null;
  start_time_not?: string | null;
  start_time_not_in?: string[] | null;
  status?: SnapshotPlanStatus | null;
  status_in?: SnapshotPlanStatus[] | null;
  status_not?: SnapshotPlanStatus | null;
  status_not_in?: SnapshotPlanStatus[] | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
}

export type SnapshotPlanExecuteType = "DAY" | "HOUR" | "MONTH" | "WEEK";

export interface SnapshotPlanTaskWhereInput {
  AND?: SnapshotPlanTaskWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  end_time?: string | null;
  end_time_gt?: string | null;
  end_time_gte?: string | null;
  end_time_in?: string[] | null;
  end_time_lt?: string | null;
  end_time_lte?: string | null;
  end_time_not?: string | null;
  end_time_not_in?: string[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  NOT?: SnapshotPlanTaskWhereInput[] | null;
  OR?: SnapshotPlanTaskWhereInput[] | null;
  snapshotGroup?: SnapshotGroupWhereInput | null;
  snapshotPlan?: SnapshotPlanWhereInput | null;
  start_time?: string | null;
  start_time_gt?: string | null;
  start_time_gte?: string | null;
  start_time_in?: string[] | null;
  start_time_lt?: string | null;
  start_time_lte?: string | null;
  start_time_not?: string | null;
  start_time_not_in?: string[] | null;
  status?: SnapshotPlanExecuteStatus | null;
  status_in?: SnapshotPlanExecuteStatus[] | null;
  status_not?: SnapshotPlanExecuteStatus | null;
  status_not_in?: SnapshotPlanExecuteStatus[] | null;
  type?: SnapshotPlanTaskType | null;
  type_in?: SnapshotPlanTaskType[] | null;
  type_not?: SnapshotPlanTaskType | null;
  type_not_in?: SnapshotPlanTaskType[] | null;
}

export interface SnapshotGroupWhereInput {
  AND?: SnapshotGroupWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  deleted?: boolean | null;
  deleted_not?: boolean | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  estimated_recycling_time?: string | null;
  estimated_recycling_time_gt?: string | null;
  estimated_recycling_time_gte?: string | null;
  estimated_recycling_time_in?: string[] | null;
  estimated_recycling_time_lt?: string | null;
  estimated_recycling_time_lte?: string | null;
  estimated_recycling_time_not?: string | null;
  estimated_recycling_time_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  keep?: boolean | null;
  keep_not?: boolean | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format double */
  logical_size_bytes?: number | null;

  /** @format double */
  logical_size_bytes_gt?: number | null;

  /** @format double */
  logical_size_bytes_gte?: number | null;
  logical_size_bytes_in?: number[] | null;

  /** @format double */
  logical_size_bytes_lt?: number | null;

  /** @format double */
  logical_size_bytes_lte?: number | null;

  /** @format double */
  logical_size_bytes_not?: number | null;
  logical_size_bytes_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: SnapshotGroupWhereInput[] | null;

  /** @format double */
  object_num?: number | null;

  /** @format double */
  object_num_gt?: number | null;

  /** @format double */
  object_num_gte?: number | null;
  object_num_in?: number[] | null;

  /** @format double */
  object_num_lt?: number | null;

  /** @format double */
  object_num_lte?: number | null;

  /** @format double */
  object_num_not?: number | null;
  object_num_not_in?: number[] | null;
  OR?: SnapshotGroupWhereInput[] | null;
  snapshotPlanTask?: SnapshotPlanTaskWhereInput | null;
  vm_snapshots_every?: VmSnapshotWhereInput | null;
  vm_snapshots_none?: VmSnapshotWhereInput | null;
  vm_snapshots_some?: VmSnapshotWhereInput | null;
}

export interface VmSnapshotWhereInput {
  AND?: VmSnapshotWhereInput[] | null;
  clock_offset?: VmClockOffset | null;
  clock_offset_in?: VmClockOffset[] | null;
  clock_offset_not?: VmClockOffset | null;
  clock_offset_not_in?: VmClockOffset[] | null;
  cluster?: ClusterWhereInput | null;
  consistent_type?: ConsistentType | null;
  consistent_type_in?: ConsistentType[] | null;
  consistent_type_not?: ConsistentType | null;
  consistent_type_not_in?: ConsistentType[] | null;
  cpu_model?: string | null;
  cpu_model_contains?: string | null;
  cpu_model_ends_with?: string | null;
  cpu_model_gt?: string | null;
  cpu_model_gte?: string | null;
  cpu_model_in?: string[] | null;
  cpu_model_lt?: string | null;
  cpu_model_lte?: string | null;
  cpu_model_not?: string | null;
  cpu_model_not_contains?: string | null;
  cpu_model_not_ends_with?: string | null;
  cpu_model_not_in?: string[] | null;
  cpu_model_not_starts_with?: string | null;
  cpu_model_starts_with?: string | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  firmware?: VmFirmware | null;
  firmware_in?: VmFirmware[] | null;
  firmware_not?: VmFirmware | null;
  firmware_not_in?: VmFirmware[] | null;
  ha?: boolean | null;
  ha_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  io_policy?: VmDiskIoPolicy | null;
  io_policy_in?: VmDiskIoPolicy[] | null;
  io_policy_not?: VmDiskIoPolicy | null;
  io_policy_not_in?: VmDiskIoPolicy[] | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format double */
  max_bandwidth?: number | null;

  /** @format double */
  max_bandwidth_gt?: number | null;

  /** @format double */
  max_bandwidth_gte?: number | null;
  max_bandwidth_in?: number[] | null;

  /** @format double */
  max_bandwidth_lt?: number | null;

  /** @format double */
  max_bandwidth_lte?: number | null;

  /** @format double */
  max_bandwidth_not?: number | null;
  max_bandwidth_not_in?: number[] | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_in?: VmDiskIoRestrictType[] | null;
  max_bandwidth_policy_not?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_not_in?: VmDiskIoRestrictType[] | null;

  /** @format double */
  max_iops?: number | null;

  /** @format double */
  max_iops_gt?: number | null;

  /** @format double */
  max_iops_gte?: number | null;
  max_iops_in?: number[] | null;

  /** @format double */
  max_iops_lt?: number | null;

  /** @format double */
  max_iops_lte?: number | null;

  /** @format double */
  max_iops_not?: number | null;
  max_iops_not_in?: number[] | null;
  max_iops_policy?: VmDiskIoRestrictType | null;
  max_iops_policy_in?: VmDiskIoRestrictType[] | null;
  max_iops_policy_not?: VmDiskIoRestrictType | null;
  max_iops_policy_not_in?: VmDiskIoRestrictType[] | null;

  /** @format double */
  memory?: number | null;

  /** @format double */
  memory_gt?: number | null;

  /** @format double */
  memory_gte?: number | null;
  memory_in?: number[] | null;

  /** @format double */
  memory_lt?: number | null;

  /** @format double */
  memory_lte?: number | null;

  /** @format double */
  memory_not?: number | null;
  memory_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: VmSnapshotWhereInput[] | null;
  OR?: VmSnapshotWhereInput[] | null;

  /** @format double */
  size?: number | null;

  /** @format double */
  size_gt?: number | null;

  /** @format double */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format double */
  size_lt?: number | null;

  /** @format double */
  size_lte?: number | null;

  /** @format double */
  size_not?: number | null;
  size_not_in?: number[] | null;
  snapshot_group?: SnapshotGroupWhereInput | null;

  /** @format double */
  vcpu?: number | null;

  /** @format double */
  vcpu_gt?: number | null;

  /** @format double */
  vcpu_gte?: number | null;
  vcpu_in?: number[] | null;

  /** @format double */
  vcpu_lt?: number | null;

  /** @format double */
  vcpu_lte?: number | null;

  /** @format double */
  vcpu_not?: number | null;
  vcpu_not_in?: number[] | null;
  vm?: VmWhereInput | null;
  win_opt?: boolean | null;
  win_opt_not?: boolean | null;
}

export type ConsistentType = "CRASH_CONSISTENT" | "FILE_SYSTEM_CONSISTENT";

export type SnapshotPlanExecuteStatus = "CREATED" | "FAILED" | "IN_PROGRESS" | "SUCCEED" | "UNSPECIFIED";

export type SnapshotPlanTaskType = "TASK_TYPE_CLONE" | "TASK_TYPE_PROTECT" | "TASK_TYPE_ROLLBACK";

export type SnapshotPlanStatus = "NORMAL" | "STOPPED" | "SUSPENDED";

export type VmStatus = "DELETED" | "RUNNING" | "STOPPED" | "SUSPENDED" | "UNKNOWN";

export interface UsbDeviceWhereInput {
  AND?: UsbDeviceWhereInput[] | null;
  binded?: boolean | null;
  binded_not?: boolean | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  manufacturer?: string | null;
  manufacturer_contains?: string | null;
  manufacturer_ends_with?: string | null;
  manufacturer_gt?: string | null;
  manufacturer_gte?: string | null;
  manufacturer_in?: string[] | null;
  manufacturer_lt?: string | null;
  manufacturer_lte?: string | null;
  manufacturer_not?: string | null;
  manufacturer_not_contains?: string | null;
  manufacturer_not_ends_with?: string | null;
  manufacturer_not_in?: string[] | null;
  manufacturer_not_starts_with?: string | null;
  manufacturer_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: UsbDeviceWhereInput[] | null;
  OR?: UsbDeviceWhereInput[] | null;

  /** @format double */
  size?: number | null;

  /** @format double */
  size_gt?: number | null;

  /** @format double */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format double */
  size_lt?: number | null;

  /** @format double */
  size_lte?: number | null;

  /** @format double */
  size_not?: number | null;
  size_not_in?: number[] | null;
  status?: UsbDeviceStatus | null;
  status_in?: UsbDeviceStatus[] | null;
  status_not?: UsbDeviceStatus | null;
  status_not_in?: UsbDeviceStatus[] | null;
  usb_type?: string | null;
  usb_type_contains?: string | null;
  usb_type_ends_with?: string | null;
  usb_type_gt?: string | null;
  usb_type_gte?: string | null;
  usb_type_in?: string[] | null;
  usb_type_lt?: string | null;
  usb_type_lte?: string | null;
  usb_type_not?: string | null;
  usb_type_not_contains?: string | null;
  usb_type_not_ends_with?: string | null;
  usb_type_not_in?: string[] | null;
  usb_type_not_starts_with?: string | null;
  usb_type_starts_with?: string | null;
  vm?: VmWhereInput | null;
}

export type UsbDeviceStatus = "EJECTED" | "NORMAL";

export type VmVideoType = "CIRRUS" | "QXL" | "VGA" | "VIRTIO";

export interface VmDiskWhereInput {
  AND?: VmDiskWhereInput[] | null;

  /** @format double */
  boot?: number | null;

  /** @format double */
  boot_gt?: number | null;

  /** @format double */
  boot_gte?: number | null;
  boot_in?: number[] | null;

  /** @format double */
  boot_lt?: number | null;

  /** @format double */
  boot_lte?: number | null;

  /** @format double */
  boot_not?: number | null;
  boot_not_in?: number[] | null;
  bus?: Bus | null;
  bus_in?: Bus[] | null;
  bus_not?: Bus | null;
  bus_not_in?: Bus[] | null;
  cloud_init_image_name?: string | null;
  cloud_init_image_name_contains?: string | null;
  cloud_init_image_name_ends_with?: string | null;
  cloud_init_image_name_gt?: string | null;
  cloud_init_image_name_gte?: string | null;
  cloud_init_image_name_in?: string[] | null;
  cloud_init_image_name_lt?: string | null;
  cloud_init_image_name_lte?: string | null;
  cloud_init_image_name_not?: string | null;
  cloud_init_image_name_not_contains?: string | null;
  cloud_init_image_name_not_ends_with?: string | null;
  cloud_init_image_name_not_in?: string[] | null;
  cloud_init_image_name_not_starts_with?: string | null;
  cloud_init_image_name_starts_with?: string | null;
  cloud_init_image_path?: string | null;
  cloud_init_image_path_contains?: string | null;
  cloud_init_image_path_ends_with?: string | null;
  cloud_init_image_path_gt?: string | null;
  cloud_init_image_path_gte?: string | null;
  cloud_init_image_path_in?: string[] | null;
  cloud_init_image_path_lt?: string | null;
  cloud_init_image_path_lte?: string | null;
  cloud_init_image_path_not?: string | null;
  cloud_init_image_path_not_contains?: string | null;
  cloud_init_image_path_not_ends_with?: string | null;
  cloud_init_image_path_not_in?: string[] | null;
  cloud_init_image_path_not_starts_with?: string | null;
  cloud_init_image_path_starts_with?: string | null;
  device?: string | null;
  device_contains?: string | null;
  device_ends_with?: string | null;
  device_gt?: string | null;
  device_gte?: string | null;
  device_in?: string[] | null;
  device_lt?: string | null;
  device_lte?: string | null;
  device_not?: string | null;
  device_not_contains?: string | null;
  device_not_ends_with?: string | null;
  device_not_in?: string[] | null;
  device_not_starts_with?: string | null;
  device_starts_with?: string | null;
  disabled?: boolean | null;
  disabled_not?: boolean | null;
  elf_image?: ElfImageWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;

  /** @format double */
  key?: number | null;

  /** @format double */
  key_gt?: number | null;

  /** @format double */
  key_gte?: number | null;
  key_in?: number[] | null;

  /** @format double */
  key_lt?: number | null;

  /** @format double */
  key_lte?: number | null;

  /** @format double */
  key_not?: number | null;
  key_not_in?: number[] | null;

  /** @format double */
  max_bandwidth?: number | null;

  /** @format double */
  max_bandwidth_gt?: number | null;

  /** @format double */
  max_bandwidth_gte?: number | null;
  max_bandwidth_in?: number[] | null;

  /** @format double */
  max_bandwidth_lt?: number | null;

  /** @format double */
  max_bandwidth_lte?: number | null;

  /** @format double */
  max_bandwidth_not?: number | null;
  max_bandwidth_not_in?: number[] | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_in?: VmDiskIoRestrictType[] | null;
  max_bandwidth_policy_not?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_not_in?: VmDiskIoRestrictType[] | null;

  /** @format double */
  max_iops?: number | null;

  /** @format double */
  max_iops_gt?: number | null;

  /** @format double */
  max_iops_gte?: number | null;
  max_iops_in?: number[] | null;

  /** @format double */
  max_iops_lt?: number | null;

  /** @format double */
  max_iops_lte?: number | null;

  /** @format double */
  max_iops_not?: number | null;
  max_iops_not_in?: number[] | null;
  max_iops_policy?: VmDiskIoRestrictType | null;
  max_iops_policy_in?: VmDiskIoRestrictType[] | null;
  max_iops_policy_not?: VmDiskIoRestrictType | null;
  max_iops_policy_not_in?: VmDiskIoRestrictType[] | null;
  NOT?: VmDiskWhereInput[] | null;
  OR?: VmDiskWhereInput[] | null;
  serial?: string | null;
  serial_contains?: string | null;
  serial_ends_with?: string | null;
  serial_gt?: string | null;
  serial_gte?: string | null;
  serial_in?: string[] | null;
  serial_lt?: string | null;
  serial_lte?: string | null;
  serial_not?: string | null;
  serial_not_contains?: string | null;
  serial_not_ends_with?: string | null;
  serial_not_in?: string[] | null;
  serial_not_starts_with?: string | null;
  serial_starts_with?: string | null;
  svt_image?: SvtImageWhereInput | null;
  type?: VmDiskType | null;
  type_in?: VmDiskType[] | null;
  type_not?: VmDiskType | null;
  type_not_in?: VmDiskType[] | null;
  unsafe_image_path?: string | null;
  unsafe_image_path_contains?: string | null;
  unsafe_image_path_ends_with?: string | null;
  unsafe_image_path_gt?: string | null;
  unsafe_image_path_gte?: string | null;
  unsafe_image_path_in?: string[] | null;
  unsafe_image_path_lt?: string | null;
  unsafe_image_path_lte?: string | null;
  unsafe_image_path_not?: string | null;
  unsafe_image_path_not_contains?: string | null;
  unsafe_image_path_not_ends_with?: string | null;
  unsafe_image_path_not_in?: string[] | null;
  unsafe_image_path_not_starts_with?: string | null;
  unsafe_image_path_starts_with?: string | null;
  unsafe_image_uuid?: string | null;
  unsafe_image_uuid_contains?: string | null;
  unsafe_image_uuid_ends_with?: string | null;
  unsafe_image_uuid_gt?: string | null;
  unsafe_image_uuid_gte?: string | null;
  unsafe_image_uuid_in?: string[] | null;
  unsafe_image_uuid_lt?: string | null;
  unsafe_image_uuid_lte?: string | null;
  unsafe_image_uuid_not?: string | null;
  unsafe_image_uuid_not_contains?: string | null;
  unsafe_image_uuid_not_ends_with?: string | null;
  unsafe_image_uuid_not_in?: string[] | null;
  unsafe_image_uuid_not_starts_with?: string | null;
  unsafe_image_uuid_starts_with?: string | null;
  unsafe_provision?: string | null;
  unsafe_provision_contains?: string | null;
  unsafe_provision_ends_with?: string | null;
  unsafe_provision_gt?: string | null;
  unsafe_provision_gte?: string | null;
  unsafe_provision_in?: string[] | null;
  unsafe_provision_lt?: string | null;
  unsafe_provision_lte?: string | null;
  unsafe_provision_not?: string | null;
  unsafe_provision_not_contains?: string | null;
  unsafe_provision_not_ends_with?: string | null;
  unsafe_provision_not_in?: string[] | null;
  unsafe_provision_not_starts_with?: string | null;
  unsafe_provision_starts_with?: string | null;
  vm?: VmWhereInput | null;
  vm_volume?: VmVolumeWhereInput | null;
}

export type Bus = "IDE" | "SCSI" | "VIRTIO";

export interface ElfImageWhereInput {
  AND?: ElfImageWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: ElfImageWhereInput[] | null;
  OR?: ElfImageWhereInput[] | null;
  path?: string | null;
  path_contains?: string | null;
  path_ends_with?: string | null;
  path_gt?: string | null;
  path_gte?: string | null;
  path_in?: string[] | null;
  path_lt?: string | null;
  path_lte?: string | null;
  path_not?: string | null;
  path_not_contains?: string | null;
  path_not_ends_with?: string | null;
  path_not_in?: string[] | null;
  path_not_starts_with?: string | null;
  path_starts_with?: string | null;

  /** @format double */
  size?: number | null;

  /** @format double */
  size_gt?: number | null;

  /** @format double */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format double */
  size_lt?: number | null;

  /** @format double */
  size_lte?: number | null;

  /** @format double */
  size_not?: number | null;
  size_not_in?: number[] | null;
  vm_disks_every?: VmDiskWhereInput | null;
  vm_disks_none?: VmDiskWhereInput | null;
  vm_disks_some?: VmDiskWhereInput | null;
  vm_snapshots_every?: VmSnapshotWhereInput | null;
  vm_snapshots_none?: VmSnapshotWhereInput | null;
  vm_snapshots_some?: VmSnapshotWhereInput | null;
  vm_templates_every?: VmTemplateWhereInput | null;
  vm_templates_none?: VmTemplateWhereInput | null;
  vm_templates_some?: VmTemplateWhereInput | null;
}

export interface VmTemplateWhereInput {
  AND?: VmTemplateWhereInput[] | null;
  clock_offset?: VmClockOffset | null;
  clock_offset_in?: VmClockOffset[] | null;
  clock_offset_not?: VmClockOffset | null;
  clock_offset_not_in?: VmClockOffset[] | null;
  cloud_init_supported?: boolean | null;
  cloud_init_supported_not?: boolean | null;
  cluster?: ClusterWhereInput | null;
  cpu_model?: string | null;
  cpu_model_contains?: string | null;
  cpu_model_ends_with?: string | null;
  cpu_model_gt?: string | null;
  cpu_model_gte?: string | null;
  cpu_model_in?: string[] | null;
  cpu_model_lt?: string | null;
  cpu_model_lte?: string | null;
  cpu_model_not?: string | null;
  cpu_model_not_contains?: string | null;
  cpu_model_not_ends_with?: string | null;
  cpu_model_not_in?: string[] | null;
  cpu_model_not_starts_with?: string | null;
  cpu_model_starts_with?: string | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  firmware?: VmFirmware | null;
  firmware_in?: VmFirmware[] | null;
  firmware_not?: VmFirmware | null;
  firmware_not_in?: VmFirmware[] | null;
  ha?: boolean | null;
  ha_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  io_policy?: VmDiskIoPolicy | null;
  io_policy_in?: VmDiskIoPolicy[] | null;
  io_policy_not?: VmDiskIoPolicy | null;
  io_policy_not_in?: VmDiskIoPolicy[] | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format double */
  max_bandwidth?: number | null;

  /** @format double */
  max_bandwidth_gt?: number | null;

  /** @format double */
  max_bandwidth_gte?: number | null;
  max_bandwidth_in?: number[] | null;

  /** @format double */
  max_bandwidth_lt?: number | null;

  /** @format double */
  max_bandwidth_lte?: number | null;

  /** @format double */
  max_bandwidth_not?: number | null;
  max_bandwidth_not_in?: number[] | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_in?: VmDiskIoRestrictType[] | null;
  max_bandwidth_policy_not?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_not_in?: VmDiskIoRestrictType[] | null;

  /** @format double */
  max_iops?: number | null;

  /** @format double */
  max_iops_gt?: number | null;

  /** @format double */
  max_iops_gte?: number | null;
  max_iops_in?: number[] | null;

  /** @format double */
  max_iops_lt?: number | null;

  /** @format double */
  max_iops_lte?: number | null;

  /** @format double */
  max_iops_not?: number | null;
  max_iops_not_in?: number[] | null;
  max_iops_policy?: VmDiskIoRestrictType | null;
  max_iops_policy_in?: VmDiskIoRestrictType[] | null;
  max_iops_policy_not?: VmDiskIoRestrictType | null;
  max_iops_policy_not_in?: VmDiskIoRestrictType[] | null;

  /** @format double */
  memory?: number | null;

  /** @format double */
  memory_gt?: number | null;

  /** @format double */
  memory_gte?: number | null;
  memory_in?: number[] | null;

  /** @format double */
  memory_lt?: number | null;

  /** @format double */
  memory_lte?: number | null;

  /** @format double */
  memory_not?: number | null;
  memory_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: VmTemplateWhereInput[] | null;
  OR?: VmTemplateWhereInput[] | null;

  /** @format double */
  size?: number | null;

  /** @format double */
  size_gt?: number | null;

  /** @format double */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format double */
  size_lt?: number | null;

  /** @format double */
  size_lte?: number | null;

  /** @format double */
  size_not?: number | null;
  size_not_in?: number[] | null;

  /** @format double */
  vcpu?: number | null;

  /** @format double */
  vcpu_gt?: number | null;

  /** @format double */
  vcpu_gte?: number | null;
  vcpu_in?: number[] | null;

  /** @format double */
  vcpu_lt?: number | null;

  /** @format double */
  vcpu_lte?: number | null;

  /** @format double */
  vcpu_not?: number | null;
  vcpu_not_in?: number[] | null;
  video_type?: string | null;
  video_type_contains?: string | null;
  video_type_ends_with?: string | null;
  video_type_gt?: string | null;
  video_type_gte?: string | null;
  video_type_in?: string[] | null;
  video_type_lt?: string | null;
  video_type_lte?: string | null;
  video_type_not?: string | null;
  video_type_not_contains?: string | null;
  video_type_not_ends_with?: string | null;
  video_type_not_in?: string[] | null;
  video_type_not_starts_with?: string | null;
  video_type_starts_with?: string | null;
  win_opt?: boolean | null;
  win_opt_not?: boolean | null;
}

export interface SvtImageWhereInput {
  AND?: SvtImageWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: SvtImageWhereInput[] | null;
  OR?: SvtImageWhereInput[] | null;
  path?: string | null;
  path_contains?: string | null;
  path_ends_with?: string | null;
  path_gt?: string | null;
  path_gte?: string | null;
  path_in?: string[] | null;
  path_lt?: string | null;
  path_lte?: string | null;
  path_not?: string | null;
  path_not_contains?: string | null;
  path_not_ends_with?: string | null;
  path_not_in?: string[] | null;
  path_not_starts_with?: string | null;
  path_starts_with?: string | null;

  /** @format double */
  size?: number | null;

  /** @format double */
  size_gt?: number | null;

  /** @format double */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format double */
  size_lt?: number | null;

  /** @format double */
  size_lte?: number | null;

  /** @format double */
  size_not?: number | null;
  size_not_in?: number[] | null;

  /** @format double */
  version?: number | null;

  /** @format double */
  version_gt?: number | null;

  /** @format double */
  version_gte?: number | null;
  version_in?: number[] | null;

  /** @format double */
  version_lt?: number | null;

  /** @format double */
  version_lte?: number | null;

  /** @format double */
  version_not?: number | null;
  version_not_in?: number[] | null;
  vm_disks_every?: VmDiskWhereInput | null;
  vm_disks_none?: VmDiskWhereInput | null;
  vm_disks_some?: VmDiskWhereInput | null;
}

export type VmDiskType = "CD_ROM" | "DISK";

export interface VmVolumeWhereInput {
  AND?: VmVolumeWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  elf_storage_policy?: VmVolumeElfStoragePolicyType | null;
  elf_storage_policy_in?: VmVolumeElfStoragePolicyType[] | null;
  elf_storage_policy_not?: VmVolumeElfStoragePolicyType | null;
  elf_storage_policy_not_in?: VmVolumeElfStoragePolicyType[] | null;

  /** @format double */
  guest_size_usage?: number | null;

  /** @format double */
  guest_size_usage_gt?: number | null;

  /** @format double */
  guest_size_usage_gte?: number | null;
  guest_size_usage_in?: number[] | null;

  /** @format double */
  guest_size_usage_lt?: number | null;

  /** @format double */
  guest_size_usage_lte?: number | null;

  /** @format double */
  guest_size_usage_not?: number | null;
  guest_size_usage_not_in?: number[] | null;

  /** @format double */
  guest_used_size?: number | null;

  /** @format double */
  guest_used_size_gt?: number | null;

  /** @format double */
  guest_used_size_gte?: number | null;
  guest_used_size_in?: number[] | null;

  /** @format double */
  guest_used_size_lt?: number | null;

  /** @format double */
  guest_used_size_lte?: number | null;

  /** @format double */
  guest_used_size_not?: number | null;
  guest_used_size_not_in?: number[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  lun?: IscsiLunWhereInput | null;
  mounting?: boolean | null;
  mounting_not?: boolean | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: VmVolumeWhereInput[] | null;
  OR?: VmVolumeWhereInput[] | null;
  path?: string | null;
  path_contains?: string | null;
  path_ends_with?: string | null;
  path_gt?: string | null;
  path_gte?: string | null;
  path_in?: string[] | null;
  path_lt?: string | null;
  path_lte?: string | null;
  path_not?: string | null;
  path_not_contains?: string | null;
  path_not_ends_with?: string | null;
  path_not_in?: string[] | null;
  path_not_starts_with?: string | null;
  path_starts_with?: string | null;
  sharing?: boolean | null;
  sharing_not?: boolean | null;

  /** @format double */
  size?: number | null;

  /** @format double */
  size_gt?: number | null;

  /** @format double */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format double */
  size_lt?: number | null;

  /** @format double */
  size_lte?: number | null;

  /** @format double */
  size_not?: number | null;
  size_not_in?: number[] | null;

  /** @format double */
  unique_size?: number | null;

  /** @format double */
  unique_size_gt?: number | null;

  /** @format double */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format double */
  unique_size_lt?: number | null;

  /** @format double */
  unique_size_lte?: number | null;

  /** @format double */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
  vm_disks_every?: VmDiskWhereInput | null;
  vm_disks_none?: VmDiskWhereInput | null;
  vm_disks_some?: VmDiskWhereInput | null;
}

export type VmVolumeElfStoragePolicyType =
  | "REPLICA_1_THICK_PROVISION"
  | "REPLICA_1_THIN_PROVISION"
  | "REPLICA_2_THICK_PROVISION"
  | "REPLICA_2_THIN_PROVISION"
  | "REPLICA_3_THICK_PROVISION"
  | "REPLICA_3_THIN_PROVISION";

export interface VmPlacementGroupWhereInput {
  AND?: VmPlacementGroupWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  enabled?: boolean | null;
  enabled_not?: boolean | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  local_updated_at?: string | null;
  local_updated_at_gt?: string | null;
  local_updated_at_gte?: string | null;
  local_updated_at_in?: string[] | null;
  local_updated_at_lt?: string | null;
  local_updated_at_lte?: string | null;
  local_updated_at_not?: string | null;
  local_updated_at_not_in?: string[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: VmPlacementGroupWhereInput[] | null;
  OR?: VmPlacementGroupWhereInput[] | null;
  vm_host_must_enabled?: boolean | null;
  vm_host_must_enabled_not?: boolean | null;
  vm_host_must_host_uuids_every?: HostWhereInput | null;
  vm_host_must_host_uuids_none?: HostWhereInput | null;
  vm_host_must_host_uuids_some?: HostWhereInput | null;
  vm_host_must_policy?: boolean | null;
  vm_host_must_policy_not?: boolean | null;
  vm_host_prefer_enabled?: boolean | null;
  vm_host_prefer_enabled_not?: boolean | null;
  vm_host_prefer_host_uuids_every?: HostWhereInput | null;
  vm_host_prefer_host_uuids_none?: HostWhereInput | null;
  vm_host_prefer_host_uuids_some?: HostWhereInput | null;
  vm_host_prefer_policy?: boolean | null;
  vm_host_prefer_policy_not?: boolean | null;
  vm_vm_policy?: VmVmPolicy | null;
  vm_vm_policy_enabled?: boolean | null;
  vm_vm_policy_enabled_not?: boolean | null;
  vm_vm_policy_in?: VmVmPolicy[] | null;
  vm_vm_policy_not?: VmVmPolicy | null;
  vm_vm_policy_not_in?: VmVmPolicy[] | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
}

export type VmVmPolicy = "MUST_DIFFERENT" | "MUST_SAME" | "PREFER_DIFFERENT" | "PREFER_SAME";

export type VmToolsStatus = "NOT_INSTALLED" | "NOT_RUNNING" | "RESTRICTION" | "RUNNING";

export interface PmemDimmWhereInput {
  AND?: PmemDimmWhereInput[] | null;

  /** @format double */
  capacity?: number | null;

  /** @format double */
  capacity_gt?: number | null;

  /** @format double */
  capacity_gte?: number | null;
  capacity_in?: number[] | null;

  /** @format double */
  capacity_lt?: number | null;

  /** @format double */
  capacity_lte?: number | null;

  /** @format double */
  capacity_not?: number | null;
  capacity_not_in?: number[] | null;
  device_locator?: string | null;
  device_locator_contains?: string | null;
  device_locator_ends_with?: string | null;
  device_locator_gt?: string | null;
  device_locator_gte?: string | null;
  device_locator_in?: string[] | null;
  device_locator_lt?: string | null;
  device_locator_lte?: string | null;
  device_locator_not?: string | null;
  device_locator_not_contains?: string | null;
  device_locator_not_ends_with?: string | null;
  device_locator_not_in?: string[] | null;
  device_locator_not_starts_with?: string | null;
  device_locator_starts_with?: string | null;
  disk?: DiskWhereInput | null;
  health_status?: DiskHealthStatus | null;
  health_status_in?: DiskHealthStatus[] | null;
  health_status_not?: DiskHealthStatus | null;
  health_status_not_in?: DiskHealthStatus[] | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: PmemDimmWhereInput[] | null;

  /** @format double */
  numa_node?: number | null;

  /** @format double */
  numa_node_gt?: number | null;

  /** @format double */
  numa_node_gte?: number | null;
  numa_node_in?: number[] | null;

  /** @format double */
  numa_node_lt?: number | null;

  /** @format double */
  numa_node_lte?: number | null;

  /** @format double */
  numa_node_not?: number | null;
  numa_node_not_in?: number[] | null;
  OR?: PmemDimmWhereInput[] | null;
  part_number?: string | null;
  part_number_contains?: string | null;
  part_number_ends_with?: string | null;
  part_number_gt?: string | null;
  part_number_gte?: string | null;
  part_number_in?: string[] | null;
  part_number_lt?: string | null;
  part_number_lte?: string | null;
  part_number_not?: string | null;
  part_number_not_contains?: string | null;
  part_number_not_ends_with?: string | null;
  part_number_not_in?: string[] | null;
  part_number_not_starts_with?: string | null;
  part_number_starts_with?: string | null;

  /** @format double */
  remaining_life_percent?: number | null;

  /** @format double */
  remaining_life_percent_gt?: number | null;

  /** @format double */
  remaining_life_percent_gte?: number | null;
  remaining_life_percent_in?: number[] | null;

  /** @format double */
  remaining_life_percent_lt?: number | null;

  /** @format double */
  remaining_life_percent_lte?: number | null;

  /** @format double */
  remaining_life_percent_not?: number | null;
  remaining_life_percent_not_in?: number[] | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_starts_with?: string | null;
}

export type HostState = "IDLE" | "IN_USE" | "REMOVING";

export type HostStatus =
  | "CONNECTED_ERROR"
  | "CONNECTED_HEALTHY"
  | "CONNECTED_WARNING"
  | "CONNECTING"
  | "INITIALIZING"
  | "SESSION_EXPIRED";

export interface VsphereEsxiAccountWhereInput {
  AND?: VsphereEsxiAccountWhereInput[] | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  ip?: string | null;
  ip_contains?: string | null;
  ip_ends_with?: string | null;
  ip_gt?: string | null;
  ip_gte?: string | null;
  ip_in?: string[] | null;
  ip_lt?: string | null;
  ip_lte?: string | null;
  ip_not?: string | null;
  ip_not_contains?: string | null;
  ip_not_ends_with?: string | null;
  ip_not_in?: string[] | null;
  ip_not_starts_with?: string | null;
  ip_starts_with?: string | null;
  is_valid?: boolean | null;
  is_valid_not?: boolean | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  NOT?: VsphereEsxiAccountWhereInput[] | null;
  OR?: VsphereEsxiAccountWhereInput[] | null;
  password?: string | null;
  password_contains?: string | null;
  password_ends_with?: string | null;
  password_gt?: string | null;
  password_gte?: string | null;
  password_in?: string[] | null;
  password_lt?: string | null;
  password_lte?: string | null;
  password_not?: string | null;
  password_not_contains?: string | null;
  password_not_ends_with?: string | null;
  password_not_in?: string[] | null;
  password_not_starts_with?: string | null;
  password_starts_with?: string | null;

  /** @format double */
  port?: number | null;

  /** @format double */
  port_gt?: number | null;

  /** @format double */
  port_gte?: number | null;
  port_in?: number[] | null;

  /** @format double */
  port_lt?: number | null;

  /** @format double */
  port_lte?: number | null;

  /** @format double */
  port_not?: number | null;
  port_not_in?: number[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
}

export interface ZoneWhereInput {
  AND?: ZoneWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  datacenter?: DatacenterWhereInput | null;

  /** @format double */
  failure_data_space?: number | null;

  /** @format double */
  failure_data_space_gt?: number | null;

  /** @format double */
  failure_data_space_gte?: number | null;
  failure_data_space_in?: number[] | null;

  /** @format double */
  failure_data_space_lt?: number | null;

  /** @format double */
  failure_data_space_lte?: number | null;

  /** @format double */
  failure_data_space_not?: number | null;
  failure_data_space_not_in?: number[] | null;

  /** @format double */
  host_num?: number | null;

  /** @format double */
  host_num_gt?: number | null;

  /** @format double */
  host_num_gte?: number | null;
  host_num_in?: number[] | null;

  /** @format double */
  host_num_lt?: number | null;

  /** @format double */
  host_num_lte?: number | null;

  /** @format double */
  host_num_not?: number | null;
  host_num_not_in?: number[] | null;
  hosts_every?: HostWhereInput | null;
  hosts_none?: HostWhereInput | null;
  hosts_some?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  is_preferred?: boolean | null;
  is_preferred_not?: boolean | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  NOT?: ZoneWhereInput[] | null;
  OR?: ZoneWhereInput[] | null;

  /** @format double */
  provisioned_cpu_cores?: number | null;

  /** @format double */
  provisioned_cpu_cores_for_active_vm?: number | null;

  /** @format double */
  provisioned_cpu_cores_for_active_vm_gt?: number | null;

  /** @format double */
  provisioned_cpu_cores_for_active_vm_gte?: number | null;
  provisioned_cpu_cores_for_active_vm_in?: number[] | null;

  /** @format double */
  provisioned_cpu_cores_for_active_vm_lt?: number | null;

  /** @format double */
  provisioned_cpu_cores_for_active_vm_lte?: number | null;

  /** @format double */
  provisioned_cpu_cores_for_active_vm_not?: number | null;
  provisioned_cpu_cores_for_active_vm_not_in?: number[] | null;

  /** @format double */
  provisioned_cpu_cores_gt?: number | null;

  /** @format double */
  provisioned_cpu_cores_gte?: number | null;
  provisioned_cpu_cores_in?: number[] | null;

  /** @format double */
  provisioned_cpu_cores_lt?: number | null;

  /** @format double */
  provisioned_cpu_cores_lte?: number | null;

  /** @format double */
  provisioned_cpu_cores_not?: number | null;
  provisioned_cpu_cores_not_in?: number[] | null;

  /** @format double */
  provisioned_data_space?: number | null;

  /** @format double */
  provisioned_data_space_gt?: number | null;

  /** @format double */
  provisioned_data_space_gte?: number | null;
  provisioned_data_space_in?: number[] | null;

  /** @format double */
  provisioned_data_space_lt?: number | null;

  /** @format double */
  provisioned_data_space_lte?: number | null;

  /** @format double */
  provisioned_data_space_not?: number | null;
  provisioned_data_space_not_in?: number[] | null;

  /** @format double */
  provisioned_memory_bytes?: number | null;

  /** @format double */
  provisioned_memory_bytes_gt?: number | null;

  /** @format double */
  provisioned_memory_bytes_gte?: number | null;
  provisioned_memory_bytes_in?: number[] | null;

  /** @format double */
  provisioned_memory_bytes_lt?: number | null;

  /** @format double */
  provisioned_memory_bytes_lte?: number | null;

  /** @format double */
  provisioned_memory_bytes_not?: number | null;
  provisioned_memory_bytes_not_in?: number[] | null;

  /** @format double */
  running_vm_num?: number | null;

  /** @format double */
  running_vm_num_gt?: number | null;

  /** @format double */
  running_vm_num_gte?: number | null;
  running_vm_num_in?: number[] | null;

  /** @format double */
  running_vm_num_lt?: number | null;

  /** @format double */
  running_vm_num_lte?: number | null;

  /** @format double */
  running_vm_num_not?: number | null;
  running_vm_num_not_in?: number[] | null;

  /** @format double */
  stopped_vm_num?: number | null;

  /** @format double */
  stopped_vm_num_gt?: number | null;

  /** @format double */
  stopped_vm_num_gte?: number | null;
  stopped_vm_num_in?: number[] | null;

  /** @format double */
  stopped_vm_num_lt?: number | null;

  /** @format double */
  stopped_vm_num_lte?: number | null;

  /** @format double */
  stopped_vm_num_not?: number | null;
  stopped_vm_num_not_in?: number[] | null;

  /** @format double */
  suspended_vm_num?: number | null;

  /** @format double */
  suspended_vm_num_gt?: number | null;

  /** @format double */
  suspended_vm_num_gte?: number | null;
  suspended_vm_num_in?: number[] | null;

  /** @format double */
  suspended_vm_num_lt?: number | null;

  /** @format double */
  suspended_vm_num_lte?: number | null;

  /** @format double */
  suspended_vm_num_not?: number | null;
  suspended_vm_num_not_in?: number[] | null;

  /** @format double */
  total_cache_capacity?: number | null;

  /** @format double */
  total_cache_capacity_gt?: number | null;

  /** @format double */
  total_cache_capacity_gte?: number | null;
  total_cache_capacity_in?: number[] | null;

  /** @format double */
  total_cache_capacity_lt?: number | null;

  /** @format double */
  total_cache_capacity_lte?: number | null;

  /** @format double */
  total_cache_capacity_not?: number | null;
  total_cache_capacity_not_in?: number[] | null;

  /** @format double */
  total_cpu_cores?: number | null;

  /** @format double */
  total_cpu_cores_gt?: number | null;

  /** @format double */
  total_cpu_cores_gte?: number | null;
  total_cpu_cores_in?: number[] | null;

  /** @format double */
  total_cpu_cores_lt?: number | null;

  /** @format double */
  total_cpu_cores_lte?: number | null;

  /** @format double */
  total_cpu_cores_not?: number | null;
  total_cpu_cores_not_in?: number[] | null;

  /** @format double */
  total_cpu_hz?: number | null;

  /** @format double */
  total_cpu_hz_gt?: number | null;

  /** @format double */
  total_cpu_hz_gte?: number | null;
  total_cpu_hz_in?: number[] | null;

  /** @format double */
  total_cpu_hz_lt?: number | null;

  /** @format double */
  total_cpu_hz_lte?: number | null;

  /** @format double */
  total_cpu_hz_not?: number | null;
  total_cpu_hz_not_in?: number[] | null;

  /** @format double */
  total_data_capacity?: number | null;

  /** @format double */
  total_data_capacity_gt?: number | null;

  /** @format double */
  total_data_capacity_gte?: number | null;
  total_data_capacity_in?: number[] | null;

  /** @format double */
  total_data_capacity_lt?: number | null;

  /** @format double */
  total_data_capacity_lte?: number | null;

  /** @format double */
  total_data_capacity_not?: number | null;
  total_data_capacity_not_in?: number[] | null;

  /** @format double */
  total_memory_bytes?: number | null;

  /** @format double */
  total_memory_bytes_gt?: number | null;

  /** @format double */
  total_memory_bytes_gte?: number | null;
  total_memory_bytes_in?: number[] | null;

  /** @format double */
  total_memory_bytes_lt?: number | null;

  /** @format double */
  total_memory_bytes_lte?: number | null;

  /** @format double */
  total_memory_bytes_not?: number | null;
  total_memory_bytes_not_in?: number[] | null;

  /** @format double */
  used_data_space?: number | null;

  /** @format double */
  used_data_space_gt?: number | null;

  /** @format double */
  used_data_space_gte?: number | null;
  used_data_space_in?: number[] | null;

  /** @format double */
  used_data_space_lt?: number | null;

  /** @format double */
  used_data_space_lte?: number | null;

  /** @format double */
  used_data_space_not?: number | null;
  used_data_space_not_in?: number[] | null;

  /** @format double */
  valid_data_space?: number | null;

  /** @format double */
  valid_data_space_gt?: number | null;

  /** @format double */
  valid_data_space_gte?: number | null;
  valid_data_space_in?: number[] | null;

  /** @format double */
  valid_data_space_lt?: number | null;

  /** @format double */
  valid_data_space_lte?: number | null;

  /** @format double */
  valid_data_space_not?: number | null;
  valid_data_space_not_in?: number[] | null;

  /** @format double */
  vm_num?: number | null;

  /** @format double */
  vm_num_gt?: number | null;

  /** @format double */
  vm_num_gte?: number | null;
  vm_num_in?: number[] | null;

  /** @format double */
  vm_num_lt?: number | null;

  /** @format double */
  vm_num_lte?: number | null;

  /** @format double */
  vm_num_not?: number | null;
  vm_num_not_in?: number[] | null;
}

export type DiskUsage = "BOOT" | "CACHE" | "CACHE_AND_META" | "DATA" | "DATA_AND_META";

export type DiskType = "HDD" | "PMem" | "SSD";

export type DiskUsageStatus = "ISOLATED" | "MOUNTED" | "MOUNTING" | "PARTIAL_MOUNTED" | "UNMOUNTED" | "UNMOUNTING";

export interface NamespaceGroupWhereInput {
  AND?: NamespaceGroupWhereInput[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_create_time?: string | null;
  local_create_time_gt?: string | null;
  local_create_time_gte?: string | null;
  local_create_time_in?: string[] | null;
  local_create_time_lt?: string | null;
  local_create_time_lte?: string | null;
  local_create_time_not?: string | null;
  local_create_time_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  namespaces_every?: NvmfNamespaceWhereInput | null;
  namespaces_none?: NvmfNamespaceWhereInput | null;
  namespaces_some?: NvmfNamespaceWhereInput | null;
  NOT?: NamespaceGroupWhereInput[] | null;
  nvmf_subsystem?: NvmfSubsystemWhereInput | null;
  OR?: NamespaceGroupWhereInput[] | null;
}

export interface NvmfNamespaceWhereInput {
  AND?: NvmfNamespaceWhereInput[] | null;

  /** @format double */
  assigned_size?: number | null;

  /** @format double */
  assigned_size_gt?: number | null;

  /** @format double */
  assigned_size_gte?: number | null;
  assigned_size_in?: number[] | null;

  /** @format double */
  assigned_size_lt?: number | null;

  /** @format double */
  assigned_size_lte?: number | null;

  /** @format double */
  assigned_size_not?: number | null;
  assigned_size_not_in?: number[] | null;

  /** @format double */
  bps?: number | null;

  /** @format double */
  bps_gt?: number | null;

  /** @format double */
  bps_gte?: number | null;
  bps_in?: number[] | null;

  /** @format double */
  bps_lt?: number | null;

  /** @format double */
  bps_lte?: number | null;

  /** @format double */
  bps_max?: number | null;

  /** @format double */
  bps_max_gt?: number | null;

  /** @format double */
  bps_max_gte?: number | null;
  bps_max_in?: number[] | null;

  /** @format double */
  bps_max_length?: number | null;

  /** @format double */
  bps_max_length_gt?: number | null;

  /** @format double */
  bps_max_length_gte?: number | null;
  bps_max_length_in?: number[] | null;

  /** @format double */
  bps_max_length_lt?: number | null;

  /** @format double */
  bps_max_length_lte?: number | null;

  /** @format double */
  bps_max_length_not?: number | null;
  bps_max_length_not_in?: number[] | null;

  /** @format double */
  bps_max_lt?: number | null;

  /** @format double */
  bps_max_lte?: number | null;

  /** @format double */
  bps_max_not?: number | null;
  bps_max_not_in?: number[] | null;

  /** @format double */
  bps_not?: number | null;
  bps_not_in?: number[] | null;

  /** @format double */
  bps_rd?: number | null;

  /** @format double */
  bps_rd_gt?: number | null;

  /** @format double */
  bps_rd_gte?: number | null;
  bps_rd_in?: number[] | null;

  /** @format double */
  bps_rd_lt?: number | null;

  /** @format double */
  bps_rd_lte?: number | null;

  /** @format double */
  bps_rd_max?: number | null;

  /** @format double */
  bps_rd_max_gt?: number | null;

  /** @format double */
  bps_rd_max_gte?: number | null;
  bps_rd_max_in?: number[] | null;

  /** @format double */
  bps_rd_max_length?: number | null;

  /** @format double */
  bps_rd_max_length_gt?: number | null;

  /** @format double */
  bps_rd_max_length_gte?: number | null;
  bps_rd_max_length_in?: number[] | null;

  /** @format double */
  bps_rd_max_length_lt?: number | null;

  /** @format double */
  bps_rd_max_length_lte?: number | null;

  /** @format double */
  bps_rd_max_length_not?: number | null;
  bps_rd_max_length_not_in?: number[] | null;

  /** @format double */
  bps_rd_max_lt?: number | null;

  /** @format double */
  bps_rd_max_lte?: number | null;

  /** @format double */
  bps_rd_max_not?: number | null;
  bps_rd_max_not_in?: number[] | null;

  /** @format double */
  bps_rd_not?: number | null;
  bps_rd_not_in?: number[] | null;

  /** @format double */
  bps_wr?: number | null;

  /** @format double */
  bps_wr_gt?: number | null;

  /** @format double */
  bps_wr_gte?: number | null;
  bps_wr_in?: number[] | null;

  /** @format double */
  bps_wr_lt?: number | null;

  /** @format double */
  bps_wr_lte?: number | null;

  /** @format double */
  bps_wr_max?: number | null;

  /** @format double */
  bps_wr_max_gt?: number | null;

  /** @format double */
  bps_wr_max_gte?: number | null;
  bps_wr_max_in?: number[] | null;

  /** @format double */
  bps_wr_max_length?: number | null;

  /** @format double */
  bps_wr_max_length_gt?: number | null;

  /** @format double */
  bps_wr_max_length_gte?: number | null;
  bps_wr_max_length_in?: number[] | null;

  /** @format double */
  bps_wr_max_length_lt?: number | null;

  /** @format double */
  bps_wr_max_length_lte?: number | null;

  /** @format double */
  bps_wr_max_length_not?: number | null;
  bps_wr_max_length_not_in?: number[] | null;

  /** @format double */
  bps_wr_max_lt?: number | null;

  /** @format double */
  bps_wr_max_lte?: number | null;

  /** @format double */
  bps_wr_max_not?: number | null;
  bps_wr_max_not_in?: number[] | null;

  /** @format double */
  bps_wr_not?: number | null;
  bps_wr_not_in?: number[] | null;
  consistency_group?: ConsistencyGroupWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;

  /** @format double */
  io_size?: number | null;

  /** @format double */
  io_size_gt?: number | null;

  /** @format double */
  io_size_gte?: number | null;
  io_size_in?: number[] | null;

  /** @format double */
  io_size_lt?: number | null;

  /** @format double */
  io_size_lte?: number | null;

  /** @format double */
  io_size_not?: number | null;
  io_size_not_in?: number[] | null;

  /** @format double */
  iops?: number | null;

  /** @format double */
  iops_gt?: number | null;

  /** @format double */
  iops_gte?: number | null;
  iops_in?: number[] | null;

  /** @format double */
  iops_lt?: number | null;

  /** @format double */
  iops_lte?: number | null;

  /** @format double */
  iops_max?: number | null;

  /** @format double */
  iops_max_gt?: number | null;

  /** @format double */
  iops_max_gte?: number | null;
  iops_max_in?: number[] | null;

  /** @format double */
  iops_max_length?: number | null;

  /** @format double */
  iops_max_length_gt?: number | null;

  /** @format double */
  iops_max_length_gte?: number | null;
  iops_max_length_in?: number[] | null;

  /** @format double */
  iops_max_length_lt?: number | null;

  /** @format double */
  iops_max_length_lte?: number | null;

  /** @format double */
  iops_max_length_not?: number | null;
  iops_max_length_not_in?: number[] | null;

  /** @format double */
  iops_max_lt?: number | null;

  /** @format double */
  iops_max_lte?: number | null;

  /** @format double */
  iops_max_not?: number | null;
  iops_max_not_in?: number[] | null;

  /** @format double */
  iops_not?: number | null;
  iops_not_in?: number[] | null;

  /** @format double */
  iops_rd?: number | null;

  /** @format double */
  iops_rd_gt?: number | null;

  /** @format double */
  iops_rd_gte?: number | null;
  iops_rd_in?: number[] | null;

  /** @format double */
  iops_rd_lt?: number | null;

  /** @format double */
  iops_rd_lte?: number | null;

  /** @format double */
  iops_rd_max?: number | null;

  /** @format double */
  iops_rd_max_gt?: number | null;

  /** @format double */
  iops_rd_max_gte?: number | null;
  iops_rd_max_in?: number[] | null;

  /** @format double */
  iops_rd_max_length?: number | null;

  /** @format double */
  iops_rd_max_length_gt?: number | null;

  /** @format double */
  iops_rd_max_length_gte?: number | null;
  iops_rd_max_length_in?: number[] | null;

  /** @format double */
  iops_rd_max_length_lt?: number | null;

  /** @format double */
  iops_rd_max_length_lte?: number | null;

  /** @format double */
  iops_rd_max_length_not?: number | null;
  iops_rd_max_length_not_in?: number[] | null;

  /** @format double */
  iops_rd_max_lt?: number | null;

  /** @format double */
  iops_rd_max_lte?: number | null;

  /** @format double */
  iops_rd_max_not?: number | null;
  iops_rd_max_not_in?: number[] | null;

  /** @format double */
  iops_rd_not?: number | null;
  iops_rd_not_in?: number[] | null;

  /** @format double */
  iops_wr?: number | null;

  /** @format double */
  iops_wr_gt?: number | null;

  /** @format double */
  iops_wr_gte?: number | null;
  iops_wr_in?: number[] | null;

  /** @format double */
  iops_wr_lt?: number | null;

  /** @format double */
  iops_wr_lte?: number | null;

  /** @format double */
  iops_wr_max?: number | null;

  /** @format double */
  iops_wr_max_gt?: number | null;

  /** @format double */
  iops_wr_max_gte?: number | null;
  iops_wr_max_in?: number[] | null;

  /** @format double */
  iops_wr_max_length?: number | null;

  /** @format double */
  iops_wr_max_length_gt?: number | null;

  /** @format double */
  iops_wr_max_length_gte?: number | null;
  iops_wr_max_length_in?: number[] | null;

  /** @format double */
  iops_wr_max_length_lt?: number | null;

  /** @format double */
  iops_wr_max_length_lte?: number | null;

  /** @format double */
  iops_wr_max_length_not?: number | null;
  iops_wr_max_length_not_in?: number[] | null;

  /** @format double */
  iops_wr_max_lt?: number | null;

  /** @format double */
  iops_wr_max_lte?: number | null;

  /** @format double */
  iops_wr_max_not?: number | null;
  iops_wr_max_not_in?: number[] | null;

  /** @format double */
  iops_wr_not?: number | null;
  iops_wr_not_in?: number[] | null;
  is_shared?: boolean | null;
  is_shared_not?: boolean | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  namespace_group?: NamespaceGroupWhereInput | null;

  /** @format double */
  namespace_id?: number | null;

  /** @format double */
  namespace_id_gt?: number | null;

  /** @format double */
  namespace_id_gte?: number | null;
  namespace_id_in?: number[] | null;

  /** @format double */
  namespace_id_lt?: number | null;

  /** @format double */
  namespace_id_lte?: number | null;

  /** @format double */
  namespace_id_not?: number | null;
  namespace_id_not_in?: number[] | null;
  NOT?: NvmfNamespaceWhereInput[] | null;
  nqn_whitelist?: string | null;
  nqn_whitelist_contains?: string | null;
  nqn_whitelist_ends_with?: string | null;
  nqn_whitelist_gt?: string | null;
  nqn_whitelist_gte?: string | null;
  nqn_whitelist_in?: string[] | null;
  nqn_whitelist_lt?: string | null;
  nqn_whitelist_lte?: string | null;
  nqn_whitelist_not?: string | null;
  nqn_whitelist_not_contains?: string | null;
  nqn_whitelist_not_ends_with?: string | null;
  nqn_whitelist_not_in?: string[] | null;
  nqn_whitelist_not_starts_with?: string | null;
  nqn_whitelist_starts_with?: string | null;
  nvmf_subsystem?: NvmfSubsystemWhereInput | null;
  OR?: NvmfNamespaceWhereInput[] | null;

  /** @format double */
  replica_num?: number | null;

  /** @format double */
  replica_num_gt?: number | null;

  /** @format double */
  replica_num_gte?: number | null;
  replica_num_in?: number[] | null;

  /** @format double */
  replica_num_lt?: number | null;

  /** @format double */
  replica_num_lte?: number | null;

  /** @format double */
  replica_num_not?: number | null;
  replica_num_not_in?: number[] | null;

  /** @format double */
  shared_size?: number | null;

  /** @format double */
  shared_size_gt?: number | null;

  /** @format double */
  shared_size_gte?: number | null;
  shared_size_in?: number[] | null;

  /** @format double */
  shared_size_lt?: number | null;

  /** @format double */
  shared_size_lte?: number | null;

  /** @format double */
  shared_size_not?: number | null;
  shared_size_not_in?: number[] | null;

  /** @format double */
  snapshot_num?: number | null;

  /** @format double */
  snapshot_num_gt?: number | null;

  /** @format double */
  snapshot_num_gte?: number | null;
  snapshot_num_in?: number[] | null;

  /** @format double */
  snapshot_num_lt?: number | null;

  /** @format double */
  snapshot_num_lte?: number | null;

  /** @format double */
  snapshot_num_not?: number | null;
  snapshot_num_not_in?: number[] | null;

  /** @format double */
  stripe_num?: number | null;

  /** @format double */
  stripe_num_gt?: number | null;

  /** @format double */
  stripe_num_gte?: number | null;
  stripe_num_in?: number[] | null;

  /** @format double */
  stripe_num_lt?: number | null;

  /** @format double */
  stripe_num_lte?: number | null;

  /** @format double */
  stripe_num_not?: number | null;
  stripe_num_not_in?: number[] | null;

  /** @format double */
  stripe_size?: number | null;

  /** @format double */
  stripe_size_gt?: number | null;

  /** @format double */
  stripe_size_gte?: number | null;
  stripe_size_in?: number[] | null;

  /** @format double */
  stripe_size_lt?: number | null;

  /** @format double */
  stripe_size_lte?: number | null;

  /** @format double */
  stripe_size_not?: number | null;
  stripe_size_not_in?: number[] | null;
  thin_provision?: boolean | null;
  thin_provision_not?: boolean | null;

  /** @format double */
  unique_size?: number | null;

  /** @format double */
  unique_size_gt?: number | null;

  /** @format double */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format double */
  unique_size_lt?: number | null;

  /** @format double */
  unique_size_lte?: number | null;

  /** @format double */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
  zbs_volume_id?: string | null;
  zbs_volume_id_contains?: string | null;
  zbs_volume_id_ends_with?: string | null;
  zbs_volume_id_gt?: string | null;
  zbs_volume_id_gte?: string | null;
  zbs_volume_id_in?: string[] | null;
  zbs_volume_id_lt?: string | null;
  zbs_volume_id_lte?: string | null;
  zbs_volume_id_not?: string | null;
  zbs_volume_id_not_contains?: string | null;
  zbs_volume_id_not_ends_with?: string | null;
  zbs_volume_id_not_in?: string[] | null;
  zbs_volume_id_not_starts_with?: string | null;
  zbs_volume_id_starts_with?: string | null;
}

export interface NvmfSubsystemWhereInput {
  AND?: NvmfSubsystemWhereInput[] | null;

  /** @format double */
  bps?: number | null;

  /** @format double */
  bps_gt?: number | null;

  /** @format double */
  bps_gte?: number | null;
  bps_in?: number[] | null;

  /** @format double */
  bps_lt?: number | null;

  /** @format double */
  bps_lte?: number | null;

  /** @format double */
  bps_max?: number | null;

  /** @format double */
  bps_max_gt?: number | null;

  /** @format double */
  bps_max_gte?: number | null;
  bps_max_in?: number[] | null;

  /** @format double */
  bps_max_length?: number | null;

  /** @format double */
  bps_max_length_gt?: number | null;

  /** @format double */
  bps_max_length_gte?: number | null;
  bps_max_length_in?: number[] | null;

  /** @format double */
  bps_max_length_lt?: number | null;

  /** @format double */
  bps_max_length_lte?: number | null;

  /** @format double */
  bps_max_length_not?: number | null;
  bps_max_length_not_in?: number[] | null;

  /** @format double */
  bps_max_lt?: number | null;

  /** @format double */
  bps_max_lte?: number | null;

  /** @format double */
  bps_max_not?: number | null;
  bps_max_not_in?: number[] | null;

  /** @format double */
  bps_not?: number | null;
  bps_not_in?: number[] | null;

  /** @format double */
  bps_rd?: number | null;

  /** @format double */
  bps_rd_gt?: number | null;

  /** @format double */
  bps_rd_gte?: number | null;
  bps_rd_in?: number[] | null;

  /** @format double */
  bps_rd_lt?: number | null;

  /** @format double */
  bps_rd_lte?: number | null;

  /** @format double */
  bps_rd_max?: number | null;

  /** @format double */
  bps_rd_max_gt?: number | null;

  /** @format double */
  bps_rd_max_gte?: number | null;
  bps_rd_max_in?: number[] | null;

  /** @format double */
  bps_rd_max_length?: number | null;

  /** @format double */
  bps_rd_max_length_gt?: number | null;

  /** @format double */
  bps_rd_max_length_gte?: number | null;
  bps_rd_max_length_in?: number[] | null;

  /** @format double */
  bps_rd_max_length_lt?: number | null;

  /** @format double */
  bps_rd_max_length_lte?: number | null;

  /** @format double */
  bps_rd_max_length_not?: number | null;
  bps_rd_max_length_not_in?: number[] | null;

  /** @format double */
  bps_rd_max_lt?: number | null;

  /** @format double */
  bps_rd_max_lte?: number | null;

  /** @format double */
  bps_rd_max_not?: number | null;
  bps_rd_max_not_in?: number[] | null;

  /** @format double */
  bps_rd_not?: number | null;
  bps_rd_not_in?: number[] | null;

  /** @format double */
  bps_wr?: number | null;

  /** @format double */
  bps_wr_gt?: number | null;

  /** @format double */
  bps_wr_gte?: number | null;
  bps_wr_in?: number[] | null;

  /** @format double */
  bps_wr_lt?: number | null;

  /** @format double */
  bps_wr_lte?: number | null;

  /** @format double */
  bps_wr_max?: number | null;

  /** @format double */
  bps_wr_max_gt?: number | null;

  /** @format double */
  bps_wr_max_gte?: number | null;
  bps_wr_max_in?: number[] | null;

  /** @format double */
  bps_wr_max_length?: number | null;

  /** @format double */
  bps_wr_max_length_gt?: number | null;

  /** @format double */
  bps_wr_max_length_gte?: number | null;
  bps_wr_max_length_in?: number[] | null;

  /** @format double */
  bps_wr_max_length_lt?: number | null;

  /** @format double */
  bps_wr_max_length_lte?: number | null;

  /** @format double */
  bps_wr_max_length_not?: number | null;
  bps_wr_max_length_not_in?: number[] | null;

  /** @format double */
  bps_wr_max_lt?: number | null;

  /** @format double */
  bps_wr_max_lte?: number | null;

  /** @format double */
  bps_wr_max_not?: number | null;
  bps_wr_max_not_in?: number[] | null;

  /** @format double */
  bps_wr_not?: number | null;
  bps_wr_not_in?: number[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  external_use?: boolean | null;
  external_use_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;

  /** @format double */
  io_size?: number | null;

  /** @format double */
  io_size_gt?: number | null;

  /** @format double */
  io_size_gte?: number | null;
  io_size_in?: number[] | null;

  /** @format double */
  io_size_lt?: number | null;

  /** @format double */
  io_size_lte?: number | null;

  /** @format double */
  io_size_not?: number | null;
  io_size_not_in?: number[] | null;

  /** @format double */
  iops?: number | null;

  /** @format double */
  iops_gt?: number | null;

  /** @format double */
  iops_gte?: number | null;
  iops_in?: number[] | null;

  /** @format double */
  iops_lt?: number | null;

  /** @format double */
  iops_lte?: number | null;

  /** @format double */
  iops_max?: number | null;

  /** @format double */
  iops_max_gt?: number | null;

  /** @format double */
  iops_max_gte?: number | null;
  iops_max_in?: number[] | null;

  /** @format double */
  iops_max_length?: number | null;

  /** @format double */
  iops_max_length_gt?: number | null;

  /** @format double */
  iops_max_length_gte?: number | null;
  iops_max_length_in?: number[] | null;

  /** @format double */
  iops_max_length_lt?: number | null;

  /** @format double */
  iops_max_length_lte?: number | null;

  /** @format double */
  iops_max_length_not?: number | null;
  iops_max_length_not_in?: number[] | null;

  /** @format double */
  iops_max_lt?: number | null;

  /** @format double */
  iops_max_lte?: number | null;

  /** @format double */
  iops_max_not?: number | null;
  iops_max_not_in?: number[] | null;

  /** @format double */
  iops_not?: number | null;
  iops_not_in?: number[] | null;

  /** @format double */
  iops_rd?: number | null;

  /** @format double */
  iops_rd_gt?: number | null;

  /** @format double */
  iops_rd_gte?: number | null;
  iops_rd_in?: number[] | null;

  /** @format double */
  iops_rd_lt?: number | null;

  /** @format double */
  iops_rd_lte?: number | null;

  /** @format double */
  iops_rd_max?: number | null;

  /** @format double */
  iops_rd_max_gt?: number | null;

  /** @format double */
  iops_rd_max_gte?: number | null;
  iops_rd_max_in?: number[] | null;

  /** @format double */
  iops_rd_max_length?: number | null;

  /** @format double */
  iops_rd_max_length_gt?: number | null;

  /** @format double */
  iops_rd_max_length_gte?: number | null;
  iops_rd_max_length_in?: number[] | null;

  /** @format double */
  iops_rd_max_length_lt?: number | null;

  /** @format double */
  iops_rd_max_length_lte?: number | null;

  /** @format double */
  iops_rd_max_length_not?: number | null;
  iops_rd_max_length_not_in?: number[] | null;

  /** @format double */
  iops_rd_max_lt?: number | null;

  /** @format double */
  iops_rd_max_lte?: number | null;

  /** @format double */
  iops_rd_max_not?: number | null;
  iops_rd_max_not_in?: number[] | null;

  /** @format double */
  iops_rd_not?: number | null;
  iops_rd_not_in?: number[] | null;

  /** @format double */
  iops_wr?: number | null;

  /** @format double */
  iops_wr_gt?: number | null;

  /** @format double */
  iops_wr_gte?: number | null;
  iops_wr_in?: number[] | null;

  /** @format double */
  iops_wr_lt?: number | null;

  /** @format double */
  iops_wr_lte?: number | null;

  /** @format double */
  iops_wr_max?: number | null;

  /** @format double */
  iops_wr_max_gt?: number | null;

  /** @format double */
  iops_wr_max_gte?: number | null;
  iops_wr_max_in?: number[] | null;

  /** @format double */
  iops_wr_max_length?: number | null;

  /** @format double */
  iops_wr_max_length_gt?: number | null;

  /** @format double */
  iops_wr_max_length_gte?: number | null;
  iops_wr_max_length_in?: number[] | null;

  /** @format double */
  iops_wr_max_length_lt?: number | null;

  /** @format double */
  iops_wr_max_length_lte?: number | null;

  /** @format double */
  iops_wr_max_length_not?: number | null;
  iops_wr_max_length_not_in?: number[] | null;

  /** @format double */
  iops_wr_max_lt?: number | null;

  /** @format double */
  iops_wr_max_lte?: number | null;

  /** @format double */
  iops_wr_max_not?: number | null;
  iops_wr_max_not_in?: number[] | null;

  /** @format double */
  iops_wr_not?: number | null;
  iops_wr_not_in?: number[] | null;
  ip_whitelist?: string | null;
  ip_whitelist_contains?: string | null;
  ip_whitelist_ends_with?: string | null;
  ip_whitelist_gt?: string | null;
  ip_whitelist_gte?: string | null;
  ip_whitelist_in?: string[] | null;
  ip_whitelist_lt?: string | null;
  ip_whitelist_lte?: string | null;
  ip_whitelist_not?: string | null;
  ip_whitelist_not_contains?: string | null;
  ip_whitelist_not_ends_with?: string | null;
  ip_whitelist_not_in?: string[] | null;
  ip_whitelist_not_starts_with?: string | null;
  ip_whitelist_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  namespace_groups_every?: NamespaceGroupWhereInput | null;
  namespace_groups_none?: NamespaceGroupWhereInput | null;
  namespace_groups_some?: NamespaceGroupWhereInput | null;
  namespaces_every?: NvmfNamespaceWhereInput | null;
  namespaces_none?: NvmfNamespaceWhereInput | null;
  namespaces_some?: NvmfNamespaceWhereInput | null;
  NOT?: NvmfSubsystemWhereInput[] | null;
  nqn_name?: string | null;
  nqn_name_contains?: string | null;
  nqn_name_ends_with?: string | null;
  nqn_name_gt?: string | null;
  nqn_name_gte?: string | null;
  nqn_name_in?: string[] | null;
  nqn_name_lt?: string | null;
  nqn_name_lte?: string | null;
  nqn_name_not?: string | null;
  nqn_name_not_contains?: string | null;
  nqn_name_not_ends_with?: string | null;
  nqn_name_not_in?: string[] | null;
  nqn_name_not_starts_with?: string | null;
  nqn_name_starts_with?: string | null;
  nqn_whitelist?: string | null;
  nqn_whitelist_contains?: string | null;
  nqn_whitelist_ends_with?: string | null;
  nqn_whitelist_gt?: string | null;
  nqn_whitelist_gte?: string | null;
  nqn_whitelist_in?: string[] | null;
  nqn_whitelist_lt?: string | null;
  nqn_whitelist_lte?: string | null;
  nqn_whitelist_not?: string | null;
  nqn_whitelist_not_contains?: string | null;
  nqn_whitelist_not_ends_with?: string | null;
  nqn_whitelist_not_in?: string[] | null;
  nqn_whitelist_not_starts_with?: string | null;
  nqn_whitelist_starts_with?: string | null;
  OR?: NvmfSubsystemWhereInput[] | null;
  policy?: NvmfSubsystemPolicyType | null;
  policy_in?: NvmfSubsystemPolicyType[] | null;
  policy_not?: NvmfSubsystemPolicyType | null;
  policy_not_in?: NvmfSubsystemPolicyType[] | null;

  /** @format double */
  replica_num?: number | null;

  /** @format double */
  replica_num_gt?: number | null;

  /** @format double */
  replica_num_gte?: number | null;
  replica_num_in?: number[] | null;

  /** @format double */
  replica_num_lt?: number | null;

  /** @format double */
  replica_num_lte?: number | null;

  /** @format double */
  replica_num_not?: number | null;
  replica_num_not_in?: number[] | null;

  /** @format double */
  stripe_num?: number | null;

  /** @format double */
  stripe_num_gt?: number | null;

  /** @format double */
  stripe_num_gte?: number | null;
  stripe_num_in?: number[] | null;

  /** @format double */
  stripe_num_lt?: number | null;

  /** @format double */
  stripe_num_lte?: number | null;

  /** @format double */
  stripe_num_not?: number | null;
  stripe_num_not_in?: number[] | null;

  /** @format double */
  stripe_size?: number | null;

  /** @format double */
  stripe_size_gt?: number | null;

  /** @format double */
  stripe_size_gte?: number | null;
  stripe_size_in?: number[] | null;

  /** @format double */
  stripe_size_lt?: number | null;

  /** @format double */
  stripe_size_lte?: number | null;

  /** @format double */
  stripe_size_not?: number | null;
  stripe_size_not_in?: number[] | null;
  thin_provision?: boolean | null;
  thin_provision_not?: boolean | null;
}

export type NvmfSubsystemPolicyType = "BALANCE" | "INHERIT";

export interface NfsExportWhereInput {
  AND?: NfsExportWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  export_inode_id?: string | null;
  export_inode_id_contains?: string | null;
  export_inode_id_ends_with?: string | null;
  export_inode_id_gt?: string | null;
  export_inode_id_gte?: string | null;
  export_inode_id_in?: string[] | null;
  export_inode_id_lt?: string | null;
  export_inode_id_lte?: string | null;
  export_inode_id_not?: string | null;
  export_inode_id_not_contains?: string | null;
  export_inode_id_not_ends_with?: string | null;
  export_inode_id_not_in?: string[] | null;
  export_inode_id_not_starts_with?: string | null;
  export_inode_id_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  inodes_every?: NfsInodeWhereInput | null;
  inodes_none?: NfsInodeWhereInput | null;
  inodes_some?: NfsInodeWhereInput | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  ip_whitelist?: string | null;
  ip_whitelist_contains?: string | null;
  ip_whitelist_ends_with?: string | null;
  ip_whitelist_gt?: string | null;
  ip_whitelist_gte?: string | null;
  ip_whitelist_in?: string[] | null;
  ip_whitelist_lt?: string | null;
  ip_whitelist_lte?: string | null;
  ip_whitelist_not?: string | null;
  ip_whitelist_not_contains?: string | null;
  ip_whitelist_not_ends_with?: string | null;
  ip_whitelist_not_in?: string[] | null;
  ip_whitelist_not_starts_with?: string | null;
  ip_whitelist_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: NfsExportWhereInput[] | null;
  OR?: NfsExportWhereInput[] | null;

  /** @format double */
  replica_num?: number | null;

  /** @format double */
  replica_num_gt?: number | null;

  /** @format double */
  replica_num_gte?: number | null;
  replica_num_in?: number[] | null;

  /** @format double */
  replica_num_lt?: number | null;

  /** @format double */
  replica_num_lte?: number | null;

  /** @format double */
  replica_num_not?: number | null;
  replica_num_not_in?: number[] | null;
  thin_provision?: boolean | null;
  thin_provision_not?: boolean | null;
}

export interface NfsInodeWhereInput {
  AND?: NfsInodeWhereInput[] | null;

  /** @format double */
  assigned_size?: number | null;

  /** @format double */
  assigned_size_gt?: number | null;

  /** @format double */
  assigned_size_gte?: number | null;
  assigned_size_in?: number[] | null;

  /** @format double */
  assigned_size_lt?: number | null;

  /** @format double */
  assigned_size_lte?: number | null;

  /** @format double */
  assigned_size_not?: number | null;
  assigned_size_not_in?: number[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  file?: boolean | null;
  file_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  local_updated_at?: string | null;
  local_updated_at_gt?: string | null;
  local_updated_at_gte?: string | null;
  local_updated_at_in?: string[] | null;
  local_updated_at_lt?: string | null;
  local_updated_at_lte?: string | null;
  local_updated_at_not?: string | null;
  local_updated_at_not_in?: string[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nfs_export?: NfsExportWhereInput | null;
  NOT?: NfsInodeWhereInput[] | null;
  OR?: NfsInodeWhereInput[] | null;
  parent_id?: string | null;
  parent_id_contains?: string | null;
  parent_id_ends_with?: string | null;
  parent_id_gt?: string | null;
  parent_id_gte?: string | null;
  parent_id_in?: string[] | null;
  parent_id_lt?: string | null;
  parent_id_lte?: string | null;
  parent_id_not?: string | null;
  parent_id_not_contains?: string | null;
  parent_id_not_ends_with?: string | null;
  parent_id_not_in?: string[] | null;
  parent_id_not_starts_with?: string | null;
  parent_id_starts_with?: string | null;

  /** @format double */
  shared_size?: number | null;

  /** @format double */
  shared_size_gt?: number | null;

  /** @format double */
  shared_size_gte?: number | null;
  shared_size_in?: number[] | null;

  /** @format double */
  shared_size_lt?: number | null;

  /** @format double */
  shared_size_lte?: number | null;

  /** @format double */
  shared_size_not?: number | null;
  shared_size_not_in?: number[] | null;

  /** @format double */
  snapshot_num?: number | null;

  /** @format double */
  snapshot_num_gt?: number | null;

  /** @format double */
  snapshot_num_gte?: number | null;
  snapshot_num_in?: number[] | null;

  /** @format double */
  snapshot_num_lt?: number | null;

  /** @format double */
  snapshot_num_lte?: number | null;

  /** @format double */
  snapshot_num_not?: number | null;
  snapshot_num_not_in?: number[] | null;

  /** @format double */
  unique_size?: number | null;

  /** @format double */
  unique_size_gt?: number | null;

  /** @format double */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format double */
  unique_size_lt?: number | null;

  /** @format double */
  unique_size_lte?: number | null;

  /** @format double */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
}

export interface NvmfNamespaceSnapshotWhereInput {
  AND?: NvmfNamespaceSnapshotWhereInput[] | null;
  consistency_group_snapshot?: ConsistencyGroupSnapshotWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: NvmfNamespaceSnapshotWhereInput[] | null;
  nvmf_namespace?: NvmfNamespaceWhereInput | null;
  nvmf_subsystem?: NvmfSubsystemWhereInput | null;
  OR?: NvmfNamespaceSnapshotWhereInput[] | null;

  /** @format double */
  unique_size?: number | null;

  /** @format double */
  unique_size_gt?: number | null;

  /** @format double */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format double */
  unique_size_lt?: number | null;

  /** @format double */
  unique_size_lte?: number | null;

  /** @format double */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
}

export type ClusterConnectorErrorCode =
  | "LOAD_CLUSTER_FAILED"
  | "LOAD_CLUSTER_NETWORK_ERROR"
  | "LOAD_CLUSTER_NOT_FOUND"
  | "LOAD_CLUSTER_UNAUTHORIZED"
  | "LOAD_CLUSTER_UNHEALTHY";

export type Hypervisor = "BLUESHARK" | "ELF" | "VMWARE" | "XENSERVER";

export type LicenseType = "PERPETUAL" | "SUBSCRIPTION" | "TRIAL";

export type NtpMode = "EXTERNAL" | "INTERNAL";

export interface ClusterSettingsWhereInput {
  AND?: ClusterSettingsWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  NOT?: ClusterSettingsWhereInput[] | null;
  OR?: ClusterSettingsWhereInput[] | null;
}

export type SoftwareEdition = "COMMUNITY" | "ENTERPRISE" | "ESSENTIAL" | "STANDARD" | "TRIAL";

export type ClusterType = "BLUESHARK" | "SMTX_OS" | "SMTX_ZBS";

export interface VcenterAccountWhereInput {
  AND?: VcenterAccountWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  ip?: string | null;
  ip_contains?: string | null;
  ip_ends_with?: string | null;
  ip_gt?: string | null;
  ip_gte?: string | null;
  ip_in?: string[] | null;
  ip_lt?: string | null;
  ip_lte?: string | null;
  ip_not?: string | null;
  ip_not_contains?: string | null;
  ip_not_ends_with?: string | null;
  ip_not_in?: string[] | null;
  ip_not_starts_with?: string | null;
  ip_starts_with?: string | null;
  is_valid?: boolean | null;
  is_valid_not?: boolean | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  NOT?: VcenterAccountWhereInput[] | null;
  OR?: VcenterAccountWhereInput[] | null;
  password?: string | null;
  password_contains?: string | null;
  password_ends_with?: string | null;
  password_gt?: string | null;
  password_gte?: string | null;
  password_in?: string[] | null;
  password_lt?: string | null;
  password_lte?: string | null;
  password_not?: string | null;
  password_not_contains?: string | null;
  password_not_ends_with?: string | null;
  password_not_in?: string[] | null;
  password_not_starts_with?: string | null;
  password_starts_with?: string | null;

  /** @format double */
  port?: number | null;

  /** @format double */
  port_gt?: number | null;

  /** @format double */
  port_gte?: number | null;
  port_in?: number[] | null;

  /** @format double */
  port_lt?: number | null;

  /** @format double */
  port_lte?: number | null;

  /** @format double */
  port_not?: number | null;
  port_not_in?: number[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
}

export interface WitnessWhereInput {
  AND?: WitnessWhereInput[] | null;
  cluster?: ClusterWhereInput | null;

  /** @format double */
  cpu_hz_per_core?: number | null;

  /** @format double */
  cpu_hz_per_core_gt?: number | null;

  /** @format double */
  cpu_hz_per_core_gte?: number | null;
  cpu_hz_per_core_in?: number[] | null;

  /** @format double */
  cpu_hz_per_core_lt?: number | null;

  /** @format double */
  cpu_hz_per_core_lte?: number | null;

  /** @format double */
  cpu_hz_per_core_not?: number | null;
  cpu_hz_per_core_not_in?: number[] | null;
  data_ip?: string | null;
  data_ip_contains?: string | null;
  data_ip_ends_with?: string | null;
  data_ip_gt?: string | null;
  data_ip_gte?: string | null;
  data_ip_in?: string[] | null;
  data_ip_lt?: string | null;
  data_ip_lte?: string | null;
  data_ip_not?: string | null;
  data_ip_not_contains?: string | null;
  data_ip_not_ends_with?: string | null;
  data_ip_not_in?: string[] | null;
  data_ip_not_starts_with?: string | null;
  data_ip_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: WitnessWhereInput[] | null;
  OR?: WitnessWhereInput[] | null;

  /** @format double */
  system_data_capacity?: number | null;

  /** @format double */
  system_data_capacity_gt?: number | null;

  /** @format double */
  system_data_capacity_gte?: number | null;
  system_data_capacity_in?: number[] | null;

  /** @format double */
  system_data_capacity_lt?: number | null;

  /** @format double */
  system_data_capacity_lte?: number | null;

  /** @format double */
  system_data_capacity_not?: number | null;
  system_data_capacity_not_in?: number[] | null;

  /** @format double */
  system_used_data_space?: number | null;

  /** @format double */
  system_used_data_space_gt?: number | null;

  /** @format double */
  system_used_data_space_gte?: number | null;
  system_used_data_space_in?: number[] | null;

  /** @format double */
  system_used_data_space_lt?: number | null;

  /** @format double */
  system_used_data_space_lte?: number | null;

  /** @format double */
  system_used_data_space_not?: number | null;
  system_used_data_space_not_in?: number[] | null;

  /** @format double */
  total_cpu_cores?: number | null;

  /** @format double */
  total_cpu_cores_gt?: number | null;

  /** @format double */
  total_cpu_cores_gte?: number | null;
  total_cpu_cores_in?: number[] | null;

  /** @format double */
  total_cpu_cores_lt?: number | null;

  /** @format double */
  total_cpu_cores_lte?: number | null;

  /** @format double */
  total_cpu_cores_not?: number | null;
  total_cpu_cores_not_in?: number[] | null;

  /** @format double */
  total_cpu_hz?: number | null;

  /** @format double */
  total_cpu_hz_gt?: number | null;

  /** @format double */
  total_cpu_hz_gte?: number | null;
  total_cpu_hz_in?: number[] | null;

  /** @format double */
  total_cpu_hz_lt?: number | null;

  /** @format double */
  total_cpu_hz_lte?: number | null;

  /** @format double */
  total_cpu_hz_not?: number | null;
  total_cpu_hz_not_in?: number[] | null;

  /** @format double */
  total_memory_bytes?: number | null;

  /** @format double */
  total_memory_bytes_gt?: number | null;

  /** @format double */
  total_memory_bytes_gte?: number | null;
  total_memory_bytes_in?: number[] | null;

  /** @format double */
  total_memory_bytes_lt?: number | null;

  /** @format double */
  total_memory_bytes_lte?: number | null;

  /** @format double */
  total_memory_bytes_not?: number | null;
  total_memory_bytes_not_in?: number[] | null;
}

export interface GlobalAlertRuleWhereInput {
  alert_rules_every?: AlertRuleWhereInput | null;
  alert_rules_none?: AlertRuleWhereInput | null;
  alert_rules_some?: AlertRuleWhereInput | null;
  AND?: GlobalAlertRuleWhereInput[] | null;
  boolean?: boolean | null;
  boolean_not?: boolean | null;
  cause?: string | null;
  cause_contains?: string | null;
  cause_ends_with?: string | null;
  cause_gt?: string | null;
  cause_gte?: string | null;
  cause_in?: string[] | null;
  cause_lt?: string | null;
  cause_lte?: string | null;
  cause_not?: string | null;
  cause_not_contains?: string | null;
  cause_not_ends_with?: string | null;
  cause_not_in?: string[] | null;
  cause_not_starts_with?: string | null;
  cause_starts_with?: string | null;
  disabled?: boolean | null;
  disabled_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  impact?: string | null;
  impact_contains?: string | null;
  impact_ends_with?: string | null;
  impact_gt?: string | null;
  impact_gte?: string | null;
  impact_in?: string[] | null;
  impact_lt?: string | null;
  impact_lte?: string | null;
  impact_not?: string | null;
  impact_not_contains?: string | null;
  impact_not_ends_with?: string | null;
  impact_not_in?: string[] | null;
  impact_not_starts_with?: string | null;
  impact_starts_with?: string | null;
  message?: string | null;
  message_contains?: string | null;
  message_ends_with?: string | null;
  message_gt?: string | null;
  message_gte?: string | null;
  message_in?: string[] | null;
  message_lt?: string | null;
  message_lte?: string | null;
  message_not?: string | null;
  message_not_contains?: string | null;
  message_not_ends_with?: string | null;
  message_not_in?: string[] | null;
  message_not_starts_with?: string | null;
  message_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: GlobalAlertRuleWhereInput[] | null;
  object?: AlertRuleObject | null;
  object_in?: AlertRuleObject[] | null;
  object_not?: AlertRuleObject | null;
  object_not_in?: AlertRuleObject[] | null;
  operator?: string | null;
  operator_contains?: string | null;
  operator_ends_with?: string | null;
  operator_gt?: string | null;
  operator_gte?: string | null;
  operator_in?: string[] | null;
  operator_lt?: string | null;
  operator_lte?: string | null;
  operator_not?: string | null;
  operator_not_contains?: string | null;
  operator_not_ends_with?: string | null;
  operator_not_in?: string[] | null;
  operator_not_starts_with?: string | null;
  operator_starts_with?: string | null;
  OR?: GlobalAlertRuleWhereInput[] | null;
  solution?: string | null;
  solution_contains?: string | null;
  solution_ends_with?: string | null;
  solution_gt?: string | null;
  solution_gte?: string | null;
  solution_in?: string[] | null;
  solution_lt?: string | null;
  solution_lte?: string | null;
  solution_not?: string | null;
  solution_not_contains?: string | null;
  solution_not_ends_with?: string | null;
  solution_not_in?: string[] | null;
  solution_not_starts_with?: string | null;
  solution_starts_with?: string | null;
  unit?: AlertRuleUnit | null;
  unit_in?: AlertRuleUnit[] | null;
  unit_not?: AlertRuleUnit | null;
  unit_not_in?: AlertRuleUnit[] | null;
}

export type AlertRuleObject =
  | "BRICK"
  | "CLUSTER"
  | "DISK"
  | "HYPERVISOR"
  | "NETWORK"
  | "NTP_SERVER"
  | "PHYSICAL_HOST"
  | "SCVM"
  | "SNAPSHOT_PLAN"
  | "STORAGE_CHUNK"
  | "STORAGE_POOL"
  | "SYSTEM_SERVICE"
  | "TIME_MACHINE_PLAN"
  | "VM"
  | "WITNESS"
  | "ZBS_ZONE";

export type AlertRuleUnit =
  | "BIT"
  | "BYTE"
  | "BYTE_PER_SECOND"
  | "CELSIUS"
  | "HERTZ"
  | "NANOSECOND"
  | "PERCENT"
  | "SECOND"
  | "UNIT_UNSPECIFIED";

export interface GetAlertRulesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: AlertRuleOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: AlertRuleWhereInput | null;
}

export interface AlertRuleConnection {
  aggregate: { count: number };
}

export interface GetAlertRulesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: AlertRuleOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: AlertRuleWhereInput | null;
}

export interface Alert {
  alert_rule?: { id: string };
  cause: string;
  cluster: { name: string; id: string };
  disk?: { name: string; id: string };
  ended: boolean;
  host?: { name: string; id: string };
  id: string;
  impact: string;
  labels: object;
  local_create_time: string;
  local_end_time: string;
  local_id: string;
  local_start_time: string;
  local_update_time: string;
  message: string;
  severity: string;
  solution: string;

  /** @format double */
  threshold: number;

  /** @format double */
  value: number;
  vms?: { name: string; id: string }[] | null;
}

export type AlertOrderByInput =
  | "cause_ASC"
  | "cause_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "ended_ASC"
  | "ended_DESC"
  | "id_ASC"
  | "id_DESC"
  | "impact_ASC"
  | "impact_DESC"
  | "labels_ASC"
  | "labels_DESC"
  | "local_create_time_ASC"
  | "local_create_time_DESC"
  | "local_end_time_ASC"
  | "local_end_time_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "local_start_time_ASC"
  | "local_start_time_DESC"
  | "local_update_time_ASC"
  | "local_update_time_DESC"
  | "message_ASC"
  | "message_DESC"
  | "severity_ASC"
  | "severity_DESC"
  | "solution_ASC"
  | "solution_DESC"
  | "threshold_ASC"
  | "threshold_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "value_ASC"
  | "value_DESC";

export interface AlertWhereInput {
  alert_rule?: AlertRuleWhereInput | null;
  AND?: AlertWhereInput[] | null;
  cause?: string | null;
  cause_contains?: string | null;
  cause_ends_with?: string | null;
  cause_gt?: string | null;
  cause_gte?: string | null;
  cause_in?: string[] | null;
  cause_lt?: string | null;
  cause_lte?: string | null;
  cause_not?: string | null;
  cause_not_contains?: string | null;
  cause_not_ends_with?: string | null;
  cause_not_in?: string[] | null;
  cause_not_starts_with?: string | null;
  cause_starts_with?: string | null;
  cluster?: ClusterWhereInput | null;
  disk?: DiskWhereInput | null;
  ended?: boolean | null;
  ended_not?: boolean | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  impact?: string | null;
  impact_contains?: string | null;
  impact_ends_with?: string | null;
  impact_gt?: string | null;
  impact_gte?: string | null;
  impact_in?: string[] | null;
  impact_lt?: string | null;
  impact_lte?: string | null;
  impact_not?: string | null;
  impact_not_contains?: string | null;
  impact_not_ends_with?: string | null;
  impact_not_in?: string[] | null;
  impact_not_starts_with?: string | null;
  impact_starts_with?: string | null;
  local_create_time?: string | null;
  local_create_time_gt?: string | null;
  local_create_time_gte?: string | null;
  local_create_time_in?: string[] | null;
  local_create_time_lt?: string | null;
  local_create_time_lte?: string | null;
  local_create_time_not?: string | null;
  local_create_time_not_in?: string[] | null;
  local_end_time?: string | null;
  local_end_time_contains?: string | null;
  local_end_time_ends_with?: string | null;
  local_end_time_gt?: string | null;
  local_end_time_gte?: string | null;
  local_end_time_in?: string[] | null;
  local_end_time_lt?: string | null;
  local_end_time_lte?: string | null;
  local_end_time_not?: string | null;
  local_end_time_not_contains?: string | null;
  local_end_time_not_ends_with?: string | null;
  local_end_time_not_in?: string[] | null;
  local_end_time_not_starts_with?: string | null;
  local_end_time_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  local_start_time?: string | null;
  local_start_time_contains?: string | null;
  local_start_time_ends_with?: string | null;
  local_start_time_gt?: string | null;
  local_start_time_gte?: string | null;
  local_start_time_in?: string[] | null;
  local_start_time_lt?: string | null;
  local_start_time_lte?: string | null;
  local_start_time_not?: string | null;
  local_start_time_not_contains?: string | null;
  local_start_time_not_ends_with?: string | null;
  local_start_time_not_in?: string[] | null;
  local_start_time_not_starts_with?: string | null;
  local_start_time_starts_with?: string | null;
  local_update_time?: string | null;
  local_update_time_contains?: string | null;
  local_update_time_ends_with?: string | null;
  local_update_time_gt?: string | null;
  local_update_time_gte?: string | null;
  local_update_time_in?: string[] | null;
  local_update_time_lt?: string | null;
  local_update_time_lte?: string | null;
  local_update_time_not?: string | null;
  local_update_time_not_contains?: string | null;
  local_update_time_not_ends_with?: string | null;
  local_update_time_not_in?: string[] | null;
  local_update_time_not_starts_with?: string | null;
  local_update_time_starts_with?: string | null;
  message?: string | null;
  message_contains?: string | null;
  message_ends_with?: string | null;
  message_gt?: string | null;
  message_gte?: string | null;
  message_in?: string[] | null;
  message_lt?: string | null;
  message_lte?: string | null;
  message_not?: string | null;
  message_not_contains?: string | null;
  message_not_ends_with?: string | null;
  message_not_in?: string[] | null;
  message_not_starts_with?: string | null;
  message_starts_with?: string | null;
  NOT?: AlertWhereInput[] | null;
  OR?: AlertWhereInput[] | null;
  severity?: string | null;
  severity_contains?: string | null;
  severity_ends_with?: string | null;
  severity_gt?: string | null;
  severity_gte?: string | null;
  severity_in?: string[] | null;
  severity_lt?: string | null;
  severity_lte?: string | null;
  severity_not?: string | null;
  severity_not_contains?: string | null;
  severity_not_ends_with?: string | null;
  severity_not_in?: string[] | null;
  severity_not_starts_with?: string | null;
  severity_starts_with?: string | null;
  solution?: string | null;
  solution_contains?: string | null;
  solution_ends_with?: string | null;
  solution_gt?: string | null;
  solution_gte?: string | null;
  solution_in?: string[] | null;
  solution_lt?: string | null;
  solution_lte?: string | null;
  solution_not?: string | null;
  solution_not_contains?: string | null;
  solution_not_ends_with?: string | null;
  solution_not_in?: string[] | null;
  solution_not_starts_with?: string | null;
  solution_starts_with?: string | null;

  /** @format double */
  threshold?: number | null;

  /** @format double */
  threshold_gt?: number | null;

  /** @format double */
  threshold_gte?: number | null;
  threshold_in?: number[] | null;

  /** @format double */
  threshold_lt?: number | null;

  /** @format double */
  threshold_lte?: number | null;

  /** @format double */
  threshold_not?: number | null;
  threshold_not_in?: number[] | null;

  /** @format double */
  value?: number | null;

  /** @format double */
  value_gt?: number | null;

  /** @format double */
  value_gte?: number | null;
  value_in?: number[] | null;

  /** @format double */
  value_lt?: number | null;

  /** @format double */
  value_lte?: number | null;

  /** @format double */
  value_not?: number | null;
  value_not_in?: number[] | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
}

export interface GetAlertsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: AlertOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: AlertWhereInput | null;
}

export interface AlertConnection {
  aggregate: { count: number };
}

export interface GetAlertsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: AlertOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: AlertWhereInput | null;
}

export interface Application {
  cluster: { name: string; id: string };
  error_message?: string | null;
  id: string;
  image_name?: string | null;
  local_id: string;

  /** @format double */
  memory: number;
  state: ApplicationState;
  storage_ip: string;
  type: ApplicationType;
  update_time?: string | null;

  /** @format double */
  vcpu: number;
  version: string;

  /** @format double */
  volume_size: number;
}

export type ApplicationOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "error_message_ASC"
  | "error_message_DESC"
  | "id_ASC"
  | "id_DESC"
  | "image_name_ASC"
  | "image_name_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "memory_ASC"
  | "memory_DESC"
  | "state_ASC"
  | "state_DESC"
  | "storage_ip_ASC"
  | "storage_ip_DESC"
  | "type_ASC"
  | "type_DESC"
  | "update_time_ASC"
  | "update_time_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "vcpu_ASC"
  | "vcpu_DESC"
  | "version_ASC"
  | "version_DESC"
  | "volume_size_ASC"
  | "volume_size_DESC";

export interface GetApplicationsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ApplicationOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ApplicationWhereInput | null;
}

export interface ApplicationConnection {
  aggregate: { count: number };
}

export interface GetApplicationsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ApplicationOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ApplicationWhereInput | null;
}

export type Direction = "HORIZONTAL" | "VERTICAL";

export type BrickPhaseEnum = "BACKWARD" | "FORWARD";

export type PowerPosition = "LEFT" | "MIDDLE" | "RIGHT";

export interface BrickTopo {
  capacity: { row?: number | null; column?: number | null };
  cluster: { name: string; id: string };
  cluster_topo?: { name: string; id: string };
  disk_layout?: { row: number; phase: BrickPhaseEnum; direction: Direction; column: number };

  /** @format double */
  height: number;
  id: string;
  local_id: string;
  model?: string | null;
  name: string;
  node_topoes?: { name: string; id: string }[] | null;

  /** @format double */
  position: number;
  power_layout?: Direction | null;
  power_position?: PowerPosition | null;
  powers?: { id: string }[] | null;
  rack_topo?: { name: string; id: string };
  tag_position_in_brick?: { tag: string; row: number; column: number }[] | null;
}

export type BrickTopoOrderByInput =
  | "capacity_ASC"
  | "capacity_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "disk_layout_ASC"
  | "disk_layout_DESC"
  | "height_ASC"
  | "height_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "model_ASC"
  | "model_DESC"
  | "name_ASC"
  | "name_DESC"
  | "position_ASC"
  | "position_DESC"
  | "power_layout_ASC"
  | "power_layout_DESC"
  | "power_position_ASC"
  | "power_position_DESC"
  | "powers_ASC"
  | "powers_DESC"
  | "tag_position_in_brick_ASC"
  | "tag_position_in_brick_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface BrickTopoWhereInput {
  AND?: BrickTopoWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  cluster_topo?: ClusterTopoWhereInput | null;

  /** @format double */
  height?: number | null;

  /** @format double */
  height_gt?: number | null;

  /** @format double */
  height_gte?: number | null;
  height_in?: number[] | null;

  /** @format double */
  height_lt?: number | null;

  /** @format double */
  height_lte?: number | null;

  /** @format double */
  height_not?: number | null;
  height_not_in?: number[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  model?: string | null;
  model_contains?: string | null;
  model_ends_with?: string | null;
  model_gt?: string | null;
  model_gte?: string | null;
  model_in?: string[] | null;
  model_lt?: string | null;
  model_lte?: string | null;
  model_not?: string | null;
  model_not_contains?: string | null;
  model_not_ends_with?: string | null;
  model_not_in?: string[] | null;
  model_not_starts_with?: string | null;
  model_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  node_topoes_every?: NodeTopoWhereInput | null;
  node_topoes_none?: NodeTopoWhereInput | null;
  node_topoes_some?: NodeTopoWhereInput | null;
  NOT?: BrickTopoWhereInput[] | null;
  OR?: BrickTopoWhereInput[] | null;

  /** @format double */
  position?: number | null;

  /** @format double */
  position_gt?: number | null;

  /** @format double */
  position_gte?: number | null;
  position_in?: number[] | null;

  /** @format double */
  position_lt?: number | null;

  /** @format double */
  position_lte?: number | null;

  /** @format double */
  position_not?: number | null;
  position_not_in?: number[] | null;
  power_layout?: Direction | null;
  power_layout_in?: Direction[] | null;
  power_layout_not?: Direction | null;
  power_layout_not_in?: Direction[] | null;
  power_position?: PowerPosition | null;
  power_position_in?: PowerPosition[] | null;
  power_position_not?: PowerPosition | null;
  power_position_not_in?: PowerPosition[] | null;
  rack_topo?: RackTopoWhereInput | null;
}

export interface ClusterTopoWhereInput {
  AND?: ClusterTopoWhereInput[] | null;
  brick_topoes_every?: BrickTopoWhereInput | null;
  brick_topoes_none?: BrickTopoWhereInput | null;
  brick_topoes_some?: BrickTopoWhereInput | null;
  cluster?: ClusterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  node_topoes_every?: NodeTopoWhereInput | null;
  node_topoes_none?: NodeTopoWhereInput | null;
  node_topoes_some?: NodeTopoWhereInput | null;
  NOT?: ClusterTopoWhereInput[] | null;
  OR?: ClusterTopoWhereInput[] | null;
  zone_topoes_every?: ZoneTopoWhereInput | null;
  zone_topoes_none?: ZoneTopoWhereInput | null;
  zone_topoes_some?: ZoneTopoWhereInput | null;
}

export interface NodeTopoWhereInput {
  AND?: NodeTopoWhereInput[] | null;
  brick_topo?: BrickTopoWhereInput | null;
  cluster?: ClusterWhereInput | null;
  cluster_topo?: ClusterTopoWhereInput | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: NodeTopoWhereInput[] | null;
  OR?: NodeTopoWhereInput[] | null;
}

export interface ZoneTopoWhereInput {
  AND?: ZoneTopoWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  cluster_topo?: ClusterTopoWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  NOT?: ZoneTopoWhereInput[] | null;
  OR?: ZoneTopoWhereInput[] | null;
  rack_topoes_every?: RackTopoWhereInput | null;
  rack_topoes_none?: RackTopoWhereInput | null;
  rack_topoes_some?: RackTopoWhereInput | null;
}

export interface RackTopoWhereInput {
  AND?: RackTopoWhereInput[] | null;
  brick_topoes_every?: BrickTopoWhereInput | null;
  brick_topoes_none?: BrickTopoWhereInput | null;
  brick_topoes_some?: BrickTopoWhereInput | null;
  cluster?: ClusterWhereInput | null;

  /** @format double */
  height?: number | null;

  /** @format double */
  height_gt?: number | null;

  /** @format double */
  height_gte?: number | null;
  height_in?: number[] | null;

  /** @format double */
  height_lt?: number | null;

  /** @format double */
  height_lte?: number | null;

  /** @format double */
  height_not?: number | null;
  height_not_in?: number[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: RackTopoWhereInput[] | null;
  OR?: RackTopoWhereInput[] | null;
  zone_topo?: ZoneTopoWhereInput | null;
}

export interface GetBrickTopoesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: BrickTopoOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: BrickTopoWhereInput | null;
}

export interface BrickTopoConnection {
  aggregate: { count: number };
}

export interface GetBrickTopoesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: BrickTopoOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: BrickTopoWhereInput | null;
}

export interface ClusterImage {
  cluster: { name: string; id: string };
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  meta_name: string;

  /** @format double */
  meta_size: number;
  name: string;

  /** @format double */
  size: number;
  version: string;
}

export type ClusterImageOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "meta_name_ASC"
  | "meta_name_DESC"
  | "meta_size_ASC"
  | "meta_size_DESC"
  | "name_ASC"
  | "name_DESC"
  | "size_ASC"
  | "size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "version_ASC"
  | "version_DESC";

export interface ClusterImageWhereInput {
  AND?: ClusterImageWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  meta_name?: string | null;
  meta_name_contains?: string | null;
  meta_name_ends_with?: string | null;
  meta_name_gt?: string | null;
  meta_name_gte?: string | null;
  meta_name_in?: string[] | null;
  meta_name_lt?: string | null;
  meta_name_lte?: string | null;
  meta_name_not?: string | null;
  meta_name_not_contains?: string | null;
  meta_name_not_ends_with?: string | null;
  meta_name_not_in?: string[] | null;
  meta_name_not_starts_with?: string | null;
  meta_name_starts_with?: string | null;

  /** @format double */
  meta_size?: number | null;

  /** @format double */
  meta_size_gt?: number | null;

  /** @format double */
  meta_size_gte?: number | null;
  meta_size_in?: number[] | null;

  /** @format double */
  meta_size_lt?: number | null;

  /** @format double */
  meta_size_lte?: number | null;

  /** @format double */
  meta_size_not?: number | null;
  meta_size_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: ClusterImageWhereInput[] | null;
  OR?: ClusterImageWhereInput[] | null;

  /** @format double */
  size?: number | null;

  /** @format double */
  size_gt?: number | null;

  /** @format double */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format double */
  size_lt?: number | null;

  /** @format double */
  size_lte?: number | null;

  /** @format double */
  size_not?: number | null;
  size_not_in?: number[] | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_semantic_gt?: string | null;
  version_semantic_gte?: string | null;
  version_semantic_lt?: string | null;
  version_semantic_lte?: string | null;
  version_starts_with?: string | null;
}

export interface GetClusterImagesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ClusterImageOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ClusterImageWhereInput | null;
}

export interface ClusterImageConnection {
  aggregate: { count: number };
}

export interface GetClusterImagesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ClusterImageOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ClusterImageWhereInput | null;
}

export type MetroCheckStatusEnum = "CRITICAL" | "HEALTHY" | "INFO" | "NOTICE";

export interface Cluster {
  applications?: { id: string }[] | null;
  architecture: Architecture;
  auto_converge?: boolean | null;
  connect_state: ConnectState;
  consistency_groups?: { name: string; id: string }[] | null;
  current_cpu_model?: string | null;
  datacenters?: { name: string; id: string }[] | null;
  disconnected_date?: string | null;
  disconnected_reason?: ClusterConnectorErrorCode | null;
  dns: string[];
  entityAsyncStatus?: EntityAsyncStatus | null;

  /** @format double */
  failure_data_space?: number | null;
  has_metrox?: boolean | null;
  has_remote_backup?: boolean | null;

  /** @format double */
  host_num?: number | null;
  hosts?: { name: string; id: string }[] | null;
  hypervisor?: Hypervisor | null;
  id: string;
  ip: string;
  is_all_flash?: boolean | null;
  iscsi_vip?: string | null;
  labels?: { id: string }[] | null;
  license_expire_date?: string | null;
  license_serial?: string | null;
  license_sign_date?: string | null;
  license_type?: LicenseType | null;
  local_id?: string | null;
  maintenance_end_date?: string | null;
  maintenance_start_date?: string | null;
  management_vip?: string | null;

  /** @format double */
  max_chunk_num?: number | null;

  /** @format double */
  max_physical_data_capacity?: number | null;

  /** @format double */
  max_physical_data_capacity_per_node?: number | null;
  metro_availability_checklist?: {
    zoneAndZone: {
      status: MetroCheckStatusEnum;
      notice: number;
      items: {
        status: MetroCheckStatusEnum;
        notice: string[];
        labels: object;
        key: string;
        info: string[];
        critical: string[];
      }[];
      info: number;
      critical: number;
    };
    witness: {
      status: MetroCheckStatusEnum;
      notice: number;
      items: {
        status: MetroCheckStatusEnum;
        notice: string[];
        labels: object;
        key: string;
        info: string[];
        critical: string[];
      }[];
      info: number;
      critical: number;
    };
    secondaryZoneAndWitness: {
      status: MetroCheckStatusEnum;
      notice: number;
      items: {
        status: MetroCheckStatusEnum;
        notice: string[];
        labels: object;
        key: string;
        info: string[];
        critical: string[];
      }[];
      info: number;
      critical: number;
    };
    secondaryZone: {
      status: MetroCheckStatusEnum;
      notice: number;
      items: {
        status: MetroCheckStatusEnum;
        notice: string[];
        labels: object;
        key: string;
        info: string[];
        critical: string[];
      }[];
      info: number;
      critical: number;
    };
    primaryZoneAndWitness: {
      status: MetroCheckStatusEnum;
      notice: number;
      items: {
        status: MetroCheckStatusEnum;
        notice: string[];
        labels: object;
        key: string;
        info: string[];
        critical: string[];
      }[];
      info: number;
      critical: number;
    };
    primaryZone: {
      status: MetroCheckStatusEnum;
      notice: number;
      items: {
        status: MetroCheckStatusEnum;
        notice: string[];
        labels: object;
        key: string;
        info: string[];
        critical: string[];
      }[];
      info: number;
      critical: number;
    };
  };
  mgt_gateway?: string | null;
  mgt_netmask?: string | null;

  /** @format double */
  migration_data_size?: number | null;

  /** @format double */
  migration_speed?: number | null;
  name: string;
  ntp_mode?: NtpMode | null;
  ntp_servers: string[];
  nvmf_enabled?: boolean | null;
  pmem_enabled?: boolean | null;

  /** @format double */
  provisioned_cpu_cores?: number | null;

  /** @format double */
  provisioned_cpu_cores_for_active_vm?: number | null;

  /** @format double */
  provisioned_for_active_vm_ratio?: number | null;

  /** @format double */
  provisioned_memory_bytes?: number | null;

  /** @format double */
  provisioned_ratio?: number | null;
  rdma_enabled?: boolean | null;
  recommended_cpu_models: string[];

  /** @format double */
  recover_data_size?: number | null;

  /** @format double */
  recover_speed?: number | null;

  /** @format double */
  reserved_cpu_cores_for_system_service?: number | null;

  /** @format double */
  running_vm_num?: number | null;
  settings?: { id: string };
  software_edition?: SoftwareEdition | null;

  /** @format double */
  stopped_vm_num?: number | null;
  stretch?: boolean | null;

  /** @format double */
  suspended_vm_num?: number | null;

  /** @format double */
  total_cache_capacity?: number | null;

  /** @format double */
  total_cpu_cores?: number | null;

  /** @format double */
  total_cpu_hz?: number | null;
  total_cpu_models: string[];

  /** @format double */
  total_data_capacity?: number | null;

  /** @format double */
  total_memory_bytes?: number | null;
  type: ClusterType;

  /** @format double */
  used_cpu_hz?: number | null;

  /** @format double */
  used_data_space?: number | null;

  /** @format double */
  used_memory_bytes?: number | null;

  /** @format double */
  valid_data_space?: number | null;
  vcenterAccount?: { id: string };
  vdses?: { name: string; id: string }[] | null;
  version: string;
  vhost_enabled?: boolean | null;
  vm_folders?: { name: string; id: string }[] | null;

  /** @format double */
  vm_num?: number | null;
  vm_templates?: { name: string; id: string }[] | null;
  vms?: { name: string; id: string }[] | null;
  witness?: { name: string; id: string };
  zones?: { id: string }[] | null;
}

export type ClusterOrderByInput =
  | "architecture_ASC"
  | "architecture_DESC"
  | "auto_converge_ASC"
  | "auto_converge_DESC"
  | "connect_state_ASC"
  | "connect_state_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "current_cpu_model_ASC"
  | "current_cpu_model_DESC"
  | "disconnected_date_ASC"
  | "disconnected_date_DESC"
  | "disconnected_reason_ASC"
  | "disconnected_reason_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "failure_data_space_ASC"
  | "failure_data_space_DESC"
  | "has_metrox_ASC"
  | "has_metrox_DESC"
  | "has_remote_backup_ASC"
  | "has_remote_backup_DESC"
  | "host_num_ASC"
  | "host_num_DESC"
  | "hypervisor_ASC"
  | "hypervisor_DESC"
  | "id_ASC"
  | "id_DESC"
  | "ip_ASC"
  | "ip_DESC"
  | "is_all_flash_ASC"
  | "is_all_flash_DESC"
  | "iscsi_vip_ASC"
  | "iscsi_vip_DESC"
  | "license_expire_date_ASC"
  | "license_expire_date_DESC"
  | "license_serial_ASC"
  | "license_serial_DESC"
  | "license_sign_date_ASC"
  | "license_sign_date_DESC"
  | "license_type_ASC"
  | "license_type_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "maintenance_end_date_ASC"
  | "maintenance_end_date_DESC"
  | "maintenance_start_date_ASC"
  | "maintenance_start_date_DESC"
  | "management_vip_ASC"
  | "management_vip_DESC"
  | "max_chunk_num_ASC"
  | "max_chunk_num_DESC"
  | "max_physical_data_capacity_ASC"
  | "max_physical_data_capacity_DESC"
  | "max_physical_data_capacity_per_node_ASC"
  | "max_physical_data_capacity_per_node_DESC"
  | "metro_availability_checklist_ASC"
  | "metro_availability_checklist_DESC"
  | "mgt_gateway_ASC"
  | "mgt_gateway_DESC"
  | "mgt_netmask_ASC"
  | "mgt_netmask_DESC"
  | "migration_data_size_ASC"
  | "migration_data_size_DESC"
  | "migration_speed_ASC"
  | "migration_speed_DESC"
  | "name_ASC"
  | "name_DESC"
  | "ntp_mode_ASC"
  | "ntp_mode_DESC"
  | "nvmf_enabled_ASC"
  | "nvmf_enabled_DESC"
  | "password_ASC"
  | "password_DESC"
  | "pmem_enabled_ASC"
  | "pmem_enabled_DESC"
  | "provisioned_cpu_cores_ASC"
  | "provisioned_cpu_cores_DESC"
  | "provisioned_cpu_cores_for_active_vm_ASC"
  | "provisioned_cpu_cores_for_active_vm_DESC"
  | "provisioned_for_active_vm_ratio_ASC"
  | "provisioned_for_active_vm_ratio_DESC"
  | "provisioned_memory_bytes_ASC"
  | "provisioned_memory_bytes_DESC"
  | "provisioned_ratio_ASC"
  | "provisioned_ratio_DESC"
  | "rdma_enabled_ASC"
  | "rdma_enabled_DESC"
  | "recover_data_size_ASC"
  | "recover_data_size_DESC"
  | "recover_speed_ASC"
  | "recover_speed_DESC"
  | "reserved_cpu_cores_for_system_service_ASC"
  | "reserved_cpu_cores_for_system_service_DESC"
  | "running_vm_num_ASC"
  | "running_vm_num_DESC"
  | "software_edition_ASC"
  | "software_edition_DESC"
  | "stopped_vm_num_ASC"
  | "stopped_vm_num_DESC"
  | "stretch_ASC"
  | "stretch_DESC"
  | "suspended_vm_num_ASC"
  | "suspended_vm_num_DESC"
  | "total_cache_capacity_ASC"
  | "total_cache_capacity_DESC"
  | "total_cpu_cores_ASC"
  | "total_cpu_cores_DESC"
  | "total_cpu_hz_ASC"
  | "total_cpu_hz_DESC"
  | "total_data_capacity_ASC"
  | "total_data_capacity_DESC"
  | "total_memory_bytes_ASC"
  | "total_memory_bytes_DESC"
  | "type_ASC"
  | "type_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "used_cpu_hz_ASC"
  | "used_cpu_hz_DESC"
  | "used_data_space_ASC"
  | "used_data_space_DESC"
  | "used_memory_bytes_ASC"
  | "used_memory_bytes_DESC"
  | "username_ASC"
  | "username_DESC"
  | "valid_data_space_ASC"
  | "valid_data_space_DESC"
  | "version_ASC"
  | "version_DESC"
  | "vhost_enabled_ASC"
  | "vhost_enabled_DESC"
  | "vm_num_ASC"
  | "vm_num_DESC";

export interface GetClustersRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ClusterOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ClusterWhereInput | null;
}

export interface ClusterConnection {
  aggregate: { count: number };
}

export interface GetClustersConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ClusterOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ClusterWhereInput | null;
}

export interface ClusterSettings {
  cluster: { name: string; id: string };
  id: string;
  vm_recycle_bin?: { retain: number; enabled: boolean };
}

export type ClusterSettingsOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "vm_recycle_bin_ASC"
  | "vm_recycle_bin_DESC";

export interface GetClusterSettingsesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ClusterSettingsOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ClusterSettingsWhereInput | null;
}

export interface ClusterSettingsConnection {
  aggregate: { count: number };
}

export interface GetClusterSettingsesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ClusterSettingsOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ClusterSettingsWhereInput | null;
}

export interface ClusterTopo {
  brick_topoes?: { name: string; id: string }[] | null;
  cluster: { name: string; id: string };
  id: string;
  local_id: string;
  name: string;
  node_topoes?: { name: string; id: string }[] | null;
  zone_topoes?: { id: string }[] | null;
}

export type ClusterTopoOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetClusterTopoesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ClusterTopoOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ClusterTopoWhereInput | null;
}

export interface ClusterTopoConnection {
  aggregate: { count: number };
}

export interface GetClusterTopoesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ClusterTopoOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ClusterTopoWhereInput | null;
}

export interface ClusterUpgradeHistory {
  cluster: { name: string; id: string };
  date: string;
  id: string;
  local_id: string;
  progress: object;
  result: string;
  task_uuid: string;
  version: string;
}

export type ClusterUpgradeHistoryOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "date_ASC"
  | "date_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "progress_ASC"
  | "progress_DESC"
  | "result_ASC"
  | "result_DESC"
  | "task_uuid_ASC"
  | "task_uuid_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "version_ASC"
  | "version_DESC";

export interface ClusterUpgradeHistoryWhereInput {
  AND?: ClusterUpgradeHistoryWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  date?: string | null;
  date_gt?: string | null;
  date_gte?: string | null;
  date_in?: string[] | null;
  date_lt?: string | null;
  date_lte?: string | null;
  date_not?: string | null;
  date_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  NOT?: ClusterUpgradeHistoryWhereInput[] | null;
  OR?: ClusterUpgradeHistoryWhereInput[] | null;
  result?: string | null;
  result_contains?: string | null;
  result_ends_with?: string | null;
  result_gt?: string | null;
  result_gte?: string | null;
  result_in?: string[] | null;
  result_lt?: string | null;
  result_lte?: string | null;
  result_not?: string | null;
  result_not_contains?: string | null;
  result_not_ends_with?: string | null;
  result_not_in?: string[] | null;
  result_not_starts_with?: string | null;
  result_starts_with?: string | null;
  task_uuid?: string | null;
  task_uuid_contains?: string | null;
  task_uuid_ends_with?: string | null;
  task_uuid_gt?: string | null;
  task_uuid_gte?: string | null;
  task_uuid_in?: string[] | null;
  task_uuid_lt?: string | null;
  task_uuid_lte?: string | null;
  task_uuid_not?: string | null;
  task_uuid_not_contains?: string | null;
  task_uuid_not_ends_with?: string | null;
  task_uuid_not_in?: string[] | null;
  task_uuid_not_starts_with?: string | null;
  task_uuid_starts_with?: string | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_starts_with?: string | null;
}

export interface GetClusterUpgradeHistoriesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ClusterUpgradeHistoryOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ClusterUpgradeHistoryWhereInput | null;
}

export interface ClusterUpgradeHistoryConnection {
  aggregate: { count: number };
}

export interface GetClusterUpgradeHistoriesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ClusterUpgradeHistoryOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ClusterUpgradeHistoryWhereInput | null;
}

export interface ConsistencyGroup {
  cluster: { name: string; id: string };
  consistency_group_snapshots?: { name: string; id: string }[] | null;
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  iscsi_luns?: { name: string; id: string }[] | null;
  labels?: { id: string }[] | null;
  local_created_at: string;
  local_id: string;
  name: string;
  namespaces?: { name: string; id: string }[] | null;

  /** @format double */
  unique_size: number;
}

export type ConsistencyGroupOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "unique_size_ASC"
  | "unique_size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetConsistencyGroupsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ConsistencyGroupOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ConsistencyGroupWhereInput | null;
}

export interface ConsistencyGroupConnection {
  aggregate: { count: number };
}

export interface GetConsistencyGroupsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ConsistencyGroupOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ConsistencyGroupWhereInput | null;
}

export interface ConsistencyGroupSnapshot {
  consistency_group?: { name: string; id: string };
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  Iscsi_lun_snapshots?: { name: string; id: string }[] | null;
  labels?: { id: string }[] | null;
  local_created_at: string;
  local_id: string;
  name: string;
  nvmf_namespace_snapshots?: { name: string; id: string }[] | null;

  /** @format double */
  unique_size: number;
}

export type ConsistencyGroupSnapshotOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "unique_size_ASC"
  | "unique_size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetConsistencyGroupSnapshotsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ConsistencyGroupSnapshotOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ConsistencyGroupSnapshotWhereInput | null;
}

export interface ConsistencyGroupSnapshotConnection {
  aggregate: { count: number };
}

export interface GetConsistencyGroupSnapshotsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ConsistencyGroupSnapshotOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ConsistencyGroupSnapshotWhereInput | null;
}

export interface Datacenter {
  /** @format double */
  cluster_num?: number | null;
  clusters?: { name: string; id: string }[] | null;

  /** @format double */
  failure_data_space?: number | null;

  /** @format double */
  host_num?: number | null;
  id: string;
  labels?: { id: string }[] | null;
  name: string;
  organization: { name: string; id: string };

  /** @format double */
  total_cpu_hz?: number | null;

  /** @format double */
  total_data_capacity?: number | null;

  /** @format double */
  total_memory_bytes?: number | null;

  /** @format double */
  used_cpu_hz?: number | null;

  /** @format double */
  used_data_space?: number | null;

  /** @format double */
  used_memory_bytes?: number | null;

  /** @format double */
  vm_num?: number | null;
}

export type DatacenterOrderByInput =
  | "cluster_num_ASC"
  | "cluster_num_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "failure_data_space_ASC"
  | "failure_data_space_DESC"
  | "host_num_ASC"
  | "host_num_DESC"
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "total_cpu_hz_ASC"
  | "total_cpu_hz_DESC"
  | "total_data_capacity_ASC"
  | "total_data_capacity_DESC"
  | "total_memory_bytes_ASC"
  | "total_memory_bytes_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "used_cpu_hz_ASC"
  | "used_cpu_hz_DESC"
  | "used_data_space_ASC"
  | "used_data_space_DESC"
  | "used_memory_bytes_ASC"
  | "used_memory_bytes_DESC"
  | "vm_num_ASC"
  | "vm_num_DESC";

export interface GetDatacentersRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: DatacenterOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: DatacenterWhereInput | null;
}

export interface DatacenterConnection {
  aggregate: { count: number };
}

export interface GetDatacentersConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: DatacenterOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: DatacenterWhereInput | null;
}

export interface Deploy {
  id: string;
  license?: { id: string };
  version: string;
}

export type DeployOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "version_ASC"
  | "version_DESC";

export interface DeployWhereInput {
  AND?: DeployWhereInput[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  license?: LicenseWhereInput | null;
  NOT?: DeployWhereInput[] | null;
  OR?: DeployWhereInput[] | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_starts_with?: string | null;
}

export interface LicenseWhereInput {
  AND?: LicenseWhereInput[] | null;
  expire_date?: string | null;
  expire_date_gt?: string | null;
  expire_date_gte?: string | null;
  expire_date_in?: string[] | null;
  expire_date_lt?: string | null;
  expire_date_lte?: string | null;
  expire_date_not?: string | null;
  expire_date_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  license_serial?: string | null;
  license_serial_contains?: string | null;
  license_serial_ends_with?: string | null;
  license_serial_gt?: string | null;
  license_serial_gte?: string | null;
  license_serial_in?: string[] | null;
  license_serial_lt?: string | null;
  license_serial_lte?: string | null;
  license_serial_not?: string | null;
  license_serial_not_contains?: string | null;
  license_serial_not_ends_with?: string | null;
  license_serial_not_in?: string[] | null;
  license_serial_not_starts_with?: string | null;
  license_serial_starts_with?: string | null;
  maintenance_end_date?: string | null;
  maintenance_end_date_gt?: string | null;
  maintenance_end_date_gte?: string | null;
  maintenance_end_date_in?: string[] | null;
  maintenance_end_date_lt?: string | null;
  maintenance_end_date_lte?: string | null;
  maintenance_end_date_not?: string | null;
  maintenance_end_date_not_in?: string[] | null;
  maintenance_start_date?: string | null;
  maintenance_start_date_gt?: string | null;
  maintenance_start_date_gte?: string | null;
  maintenance_start_date_in?: string[] | null;
  maintenance_start_date_lt?: string | null;
  maintenance_start_date_lte?: string | null;
  maintenance_start_date_not?: string | null;
  maintenance_start_date_not_in?: string[] | null;

  /** @format double */
  max_chunk_num?: number | null;

  /** @format double */
  max_chunk_num_gt?: number | null;

  /** @format double */
  max_chunk_num_gte?: number | null;
  max_chunk_num_in?: number[] | null;

  /** @format double */
  max_chunk_num_lt?: number | null;

  /** @format double */
  max_chunk_num_lte?: number | null;

  /** @format double */
  max_chunk_num_not?: number | null;
  max_chunk_num_not_in?: number[] | null;

  /** @format double */
  max_cluster_num?: number | null;

  /** @format double */
  max_cluster_num_gt?: number | null;

  /** @format double */
  max_cluster_num_gte?: number | null;
  max_cluster_num_in?: number[] | null;

  /** @format double */
  max_cluster_num_lt?: number | null;

  /** @format double */
  max_cluster_num_lte?: number | null;

  /** @format double */
  max_cluster_num_not?: number | null;
  max_cluster_num_not_in?: number[] | null;
  NOT?: LicenseWhereInput[] | null;
  OR?: LicenseWhereInput[] | null;
  sign_date?: string | null;
  sign_date_gt?: string | null;
  sign_date_gte?: string | null;
  sign_date_in?: string[] | null;
  sign_date_lt?: string | null;
  sign_date_lte?: string | null;
  sign_date_not?: string | null;
  sign_date_not_in?: string[] | null;
  software_edition?: SoftwareEdition | null;
  software_edition_in?: SoftwareEdition[] | null;
  software_edition_not?: SoftwareEdition | null;
  software_edition_not_in?: SoftwareEdition[] | null;
  type?: LicenseType | null;
  type_in?: LicenseType[] | null;
  type_not?: LicenseType | null;
  type_not_in?: LicenseType[] | null;
}

export interface GetDeploysRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: DeployOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: DeployWhereInput | null;
}

export interface DeployConnection {
  aggregate: { count: number };
}

export interface GetDeploysConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: DeployOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: DeployWhereInput | null;
}

export interface DiscoveredHost {
  all_flash: boolean;
  deployed?: boolean | null;
  dimms?: { socket_id: string; health_status: string; fw_version: string; dimm_id: string }[] | null;
  disks: {
    type: DiskType;
    size: number;
    serial: string;
    persistent_memory_type?: string | null;
    numa_node?: number | null;
    model: string;
    function?: DiskFunction | null;
    drive: string;
    dimm_ids?: string[] | null;
  }[];
  host_ip: string;
  host_uuid: string;
  hostname: string;
  ifaces: {
    up: boolean;
    speed?: number | null;
    rdma_enabled?: boolean | null;
    pci_slot_name?: string | null;
    name: string;
    mtu: number;
    mac_address: string;
    ipv6?: string | null;
    ipv4?: string | null;
  }[];
  ipmi_ip?: string | null;
  is_os_in_raid1?: boolean | null;
  serial: string;
  version: string;
}

export interface ClusterWhereUniqueInput {
  id?: string | null;
  local_id?: string | null;
}

export interface GetDiscoverHostsRequestBody {
  cluster: ClusterWhereUniqueInput;
  host_address?: string[] | null;
}

export type PartitionUsage =
  | "BOOT"
  | "CACHE"
  | "JOURNAL"
  | "METAD"
  | "PARTITION"
  | "SWAP"
  | "SYSTEM"
  | "UNMOUNTED"
  | "UNPARTED"
  | "ZOOKEEPER";

export interface Disk {
  entityAsyncStatus?: EntityAsyncStatus | null;
  firmware: string;
  function?: DiskFunction | null;
  health_status?: DiskHealthStatus | null;
  healthy: boolean;
  host: { name: string; id: string };
  id: string;
  labels?: { id: string }[] | null;
  local_id: string;
  model: string;
  mounted: boolean;
  name: string;

  /** @format double */
  numa_node?: number | null;
  offline: boolean;
  partitions: { used_size: number; usage: PartitionUsage; size: number; path?: string | null; name?: string | null }[];
  path: string;
  persistent_memory_type?: string | null;

  /** @format double */
  physical_slot_on_brick?: number | null;
  pmem_dimms?: { name: string; id: string }[] | null;
  recommended_usage?: DiskUsage | null;

  /** @format double */
  remaining_life_percent?: number | null;
  serial: string;

  /** @format double */
  size: number;
  type: DiskType;
  usage: DiskUsage;
  usage_status?: DiskUsageStatus | null;
}

export type DiskOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "firmware_ASC"
  | "firmware_DESC"
  | "function_ASC"
  | "function_DESC"
  | "health_status_ASC"
  | "health_status_DESC"
  | "healthy_ASC"
  | "healthy_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "model_ASC"
  | "model_DESC"
  | "mounted_ASC"
  | "mounted_DESC"
  | "name_ASC"
  | "name_DESC"
  | "numa_node_ASC"
  | "numa_node_DESC"
  | "offline_ASC"
  | "offline_DESC"
  | "partitions_ASC"
  | "partitions_DESC"
  | "path_ASC"
  | "path_DESC"
  | "persistent_memory_type_ASC"
  | "persistent_memory_type_DESC"
  | "physical_slot_on_brick_ASC"
  | "physical_slot_on_brick_DESC"
  | "recommended_usage_ASC"
  | "recommended_usage_DESC"
  | "remaining_life_percent_ASC"
  | "remaining_life_percent_DESC"
  | "serial_ASC"
  | "serial_DESC"
  | "size_ASC"
  | "size_DESC"
  | "type_ASC"
  | "type_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "usage_ASC"
  | "usage_DESC"
  | "usage_status_ASC"
  | "usage_status_DESC";

export interface GetDisksRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: DiskOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: DiskWhereInput | null;
}

export interface DiskConnection {
  aggregate: { count: number };
}

export interface GetDisksConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: DiskOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: DiskWhereInput | null;
}

export type ElfDataStoreType = "ISCSI" | "NFS" | "NVMe";

export interface ElfDataStore {
  cluster: { name: string; id: string };
  description: string;
  external_use: boolean;
  id: string;
  internal: boolean;
  ip_whitelist: string;
  iscsi_target?: { name: string; id: string };
  local_id: string;
  name: string;
  nfs_export?: { name: string; id: string };
  nvmf_subsystem?: { name: string; id: string };

  /** @format double */
  replica_num: number;
  thin_provision: boolean;
  type: ElfDataStoreType;
}

export type ElfDataStoreOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "external_use_ASC"
  | "external_use_DESC"
  | "id_ASC"
  | "id_DESC"
  | "internal_ASC"
  | "internal_DESC"
  | "ip_whitelist_ASC"
  | "ip_whitelist_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "replica_num_ASC"
  | "replica_num_DESC"
  | "thin_provision_ASC"
  | "thin_provision_DESC"
  | "type_ASC"
  | "type_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface ElfDataStoreWhereInput {
  AND?: ElfDataStoreWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  external_use?: boolean | null;
  external_use_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  ip_whitelist?: string | null;
  ip_whitelist_contains?: string | null;
  ip_whitelist_ends_with?: string | null;
  ip_whitelist_gt?: string | null;
  ip_whitelist_gte?: string | null;
  ip_whitelist_in?: string[] | null;
  ip_whitelist_lt?: string | null;
  ip_whitelist_lte?: string | null;
  ip_whitelist_not?: string | null;
  ip_whitelist_not_contains?: string | null;
  ip_whitelist_not_ends_with?: string | null;
  ip_whitelist_not_in?: string[] | null;
  ip_whitelist_not_starts_with?: string | null;
  ip_whitelist_starts_with?: string | null;
  iscsi_target?: IscsiTargetWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nfs_export?: NfsExportWhereInput | null;
  NOT?: ElfDataStoreWhereInput[] | null;
  nvmf_subsystem?: NvmfSubsystemWhereInput | null;
  OR?: ElfDataStoreWhereInput[] | null;

  /** @format double */
  replica_num?: number | null;

  /** @format double */
  replica_num_gt?: number | null;

  /** @format double */
  replica_num_gte?: number | null;
  replica_num_in?: number[] | null;

  /** @format double */
  replica_num_lt?: number | null;

  /** @format double */
  replica_num_lte?: number | null;

  /** @format double */
  replica_num_not?: number | null;
  replica_num_not_in?: number[] | null;
  thin_provision?: boolean | null;
  thin_provision_not?: boolean | null;
  type?: ElfDataStoreType | null;
  type_in?: ElfDataStoreType[] | null;
  type_not?: ElfDataStoreType | null;
  type_not_in?: ElfDataStoreType[] | null;
}

export interface GetElfDataStoresRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ElfDataStoreOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ElfDataStoreWhereInput | null;
}

export interface ElfDataStoreConnection {
  aggregate: { count: number };
}

export interface GetElfDataStoresConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ElfDataStoreOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ElfDataStoreWhereInput | null;
}

export interface ElfImage {
  cluster?: { name: string; id: string };
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  labels?: { id: string }[] | null;
  local_created_at: string;
  local_id: string;
  name: string;
  path: string;

  /** @format double */
  size: number;
  upload_task?: { id: string };
  vm_disks?: { id: string }[] | null;
  vm_snapshots?: { name: string; id: string }[] | null;
  vm_templates?: { name: string; id: string }[] | null;
}

export type ElfImageOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "path_ASC"
  | "path_DESC"
  | "size_ASC"
  | "size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetElfImagesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ElfImageOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ElfImageWhereInput | null;
}

export interface ElfImageConnection {
  aggregate: { count: number };
}

export interface GetElfImagesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ElfImageOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ElfImageWhereInput | null;
}

export interface ElfStoragePolicy {
  cluster: { name: string; id: string };
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  local_id: string;
  name: string;

  /** @format double */
  replica_num: number;

  /** @format double */
  stripe_num: number;

  /** @format double */
  stripe_size: number;
  thin_provision: boolean;
}

export type ElfStoragePolicyOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "replica_num_ASC"
  | "replica_num_DESC"
  | "stripe_num_ASC"
  | "stripe_num_DESC"
  | "stripe_size_ASC"
  | "stripe_size_DESC"
  | "thin_provision_ASC"
  | "thin_provision_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface ElfStoragePolicyWhereInput {
  AND?: ElfStoragePolicyWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: ElfStoragePolicyWhereInput[] | null;
  OR?: ElfStoragePolicyWhereInput[] | null;

  /** @format double */
  replica_num?: number | null;

  /** @format double */
  replica_num_gt?: number | null;

  /** @format double */
  replica_num_gte?: number | null;
  replica_num_in?: number[] | null;

  /** @format double */
  replica_num_lt?: number | null;

  /** @format double */
  replica_num_lte?: number | null;

  /** @format double */
  replica_num_not?: number | null;
  replica_num_not_in?: number[] | null;

  /** @format double */
  stripe_num?: number | null;

  /** @format double */
  stripe_num_gt?: number | null;

  /** @format double */
  stripe_num_gte?: number | null;
  stripe_num_in?: number[] | null;

  /** @format double */
  stripe_num_lt?: number | null;

  /** @format double */
  stripe_num_lte?: number | null;

  /** @format double */
  stripe_num_not?: number | null;
  stripe_num_not_in?: number[] | null;

  /** @format double */
  stripe_size?: number | null;

  /** @format double */
  stripe_size_gt?: number | null;

  /** @format double */
  stripe_size_gte?: number | null;
  stripe_size_in?: number[] | null;

  /** @format double */
  stripe_size_lt?: number | null;

  /** @format double */
  stripe_size_lte?: number | null;

  /** @format double */
  stripe_size_not?: number | null;
  stripe_size_not_in?: number[] | null;
  thin_provision?: boolean | null;
  thin_provision_not?: boolean | null;
}

export interface GetElfStoragePoliciesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ElfStoragePolicyOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ElfStoragePolicyWhereInput | null;
}

export interface ElfStoragePolicyConnection {
  aggregate: { count: number };
}

export interface GetElfStoragePoliciesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ElfStoragePolicyOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ElfStoragePolicyWhereInput | null;
}

export type FilterRuleAggregationEnum = "AVG" | "MAX" | "MIN" | "QUANTILE" | "SUM";

export type FilterRuleMetricEnum =
  | "VM_CPU_USAGE"
  | "VM_MEMORY_USAGE"
  | "VM_POWEROFF_DAYS"
  | "VM_POWERON_DAYS"
  | "VM_READWRITE_IO";

export type FilterRuleOpEnum = "GT" | "GTE" | "LT" | "LTE";

export interface EntityFilter {
  apply_to_all_clusters?: boolean | null;
  clusters?: { name: string; id: string }[] | null;
  entity_type: EntityType;
  exclude_ids: string[];
  exec_failed_cluster?: { name: string; id: string }[] | null;
  filter_error: string[];
  filter_status: FilterStatus;
  id: string;
  ids: string[];
  last_executed_at?: string | null;
  name: string;
  preset?: string | null;
  rules: {
    threshold: number;
    quantile: number;
    op: FilterRuleOpEnum;
    metric: FilterRuleMetricEnum;
    duration: number;
    aggregation: FilterRuleAggregationEnum;
  }[];
}

export type EntityFilterOrderByInput =
  | "apply_to_all_clusters_ASC"
  | "apply_to_all_clusters_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entity_type_ASC"
  | "entity_type_DESC"
  | "filter_status_ASC"
  | "filter_status_DESC"
  | "id_ASC"
  | "id_DESC"
  | "last_executed_at_ASC"
  | "last_executed_at_DESC"
  | "name_ASC"
  | "name_DESC"
  | "preset_ASC"
  | "preset_DESC"
  | "rules_ASC"
  | "rules_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetEntityFiltersRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: EntityFilterOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: EntityFilterWhereInput | null;
}

export interface EntityFilterConnection {
  aggregate: { count: number };
}

export interface GetEntityFiltersConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: EntityFilterOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: EntityFilterWhereInput | null;
}

export interface GlobalAlertRule {
  alert_rules?: { id: string }[] | null;
  boolean: boolean;
  cause: string;
  default_thresholds: { value?: number | null; severity?: SeverityEnum | null; quantile?: number | null }[];
  disabled: boolean;
  id: string;
  impact: string;
  message: string;
  name: string;
  object?: AlertRuleObject | null;
  operator: string;
  solution: string;
  thresholds: { value?: number | null; severity?: SeverityEnum | null; quantile?: number | null }[];
  unit: AlertRuleUnit;
}

export type GlobalAlertRuleOrderByInput =
  | "boolean_ASC"
  | "boolean_DESC"
  | "cause_ASC"
  | "cause_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "default_thresholds_ASC"
  | "default_thresholds_DESC"
  | "disabled_ASC"
  | "disabled_DESC"
  | "id_ASC"
  | "id_DESC"
  | "impact_ASC"
  | "impact_DESC"
  | "message_ASC"
  | "message_DESC"
  | "name_ASC"
  | "name_DESC"
  | "object_ASC"
  | "object_DESC"
  | "operator_ASC"
  | "operator_DESC"
  | "solution_ASC"
  | "solution_DESC"
  | "thresholds_ASC"
  | "thresholds_DESC"
  | "unit_ASC"
  | "unit_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetGlobalAlertRulesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: GlobalAlertRuleOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: GlobalAlertRuleWhereInput | null;
}

export interface GlobalAlertRuleConnection {
  aggregate: { count: number };
}

export interface GetGlobalAlertRulesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: GlobalAlertRuleOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: GlobalAlertRuleWhereInput | null;
}

export interface GlobalSettings {
  id: string;
  vm_recycle_bin: { retain: number; enabled: boolean };
}

export type GlobalSettingsOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "vm_recycle_bin_ASC"
  | "vm_recycle_bin_DESC";

export interface GlobalSettingsWhereInput {
  AND?: GlobalSettingsWhereInput[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  NOT?: GlobalSettingsWhereInput[] | null;
  OR?: GlobalSettingsWhereInput[] | null;
}

export interface GetGlobalSettingsesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: GlobalSettingsOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: GlobalSettingsWhereInput | null;
}

export interface GlobalSettingsConnection {
  aggregate: { count: number };
}

export interface GetGlobalSettingsesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: GlobalSettingsOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: GlobalSettingsWhereInput | null;
}

export type MetricType = "BOTTOMK" | "NORMAL" | "TOPK";

export type GraphType = "AREA" | "STACK";

export interface Graph {
  cluster?: { name: string; id: string };
  disks?: { name: string; id: string }[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  hosts?: { name: string; id: string }[] | null;
  id: string;
  local_id: string;
  luns?: { name: string; id: string }[] | null;

  /** @format double */
  metric_count: number;
  metric_name: string;
  metric_type: MetricType;
  namespaces?: { name: string; id: string }[] | null;
  network?: NetworkType | null;
  nics?: { name: string; id: string }[] | null;
  resource_type: string;
  service?: string | null;
  targets: object;
  title: string;
  type: GraphType;
  view: { name: string; id: string };
  vmNics?: { id: string }[] | null;
  vms?: { name: string; id: string }[] | null;
  vmVolumes?: { name: string; id: string }[] | null;
  witnesses?: { name: string; id: string }[] | null;
  zones?: { id: string }[] | null;
}

export type GraphOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "metric_count_ASC"
  | "metric_count_DESC"
  | "metric_name_ASC"
  | "metric_name_DESC"
  | "metric_type_ASC"
  | "metric_type_DESC"
  | "network_ASC"
  | "network_DESC"
  | "resource_type_ASC"
  | "resource_type_DESC"
  | "service_ASC"
  | "service_DESC"
  | "targets_ASC"
  | "targets_DESC"
  | "title_ASC"
  | "title_DESC"
  | "type_ASC"
  | "type_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GraphWhereInput {
  AND?: GraphWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  disks_every?: DiskWhereInput | null;
  disks_none?: DiskWhereInput | null;
  disks_some?: DiskWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  hosts_every?: HostWhereInput | null;
  hosts_none?: HostWhereInput | null;
  hosts_some?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  luns_every?: IscsiLunWhereInput | null;
  luns_none?: IscsiLunWhereInput | null;
  luns_some?: IscsiLunWhereInput | null;

  /** @format double */
  metric_count?: number | null;

  /** @format double */
  metric_count_gt?: number | null;

  /** @format double */
  metric_count_gte?: number | null;
  metric_count_in?: number[] | null;

  /** @format double */
  metric_count_lt?: number | null;

  /** @format double */
  metric_count_lte?: number | null;

  /** @format double */
  metric_count_not?: number | null;
  metric_count_not_in?: number[] | null;
  metric_name?: string | null;
  metric_name_contains?: string | null;
  metric_name_ends_with?: string | null;
  metric_name_gt?: string | null;
  metric_name_gte?: string | null;
  metric_name_in?: string[] | null;
  metric_name_lt?: string | null;
  metric_name_lte?: string | null;
  metric_name_not?: string | null;
  metric_name_not_contains?: string | null;
  metric_name_not_ends_with?: string | null;
  metric_name_not_in?: string[] | null;
  metric_name_not_starts_with?: string | null;
  metric_name_starts_with?: string | null;
  metric_type?: MetricType | null;
  metric_type_in?: MetricType[] | null;
  metric_type_not?: MetricType | null;
  metric_type_not_in?: MetricType[] | null;
  namespaces_every?: NvmfNamespaceWhereInput | null;
  namespaces_none?: NvmfNamespaceWhereInput | null;
  namespaces_some?: NvmfNamespaceWhereInput | null;
  network?: NetworkType | null;
  network_in?: NetworkType[] | null;
  network_not?: NetworkType | null;
  network_not_in?: NetworkType[] | null;
  nics_every?: NicWhereInput | null;
  nics_none?: NicWhereInput | null;
  nics_some?: NicWhereInput | null;
  NOT?: GraphWhereInput[] | null;
  OR?: GraphWhereInput[] | null;
  resource_type?: string | null;
  resource_type_contains?: string | null;
  resource_type_ends_with?: string | null;
  resource_type_gt?: string | null;
  resource_type_gte?: string | null;
  resource_type_in?: string[] | null;
  resource_type_lt?: string | null;
  resource_type_lte?: string | null;
  resource_type_not?: string | null;
  resource_type_not_contains?: string | null;
  resource_type_not_ends_with?: string | null;
  resource_type_not_in?: string[] | null;
  resource_type_not_starts_with?: string | null;
  resource_type_starts_with?: string | null;
  service?: string | null;
  service_contains?: string | null;
  service_ends_with?: string | null;
  service_gt?: string | null;
  service_gte?: string | null;
  service_in?: string[] | null;
  service_lt?: string | null;
  service_lte?: string | null;
  service_not?: string | null;
  service_not_contains?: string | null;
  service_not_ends_with?: string | null;
  service_not_in?: string[] | null;
  service_not_starts_with?: string | null;
  service_starts_with?: string | null;
  title?: string | null;
  title_contains?: string | null;
  title_ends_with?: string | null;
  title_gt?: string | null;
  title_gte?: string | null;
  title_in?: string[] | null;
  title_lt?: string | null;
  title_lte?: string | null;
  title_not?: string | null;
  title_not_contains?: string | null;
  title_not_ends_with?: string | null;
  title_not_in?: string[] | null;
  title_not_starts_with?: string | null;
  title_starts_with?: string | null;
  type?: GraphType | null;
  type_in?: GraphType[] | null;
  type_not?: GraphType | null;
  type_not_in?: GraphType[] | null;
  view?: ViewWhereInput | null;
  vmNics_every?: VmNicWhereInput | null;
  vmNics_none?: VmNicWhereInput | null;
  vmNics_some?: VmNicWhereInput | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
  vmVolumes_every?: VmVolumeWhereInput | null;
  vmVolumes_none?: VmVolumeWhereInput | null;
  vmVolumes_some?: VmVolumeWhereInput | null;
  witnesses_every?: WitnessWhereInput | null;
  witnesses_none?: WitnessWhereInput | null;
  witnesses_some?: WitnessWhereInput | null;
  zones_every?: ZoneWhereInput | null;
  zones_none?: ZoneWhereInput | null;
  zones_some?: ZoneWhereInput | null;
}

export interface ViewWhereInput {
  AND?: ViewWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  graphs_every?: GraphWhereInput | null;
  graphs_none?: GraphWhereInput | null;
  graphs_some?: GraphWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: ViewWhereInput[] | null;
  OR?: ViewWhereInput[] | null;

  /** @format double */
  time_span?: number | null;

  /** @format double */
  time_span_gt?: number | null;

  /** @format double */
  time_span_gte?: number | null;
  time_span_in?: number[] | null;

  /** @format double */
  time_span_lt?: number | null;

  /** @format double */
  time_span_lte?: number | null;

  /** @format double */
  time_span_not?: number | null;
  time_span_not_in?: number[] | null;
  time_unit?: TimeUnit | null;
  time_unit_in?: TimeUnit[] | null;
  time_unit_not?: TimeUnit | null;
  time_unit_not_in?: TimeUnit[] | null;
}

export type TimeUnit = "DAY" | "HOUR" | "MONTH";

export interface GetGraphsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: GraphOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: GraphWhereInput | null;
}

export interface GraphConnection {
  aggregate: { count: number };
}

export interface GetGraphsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: GraphOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: GraphWhereInput | null;
}

export interface Host {
  access_ip?: string | null;

  /** @format double */
  allocatable_memory_bytes: number;
  chunk_id: string;
  cluster: { name: string; id: string };
  compatible_cpu_models: string[];
  cpu_brand: string;
  cpu_fan_speed: number[];
  cpu_fan_speed_unit?: CpuFanSpeedUnit | null;

  /** @format double */
  cpu_hz_per_core: number;
  cpu_model: string;
  cpu_temperature_celsius: number[];
  data_ip?: string | null;
  disks?: { name: string; id: string }[] | null;

  /** @format double */
  failure_data_space: number;

  /** @format double */
  hdd_data_capacity: number;

  /** @format double */
  hdd_disk_count: number;
  id: string;
  ipmi?: { id: string };
  is_os_in_raid1?: boolean | null;
  labels?: { id: string }[] | null;
  local_id: string;
  lsm_cap_disk_safe_umount: boolean;
  management_ip: string;
  model: string;
  name: string;
  nested_virtualization: boolean;

  /** @format double */
  nic_count: number;
  nics?: { name: string; id: string }[] | null;
  node_topo_local_id?: string | null;

  /** @format double */
  os_memory_bytes: number;
  os_version?: string | null;

  /** @format double */
  pmem_dimm_capacity: number;

  /** @format double */
  pmem_dimm_count: number;
  pmem_dimms?: { name: string; id: string }[] | null;

  /** @format double */
  pmem_disk_count: number;

  /** @format double */
  provisioned_cpu_cores: number;

  /** @format double */
  provisioned_memory_bytes: number;

  /** @format double */
  running_pause_vm_memory_bytes: number;

  /** @format double */
  running_vm_num?: number | null;

  /** @format double */
  scvm_cpu?: number | null;

  /** @format double */
  scvm_memory?: number | null;
  scvm_name?: string | null;
  serial?: string | null;

  /** @format double */
  ssd_data_capacity: number;

  /** @format double */
  ssd_disk_count: number;
  state: HostState;
  status: HostStatus;

  /** @format double */
  stopped_vm_num?: number | null;

  /** @format double */
  suspended_vm_num?: number | null;

  /** @format double */
  total_cache_capacity?: number | null;

  /** @format double */
  total_cpu_cores: number;

  /** @format double */
  total_cpu_hz: number;

  /** @format double */
  total_data_capacity: number;

  /** @format double */
  total_memory_bytes: number;
  usb_devices?: { name: string; id: string }[] | null;

  /** @format double */
  used_cpu_hz?: number | null;

  /** @format double */
  used_data_space: number;

  /** @format double */
  used_memory_bytes?: number | null;

  /** @format double */
  vm_num?: number | null;
  vmotion_ip?: string | null;
  vms?: { name: string; id: string }[] | null;
  vsphereEsxiAccount?: { id: string };
  with_faster_ssd_as_cache?: boolean | null;
  zone?: { id: string };
}

export type HostOrderByInput =
  | "access_ip_ASC"
  | "access_ip_DESC"
  | "allocatable_memory_bytes_ASC"
  | "allocatable_memory_bytes_DESC"
  | "chunk_id_ASC"
  | "chunk_id_DESC"
  | "cpu_brand_ASC"
  | "cpu_brand_DESC"
  | "cpu_fan_speed_unit_ASC"
  | "cpu_fan_speed_unit_DESC"
  | "cpu_hz_per_core_ASC"
  | "cpu_hz_per_core_DESC"
  | "cpu_model_ASC"
  | "cpu_model_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "data_ip_ASC"
  | "data_ip_DESC"
  | "failure_data_space_ASC"
  | "failure_data_space_DESC"
  | "hdd_data_capacity_ASC"
  | "hdd_data_capacity_DESC"
  | "hdd_disk_count_ASC"
  | "hdd_disk_count_DESC"
  | "id_ASC"
  | "id_DESC"
  | "is_os_in_raid1_ASC"
  | "is_os_in_raid1_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "lsm_cap_disk_safe_umount_ASC"
  | "lsm_cap_disk_safe_umount_DESC"
  | "management_ip_ASC"
  | "management_ip_DESC"
  | "model_ASC"
  | "model_DESC"
  | "name_ASC"
  | "name_DESC"
  | "nested_virtualization_ASC"
  | "nested_virtualization_DESC"
  | "nic_count_ASC"
  | "nic_count_DESC"
  | "node_topo_local_id_ASC"
  | "node_topo_local_id_DESC"
  | "os_memory_bytes_ASC"
  | "os_memory_bytes_DESC"
  | "os_version_ASC"
  | "os_version_DESC"
  | "pmem_dimm_capacity_ASC"
  | "pmem_dimm_capacity_DESC"
  | "pmem_dimm_count_ASC"
  | "pmem_dimm_count_DESC"
  | "pmem_disk_count_ASC"
  | "pmem_disk_count_DESC"
  | "provisioned_cpu_cores_ASC"
  | "provisioned_cpu_cores_DESC"
  | "provisioned_memory_bytes_ASC"
  | "provisioned_memory_bytes_DESC"
  | "running_pause_vm_memory_bytes_ASC"
  | "running_pause_vm_memory_bytes_DESC"
  | "running_vm_num_ASC"
  | "running_vm_num_DESC"
  | "scvm_cpu_ASC"
  | "scvm_cpu_DESC"
  | "scvm_memory_ASC"
  | "scvm_memory_DESC"
  | "scvm_name_ASC"
  | "scvm_name_DESC"
  | "serial_ASC"
  | "serial_DESC"
  | "ssd_data_capacity_ASC"
  | "ssd_data_capacity_DESC"
  | "ssd_disk_count_ASC"
  | "ssd_disk_count_DESC"
  | "state_ASC"
  | "state_DESC"
  | "status_ASC"
  | "status_DESC"
  | "stopped_vm_num_ASC"
  | "stopped_vm_num_DESC"
  | "suspended_vm_num_ASC"
  | "suspended_vm_num_DESC"
  | "total_cache_capacity_ASC"
  | "total_cache_capacity_DESC"
  | "total_cpu_cores_ASC"
  | "total_cpu_cores_DESC"
  | "total_cpu_hz_ASC"
  | "total_cpu_hz_DESC"
  | "total_data_capacity_ASC"
  | "total_data_capacity_DESC"
  | "total_memory_bytes_ASC"
  | "total_memory_bytes_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "used_cpu_hz_ASC"
  | "used_cpu_hz_DESC"
  | "used_data_space_ASC"
  | "used_data_space_DESC"
  | "used_memory_bytes_ASC"
  | "used_memory_bytes_DESC"
  | "vm_num_ASC"
  | "vm_num_DESC"
  | "vmotion_ip_ASC"
  | "vmotion_ip_DESC"
  | "with_faster_ssd_as_cache_ASC"
  | "with_faster_ssd_as_cache_DESC";

export interface GetHostsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: HostOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: HostWhereInput | null;
}

export interface HostConnection {
  aggregate: { count: number };
}

export interface GetHostsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: HostOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: HostWhereInput | null;
}

export interface ImageConnector {
  name: string;
  path: string;

  /** @format double */
  size: number;
}

export interface GetImagesConnectorRequestBody {
  cluster: ClusterWhereUniqueInput;
}

export interface Ipmi {
  host: { name: string; id: string };
  id: string;
  ip: string;
  local_id: string;
  username: string;
  valid: boolean;
}

export type IpmiOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "ip_ASC"
  | "ip_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "username_ASC"
  | "username_DESC"
  | "valid_ASC"
  | "valid_DESC";

export interface GetIpmisRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: IpmiOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: IpmiWhereInput | null;
}

export type StoreConnectionType = "ISCSI" | "NVMe";

export interface IscsiConnection {
  /** @format double */
  client_port: number;
  cluster: { name: string; id: string };
  host: { name: string; id: string };
  id: string;
  initiator_ip: string;
  iscsi_target?: { name: string; id: string };
  nvmf_subsystem?: { name: string; id: string };
  type: StoreConnectionType;
}

export type IscsiConnectionOrderByInput =
  | "client_port_ASC"
  | "client_port_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "initiator_ip_ASC"
  | "initiator_ip_DESC"
  | "type_ASC"
  | "type_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface IscsiConnectionWhereInput {
  AND?: IscsiConnectionWhereInput[] | null;

  /** @format double */
  client_port?: number | null;

  /** @format double */
  client_port_gt?: number | null;

  /** @format double */
  client_port_gte?: number | null;
  client_port_in?: number[] | null;

  /** @format double */
  client_port_lt?: number | null;

  /** @format double */
  client_port_lte?: number | null;

  /** @format double */
  client_port_not?: number | null;
  client_port_not_in?: number[] | null;
  cluster?: ClusterWhereInput | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  initiator_ip?: string | null;
  initiator_ip_contains?: string | null;
  initiator_ip_ends_with?: string | null;
  initiator_ip_gt?: string | null;
  initiator_ip_gte?: string | null;
  initiator_ip_in?: string[] | null;
  initiator_ip_lt?: string | null;
  initiator_ip_lte?: string | null;
  initiator_ip_not?: string | null;
  initiator_ip_not_contains?: string | null;
  initiator_ip_not_ends_with?: string | null;
  initiator_ip_not_in?: string[] | null;
  initiator_ip_not_starts_with?: string | null;
  initiator_ip_starts_with?: string | null;
  iscsi_target?: IscsiTargetWhereInput | null;
  NOT?: IscsiConnectionWhereInput[] | null;
  nvmf_subsystem?: NvmfSubsystemWhereInput | null;
  OR?: IscsiConnectionWhereInput[] | null;
  type?: StoreConnectionType | null;
  type_in?: StoreConnectionType[] | null;
  type_not?: StoreConnectionType | null;
  type_not_in?: StoreConnectionType[] | null;
}

export interface GetIscsiConnectionsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: IscsiConnectionOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: IscsiConnectionWhereInput | null;
}

export interface IscsiConnectionConnection {
  aggregate: { count: number };
}

export interface GetIscsiConnectionsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: IscsiConnectionOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: IscsiConnectionWhereInput | null;
}

export interface IscsiLun {
  allowed_initiators: string;

  /** @format double */
  assigned_size: number;

  /** @format double */
  bps: number;

  /** @format double */
  bps_max: number;

  /** @format double */
  bps_max_length: number;

  /** @format double */
  bps_rd: number;

  /** @format double */
  bps_rd_max: number;

  /** @format double */
  bps_rd_max_length: number;

  /** @format double */
  bps_wr: number;

  /** @format double */
  bps_wr_max: number;

  /** @format double */
  bps_wr_max_length: number;
  consistency_group?: { name: string; id: string };
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;

  /** @format double */
  io_size: number;

  /** @format double */
  iops: number;

  /** @format double */
  iops_max: number;

  /** @format double */
  iops_max_length: number;

  /** @format double */
  iops_rd: number;

  /** @format double */
  iops_rd_max: number;

  /** @format double */
  iops_rd_max_length: number;

  /** @format double */
  iops_wr: number;

  /** @format double */
  iops_wr_max: number;

  /** @format double */
  iops_wr_max_length: number;
  iscsi_target: { name: string; id: string };
  labels?: { id: string }[] | null;
  local_created_at: string;
  local_id: string;

  /** @format double */
  lun_id: number;
  name: string;

  /** @format double */
  replica_num: number;

  /** @format double */
  shared_size: number;

  /** @format double */
  snapshot_num: number;

  /** @format double */
  stripe_num: number;

  /** @format double */
  stripe_size: number;
  thin_provision: boolean;

  /** @format double */
  unique_size: number;
  zbs_volume_id: string;
}

export type IscsiLunOrderByInput =
  | "allowed_initiators_ASC"
  | "allowed_initiators_DESC"
  | "assigned_size_ASC"
  | "assigned_size_DESC"
  | "bps_ASC"
  | "bps_DESC"
  | "bps_max_ASC"
  | "bps_max_DESC"
  | "bps_max_length_ASC"
  | "bps_max_length_DESC"
  | "bps_rd_ASC"
  | "bps_rd_DESC"
  | "bps_rd_max_ASC"
  | "bps_rd_max_DESC"
  | "bps_rd_max_length_ASC"
  | "bps_rd_max_length_DESC"
  | "bps_wr_ASC"
  | "bps_wr_DESC"
  | "bps_wr_max_ASC"
  | "bps_wr_max_DESC"
  | "bps_wr_max_length_ASC"
  | "bps_wr_max_length_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "io_size_ASC"
  | "io_size_DESC"
  | "iops_ASC"
  | "iops_DESC"
  | "iops_max_ASC"
  | "iops_max_DESC"
  | "iops_max_length_ASC"
  | "iops_max_length_DESC"
  | "iops_rd_ASC"
  | "iops_rd_DESC"
  | "iops_rd_max_ASC"
  | "iops_rd_max_DESC"
  | "iops_rd_max_length_ASC"
  | "iops_rd_max_length_DESC"
  | "iops_wr_ASC"
  | "iops_wr_DESC"
  | "iops_wr_max_ASC"
  | "iops_wr_max_DESC"
  | "iops_wr_max_length_ASC"
  | "iops_wr_max_length_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "lun_id_ASC"
  | "lun_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "replica_num_ASC"
  | "replica_num_DESC"
  | "shared_size_ASC"
  | "shared_size_DESC"
  | "snapshot_num_ASC"
  | "snapshot_num_DESC"
  | "stripe_num_ASC"
  | "stripe_num_DESC"
  | "stripe_size_ASC"
  | "stripe_size_DESC"
  | "thin_provision_ASC"
  | "thin_provision_DESC"
  | "unique_size_ASC"
  | "unique_size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "zbs_volume_id_ASC"
  | "zbs_volume_id_DESC";

export interface GetIscsiLunsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: IscsiLunOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: IscsiLunWhereInput | null;
}

export interface IscsiLunConnection {
  aggregate: { count: number };
}

export interface GetIscsiLunsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: IscsiLunOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: IscsiLunWhereInput | null;
}

export interface IscsiLunSnapshot {
  consistency_group_snapshot?: { name: string; id: string };
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  iscsi_lun?: { name: string; id: string };
  iscsi_target: { name: string; id: string };
  labels?: { id: string }[] | null;
  local_created_at: string;
  local_id: string;
  name: string;

  /** @format double */
  unique_size: number;
}

export type IscsiLunSnapshotOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "unique_size_ASC"
  | "unique_size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetIscsiLunSnapshotsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: IscsiLunSnapshotOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: IscsiLunSnapshotWhereInput | null;
}

export interface IscsiLunSnapshotConnection {
  aggregate: { count: number };
}

export interface GetIscsiLunSnapshotsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: IscsiLunSnapshotOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: IscsiLunSnapshotWhereInput | null;
}

export interface IscsiTarget {
  /** @format double */
  bps?: number | null;

  /** @format double */
  bps_max?: number | null;

  /** @format double */
  bps_max_length?: number | null;

  /** @format double */
  bps_rd?: number | null;

  /** @format double */
  bps_rd_max?: number | null;

  /** @format double */
  bps_rd_max_length?: number | null;

  /** @format double */
  bps_wr?: number | null;

  /** @format double */
  bps_wr_max?: number | null;

  /** @format double */
  bps_wr_max_length?: number | null;
  chap_enabled: boolean;
  chap_name?: string | null;
  chap_secret?: string | null;
  cluster: { name: string; id: string };
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  external_use: boolean;
  id: string;
  initiator_chaps?: { initiator_iqn: string; chap_secret: string; chap_name: string }[] | null;
  internal: boolean;

  /** @format double */
  io_size?: number | null;

  /** @format double */
  iops?: number | null;

  /** @format double */
  iops_max?: number | null;

  /** @format double */
  iops_max_length?: number | null;

  /** @format double */
  iops_rd?: number | null;

  /** @format double */
  iops_rd_max?: number | null;

  /** @format double */
  iops_rd_max_length?: number | null;

  /** @format double */
  iops_wr?: number | null;

  /** @format double */
  iops_wr_max?: number | null;

  /** @format double */
  iops_wr_max_length?: number | null;
  ip_whitelist: string;
  iqn_name: string;
  iqn_whitelist: string;
  labels?: { id: string }[] | null;
  local_id: string;
  luns?: { name: string; id: string }[] | null;
  name: string;

  /** @format double */
  replica_num: number;

  /** @format double */
  stripe_num: number;

  /** @format double */
  stripe_size: number;
  thin_provision: boolean;
}

export type IscsiTargetOrderByInput =
  | "bps_ASC"
  | "bps_DESC"
  | "bps_max_ASC"
  | "bps_max_DESC"
  | "bps_max_length_ASC"
  | "bps_max_length_DESC"
  | "bps_rd_ASC"
  | "bps_rd_DESC"
  | "bps_rd_max_ASC"
  | "bps_rd_max_DESC"
  | "bps_rd_max_length_ASC"
  | "bps_rd_max_length_DESC"
  | "bps_wr_ASC"
  | "bps_wr_DESC"
  | "bps_wr_max_ASC"
  | "bps_wr_max_DESC"
  | "bps_wr_max_length_ASC"
  | "bps_wr_max_length_DESC"
  | "chap_enabled_ASC"
  | "chap_enabled_DESC"
  | "chap_name_ASC"
  | "chap_name_DESC"
  | "chap_secret_ASC"
  | "chap_secret_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "external_use_ASC"
  | "external_use_DESC"
  | "id_ASC"
  | "id_DESC"
  | "initiator_chaps_ASC"
  | "initiator_chaps_DESC"
  | "internal_ASC"
  | "internal_DESC"
  | "io_size_ASC"
  | "io_size_DESC"
  | "iops_ASC"
  | "iops_DESC"
  | "iops_max_ASC"
  | "iops_max_DESC"
  | "iops_max_length_ASC"
  | "iops_max_length_DESC"
  | "iops_rd_ASC"
  | "iops_rd_DESC"
  | "iops_rd_max_ASC"
  | "iops_rd_max_DESC"
  | "iops_rd_max_length_ASC"
  | "iops_rd_max_length_DESC"
  | "iops_wr_ASC"
  | "iops_wr_DESC"
  | "iops_wr_max_ASC"
  | "iops_wr_max_DESC"
  | "iops_wr_max_length_ASC"
  | "iops_wr_max_length_DESC"
  | "ip_whitelist_ASC"
  | "ip_whitelist_DESC"
  | "iqn_name_ASC"
  | "iqn_name_DESC"
  | "iqn_whitelist_ASC"
  | "iqn_whitelist_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "replica_num_ASC"
  | "replica_num_DESC"
  | "stripe_num_ASC"
  | "stripe_num_DESC"
  | "stripe_size_ASC"
  | "stripe_size_DESC"
  | "thin_provision_ASC"
  | "thin_provision_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetIscsiTargetsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: IscsiTargetOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: IscsiTargetWhereInput | null;
}

export interface IscsiTargetConnection {
  aggregate: { count: number };
}

export interface GetIscsiTargetsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: IscsiTargetOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: IscsiTargetWhereInput | null;
}

export interface Label {
  /** @format double */
  cluster_num?: number | null;
  clusters?: { name: string; id: string }[] | null;

  /** @format double */
  consistency_group_num?: number | null;

  /** @format double */
  consistency_group_snapshot_num?: number | null;
  consistency_group_snapshots?: { name: string; id: string }[] | null;
  consistency_groups?: { name: string; id: string }[] | null;
  createdAt: string;

  /** @format double */
  datacenter_num?: number | null;
  datacenters?: { name: string; id: string }[] | null;

  /** @format double */
  disk_num?: number | null;
  disks?: { name: string; id: string }[] | null;

  /** @format double */
  elf_image_num?: number | null;
  elf_images?: { name: string; id: string }[] | null;

  /** @format double */
  host_num?: number | null;
  hosts?: { name: string; id: string }[] | null;
  id: string;

  /** @format double */
  iscsi_lun_num?: number | null;

  /** @format double */
  iscsi_lun_snapshot_num?: number | null;
  iscsi_lun_snapshots?: { name: string; id: string }[] | null;
  iscsi_luns?: { name: string; id: string }[] | null;

  /** @format double */
  iscsi_target_num?: number | null;
  iscsi_targets?: { name: string; id: string }[] | null;
  key: string;

  /** @format double */
  namespace_group_num?: number | null;
  namespace_groups?: { name: string; id: string }[] | null;

  /** @format double */
  nfs_export_num?: number | null;
  nfs_exports?: { name: string; id: string }[] | null;

  /** @format double */
  nfs_inode_num?: number | null;
  nfs_inodes?: { name: string; id: string }[] | null;

  /** @format double */
  nic_num?: number | null;
  nics?: { name: string; id: string }[] | null;

  /** @format double */
  nvmf_namespace_num?: number | null;

  /** @format double */
  nvmf_namespace_snapshot_num?: number | null;
  nvmf_namespace_snapshots?: { name: string; id: string }[] | null;
  nvmf_namespaces?: { name: string; id: string }[] | null;

  /** @format double */
  nvmf_subsystem_num?: number | null;
  nvmf_subsystems?: { name: string; id: string }[] | null;

  /** @format double */
  system_vlan_num?: number | null;

  /** @format double */
  total_num?: number | null;
  value?: string | null;

  /** @format double */
  vds_num?: number | null;
  vdses?: { name: string; id: string }[] | null;
  vlans?: { name: string; id: string }[] | null;

  /** @format double */
  vm_num?: number | null;

  /** @format double */
  vm_snapshot_num?: number | null;
  vm_snapshots?: { name: string; id: string }[] | null;

  /** @format double */
  vm_template_num?: number | null;
  vm_templates?: { name: string; id: string }[] | null;

  /** @format double */
  vm_vlan_num?: number | null;

  /** @format double */
  vm_volume_num?: number | null;
  vm_volumes?: { name: string; id: string }[] | null;
  vms?: { name: string; id: string }[] | null;
}

export type LabelOrderByInput =
  | "cluster_num_ASC"
  | "cluster_num_DESC"
  | "consistency_group_num_ASC"
  | "consistency_group_num_DESC"
  | "consistency_group_snapshot_num_ASC"
  | "consistency_group_snapshot_num_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "datacenter_num_ASC"
  | "datacenter_num_DESC"
  | "disk_num_ASC"
  | "disk_num_DESC"
  | "elf_image_num_ASC"
  | "elf_image_num_DESC"
  | "host_num_ASC"
  | "host_num_DESC"
  | "id_ASC"
  | "id_DESC"
  | "iscsi_lun_num_ASC"
  | "iscsi_lun_num_DESC"
  | "iscsi_lun_snapshot_num_ASC"
  | "iscsi_lun_snapshot_num_DESC"
  | "iscsi_target_num_ASC"
  | "iscsi_target_num_DESC"
  | "key_ASC"
  | "key_DESC"
  | "namespace_group_num_ASC"
  | "namespace_group_num_DESC"
  | "nfs_export_num_ASC"
  | "nfs_export_num_DESC"
  | "nfs_inode_num_ASC"
  | "nfs_inode_num_DESC"
  | "nic_num_ASC"
  | "nic_num_DESC"
  | "nvmf_namespace_num_ASC"
  | "nvmf_namespace_num_DESC"
  | "nvmf_namespace_snapshot_num_ASC"
  | "nvmf_namespace_snapshot_num_DESC"
  | "nvmf_subsystem_num_ASC"
  | "nvmf_subsystem_num_DESC"
  | "system_vlan_num_ASC"
  | "system_vlan_num_DESC"
  | "total_num_ASC"
  | "total_num_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "value_ASC"
  | "value_DESC"
  | "vds_num_ASC"
  | "vds_num_DESC"
  | "vm_num_ASC"
  | "vm_num_DESC"
  | "vm_snapshot_num_ASC"
  | "vm_snapshot_num_DESC"
  | "vm_template_num_ASC"
  | "vm_template_num_DESC"
  | "vm_vlan_num_ASC"
  | "vm_vlan_num_DESC"
  | "vm_volume_num_ASC"
  | "vm_volume_num_DESC";

export interface GetLabelsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: LabelOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: LabelWhereInput | null;
}

export interface LabelConnection {
  aggregate: { count: number };
}

export interface GetLabelsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: LabelOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: LabelWhereInput | null;
}

export interface License {
  expire_date: string;
  id: string;
  license_serial: string;
  maintenance_end_date?: string | null;
  maintenance_start_date?: string | null;

  /** @format double */
  max_chunk_num: number;

  /** @format double */
  max_cluster_num: number;
  sign_date: string;
  software_edition: SoftwareEdition;
  type: LicenseType;
}

export type LicenseOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "expire_date_ASC"
  | "expire_date_DESC"
  | "id_ASC"
  | "id_DESC"
  | "license_serial_ASC"
  | "license_serial_DESC"
  | "maintenance_end_date_ASC"
  | "maintenance_end_date_DESC"
  | "maintenance_start_date_ASC"
  | "maintenance_start_date_DESC"
  | "max_chunk_num_ASC"
  | "max_chunk_num_DESC"
  | "max_cluster_num_ASC"
  | "max_cluster_num_DESC"
  | "sign_date_ASC"
  | "sign_date_DESC"
  | "software_edition_ASC"
  | "software_edition_DESC"
  | "type_ASC"
  | "type_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetLicensesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: LicenseOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: LicenseWhereInput | null;
}

export interface LicenseConnection {
  aggregate: { count: number };
}

export interface GetLicensesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: LicenseOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: LicenseWhereInput | null;
}

export type LogCollectionStatus = "EXECUTING" | "FAILED" | "STOPPING" | "SUCCESSED";

export interface LogCollection {
  cluster: { name: string; id: string };
  hosts?: { name: string; id: string }[] | null;
  id: string;
  local_id: string;
  log_ended_at: string;
  log_started_at: string;
  owner: string;
  path: string;

  /** @format double */
  progress: number;

  /** @format double */
  size: number;
  started_at: string;
  status: LogCollectionStatus;
}

export type LogCollectionOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "log_ended_at_ASC"
  | "log_ended_at_DESC"
  | "log_started_at_ASC"
  | "log_started_at_DESC"
  | "owner_ASC"
  | "owner_DESC"
  | "path_ASC"
  | "path_DESC"
  | "progress_ASC"
  | "progress_DESC"
  | "size_ASC"
  | "size_DESC"
  | "started_at_ASC"
  | "started_at_DESC"
  | "status_ASC"
  | "status_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface LogCollectionWhereInput {
  AND?: LogCollectionWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  hosts_every?: HostWhereInput | null;
  hosts_none?: HostWhereInput | null;
  hosts_some?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  log_ended_at?: string | null;
  log_ended_at_gt?: string | null;
  log_ended_at_gte?: string | null;
  log_ended_at_in?: string[] | null;
  log_ended_at_lt?: string | null;
  log_ended_at_lte?: string | null;
  log_ended_at_not?: string | null;
  log_ended_at_not_in?: string[] | null;
  log_started_at?: string | null;
  log_started_at_gt?: string | null;
  log_started_at_gte?: string | null;
  log_started_at_in?: string[] | null;
  log_started_at_lt?: string | null;
  log_started_at_lte?: string | null;
  log_started_at_not?: string | null;
  log_started_at_not_in?: string[] | null;
  NOT?: LogCollectionWhereInput[] | null;
  OR?: LogCollectionWhereInput[] | null;
  owner?: string | null;
  owner_contains?: string | null;
  owner_ends_with?: string | null;
  owner_gt?: string | null;
  owner_gte?: string | null;
  owner_in?: string[] | null;
  owner_lt?: string | null;
  owner_lte?: string | null;
  owner_not?: string | null;
  owner_not_contains?: string | null;
  owner_not_ends_with?: string | null;
  owner_not_in?: string[] | null;
  owner_not_starts_with?: string | null;
  owner_starts_with?: string | null;
  path?: string | null;
  path_contains?: string | null;
  path_ends_with?: string | null;
  path_gt?: string | null;
  path_gte?: string | null;
  path_in?: string[] | null;
  path_lt?: string | null;
  path_lte?: string | null;
  path_not?: string | null;
  path_not_contains?: string | null;
  path_not_ends_with?: string | null;
  path_not_in?: string[] | null;
  path_not_starts_with?: string | null;
  path_starts_with?: string | null;

  /** @format double */
  progress?: number | null;

  /** @format double */
  progress_gt?: number | null;

  /** @format double */
  progress_gte?: number | null;
  progress_in?: number[] | null;

  /** @format double */
  progress_lt?: number | null;

  /** @format double */
  progress_lte?: number | null;

  /** @format double */
  progress_not?: number | null;
  progress_not_in?: number[] | null;

  /** @format double */
  size?: number | null;

  /** @format double */
  size_gt?: number | null;

  /** @format double */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format double */
  size_lt?: number | null;

  /** @format double */
  size_lte?: number | null;

  /** @format double */
  size_not?: number | null;
  size_not_in?: number[] | null;
  started_at?: string | null;
  started_at_gt?: string | null;
  started_at_gte?: string | null;
  started_at_in?: string[] | null;
  started_at_lt?: string | null;
  started_at_lte?: string | null;
  started_at_not?: string | null;
  started_at_not_in?: string[] | null;
  status?: LogCollectionStatus | null;
  status_in?: LogCollectionStatus[] | null;
  status_not?: LogCollectionStatus | null;
  status_not_in?: LogCollectionStatus[] | null;
}

export interface GetLogCollectionsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: LogCollectionOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: LogCollectionWhereInput | null;
}

export interface LogCollectionConnection {
  aggregate: { count: number };
}

export interface GetLogCollectionsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: LogCollectionOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: LogCollectionWhereInput | null;
}

export interface MigrateTransmitter {
  createdAt: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  ip: string;
  migrating: boolean;
  name: string;
  password: string;
  username: string;
}

export type MigrateTransmitterOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "ip_ASC"
  | "ip_DESC"
  | "name_ASC"
  | "name_DESC"
  | "password_ASC"
  | "password_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "username_ASC"
  | "username_DESC";

export interface MigrateTransmitterWhereInput {
  AND?: MigrateTransmitterWhereInput[] | null;
  createdAt?: string | null;
  createdAt_gt?: string | null;
  createdAt_gte?: string | null;
  createdAt_in?: string[] | null;
  createdAt_lt?: string | null;
  createdAt_lte?: string | null;
  createdAt_not?: string | null;
  createdAt_not_in?: string[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  ip?: string | null;
  ip_contains?: string | null;
  ip_ends_with?: string | null;
  ip_gt?: string | null;
  ip_gte?: string | null;
  ip_in?: string[] | null;
  ip_lt?: string | null;
  ip_lte?: string | null;
  ip_not?: string | null;
  ip_not_contains?: string | null;
  ip_not_ends_with?: string | null;
  ip_not_in?: string[] | null;
  ip_not_starts_with?: string | null;
  ip_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: MigrateTransmitterWhereInput[] | null;
  OR?: MigrateTransmitterWhereInput[] | null;
  password?: string | null;
  password_contains?: string | null;
  password_ends_with?: string | null;
  password_gt?: string | null;
  password_gte?: string | null;
  password_in?: string[] | null;
  password_lt?: string | null;
  password_lte?: string | null;
  password_not?: string | null;
  password_not_contains?: string | null;
  password_not_ends_with?: string | null;
  password_not_in?: string[] | null;
  password_not_starts_with?: string | null;
  password_starts_with?: string | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
}

export interface GetMigrateTransmittersRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: MigrateTransmitterOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: MigrateTransmitterWhereInput | null;
}

export interface MigrateTransmitterConnection {
  aggregate: { count: number };
}

export interface GetMigrateTransmittersConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: MigrateTransmitterOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: MigrateTransmitterWhereInput | null;
}

export interface NamespaceGroup {
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  labels?: { id: string }[] | null;
  local_create_time: string;
  local_id: string;
  name: string;
  namespaces?: { name: string; id: string }[] | null;
  nvmf_subsystem: { name: string; id: string };
}

export type NamespaceGroupOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_create_time_ASC"
  | "local_create_time_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetNamespaceGroupsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NamespaceGroupOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NamespaceGroupWhereInput | null;
}

export interface NamespaceGroupConnection {
  aggregate: { count: number };
}

export interface GetNamespaceGroupsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NamespaceGroupOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NamespaceGroupWhereInput | null;
}

export interface NfsExport {
  cluster: { name: string; id: string };
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  export_inode_id: string;
  id: string;
  inodes?: { name: string; id: string }[] | null;
  internal: boolean;
  ip_whitelist: string;
  labels?: { id: string }[] | null;
  local_id: string;
  name: string;

  /** @format double */
  replica_num: number;
  thin_provision: boolean;
}

export type NfsExportOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "export_inode_id_ASC"
  | "export_inode_id_DESC"
  | "id_ASC"
  | "id_DESC"
  | "internal_ASC"
  | "internal_DESC"
  | "ip_whitelist_ASC"
  | "ip_whitelist_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "replica_num_ASC"
  | "replica_num_DESC"
  | "thin_provision_ASC"
  | "thin_provision_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetNfsExportsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NfsExportOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NfsExportWhereInput | null;
}

export interface NfsExportConnection {
  aggregate: { count: number };
}

export interface GetNfsExportsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NfsExportOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NfsExportWhereInput | null;
}

export interface NfsInode {
  /** @format double */
  assigned_size: number;
  entityAsyncStatus?: EntityAsyncStatus | null;
  file: boolean;
  id: string;
  labels?: { id: string }[] | null;
  local_id: string;
  local_updated_at: string;
  name: string;
  nfs_export: { name: string; id: string };
  parent_id: string;

  /** @format double */
  shared_size: number;

  /** @format double */
  snapshot_num: number;

  /** @format double */
  unique_size: number;
}

export type NfsInodeOrderByInput =
  | "assigned_size_ASC"
  | "assigned_size_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "file_ASC"
  | "file_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "local_updated_at_ASC"
  | "local_updated_at_DESC"
  | "name_ASC"
  | "name_DESC"
  | "parent_id_ASC"
  | "parent_id_DESC"
  | "shared_size_ASC"
  | "shared_size_DESC"
  | "snapshot_num_ASC"
  | "snapshot_num_DESC"
  | "unique_size_ASC"
  | "unique_size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetNfsInodesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NfsInodeOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NfsInodeWhereInput | null;
}

export interface NfsInodeConnection {
  aggregate: { count: number };
}

export interface GetNfsInodesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NfsInodeOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NfsInodeWhereInput | null;
}

export interface Nic {
  driver?: string | null;
  driver_state?: NicDriverState | null;
  gateway_ip?: string | null;
  host: { name: string; id: string };
  ibdev?: string | null;
  id: string;
  ip_address?: string | null;
  is_sriov?: boolean | null;
  labels?: { id: string }[] | null;
  local_id: string;
  mac_address: string;

  /** @format double */
  max_vf_num?: number | null;
  model?: string | null;

  /** @format double */
  mtu: number;
  name: string;
  nic_uuid?: string | null;
  physical: boolean;
  rdma_enabled?: boolean | null;
  running: boolean;

  /** @format double */
  speed?: number | null;
  subnet_mask?: string | null;

  /** @format double */
  total_vf_num?: number | null;
  type?: NetworkType | null;
  up: boolean;

  /** @format double */
  used_vf_num?: number | null;
  vds?: { name: string; id: string };
}

export type NicOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "driver_ASC"
  | "driver_DESC"
  | "driver_state_ASC"
  | "driver_state_DESC"
  | "gateway_ip_ASC"
  | "gateway_ip_DESC"
  | "ibdev_ASC"
  | "ibdev_DESC"
  | "id_ASC"
  | "id_DESC"
  | "ip_address_ASC"
  | "ip_address_DESC"
  | "is_sriov_ASC"
  | "is_sriov_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "mac_address_ASC"
  | "mac_address_DESC"
  | "max_vf_num_ASC"
  | "max_vf_num_DESC"
  | "model_ASC"
  | "model_DESC"
  | "mtu_ASC"
  | "mtu_DESC"
  | "name_ASC"
  | "name_DESC"
  | "nic_uuid_ASC"
  | "nic_uuid_DESC"
  | "physical_ASC"
  | "physical_DESC"
  | "rdma_enabled_ASC"
  | "rdma_enabled_DESC"
  | "running_ASC"
  | "running_DESC"
  | "speed_ASC"
  | "speed_DESC"
  | "subnet_mask_ASC"
  | "subnet_mask_DESC"
  | "total_vf_num_ASC"
  | "total_vf_num_DESC"
  | "type_ASC"
  | "type_DESC"
  | "up_ASC"
  | "up_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "used_vf_num_ASC"
  | "used_vf_num_DESC";

export interface GetNicsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NicOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NicWhereInput | null;
}

export interface NicConnection {
  aggregate: { count: number };
}

export interface GetNicsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NicOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NicWhereInput | null;
}

export interface NodeTopo {
  brick_topo?: { name: string; id: string };
  cluster: { name: string; id: string };
  cluster_topo?: { name: string; id: string };
  host: { name: string; id: string };
  id: string;
  local_id: string;
  name: string;
  position: { row?: number | null; column?: number | null };
}

export type NodeTopoOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "position_ASC"
  | "position_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetNodeTopoesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NodeTopoOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NodeTopoWhereInput | null;
}

export interface NodeTopoConnection {
  aggregate: { count: number };
}

export interface GetNodeTopoesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NodeTopoOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NodeTopoWhereInput | null;
}

export interface NvmfNamespace {
  /** @format double */
  assigned_size: number;

  /** @format double */
  bps: number;

  /** @format double */
  bps_max: number;

  /** @format double */
  bps_max_length: number;

  /** @format double */
  bps_rd: number;

  /** @format double */
  bps_rd_max: number;

  /** @format double */
  bps_rd_max_length: number;

  /** @format double */
  bps_wr: number;

  /** @format double */
  bps_wr_max: number;

  /** @format double */
  bps_wr_max_length: number;
  consistency_group?: { name: string; id: string };
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;

  /** @format double */
  io_size: number;

  /** @format double */
  iops: number;

  /** @format double */
  iops_max: number;

  /** @format double */
  iops_max_length: number;

  /** @format double */
  iops_rd: number;

  /** @format double */
  iops_rd_max: number;

  /** @format double */
  iops_rd_max_length: number;

  /** @format double */
  iops_wr: number;

  /** @format double */
  iops_wr_max: number;

  /** @format double */
  iops_wr_max_length: number;
  is_shared: boolean;
  labels?: { id: string }[] | null;
  local_created_at: string;
  local_id: string;
  name: string;
  namespace_group?: { name: string; id: string };

  /** @format double */
  namespace_id: number;
  nqn_whitelist: string;
  nvmf_subsystem: { name: string; id: string };

  /** @format double */
  replica_num: number;

  /** @format double */
  shared_size: number;

  /** @format double */
  snapshot_num: number;

  /** @format double */
  stripe_num: number;

  /** @format double */
  stripe_size: number;
  thin_provision: boolean;

  /** @format double */
  unique_size: number;
  zbs_volume_id: string;
}

export type NvmfNamespaceOrderByInput =
  | "assigned_size_ASC"
  | "assigned_size_DESC"
  | "bps_ASC"
  | "bps_DESC"
  | "bps_max_ASC"
  | "bps_max_DESC"
  | "bps_max_length_ASC"
  | "bps_max_length_DESC"
  | "bps_rd_ASC"
  | "bps_rd_DESC"
  | "bps_rd_max_ASC"
  | "bps_rd_max_DESC"
  | "bps_rd_max_length_ASC"
  | "bps_rd_max_length_DESC"
  | "bps_wr_ASC"
  | "bps_wr_DESC"
  | "bps_wr_max_ASC"
  | "bps_wr_max_DESC"
  | "bps_wr_max_length_ASC"
  | "bps_wr_max_length_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "io_size_ASC"
  | "io_size_DESC"
  | "iops_ASC"
  | "iops_DESC"
  | "iops_max_ASC"
  | "iops_max_DESC"
  | "iops_max_length_ASC"
  | "iops_max_length_DESC"
  | "iops_rd_ASC"
  | "iops_rd_DESC"
  | "iops_rd_max_ASC"
  | "iops_rd_max_DESC"
  | "iops_rd_max_length_ASC"
  | "iops_rd_max_length_DESC"
  | "iops_wr_ASC"
  | "iops_wr_DESC"
  | "iops_wr_max_ASC"
  | "iops_wr_max_DESC"
  | "iops_wr_max_length_ASC"
  | "iops_wr_max_length_DESC"
  | "is_shared_ASC"
  | "is_shared_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "namespace_id_ASC"
  | "namespace_id_DESC"
  | "nqn_whitelist_ASC"
  | "nqn_whitelist_DESC"
  | "replica_num_ASC"
  | "replica_num_DESC"
  | "shared_size_ASC"
  | "shared_size_DESC"
  | "snapshot_num_ASC"
  | "snapshot_num_DESC"
  | "stripe_num_ASC"
  | "stripe_num_DESC"
  | "stripe_size_ASC"
  | "stripe_size_DESC"
  | "thin_provision_ASC"
  | "thin_provision_DESC"
  | "unique_size_ASC"
  | "unique_size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "zbs_volume_id_ASC"
  | "zbs_volume_id_DESC";

export interface GetNvmfNamespacesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NvmfNamespaceOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NvmfNamespaceWhereInput | null;
}

export interface NvmfNamespaceConnection {
  aggregate: { count: number };
}

export interface GetNvmfNamespacesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NvmfNamespaceOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NvmfNamespaceWhereInput | null;
}

export interface NvmfNamespaceSnapshot {
  consistency_group_snapshot?: { name: string; id: string };
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  labels?: { id: string }[] | null;
  local_created_at: string;
  local_id: string;
  name: string;
  nvmf_namespace?: { name: string; id: string };
  nvmf_subsystem: { name: string; id: string };

  /** @format double */
  unique_size: number;
}

export type NvmfNamespaceSnapshotOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "unique_size_ASC"
  | "unique_size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetNvmfNamespaceSnapshotsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NvmfNamespaceSnapshotOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NvmfNamespaceSnapshotWhereInput | null;
}

export interface NvmfNamespaceSnapshotConnection {
  aggregate: { count: number };
}

export interface GetNvmfNamespaceSnapshotsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NvmfNamespaceSnapshotOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NvmfNamespaceSnapshotWhereInput | null;
}

export interface NvmfSubsystem {
  /** @format double */
  bps?: number | null;

  /** @format double */
  bps_max?: number | null;

  /** @format double */
  bps_max_length?: number | null;

  /** @format double */
  bps_rd?: number | null;

  /** @format double */
  bps_rd_max?: number | null;

  /** @format double */
  bps_rd_max_length?: number | null;

  /** @format double */
  bps_wr?: number | null;

  /** @format double */
  bps_wr_max?: number | null;

  /** @format double */
  bps_wr_max_length?: number | null;
  cluster: { name: string; id: string };
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  external_use: boolean;
  id: string;
  internal: boolean;

  /** @format double */
  io_size?: number | null;

  /** @format double */
  iops?: number | null;

  /** @format double */
  iops_max?: number | null;

  /** @format double */
  iops_max_length?: number | null;

  /** @format double */
  iops_rd?: number | null;

  /** @format double */
  iops_rd_max?: number | null;

  /** @format double */
  iops_rd_max_length?: number | null;

  /** @format double */
  iops_wr?: number | null;

  /** @format double */
  iops_wr_max?: number | null;

  /** @format double */
  iops_wr_max_length?: number | null;
  ip_whitelist: string;
  labels?: { id: string }[] | null;
  local_id: string;
  name: string;
  namespace_groups?: { name: string; id: string }[] | null;
  namespaces?: { name: string; id: string }[] | null;
  nqn_name: string;
  nqn_whitelist: string;
  policy: NvmfSubsystemPolicyType;

  /** @format double */
  replica_num: number;

  /** @format double */
  stripe_num: number;

  /** @format double */
  stripe_size: number;
  thin_provision: boolean;
}

export type NvmfSubsystemOrderByInput =
  | "bps_ASC"
  | "bps_DESC"
  | "bps_max_ASC"
  | "bps_max_DESC"
  | "bps_max_length_ASC"
  | "bps_max_length_DESC"
  | "bps_rd_ASC"
  | "bps_rd_DESC"
  | "bps_rd_max_ASC"
  | "bps_rd_max_DESC"
  | "bps_rd_max_length_ASC"
  | "bps_rd_max_length_DESC"
  | "bps_wr_ASC"
  | "bps_wr_DESC"
  | "bps_wr_max_ASC"
  | "bps_wr_max_DESC"
  | "bps_wr_max_length_ASC"
  | "bps_wr_max_length_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "external_use_ASC"
  | "external_use_DESC"
  | "id_ASC"
  | "id_DESC"
  | "internal_ASC"
  | "internal_DESC"
  | "io_size_ASC"
  | "io_size_DESC"
  | "iops_ASC"
  | "iops_DESC"
  | "iops_max_ASC"
  | "iops_max_DESC"
  | "iops_max_length_ASC"
  | "iops_max_length_DESC"
  | "iops_rd_ASC"
  | "iops_rd_DESC"
  | "iops_rd_max_ASC"
  | "iops_rd_max_DESC"
  | "iops_rd_max_length_ASC"
  | "iops_rd_max_length_DESC"
  | "iops_wr_ASC"
  | "iops_wr_DESC"
  | "iops_wr_max_ASC"
  | "iops_wr_max_DESC"
  | "iops_wr_max_length_ASC"
  | "iops_wr_max_length_DESC"
  | "ip_whitelist_ASC"
  | "ip_whitelist_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "nqn_name_ASC"
  | "nqn_name_DESC"
  | "nqn_whitelist_ASC"
  | "nqn_whitelist_DESC"
  | "policy_ASC"
  | "policy_DESC"
  | "replica_num_ASC"
  | "replica_num_DESC"
  | "stripe_num_ASC"
  | "stripe_num_DESC"
  | "stripe_size_ASC"
  | "stripe_size_DESC"
  | "thin_provision_ASC"
  | "thin_provision_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetNvmfSubsystemsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NvmfSubsystemOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NvmfSubsystemWhereInput | null;
}

export interface NvmfSubsystemConnection {
  aggregate: { count: number };
}

export interface GetNvmfSubsystemsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: NvmfSubsystemOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: NvmfSubsystemWhereInput | null;
}

export interface Organization {
  datacenters?: { name: string; id: string }[] | null;
  id: string;
  name: string;
}

export type OrganizationOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetOrganizationsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: OrganizationOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: OrganizationWhereInput | null;
}

export interface OrganizationConnection {
  aggregate: { count: number };
}

export interface GetOrganizationsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: OrganizationOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: OrganizationWhereInput | null;
}

export interface PmemDimm {
  /** @format double */
  capacity: number;
  device_locator: string;
  disk?: { name: string; id: string };
  health_status?: DiskHealthStatus | null;
  host: { name: string; id: string };
  id: string;
  local_id?: string | null;
  name: string;

  /** @format double */
  numa_node: number;
  part_number: string;

  /** @format double */
  remaining_life_percent?: number | null;
  version: string;
}

export type PmemDimmOrderByInput =
  | "capacity_ASC"
  | "capacity_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "device_locator_ASC"
  | "device_locator_DESC"
  | "health_status_ASC"
  | "health_status_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "numa_node_ASC"
  | "numa_node_DESC"
  | "part_number_ASC"
  | "part_number_DESC"
  | "remaining_life_percent_ASC"
  | "remaining_life_percent_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "version_ASC"
  | "version_DESC";

export interface GetPmemDimmsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: PmemDimmOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: PmemDimmWhereInput | null;
}

export interface PmemDimmConnection {
  aggregate: { count: number };
}

export interface GetPmemDimmsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: PmemDimmOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: PmemDimmWhereInput | null;
}

export interface RackTopo {
  brick_topoes?: { name: string; id: string }[] | null;
  cluster: { name: string; id: string };

  /** @format double */
  height: number;
  id: string;
  local_id: string;
  name: string;
  zone_topo: { id: string };
}

export type RackTopoOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "height_ASC"
  | "height_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetRackTopoesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: RackTopoOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: RackTopoWhereInput | null;
}

export interface RackTopoConnection {
  aggregate: { count: number };
}

export interface GetRackTopoesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: RackTopoOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: RackTopoWhereInput | null;
}

export type TaskStatus = "EXECUTING" | "FAILED" | "PENDING" | "SUCCESSED";

export interface ReportTask {
  createdAt: string;
  id: string;
  internal: boolean;
  name: string;
  plan_id?: string | null;
  status: TaskStatus;
  template: { name: string; id: string };
}

export type ReportTaskOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "internal_ASC"
  | "internal_DESC"
  | "name_ASC"
  | "name_DESC"
  | "plan_id_ASC"
  | "plan_id_DESC"
  | "status_ASC"
  | "status_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface ReportTaskWhereInput {
  AND?: ReportTaskWhereInput[] | null;
  createdAt?: string | null;
  createdAt_gt?: string | null;
  createdAt_gte?: string | null;
  createdAt_in?: string[] | null;
  createdAt_lt?: string | null;
  createdAt_lte?: string | null;
  createdAt_not?: string | null;
  createdAt_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: ReportTaskWhereInput[] | null;
  OR?: ReportTaskWhereInput[] | null;
  plan_id?: string | null;
  plan_id_contains?: string | null;
  plan_id_ends_with?: string | null;
  plan_id_gt?: string | null;
  plan_id_gte?: string | null;
  plan_id_in?: string[] | null;
  plan_id_lt?: string | null;
  plan_id_lte?: string | null;
  plan_id_not?: string | null;
  plan_id_not_contains?: string | null;
  plan_id_not_ends_with?: string | null;
  plan_id_not_in?: string[] | null;
  plan_id_not_starts_with?: string | null;
  plan_id_starts_with?: string | null;
  status?: TaskStatus | null;
  status_in?: TaskStatus[] | null;
  status_not?: TaskStatus | null;
  status_not_in?: TaskStatus[] | null;
  template?: ReportTemplateWhereInput | null;
}

export interface ReportTemplateWhereInput {
  AND?: ReportTemplateWhereInput[] | null;
  createdAt?: string | null;
  createdAt_gt?: string | null;
  createdAt_gte?: string | null;
  createdAt_in?: string[] | null;
  createdAt_lt?: string | null;
  createdAt_lte?: string | null;
  createdAt_not?: string | null;
  createdAt_not_in?: string[] | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: ReportTemplateWhereInput[] | null;
  OR?: ReportTemplateWhereInput[] | null;
  preset?: string | null;
  preset_contains?: string | null;
  preset_ends_with?: string | null;
  preset_gt?: string | null;
  preset_gte?: string | null;
  preset_in?: string[] | null;
  preset_lt?: string | null;
  preset_lte?: string | null;
  preset_not?: string | null;
  preset_not_contains?: string | null;
  preset_not_ends_with?: string | null;
  preset_not_in?: string[] | null;
  preset_not_starts_with?: string | null;
  preset_starts_with?: string | null;

  /** @format double */
  task_num?: number | null;

  /** @format double */
  task_num_gt?: number | null;

  /** @format double */
  task_num_gte?: number | null;
  task_num_in?: number[] | null;

  /** @format double */
  task_num_lt?: number | null;

  /** @format double */
  task_num_lte?: number | null;

  /** @format double */
  task_num_not?: number | null;
  task_num_not_in?: number[] | null;
  tasks_every?: ReportTaskWhereInput | null;
  tasks_none?: ReportTaskWhereInput | null;
  tasks_some?: ReportTaskWhereInput | null;
}

export interface GetReportTasksRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ReportTaskOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ReportTaskWhereInput | null;
}

export interface ReportTaskConnection {
  aggregate: { count: number };
}

export interface GetReportTasksConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ReportTaskOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ReportTaskWhereInput | null;
}

export type ReportResourceInputEnum =
  | "ALERT"
  | "ALL"
  | "CLUSTER"
  | "DATA_CENTER"
  | "DISK"
  | "ELF_IMAGE"
  | "ENTITY_FILTERS"
  | "GLOBAL_ALERT_RULE"
  | "HOST"
  | "TASK"
  | "VDS"
  | "VLAN"
  | "VM"
  | "VM_TEMPLATE";

export interface ReportTemplate {
  createdAt: string;
  description: string;
  execute_plan: { id: string }[];
  id: string;
  name: string;
  preset?: string | null;
  resource_meta: { type: ReportResourceInputEnum; name: string; filter: object; fields: string[] }[];

  /** @format double */
  task_num: number;
  tasks?: { name: string; id: string }[] | null;
}

export type ReportTemplateOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "execute_plan_ASC"
  | "execute_plan_DESC"
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "preset_ASC"
  | "preset_DESC"
  | "resource_meta_ASC"
  | "resource_meta_DESC"
  | "task_num_ASC"
  | "task_num_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetReportTemplatesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ReportTemplateOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ReportTemplateWhereInput | null;
}

export interface ReportTemplateConnection {
  aggregate: { count: number };
}

export interface GetReportTemplatesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ReportTemplateOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ReportTemplateWhereInput | null;
}

export type ProtectSnapshotStatus =
  | "PROTECT_SNAPSHOT_STATUS_CREATED"
  | "PROTECT_SNAPSHOT_STATUS_CREATING"
  | "PROTECT_SNAPSHOT_STATUS_DELETED"
  | "PROTECT_SNAPSHOT_STATUS_FAILED";

export interface SnapshotGroup {
  cluster: { name: string; id: string };
  deleted: boolean;
  entityAsyncStatus?: EntityAsyncStatus | null;
  estimated_recycling_time?: string | null;
  id: string;
  internal?: boolean | null;
  keep: boolean;
  local_created_at: string;
  local_id: string;

  /** @format double */
  logical_size_bytes: number;
  name: string;

  /** @format double */
  object_num: number;
  snapshotPlanTask: { id: string };
  vm_info: {
    vm_snapshot_status: ProtectSnapshotStatus;
    vm_name: string;
    vm_id: string;
    disks: { disk_snapshot_status: ProtectSnapshotStatus; disk_id: string }[];
  }[];
  vm_snapshots?: { name: string; id: string }[] | null;
}

export type SnapshotGroupOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "deleted_ASC"
  | "deleted_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "estimated_recycling_time_ASC"
  | "estimated_recycling_time_DESC"
  | "id_ASC"
  | "id_DESC"
  | "internal_ASC"
  | "internal_DESC"
  | "keep_ASC"
  | "keep_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "logical_size_bytes_ASC"
  | "logical_size_bytes_DESC"
  | "name_ASC"
  | "name_DESC"
  | "object_num_ASC"
  | "object_num_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "vm_info_ASC"
  | "vm_info_DESC";

export interface GetSnapshotGroupsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: SnapshotGroupOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: SnapshotGroupWhereInput | null;
}

export interface SnapshotGroupConnection {
  aggregate: { count: number };
}

export interface GetSnapshotGroupsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: SnapshotGroupOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: SnapshotGroupWhereInput | null;
}

export interface SnapshotPlan {
  /** @format double */
  auto_delete_num: number;

  /** @format double */
  auto_execute_num: number;
  cluster: { name: string; id: string };
  description: string;
  end_time?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  exec_h_m?: object | null;
  execute_intervals: number[];
  execute_plan_type: SnapshotPlanExecuteType;
  execution_tasks?: { id: string }[] | null;
  healthy: boolean;
  id: string;
  last_execute_end_time?: string | null;
  last_execute_status: SnapshotPlanExecuteStatus;
  last_execute_time?: string | null;
  local_id: string;

  /** @format double */
  logical_size_bytes: number;

  /** @format double */
  manual_delete_num: number;

  /** @format double */
  manual_execute_num: number;
  mirror: boolean;
  name: string;
  next_execute_time?: string | null;

  /** @format double */
  object_num: number;

  /** @format double */
  physical_size_bytes: number;

  /** @format double */
  remain_snapshot_num: number;

  /** @format double */
  snapshot_group_num: number;
  start_time: string;
  status: SnapshotPlanStatus;
  vms?: { name: string; id: string }[] | null;
}

export type SnapshotPlanOrderByInput =
  | "auto_delete_num_ASC"
  | "auto_delete_num_DESC"
  | "auto_execute_num_ASC"
  | "auto_execute_num_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "end_time_ASC"
  | "end_time_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "exec_h_m_ASC"
  | "exec_h_m_DESC"
  | "execute_plan_type_ASC"
  | "execute_plan_type_DESC"
  | "healthy_ASC"
  | "healthy_DESC"
  | "id_ASC"
  | "id_DESC"
  | "last_execute_end_time_ASC"
  | "last_execute_end_time_DESC"
  | "last_execute_status_ASC"
  | "last_execute_status_DESC"
  | "last_execute_time_ASC"
  | "last_execute_time_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "logical_size_bytes_ASC"
  | "logical_size_bytes_DESC"
  | "manual_delete_num_ASC"
  | "manual_delete_num_DESC"
  | "manual_execute_num_ASC"
  | "manual_execute_num_DESC"
  | "mirror_ASC"
  | "mirror_DESC"
  | "name_ASC"
  | "name_DESC"
  | "next_execute_time_ASC"
  | "next_execute_time_DESC"
  | "object_num_ASC"
  | "object_num_DESC"
  | "physical_size_bytes_ASC"
  | "physical_size_bytes_DESC"
  | "remain_snapshot_num_ASC"
  | "remain_snapshot_num_DESC"
  | "snapshot_group_num_ASC"
  | "snapshot_group_num_DESC"
  | "start_time_ASC"
  | "start_time_DESC"
  | "status_ASC"
  | "status_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetSnapshotPlansRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: SnapshotPlanOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: SnapshotPlanWhereInput | null;
}

export interface SnapshotPlanConnection {
  aggregate: { count: number };
}

export interface GetSnapshotPlansConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: SnapshotPlanOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: SnapshotPlanWhereInput | null;
}

export interface SnapshotPlanTask {
  cluster: { name: string; id: string };
  end_time?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  internal?: boolean | null;
  local_id: string;
  snapshotGroup?: { name: string; id: string };
  snapshotPlan: { name: string; id: string };
  start_time: string;
  status: SnapshotPlanExecuteStatus;
  type: SnapshotPlanTaskType;
}

export type SnapshotPlanTaskOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "end_time_ASC"
  | "end_time_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "internal_ASC"
  | "internal_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "start_time_ASC"
  | "start_time_DESC"
  | "status_ASC"
  | "status_DESC"
  | "type_ASC"
  | "type_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetSnapshotPlanTasksRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: SnapshotPlanTaskOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: SnapshotPlanTaskWhereInput | null;
}

export interface SnapshotPlanTaskConnection {
  aggregate: { count: number };
}

export interface GetSnapshotPlanTasksConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: SnapshotPlanTaskOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: SnapshotPlanTaskWhereInput | null;
}

export type SnmpAuthProtocol = "MD5" | "SHA";

export type SnmpPrivacyProtocol = "AES" | "DES";

export type SnmpProtocol = "TCP" | "UDP";

export type SnmpVersion = "V2C" | "V3";

export interface SnmpTransport {
  auth_pass_phrase?: string | null;
  auth_protocol?: SnmpAuthProtocol | null;
  cluster: { name: string; id: string };
  community?: string | null;
  disabled: boolean;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  local_id: string;
  name: string;

  /** @format double */
  port: number;
  privacy_pass_phrase?: string | null;
  privacy_protocol?: SnmpPrivacyProtocol | null;
  protocol: SnmpProtocol;
  username?: string | null;
  version: SnmpVersion;
}

export type SnmpTransportOrderByInput =
  | "auth_pass_phrase_ASC"
  | "auth_pass_phrase_DESC"
  | "auth_protocol_ASC"
  | "auth_protocol_DESC"
  | "community_ASC"
  | "community_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "disabled_ASC"
  | "disabled_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "port_ASC"
  | "port_DESC"
  | "privacy_pass_phrase_ASC"
  | "privacy_pass_phrase_DESC"
  | "privacy_protocol_ASC"
  | "privacy_protocol_DESC"
  | "protocol_ASC"
  | "protocol_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "username_ASC"
  | "username_DESC"
  | "version_ASC"
  | "version_DESC";

export interface SnmpTransportWhereInput {
  AND?: SnmpTransportWhereInput[] | null;
  auth_pass_phrase?: string | null;
  auth_pass_phrase_contains?: string | null;
  auth_pass_phrase_ends_with?: string | null;
  auth_pass_phrase_gt?: string | null;
  auth_pass_phrase_gte?: string | null;
  auth_pass_phrase_in?: string[] | null;
  auth_pass_phrase_lt?: string | null;
  auth_pass_phrase_lte?: string | null;
  auth_pass_phrase_not?: string | null;
  auth_pass_phrase_not_contains?: string | null;
  auth_pass_phrase_not_ends_with?: string | null;
  auth_pass_phrase_not_in?: string[] | null;
  auth_pass_phrase_not_starts_with?: string | null;
  auth_pass_phrase_starts_with?: string | null;
  auth_protocol?: SnmpAuthProtocol | null;
  auth_protocol_in?: SnmpAuthProtocol[] | null;
  auth_protocol_not?: SnmpAuthProtocol | null;
  auth_protocol_not_in?: SnmpAuthProtocol[] | null;
  cluster?: ClusterWhereInput | null;
  community?: string | null;
  community_contains?: string | null;
  community_ends_with?: string | null;
  community_gt?: string | null;
  community_gte?: string | null;
  community_in?: string[] | null;
  community_lt?: string | null;
  community_lte?: string | null;
  community_not?: string | null;
  community_not_contains?: string | null;
  community_not_ends_with?: string | null;
  community_not_in?: string[] | null;
  community_not_starts_with?: string | null;
  community_starts_with?: string | null;
  disabled?: boolean | null;
  disabled_not?: boolean | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: SnmpTransportWhereInput[] | null;
  OR?: SnmpTransportWhereInput[] | null;

  /** @format double */
  port?: number | null;

  /** @format double */
  port_gt?: number | null;

  /** @format double */
  port_gte?: number | null;
  port_in?: number[] | null;

  /** @format double */
  port_lt?: number | null;

  /** @format double */
  port_lte?: number | null;

  /** @format double */
  port_not?: number | null;
  port_not_in?: number[] | null;
  privacy_pass_phrase?: string | null;
  privacy_pass_phrase_contains?: string | null;
  privacy_pass_phrase_ends_with?: string | null;
  privacy_pass_phrase_gt?: string | null;
  privacy_pass_phrase_gte?: string | null;
  privacy_pass_phrase_in?: string[] | null;
  privacy_pass_phrase_lt?: string | null;
  privacy_pass_phrase_lte?: string | null;
  privacy_pass_phrase_not?: string | null;
  privacy_pass_phrase_not_contains?: string | null;
  privacy_pass_phrase_not_ends_with?: string | null;
  privacy_pass_phrase_not_in?: string[] | null;
  privacy_pass_phrase_not_starts_with?: string | null;
  privacy_pass_phrase_starts_with?: string | null;
  privacy_protocol?: SnmpPrivacyProtocol | null;
  privacy_protocol_in?: SnmpPrivacyProtocol[] | null;
  privacy_protocol_not?: SnmpPrivacyProtocol | null;
  privacy_protocol_not_in?: SnmpPrivacyProtocol[] | null;
  protocol?: SnmpProtocol | null;
  protocol_in?: SnmpProtocol[] | null;
  protocol_not?: SnmpProtocol | null;
  protocol_not_in?: SnmpProtocol[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
  version?: SnmpVersion | null;
  version_in?: SnmpVersion[] | null;
  version_not?: SnmpVersion | null;
  version_not_in?: SnmpVersion[] | null;
}

export interface GetSnmpTransportsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: SnmpTransportOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: SnmpTransportWhereInput | null;
}

export interface SnmpTransportConnection {
  aggregate: { count: number };
}

export interface GetSnmpTransportsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: SnmpTransportOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: SnmpTransportWhereInput | null;
}

export type SnmpLanguageCode = "EN_US" | "ZH_CN";

export interface SnmpTrapReceiver {
  auth_pass_phrase?: string | null;
  auth_protocol?: SnmpAuthProtocol | null;
  cluster: { name: string; id: string };
  community?: string | null;
  disabled: boolean;
  engine_id?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  host: string;
  id: string;
  inform: boolean;
  language_code: SnmpLanguageCode;
  local_id: string;
  name: string;

  /** @format double */
  port: number;
  privacy_pass_phrase?: string | null;
  privacy_protocol?: SnmpPrivacyProtocol | null;
  protocol: SnmpProtocol;
  username?: string | null;
  version: SnmpVersion;
}

export type SnmpTrapReceiverOrderByInput =
  | "auth_pass_phrase_ASC"
  | "auth_pass_phrase_DESC"
  | "auth_protocol_ASC"
  | "auth_protocol_DESC"
  | "community_ASC"
  | "community_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "disabled_ASC"
  | "disabled_DESC"
  | "engine_id_ASC"
  | "engine_id_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "host_ASC"
  | "host_DESC"
  | "id_ASC"
  | "id_DESC"
  | "inform_ASC"
  | "inform_DESC"
  | "language_code_ASC"
  | "language_code_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "port_ASC"
  | "port_DESC"
  | "privacy_pass_phrase_ASC"
  | "privacy_pass_phrase_DESC"
  | "privacy_protocol_ASC"
  | "privacy_protocol_DESC"
  | "protocol_ASC"
  | "protocol_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "username_ASC"
  | "username_DESC"
  | "version_ASC"
  | "version_DESC";

export interface SnmpTrapReceiverWhereInput {
  AND?: SnmpTrapReceiverWhereInput[] | null;
  auth_pass_phrase?: string | null;
  auth_pass_phrase_contains?: string | null;
  auth_pass_phrase_ends_with?: string | null;
  auth_pass_phrase_gt?: string | null;
  auth_pass_phrase_gte?: string | null;
  auth_pass_phrase_in?: string[] | null;
  auth_pass_phrase_lt?: string | null;
  auth_pass_phrase_lte?: string | null;
  auth_pass_phrase_not?: string | null;
  auth_pass_phrase_not_contains?: string | null;
  auth_pass_phrase_not_ends_with?: string | null;
  auth_pass_phrase_not_in?: string[] | null;
  auth_pass_phrase_not_starts_with?: string | null;
  auth_pass_phrase_starts_with?: string | null;
  auth_protocol?: SnmpAuthProtocol | null;
  auth_protocol_in?: SnmpAuthProtocol[] | null;
  auth_protocol_not?: SnmpAuthProtocol | null;
  auth_protocol_not_in?: SnmpAuthProtocol[] | null;
  cluster?: ClusterWhereInput | null;
  community?: string | null;
  community_contains?: string | null;
  community_ends_with?: string | null;
  community_gt?: string | null;
  community_gte?: string | null;
  community_in?: string[] | null;
  community_lt?: string | null;
  community_lte?: string | null;
  community_not?: string | null;
  community_not_contains?: string | null;
  community_not_ends_with?: string | null;
  community_not_in?: string[] | null;
  community_not_starts_with?: string | null;
  community_starts_with?: string | null;
  disabled?: boolean | null;
  disabled_not?: boolean | null;
  engine_id?: string | null;
  engine_id_contains?: string | null;
  engine_id_ends_with?: string | null;
  engine_id_gt?: string | null;
  engine_id_gte?: string | null;
  engine_id_in?: string[] | null;
  engine_id_lt?: string | null;
  engine_id_lte?: string | null;
  engine_id_not?: string | null;
  engine_id_not_contains?: string | null;
  engine_id_not_ends_with?: string | null;
  engine_id_not_in?: string[] | null;
  engine_id_not_starts_with?: string | null;
  engine_id_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  host?: string | null;
  host_contains?: string | null;
  host_ends_with?: string | null;
  host_gt?: string | null;
  host_gte?: string | null;
  host_in?: string[] | null;
  host_lt?: string | null;
  host_lte?: string | null;
  host_not?: string | null;
  host_not_contains?: string | null;
  host_not_ends_with?: string | null;
  host_not_in?: string[] | null;
  host_not_starts_with?: string | null;
  host_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  inform?: boolean | null;
  inform_not?: boolean | null;
  language_code?: SnmpLanguageCode | null;
  language_code_in?: SnmpLanguageCode[] | null;
  language_code_not?: SnmpLanguageCode | null;
  language_code_not_in?: SnmpLanguageCode[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: SnmpTrapReceiverWhereInput[] | null;
  OR?: SnmpTrapReceiverWhereInput[] | null;

  /** @format double */
  port?: number | null;

  /** @format double */
  port_gt?: number | null;

  /** @format double */
  port_gte?: number | null;
  port_in?: number[] | null;

  /** @format double */
  port_lt?: number | null;

  /** @format double */
  port_lte?: number | null;

  /** @format double */
  port_not?: number | null;
  port_not_in?: number[] | null;
  privacy_pass_phrase?: string | null;
  privacy_pass_phrase_contains?: string | null;
  privacy_pass_phrase_ends_with?: string | null;
  privacy_pass_phrase_gt?: string | null;
  privacy_pass_phrase_gte?: string | null;
  privacy_pass_phrase_in?: string[] | null;
  privacy_pass_phrase_lt?: string | null;
  privacy_pass_phrase_lte?: string | null;
  privacy_pass_phrase_not?: string | null;
  privacy_pass_phrase_not_contains?: string | null;
  privacy_pass_phrase_not_ends_with?: string | null;
  privacy_pass_phrase_not_in?: string[] | null;
  privacy_pass_phrase_not_starts_with?: string | null;
  privacy_pass_phrase_starts_with?: string | null;
  privacy_protocol?: SnmpPrivacyProtocol | null;
  privacy_protocol_in?: SnmpPrivacyProtocol[] | null;
  privacy_protocol_not?: SnmpPrivacyProtocol | null;
  privacy_protocol_not_in?: SnmpPrivacyProtocol[] | null;
  protocol?: SnmpProtocol | null;
  protocol_in?: SnmpProtocol[] | null;
  protocol_not?: SnmpProtocol | null;
  protocol_not_in?: SnmpProtocol[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
  version?: SnmpVersion | null;
  version_in?: SnmpVersion[] | null;
  version_not?: SnmpVersion | null;
  version_not_in?: SnmpVersion[] | null;
}

export interface GetSnmpTrapReceiversRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: SnmpTrapReceiverOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: SnmpTrapReceiverWhereInput | null;
}

export interface SnmpTrapReceiverConnection {
  aggregate: { count: number };
}

export interface GetSnmpTrapReceiversConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: SnmpTrapReceiverOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: SnmpTrapReceiverWhereInput | null;
}

export interface StoragePolicyConector {
  name: string;

  /** @format double */
  replica_num: number;
  thin_provision: boolean;
  uuid: string;
}

export interface GetStoragePoliciesConnectorRequestBody {
  cluster: ClusterWhereUniqueInput;
}

export interface SvtImage {
  cluster: { name: string; id: string };
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  local_created_at: string;
  local_id: string;
  name: string;
  path: string;

  /** @format double */
  size: number;

  /** @format double */
  version: number;
  vm_disks?: { id: string }[] | null;
}

export type SvtImageOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "path_ASC"
  | "path_DESC"
  | "size_ASC"
  | "size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "version_ASC"
  | "version_DESC";

export interface GetSvtImagesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: SvtImageOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: SvtImageWhereInput | null;
}

export interface SvtImageConnection {
  aggregate: { count: number };
}

export interface GetSvtImagesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: SvtImageOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: SvtImageWhereInput | null;
}

export type UserAuditLogStatus = "FAILED" | "SUCCESSED";

export interface SystemAuditLog {
  action: string;
  cluster?: { name: string; id: string };
  finished_at?: string | null;
  id: string;
  local_created_at?: string | null;
  local_id: string;
  message: string;
  resource_id?: string | null;
  status?: UserAuditLogStatus | null;
}

export type SystemAuditLogOrderByInput =
  | "action_ASC"
  | "action_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "finished_at_ASC"
  | "finished_at_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "message_ASC"
  | "message_DESC"
  | "resource_id_ASC"
  | "resource_id_DESC"
  | "status_ASC"
  | "status_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface SystemAuditLogWhereInput {
  action?: string | null;
  action_contains?: string | null;
  action_ends_with?: string | null;
  action_gt?: string | null;
  action_gte?: string | null;
  action_in?: string[] | null;
  action_lt?: string | null;
  action_lte?: string | null;
  action_not?: string | null;
  action_not_contains?: string | null;
  action_not_ends_with?: string | null;
  action_not_in?: string[] | null;
  action_not_starts_with?: string | null;
  action_starts_with?: string | null;
  AND?: SystemAuditLogWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  finished_at?: string | null;
  finished_at_gt?: string | null;
  finished_at_gte?: string | null;
  finished_at_in?: string[] | null;
  finished_at_lt?: string | null;
  finished_at_lte?: string | null;
  finished_at_not?: string | null;
  finished_at_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  message?: string | null;
  message_contains?: string | null;
  message_ends_with?: string | null;
  message_gt?: string | null;
  message_gte?: string | null;
  message_in?: string[] | null;
  message_lt?: string | null;
  message_lte?: string | null;
  message_not?: string | null;
  message_not_contains?: string | null;
  message_not_ends_with?: string | null;
  message_not_in?: string[] | null;
  message_not_starts_with?: string | null;
  message_starts_with?: string | null;
  NOT?: SystemAuditLogWhereInput[] | null;
  OR?: SystemAuditLogWhereInput[] | null;
  resource_id?: string | null;
  resource_id_contains?: string | null;
  resource_id_ends_with?: string | null;
  resource_id_gt?: string | null;
  resource_id_gte?: string | null;
  resource_id_in?: string[] | null;
  resource_id_lt?: string | null;
  resource_id_lte?: string | null;
  resource_id_not?: string | null;
  resource_id_not_contains?: string | null;
  resource_id_not_ends_with?: string | null;
  resource_id_not_in?: string[] | null;
  resource_id_not_starts_with?: string | null;
  resource_id_starts_with?: string | null;
  status?: UserAuditLogStatus | null;
  status_in?: UserAuditLogStatus[] | null;
  status_not?: UserAuditLogStatus | null;
  status_not_in?: UserAuditLogStatus[] | null;
}

export interface GetSystemAuditLogsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: SystemAuditLogOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: SystemAuditLogWhereInput | null;
}

export interface SystemAuditLogConnection {
  aggregate: { count: number };
}

export interface GetSystemAuditLogsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: SystemAuditLogOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: SystemAuditLogWhereInput | null;
}

export type StepUnit = "BIT" | "BYTE" | "COUNT" | "PERCENT";

export interface Task {
  args: object;
  cluster?: { name: string; id: string };
  description: string;
  error_code?: string | null;
  error_message?: string | null;
  finished_at?: string | null;
  id: string;
  internal: boolean;
  local_created_at: string;

  /** @format double */
  progress: number;
  resource_id?: string | null;
  resource_mutation?: string | null;
  resource_rollback_error?: string | null;
  resource_rollbacked?: boolean | null;
  resource_type?: string | null;
  snapshot: string;
  started_at?: string | null;
  status: TaskStatus;
  steps: {
    unit?: StepUnit | null;
    total?: number | null;
    per_second?: number | null;
    key?: string | null;
    finished?: boolean | null;
    current?: number | null;
  }[];
  user?: { name: string; id: string };
}

export type TaskOrderByInput =
  | "args_ASC"
  | "args_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "error_code_ASC"
  | "error_code_DESC"
  | "error_message_ASC"
  | "error_message_DESC"
  | "finished_at_ASC"
  | "finished_at_DESC"
  | "id_ASC"
  | "id_DESC"
  | "internal_ASC"
  | "internal_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "progress_ASC"
  | "progress_DESC"
  | "resource_id_ASC"
  | "resource_id_DESC"
  | "resource_mutation_ASC"
  | "resource_mutation_DESC"
  | "resource_rollback_error_ASC"
  | "resource_rollback_error_DESC"
  | "resource_rollbacked_ASC"
  | "resource_rollbacked_DESC"
  | "resource_type_ASC"
  | "resource_type_DESC"
  | "snapshot_ASC"
  | "snapshot_DESC"
  | "started_at_ASC"
  | "started_at_DESC"
  | "status_ASC"
  | "status_DESC"
  | "steps_ASC"
  | "steps_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface TaskWhereInput {
  AND?: TaskWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  error_code?: string | null;
  error_code_contains?: string | null;
  error_code_ends_with?: string | null;
  error_code_gt?: string | null;
  error_code_gte?: string | null;
  error_code_in?: string[] | null;
  error_code_lt?: string | null;
  error_code_lte?: string | null;
  error_code_not?: string | null;
  error_code_not_contains?: string | null;
  error_code_not_ends_with?: string | null;
  error_code_not_in?: string[] | null;
  error_code_not_starts_with?: string | null;
  error_code_starts_with?: string | null;
  error_message?: string | null;
  error_message_contains?: string | null;
  error_message_ends_with?: string | null;
  error_message_gt?: string | null;
  error_message_gte?: string | null;
  error_message_in?: string[] | null;
  error_message_lt?: string | null;
  error_message_lte?: string | null;
  error_message_not?: string | null;
  error_message_not_contains?: string | null;
  error_message_not_ends_with?: string | null;
  error_message_not_in?: string[] | null;
  error_message_not_starts_with?: string | null;
  error_message_starts_with?: string | null;
  finished_at?: string | null;
  finished_at_gt?: string | null;
  finished_at_gte?: string | null;
  finished_at_in?: string[] | null;
  finished_at_lt?: string | null;
  finished_at_lte?: string | null;
  finished_at_not?: string | null;
  finished_at_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  NOT?: TaskWhereInput[] | null;
  OR?: TaskWhereInput[] | null;

  /** @format double */
  progress?: number | null;

  /** @format double */
  progress_gt?: number | null;

  /** @format double */
  progress_gte?: number | null;
  progress_in?: number[] | null;

  /** @format double */
  progress_lt?: number | null;

  /** @format double */
  progress_lte?: number | null;

  /** @format double */
  progress_not?: number | null;
  progress_not_in?: number[] | null;
  resource_id?: string | null;
  resource_id_contains?: string | null;
  resource_id_ends_with?: string | null;
  resource_id_gt?: string | null;
  resource_id_gte?: string | null;
  resource_id_in?: string[] | null;
  resource_id_lt?: string | null;
  resource_id_lte?: string | null;
  resource_id_not?: string | null;
  resource_id_not_contains?: string | null;
  resource_id_not_ends_with?: string | null;
  resource_id_not_in?: string[] | null;
  resource_id_not_starts_with?: string | null;
  resource_id_starts_with?: string | null;
  resource_mutation?: string | null;
  resource_mutation_contains?: string | null;
  resource_mutation_ends_with?: string | null;
  resource_mutation_gt?: string | null;
  resource_mutation_gte?: string | null;
  resource_mutation_in?: string[] | null;
  resource_mutation_lt?: string | null;
  resource_mutation_lte?: string | null;
  resource_mutation_not?: string | null;
  resource_mutation_not_contains?: string | null;
  resource_mutation_not_ends_with?: string | null;
  resource_mutation_not_in?: string[] | null;
  resource_mutation_not_starts_with?: string | null;
  resource_mutation_starts_with?: string | null;
  resource_rollback_error?: string | null;
  resource_rollback_error_contains?: string | null;
  resource_rollback_error_ends_with?: string | null;
  resource_rollback_error_gt?: string | null;
  resource_rollback_error_gte?: string | null;
  resource_rollback_error_in?: string[] | null;
  resource_rollback_error_lt?: string | null;
  resource_rollback_error_lte?: string | null;
  resource_rollback_error_not?: string | null;
  resource_rollback_error_not_contains?: string | null;
  resource_rollback_error_not_ends_with?: string | null;
  resource_rollback_error_not_in?: string[] | null;
  resource_rollback_error_not_starts_with?: string | null;
  resource_rollback_error_starts_with?: string | null;
  resource_rollbacked?: boolean | null;
  resource_rollbacked_not?: boolean | null;
  resource_type?: string | null;
  resource_type_contains?: string | null;
  resource_type_ends_with?: string | null;
  resource_type_gt?: string | null;
  resource_type_gte?: string | null;
  resource_type_in?: string[] | null;
  resource_type_lt?: string | null;
  resource_type_lte?: string | null;
  resource_type_not?: string | null;
  resource_type_not_contains?: string | null;
  resource_type_not_ends_with?: string | null;
  resource_type_not_in?: string[] | null;
  resource_type_not_starts_with?: string | null;
  resource_type_starts_with?: string | null;
  snapshot?: string | null;
  snapshot_contains?: string | null;
  snapshot_ends_with?: string | null;
  snapshot_gt?: string | null;
  snapshot_gte?: string | null;
  snapshot_in?: string[] | null;
  snapshot_lt?: string | null;
  snapshot_lte?: string | null;
  snapshot_not?: string | null;
  snapshot_not_contains?: string | null;
  snapshot_not_ends_with?: string | null;
  snapshot_not_in?: string[] | null;
  snapshot_not_starts_with?: string | null;
  snapshot_starts_with?: string | null;
  started_at?: string | null;
  started_at_gt?: string | null;
  started_at_gte?: string | null;
  started_at_in?: string[] | null;
  started_at_lt?: string | null;
  started_at_lte?: string | null;
  started_at_not?: string | null;
  started_at_not_in?: string[] | null;
  status?: TaskStatus | null;
  status_in?: TaskStatus[] | null;
  status_not?: TaskStatus | null;
  status_not_in?: TaskStatus[] | null;
  user?: UserWhereInput | null;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | null;
  email_address?: string | null;
  email_address_contains?: string | null;
  email_address_ends_with?: string | null;
  email_address_gt?: string | null;
  email_address_gte?: string | null;
  email_address_in?: string[] | null;
  email_address_lt?: string | null;
  email_address_lte?: string | null;
  email_address_not?: string | null;
  email_address_not_contains?: string | null;
  email_address_not_ends_with?: string | null;
  email_address_not_in?: string[] | null;
  email_address_not_starts_with?: string | null;
  email_address_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  ldap_dn?: string | null;
  ldap_dn_contains?: string | null;
  ldap_dn_ends_with?: string | null;
  ldap_dn_gt?: string | null;
  ldap_dn_gte?: string | null;
  ldap_dn_in?: string[] | null;
  ldap_dn_lt?: string | null;
  ldap_dn_lte?: string | null;
  ldap_dn_not?: string | null;
  ldap_dn_not_contains?: string | null;
  ldap_dn_not_ends_with?: string | null;
  ldap_dn_not_in?: string[] | null;
  ldap_dn_not_starts_with?: string | null;
  ldap_dn_starts_with?: string | null;
  mobile_phone?: string | null;
  mobile_phone_contains?: string | null;
  mobile_phone_ends_with?: string | null;
  mobile_phone_gt?: string | null;
  mobile_phone_gte?: string | null;
  mobile_phone_in?: string[] | null;
  mobile_phone_lt?: string | null;
  mobile_phone_lte?: string | null;
  mobile_phone_not?: string | null;
  mobile_phone_not_contains?: string | null;
  mobile_phone_not_ends_with?: string | null;
  mobile_phone_not_in?: string[] | null;
  mobile_phone_not_starts_with?: string | null;
  mobile_phone_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: UserWhereInput[] | null;
  OR?: UserWhereInput[] | null;
  password?: string | null;
  password_contains?: string | null;
  password_ends_with?: string | null;
  password_gt?: string | null;
  password_gte?: string | null;
  password_in?: string[] | null;
  password_lt?: string | null;
  password_lte?: string | null;
  password_not?: string | null;
  password_not_contains?: string | null;
  password_not_ends_with?: string | null;
  password_not_in?: string[] | null;
  password_not_starts_with?: string | null;
  password_starts_with?: string | null;
  role?: UserRole | null;
  role_in?: UserRole[] | null;
  role_not?: UserRole | null;
  role_not_in?: UserRole[] | null;
  roles_every?: UserRoleNextWhereInput | null;
  roles_none?: UserRoleNextWhereInput | null;
  roles_some?: UserRoleNextWhereInput | null;
  source?: UserSource | null;
  source_in?: UserSource[] | null;
  source_not?: UserSource | null;
  source_not_in?: UserSource[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
}

export type UserRole = "ADMIN" | "READ_ONLY" | "ROOT";

export interface UserRoleNextWhereInput {
  AND?: UserRoleNextWhereInput[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  NOT?: UserRoleNextWhereInput[] | null;
  OR?: UserRoleNextWhereInput[] | null;
  platform?: UserRolePlatform | null;
  platform_in?: UserRolePlatform[] | null;
  platform_not?: UserRolePlatform | null;
  platform_not_in?: UserRolePlatform[] | null;
  preset?: UserRolePreset | null;
  preset_in?: UserRolePreset[] | null;
  preset_not?: UserRolePreset | null;
  preset_not_in?: UserRolePreset[] | null;
  users_every?: UserWhereInput | null;
  users_none?: UserWhereInput | null;
  users_some?: UserWhereInput | null;
}

export type UserRolePlatform = "MANAGEMENT" | "SELF_SERVICE";

export type UserRolePreset = "ADMIN" | "AUDITOR" | "READ_ONLY" | "ROOT" | "USER_ADMIN";

export type UserSource = "LDAP" | "LOCAL";

export interface GetTasksRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: TaskOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: TaskWhereInput | null;
}

export interface TaskConnection {
  aggregate: { count: number };
}

export interface GetTasksConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: TaskOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: TaskWhereInput | null;
}

export type UploadResourceType = "CLUSTER_IMAGE" | "CLUSTER_IMAGE_META" | "ELF_IMAGE" | "MONITOR_IMAGE" | "SVT_IMAGE";

export type UploadTaskStatus = "FAILED" | "INITIALIZING" | "PAUSED" | "SUCCESSED" | "UPLOADING";

export interface UploadTask {
  args: object;

  /** @format double */
  chunk_size: number;

  /** @format double */
  current_chunk: number;
  finished_at?: string | null;
  id: string;
  resource_type: UploadResourceType;

  /** @format double */
  size: number;
  started_at?: string | null;
  status: UploadTaskStatus;
  updatedAt: string;
}

export type UploadTaskOrderByInput =
  | "args_ASC"
  | "args_DESC"
  | "chunk_size_ASC"
  | "chunk_size_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "current_chunk_ASC"
  | "current_chunk_DESC"
  | "finished_at_ASC"
  | "finished_at_DESC"
  | "id_ASC"
  | "id_DESC"
  | "resource_type_ASC"
  | "resource_type_DESC"
  | "size_ASC"
  | "size_DESC"
  | "started_at_ASC"
  | "started_at_DESC"
  | "status_ASC"
  | "status_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface UploadTaskWhereInput {
  AND?: UploadTaskWhereInput[] | null;

  /** @format double */
  chunk_size?: number | null;

  /** @format double */
  chunk_size_gt?: number | null;

  /** @format double */
  chunk_size_gte?: number | null;
  chunk_size_in?: number[] | null;

  /** @format double */
  chunk_size_lt?: number | null;

  /** @format double */
  chunk_size_lte?: number | null;

  /** @format double */
  chunk_size_not?: number | null;
  chunk_size_not_in?: number[] | null;

  /** @format double */
  current_chunk?: number | null;

  /** @format double */
  current_chunk_gt?: number | null;

  /** @format double */
  current_chunk_gte?: number | null;
  current_chunk_in?: number[] | null;

  /** @format double */
  current_chunk_lt?: number | null;

  /** @format double */
  current_chunk_lte?: number | null;

  /** @format double */
  current_chunk_not?: number | null;
  current_chunk_not_in?: number[] | null;
  finished_at?: string | null;
  finished_at_gt?: string | null;
  finished_at_gte?: string | null;
  finished_at_in?: string[] | null;
  finished_at_lt?: string | null;
  finished_at_lte?: string | null;
  finished_at_not?: string | null;
  finished_at_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  NOT?: UploadTaskWhereInput[] | null;
  OR?: UploadTaskWhereInput[] | null;
  resource_type?: UploadResourceType | null;
  resource_type_in?: UploadResourceType[] | null;
  resource_type_not?: UploadResourceType | null;
  resource_type_not_in?: UploadResourceType[] | null;

  /** @format double */
  size?: number | null;

  /** @format double */
  size_gt?: number | null;

  /** @format double */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format double */
  size_lt?: number | null;

  /** @format double */
  size_lte?: number | null;

  /** @format double */
  size_not?: number | null;
  size_not_in?: number[] | null;
  started_at?: string | null;
  started_at_gt?: string | null;
  started_at_gte?: string | null;
  started_at_in?: string[] | null;
  started_at_lt?: string | null;
  started_at_lte?: string | null;
  started_at_not?: string | null;
  started_at_not_in?: string[] | null;
  status?: UploadTaskStatus | null;
  status_in?: UploadTaskStatus[] | null;
  status_not?: UploadTaskStatus | null;
  status_not_in?: UploadTaskStatus[] | null;
  updatedAt?: string | null;
  updatedAt_gt?: string | null;
  updatedAt_gte?: string | null;
  updatedAt_in?: string[] | null;
  updatedAt_lt?: string | null;
  updatedAt_lte?: string | null;
  updatedAt_not?: string | null;
  updatedAt_not_in?: string[] | null;
}

export interface GetUploadTasksRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: UploadTaskOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: UploadTaskWhereInput | null;
}

export interface UploadTaskConnection {
  aggregate: { count: number };
}

export interface GetUploadTasksConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: UploadTaskOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: UploadTaskWhereInput | null;
}

export interface UsbDevice {
  binded: boolean;
  description: string;
  host: { name: string; id: string };
  id: string;
  local_created_at: string;
  local_id: string;
  manufacturer: string;
  name: string;

  /** @format double */
  size: number;
  status: UsbDeviceStatus;
  usb_type: string;
  vm?: { name: string; id: string };
}

export type UsbDeviceOrderByInput =
  | "binded_ASC"
  | "binded_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "manufacturer_ASC"
  | "manufacturer_DESC"
  | "name_ASC"
  | "name_DESC"
  | "size_ASC"
  | "size_DESC"
  | "status_ASC"
  | "status_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "usb_type_ASC"
  | "usb_type_DESC";

export interface GetUsbDevicesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: UsbDeviceOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: UsbDeviceWhereInput | null;
}

export interface UsbDeviceConnection {
  aggregate: { count: number };
}

export interface GetUsbDevicesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: UsbDeviceOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: UsbDeviceWhereInput | null;
}

export interface UserAuditLog {
  action: string;
  cluster?: { name: string; id: string };
  createdAt: string;
  finished_at?: string | null;
  id: string;
  ip_address: string;
  message: string;
  resource_id?: string | null;
  resource_type?: string | null;
  status?: UserAuditLogStatus | null;
  user?: { name: string; id: string };
}

export type UserAuditLogOrderByInput =
  | "action_ASC"
  | "action_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "finished_at_ASC"
  | "finished_at_DESC"
  | "id_ASC"
  | "id_DESC"
  | "ip_address_ASC"
  | "ip_address_DESC"
  | "message_ASC"
  | "message_DESC"
  | "resource_id_ASC"
  | "resource_id_DESC"
  | "resource_type_ASC"
  | "resource_type_DESC"
  | "status_ASC"
  | "status_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface UserAuditLogWhereInput {
  action?: string | null;
  action_contains?: string | null;
  action_ends_with?: string | null;
  action_gt?: string | null;
  action_gte?: string | null;
  action_in?: string[] | null;
  action_lt?: string | null;
  action_lte?: string | null;
  action_not?: string | null;
  action_not_contains?: string | null;
  action_not_ends_with?: string | null;
  action_not_in?: string[] | null;
  action_not_starts_with?: string | null;
  action_starts_with?: string | null;
  AND?: UserAuditLogWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  createdAt?: string | null;
  createdAt_gt?: string | null;
  createdAt_gte?: string | null;
  createdAt_in?: string[] | null;
  createdAt_lt?: string | null;
  createdAt_lte?: string | null;
  createdAt_not?: string | null;
  createdAt_not_in?: string[] | null;
  finished_at?: string | null;
  finished_at_gt?: string | null;
  finished_at_gte?: string | null;
  finished_at_in?: string[] | null;
  finished_at_lt?: string | null;
  finished_at_lte?: string | null;
  finished_at_not?: string | null;
  finished_at_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  ip_address?: string | null;
  ip_address_contains?: string | null;
  ip_address_ends_with?: string | null;
  ip_address_gt?: string | null;
  ip_address_gte?: string | null;
  ip_address_in?: string[] | null;
  ip_address_lt?: string | null;
  ip_address_lte?: string | null;
  ip_address_not?: string | null;
  ip_address_not_contains?: string | null;
  ip_address_not_ends_with?: string | null;
  ip_address_not_in?: string[] | null;
  ip_address_not_starts_with?: string | null;
  ip_address_starts_with?: string | null;
  message?: string | null;
  message_contains?: string | null;
  message_ends_with?: string | null;
  message_gt?: string | null;
  message_gte?: string | null;
  message_in?: string[] | null;
  message_lt?: string | null;
  message_lte?: string | null;
  message_not?: string | null;
  message_not_contains?: string | null;
  message_not_ends_with?: string | null;
  message_not_in?: string[] | null;
  message_not_starts_with?: string | null;
  message_starts_with?: string | null;
  NOT?: UserAuditLogWhereInput[] | null;
  OR?: UserAuditLogWhereInput[] | null;
  resource_id?: string | null;
  resource_id_contains?: string | null;
  resource_id_ends_with?: string | null;
  resource_id_gt?: string | null;
  resource_id_gte?: string | null;
  resource_id_in?: string[] | null;
  resource_id_lt?: string | null;
  resource_id_lte?: string | null;
  resource_id_not?: string | null;
  resource_id_not_contains?: string | null;
  resource_id_not_ends_with?: string | null;
  resource_id_not_in?: string[] | null;
  resource_id_not_starts_with?: string | null;
  resource_id_starts_with?: string | null;
  resource_type?: string | null;
  resource_type_contains?: string | null;
  resource_type_ends_with?: string | null;
  resource_type_gt?: string | null;
  resource_type_gte?: string | null;
  resource_type_in?: string[] | null;
  resource_type_lt?: string | null;
  resource_type_lte?: string | null;
  resource_type_not?: string | null;
  resource_type_not_contains?: string | null;
  resource_type_not_ends_with?: string | null;
  resource_type_not_in?: string[] | null;
  resource_type_not_starts_with?: string | null;
  resource_type_starts_with?: string | null;
  status?: UserAuditLogStatus | null;
  status_in?: UserAuditLogStatus[] | null;
  status_not?: UserAuditLogStatus | null;
  status_not_in?: UserAuditLogStatus[] | null;
  user?: UserWhereInput | null;
}

export interface GetUserAuditLogsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: UserAuditLogOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: UserAuditLogWhereInput | null;
}

export interface UserAuditLogConnection {
  aggregate: { count: number };
}

export interface GetUserAuditLogsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: UserAuditLogOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: UserAuditLogWhereInput | null;
}

export interface UserRoleNext {
  actions: string[];
  id: string;
  name: string;
  platform: UserRolePlatform;
  preset?: UserRolePreset | null;
  users?: { name: string; id: string }[] | null;
}

export type UserRoleNextOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "platform_ASC"
  | "platform_DESC"
  | "preset_ASC"
  | "preset_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetUserRoleNextsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: UserRoleNextOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: UserRoleNextWhereInput | null;
}

export interface UserRoleNextConnection {
  aggregate: { count: number };
}

export interface GetUserRoleNextsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: UserRoleNextOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: UserRoleNextWhereInput | null;
}

export interface User {
  email_address?: string | null;
  id: string;
  ldap_dn?: string | null;
  mobile_phone?: string | null;
  name: string;
  role?: UserRole | null;
  roles?: { name: string; id: string }[] | null;
  source: UserSource;
  username: string;
}

export type UserOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "email_address_ASC"
  | "email_address_DESC"
  | "id_ASC"
  | "id_DESC"
  | "ldap_dn_ASC"
  | "ldap_dn_DESC"
  | "mobile_phone_ASC"
  | "mobile_phone_DESC"
  | "name_ASC"
  | "name_DESC"
  | "password_ASC"
  | "password_DESC"
  | "role_ASC"
  | "role_DESC"
  | "source_ASC"
  | "source_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "username_ASC"
  | "username_DESC";

export interface GetUsersRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: UserOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: UserWhereInput | null;
}

export interface UserConnection {
  aggregate: { count: number };
}

export interface GetUsersConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: UserOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: UserWhereInput | null;
}

export interface VcenterAccount {
  cluster?: { name: string; id: string };
  id: string;
  ip: string;
  is_valid: boolean;
  local_id: string;
  password: string;

  /** @format double */
  port: number;
  username: string;
}

export type VcenterAccountOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "ip_ASC"
  | "ip_DESC"
  | "is_valid_ASC"
  | "is_valid_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "password_ASC"
  | "password_DESC"
  | "port_ASC"
  | "port_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "username_ASC"
  | "username_DESC";

export interface GetVcenterAccountsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VcenterAccountOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VcenterAccountWhereInput | null;
}

export interface VcenterAccountConnection {
  aggregate: { count: number };
}

export interface GetVcenterAccountsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VcenterAccountOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VcenterAccountWhereInput | null;
}

export interface Vds {
  bond_mode: string;
  cluster: { name: string; id: string };
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  internal: boolean;
  labels?: { id: string }[] | null;
  local_id: string;
  name: string;
  nics?: { name: string; id: string }[] | null;
  ovsbr_name: string;
  type: NetworkType;
  vlans?: { name: string; id: string }[] | null;

  /** @format double */
  vlans_num: number;
}

export type VdsOrderByInput =
  | "bond_mode_ASC"
  | "bond_mode_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "internal_ASC"
  | "internal_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "ovsbr_name_ASC"
  | "ovsbr_name_DESC"
  | "type_ASC"
  | "type_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "vlans_num_ASC"
  | "vlans_num_DESC";

export interface GetVdsesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VdsOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VdsWhereInput | null;
}

export interface VdsConnection {
  aggregate: { count: number };
}

export interface GetVdsesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VdsOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VdsWhereInput | null;
}

export interface View {
  cluster: { name: string; id: string };
  entityAsyncStatus?: EntityAsyncStatus | null;
  graphs?: { id: string }[] | null;
  id: string;
  local_id: string;
  name: string;

  /** @format double */
  time_span: number;
  time_unit: TimeUnit;
}

export type ViewOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "time_span_ASC"
  | "time_span_DESC"
  | "time_unit_ASC"
  | "time_unit_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetViewsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ViewOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ViewWhereInput | null;
}

export interface ViewConnection {
  aggregate: { count: number };
}

export interface GetViewsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ViewOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ViewWhereInput | null;
}

export interface Vlan {
  entityAsyncStatus?: EntityAsyncStatus | null;
  gateway_ip?: string | null;
  gateway_subnetmask?: string | null;
  id: string;
  labels?: { id: string }[] | null;
  local_id: string;
  name: string;
  subnetmask?: string | null;
  type: NetworkType;
  vds: { name: string; id: string };

  /** @format double */
  vlan_id: number;
  vm_nics?: { id: string }[] | null;
}

export type VlanOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "gateway_ip_ASC"
  | "gateway_ip_DESC"
  | "gateway_subnetmask_ASC"
  | "gateway_subnetmask_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "subnetmask_ASC"
  | "subnetmask_DESC"
  | "type_ASC"
  | "type_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "vlan_id_ASC"
  | "vlan_id_DESC";

export interface GetVlansRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VlanOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VlanWhereInput | null;
}

export interface VlanConnection {
  aggregate: { count: number };
}

export interface GetVlansConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VlanOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VlanWhereInput | null;
}

export interface VmDisk {
  /** @format double */
  boot: number;
  bus: Bus;
  cloud_init_image_name?: string | null;
  cloud_init_image_path?: string | null;
  device?: string | null;
  disabled?: boolean | null;
  elf_image?: { name: string; id: string };
  id: string;

  /** @format double */
  key?: number | null;

  /** @format double */
  max_bandwidth?: number | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;

  /** @format double */
  max_iops?: number | null;
  max_iops_policy?: VmDiskIoRestrictType | null;
  serial?: string | null;
  svt_image?: { name: string; id: string };
  type: VmDiskType;
  unsafe_image_path?: string | null;
  unsafe_image_uuid?: string | null;
  unsafe_provision?: string | null;
  vm: { name: string; id: string };
  vm_volume?: { name: string; id: string };
}

export type VmDiskOrderByInput =
  | "boot_ASC"
  | "boot_DESC"
  | "bus_ASC"
  | "bus_DESC"
  | "cloud_init_image_name_ASC"
  | "cloud_init_image_name_DESC"
  | "cloud_init_image_path_ASC"
  | "cloud_init_image_path_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "device_ASC"
  | "device_DESC"
  | "disabled_ASC"
  | "disabled_DESC"
  | "id_ASC"
  | "id_DESC"
  | "key_ASC"
  | "key_DESC"
  | "max_bandwidth_ASC"
  | "max_bandwidth_DESC"
  | "max_bandwidth_policy_ASC"
  | "max_bandwidth_policy_DESC"
  | "max_iops_ASC"
  | "max_iops_DESC"
  | "max_iops_policy_ASC"
  | "max_iops_policy_DESC"
  | "serial_ASC"
  | "serial_DESC"
  | "type_ASC"
  | "type_DESC"
  | "unsafe_image_path_ASC"
  | "unsafe_image_path_DESC"
  | "unsafe_image_uuid_ASC"
  | "unsafe_image_uuid_DESC"
  | "unsafe_provision_ASC"
  | "unsafe_provision_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetVmDisksRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmDiskOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmDiskWhereInput | null;
}

export interface VmDiskConnection {
  aggregate: { count: number };
}

export interface GetVmDisksConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmDiskOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmDiskWhereInput | null;
}

export interface VmEntityFilterResult {
  entityFilter: { name: string; id: string };
  id: string;
  result: number[];
  vm: { name: string; id: string };
}

export type VmEntityFilterResultOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetVmEntityFilterResultsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmEntityFilterResultOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmEntityFilterResultWhereInput | null;
}

export interface VmEntityFilterResultConnection {
  aggregate: { count: number };
}

export interface GetVmEntityFilterResultsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmEntityFilterResultOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmEntityFilterResultWhereInput | null;
}

export interface VmFolder {
  cluster: { name: string; id: string };
  id: string;
  local_id?: string | null;
  name: string;

  /** @format double */
  vm_num?: number | null;
  vms?: { name: string; id: string }[] | null;
}

export type VmFolderOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "vm_num_ASC"
  | "vm_num_DESC";

export interface GetVmFoldersRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmFolderOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmFolderWhereInput | null;
}

export interface VmFolderConnection {
  aggregate: { count: number };
}

export interface GetVmFoldersConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmFolderOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmFolderWhereInput | null;
}

export interface VmNic {
  enabled?: boolean | null;
  gateway?: string | null;
  id: string;
  interface_id?: string | null;
  ip_address?: string | null;
  local_id: string;
  mac_address?: string | null;
  mirror?: boolean | null;
  model?: VmNicModel | null;
  nic?: { name: string; id: string };

  /** @format double */
  order?: number | null;
  subnet_mask?: string | null;
  vlan?: { name: string; id: string };
  vm: { name: string; id: string };
}

export type VmNicOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "enabled_ASC"
  | "enabled_DESC"
  | "gateway_ASC"
  | "gateway_DESC"
  | "id_ASC"
  | "id_DESC"
  | "interface_id_ASC"
  | "interface_id_DESC"
  | "ip_address_ASC"
  | "ip_address_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "mac_address_ASC"
  | "mac_address_DESC"
  | "mirror_ASC"
  | "mirror_DESC"
  | "model_ASC"
  | "model_DESC"
  | "order_ASC"
  | "order_DESC"
  | "subnet_mask_ASC"
  | "subnet_mask_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetVmNicsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmNicOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmNicWhereInput | null;
}

export interface VmNicConnection {
  aggregate: { count: number };
}

export interface GetVmNicsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmNicOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmNicWhereInput | null;
}

export interface VmPlacementGroup {
  cluster: { name: string; id: string };
  description: string;
  enabled: boolean;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  local_created_at: string;
  local_id: string;
  local_updated_at: string;
  name: string;
  vm_host_must_enabled: boolean;
  vm_host_must_host_uuids?: { name: string; id: string }[] | null;
  vm_host_must_policy: boolean;
  vm_host_prefer_enabled: boolean;
  vm_host_prefer_host_uuids?: { name: string; id: string }[] | null;
  vm_host_prefer_policy: boolean;
  vm_vm_policy: VmVmPolicy;
  vm_vm_policy_enabled: boolean;
  vms?: { name: string; id: string }[] | null;
}

export type VmPlacementGroupOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "enabled_ASC"
  | "enabled_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "local_updated_at_ASC"
  | "local_updated_at_DESC"
  | "name_ASC"
  | "name_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "vm_host_must_enabled_ASC"
  | "vm_host_must_enabled_DESC"
  | "vm_host_must_policy_ASC"
  | "vm_host_must_policy_DESC"
  | "vm_host_prefer_enabled_ASC"
  | "vm_host_prefer_enabled_DESC"
  | "vm_host_prefer_policy_ASC"
  | "vm_host_prefer_policy_DESC"
  | "vm_vm_policy_ASC"
  | "vm_vm_policy_DESC"
  | "vm_vm_policy_enabled_ASC"
  | "vm_vm_policy_enabled_DESC";

export interface GetVmPlacementGroupsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmPlacementGroupOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmPlacementGroupWhereInput | null;
}

export interface VmPlacementGroupConnection {
  aggregate: { count: number };
}

export interface GetVmPlacementGroupsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmPlacementGroupOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmPlacementGroupWhereInput | null;
}

export interface Vm {
  clock_offset: VmClockOffset;
  cluster?: { name: string; id: string };
  cpu: { sockets: number; cores: number };
  cpu_model: string;

  /** @format double */
  cpu_usage?: number | null;
  deleted_at?: string | null;
  description: string;
  dns_servers?: string | null;
  entity_filter_results?: { id: string }[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  firmware: VmFirmware;
  folder?: { name: string; id: string };
  guest_cpu_model?: string | null;
  guest_os_type?: VmGuestsOperationSystem | null;

  /** @format double */
  guest_size_usage?: number | null;

  /** @format double */
  guest_used_size?: number | null;
  ha: boolean;
  host?: { name: string; id: string };
  hostname?: string | null;
  id: string;
  in_recycle_bin: boolean;
  internal: boolean;
  io_policy?: VmDiskIoPolicy | null;
  ips: string;
  kernel_info?: string | null;
  labels?: { id: string }[] | null;
  last_shutdown_time?: string | null;
  local_created_at?: string | null;
  local_id: string;

  /** @format double */
  logical_size_bytes?: number | null;

  /** @format double */
  max_bandwidth?: number | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;

  /** @format double */
  max_iops?: number | null;
  max_iops_policy?: VmDiskIoRestrictType | null;

  /** @format double */
  memory: number;

  /** @format double */
  memory_usage?: number | null;
  name: string;
  nested_virtualization: boolean;
  node_ip: string;
  original_name?: string | null;
  os?: string | null;
  out_uninstall_usb: string[];
  protected: boolean;

  /** @format double */
  provisioned_size?: number | null;

  /** @format double */
  size?: number | null;
  snapshot_plan?: { name: string; id: string };
  snapshots?: { name: string; id: string }[] | null;
  status: VmStatus;

  /** @format double */
  unique_size?: number | null;
  usb_devices?: { name: string; id: string }[] | null;

  /** @format double */
  vcpu: number;
  video_type?: VmVideoType | null;
  vm_disks?: { id: string }[] | null;
  vm_nics?: { id: string }[] | null;
  vm_placement_group?: { name: string; id: string }[] | null;
  vm_tools_status: VmToolsStatus;
  vm_tools_version?: string | null;
  win_opt: boolean;
}

export type VmOrderByInput =
  | "clock_offset_ASC"
  | "clock_offset_DESC"
  | "cpu_ASC"
  | "cpu_DESC"
  | "cpu_model_ASC"
  | "cpu_model_DESC"
  | "cpu_usage_ASC"
  | "cpu_usage_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "deleted_at_ASC"
  | "deleted_at_DESC"
  | "description_ASC"
  | "description_DESC"
  | "dns_servers_ASC"
  | "dns_servers_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "firmware_ASC"
  | "firmware_DESC"
  | "guest_cpu_model_ASC"
  | "guest_cpu_model_DESC"
  | "guest_os_type_ASC"
  | "guest_os_type_DESC"
  | "guest_size_usage_ASC"
  | "guest_size_usage_DESC"
  | "guest_used_size_ASC"
  | "guest_used_size_DESC"
  | "ha_ASC"
  | "ha_DESC"
  | "hostname_ASC"
  | "hostname_DESC"
  | "id_ASC"
  | "id_DESC"
  | "in_recycle_bin_ASC"
  | "in_recycle_bin_DESC"
  | "internal_ASC"
  | "internal_DESC"
  | "io_policy_ASC"
  | "io_policy_DESC"
  | "ips_ASC"
  | "ips_DESC"
  | "kernel_info_ASC"
  | "kernel_info_DESC"
  | "last_shutdown_time_ASC"
  | "last_shutdown_time_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "logical_size_bytes_ASC"
  | "logical_size_bytes_DESC"
  | "max_bandwidth_ASC"
  | "max_bandwidth_DESC"
  | "max_bandwidth_policy_ASC"
  | "max_bandwidth_policy_DESC"
  | "max_iops_ASC"
  | "max_iops_DESC"
  | "max_iops_policy_ASC"
  | "max_iops_policy_DESC"
  | "memory_ASC"
  | "memory_DESC"
  | "memory_usage_ASC"
  | "memory_usage_DESC"
  | "name_ASC"
  | "name_DESC"
  | "nested_virtualization_ASC"
  | "nested_virtualization_DESC"
  | "node_ip_ASC"
  | "node_ip_DESC"
  | "original_name_ASC"
  | "original_name_DESC"
  | "os_ASC"
  | "os_DESC"
  | "protected_ASC"
  | "protected_DESC"
  | "provisioned_size_ASC"
  | "provisioned_size_DESC"
  | "size_ASC"
  | "size_DESC"
  | "status_ASC"
  | "status_DESC"
  | "unique_size_ASC"
  | "unique_size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "vcpu_ASC"
  | "vcpu_DESC"
  | "video_type_ASC"
  | "video_type_DESC"
  | "vm_tools_status_ASC"
  | "vm_tools_status_DESC"
  | "vm_tools_version_ASC"
  | "vm_tools_version_DESC"
  | "win_opt_ASC"
  | "win_opt_DESC";

export interface GetVmsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmWhereInput | null;
}

export interface VmConnection {
  aggregate: { count: number };
}

export interface GetVmsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmWhereInput | null;
}

export interface VmSnapshot {
  clock_offset: VmClockOffset;
  cluster: { name: string; id: string };
  consistent_type: ConsistentType;
  cpu: { sockets: number; cores: number };
  cpu_model: string;
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  firmware: VmFirmware;
  ha: boolean;
  id: string;
  io_policy?: VmDiskIoPolicy | null;
  labels?: { id: string }[] | null;
  local_created_at?: string | null;
  local_id: string;

  /** @format double */
  max_bandwidth?: number | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;

  /** @format double */
  max_iops?: number | null;
  max_iops_policy?: VmDiskIoRestrictType | null;

  /** @format double */
  memory: number;
  name: string;

  /** @format double */
  size: number;
  snapshot_group?: { name: string; id: string };

  /** @format double */
  vcpu: number;
  vm?: { name: string; id: string };
  vm_disks?: {
    vm_volume_local_id: string;
    type: VmDiskType;
    svt_image_local_id: string;
    storage_policy_uuid: string;
    snapshot_local_id?: string | null;
    size: number;
    path: string;
    max_iops_policy?: VmDiskIoRestrictType | null;
    max_iops?: number | null;
    max_bandwidth_policy?: VmDiskIoRestrictType | null;
    max_bandwidth?: number | null;
    key?: number | null;
    index: number;
    image_name?: string | null;
    elf_image_local_id: string;
    disk_name?: string | null;
    disabled?: boolean | null;
    bus: Bus;
    boot: number;
  }[];
  vm_nics?: {
    vlan: { vlan_local_id: string; vlan_id: number; vds_ovs: string; name: string };
    subnet_mask: string;
    model?: VmNicModel | null;
    mirror?: boolean | null;
    mac_address: string;
    ip_address: string;
    index: number;
    gateway: string;
    enabled?: boolean | null;
  }[];
  win_opt: boolean;
}

export type VmSnapshotOrderByInput =
  | "clock_offset_ASC"
  | "clock_offset_DESC"
  | "consistent_type_ASC"
  | "consistent_type_DESC"
  | "cpu_ASC"
  | "cpu_DESC"
  | "cpu_model_ASC"
  | "cpu_model_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "firmware_ASC"
  | "firmware_DESC"
  | "ha_ASC"
  | "ha_DESC"
  | "id_ASC"
  | "id_DESC"
  | "io_policy_ASC"
  | "io_policy_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "max_bandwidth_ASC"
  | "max_bandwidth_DESC"
  | "max_bandwidth_policy_ASC"
  | "max_bandwidth_policy_DESC"
  | "max_iops_ASC"
  | "max_iops_DESC"
  | "max_iops_policy_ASC"
  | "max_iops_policy_DESC"
  | "memory_ASC"
  | "memory_DESC"
  | "name_ASC"
  | "name_DESC"
  | "size_ASC"
  | "size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "vcpu_ASC"
  | "vcpu_DESC"
  | "vm_disks_ASC"
  | "vm_disks_DESC"
  | "vm_nics_ASC"
  | "vm_nics_DESC"
  | "win_opt_ASC"
  | "win_opt_DESC";

export interface GetVmSnapshotsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmSnapshotOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmSnapshotWhereInput | null;
}

export interface VmSnapshotConnection {
  aggregate: { count: number };
}

export interface GetVmSnapshotsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmSnapshotOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmSnapshotWhereInput | null;
}

export interface VmTemplate {
  clock_offset: VmClockOffset;
  cloud_init_supported: boolean;
  cluster: { name: string; id: string };
  cpu: { sockets: number; cores: number };
  cpu_model: string;
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  firmware: VmFirmware;
  ha: boolean;
  id: string;
  io_policy?: VmDiskIoPolicy | null;
  labels?: { id: string }[] | null;
  local_created_at?: string | null;
  local_id: string;

  /** @format double */
  max_bandwidth?: number | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;

  /** @format double */
  max_iops?: number | null;
  max_iops_policy?: VmDiskIoRestrictType | null;

  /** @format double */
  memory: number;
  name: string;

  /** @format double */
  size: number;

  /** @format double */
  vcpu: number;
  video_type?: string | null;
  vm_disks?: {
    vm_volume_local_id: string;
    type: VmDiskType;
    svt_image_local_id: string;
    storage_policy_uuid: string;
    snapshot_local_id?: string | null;
    size: number;
    path: string;
    max_iops_policy?: VmDiskIoRestrictType | null;
    max_iops?: number | null;
    max_bandwidth_policy?: VmDiskIoRestrictType | null;
    max_bandwidth?: number | null;
    key?: number | null;
    index: number;
    image_name?: string | null;
    elf_image_local_id: string;
    disk_name?: string | null;
    disabled?: boolean | null;
    bus: Bus;
    boot: number;
  }[];
  vm_nics?: {
    vlan: { vlan_local_id: string; vlan_id: number; vds_ovs: string; name: string };
    model?: VmNicModel | null;
    mirror?: boolean | null;
    mac_address?: string | null;
    ip_address?: string | null;
    index: number;
    enabled?: boolean | null;
  }[];
  win_opt: boolean;
}

export type VmTemplateOrderByInput =
  | "clock_offset_ASC"
  | "clock_offset_DESC"
  | "cloud_init_supported_ASC"
  | "cloud_init_supported_DESC"
  | "cpu_ASC"
  | "cpu_DESC"
  | "cpu_model_ASC"
  | "cpu_model_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "entityAsyncStatus_ASC"
  | "entityAsyncStatus_DESC"
  | "firmware_ASC"
  | "firmware_DESC"
  | "ha_ASC"
  | "ha_DESC"
  | "id_ASC"
  | "id_DESC"
  | "io_policy_ASC"
  | "io_policy_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "max_bandwidth_ASC"
  | "max_bandwidth_DESC"
  | "max_bandwidth_policy_ASC"
  | "max_bandwidth_policy_DESC"
  | "max_iops_ASC"
  | "max_iops_DESC"
  | "max_iops_policy_ASC"
  | "max_iops_policy_DESC"
  | "memory_ASC"
  | "memory_DESC"
  | "name_ASC"
  | "name_DESC"
  | "size_ASC"
  | "size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "vcpu_ASC"
  | "vcpu_DESC"
  | "video_type_ASC"
  | "video_type_DESC"
  | "vm_disks_ASC"
  | "vm_disks_DESC"
  | "vm_nics_ASC"
  | "vm_nics_DESC"
  | "win_opt_ASC"
  | "win_opt_DESC";

export interface GetVmTemplatesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmTemplateOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmTemplateWhereInput | null;
}

export interface VmTemplateConnection {
  aggregate: { count: number };
}

export interface GetVmTemplatesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmTemplateOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmTemplateWhereInput | null;
}

export interface VmVolume {
  cluster: { name: string; id: string };
  description?: string | null;
  elf_storage_policy: VmVolumeElfStoragePolicyType;

  /** @format double */
  guest_size_usage?: number | null;

  /** @format double */
  guest_used_size?: number | null;
  id: string;
  labels?: { id: string }[] | null;
  local_created_at: string;
  local_id: string;
  lun?: { name: string; id: string };
  mounting: boolean;
  name: string;
  path: string;
  sharing: boolean;

  /** @format double */
  size: number;

  /** @format double */
  unique_size?: number | null;
  vm_disks?: { id: string }[] | null;
}

export type VmVolumeOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "elf_storage_policy_ASC"
  | "elf_storage_policy_DESC"
  | "guest_size_usage_ASC"
  | "guest_size_usage_DESC"
  | "guest_used_size_ASC"
  | "guest_used_size_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_created_at_ASC"
  | "local_created_at_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "mounting_ASC"
  | "mounting_DESC"
  | "name_ASC"
  | "name_DESC"
  | "path_ASC"
  | "path_DESC"
  | "sharing_ASC"
  | "sharing_DESC"
  | "size_ASC"
  | "size_DESC"
  | "unique_size_ASC"
  | "unique_size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetVmVolumesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmVolumeOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmVolumeWhereInput | null;
}

export interface VmVolumeConnection {
  aggregate: { count: number };
}

export interface GetVmVolumesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VmVolumeOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VmVolumeWhereInput | null;
}

export interface VsphereEsxiAccount {
  host: { name: string; id: string };
  id: string;
  ip: string;
  is_valid: boolean;
  local_id: string;
  password: string;

  /** @format double */
  port: number;
  username: string;
}

export type VsphereEsxiAccountOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "ip_ASC"
  | "ip_DESC"
  | "is_valid_ASC"
  | "is_valid_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "password_ASC"
  | "password_DESC"
  | "port_ASC"
  | "port_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "username_ASC"
  | "username_DESC";

export interface GetVsphereEsxiAccountsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VsphereEsxiAccountOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VsphereEsxiAccountWhereInput | null;
}

export interface VsphereEsxiAccountConnection {
  aggregate: { count: number };
}

export interface GetVsphereEsxiAccountsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: VsphereEsxiAccountOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: VsphereEsxiAccountWhereInput | null;
}

export interface Witness {
  cluster: { name: string; id: string };

  /** @format double */
  cpu_hz_per_core: number;
  data_ip: string;
  id: string;
  local_id?: string | null;
  name: string;

  /** @format double */
  system_data_capacity: number;

  /** @format double */
  system_used_data_space: number;

  /** @format double */
  total_cpu_cores: number;

  /** @format double */
  total_cpu_hz: number;

  /** @format double */
  total_memory_bytes: number;
}

export type WitnessOrderByInput =
  | "cpu_hz_per_core_ASC"
  | "cpu_hz_per_core_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "data_ip_ASC"
  | "data_ip_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "system_data_capacity_ASC"
  | "system_data_capacity_DESC"
  | "system_used_data_space_ASC"
  | "system_used_data_space_DESC"
  | "total_cpu_cores_ASC"
  | "total_cpu_cores_DESC"
  | "total_cpu_hz_ASC"
  | "total_cpu_hz_DESC"
  | "total_memory_bytes_ASC"
  | "total_memory_bytes_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetWitnessesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: WitnessOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: WitnessWhereInput | null;
}

export interface WitnessConnection {
  aggregate: { count: number };
}

export interface GetWitnessesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: WitnessOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: WitnessWhereInput | null;
}

export interface Zone {
  cluster: { name: string; id: string };
  datacenter: { name: string; id: string };

  /** @format double */
  failure_data_space?: number | null;

  /** @format double */
  host_num?: number | null;
  hosts?: { name: string; id: string }[] | null;
  id: string;
  is_preferred: boolean;
  local_id?: string | null;

  /** @format double */
  provisioned_cpu_cores?: number | null;

  /** @format double */
  provisioned_cpu_cores_for_active_vm?: number | null;

  /** @format double */
  provisioned_data_space?: number | null;

  /** @format double */
  provisioned_memory_bytes?: number | null;

  /** @format double */
  running_vm_num?: number | null;

  /** @format double */
  stopped_vm_num?: number | null;

  /** @format double */
  suspended_vm_num?: number | null;

  /** @format double */
  total_cache_capacity?: number | null;

  /** @format double */
  total_cpu_cores?: number | null;

  /** @format double */
  total_cpu_hz?: number | null;

  /** @format double */
  total_data_capacity?: number | null;

  /** @format double */
  total_memory_bytes?: number | null;

  /** @format double */
  used_data_space?: number | null;

  /** @format double */
  valid_data_space?: number | null;

  /** @format double */
  vm_num?: number | null;
}

export type ZoneOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "failure_data_space_ASC"
  | "failure_data_space_DESC"
  | "host_num_ASC"
  | "host_num_DESC"
  | "id_ASC"
  | "id_DESC"
  | "is_preferred_ASC"
  | "is_preferred_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "provisioned_cpu_cores_ASC"
  | "provisioned_cpu_cores_DESC"
  | "provisioned_cpu_cores_for_active_vm_ASC"
  | "provisioned_cpu_cores_for_active_vm_DESC"
  | "provisioned_data_space_ASC"
  | "provisioned_data_space_DESC"
  | "provisioned_memory_bytes_ASC"
  | "provisioned_memory_bytes_DESC"
  | "running_vm_num_ASC"
  | "running_vm_num_DESC"
  | "stopped_vm_num_ASC"
  | "stopped_vm_num_DESC"
  | "suspended_vm_num_ASC"
  | "suspended_vm_num_DESC"
  | "total_cache_capacity_ASC"
  | "total_cache_capacity_DESC"
  | "total_cpu_cores_ASC"
  | "total_cpu_cores_DESC"
  | "total_cpu_hz_ASC"
  | "total_cpu_hz_DESC"
  | "total_data_capacity_ASC"
  | "total_data_capacity_DESC"
  | "total_memory_bytes_ASC"
  | "total_memory_bytes_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "used_data_space_ASC"
  | "used_data_space_DESC"
  | "valid_data_space_ASC"
  | "valid_data_space_DESC"
  | "vm_num_ASC"
  | "vm_num_DESC";

export interface GetZonesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ZoneOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ZoneWhereInput | null;
}

export interface ZoneConnection {
  aggregate: { count: number };
}

export interface GetZonesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ZoneOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ZoneWhereInput | null;
}

export interface ZoneTopo {
  cluster: { name: string; id: string };
  cluster_topo: { name: string; id: string };
  id: string;
  local_id: string;
  rack_topoes?: { name: string; id: string }[] | null;
}

export type ZoneTopoOrderByInput =
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "local_id_ASC"
  | "local_id_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface GetZoneTopoesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ZoneTopoOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ZoneTopoWhereInput | null;
}

export interface ZoneTopoConnection {
  aggregate: { count: number };
}

export interface GetZoneTopoesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format double */
  first?: number | null;

  /** @format double */
  last?: number | null;
  orderBy?: ZoneTopoOrderByInput | null;

  /** @format double */
  skip?: number | null;
  where?: ZoneTopoWhereInput | null;
}

export interface WithTaskGlobalAlertRule {
  task_id?: string | null;
  data: GlobalAlertRule;
}

export interface AlertRuleThresholds {
  /** @format double */
  value: number;
  severity: SeverityEnum;
}

export interface GlobalAlertRuleUpdationParams {
  data: { thresholds?: AlertRuleThresholds[]; disabled?: boolean };
  where: GlobalAlertRuleWhereInput;
}

export interface CustomizeAlertRuleUpdationParams {
  data: { thresholds?: AlertRuleThresholds[]; disabled?: boolean; clusters: ClusterWhereInput };
  where: GlobalAlertRuleWhereInput;
}

export interface WithTaskAlert {
  task_id?: string | null;
  data: Alert;
}

export interface ResolveAlertParams {
  where: AlertWhereInput;
}

export interface WithTaskBrickTopo {
  task_id?: string | null;
  data: BrickTopo;
}

export interface BrickTopoCreationParams {
  tag_position_in_brick?: { tag: string; row: number; column: number }[] | null;
  node_topoes?: NodeTopoWhereInput;
  rack_topo_id?: string;
  capacity?: { row?: number | null; column?: number | null };
  cluster_id: string;

  /** @format double */
  height: number;
  name: string;

  /** @format double */
  position: number;
}

export interface BrickTopoUpdationParams {
  data: {
    tag_position_in_brick?: { tag: string; row: number; column: number }[] | null;
    node_topoes?: NodeTopoWhereInput;
    capacity?: { row?: number | null; column?: number | null };
    height?: number;
    name?: string;
    position?: number;
  };
  where: BrickTopoWhereInput;
}

export interface BrickTopoMoveParams {
  data: { rack_topo_id?: string; position: number };
  where: BrickTopoWhereInput;
}

export interface DeleteBrickTopo {
  id: string;
}

export interface WithTaskDeleteBrickTopo {
  task_id?: string | null;
  data: DeleteBrickTopo;
}

export interface BrickTopoDeletionParams {
  where: BrickTopoWhereInput;
}

export interface WithTaskCluster {
  task_id?: string | null;
  data: Cluster;
}

export interface ClusterCreationParams {
  datacenter_id?: string;
  secondary_zone_datacenter_id?: string;
  primary_zone_datacenter_id?: string;
  password: string;
  username: string;
  ip: string;
}

export interface ClusterUpdationParams {
  data: {
    secondary_zone_id?: string;
    primary_zone_id?: string;
    datacenter_id?: string;
    secondary_zone_datacenter_id?: string;
    primary_zone_datacenter_id?: string;
    password?: string;
    username?: string;
    ip?: string;
  };
  where: ClusterWhereInput;
}

export interface ClusterLicenseUpdationParams {
  data: { license: string };
  where: ClusterWhereInput;
}

export interface DeleteCluster {
  id: string;
}

export interface WithTaskDeleteCluster {
  task_id?: string | null;
  data: DeleteCluster;
}

export interface ClusterDeletionParams {
  where: ClusterWhereInput;
}

export interface WithTaskConsistencyGroupSnapshot {
  task_id?: string | null;
  data: ConsistencyGroupSnapshot;
}

export interface ConsistencyGroupSnapshotCreationParams {
  consistency_group_id: string;
  name: string;
}

export interface ConsistencyGroupSnapshotUpdationParams {
  where: ConsistencyGroupSnapshotWhereInput;
}

export interface DeleteConsistencyGroupSnapshot {
  id: string;
}

export interface WithTaskDeleteConsistencyGroupSnapshot {
  task_id?: string | null;
  data: DeleteConsistencyGroupSnapshot;
}

export interface ConsistencyGroupSnapshotDeletionParams {
  data: { remain_volume_snapshot: boolean };
  where: ConsistencyGroupSnapshotWhereInput;
}

export interface WithTaskConsistencyGroup {
  task_id?: string | null;
  data: ConsistencyGroup;
}

export interface ConsistencyGroupCreationParams {
  namespaces_ids: string[];
  iscsi_luns_ids: string[];
  description?: string;
  cluster_id: string;
  name: string;
}

export interface ConsistencyGroupUpdationParams {
  data: {
    remain_volume_snapshot?: boolean;
    namespaces_ids?: string[];
    iscsi_luns_ids?: string[];
    description?: string;
    name?: string;
  };
  where: ConsistencyGroupWhereInput;
}

export interface DeleteConsistencyGroup {
  id: string;
}

export interface WithTaskDeleteConsistencyGroup {
  task_id?: string | null;
  data: DeleteConsistencyGroup;
}

export interface ConsistencyGroupDeletionParams {
  data: { remain_volume_snapshot?: boolean };
  where: ConsistencyGroupWhereInput;
}

export interface WithTaskDatacenter {
  task_id?: string | null;
  data: Datacenter;
}

export interface DatacenterCreationParams {
  clusters?: ClusterWhereInput;
  organization_id: string;
  name: string;
}

export interface DatacenterUpdationParams {
  data: { clusters?: ClusterWhereInput; name?: string };
  where: DatacenterWhereInput;
}

export interface DeleteDatacenter {
  id: string;
}

export interface WithTaskDeleteDatacenter {
  task_id?: string | null;
  data: DeleteDatacenter;
}

export interface DatacenterDeletionParams {
  where: DatacenterWhereInput;
}

export interface WithTaskDisk {
  task_id?: string | null;
  data: Disk;
}

export interface DiskMountParams {
  data: { function: DiskFunction };
  where: DiskWhereInput;
}

export interface DiskUnmountParams {
  where: DiskWhereInput;
}

export interface WithTaskEntityFilter {
  task_id?: string | null;
  data: EntityFilter;
}

export interface FilterRuleInput {
  /** @format double */
  threshold: number;

  /** @format double */
  quantile: number;
  op: FilterRuleOpEnum;
  metric: FilterRuleMetricEnum;

  /** @format double */
  duration: number;
  aggregation: FilterRuleAggregationEnum;
}

export interface EntityFilterCreationParams {
  exclude_vms?: VmWhereInput;
  clusters?: ClusterWhereInput;
  apply_to_all_clusters?: boolean;
  rules: FilterRuleInput[];
  name: string;
}

export interface EntityFilterUpdationParams {
  data: {
    exclude_vms?: VmWhereInput;
    clusters?: ClusterWhereInput;
    apply_to_all_clusters?: boolean;
    rules?: FilterRuleInput[];
    name?: string;
  };
  where: EntityFilterWhereInput;
}

export interface DeleteEntityFilter {
  id: string;
}

export interface WithTaskDeleteEntityFilter {
  task_id?: string | null;
  data: DeleteEntityFilter;
}

export interface EntityFilterDeletionParams {
  where: EntityFilterWhereInput;
}

export interface WithTaskGraph {
  task_id?: string | null;
  data: Graph;
}

export interface GraphCreationParams {
  network?: NetworkType;
  service?: string;
  metric_type?: MetricType;

  /** @format double */
  metric_count?: number;
  type: GraphType;
  resource_type: string;
  view_id: string;
  title: string;
  cluster_id: string;
  connect_id: string[];
  metric_name: string;
}

export interface GraphUpdationParams {
  data?: {
    luns?: IscsiLunWhereInput;
    vmNics?: VmNicWhereInput;
    nics?: NicWhereInput;
    disks?: DiskWhereInput;
    vmVolumes?: VmVolumeWhereInput;
    vms?: VmWhereInput;
    hosts?: HostWhereInput;
    network?: NetworkType;
    cluster?: ClusterWhereInput;
    service?: string;
    metric_type?: MetricType;
    metric_count?: number;
    type?: GraphType;
    resource_type?: string;
    title?: string;
    metric_name?: string;
    connect_id?: string[];
  };
  where: GraphWhereInput;
}

export interface DeleteGraph {
  id: string;
}

export interface WithTaskDeleteGraph {
  task_id?: string | null;
  data: DeleteGraph;
}

export interface GraphDeletionParams {
  where: GraphWhereInput;
}

export interface BatchHosts {
  task: Task;
  __typename?: "BatchHosts";
}

export interface WithTaskBatchHosts {
  task_id?: string | null;
  data: BatchHosts;
}

export interface HostBatchCreateIpmiInput {
  username: string;
  password: string;
  ip: string;
}

export type MaybeDiskFunction = DiskFunction | null;

export type MaybeDiskType = DiskType | null;

export interface HostBatchCreateDiskInput {
  type?: MaybeDiskType;
  function?: MaybeDiskFunction;
  drive: string;
}

export type HostBatchCreateIfaceFunction = "ACCESS" | "MANAGEMENT" | "STORAGE" | "VMWARE_ACCESS";

export interface HostBatchCreateIfaceInput {
  netmask: string;
  name: string[];
  ip: string;
  function: HostBatchCreateIfaceFunction;
}

export interface HostCreationParams {
  data: {
    ifaces: HostBatchCreateIfaceInput[];
    disks: HostBatchCreateDiskInput[];
    platform_password?: string;
    platform_username?: string;
    platform_ip?: string;
    ipmi?: HostBatchCreateIpmiInput;
    hostname: string;
    host_uuid: string;
    host_ip: string;
  }[];
  cluster_id: string;
}

export interface WithTaskHost {
  task_id?: string | null;
  data: Host;
}

export interface TriggerDiskBlinkParams {
  led_status?: "on" | "off";
  disk_name: string;
  host_id: string;
}

export interface HostUpdationParams {
  data: { ipmi?: HostBatchCreateIpmiInput; scvm_name?: string; name?: string };
  where: HostWhereInput;
}

export interface WithTaskIscsiLunSnapshot {
  task_id?: string | null;
  data: IscsiLunSnapshot;
}

export interface IscsiLunSnapshotCreationParams {
  iscsi_target_id: string;
  name: string;
  iscsi_lun_id: string;
}

export interface DeleteIscsiLunSnapshot {
  id: string;
}

export interface WithTaskDeleteIscsiLunSnapshot {
  task_id?: string | null;
  data: DeleteIscsiLunSnapshot;
}

export interface IscsiLunSnapshotDeletionParams {
  where: IscsiLunSnapshotWhereInput;
}

export interface WithTaskIscsiLun {
  task_id?: string | null;
  data: IscsiLun;
}

export interface IscsiLunCommonParams {
  /** @format double */
  bps_wr_max_length?: number;

  /** @format double */
  bps_wr_max?: number;

  /** @format double */
  bps_rd_max_length?: number;

  /** @format double */
  bps_rd_max?: number;

  /** @format double */
  bps_max_length?: number;

  /** @format double */
  bps_max?: number;

  /** @format double */
  iops_wr_max_length?: number;

  /** @format double */
  iops_wr_max?: number;

  /** @format double */
  iops_rd_max_length?: number;

  /** @format double */
  iops_rd_max?: number;

  /** @format double */
  iops_max_length?: number;

  /** @format double */
  iops_max?: number;

  /** @format double */
  bps_wr?: number;

  /** @format double */
  bps_rd?: number;

  /** @format double */
  bps?: number;

  /** @format double */
  iops_wr?: number;

  /** @format double */
  iops_rd?: number;

  /** @format double */
  iops?: number;
  allowed_initiators?: string;
}

export type IscsiLunCreationParams = {
  lun_id?: number;
  assigned_size: number;
  replica_num: number;
  iscsi_target_id: string;
  name: string;
} & IscsiLunCommonParams;

export interface IscsiLunUpdationParams {
  data: { assigned_size?: number; name?: string } & IscsiLunCommonParams;
  where: IscsiLunWhereInput;
}

export interface DeleteIscsiLun {
  id: string;
}

export interface WithTaskDeleteIscsiLun {
  task_id?: string | null;
  data: DeleteIscsiLun;
}

export interface IscsiLunDeletionParams {
  data: { remove_snapshot: boolean };
  where: IscsiLunWhereInput;
}

export interface IscsiLunCloneParams {
  iscsi_target_id: string;
  name: string;
  snapshot_id: string;
}

export interface IscsiLunRollbackParams {
  lun_id: string;
  snapshot_id: string;
}

export interface WithTaskIscsiTarget {
  task_id?: string | null;
  data: IscsiTarget;
}

export interface IscsiTargetCommonParams {
  /** @format double */
  bps_wr_max_length?: number;

  /** @format double */
  bps_wr_max?: number;

  /** @format double */
  bps_rd_max_length?: number;

  /** @format double */
  bps_rd_max?: number;

  /** @format double */
  bps_max_length?: number;

  /** @format double */
  bps_max?: number;

  /** @format double */
  iops_wr_max_length?: number;

  /** @format double */
  iops_wr_max?: number;

  /** @format double */
  iops_rd_max_length?: number;

  /** @format double */
  iops_rd_max?: number;

  /** @format double */
  iops_max_length?: number;

  /** @format double */
  iops_max?: number;

  /** @format double */
  bps_wr?: number;

  /** @format double */
  bps_rd?: number;

  /** @format double */
  bps?: number;

  /** @format double */
  iops_wr?: number;

  /** @format double */
  iops_rd?: number;

  /** @format double */
  iops?: number;
  initiator_chaps?: { chap_secret: string; chap_name: string; initiator_iqn: string }[];
  chap_secret?: string;
  chap_name?: string;
  chap_enabled?: boolean;
  description?: string;
  iqn_whitelist?: string;
  ip_whitelist?: string;
}

export type IscsiTargetCreationParams = {
  stripe_size: number;
  stripe_num: number;
  replica_num: number;
  thin_provision: boolean;
  cluster_id: string;
  name: string;
} & IscsiTargetCommonParams;

export interface IscsiTargetUpdationParams {
  data: IscsiTargetCommonParams;
  where: IscsiTargetWhereInput;
}

export interface DeleteIscsiTarget {
  id: string;
}

export interface WithTaskDeleteIscsiTarget {
  task_id?: string | null;
  data: DeleteIscsiTarget;
}

export interface IscsiTargetDeletionParams {
  where: IscsiTargetWhereInput;
}

export interface WithTaskElfImage {
  task_id?: string | null;
  data: ElfImage;
}

export interface ElfImageUpdationParams {
  data: { description?: string; name?: string };
  where: ElfImageWhereInput;
}

export interface DeleteElfImage {
  id: string;
}

export interface WithTaskDeleteElfImage {
  task_id?: string | null;
  data: DeleteElfImage;
}

export interface ElfImageDeletionParams {
  where: ElfImageWhereInput;
}

export interface WithTaskLabel {
  task_id?: string | null;
  data: Label;
}

export interface LabelCreationParams {
  value?: string;
  key: string;
}

export interface LabelUpdationParams {
  data: { value?: string; key?: string };
  where: LabelWhereInput;
}

export interface AddLabelsToResourcesParams {
  data: {
    vms?: VmWhereInput;
    vm_volumes?: VmVolumeWhereInput;
    vm_templates?: VmTemplateWhereInput;
    vm_snapshots?: VmSnapshotWhereInput;
    vlans?: VlanWhereInput;
    vdses?: VdsWhereInput;
    nvmf_subsystems?: NvmfSubsystemWhereInput;
    nvmf_namespace_snapshots?: NvmfNamespaceSnapshotWhereInput;
    nvmf_namespaces?: NvmfNamespaceWhereInput;
    nics?: NicWhereInput;
    nfs_inodes?: NfsInodeWhereInput;
    nfs_exports?: NfsExportWhereInput;
    namespace_groups?: NamespaceGroupWhereInput;
    iscsi_targets?: IscsiTargetWhereInput;
    iscsi_lun_snapshots?: IscsiLunSnapshotWhereInput;
    iscsi_luns?: IscsiLunWhereInput;
    hosts?: HostWhereInput;
    elf_images?: ElfImageWhereInput;
    disks?: DiskWhereInput;
    datacenters?: DatacenterWhereInput;
    consistency_group_snapshots?: ConsistencyGroupSnapshotWhereInput;
    consistency_groups?: ConsistencyGroupWhereInput;
    clusters?: ClusterWhereInput;
  };
  where: LabelWhereInput;
}

export type RemoveLabelsFromResourcesParams = AddLabelsToResourcesParams;

export interface DeleteLabel {
  id: string;
}

export interface WithTaskDeleteLabel {
  task_id?: string | null;
  data: DeleteLabel;
}

export interface LabelDeletionParams {
  where: LabelWhereInput;
}

export interface WithTaskLicense {
  task_id?: string | null;
  data: License;
}

export interface LicenseUpdationParams {
  data: { license: string };
}

export interface WithTaskNamespaceGroup {
  task_id?: string | null;
  data: NamespaceGroup;
}

export interface NamespaceGroupCreationParams {
  nvmf_subsystem_id: string;
  name: string;
}

export interface NamespaceGroupUpdationParams {
  data: { name?: string };
  where: NamespaceGroupWhereInput;
}

export interface DeleteNamespaceGroup {
  id: string;
}

export interface WithTaskDeleteNamespaceGroup {
  task_id?: string | null;
  data: DeleteNamespaceGroup;
}

export interface NamespaceGroupDeletionParams {
  where: NamespaceGroupWhereInput;
}

export interface WithTaskNfsExport {
  task_id?: string | null;
  data: NfsExport;
}

export interface NfsExportCreationParams {
  cluster_id: string;
  ip_whitelist?: string;
  thin_provision: boolean;

  /** @format double */
  replica_num: number;
  name: string;
}

export interface NfsExportUpdationParams {
  data?: { ip_whitelist?: string; name?: string };
  where: NfsExportWhereInput;
}

export interface DeleteNfsExport {
  id: string;
}

export interface WithTaskDeleteNfsExport {
  task_id?: string | null;
  data: DeleteNfsExport;
}

export interface NfsExportDeletionParams {
  where: NfsExportWhereInput;
}

export interface WithTaskNic {
  task_id?: string | null;
  data: Nic;
}

export interface NicUpdationParams {
  data: { total_vf_num?: number; mtu?: number };
  where: NicWhereInput;
}

export interface WithTaskNodeTopo {
  task_id?: string | null;
  data: NodeTopo;
}

export interface NodeTopoWhereUniqueInput {
  id?: string | null;
  local_id?: string | null;
}

/**
 * @format double
 */
export type MaybeScalarsAtInt = number | null;

export interface Position {
  row?: MaybeScalarsAtInt;
  column?: MaybeScalarsAtInt;
  __typename?: "position";
}

export type NodeTopoUpdationParams = {
  data:
    | { position: Position; brick_topo_id: string }
    | { cluster_topo_id: string }
    | ({ position: Position; brick_topo_id: string } & { cluster_topo_id: string });
  where: NodeTopoWhereUniqueInput;
}[];

export interface WithTaskNvmfNamespaceSnapshot {
  task_id?: string | null;
  data: NvmfNamespaceSnapshot;
}

export interface NvmfNamespaceSnapshotCreationParams {
  nvmf_subsystem_id: string;
  name: string;
  nvmf_namespace_id: string;
}

export interface DeleteNvmfNamespaceSnapshot {
  id: string;
}

export interface WithTaskDeleteNvmfNamespaceSnapshot {
  task_id?: string | null;
  data: DeleteNvmfNamespaceSnapshot;
}

export interface NvmfNamespaceSnapshotDeletionParams {
  where: NvmfNamespaceSnapshotWhereInput;
}

export interface WithTaskNvmfNamespace {
  task_id?: string | null;
  data: NvmfNamespace;
}

export interface NvmfNamespaceCommonParams {
  /** @format double */
  bps_wr_max_length?: number;

  /** @format double */
  bps_wr_max?: number;

  /** @format double */
  bps_rd_max_length?: number;

  /** @format double */
  bps_rd_max?: number;

  /** @format double */
  bps_max_length?: number;

  /** @format double */
  bps_max?: number;

  /** @format double */
  iops_wr_max_length?: number;

  /** @format double */
  iops_wr_max?: number;

  /** @format double */
  iops_rd_max_length?: number;

  /** @format double */
  iops_rd_max?: number;

  /** @format double */
  iops_max_length?: number;

  /** @format double */
  iops_max?: number;

  /** @format double */
  bps_wr?: number;

  /** @format double */
  bps_rd?: number;

  /** @format double */
  bps?: number;

  /** @format double */
  iops_wr?: number;

  /** @format double */
  iops_rd?: number;

  /** @format double */
  iops?: number;
  nqn_whitelist?: string;
}

export type NvmfNamespaceCreationParams = {
  namespace_id?: number;
  group_id?: string;
  is_shared: boolean;
  assigned_size: number;
  replica_num: number;
  nvmf_subsystem_id: string;
  name: string;
} & NvmfNamespaceCommonParams;

export interface NvmfNamespaceUpdationParams {
  data: { assigned_size?: number; name?: string } & NvmfNamespaceCommonParams;
  where: NvmfNamespaceWhereInput;
}

export interface DeleteNvmfNamespace {
  id: string;
}

export interface WithTaskDeleteNvmfNamespace {
  task_id?: string | null;
  data: DeleteNvmfNamespace;
}

export interface NvmfNamespaceDeletionParams {
  data: { remove_snapshot: boolean };
  where: NvmfNamespaceWhereInput;
}

export interface NvmfNamespaceCloneParams {
  namespace_group_id?: string;
  nvmf_subsystem_id: string;
  name: string;
  snapshot_id: string;
}

export interface NvmfNamespaceRollbackParams {
  namespace_id: string;
  snapshot_id: string;
}

export interface WithTaskNvmfSubsystem {
  task_id?: string | null;
  data: NvmfSubsystem;
}

export interface NvmfSubsystemCommonParams {
  /** @format double */
  bps_wr_max_length?: number;

  /** @format double */
  bps_wr_max?: number;

  /** @format double */
  bps_rd_max_length?: number;

  /** @format double */
  bps_rd_max?: number;

  /** @format double */
  bps_max_length?: number;

  /** @format double */
  bps_max?: number;

  /** @format double */
  iops_wr_max_length?: number;

  /** @format double */
  iops_wr_max?: number;

  /** @format double */
  iops_rd_max_length?: number;

  /** @format double */
  iops_rd_max?: number;

  /** @format double */
  iops_max_length?: number;

  /** @format double */
  iops_max?: number;

  /** @format double */
  bps_wr?: number;

  /** @format double */
  bps_rd?: number;

  /** @format double */
  bps?: number;

  /** @format double */
  iops_wr?: number;

  /** @format double */
  iops_rd?: number;

  /** @format double */
  iops?: number;
  description?: string;
  nqn_whitelist?: string;
  ip_whitelist?: string;
}

export type NvmfSubsystemCreationParams = {
  replica_num: number;
  thin_provision: boolean;
  stripe_size: number;
  stripe_num: number;
  policy: NvmfSubsystemPolicyType;
  cluster_id: string;
  name: string;
} & NvmfSubsystemCommonParams;

export interface NvmfSubsystemUpdationParams {
  data: NvmfSubsystemCommonParams;
  where: NvmfSubsystemWhereInput;
}

export interface DeleteNvmfSubsystem {
  id: string;
}

export interface WithTaskDeleteNvmfSubsystem {
  task_id?: string | null;
  data: DeleteNvmfSubsystem;
}

export interface NvmfSubsystemDeletionParams {
  where: NvmfSubsystemWhereInput;
}

export interface WithTaskOrganization {
  task_id?: string | null;
  data: Organization;
}

export interface OrganizationCreationParams {
  name: string;
}

export interface OrganizationUpdationParams {
  data: { name?: string };
  where: OrganizationWhereInput;
}

export interface DeleteOrganization {
  id: string;
}

export interface WithTaskDeleteOrganization {
  task_id?: string | null;
  data: DeleteOrganization;
}

export interface OrganizationDeletionParams {
  where: OrganizationWhereInput;
}

export interface WithTaskRackTopo {
  task_id?: string | null;
  data: RackTopo;
}

export interface RackTopoCreationParams {
  brick_topoes?: BrickTopoWhereInput;
  cluster_id: string;
  zone_topo_id: string;

  /** @format double */
  height: number;
  name: string;
}

export interface RackTopoUpdationParams {
  data: {
    brick_topoes?: BrickTopoWhereInput;
    cluster_id?: string;
    zone_topo_id?: string;
    height?: number;
    name?: string;
  };
  where: RackTopoWhereInput;
}

export interface DeleteRackTopo {
  id: string;
}

export interface WithTaskDeleteRackTopo {
  task_id?: string | null;
  data: DeleteRackTopo;
}

export interface RackTopoDeletionParams {
  where: RackTopoWhereInput;
}

export interface WithTaskGlobalSettings {
  task_id?: string | null;
  data: GlobalSettings;
}

export interface GlobalRecycleBinUpdationParams {
  /** @format double */
  retain: number;
  enaled: boolean;
}

export interface WithTaskClusterSettings {
  task_id?: string | null;
  data: ClusterSettings;
}

export interface ClusterRecycleBinCreationParams {
  data: { retain: number; enaled: boolean };
  where: ClusterWhereInput;
}

export interface ClusterRecycleBinUpdationParams {
  data: { retain: number; enaled: boolean };
  where: ClusterWhereInput;
}

export interface DeleteClusterRecycleBin {
  id: string;
}

export interface WithTaskDeleteClusterRecycleBin {
  task_id?: string | null;
  data: DeleteClusterRecycleBin;
}

export interface ClusterRecycleBinDeletionParams {
  where: ClusterWhereInput;
}

export interface WithTaskReportTemplate {
  task_id?: string | null;
  data: ReportTemplate;
}

export interface ReportTemplateCreationParams {
  resource_meta: { type: ReportResourceInputEnum; name: string; filter: object; fields: string[] }[];
  execute_plan: { start_at?: string; retain: number; period: string; enabled?: boolean }[];
  description?: string;
  name: string;
}

export interface ReportTemplateUpdationParams {
  data: {
    resource_meta?: { type: ReportResourceInputEnum; name: string; filter: object; fields: string[] }[];
    execute_plan?: { start_at?: string; retain: number; period: string; enabled?: boolean }[];
    description?: string;
    name?: string;
  };
  where: ReportTemplateWhereInput;
}

export interface WithTaskReportTask {
  task_id?: string | null;
  data: ReportTask;
}

export interface ReporteTemplateGenerationParams {
  where: ReportTemplateWhereInput;
}

export interface DeleteReportTemplate {
  id: string;
}

export interface WithTaskDeleteReportTemplate {
  task_id?: string | null;
  data: DeleteReportTemplate;
}

export interface ReportTemplateDeletionParams {
  where: ReportTemplateWhereInput;
}

export interface WithTaskUserRoleNext {
  task_id?: string | null;
  data: UserRoleNext;
}

export interface RoleCreationParams {
  actions: string[];
  name: string;
}

export interface RoleUpdationParams {
  data: { actions?: string[]; name?: string };
  where: UserRoleNextWhereInput;
}

export interface DeleteRole {
  id: string;
}

export interface WithTaskDeleteRole {
  task_id?: string | null;
  data: DeleteRole;
}

export interface RoleDeletionParams {
  where: UserRoleNextWhereInput;
}

export interface WithTaskSnapshotGroup {
  task_id?: string | null;
  data: SnapshotGroup;
}

export interface SnapshotGroupRollbackParams {
  where: SnapshotGroupWhereInput;
}

export interface SnapshotGroupCloneParams {
  clone: { from_source_vm_id: string; to_cloned_vm_name: string }[];
  id: string;
}

export interface SnapshotGroupKeepParams {
  where: SnapshotGroupWhereInput;
}

export interface DeleteSnapshotGroup {
  id: string;
}

export interface WithTaskDeleteSnapshotGroup {
  task_id?: string | null;
  data: DeleteSnapshotGroup;
}

export interface SnapshotGroupDeletionParams {
  where: SnapshotGroupWhereInput;
}

export interface WithTaskSnapshotPlan {
  task_id?: string | null;
  data: SnapshotPlan;
}

export interface SnapshotPlanCreationParams {
  vm_ids: string[];
  execute_intervals: number[];
  execute_plan_type: SnapshotPlanExecuteType;
  exec_h_m?: string;
  end_time?: string;
  start_time: string;

  /** @format double */
  remain_snapshot_num: number;
  cluster_id: string;
  name: string;
}

export interface SnapshotPlanUpdationParams {
  data?: {
    vm_ids?: string[];
    execute_intervals?: number[];
    execute_plan_type?: SnapshotPlanExecuteType;
    exec_h_m?: string;
    end_time?: string;
    remain_snapshot_num?: number;
    name?: string;
  };
  where: SnapshotPlanWhereInput;
}

export interface DeleteSnapshotPlan {
  id: string;
}

export interface WithTaskDeleteSnapshotPlan {
  task_id?: string | null;
  data: DeleteSnapshotPlan;
}

export interface SnapshotPlanDeletionParams {
  where: SnapshotPlanWhereInput;
}

export interface SnapshotPlanExecutionParams {
  data: { task_name: string };
  where: SnapshotPlanWhereInput;
}

export interface SnapshotPlanSuspendedParams {
  where: SnapshotPlanWhereInput;
}

export interface SnapshotPlanResumeParams {
  where: SnapshotPlanWhereInput;
}

export interface WithTaskSnmpTransport {
  task_id?: string | null;
  data: SnmpTransport;
}

export interface SnmpTransportCreationParams {
  disabled?: boolean;
  privacy_protocol?: SnmpPrivacyProtocol;
  privacy_pass_phrase?: string;
  auth_protocol?: SnmpAuthProtocol;
  auth_pass_phrase?: string;
  username?: string;
  community?: string;

  /** @format double */
  port: number;
  protocol: SnmpProtocol;
  version: SnmpVersion;
  name: string;
  cluster_id: string;
}

export interface SnmpTransportUpdationParams {
  data: {
    disabled?: boolean;
    privacy_protocol?: SnmpPrivacyProtocol;
    privacy_pass_phrase?: string;
    auth_protocol?: SnmpAuthProtocol;
    auth_pass_phrase?: string;
    username?: string;
    community?: string;
    port?: number;
    protocol?: SnmpProtocol;
    version?: SnmpVersion;
    name?: string;
  };
  where: SnmpTransportWhereInput;
}

export interface DeleteSnmpTransport {
  id: string;
}

export interface WithTaskDeleteSnmpTransport {
  task_id?: string | null;
  data: DeleteSnmpTransport;
}

export interface SnmpTransportDeletionParams {
  where: SnmpTransportWhereInput;
}

export interface WithTaskSnmpTrapReceiver {
  task_id?: string | null;
  data: SnmpTrapReceiver;
}

export interface SnmpTrapReceiverCreationParams {
  disabled?: boolean;
  inform?: boolean;
  engine_id?: string;
  privacy_protocol?: SnmpPrivacyProtocol;
  privacy_pass_phrase?: string;
  auth_protocol?: SnmpAuthProtocol;
  auth_pass_phrase?: string;
  username?: string;
  community?: string;
  language_code: SnmpLanguageCode;

  /** @format double */
  port: number;
  host: string;
  protocol: SnmpProtocol;
  version: SnmpVersion;
  name: string;
  cluster_id: string;
}

export interface SnmpTrapReceiverUpdationParams {
  data: {
    disabled?: boolean;
    inform?: boolean;
    engine_id?: string;
    privacy_protocol?: SnmpPrivacyProtocol;
    privacy_pass_phrase?: string;
    auth_protocol?: SnmpAuthProtocol;
    auth_pass_phrase?: string;
    username?: string;
    community?: string;
    language_code?: SnmpLanguageCode;
    port?: number;
    host?: string;
    protocol?: SnmpProtocol;
    version?: SnmpVersion;
    name?: string;
  };
  where: SnmpTrapReceiverWhereInput;
}

export interface DeleteSnmpTrapReceiver {
  id: string;
}

export interface WithTaskDeleteSnmpTrapReceiver {
  task_id?: string | null;
  data: DeleteSnmpTrapReceiver;
}

export interface SnmpTrapReceiverDeletionParams {
  where: SnmpTrapReceiverWhereInput;
}

export interface WithTaskUsbDevice {
  task_id?: string | null;
  data: UsbDevice;
}

export interface UsbDeviceMountParams {
  data: { vm_id: string };
  where: UsbDeviceWhereInput;
}

export interface UsbDeviceUnmountParams {
  where: UsbDeviceWhereInput;
}

export interface WithTaskTokenString {
  task_id?: string | null;
  data: { token: string };
}

export interface LoginInput {
  username: string;
  source: UserSource;
  password: string;
}

export interface WithTaskUser {
  task_id?: string | null;
  data: User;
}

export interface UserCreationParams {
  mobile_phone?: string;
  email_address?: string;
  role_id: string;
  name: string;
  password: string;
  username: string;
}

export interface UserUpdationParams {
  data: {
    mobile_phone?: string;
    email_address?: string;
    role_id?: string;
    name?: string;
    password?: string;
    username?: string;
  };
  where: UserWhereInput;
}

export interface DeleteUser {
  id: string;
}

export interface WithTaskDeleteUser {
  task_id?: string | null;
  data: DeleteUser;
}

export interface UserDeletionParams {
  where: UserWhereInput;
}

export interface WithTaskVds {
  task_id?: string | null;
  data: Vds;
}

export interface VdsCreationParams {
  nic_ids: string[];
  cluster_id: string;
  bond_mode?: string;
  name: string;
}

export type VdsCreationWithMigrateVlanParams = VdsCreationParams & {
  vlan: {
    extra_ip: { management_ip: string; host_id: string }[];
    subnetmask: string;
    gateway_subnetmask?: string;
    gateway_ip?: string;
    vlan_id: number;
  };
};

export type VdsCreationWithMAccessVlanParams = VdsCreationParams & {
  vlan: {
    extra_ip: { management_ip: string; host_id: string }[];
    subnetmask: string;
    gateway_subnetmask?: string;
    gateway_ip?: string;
    vlan_id: number;
  };
};

export interface VdsUpdationParams {
  data: { nicIds?: string[]; bond_mode?: string; name?: string };
  where: VdsWhereInput;
}

export interface DeleteVds {
  id: string;
}

export interface WithTaskDeleteVds {
  task_id?: string | null;
  data: DeleteVds;
}

export interface VdsDeletionParams {
  where: VdsWhereInput;
}

export interface WithTaskView {
  task_id?: string | null;
  data: View;
}

export interface ViewCreationParams {
  time_unit: TimeUnit;

  /** @format double */
  time_span: number;
  cluster_id: string;
  name: string;
}

export interface ViewUpdationParams {
  data?: { time_unit?: TimeUnit; time_span?: number; name?: string };
  where: ViewWhereInput;
}

export interface DeleteView {
  id: string;
}

export interface WithTaskDeleteView {
  task_id?: string | null;
  data: DeleteView;
}

export interface ViewDeletionParams {
  where: ViewWhereInput;
}

export interface WithTaskVlan {
  task_id?: string | null;
  data: Vlan;
}

export interface VmVlanCreationParams {
  vds_id: string;

  /** @format double */
  vlan_id: number;
  name: string;
}

export interface VmVlanUpdationParams {
  data: { vlan_id?: number; name?: string };
  where: VlanWhereInput;
}

export interface ManagementVlanUpdationParams {
  data: {
    extra_ip?: { management_ip: string; host_id: string }[];
    subnetmask?: string;
    gateway_ip?: string;
    vlan_id?: number;
  };
  where: VlanWhereInput;
}

export interface MigrationVlanUpdationParams {
  data?: {
    extra_ip?: { management_ip: string; host_id: string }[];
    subnetmask?: string;
    gateway_ip?: string;
    vlan_id?: number;
  };
  where: VlanWhereInput;
}

export interface DeleteVlan {
  id: string;
}

export interface WithTaskDeleteVlan {
  task_id?: string | null;
  data: DeleteVlan;
}

export interface VlanDeletionParams {
  where: VlanWhereInput;
}

export interface WithTaskVmFolder {
  task_id?: string | null;
  data: VmFolder;
}

export interface VmFolderCreationParams {
  cluster_id: string;
  name: string;
}

export interface VmFolderUpdationParams {
  data: { name: string };
  where: VmFolderWhereInput;
}

export interface DeleteVmFolder {
  id: string;
}

export interface WithTaskDeleteVmFolder {
  task_id?: string | null;
  data: DeleteVmFolder;
}

export interface VmFolderDeletionParams {
  where: VmFolderWhereInput;
}

export interface WithTaskVmPlacementGroup {
  task_id?: string | null;
  data: VmPlacementGroup;
}

export interface VmPlacementGroupCreationParams {
  vm_vm_policy?: VmVmPolicy;
  vm_host_prefer_enabled?: boolean;
  vm_host_must_policy?: boolean;
  vm_host_must_enabled?: boolean;
  vm_host_prefer_policy?: boolean;
  vm_vm_policy_enabled?: boolean;
  vms?: VmWhereInput;
  prefer_hosts?: HostWhereInput;
  must_hosts?: HostWhereInput;
  name: string;
  description?: string;
  enabled: boolean;
  cluster_id: string;
}

export interface VmPlacementGroupUpdationParams {
  data: {
    vm_vm_policy?: VmVmPolicy;
    vms?: VmWhereInput;
    prefer_hosts?: HostWhereInput;
    must_hosts?: HostWhereInput;
    vm_host_prefer_enabled?: boolean;
    vm_host_must_policy?: boolean;
    vm_host_must_enabled?: boolean;
    vm_host_prefer_policy?: boolean;
    vm_vm_policy_enabled?: boolean;
    name?: string;
    description?: string;
    enabled?: boolean;
  };
  where: VmPlacementGroupWhereInput;
}

export interface DeleteVmPlacementGroup {
  id: string;
}

export interface WithTaskDeleteVmPlacementGroup {
  task_id?: string | null;
  data: DeleteVmPlacementGroup;
}

export interface VmPlacementGroupDeletionParams {
  where: VmPlacementGroupWhereInput;
}

export interface WithTaskVmSnapshot {
  task_id?: string | null;
  data: VmSnapshot;
}

export interface VmSnapshotCreationParams {
  data: { consistent_type?: ConsistentType; name: string; vm_id: string }[];
}

export interface DeleteVmSnapshot {
  id: string;
}

export interface WithTaskDeleteVmSnapshot {
  task_id?: string | null;
  data: DeleteVmSnapshot;
}

export interface VmSnapshotDeletionParams {
  where: VmSnapshotWhereInput;
}

export interface WithTaskVmTemplate {
  task_id?: string | null;
  data: VmTemplate;
}

export interface VmTemplateCreationParams {
  cluster_id: string;
  cloud_init_supported: boolean;
  vm_id: string;
  description?: string;
  name: string;
}

export interface VmTemplateUpdationParams {
  data?: { cloud_init_supported?: boolean; description?: string; name?: string };
  where: VmTemplateWhereInput;
}

export interface DeleteVmTemplate {
  id: string;
}

export interface WithTaskDeleteVmTemplate {
  task_id?: string | null;
  data: DeleteVmTemplate;
}

export interface VmTemplateDeletionParams {
  where: VmTemplateWhereInput;
}

export interface WithTaskVmVolume {
  task_id?: string | null;
  data: VmVolume;
}

export interface VmVolumeCreationParams {
  elf_storage_policy: VmVolumeElfStoragePolicyType;

  /** @format double */
  size: number;
  sharing: boolean;
  cluster_id: string;
  name: string;
}

export interface DeleteVmVolume {
  id: string;
}

export interface WithTaskDeleteVmVolume {
  task_id?: string | null;
  data: DeleteVmVolume;
}

export interface VmVolumeDeletionParams {
  where: VmVolumeWhereInput;
}

export interface WithTaskVm {
  task_id?: string | null;
  data: Vm;
}

export type MountNewCreateDisksParams = {
  max_bandwidth_policy?: VmDiskIoRestrictType;
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;
  max_iops?: number;
  vm_volume: { elf_storage_policy: VmVolumeElfStoragePolicyType; path?: string; size: number; name: string };
  index?: number;
  key?: number;
  bus: Bus;
  boot: number;
}[];

export type MountDisksParams = {
  max_bandwidth_policy?: VmDiskIoRestrictType;
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;
  max_iops?: number;
  vm_volume_id: string;
  index: number;
  key?: number;
  bus: Bus;
  boot: number;
}[];

export type VmCdRomParams = { elf_image_id?: string; index: number; key?: number; boot: number }[];

export interface VmDiskParams {
  mount_cd_roms?: VmCdRomParams;
  mount_disks?: MountDisksParams;
  mount_new_create_disks?: MountNewCreateDisksParams;
}

export type VmNicParams = {
  subnet_mask?: string;
  gateway?: string;
  ip_address?: string;
  nic_id?: string;
  connect_vlan_id: string;
  mirror?: boolean;
  model?: VmNicModel;
  enabled?: boolean;
  mac_address?: string;
  local_id?: string;
}[];

export interface VmCreationParams {
  max_bandwidth_policy?: VmDiskIoRestrictType;

  /** @format double */
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;

  /** @format double */
  max_iops?: number;
  io_policy?: VmDiskIoPolicy;

  /** @format double */
  vcpu: number;
  status: VmStatus;
  firmware: VmFirmware;
  ha: boolean;
  vm_nics: VmNicParams;
  vm_disks: VmDiskParams;

  /** @format double */
  memory: number;

  /** @format double */
  cpu_cores: number;

  /** @format double */
  cpu_sockets: number;
  guest_os_type?: VmGuestsOperationSystem;
  folder_id?: string;
  description?: string;
  name: string;
  host_id?: string;
  cluster_id: string;
}

export type CloudInitNetworkTypeEnum = "IPV4" | "IPV4_DHCP";

export interface VmCreateVmFromTemplateParams {
  cloud_init?: {
    user_data?: string;
    public_keys?: string[];
    hostname?: string;
    networks?: {
      routes?: { network: string; netmask: string; gateway: string }[];
      type: CloudInitNetworkTypeEnum;
      nic_index: number;
      netmask?: string;
      ip_address?: string;
    }[];
    nameservers?: string[];
    default_user_password?: string;
  };
  is_full_copy?: boolean;
  template_id: string;
  max_bandwidth_policy?: VmDiskIoRestrictType;

  /** @format double */
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;

  /** @format double */
  max_iops?: number;
  io_policy?: VmDiskIoPolicy;

  /** @format double */
  vcpu?: number;
  status?: VmStatus;
  firmware?: VmFirmware;
  ha?: boolean;
  vm_nics?: VmNicParams;
  disk_operate?: {
    remove_disks?: { disk_index: number[] };
    modify_disks?: { vm_volume_id?: string; bus?: Bus; disk_index: number }[];
    new_disks?: VmDiskParams;
  };

  /** @format double */
  memory?: number;

  /** @format double */
  cpu_cores?: number;

  /** @format double */
  cpu_sockets?: number;
  guest_os_type?: VmGuestsOperationSystem;
  folder_id?: string;
  description?: string;
  name: string;
  host_id?: string;
  cluster_id: string;
}

export interface ConvertVmTemplateToVmParams {
  name: string;
  converted_from_template_id: string;
}

export interface VmCloneParams {
  src_vm_id: string;
  max_bandwidth_policy?: VmDiskIoRestrictType;

  /** @format double */
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;

  /** @format double */
  max_iops?: number;
  io_policy?: VmDiskIoPolicy;

  /** @format double */
  vcpu?: number;
  status?: VmStatus;
  firmware?: VmFirmware;
  ha?: boolean;
  vm_nics?: VmNicParams;
  vm_disks?: VmDiskParams;

  /** @format double */
  memory?: number;

  /** @format double */
  cpu_cores?: number;

  /** @format double */
  cpu_sockets?: number;
  guest_os_type?: VmGuestsOperationSystem;
  folder_id?: string;
  description?: string;
  name: string;
  host_id?: string;
  cluster_id: string;
}

export interface VmRebuildParams {
  rebuild_from_snapshot_id: string;
  max_bandwidth_policy?: VmDiskIoRestrictType;

  /** @format double */
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;

  /** @format double */
  max_iops?: number;
  io_policy?: VmDiskIoPolicy;

  /** @format double */
  vcpu?: number;
  status?: VmStatus;
  firmware?: VmFirmware;
  ha?: boolean;
  vm_nics?: VmNicParams;
  vm_disks?: VmDiskParams;

  /** @format double */
  memory?: number;

  /** @format double */
  cpu_cores?: number;

  /** @format double */
  cpu_sockets?: number;
  guest_os_type?: VmGuestsOperationSystem;
  folder_id?: string;
  description?: string;
  name: string;
  host_id?: string;
  cluster_id: string;
}

export interface VmRollbackParams {
  data: { snapshot_id: string };
  where: VmWhereInput;
}

export interface VmUpdateParams {
  data: {
    vcpu?: number;
    ha?: boolean;
    memory?: number;
    cpu_cores?: number;
    cpu_sockets?: number;
    description?: string;
    name?: string;
  };
  where: VmWhereInput;
}

export interface DeleteVm {
  id: string;
}

export interface VmOperateParams {
  where: VmWhereInput;
}

export interface VmStartParams {
  data?: { host_id: string };
  where: VmWhereInput;
}

export interface VmAddDiskParams {
  data: {
    max_bandwidth_policy?: VmDiskIoRestrictType;
    max_bandwidth?: number;
    max_iops_policy?: VmDiskIoRestrictType;
    max_iops?: number;
    io_policy?: VmDiskIoPolicy;
    vm_disks: { mount_disks?: MountDisksParams; mount_new_create_disks?: MountNewCreateDisksParams };
  };
  where: VmWhereInput;
}

export interface VmUpdateDiskParams {
  data: { elf_image_id?: string | null; vm_volume_id?: string; vm_disk_id: string; bus?: Bus };
  where: VmWhereInput;
}

export interface VmRemoveDiskParams {
  data: { disk_ids: string[] };
  where: VmWhereInput;
}

export interface VmAddCdRomParams {
  data: { vm_cd_roms: VmCdRomParams };
  where: VmWhereInput;
}

export interface VmRemoveCdRomParams {
  data: { cd_rom_ids: string[] };
  where: VmWhereInput;
}

export interface VmAddNicParams {
  data: { vm_nics: VmNicParams };
  where: VmWhereInput;
}

export interface VmUpdateNicParams {
  data: {
    subnet_mask?: string;
    gateway?: string;
    ip_address?: string;
    nic_id?: string;
    connect_vlan_id?: string;
    mirror?: boolean;
    model?: VmNicModel;
    enabled?: boolean;
    mac_address?: string;
    nic_index: number;
  };
  where: VmWhereInput;
}

export interface VmRemoveNicParams {
  data: { nic_index: number[] };
  where: VmWhereInput;
}

export interface InstallVmtoolsParams {
  data: { svt_image_id: string; cd_rom_id: string };
  where: VmWhereInput;
}

export interface VmMigrateParams {
  data?: { host_id: string };
  where: VmWhereInput;
}

export interface VmAddFolderParams {
  data: { folder_id: string };
  where: VmWhereInput;
}

export namespace GetAlertNotifiers {
  /**
   * No description
   * @name GetAlertNotifiers
   * @request POST:/get-alert-notifiers
   * @response `200` `(AlertNotifier)[]` Ok
   * @response `400` `string`
   */
  export namespace GetAlertNotifiers {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetAlertNotifiersRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = AlertNotifier[];
  }
}

export namespace GetAlertNotifiersConnection {
  /**
   * No description
   * @name GetAlertNotifiersConnection
   * @request POST:/get-alert-notifiers-connection
   * @response `200` `AlertNotifierConnection` Ok
   * @response `400` `string`
   */
  export namespace GetAlertNotifiersConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetAlertNotifiersConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = AlertNotifierConnection;
  }
}

export namespace GetAlertRules {
  /**
   * No description
   * @name GetAlertRules
   * @request POST:/get-alert-rules
   * @response `200` `(AlertRule)[]` Ok
   * @response `400` `string`
   */
  export namespace GetAlertRules {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetAlertRulesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = AlertRule[];
  }
}

export namespace GetAlertRulesConnection {
  /**
   * No description
   * @name GetAlertRulesConnection
   * @request POST:/get-alert-rules-connection
   * @response `200` `AlertRuleConnection` Ok
   * @response `400` `string`
   */
  export namespace GetAlertRulesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetAlertRulesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = AlertRuleConnection;
  }
}

export namespace GetAlerts {
  /**
   * No description
   * @name GetAlerts
   * @request POST:/get-alerts
   * @response `200` `(Alert)[]` Ok
   * @response `400` `string`
   */
  export namespace GetAlerts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetAlertsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Alert[];
  }
}

export namespace GetAlertsConnection {
  /**
   * No description
   * @name GetAlertsConnection
   * @request POST:/get-alerts-connection
   * @response `200` `AlertConnection` Ok
   * @response `400` `string`
   */
  export namespace GetAlertsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetAlertsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = AlertConnection;
  }
}

export namespace GetApplications {
  /**
   * No description
   * @name GetApplications
   * @request POST:/get-applications
   * @response `200` `(Application)[]` Ok
   * @response `400` `string`
   */
  export namespace GetApplications {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetApplicationsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Application[];
  }
}

export namespace GetApplicationsConnection {
  /**
   * No description
   * @name GetApplicationsConnection
   * @request POST:/get-applications-connection
   * @response `200` `ApplicationConnection` Ok
   * @response `400` `string`
   */
  export namespace GetApplicationsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetApplicationsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ApplicationConnection;
  }
}

export namespace GetBrickTopoes {
  /**
   * No description
   * @name GetBrickTopoes
   * @request POST:/get-brick-topoes
   * @response `200` `(BrickTopo)[]` Ok
   * @response `400` `string`
   */
  export namespace GetBrickTopoes {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetBrickTopoesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = BrickTopo[];
  }
}

export namespace GetBrickTopoesConnection {
  /**
   * No description
   * @name GetBrickTopoesConnection
   * @request POST:/get-brick-topoes-connection
   * @response `200` `BrickTopoConnection` Ok
   * @response `400` `string`
   */
  export namespace GetBrickTopoesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetBrickTopoesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = BrickTopoConnection;
  }
}

export namespace GetClusterImages {
  /**
   * No description
   * @name GetClusterImages
   * @request POST:/get-cluster-images
   * @response `200` `(ClusterImage)[]` Ok
   * @response `400` `string`
   */
  export namespace GetClusterImages {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetClusterImagesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ClusterImage[];
  }
}

export namespace GetClusterImagesConnection {
  /**
   * No description
   * @name GetClusterImagesConnection
   * @request POST:/get-cluster-images-connection
   * @response `200` `ClusterImageConnection` Ok
   * @response `400` `string`
   */
  export namespace GetClusterImagesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetClusterImagesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ClusterImageConnection;
  }
}

export namespace GetClusters {
  /**
   * No description
   * @name GetClusters
   * @request POST:/get-clusters
   * @response `200` `(Cluster)[]` Ok
   * @response `400` `string`
   */
  export namespace GetClusters {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetClustersRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Cluster[];
  }
}

export namespace GetClustersConnection {
  /**
   * No description
   * @name GetClustersConnection
   * @request POST:/get-clusters-connection
   * @response `200` `ClusterConnection` Ok
   * @response `400` `string`
   */
  export namespace GetClustersConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetClustersConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ClusterConnection;
  }
}

export namespace GetClusterSettingses {
  /**
   * No description
   * @name GetClusterSettingses
   * @request POST:/get-cluster-settingses
   * @response `200` `(ClusterSettings)[]` Ok
   * @response `400` `string`
   */
  export namespace GetClusterSettingses {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetClusterSettingsesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ClusterSettings[];
  }
}

export namespace GetClusterSettingsesConnection {
  /**
   * No description
   * @name GetClusterSettingsesConnection
   * @request POST:/get-cluster-settingses-connection
   * @response `200` `ClusterSettingsConnection` Ok
   * @response `400` `string`
   */
  export namespace GetClusterSettingsesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetClusterSettingsesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ClusterSettingsConnection;
  }
}

export namespace GetClusterTopoes {
  /**
   * No description
   * @name GetClusterTopoes
   * @request POST:/get-cluster-topoes
   * @response `200` `(ClusterTopo)[]` Ok
   * @response `400` `string`
   */
  export namespace GetClusterTopoes {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetClusterTopoesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ClusterTopo[];
  }
}

export namespace GetClusterTopoesConnection {
  /**
   * No description
   * @name GetClusterTopoesConnection
   * @request POST:/get-cluster-topoes-connection
   * @response `200` `ClusterTopoConnection` Ok
   * @response `400` `string`
   */
  export namespace GetClusterTopoesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetClusterTopoesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ClusterTopoConnection;
  }
}

export namespace GetClusterUpgradeHistories {
  /**
   * No description
   * @name GetClusterUpgradeHistories
   * @request POST:/get-cluster-upgrade-histories
   * @response `200` `(ClusterUpgradeHistory)[]` Ok
   * @response `400` `string`
   */
  export namespace GetClusterUpgradeHistories {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetClusterUpgradeHistoriesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ClusterUpgradeHistory[];
  }
}

export namespace GetClusterUpgradeHistoriesConnection {
  /**
   * No description
   * @name GetClusterUpgradeHistoriesConnection
   * @request POST:/get-cluster-upgrade-histories-connection
   * @response `200` `ClusterUpgradeHistoryConnection` Ok
   * @response `400` `string`
   */
  export namespace GetClusterUpgradeHistoriesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetClusterUpgradeHistoriesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ClusterUpgradeHistoryConnection;
  }
}

export namespace GetConsistencyGroups {
  /**
   * No description
   * @name GetConsistencyGroups
   * @request POST:/get-consistency-groups
   * @response `200` `(ConsistencyGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace GetConsistencyGroups {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetConsistencyGroupsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ConsistencyGroup[];
  }
}

export namespace GetConsistencyGroupsConnection {
  /**
   * No description
   * @name GetConsistencyGroupsConnection
   * @request POST:/get-consistency-groups-connection
   * @response `200` `ConsistencyGroupConnection` Ok
   * @response `400` `string`
   */
  export namespace GetConsistencyGroupsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetConsistencyGroupsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ConsistencyGroupConnection;
  }
}

export namespace GetConsistencyGroupSnapshots {
  /**
   * No description
   * @name GetConsistencyGroupSnapshots
   * @request POST:/get-consistency-group-snapshots
   * @response `200` `(ConsistencyGroupSnapshot)[]` Ok
   * @response `400` `string`
   */
  export namespace GetConsistencyGroupSnapshots {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetConsistencyGroupSnapshotsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ConsistencyGroupSnapshot[];
  }
}

export namespace GetConsistencyGroupSnapshotsConnection {
  /**
   * No description
   * @name GetConsistencyGroupSnapshotsConnection
   * @request POST:/get-consistency-group-snapshots-connection
   * @response `200` `ConsistencyGroupSnapshotConnection` Ok
   * @response `400` `string`
   */
  export namespace GetConsistencyGroupSnapshotsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetConsistencyGroupSnapshotsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ConsistencyGroupSnapshotConnection;
  }
}

export namespace GetDatacenters {
  /**
   * No description
   * @name GetDatacenters
   * @request POST:/get-datacenters
   * @response `200` `(Datacenter)[]` Ok
   * @response `400` `string`
   */
  export namespace GetDatacenters {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetDatacentersRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Datacenter[];
  }
}

export namespace GetDatacentersConnection {
  /**
   * No description
   * @name GetDatacentersConnection
   * @request POST:/get-datacenters-connection
   * @response `200` `DatacenterConnection` Ok
   * @response `400` `string`
   */
  export namespace GetDatacentersConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetDatacentersConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = DatacenterConnection;
  }
}

export namespace GetDeploys {
  /**
   * No description
   * @name GetDeploys
   * @request POST:/get-deploys
   * @response `200` `(Deploy)[]` Ok
   * @response `400` `string`
   */
  export namespace GetDeploys {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetDeploysRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Deploy[];
  }
}

export namespace GetDeploysConnection {
  /**
   * No description
   * @name GetDeploysConnection
   * @request POST:/get-deploys-connection
   * @response `200` `DeployConnection` Ok
   * @response `400` `string`
   */
  export namespace GetDeploysConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetDeploysConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = DeployConnection;
  }
}

export namespace GetDiscoverHosts {
  /**
   * No description
   * @name GetDiscoverHosts
   * @request POST:/get-discover-hosts
   * @response `200` `(DiscoveredHost)[]` Ok
   * @response `400` `string`
   */
  export namespace GetDiscoverHosts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetDiscoverHostsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = DiscoveredHost[];
  }
}

export namespace GetDisks {
  /**
   * No description
   * @name GetDisks
   * @request POST:/get-disks
   * @response `200` `(Disk)[]` Ok
   * @response `400` `string`
   */
  export namespace GetDisks {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetDisksRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Disk[];
  }
}

export namespace GetDisksConnection {
  /**
   * No description
   * @name GetDisksConnection
   * @request POST:/get-disks-connection
   * @response `200` `DiskConnection` Ok
   * @response `400` `string`
   */
  export namespace GetDisksConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetDisksConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = DiskConnection;
  }
}

export namespace GetElfDataStores {
  /**
   * No description
   * @name GetElfDataStores
   * @request POST:/get-elf-data-stores
   * @response `200` `(ElfDataStore)[]` Ok
   * @response `400` `string`
   */
  export namespace GetElfDataStores {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetElfDataStoresRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ElfDataStore[];
  }
}

export namespace GetElfDataStoresConnection {
  /**
   * No description
   * @name GetElfDataStoresConnection
   * @request POST:/get-elf-data-stores-connection
   * @response `200` `ElfDataStoreConnection` Ok
   * @response `400` `string`
   */
  export namespace GetElfDataStoresConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetElfDataStoresConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ElfDataStoreConnection;
  }
}

export namespace GetElfImages {
  /**
   * No description
   * @name GetElfImages
   * @request POST:/get-elf-images
   * @response `200` `(ElfImage)[]` Ok
   * @response `400` `string`
   */
  export namespace GetElfImages {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetElfImagesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ElfImage[];
  }
}

export namespace GetElfImagesConnection {
  /**
   * No description
   * @name GetElfImagesConnection
   * @request POST:/get-elf-images-connection
   * @response `200` `ElfImageConnection` Ok
   * @response `400` `string`
   */
  export namespace GetElfImagesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetElfImagesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ElfImageConnection;
  }
}

export namespace GetElfStoragePolicies {
  /**
   * No description
   * @name GetElfStoragePolicies
   * @request POST:/get-elf-storage-policies
   * @response `200` `(ElfStoragePolicy)[]` Ok
   * @response `400` `string`
   */
  export namespace GetElfStoragePolicies {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetElfStoragePoliciesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ElfStoragePolicy[];
  }
}

export namespace GetElfStoragePoliciesConnection {
  /**
   * No description
   * @name GetElfStoragePoliciesConnection
   * @request POST:/get-elf-storage-policies-connection
   * @response `200` `ElfStoragePolicyConnection` Ok
   * @response `400` `string`
   */
  export namespace GetElfStoragePoliciesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetElfStoragePoliciesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ElfStoragePolicyConnection;
  }
}

export namespace GetEntityFilters {
  /**
   * No description
   * @name GetEntityFilters
   * @request POST:/get-entity-filters
   * @response `200` `(EntityFilter)[]` Ok
   * @response `400` `string`
   */
  export namespace GetEntityFilters {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetEntityFiltersRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = EntityFilter[];
  }
}

export namespace GetEntityFiltersConnection {
  /**
   * No description
   * @name GetEntityFiltersConnection
   * @request POST:/get-entity-filters-connection
   * @response `200` `EntityFilterConnection` Ok
   * @response `400` `string`
   */
  export namespace GetEntityFiltersConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetEntityFiltersConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = EntityFilterConnection;
  }
}

export namespace GetGlobalAlertRules {
  /**
   * No description
   * @name GetGlobalAlertRules
   * @request POST:/get-global-alert-rules
   * @response `200` `(GlobalAlertRule)[]` Ok
   * @response `400` `string`
   */
  export namespace GetGlobalAlertRules {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetGlobalAlertRulesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = GlobalAlertRule[];
  }
}

export namespace GetGlobalAlertRulesConnection {
  /**
   * No description
   * @name GetGlobalAlertRulesConnection
   * @request POST:/get-global-alert-rules-connection
   * @response `200` `GlobalAlertRuleConnection` Ok
   * @response `400` `string`
   */
  export namespace GetGlobalAlertRulesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetGlobalAlertRulesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = GlobalAlertRuleConnection;
  }
}

export namespace GetGlobalSettingses {
  /**
   * No description
   * @name GetGlobalSettingses
   * @request POST:/get-global-settingses
   * @response `200` `(GlobalSettings)[]` Ok
   * @response `400` `string`
   */
  export namespace GetGlobalSettingses {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetGlobalSettingsesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = GlobalSettings[];
  }
}

export namespace GetGlobalSettingsesConnection {
  /**
   * No description
   * @name GetGlobalSettingsesConnection
   * @request POST:/get-global-settingses-connection
   * @response `200` `GlobalSettingsConnection` Ok
   * @response `400` `string`
   */
  export namespace GetGlobalSettingsesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetGlobalSettingsesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = GlobalSettingsConnection;
  }
}

export namespace GetGraphs {
  /**
   * No description
   * @name GetGraphs
   * @request POST:/get-graphs
   * @response `200` `(Graph)[]` Ok
   * @response `400` `string`
   */
  export namespace GetGraphs {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetGraphsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Graph[];
  }
}

export namespace GetGraphsConnection {
  /**
   * No description
   * @name GetGraphsConnection
   * @request POST:/get-graphs-connection
   * @response `200` `GraphConnection` Ok
   * @response `400` `string`
   */
  export namespace GetGraphsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetGraphsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = GraphConnection;
  }
}

export namespace GetHosts {
  /**
   * No description
   * @name GetHosts
   * @request POST:/get-hosts
   * @response `200` `(Host)[]` Ok
   * @response `400` `string`
   */
  export namespace GetHosts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetHostsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Host[];
  }
}

export namespace GetHostsConnection {
  /**
   * No description
   * @name GetHostsConnection
   * @request POST:/get-hosts-connection
   * @response `200` `HostConnection` Ok
   * @response `400` `string`
   */
  export namespace GetHostsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetHostsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = HostConnection;
  }
}

export namespace GetImagesConnector {
  /**
   * No description
   * @name GetImagesConnector
   * @request POST:/get-images-connector
   * @response `200` `(ImageConnector)[]` Ok
   * @response `400` `string`
   */
  export namespace GetImagesConnector {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetImagesConnectorRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ImageConnector[];
  }
}

export namespace GetIpmis {
  /**
   * No description
   * @name GetIpmis
   * @request POST:/get-ipmis
   * @response `200` `(Ipmi)[]` Ok
   * @response `400` `string`
   */
  export namespace GetIpmis {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetIpmisRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Ipmi[];
  }
}

export namespace GetIscsiConnections {
  /**
   * No description
   * @name GetIscsiConnections
   * @request POST:/get-iscsi-connections
   * @response `200` `(IscsiConnection)[]` Ok
   * @response `400` `string`
   */
  export namespace GetIscsiConnections {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetIscsiConnectionsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = IscsiConnection[];
  }
}

export namespace GetIscsiConnectionsConnection {
  /**
   * No description
   * @name GetIscsiConnectionsConnection
   * @request POST:/get-iscsi-connections-connection
   * @response `200` `IscsiConnectionConnection` Ok
   * @response `400` `string`
   */
  export namespace GetIscsiConnectionsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetIscsiConnectionsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = IscsiConnectionConnection;
  }
}

export namespace GetIscsiLuns {
  /**
   * No description
   * @name GetIscsiLuns
   * @request POST:/get-iscsi-luns
   * @response `200` `(IscsiLun)[]` Ok
   * @response `400` `string`
   */
  export namespace GetIscsiLuns {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetIscsiLunsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = IscsiLun[];
  }
}

export namespace GetIscsiLunsConnection {
  /**
   * No description
   * @name GetIscsiLunsConnection
   * @request POST:/get-iscsi-luns-connection
   * @response `200` `IscsiLunConnection` Ok
   * @response `400` `string`
   */
  export namespace GetIscsiLunsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetIscsiLunsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = IscsiLunConnection;
  }
}

export namespace GetIscsiLunSnapshots {
  /**
   * No description
   * @name GetIscsiLunSnapshots
   * @request POST:/get-iscsi-lun-snapshots
   * @response `200` `(IscsiLunSnapshot)[]` Ok
   * @response `400` `string`
   */
  export namespace GetIscsiLunSnapshots {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetIscsiLunSnapshotsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = IscsiLunSnapshot[];
  }
}

export namespace GetIscsiLunSnapshotsConnection {
  /**
   * No description
   * @name GetIscsiLunSnapshotsConnection
   * @request POST:/get-iscsi-lun-snapshots-connection
   * @response `200` `IscsiLunSnapshotConnection` Ok
   * @response `400` `string`
   */
  export namespace GetIscsiLunSnapshotsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetIscsiLunSnapshotsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = IscsiLunSnapshotConnection;
  }
}

export namespace GetIscsiTargets {
  /**
   * No description
   * @name GetIscsiTargets
   * @request POST:/get-iscsi-targets
   * @response `200` `(IscsiTarget)[]` Ok
   * @response `400` `string`
   */
  export namespace GetIscsiTargets {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetIscsiTargetsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = IscsiTarget[];
  }
}

export namespace GetIscsiTargetsConnection {
  /**
   * No description
   * @name GetIscsiTargetsConnection
   * @request POST:/get-iscsi-targets-connection
   * @response `200` `IscsiTargetConnection` Ok
   * @response `400` `string`
   */
  export namespace GetIscsiTargetsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetIscsiTargetsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = IscsiTargetConnection;
  }
}

export namespace GetLabels {
  /**
   * No description
   * @name GetLabels
   * @request POST:/get-labels
   * @response `200` `(Label)[]` Ok
   * @response `400` `string`
   */
  export namespace GetLabels {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetLabelsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Label[];
  }
}

export namespace GetLabelsConnection {
  /**
   * No description
   * @name GetLabelsConnection
   * @request POST:/get-labels-connection
   * @response `200` `LabelConnection` Ok
   * @response `400` `string`
   */
  export namespace GetLabelsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetLabelsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = LabelConnection;
  }
}

export namespace GetLicenses {
  /**
   * No description
   * @name GetLicenses
   * @request POST:/get-licenses
   * @response `200` `(License)[]` Ok
   * @response `400` `string`
   */
  export namespace GetLicenses {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetLicensesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = License[];
  }
}

export namespace GetLicensesConnection {
  /**
   * No description
   * @name GetLicensesConnection
   * @request POST:/get-licenses-connection
   * @response `200` `LicenseConnection` Ok
   * @response `400` `string`
   */
  export namespace GetLicensesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetLicensesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = LicenseConnection;
  }
}

export namespace GetLogCollections {
  /**
   * No description
   * @name GetLogCollections
   * @request POST:/get-log-collections
   * @response `200` `(LogCollection)[]` Ok
   * @response `400` `string`
   */
  export namespace GetLogCollections {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetLogCollectionsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = LogCollection[];
  }
}

export namespace GetLogCollectionsConnection {
  /**
   * No description
   * @name GetLogCollectionsConnection
   * @request POST:/get-log-collections-connection
   * @response `200` `LogCollectionConnection` Ok
   * @response `400` `string`
   */
  export namespace GetLogCollectionsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetLogCollectionsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = LogCollectionConnection;
  }
}

export namespace GetMigrateTransmitters {
  /**
   * No description
   * @name GetMigrateTransmitters
   * @request POST:/get-migrate-transmitters
   * @response `200` `(MigrateTransmitter)[]` Ok
   * @response `400` `string`
   */
  export namespace GetMigrateTransmitters {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetMigrateTransmittersRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = MigrateTransmitter[];
  }
}

export namespace GetMigrateTransmittersConnection {
  /**
   * No description
   * @name GetMigrateTransmittersConnection
   * @request POST:/get-migrate-transmitters-connection
   * @response `200` `MigrateTransmitterConnection` Ok
   * @response `400` `string`
   */
  export namespace GetMigrateTransmittersConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetMigrateTransmittersConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = MigrateTransmitterConnection;
  }
}

export namespace GetNamespaceGroups {
  /**
   * No description
   * @name GetNamespaceGroups
   * @request POST:/get-namespace-groups
   * @response `200` `(NamespaceGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace GetNamespaceGroups {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNamespaceGroupsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NamespaceGroup[];
  }
}

export namespace GetNamespaceGroupsConnection {
  /**
   * No description
   * @name GetNamespaceGroupsConnection
   * @request POST:/get-namespace-groups-connection
   * @response `200` `NamespaceGroupConnection` Ok
   * @response `400` `string`
   */
  export namespace GetNamespaceGroupsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNamespaceGroupsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NamespaceGroupConnection;
  }
}

export namespace GetNfsExports {
  /**
   * No description
   * @name GetNfsExports
   * @request POST:/get-nfs-exports
   * @response `200` `(NfsExport)[]` Ok
   * @response `400` `string`
   */
  export namespace GetNfsExports {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNfsExportsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NfsExport[];
  }
}

export namespace GetNfsExportsConnection {
  /**
   * No description
   * @name GetNfsExportsConnection
   * @request POST:/get-nfs-exports-connection
   * @response `200` `NfsExportConnection` Ok
   * @response `400` `string`
   */
  export namespace GetNfsExportsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNfsExportsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NfsExportConnection;
  }
}

export namespace GetNfsInodes {
  /**
   * No description
   * @name GetNfsInodes
   * @request POST:/get-nfs-inodes
   * @response `200` `(NfsInode)[]` Ok
   * @response `400` `string`
   */
  export namespace GetNfsInodes {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNfsInodesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NfsInode[];
  }
}

export namespace GetNfsInodesConnection {
  /**
   * No description
   * @name GetNfsInodesConnection
   * @request POST:/get-nfs-inodes-connection
   * @response `200` `NfsInodeConnection` Ok
   * @response `400` `string`
   */
  export namespace GetNfsInodesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNfsInodesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NfsInodeConnection;
  }
}

export namespace GetNics {
  /**
   * No description
   * @name GetNics
   * @request POST:/get-nics
   * @response `200` `(Nic)[]` Ok
   * @response `400` `string`
   */
  export namespace GetNics {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNicsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Nic[];
  }
}

export namespace GetNicsConnection {
  /**
   * No description
   * @name GetNicsConnection
   * @request POST:/get-nics-connection
   * @response `200` `NicConnection` Ok
   * @response `400` `string`
   */
  export namespace GetNicsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNicsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NicConnection;
  }
}

export namespace GetNodeTopoes {
  /**
   * No description
   * @name GetNodeTopoes
   * @request POST:/get-node-topoes
   * @response `200` `(NodeTopo)[]` Ok
   * @response `400` `string`
   */
  export namespace GetNodeTopoes {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNodeTopoesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NodeTopo[];
  }
}

export namespace GetNodeTopoesConnection {
  /**
   * No description
   * @name GetNodeTopoesConnection
   * @request POST:/get-node-topoes-connection
   * @response `200` `NodeTopoConnection` Ok
   * @response `400` `string`
   */
  export namespace GetNodeTopoesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNodeTopoesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NodeTopoConnection;
  }
}

export namespace GetNvmfNamespaces {
  /**
   * No description
   * @name GetNvmfNamespaces
   * @request POST:/get-nvmf-namespaces
   * @response `200` `(NvmfNamespace)[]` Ok
   * @response `400` `string`
   */
  export namespace GetNvmfNamespaces {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNvmfNamespacesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NvmfNamespace[];
  }
}

export namespace GetNvmfNamespacesConnection {
  /**
   * No description
   * @name GetNvmfNamespacesConnection
   * @request POST:/get-nvmf-namespaces-connection
   * @response `200` `NvmfNamespaceConnection` Ok
   * @response `400` `string`
   */
  export namespace GetNvmfNamespacesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNvmfNamespacesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NvmfNamespaceConnection;
  }
}

export namespace GetNvmfNamespaceSnapshots {
  /**
   * No description
   * @name GetNvmfNamespaceSnapshots
   * @request POST:/get-nvmf-namespace-snapshots
   * @response `200` `(NvmfNamespaceSnapshot)[]` Ok
   * @response `400` `string`
   */
  export namespace GetNvmfNamespaceSnapshots {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNvmfNamespaceSnapshotsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NvmfNamespaceSnapshot[];
  }
}

export namespace GetNvmfNamespaceSnapshotsConnection {
  /**
   * No description
   * @name GetNvmfNamespaceSnapshotsConnection
   * @request POST:/get-nvmf-namespace-snapshots-connection
   * @response `200` `NvmfNamespaceSnapshotConnection` Ok
   * @response `400` `string`
   */
  export namespace GetNvmfNamespaceSnapshotsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNvmfNamespaceSnapshotsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NvmfNamespaceSnapshotConnection;
  }
}

export namespace GetNvmfSubsystems {
  /**
   * No description
   * @name GetNvmfSubsystems
   * @request POST:/get-nvmf-subsystems
   * @response `200` `(NvmfSubsystem)[]` Ok
   * @response `400` `string`
   */
  export namespace GetNvmfSubsystems {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNvmfSubsystemsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NvmfSubsystem[];
  }
}

export namespace GetNvmfSubsystemsConnection {
  /**
   * No description
   * @name GetNvmfSubsystemsConnection
   * @request POST:/get-nvmf-subsystems-connection
   * @response `200` `NvmfSubsystemConnection` Ok
   * @response `400` `string`
   */
  export namespace GetNvmfSubsystemsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetNvmfSubsystemsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = NvmfSubsystemConnection;
  }
}

export namespace GetOrganizations {
  /**
   * No description
   * @name GetOrganizations
   * @request POST:/get-organizations
   * @response `200` `(Organization)[]` Ok
   * @response `400` `string`
   */
  export namespace GetOrganizations {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetOrganizationsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Organization[];
  }
}

export namespace GetOrganizationsConnection {
  /**
   * No description
   * @name GetOrganizationsConnection
   * @request POST:/get-organizations-connection
   * @response `200` `OrganizationConnection` Ok
   * @response `400` `string`
   */
  export namespace GetOrganizationsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetOrganizationsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = OrganizationConnection;
  }
}

export namespace GetPmemDimms {
  /**
   * No description
   * @name GetPmemDimms
   * @request POST:/get-pmem-dimms
   * @response `200` `(PmemDimm)[]` Ok
   * @response `400` `string`
   */
  export namespace GetPmemDimms {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetPmemDimmsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = PmemDimm[];
  }
}

export namespace GetPmemDimmsConnection {
  /**
   * No description
   * @name GetPmemDimmsConnection
   * @request POST:/get-pmem-dimms-connection
   * @response `200` `PmemDimmConnection` Ok
   * @response `400` `string`
   */
  export namespace GetPmemDimmsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetPmemDimmsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = PmemDimmConnection;
  }
}

export namespace GetRackTopoes {
  /**
   * No description
   * @name GetRackTopoes
   * @request POST:/get-rack-topoes
   * @response `200` `(RackTopo)[]` Ok
   * @response `400` `string`
   */
  export namespace GetRackTopoes {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetRackTopoesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = RackTopo[];
  }
}

export namespace GetRackTopoesConnection {
  /**
   * No description
   * @name GetRackTopoesConnection
   * @request POST:/get-rack-topoes-connection
   * @response `200` `RackTopoConnection` Ok
   * @response `400` `string`
   */
  export namespace GetRackTopoesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetRackTopoesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = RackTopoConnection;
  }
}

export namespace GetReportTasks {
  /**
   * No description
   * @name GetReportTasks
   * @request POST:/get-report-tasks
   * @response `200` `(ReportTask)[]` Ok
   * @response `400` `string`
   */
  export namespace GetReportTasks {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetReportTasksRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ReportTask[];
  }
}

export namespace GetReportTasksConnection {
  /**
   * No description
   * @name GetReportTasksConnection
   * @request POST:/get-report-tasks-connection
   * @response `200` `ReportTaskConnection` Ok
   * @response `400` `string`
   */
  export namespace GetReportTasksConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetReportTasksConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ReportTaskConnection;
  }
}

export namespace GetReportTemplates {
  /**
   * No description
   * @name GetReportTemplates
   * @request POST:/get-report-templates
   * @response `200` `(ReportTemplate)[]` Ok
   * @response `400` `string`
   */
  export namespace GetReportTemplates {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetReportTemplatesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ReportTemplate[];
  }
}

export namespace GetReportTemplatesConnection {
  /**
   * No description
   * @name GetReportTemplatesConnection
   * @request POST:/get-report-templates-connection
   * @response `200` `ReportTemplateConnection` Ok
   * @response `400` `string`
   */
  export namespace GetReportTemplatesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetReportTemplatesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ReportTemplateConnection;
  }
}

export namespace GetSnapshotGroups {
  /**
   * No description
   * @name GetSnapshotGroups
   * @request POST:/get-snapshot-groups
   * @response `200` `(SnapshotGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace GetSnapshotGroups {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetSnapshotGroupsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = SnapshotGroup[];
  }
}

export namespace GetSnapshotGroupsConnection {
  /**
   * No description
   * @name GetSnapshotGroupsConnection
   * @request POST:/get-snapshot-groups-connection
   * @response `200` `SnapshotGroupConnection` Ok
   * @response `400` `string`
   */
  export namespace GetSnapshotGroupsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetSnapshotGroupsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = SnapshotGroupConnection;
  }
}

export namespace GetSnapshotPlans {
  /**
   * No description
   * @name GetSnapshotPlans
   * @request POST:/get-snapshot-plans
   * @response `200` `(SnapshotPlan)[]` Ok
   * @response `400` `string`
   */
  export namespace GetSnapshotPlans {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetSnapshotPlansRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = SnapshotPlan[];
  }
}

export namespace GetSnapshotPlansConnection {
  /**
   * No description
   * @name GetSnapshotPlansConnection
   * @request POST:/get-snapshot-plans-connection
   * @response `200` `SnapshotPlanConnection` Ok
   * @response `400` `string`
   */
  export namespace GetSnapshotPlansConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetSnapshotPlansConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = SnapshotPlanConnection;
  }
}

export namespace GetSnapshotPlanTasks {
  /**
   * No description
   * @name GetSnapshotPlanTasks
   * @request POST:/get-snapshot-plan-tasks
   * @response `200` `(SnapshotPlanTask)[]` Ok
   * @response `400` `string`
   */
  export namespace GetSnapshotPlanTasks {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetSnapshotPlanTasksRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = SnapshotPlanTask[];
  }
}

export namespace GetSnapshotPlanTasksConnection {
  /**
   * No description
   * @name GetSnapshotPlanTasksConnection
   * @request POST:/get-snapshot-plan-tasks-connection
   * @response `200` `SnapshotPlanTaskConnection` Ok
   * @response `400` `string`
   */
  export namespace GetSnapshotPlanTasksConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetSnapshotPlanTasksConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = SnapshotPlanTaskConnection;
  }
}

export namespace GetSnmpTransports {
  /**
   * No description
   * @name GetSnmpTransports
   * @request POST:/get-snmp-transports
   * @response `200` `(SnmpTransport)[]` Ok
   * @response `400` `string`
   */
  export namespace GetSnmpTransports {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetSnmpTransportsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = SnmpTransport[];
  }
}

export namespace GetSnmpTransportsConnection {
  /**
   * No description
   * @name GetSnmpTransportsConnection
   * @request POST:/get-snmp-transports-connection
   * @response `200` `SnmpTransportConnection` Ok
   * @response `400` `string`
   */
  export namespace GetSnmpTransportsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetSnmpTransportsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = SnmpTransportConnection;
  }
}

export namespace GetSnmpTrapReceivers {
  /**
   * No description
   * @name GetSnmpTrapReceivers
   * @request POST:/get-snmp-trap-receivers
   * @response `200` `(SnmpTrapReceiver)[]` Ok
   * @response `400` `string`
   */
  export namespace GetSnmpTrapReceivers {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetSnmpTrapReceiversRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = SnmpTrapReceiver[];
  }
}

export namespace GetSnmpTrapReceiversConnection {
  /**
   * No description
   * @name GetSnmpTrapReceiversConnection
   * @request POST:/get-snmp-trap-receivers-connection
   * @response `200` `SnmpTrapReceiverConnection` Ok
   * @response `400` `string`
   */
  export namespace GetSnmpTrapReceiversConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetSnmpTrapReceiversConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = SnmpTrapReceiverConnection;
  }
}

export namespace GetStoragePoliciesConnector {
  /**
   * No description
   * @name GetStoragePoliciesConnector
   * @request POST:/get-storage-policies-connector
   * @response `200` `(StoragePolicyConector)[]` Ok
   * @response `400` `string`
   */
  export namespace GetStoragePoliciesConnector {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetStoragePoliciesConnectorRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = StoragePolicyConector[];
  }
}

export namespace GetSvtImages {
  /**
   * No description
   * @name GetSvtImages
   * @request POST:/get-svt-images
   * @response `200` `(SvtImage)[]` Ok
   * @response `400` `string`
   */
  export namespace GetSvtImages {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetSvtImagesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = SvtImage[];
  }
}

export namespace GetSvtImagesConnection {
  /**
   * No description
   * @name GetSvtImagesConnection
   * @request POST:/get-svt-images-connection
   * @response `200` `SvtImageConnection` Ok
   * @response `400` `string`
   */
  export namespace GetSvtImagesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetSvtImagesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = SvtImageConnection;
  }
}

export namespace GetSystemAuditLogs {
  /**
   * No description
   * @name GetSystemAuditLogs
   * @request POST:/get-system-audit-logs
   * @response `200` `(SystemAuditLog)[]` Ok
   * @response `400` `string`
   */
  export namespace GetSystemAuditLogs {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetSystemAuditLogsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = SystemAuditLog[];
  }
}

export namespace GetSystemAuditLogsConnection {
  /**
   * No description
   * @name GetSystemAuditLogsConnection
   * @request POST:/get-system-audit-logs-connection
   * @response `200` `SystemAuditLogConnection` Ok
   * @response `400` `string`
   */
  export namespace GetSystemAuditLogsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetSystemAuditLogsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = SystemAuditLogConnection;
  }
}

export namespace GetTasks {
  /**
   * No description
   * @name GetTasks
   * @request POST:/get-tasks
   * @response `200` `(Task)[]` Ok
   * @response `400` `string`
   */
  export namespace GetTasks {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetTasksRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Task[];
  }
}

export namespace GetTasksConnection {
  /**
   * No description
   * @name GetTasksConnection
   * @request POST:/get-tasks-connection
   * @response `200` `TaskConnection` Ok
   * @response `400` `string`
   */
  export namespace GetTasksConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetTasksConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = TaskConnection;
  }
}

export namespace GetUploadTasks {
  /**
   * No description
   * @name GetUploadTasks
   * @request POST:/get-upload-tasks
   * @response `200` `(UploadTask)[]` Ok
   * @response `400` `string`
   */
  export namespace GetUploadTasks {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetUploadTasksRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = UploadTask[];
  }
}

export namespace GetUploadTasksConnection {
  /**
   * No description
   * @name GetUploadTasksConnection
   * @request POST:/get-upload-tasks-connection
   * @response `200` `UploadTaskConnection` Ok
   * @response `400` `string`
   */
  export namespace GetUploadTasksConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetUploadTasksConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = UploadTaskConnection;
  }
}

export namespace GetUsbDevices {
  /**
   * No description
   * @name GetUsbDevices
   * @request POST:/get-usb-devices
   * @response `200` `(UsbDevice)[]` Ok
   * @response `400` `string`
   */
  export namespace GetUsbDevices {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetUsbDevicesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = UsbDevice[];
  }
}

export namespace GetUsbDevicesConnection {
  /**
   * No description
   * @name GetUsbDevicesConnection
   * @request POST:/get-usb-devices-connection
   * @response `200` `UsbDeviceConnection` Ok
   * @response `400` `string`
   */
  export namespace GetUsbDevicesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetUsbDevicesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = UsbDeviceConnection;
  }
}

export namespace GetUserAuditLogs {
  /**
   * No description
   * @name GetUserAuditLogs
   * @request POST:/get-user-audit-logs
   * @response `200` `(UserAuditLog)[]` Ok
   * @response `400` `string`
   */
  export namespace GetUserAuditLogs {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetUserAuditLogsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = UserAuditLog[];
  }
}

export namespace GetUserAuditLogsConnection {
  /**
   * No description
   * @name GetUserAuditLogsConnection
   * @request POST:/get-user-audit-logs-connection
   * @response `200` `UserAuditLogConnection` Ok
   * @response `400` `string`
   */
  export namespace GetUserAuditLogsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetUserAuditLogsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = UserAuditLogConnection;
  }
}

export namespace GetUserRoleNexts {
  /**
   * No description
   * @name GetUserRoleNexts
   * @request POST:/get-user-role-nexts
   * @response `200` `(UserRoleNext)[]` Ok
   * @response `400` `string`
   */
  export namespace GetUserRoleNexts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetUserRoleNextsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = UserRoleNext[];
  }
}

export namespace GetUserRoleNextsConnection {
  /**
   * No description
   * @name GetUserRoleNextsConnection
   * @request POST:/get-user-role-nexts-connection
   * @response `200` `UserRoleNextConnection` Ok
   * @response `400` `string`
   */
  export namespace GetUserRoleNextsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetUserRoleNextsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = UserRoleNextConnection;
  }
}

export namespace GetUsers {
  /**
   * No description
   * @name GetUsers
   * @request POST:/get-users
   * @response `200` `(User)[]` Ok
   * @response `400` `string`
   */
  export namespace GetUsers {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetUsersRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = User[];
  }
}

export namespace GetUsersConnection {
  /**
   * No description
   * @name GetUsersConnection
   * @request POST:/get-users-connection
   * @response `200` `UserConnection` Ok
   * @response `400` `string`
   */
  export namespace GetUsersConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetUsersConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = UserConnection;
  }
}

export namespace GetVcenterAccounts {
  /**
   * No description
   * @name GetVcenterAccounts
   * @request POST:/get-vcenter-accounts
   * @response `200` `(VcenterAccount)[]` Ok
   * @response `400` `string`
   */
  export namespace GetVcenterAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVcenterAccountsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VcenterAccount[];
  }
}

export namespace GetVcenterAccountsConnection {
  /**
   * No description
   * @name GetVcenterAccountsConnection
   * @request POST:/get-vcenter-accounts-connection
   * @response `200` `VcenterAccountConnection` Ok
   * @response `400` `string`
   */
  export namespace GetVcenterAccountsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVcenterAccountsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VcenterAccountConnection;
  }
}

export namespace GetVdses {
  /**
   * No description
   * @name GetVdses
   * @request POST:/get-vdses
   * @response `200` `(Vds)[]` Ok
   * @response `400` `string`
   */
  export namespace GetVdses {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVdsesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Vds[];
  }
}

export namespace GetVdsesConnection {
  /**
   * No description
   * @name GetVdsesConnection
   * @request POST:/get-vdses-connection
   * @response `200` `VdsConnection` Ok
   * @response `400` `string`
   */
  export namespace GetVdsesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVdsesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VdsConnection;
  }
}

export namespace GetViews {
  /**
   * No description
   * @name GetViews
   * @request POST:/get-views
   * @response `200` `(View)[]` Ok
   * @response `400` `string`
   */
  export namespace GetViews {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetViewsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = View[];
  }
}

export namespace GetViewsConnection {
  /**
   * No description
   * @name GetViewsConnection
   * @request POST:/get-views-connection
   * @response `200` `ViewConnection` Ok
   * @response `400` `string`
   */
  export namespace GetViewsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetViewsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ViewConnection;
  }
}

export namespace GetVlans {
  /**
   * No description
   * @name GetVlans
   * @request POST:/get-vlans
   * @response `200` `(Vlan)[]` Ok
   * @response `400` `string`
   */
  export namespace GetVlans {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVlansRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Vlan[];
  }
}

export namespace GetVlansConnection {
  /**
   * No description
   * @name GetVlansConnection
   * @request POST:/get-vlans-connection
   * @response `200` `VlanConnection` Ok
   * @response `400` `string`
   */
  export namespace GetVlansConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVlansConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VlanConnection;
  }
}

export namespace GetVmDisks {
  /**
   * No description
   * @name GetVmDisks
   * @request POST:/get-vm-disks
   * @response `200` `(VmDisk)[]` Ok
   * @response `400` `string`
   */
  export namespace GetVmDisks {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmDisksRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmDisk[];
  }
}

export namespace GetVmDisksConnection {
  /**
   * No description
   * @name GetVmDisksConnection
   * @request POST:/get-vm-disks-connection
   * @response `200` `VmDiskConnection` Ok
   * @response `400` `string`
   */
  export namespace GetVmDisksConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmDisksConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmDiskConnection;
  }
}

export namespace GetVmEntityFilterResults {
  /**
   * No description
   * @name GetVmEntityFilterResults
   * @request POST:/get-vm-entity-filter-results
   * @response `200` `(VmEntityFilterResult)[]` Ok
   * @response `400` `string`
   */
  export namespace GetVmEntityFilterResults {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmEntityFilterResultsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmEntityFilterResult[];
  }
}

export namespace GetVmEntityFilterResultsConnection {
  /**
   * No description
   * @name GetVmEntityFilterResultsConnection
   * @request POST:/get-vm-entity-filter-results-connection
   * @response `200` `VmEntityFilterResultConnection` Ok
   * @response `400` `string`
   */
  export namespace GetVmEntityFilterResultsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmEntityFilterResultsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmEntityFilterResultConnection;
  }
}

export namespace GetVmFolders {
  /**
   * No description
   * @name GetVmFolders
   * @request POST:/get-vm-folders
   * @response `200` `(VmFolder)[]` Ok
   * @response `400` `string`
   */
  export namespace GetVmFolders {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmFoldersRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmFolder[];
  }
}

export namespace GetVmFoldersConnection {
  /**
   * No description
   * @name GetVmFoldersConnection
   * @request POST:/get-vm-folders-connection
   * @response `200` `VmFolderConnection` Ok
   * @response `400` `string`
   */
  export namespace GetVmFoldersConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmFoldersConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmFolderConnection;
  }
}

export namespace GetVmNics {
  /**
   * No description
   * @name GetVmNics
   * @request POST:/get-vm-nics
   * @response `200` `(VmNic)[]` Ok
   * @response `400` `string`
   */
  export namespace GetVmNics {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmNicsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmNic[];
  }
}

export namespace GetVmNicsConnection {
  /**
   * No description
   * @name GetVmNicsConnection
   * @request POST:/get-vm-nics-connection
   * @response `200` `VmNicConnection` Ok
   * @response `400` `string`
   */
  export namespace GetVmNicsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmNicsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmNicConnection;
  }
}

export namespace GetVmPlacementGroups {
  /**
   * No description
   * @name GetVmPlacementGroups
   * @request POST:/get-vm-placement-groups
   * @response `200` `(VmPlacementGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace GetVmPlacementGroups {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmPlacementGroupsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmPlacementGroup[];
  }
}

export namespace GetVmPlacementGroupsConnection {
  /**
   * No description
   * @name GetVmPlacementGroupsConnection
   * @request POST:/get-vm-placement-groups-connection
   * @response `200` `VmPlacementGroupConnection` Ok
   * @response `400` `string`
   */
  export namespace GetVmPlacementGroupsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmPlacementGroupsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmPlacementGroupConnection;
  }
}

export namespace GetVms {
  /**
   * No description
   * @name GetVms
   * @request POST:/get-vms
   * @response `200` `(Vm)[]` Ok
   * @response `400` `string`
   */
  export namespace GetVms {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Vm[];
  }
}

export namespace GetVmsConnection {
  /**
   * No description
   * @name GetVmsConnection
   * @request POST:/get-vms-connection
   * @response `200` `VmConnection` Ok
   * @response `400` `string`
   */
  export namespace GetVmsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmConnection;
  }
}

export namespace GetVmSnapshots {
  /**
   * No description
   * @name GetVmSnapshots
   * @request POST:/get-vm-snapshots
   * @response `200` `(VmSnapshot)[]` Ok
   * @response `400` `string`
   */
  export namespace GetVmSnapshots {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmSnapshotsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmSnapshot[];
  }
}

export namespace GetVmSnapshotsConnection {
  /**
   * No description
   * @name GetVmSnapshotsConnection
   * @request POST:/get-vm-snapshots-connection
   * @response `200` `VmSnapshotConnection` Ok
   * @response `400` `string`
   */
  export namespace GetVmSnapshotsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmSnapshotsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmSnapshotConnection;
  }
}

export namespace GetVmTemplates {
  /**
   * No description
   * @name GetVmTemplates
   * @request POST:/get-vm-templates
   * @response `200` `(VmTemplate)[]` Ok
   * @response `400` `string`
   */
  export namespace GetVmTemplates {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmTemplatesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmTemplate[];
  }
}

export namespace GetVmTemplatesConnection {
  /**
   * No description
   * @name GetVmTemplatesConnection
   * @request POST:/get-vm-templates-connection
   * @response `200` `VmTemplateConnection` Ok
   * @response `400` `string`
   */
  export namespace GetVmTemplatesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmTemplatesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmTemplateConnection;
  }
}

export namespace GetVmVolumes {
  /**
   * No description
   * @name GetVmVolumes
   * @request POST:/get-vm-volumes
   * @response `200` `(VmVolume)[]` Ok
   * @response `400` `string`
   */
  export namespace GetVmVolumes {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmVolumesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmVolume[];
  }
}

export namespace GetVmVolumesConnection {
  /**
   * No description
   * @name GetVmVolumesConnection
   * @request POST:/get-vm-volumes-connection
   * @response `200` `VmVolumeConnection` Ok
   * @response `400` `string`
   */
  export namespace GetVmVolumesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVmVolumesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VmVolumeConnection;
  }
}

export namespace GetVsphereEsxiAccounts {
  /**
   * No description
   * @name GetVsphereEsxiAccounts
   * @request POST:/get-vsphere-esxi-accounts
   * @response `200` `(VsphereEsxiAccount)[]` Ok
   * @response `400` `string`
   */
  export namespace GetVsphereEsxiAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVsphereEsxiAccountsRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VsphereEsxiAccount[];
  }
}

export namespace GetVsphereEsxiAccountsConnection {
  /**
   * No description
   * @name GetVsphereEsxiAccountsConnection
   * @request POST:/get-vsphere-esxi-accounts-connection
   * @response `200` `VsphereEsxiAccountConnection` Ok
   * @response `400` `string`
   */
  export namespace GetVsphereEsxiAccountsConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetVsphereEsxiAccountsConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = VsphereEsxiAccountConnection;
  }
}

export namespace GetWitnesses {
  /**
   * No description
   * @name GetWitnesses
   * @request POST:/get-witnesses
   * @response `200` `(Witness)[]` Ok
   * @response `400` `string`
   */
  export namespace GetWitnesses {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetWitnessesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Witness[];
  }
}

export namespace GetWitnessesConnection {
  /**
   * No description
   * @name GetWitnessesConnection
   * @request POST:/get-witnesses-connection
   * @response `200` `WitnessConnection` Ok
   * @response `400` `string`
   */
  export namespace GetWitnessesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetWitnessesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = WitnessConnection;
  }
}

export namespace GetZones {
  /**
   * No description
   * @name GetZones
   * @request POST:/get-zones
   * @response `200` `(Zone)[]` Ok
   * @response `400` `string`
   */
  export namespace GetZones {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetZonesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Zone[];
  }
}

export namespace GetZonesConnection {
  /**
   * No description
   * @name GetZonesConnection
   * @request POST:/get-zones-connection
   * @response `200` `ZoneConnection` Ok
   * @response `400` `string`
   */
  export namespace GetZonesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetZonesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ZoneConnection;
  }
}

export namespace GetZoneTopoes {
  /**
   * No description
   * @name GetZoneTopoes
   * @request POST:/get-zone-topoes
   * @response `200` `(ZoneTopo)[]` Ok
   * @response `400` `string`
   */
  export namespace GetZoneTopoes {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetZoneTopoesRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ZoneTopo[];
  }
}

export namespace GetZoneTopoesConnection {
  /**
   * No description
   * @name GetZoneTopoesConnection
   * @request POST:/get-zone-topoes-connection
   * @response `200` `ZoneTopoConnection` Ok
   * @response `400` `string`
   */
  export namespace GetZoneTopoesConnection {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetZoneTopoesConnectionRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = ZoneTopoConnection;
  }
}

export namespace UpdateGlobalAlertRule {
  /**
   * No description
   * @name UpdateGlobalAlertRule
   * @request POST:/update-global-alert-rule
   * @response `200` `(WithTaskGlobalAlertRule)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateGlobalAlertRule {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GlobalAlertRuleUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskGlobalAlertRule[];
  }
}

export namespace UpdateCustomizeAlertRule {
  /**
   * No description
   * @name UpdateCustomizeAlertRule
   * @request POST:/update-customize-alert-rule
   * @response `200` `(WithTaskGlobalAlertRule)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateCustomizeAlertRule {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomizeAlertRuleUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskGlobalAlertRule[];
  }
}

export namespace ResolveAlert {
  /**
   * No description
   * @name ResolveAlert
   * @request POST:/resolve-alert
   * @response `200` `(WithTaskAlert)[]` Ok
   * @response `400` `string`
   */
  export namespace ResolveAlert {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ResolveAlertParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskAlert[];
  }
}

export namespace CreateBrickTopo {
  /**
   * No description
   * @name CreateBrickTopo
   * @request POST:/create-brick-topo
   * @response `200` `(WithTaskBrickTopo)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateBrickTopo {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BrickTopoCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskBrickTopo[];
  }
}

export namespace UpdateBrickTopo {
  /**
   * No description
   * @name UpdateBrickTopo
   * @request POST:/update-brick-topo
   * @response `200` `(WithTaskBrickTopo)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateBrickTopo {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BrickTopoUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskBrickTopo[];
  }
}

export namespace MoveBrickTopo {
  /**
   * No description
   * @name MoveBrickTopo
   * @request POST:/move-brick-topo
   * @response `200` `(WithTaskBrickTopo)[]` Ok
   * @response `400` `string`
   */
  export namespace MoveBrickTopo {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BrickTopoMoveParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskBrickTopo[];
  }
}

export namespace DeleteBrickTopo {
  /**
   * No description
   * @name DeleteBrickTopo
   * @request POST:/delete-brick-topo
   * @response `200` `(WithTaskDeleteBrickTopo)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteBrickTopo {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BrickTopoDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteBrickTopo[];
  }
}

export namespace ConnectCluster {
  /**
   * No description
   * @name ConnectCluster
   * @request POST:/connect-cluster
   * @response `200` `(WithTaskCluster)[]` Ok
   * @response `400` `string`
   */
  export namespace ConnectCluster {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClusterCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskCluster[];
  }
}

export namespace UpdateCluster {
  /**
   * No description
   * @name UpdateCluster
   * @request POST:/update-cluster
   * @response `200` `(WithTaskCluster)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateCluster {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClusterUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskCluster[];
  }
}

export namespace UpdateClusterLicense {
  /**
   * No description
   * @name UpdateClusterLicense
   * @request POST:/update-cluster-license
   * @response `200` `(WithTaskCluster)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateClusterLicense {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClusterLicenseUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskCluster[];
  }
}

export namespace DeleteCluster {
  /**
   * No description
   * @name DeleteCluster
   * @request POST:/delete-cluster
   * @response `200` `(WithTaskDeleteCluster)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteCluster {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClusterDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteCluster[];
  }
}

export namespace CreateConsistencySnapshotGroup {
  /**
   * No description
   * @name CreateConsistencyGroupSnapshot
   * @request POST:/create-consistency-snapshot-group
   * @response `200` `(WithTaskConsistencyGroupSnapshot)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateConsistencyGroupSnapshot {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConsistencyGroupSnapshotCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskConsistencyGroupSnapshot[];
  }
}

export namespace RollbackConsistencySnapshotGroup {
  /**
   * No description
   * @name UpdateConsistencyGroupSnapshot
   * @request POST:/rollback-consistency-snapshot-group
   * @response `200` `(WithTaskConsistencyGroupSnapshot)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateConsistencyGroupSnapshot {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConsistencyGroupSnapshotUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskConsistencyGroupSnapshot[];
  }
}

export namespace DeleteConsistencySnapshotGroup {
  /**
   * No description
   * @name DeleteConsistencyGroupSnapshot
   * @request POST:/delete-consistency-snapshot-group
   * @response `200` `(WithTaskDeleteConsistencyGroupSnapshot)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteConsistencyGroupSnapshot {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConsistencyGroupSnapshotDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteConsistencyGroupSnapshot[];
  }
}

export namespace CreateConsistencyGroup {
  /**
   * No description
   * @name CreateConsistencyGroup
   * @request POST:/create-consistency-group
   * @response `200` `(WithTaskConsistencyGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateConsistencyGroup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConsistencyGroupCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskConsistencyGroup[];
  }
}

export namespace UpdateConsistencyGroup {
  /**
   * No description
   * @name UpdateConsistencyGroup
   * @request POST:/update-consistency-group
   * @response `200` `(WithTaskConsistencyGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateConsistencyGroup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConsistencyGroupUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskConsistencyGroup[];
  }
}

export namespace DeleteConsistencyGroup {
  /**
   * No description
   * @name DeleteConsistencyGroup
   * @request POST:/delete-consistency-group
   * @response `200` `(WithTaskDeleteConsistencyGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteConsistencyGroup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConsistencyGroupDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteConsistencyGroup[];
  }
}

export namespace CreateDatacenter {
  /**
   * No description
   * @name CreateDatacenter
   * @request POST:/create-datacenter
   * @response `200` `(WithTaskDatacenter)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateDatacenter {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DatacenterCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDatacenter[];
  }
}

export namespace UpdateDatacenter {
  /**
   * No description
   * @name UpdateDatacenter
   * @request POST:/update-datacenter
   * @response `200` `(WithTaskDatacenter)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateDatacenter {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DatacenterUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDatacenter[];
  }
}

export namespace DeleteDatacenter {
  /**
   * No description
   * @name DeleteDatacenter
   * @request POST:/delete-datacenter
   * @response `200` `(WithTaskDeleteDatacenter)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteDatacenter {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DatacenterDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteDatacenter[];
  }
}

export namespace MountDisk {
  /**
   * No description
   * @name MountDisk
   * @request POST:/mount-disk
   * @response `200` `(WithTaskDisk)[]` Ok
   * @response `400` `string`
   */
  export namespace MountDisk {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DiskMountParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDisk[];
  }
}

export namespace UnmountDisk {
  /**
   * No description
   * @name UnmountDisk
   * @request POST:/unmount-disk
   * @response `200` `(WithTaskDisk)[]` Ok
   * @response `400` `string`
   */
  export namespace UnmountDisk {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DiskUnmountParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDisk[];
  }
}

export namespace CreateEntityFilter {
  /**
   * No description
   * @name CreateEntityFilter
   * @request POST:/create-entity-filter
   * @response `200` `(WithTaskEntityFilter)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateEntityFilter {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = EntityFilterCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskEntityFilter[];
  }
}

export namespace UpdateEntityFilter {
  /**
   * No description
   * @name UpdateEntityFilter
   * @request POST:/update-entity-filter
   * @response `200` `(WithTaskEntityFilter)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateEntityFilter {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = EntityFilterUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskEntityFilter[];
  }
}

export namespace DeleteEntityFilter {
  /**
   * No description
   * @name DeleteEntityFilter
   * @request POST:/delete-entity-filter
   * @response `200` `(WithTaskDeleteEntityFilter)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteEntityFilter {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = EntityFilterDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteEntityFilter[];
  }
}

export namespace CreateGraph {
  /**
   * No description
   * @name CreateGraph
   * @request POST:/create-graph
   * @response `200` `(WithTaskGraph)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateGraph {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GraphCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskGraph[];
  }
}

export namespace UpdateGraph {
  /**
   * No description
   * @name UpdateGraph
   * @request POST:/update-graph
   * @response `200` `(WithTaskGraph)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateGraph {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GraphUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskGraph[];
  }
}

export namespace DeleteGraph {
  /**
   * No description
   * @name DeleteGraph
   * @request POST:/delete-graph
   * @response `200` `(WithTaskDeleteGraph)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteGraph {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GraphDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteGraph[];
  }
}

export namespace CreateHost {
  /**
   * No description
   * @name CreateHost
   * @request POST:/create-host
   * @response `200` `(WithTaskBatchHosts)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateHost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = HostCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskBatchHosts[];
  }
}

export namespace TriggerDiskBlink {
  /**
   * No description
   * @name TriggerDiskBlink
   * @request POST:/trigger-disk-blink
   * @response `200` `(WithTaskHost)[]` Ok
   * @response `400` `string`
   */
  export namespace TriggerDiskBlink {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TriggerDiskBlinkParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskHost[];
  }
}

export namespace UpdateHost {
  /**
   * No description
   * @name UpdateHost
   * @request POST:/update-host
   * @response `200` `(WithTaskHost)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateHost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = HostUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskHost[];
  }
}

export namespace CreateIscsiLunSnapshot {
  /**
   * No description
   * @name CreateIscsiLunSnapshot
   * @request POST:/create-iscsi-lun-snapshot
   * @response `200` `(WithTaskIscsiLunSnapshot)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateIscsiLunSnapshot {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IscsiLunSnapshotCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskIscsiLunSnapshot[];
  }
}

export namespace DeleteIscsiLunSnapshot {
  /**
   * No description
   * @name DeleteIscsiLunSnapshot
   * @request POST:/delete-iscsi-lun-snapshot
   * @response `200` `(WithTaskDeleteIscsiLunSnapshot)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteIscsiLunSnapshot {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IscsiLunSnapshotDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteIscsiLunSnapshot[];
  }
}

export namespace CreateIscsiLun {
  /**
   * No description
   * @name CreateIscsiLun
   * @request POST:/create-iscsi-lun
   * @response `200` `(WithTaskIscsiLun)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateIscsiLun {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IscsiLunCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskIscsiLun[];
  }
}

export namespace UpdateIscsiLun {
  /**
   * No description
   * @name UpdateIscsiLun
   * @request POST:/update-iscsi-lun
   * @response `200` `(WithTaskIscsiLun)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateIscsiLun {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IscsiLunUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskIscsiLun[];
  }
}

export namespace DeleteIscsiLun {
  /**
   * No description
   * @name DeleteIscsiLun
   * @request POST:/delete-iscsi-lun
   * @response `200` `(WithTaskDeleteIscsiLun)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteIscsiLun {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IscsiLunDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteIscsiLun[];
  }
}

export namespace CloneIscsiLunFromSnapshot {
  /**
   * No description
   * @name CloneIscsiLunFromSnapshot
   * @request POST:/clone-iscsi-lun-from-snapshot
   * @response `200` `(WithTaskIscsiLun)[]` Ok
   * @response `400` `string`
   */
  export namespace CloneIscsiLunFromSnapshot {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IscsiLunCloneParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskIscsiLun[];
  }
}

export namespace RollbackIscsiLunFromSnapshot {
  /**
   * No description
   * @name RollbackIscsiLunFromSnapshot
   * @request POST:/rollback-iscsi-lun-from-snapshot
   * @response `200` `(WithTaskIscsiLun)[]` Ok
   * @response `400` `string`
   */
  export namespace RollbackIscsiLunFromSnapshot {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IscsiLunRollbackParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskIscsiLun[];
  }
}

export namespace CreateIscsiTarget {
  /**
   * No description
   * @name CreateIscsiTarget
   * @request POST:/create-iscsi-target
   * @response `200` `(WithTaskIscsiTarget)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateIscsiTarget {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IscsiTargetCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskIscsiTarget[];
  }
}

export namespace UpdateIscsiTarget {
  /**
   * No description
   * @name UpdateIscsiTarget
   * @request POST:/update-iscsi-target
   * @response `200` `(WithTaskIscsiTarget)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateIscsiTarget {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IscsiTargetUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskIscsiTarget[];
  }
}

export namespace DeleteIscsiTarget {
  /**
   * No description
   * @name DeleteIscsiTarget
   * @request POST:/delete-iscsi-target
   * @response `200` `(WithTaskDeleteIscsiTarget)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteIscsiTarget {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IscsiTargetDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteIscsiTarget[];
  }
}

export namespace UploadElfImage {
  /**
   * No description
   * @name CreateElfImage
   * @request POST:/upload-elf-image
   * @response `200` `(UploadTask)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateElfImage {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      file: File;
      cluster_id: string;
      name: string;
      size: string;
      description: string;
      upload_task_id: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = UploadTask[];
  }
}

export namespace UpdateElfImage {
  /**
   * No description
   * @name UpdateElfImage
   * @request POST:/update-elf-image
   * @response `200` `(WithTaskElfImage)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateElfImage {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ElfImageUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskElfImage[];
  }
}

export namespace DeleteElfImage {
  /**
   * No description
   * @name DeleteElfImage
   * @request POST:/delete-elf-image
   * @response `200` `(WithTaskDeleteElfImage)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteElfImage {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ElfImageDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteElfImage[];
  }
}

export namespace CreateLabel {
  /**
   * No description
   * @name CreateLabel
   * @request POST:/create-label
   * @response `200` `(WithTaskLabel)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateLabel {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LabelCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskLabel[];
  }
}

export namespace UpdateLabel {
  /**
   * No description
   * @name UpdateLabel
   * @request POST:/update-label
   * @response `200` `(WithTaskLabel)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateLabel {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LabelUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskLabel[];
  }
}

export namespace AddLabelsToResources {
  /**
   * No description
   * @name AddLabelsToResources
   * @request POST:/add-labels-to-resources
   * @response `200` `(WithTaskLabel)[]` Ok
   * @response `400` `string`
   */
  export namespace AddLabelsToResources {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddLabelsToResourcesParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskLabel[];
  }
}

export namespace RemoveLabelsFromResources {
  /**
   * No description
   * @name RemoveLabelsFromResources
   * @request POST:/remove-labels-from-resources
   * @response `200` `(WithTaskLabel)[]` Ok
   * @response `400` `string`
   */
  export namespace RemoveLabelsFromResources {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RemoveLabelsFromResourcesParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskLabel[];
  }
}

export namespace DeleteLabel {
  /**
   * No description
   * @name DeleteLabel
   * @request POST:/delete-label
   * @response `200` `(WithTaskDeleteLabel)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteLabel {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LabelDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteLabel[];
  }
}

export namespace UpdateLicense {
  /**
   * No description
   * @name UpdateDeploy
   * @request POST:/update-license
   * @response `200` `WithTaskLicense` Ok
   * @response `400` `string`
   */
  export namespace UpdateDeploy {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LicenseUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskLicense;
  }
}

export namespace CreateNamespaceGroup {
  /**
   * No description
   * @name CreateNamespaceGroup
   * @request POST:/create-namespace-group
   * @response `200` `(WithTaskNamespaceGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateNamespaceGroup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NamespaceGroupCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskNamespaceGroup[];
  }
}

export namespace UpdateNamespaceGroup {
  /**
   * No description
   * @name UpdateNamespaceGroup
   * @request POST:/update-namespace-group
   * @response `200` `(WithTaskNamespaceGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateNamespaceGroup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NamespaceGroupUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskNamespaceGroup[];
  }
}

export namespace DeleteNamespaceGroup {
  /**
   * No description
   * @name DeleteNamespaceGroup
   * @request POST:/delete-namespace-group
   * @response `200` `(WithTaskDeleteNamespaceGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteNamespaceGroup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NamespaceGroupDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteNamespaceGroup[];
  }
}

export namespace CreateNfsExport {
  /**
   * No description
   * @name CreateNfsExport
   * @request POST:/create-nfs-export
   * @response `200` `(WithTaskNfsExport)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateNfsExport {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NfsExportCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskNfsExport[];
  }
}

export namespace UpdateNfsExport {
  /**
   * No description
   * @name UpdateNfsExport
   * @request POST:/update-nfs-export
   * @response `200` `(WithTaskNfsExport)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateNfsExport {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NfsExportUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskNfsExport[];
  }
}

export namespace DeleteNfsExport {
  /**
   * No description
   * @name DeleteNfsExport
   * @request POST:/delete-nfs-export
   * @response `200` `(WithTaskDeleteNfsExport)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteNfsExport {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NfsExportDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteNfsExport[];
  }
}

export namespace UpdateNic {
  /**
   * No description
   * @name UpdateNic
   * @request POST:/update-nic
   * @response `200` `(WithTaskNic)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateNic {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NicUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskNic[];
  }
}

export namespace MoveNodeTopo {
  /**
   * No description
   * @name UpdateNodeTopo
   * @request POST:/move-node-topo
   * @response `200` `(WithTaskNodeTopo)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateNodeTopo {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NodeTopoUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskNodeTopo[];
  }
}

export namespace CreateNvmfNamespaceSnapshot {
  /**
   * No description
   * @name CreateNvmfNamespaceSnapshot
   * @request POST:/create-nvmf-namespace-snapshot
   * @response `200` `(WithTaskNvmfNamespaceSnapshot)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateNvmfNamespaceSnapshot {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NvmfNamespaceSnapshotCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskNvmfNamespaceSnapshot[];
  }
}

export namespace DeleteNvmfNamespaceSnapshot {
  /**
   * No description
   * @name DeleteNvmfNamespaceSnapshot
   * @request POST:/delete-nvmf-namespace-snapshot
   * @response `200` `(WithTaskDeleteNvmfNamespaceSnapshot)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteNvmfNamespaceSnapshot {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NvmfNamespaceSnapshotDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteNvmfNamespaceSnapshot[];
  }
}

export namespace CreateNvmfNamespace {
  /**
   * No description
   * @name CreateNvmfNamespace
   * @request POST:/create-nvmf-namespace
   * @response `200` `(WithTaskNvmfNamespace)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateNvmfNamespace {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NvmfNamespaceCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskNvmfNamespace[];
  }
}

export namespace UpdateNvmfNamespace {
  /**
   * No description
   * @name UpdateNvmfNamespace
   * @request POST:/update-nvmf-namespace
   * @response `200` `(WithTaskNvmfNamespace)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateNvmfNamespace {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NvmfNamespaceUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskNvmfNamespace[];
  }
}

export namespace DeleteNvmfNamespace {
  /**
   * No description
   * @name DeleteNvmfNamespace
   * @request POST:/delete-nvmf-namespace
   * @response `200` `(WithTaskDeleteNvmfNamespace)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteNvmfNamespace {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NvmfNamespaceDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteNvmfNamespace[];
  }
}

export namespace CloneNvmfNamespaceFromSnapshot {
  /**
   * No description
   * @name CloneNvmfNamespaceFromSnapshot
   * @request POST:/clone-nvmf-namespace-from-snapshot
   * @response `200` `(WithTaskNvmfNamespace)[]` Ok
   * @response `400` `string`
   */
  export namespace CloneNvmfNamespaceFromSnapshot {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NvmfNamespaceCloneParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskNvmfNamespace[];
  }
}

export namespace RollbackNvmfNamespaceFromSnapshot {
  /**
   * No description
   * @name RollbackNvmfNamespaceFromSnapshot
   * @request POST:/rollback-nvmf-namespace-from-snapshot
   * @response `200` `(WithTaskNvmfNamespace)[]` Ok
   * @response `400` `string`
   */
  export namespace RollbackNvmfNamespaceFromSnapshot {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NvmfNamespaceRollbackParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskNvmfNamespace[];
  }
}

export namespace CreateNvmfSubsystem {
  /**
   * No description
   * @name CreateNvmfSubsystem
   * @request POST:/create-nvmf-subsystem
   * @response `200` `(WithTaskNvmfSubsystem)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateNvmfSubsystem {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NvmfSubsystemCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskNvmfSubsystem[];
  }
}

export namespace UpdateNvmfSubsystem {
  /**
   * No description
   * @name UpdateNvmfSubsystem
   * @request POST:/update-nvmf-subsystem
   * @response `200` `(WithTaskNvmfSubsystem)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateNvmfSubsystem {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NvmfSubsystemUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskNvmfSubsystem[];
  }
}

export namespace DeleteNvmfSubsystem {
  /**
   * No description
   * @name DeleteNvmfSubsystem
   * @request POST:/delete-nvmf-subsystem
   * @response `200` `(WithTaskDeleteNvmfSubsystem)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteNvmfSubsystem {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NvmfSubsystemDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteNvmfSubsystem[];
  }
}

export namespace CreateOrganization {
  /**
   * No description
   * @name CreateOrganization
   * @request POST:/create-organization
   * @response `200` `(WithTaskOrganization)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateOrganization {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = OrganizationCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskOrganization[];
  }
}

export namespace UpdateOrganization {
  /**
   * No description
   * @name UpdateOrganization
   * @request POST:/update-organization
   * @response `200` `(WithTaskOrganization)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateOrganization {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = OrganizationUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskOrganization[];
  }
}

export namespace DeleteOrganization {
  /**
   * No description
   * @name DeleteOrganization
   * @request POST:/delete-organization
   * @response `200` `(WithTaskDeleteOrganization)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteOrganization {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = OrganizationDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteOrganization[];
  }
}

export namespace CreateRackTopo {
  /**
   * No description
   * @name CreateRackTopo
   * @request POST:/create-rack-topo
   * @response `200` `(WithTaskRackTopo)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateRackTopo {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RackTopoCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskRackTopo[];
  }
}

export namespace UpdateRackTopo {
  /**
   * No description
   * @name UpdateRackTopo
   * @request POST:/update-rack-topo
   * @response `200` `(WithTaskRackTopo)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateRackTopo {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RackTopoUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskRackTopo[];
  }
}

export namespace DeleteRackTopo {
  /**
   * No description
   * @name DeleteRackTopo
   * @request POST:/delete-rack-topo
   * @response `200` `(WithTaskDeleteRackTopo)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteRackTopo {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RackTopoDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteRackTopo[];
  }
}

export namespace UpdateGlobalRecycleBinSetting {
  /**
   * No description
   * @name UpdateGlobalRecycleBinSetting
   * @request POST:/update-global-recycle-bin-setting
   * @response `200` `WithTaskGlobalSettings` Ok
   * @response `400` `string`
   */
  export namespace UpdateGlobalRecycleBinSetting {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GlobalRecycleBinUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskGlobalSettings;
  }
}

export namespace CreateClusterRecycleBinSetting {
  /**
   * No description
   * @name CreateClusterRecycleBinSetting
   * @request POST:/create-cluster-recycle-bin-setting
   * @response `200` `(WithTaskClusterSettings)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateClusterRecycleBinSetting {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClusterRecycleBinCreationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskClusterSettings[];
  }
}

export namespace UpdateClusterRecycleBinSetting {
  /**
   * No description
   * @name UpdateClusterRecycleBinSetting
   * @request POST:/update-cluster-recycle-bin-setting
   * @response `200` `(WithTaskClusterSettings)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateClusterRecycleBinSetting {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClusterRecycleBinUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskClusterSettings[];
  }
}

export namespace DeleteClusterRecycleBinSetting {
  /**
   * No description
   * @name DeleteClusterRecycleBinSetting
   * @request POST:/delete-cluster-recycle-bin-setting
   * @response `200` `(WithTaskDeleteClusterRecycleBin)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteClusterRecycleBinSetting {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClusterRecycleBinDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteClusterRecycleBin[];
  }
}

export namespace CreateReportTemplate {
  /**
   * No description
   * @name CreateReportTemplate
   * @request POST:/create-report-template
   * @response `200` `(WithTaskReportTemplate)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateReportTemplate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ReportTemplateCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskReportTemplate[];
  }
}

export namespace UpdateReportTemplate {
  /**
   * No description
   * @name UpdateReportTemplate
   * @request POST:/update-report-template
   * @response `200` `(WithTaskReportTemplate)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateReportTemplate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ReportTemplateUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskReportTemplate[];
  }
}

export namespace GenerateFromReportTemplate {
  /**
   * No description
   * @name GenerateFromReportTemplate
   * @request POST:/generate-from-report-template
   * @response `200` `(WithTaskReportTask)[]` Ok
   * @response `400` `string`
   */
  export namespace GenerateFromReportTemplate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ReporteTemplateGenerationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskReportTask[];
  }
}

export namespace DeleteReportTemplate {
  /**
   * No description
   * @name DeleteReportTemplate
   * @request POST:/delete-report-template
   * @response `200` `(WithTaskDeleteReportTemplate)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteReportTemplate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ReportTemplateDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteReportTemplate[];
  }
}

export namespace CreateRole {
  /**
   * No description
   * @name CreateRole
   * @request POST:/create-role
   * @response `200` `(WithTaskUserRoleNext)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateRole {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RoleCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskUserRoleNext[];
  }
}

export namespace UpdateRole {
  /**
   * No description
   * @name UpdateRole
   * @request POST:/update-role
   * @response `200` `(WithTaskUserRoleNext)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateRole {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RoleUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskUserRoleNext[];
  }
}

export namespace DeleteRole {
  /**
   * No description
   * @name DeleteRole
   * @request POST:/delete-role
   * @response `200` `(WithTaskDeleteRole)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteRole {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RoleDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteRole[];
  }
}

export namespace RollbackSnapshotGroup {
  /**
   * No description
   * @name RollbackSnapshotGroup
   * @request POST:/rollback-snapshot-group
   * @response `200` `(WithTaskSnapshotGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace RollbackSnapshotGroup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnapshotGroupRollbackParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskSnapshotGroup[];
  }
}

export namespace CloneSnapshotGroup {
  /**
   * No description
   * @name CloneSnapshotGroup
   * @request POST:/clone-snapshot-group
   * @response `200` `(WithTaskSnapshotGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace CloneSnapshotGroup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnapshotGroupCloneParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskSnapshotGroup[];
  }
}

export namespace KeepSnapshotGroup {
  /**
   * No description
   * @name KeepSnapshotGroup
   * @request POST:/keep-snapshot-group
   * @response `200` `(WithTaskSnapshotGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace KeepSnapshotGroup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnapshotGroupKeepParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskSnapshotGroup[];
  }
}

export namespace DeleteSnapshotGroup {
  /**
   * No description
   * @name DeleteSnapshotGroup
   * @request POST:/delete-snapshot-group
   * @response `200` `(WithTaskDeleteSnapshotGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteSnapshotGroup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnapshotGroupDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteSnapshotGroup[];
  }
}

export namespace CreateSnapshotPlan {
  /**
   * No description
   * @name CreateSnapshotPlan
   * @request POST:/create-snapshot-plan
   * @response `200` `(WithTaskSnapshotPlan)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateSnapshotPlan {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnapshotPlanCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskSnapshotPlan[];
  }
}

export namespace UpdateSnapshotPlan {
  /**
   * No description
   * @name UpdateSnapshotPlan
   * @request POST:/update-snapshot-plan
   * @response `200` `(WithTaskSnapshotPlan)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateSnapshotPlan {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnapshotPlanUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskSnapshotPlan[];
  }
}

export namespace DeleteSnapshotPlan {
  /**
   * No description
   * @name DeleteSnapshotPlan
   * @request POST:/delete-snapshot-plan
   * @response `200` `(WithTaskDeleteSnapshotPlan)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteSnapshotPlan {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnapshotPlanDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteSnapshotPlan[];
  }
}

export namespace ExecuteSnapshotPlan {
  /**
   * No description
   * @name ExecuteSnapshotPlan
   * @request POST:/execute-snapshot-plan
   * @response `200` `(WithTaskSnapshotPlan)[]` Ok
   * @response `400` `string`
   */
  export namespace ExecuteSnapshotPlan {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnapshotPlanExecutionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskSnapshotPlan[];
  }
}

export namespace SuspendSnapshotPlan {
  /**
   * No description
   * @name SuspendSnapshotPlan
   * @request POST:/suspend-snapshot-plan
   * @response `200` `(WithTaskSnapshotPlan)[]` Ok
   * @response `400` `string`
   */
  export namespace SuspendSnapshotPlan {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnapshotPlanSuspendedParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskSnapshotPlan[];
  }
}

export namespace ResumeSnapshotPlan {
  /**
   * No description
   * @name ResumeSnapshotPlan
   * @request POST:/resume-snapshot-plan
   * @response `200` `(WithTaskSnapshotPlan)[]` Ok
   * @response `400` `string`
   */
  export namespace ResumeSnapshotPlan {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnapshotPlanResumeParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskSnapshotPlan[];
  }
}

export namespace CreateSnmpTransport {
  /**
   * No description
   * @name CreateSnmpTransport
   * @request POST:/create-snmp-transport
   * @response `200` `(WithTaskSnmpTransport)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateSnmpTransport {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnmpTransportCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskSnmpTransport[];
  }
}

export namespace UpdateSnmpTransport {
  /**
   * No description
   * @name UpdateSnmpTransport
   * @request POST:/update-snmp-transport
   * @response `200` `(WithTaskSnmpTransport)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateSnmpTransport {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnmpTransportUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskSnmpTransport[];
  }
}

export namespace DeleteSnmpTransport {
  /**
   * No description
   * @name DeleteSnmpTransport
   * @request POST:/delete-snmp-transport
   * @response `200` `(WithTaskDeleteSnmpTransport)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteSnmpTransport {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnmpTransportDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteSnmpTransport[];
  }
}

export namespace CreateSnmpTrapReceiver {
  /**
   * No description
   * @name CreateSnmpTrapReceiver
   * @request POST:/create-snmp-trap-receiver
   * @response `200` `(WithTaskSnmpTrapReceiver)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateSnmpTrapReceiver {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnmpTrapReceiverCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskSnmpTrapReceiver[];
  }
}

export namespace UpdateSnmpTrapReceiver {
  /**
   * No description
   * @name UpdateSnmpTrapReceiver
   * @request POST:/update-snmp-trap-receiver
   * @response `200` `(WithTaskSnmpTrapReceiver)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateSnmpTrapReceiver {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnmpTrapReceiverUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskSnmpTrapReceiver[];
  }
}

export namespace DeleteSnmpTrapReceiver {
  /**
   * No description
   * @name DeleteSnmpTrapReceiver
   * @request POST:/delete-snmp-trap-receiver
   * @response `200` `(WithTaskDeleteSnmpTrapReceiver)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteSnmpTrapReceiver {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SnmpTrapReceiverDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteSnmpTrapReceiver[];
  }
}

export namespace MountUsbDevice {
  /**
   * No description
   * @name MountUsbDevice
   * @request POST:/mount-usb-device
   * @response `200` `(WithTaskUsbDevice)[]` Ok
   * @response `400` `string`
   */
  export namespace MountUsbDevice {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UsbDeviceMountParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskUsbDevice[];
  }
}

export namespace UnmountUsbDevice {
  /**
   * No description
   * @name UnmountUsbDevice
   * @request POST:/unmount-usb-device
   * @response `200` `(WithTaskUsbDevice)[]` Ok
   * @response `400` `string`
   */
  export namespace UnmountUsbDevice {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UsbDeviceUnmountParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskUsbDevice[];
  }
}

export namespace Login {
  /**
   * No description
   * @name Login
   * @request POST:/login
   * @response `200` `WithTaskTokenString` Ok
   * @response `400` `string`
   */
  export namespace Login {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoginInput;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskTokenString;
  }
}

export namespace CreateUser {
  /**
   * No description
   * @name CreateUser
   * @request POST:/create-user
   * @response `200` `(WithTaskUser)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskUser[];
  }
}

export namespace UpdateUser {
  /**
   * No description
   * @name UpdateUser
   * @request POST:/update-user
   * @response `200` `(WithTaskUser)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskUser[];
  }
}

export namespace DeleteUser {
  /**
   * No description
   * @name DeleteUser
   * @request POST:/delete-user
   * @response `200` `(WithTaskDeleteUser)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteUser[];
  }
}

export namespace CreateVdsWithMigrateVlan {
  /**
   * No description
   * @name CreateVdsWithMigrateVlan
   * @request POST:/create-vds-with-migrate-vlan
   * @response `200` `(WithTaskVds)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateVdsWithMigrateVlan {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VdsCreationWithMigrateVlanParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVds[];
  }
}

export namespace CreateVdsWithAccessVlan {
  /**
   * No description
   * @name CreateVdsWithAccessVlan
   * @request POST:/create-vds-with-access-vlan
   * @response `200` `(WithTaskVds)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateVdsWithAccessVlan {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VdsCreationWithMAccessVlanParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVds[];
  }
}

export namespace CreateVds {
  /**
   * No description
   * @name CreateVds
   * @request POST:/create-vds
   * @response `200` `(WithTaskVds)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateVds {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VdsCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVds[];
  }
}

export namespace UpdateVds {
  /**
   * No description
   * @name UpdateVds
   * @request POST:/update-vds
   * @response `200` `(WithTaskVds)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateVds {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VdsUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVds[];
  }
}

export namespace DeleteVds {
  /**
   * No description
   * @name DeleteVds
   * @request POST:/delete-vds
   * @response `200` `(WithTaskDeleteVds)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteVds {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VdsDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteVds[];
  }
}

export namespace CreateView {
  /**
   * No description
   * @name CreateView
   * @request POST:/create-view
   * @response `200` `(WithTaskView)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateView {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ViewCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskView[];
  }
}

export namespace UpdateView {
  /**
   * No description
   * @name UpdateView
   * @request POST:/update-view
   * @response `200` `(WithTaskView)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateView {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ViewUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskView[];
  }
}

export namespace DeleteView {
  /**
   * No description
   * @name DeleteView
   * @request POST:/delete-view
   * @response `200` `(WithTaskDeleteView)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteView {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ViewDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteView[];
  }
}

export namespace CreateVmVlan {
  /**
   * No description
   * @name CreateVmVlan
   * @request POST:/create-vm-vlan
   * @response `200` `(WithTaskVlan)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateVmVlan {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmVlanCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVlan[];
  }
}

export namespace UpdateVmVlan {
  /**
   * No description
   * @name UpdateVlan
   * @request POST:/update-vm-vlan
   * @response `200` `(WithTaskVlan)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateVlan {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmVlanUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVlan[];
  }
}

export namespace UpdateManagementVlan {
  /**
   * No description
   * @name UpdateManagementVlan
   * @request POST:/update-management-vlan
   * @response `200` `(WithTaskVlan)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateManagementVlan {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ManagementVlanUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVlan[];
  }
}

export namespace UpdateMigrationVlan {
  /**
   * No description
   * @name UpdateMigrationVlan
   * @request POST:/update-migration-vlan
   * @response `200` `(WithTaskVlan)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateMigrationVlan {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MigrationVlanUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVlan[];
  }
}

export namespace DeleteVmVlan {
  /**
   * No description
   * @name DeleteVlan
   * @request POST:/delete-vm-vlan
   * @response `200` `(WithTaskDeleteVlan)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteVlan {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VlanDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteVlan[];
  }
}

export namespace CreateVmFolder {
  /**
   * No description
   * @name CreateVmFolder
   * @request POST:/create-vm-folder
   * @response `200` `(WithTaskVmFolder)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateVmFolder {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmFolderCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVmFolder[];
  }
}

export namespace UpdateVmFolder {
  /**
   * No description
   * @name UpdateVmFolder
   * @request POST:/update-vm-folder
   * @response `200` `(WithTaskVmFolder)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateVmFolder {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmFolderUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVmFolder[];
  }
}

export namespace DeleteVmFolder {
  /**
   * No description
   * @name DeleteVmFolder
   * @request POST:/delete-vm-folder
   * @response `200` `(WithTaskDeleteVmFolder)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteVmFolder {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmFolderDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteVmFolder[];
  }
}

export namespace CreateVmPlacementGroup {
  /**
   * No description
   * @name CreateVmPlacementGroup
   * @request POST:/create-vm-placement-group
   * @response `200` `(WithTaskVmPlacementGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateVmPlacementGroup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmPlacementGroupCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVmPlacementGroup[];
  }
}

export namespace UpdateVmPlacementGroup {
  /**
   * No description
   * @name UpdateVmPlacementGroup
   * @request POST:/update-vm-placement-group
   * @response `200` `(WithTaskVmPlacementGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateVmPlacementGroup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmPlacementGroupUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVmPlacementGroup[];
  }
}

export namespace DeleteVmPlacementGroup {
  /**
   * No description
   * @name DeleteVmPlacementGroup
   * @request POST:/delete-vm-placement-group
   * @response `200` `(WithTaskDeleteVmPlacementGroup)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteVmPlacementGroup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmPlacementGroupDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteVmPlacementGroup[];
  }
}

export namespace CreateVmSnapshot {
  /**
   * No description
   * @name CreateVmSnapshot
   * @request POST:/create-vm-snapshot
   * @response `200` `(WithTaskVmSnapshot)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateVmSnapshot {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmSnapshotCreationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVmSnapshot[];
  }
}

export namespace DeleteVmSnapshot {
  /**
   * No description
   * @name DeleteVmSnapshot
   * @request POST:/delete-vm-snapshot
   * @response `200` `(WithTaskDeleteVmSnapshot)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteVmSnapshot {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmSnapshotDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteVmSnapshot[];
  }
}

export namespace CloneVmTemplateFromVm {
  /**
   * No description
   * @name CloneVmTemplateFromVm
   * @request POST:/clone-vm-template-from-vm
   * @response `200` `(WithTaskVmTemplate)[]` Ok
   * @response `400` `string`
   */
  export namespace CloneVmTemplateFromVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmTemplateCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVmTemplate[];
  }
}

export namespace ConvertVmTemplateFromVm {
  /**
   * No description
   * @name ConvertVmTemplateFromVm
   * @request POST:/convert-vm-template-from-vm
   * @response `200` `(WithTaskVmTemplate)[]` Ok
   * @response `400` `string`
   */
  export namespace ConvertVmTemplateFromVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmTemplateCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVmTemplate[];
  }
}

export namespace UpdateVmTemplate {
  /**
   * No description
   * @name UpdateVmTemplateFromVm
   * @request POST:/update-vm-template
   * @response `200` `(WithTaskVmTemplate)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateVmTemplateFromVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmTemplateUpdationParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVmTemplate[];
  }
}

export namespace DeleteVmTemplate {
  /**
   * No description
   * @name DeleteVmTemplateFromVm
   * @request POST:/delete-vm-template
   * @response `200` `(WithTaskDeleteVmTemplate)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteVmTemplateFromVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmTemplateDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteVmTemplate[];
  }
}

export namespace CreateVmVolume {
  /**
   * No description
   * @name CreateVmVolume
   * @request POST:/create-vm-volume
   * @response `200` `(WithTaskVmVolume)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateVmVolume {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmVolumeCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVmVolume[];
  }
}

export namespace DeleteVmVolume {
  /**
   * No description
   * @name DeleteVmVolumeFromVm
   * @request POST:/delete-vm-volume
   * @response `200` `(WithTaskDeleteVmVolume)[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteVmVolumeFromVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmVolumeDeletionParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskDeleteVmVolume[];
  }
}

export namespace CreateVm {
  /**
   * No description
   * @name CreateVm
   * @request POST:/create-vm
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmCreationParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace CreateVmFromTemplate {
  /**
   * No description
   * @name CreateVmFromTemplate
   * @request POST:/create-vm-from-template
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace CreateVmFromTemplate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmCreateVmFromTemplateParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace ConvertVmTemplateToVm {
  /**
   * No description
   * @name ConvertVmTemplateToVm
   * @request POST:/convert-vm-template-to-vm
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace ConvertVmTemplateToVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConvertVmTemplateToVmParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace CloneVm {
  /**
   * No description
   * @name CloneVm
   * @request POST:/clone-vm
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace CloneVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmCloneParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace RebuildVmFromSnapshot {
  /**
   * No description
   * @name RebuildVm
   * @request POST:/rebuild-vm-from-snapshot
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace RebuildVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmRebuildParams[];
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace RollbackVm {
  /**
   * No description
   * @name RollbackVm
   * @request POST:/rollback-vm
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace RollbackVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmRollbackParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace UpdateVmBasicInfo {
  /**
   * No description
   * @name UpdateVm
   * @request POST:/update-vm-basic-info
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmUpdateParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace MoveVmToRecycle {
  /**
   * No description
   * @name MoveVmToRecycleBin
   * @request POST:/move-vm-to-recycle
   * @response `200` `({ task_id: string | null, data: (DeleteVm | null) })[]` Ok
   * @response `400` `string`
   */
  export namespace MoveVmToRecycleBin {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmOperateParams;
    export type RequestHeaders = {};
    export type ResponseBody = { task_id: string | null; data: DeleteVm | null }[];
  }
}

export namespace RecoverVmFromRecycle {
  /**
   * No description
   * @name RecoverVmFromRecycleBin
   * @request POST:/recover-vm-from-recycle
   * @response `200` `({ task_id: string | null, data: (DeleteVm | null) })[]` Ok
   * @response `400` `string`
   */
  export namespace RecoverVmFromRecycleBin {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmOperateParams;
    export type RequestHeaders = {};
    export type ResponseBody = { task_id: string | null; data: DeleteVm | null }[];
  }
}

export namespace DeleteVm {
  /**
   * No description
   * @name DeleteVm
   * @request POST:/delete-vm
   * @response `200` `({ task_id: string | null, data: (DeleteVm | null) })[]` Ok
   * @response `400` `string`
   */
  export namespace DeleteVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmOperateParams;
    export type RequestHeaders = {};
    export type ResponseBody = { task_id: string | null; data: DeleteVm | null }[];
  }
}

export namespace StartVm {
  /**
   * No description
   * @name StartVm
   * @request POST:/start-vm
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace StartVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmStartParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace RestartVm {
  /**
   * No description
   * @name RestartVm
   * @request POST:/restart-vm
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace RestartVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmOperateParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace ForceRestartVm {
  /**
   * No description
   * @name ForceRestartVm
   * @request POST:/force-restart-vm
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace ForceRestartVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmOperateParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace ShutdownVm {
  /**
   * No description
   * @name ShutDownVm
   * @request POST:/shutdown-vm
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace ShutDownVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmOperateParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace PoweroffVm {
  /**
   * No description
   * @name ForceShutDownVm
   * @request POST:/poweroff-vm
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace ForceShutDownVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmOperateParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace SuspendVm {
  /**
   * No description
   * @name SuspendVm
   * @request POST:/suspend-vm
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace SuspendVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmOperateParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace ResumeVm {
  /**
   * No description
   * @name ResumeVm
   * @request POST:/resume-vm
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace ResumeVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmOperateParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace AddVmDisk {
  /**
   * No description
   * @name AddVmDisk
   * @request POST:/add-vm-disk
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace AddVmDisk {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmAddDiskParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace UpdateVmDisk {
  /**
   * No description
   * @name UpdateVmDisk
   * @request POST:/update-vm-disk
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateVmDisk {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmUpdateDiskParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace RemoveVmDisk {
  /**
   * No description
   * @name RemoveVmDisk
   * @request POST:/remove-vm-disk
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace RemoveVmDisk {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmRemoveDiskParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace AddVmCdRom {
  /**
   * No description
   * @name AddVmCdRom
   * @request POST:/add-vm-cd-rom
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace AddVmCdRom {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmAddCdRomParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace RemoveVmCdRom {
  /**
   * No description
   * @name RemoveVmCdRom
   * @request POST:/remove-vm-cd-rom
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace RemoveVmCdRom {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmRemoveCdRomParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace AddVmNic {
  /**
   * No description
   * @name AddVmNic
   * @request POST:/add-vm-nic
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace AddVmNic {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmAddNicParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace UpdateVmNic {
  /**
   * No description
   * @name UpdateVmNic
   * @request POST:/update-vm-nic
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace UpdateVmNic {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmUpdateNicParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace RemoveVmNic {
  /**
   * No description
   * @name RemoveVmNic
   * @request POST:/remove-vm-nic
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace RemoveVmNic {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmRemoveNicParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace InstallVmtools {
  /**
   * No description
   * @name InstallVmtools
   * @request POST:/install-vmtools
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace InstallVmtools {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = InstallVmtoolsParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace MigrateVm {
  /**
   * No description
   * @name MigRateVm
   * @request POST:/migrate-vm
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace MigRateVm {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmMigrateParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace AddVmToFolder {
  /**
   * No description
   * @name AddVmToFolder
   * @request POST:/add-vm-to-folder
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace AddVmToFolder {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmAddFolderParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

export namespace RemoveVmFromFolder {
  /**
   * No description
   * @name RemoveVmToFolder
   * @request POST:/remove-vm-from-folder
   * @response `200` `(WithTaskVm)[]` Ok
   * @response `400` `string`
   */
  export namespace RemoveVmToFolder {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VmOperateParams;
    export type RequestHeaders = {};
    export type ResponseBody = WithTaskVm[];
  }
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "/" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title @tower/operation-api
 * @version 1.6.0
 * @license ISC
 * @baseUrl /
 * @contact Tower developers
 *
 * cloudtower operation API and SDK
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  getAlertNotifiers = {
    /**
     * No description
     *
     * @name GetAlertNotifiers
     * @request POST:/get-alert-notifiers
     * @response `200` `(AlertNotifier)[]` Ok
     * @response `400` `string`
     */
    getAlertNotifiers: (data: GetAlertNotifiersRequestBody, params: RequestParams = {}) =>
      this.request<AlertNotifier[], string>({
        path: `/get-alert-notifiers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getAlertNotifiersConnection = {
    /**
     * No description
     *
     * @name GetAlertNotifiersConnection
     * @request POST:/get-alert-notifiers-connection
     * @response `200` `AlertNotifierConnection` Ok
     * @response `400` `string`
     */
    getAlertNotifiersConnection: (data: GetAlertNotifiersConnectionRequestBody, params: RequestParams = {}) =>
      this.request<AlertNotifierConnection, string>({
        path: `/get-alert-notifiers-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getAlertRules = {
    /**
     * No description
     *
     * @name GetAlertRules
     * @request POST:/get-alert-rules
     * @response `200` `(AlertRule)[]` Ok
     * @response `400` `string`
     */
    getAlertRules: (data: GetAlertRulesRequestBody, params: RequestParams = {}) =>
      this.request<AlertRule[], string>({
        path: `/get-alert-rules`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getAlertRulesConnection = {
    /**
     * No description
     *
     * @name GetAlertRulesConnection
     * @request POST:/get-alert-rules-connection
     * @response `200` `AlertRuleConnection` Ok
     * @response `400` `string`
     */
    getAlertRulesConnection: (data: GetAlertRulesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<AlertRuleConnection, string>({
        path: `/get-alert-rules-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getAlerts = {
    /**
     * No description
     *
     * @name GetAlerts
     * @request POST:/get-alerts
     * @response `200` `(Alert)[]` Ok
     * @response `400` `string`
     */
    getAlerts: (data: GetAlertsRequestBody, params: RequestParams = {}) =>
      this.request<Alert[], string>({
        path: `/get-alerts`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getAlertsConnection = {
    /**
     * No description
     *
     * @name GetAlertsConnection
     * @request POST:/get-alerts-connection
     * @response `200` `AlertConnection` Ok
     * @response `400` `string`
     */
    getAlertsConnection: (data: GetAlertsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<AlertConnection, string>({
        path: `/get-alerts-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getApplications = {
    /**
     * No description
     *
     * @name GetApplications
     * @request POST:/get-applications
     * @response `200` `(Application)[]` Ok
     * @response `400` `string`
     */
    getApplications: (data: GetApplicationsRequestBody, params: RequestParams = {}) =>
      this.request<Application[], string>({
        path: `/get-applications`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getApplicationsConnection = {
    /**
     * No description
     *
     * @name GetApplicationsConnection
     * @request POST:/get-applications-connection
     * @response `200` `ApplicationConnection` Ok
     * @response `400` `string`
     */
    getApplicationsConnection: (data: GetApplicationsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<ApplicationConnection, string>({
        path: `/get-applications-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getBrickTopoes = {
    /**
     * No description
     *
     * @name GetBrickTopoes
     * @request POST:/get-brick-topoes
     * @response `200` `(BrickTopo)[]` Ok
     * @response `400` `string`
     */
    getBrickTopoes: (data: GetBrickTopoesRequestBody, params: RequestParams = {}) =>
      this.request<BrickTopo[], string>({
        path: `/get-brick-topoes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getBrickTopoesConnection = {
    /**
     * No description
     *
     * @name GetBrickTopoesConnection
     * @request POST:/get-brick-topoes-connection
     * @response `200` `BrickTopoConnection` Ok
     * @response `400` `string`
     */
    getBrickTopoesConnection: (data: GetBrickTopoesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<BrickTopoConnection, string>({
        path: `/get-brick-topoes-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getClusterImages = {
    /**
     * No description
     *
     * @name GetClusterImages
     * @request POST:/get-cluster-images
     * @response `200` `(ClusterImage)[]` Ok
     * @response `400` `string`
     */
    getClusterImages: (data: GetClusterImagesRequestBody, params: RequestParams = {}) =>
      this.request<ClusterImage[], string>({
        path: `/get-cluster-images`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getClusterImagesConnection = {
    /**
     * No description
     *
     * @name GetClusterImagesConnection
     * @request POST:/get-cluster-images-connection
     * @response `200` `ClusterImageConnection` Ok
     * @response `400` `string`
     */
    getClusterImagesConnection: (data: GetClusterImagesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<ClusterImageConnection, string>({
        path: `/get-cluster-images-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getClusters = {
    /**
     * No description
     *
     * @name GetClusters
     * @request POST:/get-clusters
     * @response `200` `(Cluster)[]` Ok
     * @response `400` `string`
     */
    getClusters: (data: GetClustersRequestBody, params: RequestParams = {}) =>
      this.request<Cluster[], string>({
        path: `/get-clusters`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getClustersConnection = {
    /**
     * No description
     *
     * @name GetClustersConnection
     * @request POST:/get-clusters-connection
     * @response `200` `ClusterConnection` Ok
     * @response `400` `string`
     */
    getClustersConnection: (data: GetClustersConnectionRequestBody, params: RequestParams = {}) =>
      this.request<ClusterConnection, string>({
        path: `/get-clusters-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getClusterSettingses = {
    /**
     * No description
     *
     * @name GetClusterSettingses
     * @request POST:/get-cluster-settingses
     * @response `200` `(ClusterSettings)[]` Ok
     * @response `400` `string`
     */
    getClusterSettingses: (data: GetClusterSettingsesRequestBody, params: RequestParams = {}) =>
      this.request<ClusterSettings[], string>({
        path: `/get-cluster-settingses`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getClusterSettingsesConnection = {
    /**
     * No description
     *
     * @name GetClusterSettingsesConnection
     * @request POST:/get-cluster-settingses-connection
     * @response `200` `ClusterSettingsConnection` Ok
     * @response `400` `string`
     */
    getClusterSettingsesConnection: (data: GetClusterSettingsesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<ClusterSettingsConnection, string>({
        path: `/get-cluster-settingses-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getClusterTopoes = {
    /**
     * No description
     *
     * @name GetClusterTopoes
     * @request POST:/get-cluster-topoes
     * @response `200` `(ClusterTopo)[]` Ok
     * @response `400` `string`
     */
    getClusterTopoes: (data: GetClusterTopoesRequestBody, params: RequestParams = {}) =>
      this.request<ClusterTopo[], string>({
        path: `/get-cluster-topoes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getClusterTopoesConnection = {
    /**
     * No description
     *
     * @name GetClusterTopoesConnection
     * @request POST:/get-cluster-topoes-connection
     * @response `200` `ClusterTopoConnection` Ok
     * @response `400` `string`
     */
    getClusterTopoesConnection: (data: GetClusterTopoesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<ClusterTopoConnection, string>({
        path: `/get-cluster-topoes-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getClusterUpgradeHistories = {
    /**
     * No description
     *
     * @name GetClusterUpgradeHistories
     * @request POST:/get-cluster-upgrade-histories
     * @response `200` `(ClusterUpgradeHistory)[]` Ok
     * @response `400` `string`
     */
    getClusterUpgradeHistories: (data: GetClusterUpgradeHistoriesRequestBody, params: RequestParams = {}) =>
      this.request<ClusterUpgradeHistory[], string>({
        path: `/get-cluster-upgrade-histories`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getClusterUpgradeHistoriesConnection = {
    /**
     * No description
     *
     * @name GetClusterUpgradeHistoriesConnection
     * @request POST:/get-cluster-upgrade-histories-connection
     * @response `200` `ClusterUpgradeHistoryConnection` Ok
     * @response `400` `string`
     */
    getClusterUpgradeHistoriesConnection: (
      data: GetClusterUpgradeHistoriesConnectionRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<ClusterUpgradeHistoryConnection, string>({
        path: `/get-cluster-upgrade-histories-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getConsistencyGroups = {
    /**
     * No description
     *
     * @name GetConsistencyGroups
     * @request POST:/get-consistency-groups
     * @response `200` `(ConsistencyGroup)[]` Ok
     * @response `400` `string`
     */
    getConsistencyGroups: (data: GetConsistencyGroupsRequestBody, params: RequestParams = {}) =>
      this.request<ConsistencyGroup[], string>({
        path: `/get-consistency-groups`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getConsistencyGroupsConnection = {
    /**
     * No description
     *
     * @name GetConsistencyGroupsConnection
     * @request POST:/get-consistency-groups-connection
     * @response `200` `ConsistencyGroupConnection` Ok
     * @response `400` `string`
     */
    getConsistencyGroupsConnection: (data: GetConsistencyGroupsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<ConsistencyGroupConnection, string>({
        path: `/get-consistency-groups-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getConsistencyGroupSnapshots = {
    /**
     * No description
     *
     * @name GetConsistencyGroupSnapshots
     * @request POST:/get-consistency-group-snapshots
     * @response `200` `(ConsistencyGroupSnapshot)[]` Ok
     * @response `400` `string`
     */
    getConsistencyGroupSnapshots: (data: GetConsistencyGroupSnapshotsRequestBody, params: RequestParams = {}) =>
      this.request<ConsistencyGroupSnapshot[], string>({
        path: `/get-consistency-group-snapshots`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getConsistencyGroupSnapshotsConnection = {
    /**
     * No description
     *
     * @name GetConsistencyGroupSnapshotsConnection
     * @request POST:/get-consistency-group-snapshots-connection
     * @response `200` `ConsistencyGroupSnapshotConnection` Ok
     * @response `400` `string`
     */
    getConsistencyGroupSnapshotsConnection: (
      data: GetConsistencyGroupSnapshotsConnectionRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<ConsistencyGroupSnapshotConnection, string>({
        path: `/get-consistency-group-snapshots-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getDatacenters = {
    /**
     * No description
     *
     * @name GetDatacenters
     * @request POST:/get-datacenters
     * @response `200` `(Datacenter)[]` Ok
     * @response `400` `string`
     */
    getDatacenters: (data: GetDatacentersRequestBody, params: RequestParams = {}) =>
      this.request<Datacenter[], string>({
        path: `/get-datacenters`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getDatacentersConnection = {
    /**
     * No description
     *
     * @name GetDatacentersConnection
     * @request POST:/get-datacenters-connection
     * @response `200` `DatacenterConnection` Ok
     * @response `400` `string`
     */
    getDatacentersConnection: (data: GetDatacentersConnectionRequestBody, params: RequestParams = {}) =>
      this.request<DatacenterConnection, string>({
        path: `/get-datacenters-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getDeploys = {
    /**
     * No description
     *
     * @name GetDeploys
     * @request POST:/get-deploys
     * @response `200` `(Deploy)[]` Ok
     * @response `400` `string`
     */
    getDeploys: (data: GetDeploysRequestBody, params: RequestParams = {}) =>
      this.request<Deploy[], string>({
        path: `/get-deploys`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getDeploysConnection = {
    /**
     * No description
     *
     * @name GetDeploysConnection
     * @request POST:/get-deploys-connection
     * @response `200` `DeployConnection` Ok
     * @response `400` `string`
     */
    getDeploysConnection: (data: GetDeploysConnectionRequestBody, params: RequestParams = {}) =>
      this.request<DeployConnection, string>({
        path: `/get-deploys-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getDiscoverHosts = {
    /**
     * No description
     *
     * @name GetDiscoverHosts
     * @request POST:/get-discover-hosts
     * @response `200` `(DiscoveredHost)[]` Ok
     * @response `400` `string`
     */
    getDiscoverHosts: (data: GetDiscoverHostsRequestBody, params: RequestParams = {}) =>
      this.request<DiscoveredHost[], string>({
        path: `/get-discover-hosts`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getDisks = {
    /**
     * No description
     *
     * @name GetDisks
     * @request POST:/get-disks
     * @response `200` `(Disk)[]` Ok
     * @response `400` `string`
     */
    getDisks: (data: GetDisksRequestBody, params: RequestParams = {}) =>
      this.request<Disk[], string>({
        path: `/get-disks`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getDisksConnection = {
    /**
     * No description
     *
     * @name GetDisksConnection
     * @request POST:/get-disks-connection
     * @response `200` `DiskConnection` Ok
     * @response `400` `string`
     */
    getDisksConnection: (data: GetDisksConnectionRequestBody, params: RequestParams = {}) =>
      this.request<DiskConnection, string>({
        path: `/get-disks-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getElfDataStores = {
    /**
     * No description
     *
     * @name GetElfDataStores
     * @request POST:/get-elf-data-stores
     * @response `200` `(ElfDataStore)[]` Ok
     * @response `400` `string`
     */
    getElfDataStores: (data: GetElfDataStoresRequestBody, params: RequestParams = {}) =>
      this.request<ElfDataStore[], string>({
        path: `/get-elf-data-stores`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getElfDataStoresConnection = {
    /**
     * No description
     *
     * @name GetElfDataStoresConnection
     * @request POST:/get-elf-data-stores-connection
     * @response `200` `ElfDataStoreConnection` Ok
     * @response `400` `string`
     */
    getElfDataStoresConnection: (data: GetElfDataStoresConnectionRequestBody, params: RequestParams = {}) =>
      this.request<ElfDataStoreConnection, string>({
        path: `/get-elf-data-stores-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getElfImages = {
    /**
     * No description
     *
     * @name GetElfImages
     * @request POST:/get-elf-images
     * @response `200` `(ElfImage)[]` Ok
     * @response `400` `string`
     */
    getElfImages: (data: GetElfImagesRequestBody, params: RequestParams = {}) =>
      this.request<ElfImage[], string>({
        path: `/get-elf-images`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getElfImagesConnection = {
    /**
     * No description
     *
     * @name GetElfImagesConnection
     * @request POST:/get-elf-images-connection
     * @response `200` `ElfImageConnection` Ok
     * @response `400` `string`
     */
    getElfImagesConnection: (data: GetElfImagesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<ElfImageConnection, string>({
        path: `/get-elf-images-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getElfStoragePolicies = {
    /**
     * No description
     *
     * @name GetElfStoragePolicies
     * @request POST:/get-elf-storage-policies
     * @response `200` `(ElfStoragePolicy)[]` Ok
     * @response `400` `string`
     */
    getElfStoragePolicies: (data: GetElfStoragePoliciesRequestBody, params: RequestParams = {}) =>
      this.request<ElfStoragePolicy[], string>({
        path: `/get-elf-storage-policies`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getElfStoragePoliciesConnection = {
    /**
     * No description
     *
     * @name GetElfStoragePoliciesConnection
     * @request POST:/get-elf-storage-policies-connection
     * @response `200` `ElfStoragePolicyConnection` Ok
     * @response `400` `string`
     */
    getElfStoragePoliciesConnection: (data: GetElfStoragePoliciesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<ElfStoragePolicyConnection, string>({
        path: `/get-elf-storage-policies-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getEntityFilters = {
    /**
     * No description
     *
     * @name GetEntityFilters
     * @request POST:/get-entity-filters
     * @response `200` `(EntityFilter)[]` Ok
     * @response `400` `string`
     */
    getEntityFilters: (data: GetEntityFiltersRequestBody, params: RequestParams = {}) =>
      this.request<EntityFilter[], string>({
        path: `/get-entity-filters`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getEntityFiltersConnection = {
    /**
     * No description
     *
     * @name GetEntityFiltersConnection
     * @request POST:/get-entity-filters-connection
     * @response `200` `EntityFilterConnection` Ok
     * @response `400` `string`
     */
    getEntityFiltersConnection: (data: GetEntityFiltersConnectionRequestBody, params: RequestParams = {}) =>
      this.request<EntityFilterConnection, string>({
        path: `/get-entity-filters-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getGlobalAlertRules = {
    /**
     * No description
     *
     * @name GetGlobalAlertRules
     * @request POST:/get-global-alert-rules
     * @response `200` `(GlobalAlertRule)[]` Ok
     * @response `400` `string`
     */
    getGlobalAlertRules: (data: GetGlobalAlertRulesRequestBody, params: RequestParams = {}) =>
      this.request<GlobalAlertRule[], string>({
        path: `/get-global-alert-rules`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getGlobalAlertRulesConnection = {
    /**
     * No description
     *
     * @name GetGlobalAlertRulesConnection
     * @request POST:/get-global-alert-rules-connection
     * @response `200` `GlobalAlertRuleConnection` Ok
     * @response `400` `string`
     */
    getGlobalAlertRulesConnection: (data: GetGlobalAlertRulesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<GlobalAlertRuleConnection, string>({
        path: `/get-global-alert-rules-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getGlobalSettingses = {
    /**
     * No description
     *
     * @name GetGlobalSettingses
     * @request POST:/get-global-settingses
     * @response `200` `(GlobalSettings)[]` Ok
     * @response `400` `string`
     */
    getGlobalSettingses: (data: GetGlobalSettingsesRequestBody, params: RequestParams = {}) =>
      this.request<GlobalSettings[], string>({
        path: `/get-global-settingses`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getGlobalSettingsesConnection = {
    /**
     * No description
     *
     * @name GetGlobalSettingsesConnection
     * @request POST:/get-global-settingses-connection
     * @response `200` `GlobalSettingsConnection` Ok
     * @response `400` `string`
     */
    getGlobalSettingsesConnection: (data: GetGlobalSettingsesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<GlobalSettingsConnection, string>({
        path: `/get-global-settingses-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getGraphs = {
    /**
     * No description
     *
     * @name GetGraphs
     * @request POST:/get-graphs
     * @response `200` `(Graph)[]` Ok
     * @response `400` `string`
     */
    getGraphs: (data: GetGraphsRequestBody, params: RequestParams = {}) =>
      this.request<Graph[], string>({
        path: `/get-graphs`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getGraphsConnection = {
    /**
     * No description
     *
     * @name GetGraphsConnection
     * @request POST:/get-graphs-connection
     * @response `200` `GraphConnection` Ok
     * @response `400` `string`
     */
    getGraphsConnection: (data: GetGraphsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<GraphConnection, string>({
        path: `/get-graphs-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getHosts = {
    /**
     * No description
     *
     * @name GetHosts
     * @request POST:/get-hosts
     * @response `200` `(Host)[]` Ok
     * @response `400` `string`
     */
    getHosts: (data: GetHostsRequestBody, params: RequestParams = {}) =>
      this.request<Host[], string>({
        path: `/get-hosts`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getHostsConnection = {
    /**
     * No description
     *
     * @name GetHostsConnection
     * @request POST:/get-hosts-connection
     * @response `200` `HostConnection` Ok
     * @response `400` `string`
     */
    getHostsConnection: (data: GetHostsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<HostConnection, string>({
        path: `/get-hosts-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getImagesConnector = {
    /**
     * No description
     *
     * @name GetImagesConnector
     * @request POST:/get-images-connector
     * @response `200` `(ImageConnector)[]` Ok
     * @response `400` `string`
     */
    getImagesConnector: (data: GetImagesConnectorRequestBody, params: RequestParams = {}) =>
      this.request<ImageConnector[], string>({
        path: `/get-images-connector`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getIpmis = {
    /**
     * No description
     *
     * @name GetIpmis
     * @request POST:/get-ipmis
     * @response `200` `(Ipmi)[]` Ok
     * @response `400` `string`
     */
    getIpmis: (data: GetIpmisRequestBody, params: RequestParams = {}) =>
      this.request<Ipmi[], string>({
        path: `/get-ipmis`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getIscsiConnections = {
    /**
     * No description
     *
     * @name GetIscsiConnections
     * @request POST:/get-iscsi-connections
     * @response `200` `(IscsiConnection)[]` Ok
     * @response `400` `string`
     */
    getIscsiConnections: (data: GetIscsiConnectionsRequestBody, params: RequestParams = {}) =>
      this.request<IscsiConnection[], string>({
        path: `/get-iscsi-connections`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getIscsiConnectionsConnection = {
    /**
     * No description
     *
     * @name GetIscsiConnectionsConnection
     * @request POST:/get-iscsi-connections-connection
     * @response `200` `IscsiConnectionConnection` Ok
     * @response `400` `string`
     */
    getIscsiConnectionsConnection: (data: GetIscsiConnectionsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<IscsiConnectionConnection, string>({
        path: `/get-iscsi-connections-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getIscsiLuns = {
    /**
     * No description
     *
     * @name GetIscsiLuns
     * @request POST:/get-iscsi-luns
     * @response `200` `(IscsiLun)[]` Ok
     * @response `400` `string`
     */
    getIscsiLuns: (data: GetIscsiLunsRequestBody, params: RequestParams = {}) =>
      this.request<IscsiLun[], string>({
        path: `/get-iscsi-luns`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getIscsiLunsConnection = {
    /**
     * No description
     *
     * @name GetIscsiLunsConnection
     * @request POST:/get-iscsi-luns-connection
     * @response `200` `IscsiLunConnection` Ok
     * @response `400` `string`
     */
    getIscsiLunsConnection: (data: GetIscsiLunsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<IscsiLunConnection, string>({
        path: `/get-iscsi-luns-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getIscsiLunSnapshots = {
    /**
     * No description
     *
     * @name GetIscsiLunSnapshots
     * @request POST:/get-iscsi-lun-snapshots
     * @response `200` `(IscsiLunSnapshot)[]` Ok
     * @response `400` `string`
     */
    getIscsiLunSnapshots: (data: GetIscsiLunSnapshotsRequestBody, params: RequestParams = {}) =>
      this.request<IscsiLunSnapshot[], string>({
        path: `/get-iscsi-lun-snapshots`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getIscsiLunSnapshotsConnection = {
    /**
     * No description
     *
     * @name GetIscsiLunSnapshotsConnection
     * @request POST:/get-iscsi-lun-snapshots-connection
     * @response `200` `IscsiLunSnapshotConnection` Ok
     * @response `400` `string`
     */
    getIscsiLunSnapshotsConnection: (data: GetIscsiLunSnapshotsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<IscsiLunSnapshotConnection, string>({
        path: `/get-iscsi-lun-snapshots-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getIscsiTargets = {
    /**
     * No description
     *
     * @name GetIscsiTargets
     * @request POST:/get-iscsi-targets
     * @response `200` `(IscsiTarget)[]` Ok
     * @response `400` `string`
     */
    getIscsiTargets: (data: GetIscsiTargetsRequestBody, params: RequestParams = {}) =>
      this.request<IscsiTarget[], string>({
        path: `/get-iscsi-targets`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getIscsiTargetsConnection = {
    /**
     * No description
     *
     * @name GetIscsiTargetsConnection
     * @request POST:/get-iscsi-targets-connection
     * @response `200` `IscsiTargetConnection` Ok
     * @response `400` `string`
     */
    getIscsiTargetsConnection: (data: GetIscsiTargetsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<IscsiTargetConnection, string>({
        path: `/get-iscsi-targets-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getLabels = {
    /**
     * No description
     *
     * @name GetLabels
     * @request POST:/get-labels
     * @response `200` `(Label)[]` Ok
     * @response `400` `string`
     */
    getLabels: (data: GetLabelsRequestBody, params: RequestParams = {}) =>
      this.request<Label[], string>({
        path: `/get-labels`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getLabelsConnection = {
    /**
     * No description
     *
     * @name GetLabelsConnection
     * @request POST:/get-labels-connection
     * @response `200` `LabelConnection` Ok
     * @response `400` `string`
     */
    getLabelsConnection: (data: GetLabelsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<LabelConnection, string>({
        path: `/get-labels-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getLicenses = {
    /**
     * No description
     *
     * @name GetLicenses
     * @request POST:/get-licenses
     * @response `200` `(License)[]` Ok
     * @response `400` `string`
     */
    getLicenses: (data: GetLicensesRequestBody, params: RequestParams = {}) =>
      this.request<License[], string>({
        path: `/get-licenses`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getLicensesConnection = {
    /**
     * No description
     *
     * @name GetLicensesConnection
     * @request POST:/get-licenses-connection
     * @response `200` `LicenseConnection` Ok
     * @response `400` `string`
     */
    getLicensesConnection: (data: GetLicensesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<LicenseConnection, string>({
        path: `/get-licenses-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getLogCollections = {
    /**
     * No description
     *
     * @name GetLogCollections
     * @request POST:/get-log-collections
     * @response `200` `(LogCollection)[]` Ok
     * @response `400` `string`
     */
    getLogCollections: (data: GetLogCollectionsRequestBody, params: RequestParams = {}) =>
      this.request<LogCollection[], string>({
        path: `/get-log-collections`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getLogCollectionsConnection = {
    /**
     * No description
     *
     * @name GetLogCollectionsConnection
     * @request POST:/get-log-collections-connection
     * @response `200` `LogCollectionConnection` Ok
     * @response `400` `string`
     */
    getLogCollectionsConnection: (data: GetLogCollectionsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<LogCollectionConnection, string>({
        path: `/get-log-collections-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getMigrateTransmitters = {
    /**
     * No description
     *
     * @name GetMigrateTransmitters
     * @request POST:/get-migrate-transmitters
     * @response `200` `(MigrateTransmitter)[]` Ok
     * @response `400` `string`
     */
    getMigrateTransmitters: (data: GetMigrateTransmittersRequestBody, params: RequestParams = {}) =>
      this.request<MigrateTransmitter[], string>({
        path: `/get-migrate-transmitters`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getMigrateTransmittersConnection = {
    /**
     * No description
     *
     * @name GetMigrateTransmittersConnection
     * @request POST:/get-migrate-transmitters-connection
     * @response `200` `MigrateTransmitterConnection` Ok
     * @response `400` `string`
     */
    getMigrateTransmittersConnection: (data: GetMigrateTransmittersConnectionRequestBody, params: RequestParams = {}) =>
      this.request<MigrateTransmitterConnection, string>({
        path: `/get-migrate-transmitters-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNamespaceGroups = {
    /**
     * No description
     *
     * @name GetNamespaceGroups
     * @request POST:/get-namespace-groups
     * @response `200` `(NamespaceGroup)[]` Ok
     * @response `400` `string`
     */
    getNamespaceGroups: (data: GetNamespaceGroupsRequestBody, params: RequestParams = {}) =>
      this.request<NamespaceGroup[], string>({
        path: `/get-namespace-groups`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNamespaceGroupsConnection = {
    /**
     * No description
     *
     * @name GetNamespaceGroupsConnection
     * @request POST:/get-namespace-groups-connection
     * @response `200` `NamespaceGroupConnection` Ok
     * @response `400` `string`
     */
    getNamespaceGroupsConnection: (data: GetNamespaceGroupsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<NamespaceGroupConnection, string>({
        path: `/get-namespace-groups-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNfsExports = {
    /**
     * No description
     *
     * @name GetNfsExports
     * @request POST:/get-nfs-exports
     * @response `200` `(NfsExport)[]` Ok
     * @response `400` `string`
     */
    getNfsExports: (data: GetNfsExportsRequestBody, params: RequestParams = {}) =>
      this.request<NfsExport[], string>({
        path: `/get-nfs-exports`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNfsExportsConnection = {
    /**
     * No description
     *
     * @name GetNfsExportsConnection
     * @request POST:/get-nfs-exports-connection
     * @response `200` `NfsExportConnection` Ok
     * @response `400` `string`
     */
    getNfsExportsConnection: (data: GetNfsExportsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<NfsExportConnection, string>({
        path: `/get-nfs-exports-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNfsInodes = {
    /**
     * No description
     *
     * @name GetNfsInodes
     * @request POST:/get-nfs-inodes
     * @response `200` `(NfsInode)[]` Ok
     * @response `400` `string`
     */
    getNfsInodes: (data: GetNfsInodesRequestBody, params: RequestParams = {}) =>
      this.request<NfsInode[], string>({
        path: `/get-nfs-inodes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNfsInodesConnection = {
    /**
     * No description
     *
     * @name GetNfsInodesConnection
     * @request POST:/get-nfs-inodes-connection
     * @response `200` `NfsInodeConnection` Ok
     * @response `400` `string`
     */
    getNfsInodesConnection: (data: GetNfsInodesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<NfsInodeConnection, string>({
        path: `/get-nfs-inodes-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNics = {
    /**
     * No description
     *
     * @name GetNics
     * @request POST:/get-nics
     * @response `200` `(Nic)[]` Ok
     * @response `400` `string`
     */
    getNics: (data: GetNicsRequestBody, params: RequestParams = {}) =>
      this.request<Nic[], string>({
        path: `/get-nics`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNicsConnection = {
    /**
     * No description
     *
     * @name GetNicsConnection
     * @request POST:/get-nics-connection
     * @response `200` `NicConnection` Ok
     * @response `400` `string`
     */
    getNicsConnection: (data: GetNicsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<NicConnection, string>({
        path: `/get-nics-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNodeTopoes = {
    /**
     * No description
     *
     * @name GetNodeTopoes
     * @request POST:/get-node-topoes
     * @response `200` `(NodeTopo)[]` Ok
     * @response `400` `string`
     */
    getNodeTopoes: (data: GetNodeTopoesRequestBody, params: RequestParams = {}) =>
      this.request<NodeTopo[], string>({
        path: `/get-node-topoes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNodeTopoesConnection = {
    /**
     * No description
     *
     * @name GetNodeTopoesConnection
     * @request POST:/get-node-topoes-connection
     * @response `200` `NodeTopoConnection` Ok
     * @response `400` `string`
     */
    getNodeTopoesConnection: (data: GetNodeTopoesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<NodeTopoConnection, string>({
        path: `/get-node-topoes-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNvmfNamespaces = {
    /**
     * No description
     *
     * @name GetNvmfNamespaces
     * @request POST:/get-nvmf-namespaces
     * @response `200` `(NvmfNamespace)[]` Ok
     * @response `400` `string`
     */
    getNvmfNamespaces: (data: GetNvmfNamespacesRequestBody, params: RequestParams = {}) =>
      this.request<NvmfNamespace[], string>({
        path: `/get-nvmf-namespaces`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNvmfNamespacesConnection = {
    /**
     * No description
     *
     * @name GetNvmfNamespacesConnection
     * @request POST:/get-nvmf-namespaces-connection
     * @response `200` `NvmfNamespaceConnection` Ok
     * @response `400` `string`
     */
    getNvmfNamespacesConnection: (data: GetNvmfNamespacesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<NvmfNamespaceConnection, string>({
        path: `/get-nvmf-namespaces-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNvmfNamespaceSnapshots = {
    /**
     * No description
     *
     * @name GetNvmfNamespaceSnapshots
     * @request POST:/get-nvmf-namespace-snapshots
     * @response `200` `(NvmfNamespaceSnapshot)[]` Ok
     * @response `400` `string`
     */
    getNvmfNamespaceSnapshots: (data: GetNvmfNamespaceSnapshotsRequestBody, params: RequestParams = {}) =>
      this.request<NvmfNamespaceSnapshot[], string>({
        path: `/get-nvmf-namespace-snapshots`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNvmfNamespaceSnapshotsConnection = {
    /**
     * No description
     *
     * @name GetNvmfNamespaceSnapshotsConnection
     * @request POST:/get-nvmf-namespace-snapshots-connection
     * @response `200` `NvmfNamespaceSnapshotConnection` Ok
     * @response `400` `string`
     */
    getNvmfNamespaceSnapshotsConnection: (
      data: GetNvmfNamespaceSnapshotsConnectionRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<NvmfNamespaceSnapshotConnection, string>({
        path: `/get-nvmf-namespace-snapshots-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNvmfSubsystems = {
    /**
     * No description
     *
     * @name GetNvmfSubsystems
     * @request POST:/get-nvmf-subsystems
     * @response `200` `(NvmfSubsystem)[]` Ok
     * @response `400` `string`
     */
    getNvmfSubsystems: (data: GetNvmfSubsystemsRequestBody, params: RequestParams = {}) =>
      this.request<NvmfSubsystem[], string>({
        path: `/get-nvmf-subsystems`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getNvmfSubsystemsConnection = {
    /**
     * No description
     *
     * @name GetNvmfSubsystemsConnection
     * @request POST:/get-nvmf-subsystems-connection
     * @response `200` `NvmfSubsystemConnection` Ok
     * @response `400` `string`
     */
    getNvmfSubsystemsConnection: (data: GetNvmfSubsystemsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<NvmfSubsystemConnection, string>({
        path: `/get-nvmf-subsystems-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getOrganizations = {
    /**
     * No description
     *
     * @name GetOrganizations
     * @request POST:/get-organizations
     * @response `200` `(Organization)[]` Ok
     * @response `400` `string`
     */
    getOrganizations: (data: GetOrganizationsRequestBody, params: RequestParams = {}) =>
      this.request<Organization[], string>({
        path: `/get-organizations`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getOrganizationsConnection = {
    /**
     * No description
     *
     * @name GetOrganizationsConnection
     * @request POST:/get-organizations-connection
     * @response `200` `OrganizationConnection` Ok
     * @response `400` `string`
     */
    getOrganizationsConnection: (data: GetOrganizationsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<OrganizationConnection, string>({
        path: `/get-organizations-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getPmemDimms = {
    /**
     * No description
     *
     * @name GetPmemDimms
     * @request POST:/get-pmem-dimms
     * @response `200` `(PmemDimm)[]` Ok
     * @response `400` `string`
     */
    getPmemDimms: (data: GetPmemDimmsRequestBody, params: RequestParams = {}) =>
      this.request<PmemDimm[], string>({
        path: `/get-pmem-dimms`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getPmemDimmsConnection = {
    /**
     * No description
     *
     * @name GetPmemDimmsConnection
     * @request POST:/get-pmem-dimms-connection
     * @response `200` `PmemDimmConnection` Ok
     * @response `400` `string`
     */
    getPmemDimmsConnection: (data: GetPmemDimmsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<PmemDimmConnection, string>({
        path: `/get-pmem-dimms-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getRackTopoes = {
    /**
     * No description
     *
     * @name GetRackTopoes
     * @request POST:/get-rack-topoes
     * @response `200` `(RackTopo)[]` Ok
     * @response `400` `string`
     */
    getRackTopoes: (data: GetRackTopoesRequestBody, params: RequestParams = {}) =>
      this.request<RackTopo[], string>({
        path: `/get-rack-topoes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getRackTopoesConnection = {
    /**
     * No description
     *
     * @name GetRackTopoesConnection
     * @request POST:/get-rack-topoes-connection
     * @response `200` `RackTopoConnection` Ok
     * @response `400` `string`
     */
    getRackTopoesConnection: (data: GetRackTopoesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<RackTopoConnection, string>({
        path: `/get-rack-topoes-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getReportTasks = {
    /**
     * No description
     *
     * @name GetReportTasks
     * @request POST:/get-report-tasks
     * @response `200` `(ReportTask)[]` Ok
     * @response `400` `string`
     */
    getReportTasks: (data: GetReportTasksRequestBody, params: RequestParams = {}) =>
      this.request<ReportTask[], string>({
        path: `/get-report-tasks`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getReportTasksConnection = {
    /**
     * No description
     *
     * @name GetReportTasksConnection
     * @request POST:/get-report-tasks-connection
     * @response `200` `ReportTaskConnection` Ok
     * @response `400` `string`
     */
    getReportTasksConnection: (data: GetReportTasksConnectionRequestBody, params: RequestParams = {}) =>
      this.request<ReportTaskConnection, string>({
        path: `/get-report-tasks-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getReportTemplates = {
    /**
     * No description
     *
     * @name GetReportTemplates
     * @request POST:/get-report-templates
     * @response `200` `(ReportTemplate)[]` Ok
     * @response `400` `string`
     */
    getReportTemplates: (data: GetReportTemplatesRequestBody, params: RequestParams = {}) =>
      this.request<ReportTemplate[], string>({
        path: `/get-report-templates`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getReportTemplatesConnection = {
    /**
     * No description
     *
     * @name GetReportTemplatesConnection
     * @request POST:/get-report-templates-connection
     * @response `200` `ReportTemplateConnection` Ok
     * @response `400` `string`
     */
    getReportTemplatesConnection: (data: GetReportTemplatesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<ReportTemplateConnection, string>({
        path: `/get-report-templates-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getSnapshotGroups = {
    /**
     * No description
     *
     * @name GetSnapshotGroups
     * @request POST:/get-snapshot-groups
     * @response `200` `(SnapshotGroup)[]` Ok
     * @response `400` `string`
     */
    getSnapshotGroups: (data: GetSnapshotGroupsRequestBody, params: RequestParams = {}) =>
      this.request<SnapshotGroup[], string>({
        path: `/get-snapshot-groups`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getSnapshotGroupsConnection = {
    /**
     * No description
     *
     * @name GetSnapshotGroupsConnection
     * @request POST:/get-snapshot-groups-connection
     * @response `200` `SnapshotGroupConnection` Ok
     * @response `400` `string`
     */
    getSnapshotGroupsConnection: (data: GetSnapshotGroupsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<SnapshotGroupConnection, string>({
        path: `/get-snapshot-groups-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getSnapshotPlans = {
    /**
     * No description
     *
     * @name GetSnapshotPlans
     * @request POST:/get-snapshot-plans
     * @response `200` `(SnapshotPlan)[]` Ok
     * @response `400` `string`
     */
    getSnapshotPlans: (data: GetSnapshotPlansRequestBody, params: RequestParams = {}) =>
      this.request<SnapshotPlan[], string>({
        path: `/get-snapshot-plans`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getSnapshotPlansConnection = {
    /**
     * No description
     *
     * @name GetSnapshotPlansConnection
     * @request POST:/get-snapshot-plans-connection
     * @response `200` `SnapshotPlanConnection` Ok
     * @response `400` `string`
     */
    getSnapshotPlansConnection: (data: GetSnapshotPlansConnectionRequestBody, params: RequestParams = {}) =>
      this.request<SnapshotPlanConnection, string>({
        path: `/get-snapshot-plans-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getSnapshotPlanTasks = {
    /**
     * No description
     *
     * @name GetSnapshotPlanTasks
     * @request POST:/get-snapshot-plan-tasks
     * @response `200` `(SnapshotPlanTask)[]` Ok
     * @response `400` `string`
     */
    getSnapshotPlanTasks: (data: GetSnapshotPlanTasksRequestBody, params: RequestParams = {}) =>
      this.request<SnapshotPlanTask[], string>({
        path: `/get-snapshot-plan-tasks`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getSnapshotPlanTasksConnection = {
    /**
     * No description
     *
     * @name GetSnapshotPlanTasksConnection
     * @request POST:/get-snapshot-plan-tasks-connection
     * @response `200` `SnapshotPlanTaskConnection` Ok
     * @response `400` `string`
     */
    getSnapshotPlanTasksConnection: (data: GetSnapshotPlanTasksConnectionRequestBody, params: RequestParams = {}) =>
      this.request<SnapshotPlanTaskConnection, string>({
        path: `/get-snapshot-plan-tasks-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getSnmpTransports = {
    /**
     * No description
     *
     * @name GetSnmpTransports
     * @request POST:/get-snmp-transports
     * @response `200` `(SnmpTransport)[]` Ok
     * @response `400` `string`
     */
    getSnmpTransports: (data: GetSnmpTransportsRequestBody, params: RequestParams = {}) =>
      this.request<SnmpTransport[], string>({
        path: `/get-snmp-transports`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getSnmpTransportsConnection = {
    /**
     * No description
     *
     * @name GetSnmpTransportsConnection
     * @request POST:/get-snmp-transports-connection
     * @response `200` `SnmpTransportConnection` Ok
     * @response `400` `string`
     */
    getSnmpTransportsConnection: (data: GetSnmpTransportsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<SnmpTransportConnection, string>({
        path: `/get-snmp-transports-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getSnmpTrapReceivers = {
    /**
     * No description
     *
     * @name GetSnmpTrapReceivers
     * @request POST:/get-snmp-trap-receivers
     * @response `200` `(SnmpTrapReceiver)[]` Ok
     * @response `400` `string`
     */
    getSnmpTrapReceivers: (data: GetSnmpTrapReceiversRequestBody, params: RequestParams = {}) =>
      this.request<SnmpTrapReceiver[], string>({
        path: `/get-snmp-trap-receivers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getSnmpTrapReceiversConnection = {
    /**
     * No description
     *
     * @name GetSnmpTrapReceiversConnection
     * @request POST:/get-snmp-trap-receivers-connection
     * @response `200` `SnmpTrapReceiverConnection` Ok
     * @response `400` `string`
     */
    getSnmpTrapReceiversConnection: (data: GetSnmpTrapReceiversConnectionRequestBody, params: RequestParams = {}) =>
      this.request<SnmpTrapReceiverConnection, string>({
        path: `/get-snmp-trap-receivers-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getStoragePoliciesConnector = {
    /**
     * No description
     *
     * @name GetStoragePoliciesConnector
     * @request POST:/get-storage-policies-connector
     * @response `200` `(StoragePolicyConector)[]` Ok
     * @response `400` `string`
     */
    getStoragePoliciesConnector: (data: GetStoragePoliciesConnectorRequestBody, params: RequestParams = {}) =>
      this.request<StoragePolicyConector[], string>({
        path: `/get-storage-policies-connector`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getSvtImages = {
    /**
     * No description
     *
     * @name GetSvtImages
     * @request POST:/get-svt-images
     * @response `200` `(SvtImage)[]` Ok
     * @response `400` `string`
     */
    getSvtImages: (data: GetSvtImagesRequestBody, params: RequestParams = {}) =>
      this.request<SvtImage[], string>({
        path: `/get-svt-images`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getSvtImagesConnection = {
    /**
     * No description
     *
     * @name GetSvtImagesConnection
     * @request POST:/get-svt-images-connection
     * @response `200` `SvtImageConnection` Ok
     * @response `400` `string`
     */
    getSvtImagesConnection: (data: GetSvtImagesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<SvtImageConnection, string>({
        path: `/get-svt-images-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getSystemAuditLogs = {
    /**
     * No description
     *
     * @name GetSystemAuditLogs
     * @request POST:/get-system-audit-logs
     * @response `200` `(SystemAuditLog)[]` Ok
     * @response `400` `string`
     */
    getSystemAuditLogs: (data: GetSystemAuditLogsRequestBody, params: RequestParams = {}) =>
      this.request<SystemAuditLog[], string>({
        path: `/get-system-audit-logs`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getSystemAuditLogsConnection = {
    /**
     * No description
     *
     * @name GetSystemAuditLogsConnection
     * @request POST:/get-system-audit-logs-connection
     * @response `200` `SystemAuditLogConnection` Ok
     * @response `400` `string`
     */
    getSystemAuditLogsConnection: (data: GetSystemAuditLogsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<SystemAuditLogConnection, string>({
        path: `/get-system-audit-logs-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getTasks = {
    /**
     * No description
     *
     * @name GetTasks
     * @request POST:/get-tasks
     * @response `200` `(Task)[]` Ok
     * @response `400` `string`
     */
    getTasks: (data: GetTasksRequestBody, params: RequestParams = {}) =>
      this.request<Task[], string>({
        path: `/get-tasks`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getTasksConnection = {
    /**
     * No description
     *
     * @name GetTasksConnection
     * @request POST:/get-tasks-connection
     * @response `200` `TaskConnection` Ok
     * @response `400` `string`
     */
    getTasksConnection: (data: GetTasksConnectionRequestBody, params: RequestParams = {}) =>
      this.request<TaskConnection, string>({
        path: `/get-tasks-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getUploadTasks = {
    /**
     * No description
     *
     * @name GetUploadTasks
     * @request POST:/get-upload-tasks
     * @response `200` `(UploadTask)[]` Ok
     * @response `400` `string`
     */
    getUploadTasks: (data: GetUploadTasksRequestBody, params: RequestParams = {}) =>
      this.request<UploadTask[], string>({
        path: `/get-upload-tasks`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getUploadTasksConnection = {
    /**
     * No description
     *
     * @name GetUploadTasksConnection
     * @request POST:/get-upload-tasks-connection
     * @response `200` `UploadTaskConnection` Ok
     * @response `400` `string`
     */
    getUploadTasksConnection: (data: GetUploadTasksConnectionRequestBody, params: RequestParams = {}) =>
      this.request<UploadTaskConnection, string>({
        path: `/get-upload-tasks-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getUsbDevices = {
    /**
     * No description
     *
     * @name GetUsbDevices
     * @request POST:/get-usb-devices
     * @response `200` `(UsbDevice)[]` Ok
     * @response `400` `string`
     */
    getUsbDevices: (data: GetUsbDevicesRequestBody, params: RequestParams = {}) =>
      this.request<UsbDevice[], string>({
        path: `/get-usb-devices`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getUsbDevicesConnection = {
    /**
     * No description
     *
     * @name GetUsbDevicesConnection
     * @request POST:/get-usb-devices-connection
     * @response `200` `UsbDeviceConnection` Ok
     * @response `400` `string`
     */
    getUsbDevicesConnection: (data: GetUsbDevicesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<UsbDeviceConnection, string>({
        path: `/get-usb-devices-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getUserAuditLogs = {
    /**
     * No description
     *
     * @name GetUserAuditLogs
     * @request POST:/get-user-audit-logs
     * @response `200` `(UserAuditLog)[]` Ok
     * @response `400` `string`
     */
    getUserAuditLogs: (data: GetUserAuditLogsRequestBody, params: RequestParams = {}) =>
      this.request<UserAuditLog[], string>({
        path: `/get-user-audit-logs`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getUserAuditLogsConnection = {
    /**
     * No description
     *
     * @name GetUserAuditLogsConnection
     * @request POST:/get-user-audit-logs-connection
     * @response `200` `UserAuditLogConnection` Ok
     * @response `400` `string`
     */
    getUserAuditLogsConnection: (data: GetUserAuditLogsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<UserAuditLogConnection, string>({
        path: `/get-user-audit-logs-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getUserRoleNexts = {
    /**
     * No description
     *
     * @name GetUserRoleNexts
     * @request POST:/get-user-role-nexts
     * @response `200` `(UserRoleNext)[]` Ok
     * @response `400` `string`
     */
    getUserRoleNexts: (data: GetUserRoleNextsRequestBody, params: RequestParams = {}) =>
      this.request<UserRoleNext[], string>({
        path: `/get-user-role-nexts`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getUserRoleNextsConnection = {
    /**
     * No description
     *
     * @name GetUserRoleNextsConnection
     * @request POST:/get-user-role-nexts-connection
     * @response `200` `UserRoleNextConnection` Ok
     * @response `400` `string`
     */
    getUserRoleNextsConnection: (data: GetUserRoleNextsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<UserRoleNextConnection, string>({
        path: `/get-user-role-nexts-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getUsers = {
    /**
     * No description
     *
     * @name GetUsers
     * @request POST:/get-users
     * @response `200` `(User)[]` Ok
     * @response `400` `string`
     */
    getUsers: (data: GetUsersRequestBody, params: RequestParams = {}) =>
      this.request<User[], string>({
        path: `/get-users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getUsersConnection = {
    /**
     * No description
     *
     * @name GetUsersConnection
     * @request POST:/get-users-connection
     * @response `200` `UserConnection` Ok
     * @response `400` `string`
     */
    getUsersConnection: (data: GetUsersConnectionRequestBody, params: RequestParams = {}) =>
      this.request<UserConnection, string>({
        path: `/get-users-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVcenterAccounts = {
    /**
     * No description
     *
     * @name GetVcenterAccounts
     * @request POST:/get-vcenter-accounts
     * @response `200` `(VcenterAccount)[]` Ok
     * @response `400` `string`
     */
    getVcenterAccounts: (data: GetVcenterAccountsRequestBody, params: RequestParams = {}) =>
      this.request<VcenterAccount[], string>({
        path: `/get-vcenter-accounts`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVcenterAccountsConnection = {
    /**
     * No description
     *
     * @name GetVcenterAccountsConnection
     * @request POST:/get-vcenter-accounts-connection
     * @response `200` `VcenterAccountConnection` Ok
     * @response `400` `string`
     */
    getVcenterAccountsConnection: (data: GetVcenterAccountsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<VcenterAccountConnection, string>({
        path: `/get-vcenter-accounts-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVdses = {
    /**
     * No description
     *
     * @name GetVdses
     * @request POST:/get-vdses
     * @response `200` `(Vds)[]` Ok
     * @response `400` `string`
     */
    getVdses: (data: GetVdsesRequestBody, params: RequestParams = {}) =>
      this.request<Vds[], string>({
        path: `/get-vdses`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVdsesConnection = {
    /**
     * No description
     *
     * @name GetVdsesConnection
     * @request POST:/get-vdses-connection
     * @response `200` `VdsConnection` Ok
     * @response `400` `string`
     */
    getVdsesConnection: (data: GetVdsesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<VdsConnection, string>({
        path: `/get-vdses-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getViews = {
    /**
     * No description
     *
     * @name GetViews
     * @request POST:/get-views
     * @response `200` `(View)[]` Ok
     * @response `400` `string`
     */
    getViews: (data: GetViewsRequestBody, params: RequestParams = {}) =>
      this.request<View[], string>({
        path: `/get-views`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getViewsConnection = {
    /**
     * No description
     *
     * @name GetViewsConnection
     * @request POST:/get-views-connection
     * @response `200` `ViewConnection` Ok
     * @response `400` `string`
     */
    getViewsConnection: (data: GetViewsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<ViewConnection, string>({
        path: `/get-views-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVlans = {
    /**
     * No description
     *
     * @name GetVlans
     * @request POST:/get-vlans
     * @response `200` `(Vlan)[]` Ok
     * @response `400` `string`
     */
    getVlans: (data: GetVlansRequestBody, params: RequestParams = {}) =>
      this.request<Vlan[], string>({
        path: `/get-vlans`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVlansConnection = {
    /**
     * No description
     *
     * @name GetVlansConnection
     * @request POST:/get-vlans-connection
     * @response `200` `VlanConnection` Ok
     * @response `400` `string`
     */
    getVlansConnection: (data: GetVlansConnectionRequestBody, params: RequestParams = {}) =>
      this.request<VlanConnection, string>({
        path: `/get-vlans-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmDisks = {
    /**
     * No description
     *
     * @name GetVmDisks
     * @request POST:/get-vm-disks
     * @response `200` `(VmDisk)[]` Ok
     * @response `400` `string`
     */
    getVmDisks: (data: GetVmDisksRequestBody, params: RequestParams = {}) =>
      this.request<VmDisk[], string>({
        path: `/get-vm-disks`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmDisksConnection = {
    /**
     * No description
     *
     * @name GetVmDisksConnection
     * @request POST:/get-vm-disks-connection
     * @response `200` `VmDiskConnection` Ok
     * @response `400` `string`
     */
    getVmDisksConnection: (data: GetVmDisksConnectionRequestBody, params: RequestParams = {}) =>
      this.request<VmDiskConnection, string>({
        path: `/get-vm-disks-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmEntityFilterResults = {
    /**
     * No description
     *
     * @name GetVmEntityFilterResults
     * @request POST:/get-vm-entity-filter-results
     * @response `200` `(VmEntityFilterResult)[]` Ok
     * @response `400` `string`
     */
    getVmEntityFilterResults: (data: GetVmEntityFilterResultsRequestBody, params: RequestParams = {}) =>
      this.request<VmEntityFilterResult[], string>({
        path: `/get-vm-entity-filter-results`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmEntityFilterResultsConnection = {
    /**
     * No description
     *
     * @name GetVmEntityFilterResultsConnection
     * @request POST:/get-vm-entity-filter-results-connection
     * @response `200` `VmEntityFilterResultConnection` Ok
     * @response `400` `string`
     */
    getVmEntityFilterResultsConnection: (
      data: GetVmEntityFilterResultsConnectionRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<VmEntityFilterResultConnection, string>({
        path: `/get-vm-entity-filter-results-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmFolders = {
    /**
     * No description
     *
     * @name GetVmFolders
     * @request POST:/get-vm-folders
     * @response `200` `(VmFolder)[]` Ok
     * @response `400` `string`
     */
    getVmFolders: (data: GetVmFoldersRequestBody, params: RequestParams = {}) =>
      this.request<VmFolder[], string>({
        path: `/get-vm-folders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmFoldersConnection = {
    /**
     * No description
     *
     * @name GetVmFoldersConnection
     * @request POST:/get-vm-folders-connection
     * @response `200` `VmFolderConnection` Ok
     * @response `400` `string`
     */
    getVmFoldersConnection: (data: GetVmFoldersConnectionRequestBody, params: RequestParams = {}) =>
      this.request<VmFolderConnection, string>({
        path: `/get-vm-folders-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmNics = {
    /**
     * No description
     *
     * @name GetVmNics
     * @request POST:/get-vm-nics
     * @response `200` `(VmNic)[]` Ok
     * @response `400` `string`
     */
    getVmNics: (data: GetVmNicsRequestBody, params: RequestParams = {}) =>
      this.request<VmNic[], string>({
        path: `/get-vm-nics`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmNicsConnection = {
    /**
     * No description
     *
     * @name GetVmNicsConnection
     * @request POST:/get-vm-nics-connection
     * @response `200` `VmNicConnection` Ok
     * @response `400` `string`
     */
    getVmNicsConnection: (data: GetVmNicsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<VmNicConnection, string>({
        path: `/get-vm-nics-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmPlacementGroups = {
    /**
     * No description
     *
     * @name GetVmPlacementGroups
     * @request POST:/get-vm-placement-groups
     * @response `200` `(VmPlacementGroup)[]` Ok
     * @response `400` `string`
     */
    getVmPlacementGroups: (data: GetVmPlacementGroupsRequestBody, params: RequestParams = {}) =>
      this.request<VmPlacementGroup[], string>({
        path: `/get-vm-placement-groups`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmPlacementGroupsConnection = {
    /**
     * No description
     *
     * @name GetVmPlacementGroupsConnection
     * @request POST:/get-vm-placement-groups-connection
     * @response `200` `VmPlacementGroupConnection` Ok
     * @response `400` `string`
     */
    getVmPlacementGroupsConnection: (data: GetVmPlacementGroupsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<VmPlacementGroupConnection, string>({
        path: `/get-vm-placement-groups-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVms = {
    /**
     * No description
     *
     * @name GetVms
     * @request POST:/get-vms
     * @response `200` `(Vm)[]` Ok
     * @response `400` `string`
     */
    getVms: (data: GetVmsRequestBody, params: RequestParams = {}) =>
      this.request<Vm[], string>({
        path: `/get-vms`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmsConnection = {
    /**
     * No description
     *
     * @name GetVmsConnection
     * @request POST:/get-vms-connection
     * @response `200` `VmConnection` Ok
     * @response `400` `string`
     */
    getVmsConnection: (data: GetVmsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<VmConnection, string>({
        path: `/get-vms-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmSnapshots = {
    /**
     * No description
     *
     * @name GetVmSnapshots
     * @request POST:/get-vm-snapshots
     * @response `200` `(VmSnapshot)[]` Ok
     * @response `400` `string`
     */
    getVmSnapshots: (data: GetVmSnapshotsRequestBody, params: RequestParams = {}) =>
      this.request<VmSnapshot[], string>({
        path: `/get-vm-snapshots`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmSnapshotsConnection = {
    /**
     * No description
     *
     * @name GetVmSnapshotsConnection
     * @request POST:/get-vm-snapshots-connection
     * @response `200` `VmSnapshotConnection` Ok
     * @response `400` `string`
     */
    getVmSnapshotsConnection: (data: GetVmSnapshotsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<VmSnapshotConnection, string>({
        path: `/get-vm-snapshots-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmTemplates = {
    /**
     * No description
     *
     * @name GetVmTemplates
     * @request POST:/get-vm-templates
     * @response `200` `(VmTemplate)[]` Ok
     * @response `400` `string`
     */
    getVmTemplates: (data: GetVmTemplatesRequestBody, params: RequestParams = {}) =>
      this.request<VmTemplate[], string>({
        path: `/get-vm-templates`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmTemplatesConnection = {
    /**
     * No description
     *
     * @name GetVmTemplatesConnection
     * @request POST:/get-vm-templates-connection
     * @response `200` `VmTemplateConnection` Ok
     * @response `400` `string`
     */
    getVmTemplatesConnection: (data: GetVmTemplatesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<VmTemplateConnection, string>({
        path: `/get-vm-templates-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmVolumes = {
    /**
     * No description
     *
     * @name GetVmVolumes
     * @request POST:/get-vm-volumes
     * @response `200` `(VmVolume)[]` Ok
     * @response `400` `string`
     */
    getVmVolumes: (data: GetVmVolumesRequestBody, params: RequestParams = {}) =>
      this.request<VmVolume[], string>({
        path: `/get-vm-volumes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVmVolumesConnection = {
    /**
     * No description
     *
     * @name GetVmVolumesConnection
     * @request POST:/get-vm-volumes-connection
     * @response `200` `VmVolumeConnection` Ok
     * @response `400` `string`
     */
    getVmVolumesConnection: (data: GetVmVolumesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<VmVolumeConnection, string>({
        path: `/get-vm-volumes-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVsphereEsxiAccounts = {
    /**
     * No description
     *
     * @name GetVsphereEsxiAccounts
     * @request POST:/get-vsphere-esxi-accounts
     * @response `200` `(VsphereEsxiAccount)[]` Ok
     * @response `400` `string`
     */
    getVsphereEsxiAccounts: (data: GetVsphereEsxiAccountsRequestBody, params: RequestParams = {}) =>
      this.request<VsphereEsxiAccount[], string>({
        path: `/get-vsphere-esxi-accounts`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getVsphereEsxiAccountsConnection = {
    /**
     * No description
     *
     * @name GetVsphereEsxiAccountsConnection
     * @request POST:/get-vsphere-esxi-accounts-connection
     * @response `200` `VsphereEsxiAccountConnection` Ok
     * @response `400` `string`
     */
    getVsphereEsxiAccountsConnection: (data: GetVsphereEsxiAccountsConnectionRequestBody, params: RequestParams = {}) =>
      this.request<VsphereEsxiAccountConnection, string>({
        path: `/get-vsphere-esxi-accounts-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getWitnesses = {
    /**
     * No description
     *
     * @name GetWitnesses
     * @request POST:/get-witnesses
     * @response `200` `(Witness)[]` Ok
     * @response `400` `string`
     */
    getWitnesses: (data: GetWitnessesRequestBody, params: RequestParams = {}) =>
      this.request<Witness[], string>({
        path: `/get-witnesses`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getWitnessesConnection = {
    /**
     * No description
     *
     * @name GetWitnessesConnection
     * @request POST:/get-witnesses-connection
     * @response `200` `WitnessConnection` Ok
     * @response `400` `string`
     */
    getWitnessesConnection: (data: GetWitnessesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<WitnessConnection, string>({
        path: `/get-witnesses-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getZones = {
    /**
     * No description
     *
     * @name GetZones
     * @request POST:/get-zones
     * @response `200` `(Zone)[]` Ok
     * @response `400` `string`
     */
    getZones: (data: GetZonesRequestBody, params: RequestParams = {}) =>
      this.request<Zone[], string>({
        path: `/get-zones`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getZonesConnection = {
    /**
     * No description
     *
     * @name GetZonesConnection
     * @request POST:/get-zones-connection
     * @response `200` `ZoneConnection` Ok
     * @response `400` `string`
     */
    getZonesConnection: (data: GetZonesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<ZoneConnection, string>({
        path: `/get-zones-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getZoneTopoes = {
    /**
     * No description
     *
     * @name GetZoneTopoes
     * @request POST:/get-zone-topoes
     * @response `200` `(ZoneTopo)[]` Ok
     * @response `400` `string`
     */
    getZoneTopoes: (data: GetZoneTopoesRequestBody, params: RequestParams = {}) =>
      this.request<ZoneTopo[], string>({
        path: `/get-zone-topoes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getZoneTopoesConnection = {
    /**
     * No description
     *
     * @name GetZoneTopoesConnection
     * @request POST:/get-zone-topoes-connection
     * @response `200` `ZoneTopoConnection` Ok
     * @response `400` `string`
     */
    getZoneTopoesConnection: (data: GetZoneTopoesConnectionRequestBody, params: RequestParams = {}) =>
      this.request<ZoneTopoConnection, string>({
        path: `/get-zone-topoes-connection`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateGlobalAlertRule = {
    /**
     * No description
     *
     * @name UpdateGlobalAlertRule
     * @request POST:/update-global-alert-rule
     * @response `200` `(WithTaskGlobalAlertRule)[]` Ok
     * @response `400` `string`
     */
    updateGlobalAlertRule: (data: GlobalAlertRuleUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskGlobalAlertRule[], string>({
        path: `/update-global-alert-rule`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateCustomizeAlertRule = {
    /**
     * No description
     *
     * @name UpdateCustomizeAlertRule
     * @request POST:/update-customize-alert-rule
     * @response `200` `(WithTaskGlobalAlertRule)[]` Ok
     * @response `400` `string`
     */
    updateCustomizeAlertRule: (data: CustomizeAlertRuleUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskGlobalAlertRule[], string>({
        path: `/update-customize-alert-rule`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  resolveAlert = {
    /**
     * No description
     *
     * @name ResolveAlert
     * @request POST:/resolve-alert
     * @response `200` `(WithTaskAlert)[]` Ok
     * @response `400` `string`
     */
    resolveAlert: (data: ResolveAlertParams, params: RequestParams = {}) =>
      this.request<WithTaskAlert[], string>({
        path: `/resolve-alert`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createBrickTopo = {
    /**
     * No description
     *
     * @name CreateBrickTopo
     * @request POST:/create-brick-topo
     * @response `200` `(WithTaskBrickTopo)[]` Ok
     * @response `400` `string`
     */
    createBrickTopo: (data: BrickTopoCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskBrickTopo[], string>({
        path: `/create-brick-topo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateBrickTopo = {
    /**
     * No description
     *
     * @name UpdateBrickTopo
     * @request POST:/update-brick-topo
     * @response `200` `(WithTaskBrickTopo)[]` Ok
     * @response `400` `string`
     */
    updateBrickTopo: (data: BrickTopoUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskBrickTopo[], string>({
        path: `/update-brick-topo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  moveBrickTopo = {
    /**
     * No description
     *
     * @name MoveBrickTopo
     * @request POST:/move-brick-topo
     * @response `200` `(WithTaskBrickTopo)[]` Ok
     * @response `400` `string`
     */
    moveBrickTopo: (data: BrickTopoMoveParams, params: RequestParams = {}) =>
      this.request<WithTaskBrickTopo[], string>({
        path: `/move-brick-topo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteBrickTopo = {
    /**
     * No description
     *
     * @name DeleteBrickTopo
     * @request POST:/delete-brick-topo
     * @response `200` `(WithTaskDeleteBrickTopo)[]` Ok
     * @response `400` `string`
     */
    deleteBrickTopo: (data: BrickTopoDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteBrickTopo[], string>({
        path: `/delete-brick-topo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  connectCluster = {
    /**
     * No description
     *
     * @name ConnectCluster
     * @request POST:/connect-cluster
     * @response `200` `(WithTaskCluster)[]` Ok
     * @response `400` `string`
     */
    connectCluster: (data: ClusterCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskCluster[], string>({
        path: `/connect-cluster`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateCluster = {
    /**
     * No description
     *
     * @name UpdateCluster
     * @request POST:/update-cluster
     * @response `200` `(WithTaskCluster)[]` Ok
     * @response `400` `string`
     */
    updateCluster: (data: ClusterUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskCluster[], string>({
        path: `/update-cluster`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateClusterLicense = {
    /**
     * No description
     *
     * @name UpdateClusterLicense
     * @request POST:/update-cluster-license
     * @response `200` `(WithTaskCluster)[]` Ok
     * @response `400` `string`
     */
    updateClusterLicense: (data: ClusterLicenseUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskCluster[], string>({
        path: `/update-cluster-license`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteCluster = {
    /**
     * No description
     *
     * @name DeleteCluster
     * @request POST:/delete-cluster
     * @response `200` `(WithTaskDeleteCluster)[]` Ok
     * @response `400` `string`
     */
    deleteCluster: (data: ClusterDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteCluster[], string>({
        path: `/delete-cluster`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createConsistencySnapshotGroup = {
    /**
     * No description
     *
     * @name CreateConsistencyGroupSnapshot
     * @request POST:/create-consistency-snapshot-group
     * @response `200` `(WithTaskConsistencyGroupSnapshot)[]` Ok
     * @response `400` `string`
     */
    createConsistencyGroupSnapshot: (data: ConsistencyGroupSnapshotCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskConsistencyGroupSnapshot[], string>({
        path: `/create-consistency-snapshot-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  rollbackConsistencySnapshotGroup = {
    /**
     * No description
     *
     * @name UpdateConsistencyGroupSnapshot
     * @request POST:/rollback-consistency-snapshot-group
     * @response `200` `(WithTaskConsistencyGroupSnapshot)[]` Ok
     * @response `400` `string`
     */
    updateConsistencyGroupSnapshot: (data: ConsistencyGroupSnapshotUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskConsistencyGroupSnapshot[], string>({
        path: `/rollback-consistency-snapshot-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteConsistencySnapshotGroup = {
    /**
     * No description
     *
     * @name DeleteConsistencyGroupSnapshot
     * @request POST:/delete-consistency-snapshot-group
     * @response `200` `(WithTaskDeleteConsistencyGroupSnapshot)[]` Ok
     * @response `400` `string`
     */
    deleteConsistencyGroupSnapshot: (data: ConsistencyGroupSnapshotDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteConsistencyGroupSnapshot[], string>({
        path: `/delete-consistency-snapshot-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createConsistencyGroup = {
    /**
     * No description
     *
     * @name CreateConsistencyGroup
     * @request POST:/create-consistency-group
     * @response `200` `(WithTaskConsistencyGroup)[]` Ok
     * @response `400` `string`
     */
    createConsistencyGroup: (data: ConsistencyGroupCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskConsistencyGroup[], string>({
        path: `/create-consistency-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateConsistencyGroup = {
    /**
     * No description
     *
     * @name UpdateConsistencyGroup
     * @request POST:/update-consistency-group
     * @response `200` `(WithTaskConsistencyGroup)[]` Ok
     * @response `400` `string`
     */
    updateConsistencyGroup: (data: ConsistencyGroupUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskConsistencyGroup[], string>({
        path: `/update-consistency-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteConsistencyGroup = {
    /**
     * No description
     *
     * @name DeleteConsistencyGroup
     * @request POST:/delete-consistency-group
     * @response `200` `(WithTaskDeleteConsistencyGroup)[]` Ok
     * @response `400` `string`
     */
    deleteConsistencyGroup: (data: ConsistencyGroupDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteConsistencyGroup[], string>({
        path: `/delete-consistency-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createDatacenter = {
    /**
     * No description
     *
     * @name CreateDatacenter
     * @request POST:/create-datacenter
     * @response `200` `(WithTaskDatacenter)[]` Ok
     * @response `400` `string`
     */
    createDatacenter: (data: DatacenterCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskDatacenter[], string>({
        path: `/create-datacenter`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateDatacenter = {
    /**
     * No description
     *
     * @name UpdateDatacenter
     * @request POST:/update-datacenter
     * @response `200` `(WithTaskDatacenter)[]` Ok
     * @response `400` `string`
     */
    updateDatacenter: (data: DatacenterUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskDatacenter[], string>({
        path: `/update-datacenter`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteDatacenter = {
    /**
     * No description
     *
     * @name DeleteDatacenter
     * @request POST:/delete-datacenter
     * @response `200` `(WithTaskDeleteDatacenter)[]` Ok
     * @response `400` `string`
     */
    deleteDatacenter: (data: DatacenterDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteDatacenter[], string>({
        path: `/delete-datacenter`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  mountDisk = {
    /**
     * No description
     *
     * @name MountDisk
     * @request POST:/mount-disk
     * @response `200` `(WithTaskDisk)[]` Ok
     * @response `400` `string`
     */
    mountDisk: (data: DiskMountParams, params: RequestParams = {}) =>
      this.request<WithTaskDisk[], string>({
        path: `/mount-disk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  unmountDisk = {
    /**
     * No description
     *
     * @name UnmountDisk
     * @request POST:/unmount-disk
     * @response `200` `(WithTaskDisk)[]` Ok
     * @response `400` `string`
     */
    unmountDisk: (data: DiskUnmountParams, params: RequestParams = {}) =>
      this.request<WithTaskDisk[], string>({
        path: `/unmount-disk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createEntityFilter = {
    /**
     * No description
     *
     * @name CreateEntityFilter
     * @request POST:/create-entity-filter
     * @response `200` `(WithTaskEntityFilter)[]` Ok
     * @response `400` `string`
     */
    createEntityFilter: (data: EntityFilterCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskEntityFilter[], string>({
        path: `/create-entity-filter`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateEntityFilter = {
    /**
     * No description
     *
     * @name UpdateEntityFilter
     * @request POST:/update-entity-filter
     * @response `200` `(WithTaskEntityFilter)[]` Ok
     * @response `400` `string`
     */
    updateEntityFilter: (data: EntityFilterUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskEntityFilter[], string>({
        path: `/update-entity-filter`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteEntityFilter = {
    /**
     * No description
     *
     * @name DeleteEntityFilter
     * @request POST:/delete-entity-filter
     * @response `200` `(WithTaskDeleteEntityFilter)[]` Ok
     * @response `400` `string`
     */
    deleteEntityFilter: (data: EntityFilterDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteEntityFilter[], string>({
        path: `/delete-entity-filter`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createGraph = {
    /**
     * No description
     *
     * @name CreateGraph
     * @request POST:/create-graph
     * @response `200` `(WithTaskGraph)[]` Ok
     * @response `400` `string`
     */
    createGraph: (data: GraphCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskGraph[], string>({
        path: `/create-graph`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateGraph = {
    /**
     * No description
     *
     * @name UpdateGraph
     * @request POST:/update-graph
     * @response `200` `(WithTaskGraph)[]` Ok
     * @response `400` `string`
     */
    updateGraph: (data: GraphUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskGraph[], string>({
        path: `/update-graph`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteGraph = {
    /**
     * No description
     *
     * @name DeleteGraph
     * @request POST:/delete-graph
     * @response `200` `(WithTaskDeleteGraph)[]` Ok
     * @response `400` `string`
     */
    deleteGraph: (data: GraphDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteGraph[], string>({
        path: `/delete-graph`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createHost = {
    /**
     * No description
     *
     * @name CreateHost
     * @request POST:/create-host
     * @response `200` `(WithTaskBatchHosts)[]` Ok
     * @response `400` `string`
     */
    createHost: (data: HostCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskBatchHosts[], string>({
        path: `/create-host`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  triggerDiskBlink = {
    /**
     * No description
     *
     * @name TriggerDiskBlink
     * @request POST:/trigger-disk-blink
     * @response `200` `(WithTaskHost)[]` Ok
     * @response `400` `string`
     */
    triggerDiskBlink: (data: TriggerDiskBlinkParams[], params: RequestParams = {}) =>
      this.request<WithTaskHost[], string>({
        path: `/trigger-disk-blink`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateHost = {
    /**
     * No description
     *
     * @name UpdateHost
     * @request POST:/update-host
     * @response `200` `(WithTaskHost)[]` Ok
     * @response `400` `string`
     */
    updateHost: (data: HostUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskHost[], string>({
        path: `/update-host`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createIscsiLunSnapshot = {
    /**
     * No description
     *
     * @name CreateIscsiLunSnapshot
     * @request POST:/create-iscsi-lun-snapshot
     * @response `200` `(WithTaskIscsiLunSnapshot)[]` Ok
     * @response `400` `string`
     */
    createIscsiLunSnapshot: (data: IscsiLunSnapshotCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskIscsiLunSnapshot[], string>({
        path: `/create-iscsi-lun-snapshot`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteIscsiLunSnapshot = {
    /**
     * No description
     *
     * @name DeleteIscsiLunSnapshot
     * @request POST:/delete-iscsi-lun-snapshot
     * @response `200` `(WithTaskDeleteIscsiLunSnapshot)[]` Ok
     * @response `400` `string`
     */
    deleteIscsiLunSnapshot: (data: IscsiLunSnapshotDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteIscsiLunSnapshot[], string>({
        path: `/delete-iscsi-lun-snapshot`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createIscsiLun = {
    /**
     * No description
     *
     * @name CreateIscsiLun
     * @request POST:/create-iscsi-lun
     * @response `200` `(WithTaskIscsiLun)[]` Ok
     * @response `400` `string`
     */
    createIscsiLun: (data: IscsiLunCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskIscsiLun[], string>({
        path: `/create-iscsi-lun`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateIscsiLun = {
    /**
     * No description
     *
     * @name UpdateIscsiLun
     * @request POST:/update-iscsi-lun
     * @response `200` `(WithTaskIscsiLun)[]` Ok
     * @response `400` `string`
     */
    updateIscsiLun: (data: IscsiLunUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskIscsiLun[], string>({
        path: `/update-iscsi-lun`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteIscsiLun = {
    /**
     * No description
     *
     * @name DeleteIscsiLun
     * @request POST:/delete-iscsi-lun
     * @response `200` `(WithTaskDeleteIscsiLun)[]` Ok
     * @response `400` `string`
     */
    deleteIscsiLun: (data: IscsiLunDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteIscsiLun[], string>({
        path: `/delete-iscsi-lun`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  cloneIscsiLunFromSnapshot = {
    /**
     * No description
     *
     * @name CloneIscsiLunFromSnapshot
     * @request POST:/clone-iscsi-lun-from-snapshot
     * @response `200` `(WithTaskIscsiLun)[]` Ok
     * @response `400` `string`
     */
    cloneIscsiLunFromSnapshot: (data: IscsiLunCloneParams[], params: RequestParams = {}) =>
      this.request<WithTaskIscsiLun[], string>({
        path: `/clone-iscsi-lun-from-snapshot`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  rollbackIscsiLunFromSnapshot = {
    /**
     * No description
     *
     * @name RollbackIscsiLunFromSnapshot
     * @request POST:/rollback-iscsi-lun-from-snapshot
     * @response `200` `(WithTaskIscsiLun)[]` Ok
     * @response `400` `string`
     */
    rollbackIscsiLunFromSnapshot: (data: IscsiLunRollbackParams[], params: RequestParams = {}) =>
      this.request<WithTaskIscsiLun[], string>({
        path: `/rollback-iscsi-lun-from-snapshot`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createIscsiTarget = {
    /**
     * No description
     *
     * @name CreateIscsiTarget
     * @request POST:/create-iscsi-target
     * @response `200` `(WithTaskIscsiTarget)[]` Ok
     * @response `400` `string`
     */
    createIscsiTarget: (data: IscsiTargetCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskIscsiTarget[], string>({
        path: `/create-iscsi-target`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateIscsiTarget = {
    /**
     * No description
     *
     * @name UpdateIscsiTarget
     * @request POST:/update-iscsi-target
     * @response `200` `(WithTaskIscsiTarget)[]` Ok
     * @response `400` `string`
     */
    updateIscsiTarget: (data: IscsiTargetUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskIscsiTarget[], string>({
        path: `/update-iscsi-target`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteIscsiTarget = {
    /**
     * No description
     *
     * @name DeleteIscsiTarget
     * @request POST:/delete-iscsi-target
     * @response `200` `(WithTaskDeleteIscsiTarget)[]` Ok
     * @response `400` `string`
     */
    deleteIscsiTarget: (data: IscsiTargetDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteIscsiTarget[], string>({
        path: `/delete-iscsi-target`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  uploadElfImage = {
    /**
     * No description
     *
     * @name CreateElfImage
     * @request POST:/upload-elf-image
     * @response `200` `(UploadTask)[]` Ok
     * @response `400` `string`
     */
    createElfImage: (
      data: { file: File; cluster_id: string; name: string; size: string; description: string; upload_task_id: string },
      params: RequestParams = {},
    ) =>
      this.request<UploadTask[], string>({
        path: `/upload-elf-image`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  updateElfImage = {
    /**
     * No description
     *
     * @name UpdateElfImage
     * @request POST:/update-elf-image
     * @response `200` `(WithTaskElfImage)[]` Ok
     * @response `400` `string`
     */
    updateElfImage: (data: ElfImageUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskElfImage[], string>({
        path: `/update-elf-image`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteElfImage = {
    /**
     * No description
     *
     * @name DeleteElfImage
     * @request POST:/delete-elf-image
     * @response `200` `(WithTaskDeleteElfImage)[]` Ok
     * @response `400` `string`
     */
    deleteElfImage: (data: ElfImageDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteElfImage[], string>({
        path: `/delete-elf-image`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createLabel = {
    /**
     * No description
     *
     * @name CreateLabel
     * @request POST:/create-label
     * @response `200` `(WithTaskLabel)[]` Ok
     * @response `400` `string`
     */
    createLabel: (data: LabelCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskLabel[], string>({
        path: `/create-label`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateLabel = {
    /**
     * No description
     *
     * @name UpdateLabel
     * @request POST:/update-label
     * @response `200` `(WithTaskLabel)[]` Ok
     * @response `400` `string`
     */
    updateLabel: (data: LabelUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskLabel[], string>({
        path: `/update-label`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  addLabelsToResources = {
    /**
     * No description
     *
     * @name AddLabelsToResources
     * @request POST:/add-labels-to-resources
     * @response `200` `(WithTaskLabel)[]` Ok
     * @response `400` `string`
     */
    addLabelsToResources: (data: AddLabelsToResourcesParams, params: RequestParams = {}) =>
      this.request<WithTaskLabel[], string>({
        path: `/add-labels-to-resources`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  removeLabelsFromResources = {
    /**
     * No description
     *
     * @name RemoveLabelsFromResources
     * @request POST:/remove-labels-from-resources
     * @response `200` `(WithTaskLabel)[]` Ok
     * @response `400` `string`
     */
    removeLabelsFromResources: (data: RemoveLabelsFromResourcesParams, params: RequestParams = {}) =>
      this.request<WithTaskLabel[], string>({
        path: `/remove-labels-from-resources`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteLabel = {
    /**
     * No description
     *
     * @name DeleteLabel
     * @request POST:/delete-label
     * @response `200` `(WithTaskDeleteLabel)[]` Ok
     * @response `400` `string`
     */
    deleteLabel: (data: LabelDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteLabel[], string>({
        path: `/delete-label`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateLicense = {
    /**
     * No description
     *
     * @name UpdateDeploy
     * @request POST:/update-license
     * @response `200` `WithTaskLicense` Ok
     * @response `400` `string`
     */
    updateDeploy: (data: LicenseUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskLicense, string>({
        path: `/update-license`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createNamespaceGroup = {
    /**
     * No description
     *
     * @name CreateNamespaceGroup
     * @request POST:/create-namespace-group
     * @response `200` `(WithTaskNamespaceGroup)[]` Ok
     * @response `400` `string`
     */
    createNamespaceGroup: (data: NamespaceGroupCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskNamespaceGroup[], string>({
        path: `/create-namespace-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateNamespaceGroup = {
    /**
     * No description
     *
     * @name UpdateNamespaceGroup
     * @request POST:/update-namespace-group
     * @response `200` `(WithTaskNamespaceGroup)[]` Ok
     * @response `400` `string`
     */
    updateNamespaceGroup: (data: NamespaceGroupUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskNamespaceGroup[], string>({
        path: `/update-namespace-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteNamespaceGroup = {
    /**
     * No description
     *
     * @name DeleteNamespaceGroup
     * @request POST:/delete-namespace-group
     * @response `200` `(WithTaskDeleteNamespaceGroup)[]` Ok
     * @response `400` `string`
     */
    deleteNamespaceGroup: (data: NamespaceGroupDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteNamespaceGroup[], string>({
        path: `/delete-namespace-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createNfsExport = {
    /**
     * No description
     *
     * @name CreateNfsExport
     * @request POST:/create-nfs-export
     * @response `200` `(WithTaskNfsExport)[]` Ok
     * @response `400` `string`
     */
    createNfsExport: (data: NfsExportCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskNfsExport[], string>({
        path: `/create-nfs-export`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateNfsExport = {
    /**
     * No description
     *
     * @name UpdateNfsExport
     * @request POST:/update-nfs-export
     * @response `200` `(WithTaskNfsExport)[]` Ok
     * @response `400` `string`
     */
    updateNfsExport: (data: NfsExportUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskNfsExport[], string>({
        path: `/update-nfs-export`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteNfsExport = {
    /**
     * No description
     *
     * @name DeleteNfsExport
     * @request POST:/delete-nfs-export
     * @response `200` `(WithTaskDeleteNfsExport)[]` Ok
     * @response `400` `string`
     */
    deleteNfsExport: (data: NfsExportDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteNfsExport[], string>({
        path: `/delete-nfs-export`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateNic = {
    /**
     * No description
     *
     * @name UpdateNic
     * @request POST:/update-nic
     * @response `200` `(WithTaskNic)[]` Ok
     * @response `400` `string`
     */
    updateNic: (data: NicUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskNic[], string>({
        path: `/update-nic`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  moveNodeTopo = {
    /**
     * No description
     *
     * @name UpdateNodeTopo
     * @request POST:/move-node-topo
     * @response `200` `(WithTaskNodeTopo)[]` Ok
     * @response `400` `string`
     */
    updateNodeTopo: (data: NodeTopoUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskNodeTopo[], string>({
        path: `/move-node-topo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createNvmfNamespaceSnapshot = {
    /**
     * No description
     *
     * @name CreateNvmfNamespaceSnapshot
     * @request POST:/create-nvmf-namespace-snapshot
     * @response `200` `(WithTaskNvmfNamespaceSnapshot)[]` Ok
     * @response `400` `string`
     */
    createNvmfNamespaceSnapshot: (data: NvmfNamespaceSnapshotCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskNvmfNamespaceSnapshot[], string>({
        path: `/create-nvmf-namespace-snapshot`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteNvmfNamespaceSnapshot = {
    /**
     * No description
     *
     * @name DeleteNvmfNamespaceSnapshot
     * @request POST:/delete-nvmf-namespace-snapshot
     * @response `200` `(WithTaskDeleteNvmfNamespaceSnapshot)[]` Ok
     * @response `400` `string`
     */
    deleteNvmfNamespaceSnapshot: (data: NvmfNamespaceSnapshotDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteNvmfNamespaceSnapshot[], string>({
        path: `/delete-nvmf-namespace-snapshot`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createNvmfNamespace = {
    /**
     * No description
     *
     * @name CreateNvmfNamespace
     * @request POST:/create-nvmf-namespace
     * @response `200` `(WithTaskNvmfNamespace)[]` Ok
     * @response `400` `string`
     */
    createNvmfNamespace: (data: NvmfNamespaceCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskNvmfNamespace[], string>({
        path: `/create-nvmf-namespace`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateNvmfNamespace = {
    /**
     * No description
     *
     * @name UpdateNvmfNamespace
     * @request POST:/update-nvmf-namespace
     * @response `200` `(WithTaskNvmfNamespace)[]` Ok
     * @response `400` `string`
     */
    updateNvmfNamespace: (data: NvmfNamespaceUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskNvmfNamespace[], string>({
        path: `/update-nvmf-namespace`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteNvmfNamespace = {
    /**
     * No description
     *
     * @name DeleteNvmfNamespace
     * @request POST:/delete-nvmf-namespace
     * @response `200` `(WithTaskDeleteNvmfNamespace)[]` Ok
     * @response `400` `string`
     */
    deleteNvmfNamespace: (data: NvmfNamespaceDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteNvmfNamespace[], string>({
        path: `/delete-nvmf-namespace`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  cloneNvmfNamespaceFromSnapshot = {
    /**
     * No description
     *
     * @name CloneNvmfNamespaceFromSnapshot
     * @request POST:/clone-nvmf-namespace-from-snapshot
     * @response `200` `(WithTaskNvmfNamespace)[]` Ok
     * @response `400` `string`
     */
    cloneNvmfNamespaceFromSnapshot: (data: NvmfNamespaceCloneParams[], params: RequestParams = {}) =>
      this.request<WithTaskNvmfNamespace[], string>({
        path: `/clone-nvmf-namespace-from-snapshot`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  rollbackNvmfNamespaceFromSnapshot = {
    /**
     * No description
     *
     * @name RollbackNvmfNamespaceFromSnapshot
     * @request POST:/rollback-nvmf-namespace-from-snapshot
     * @response `200` `(WithTaskNvmfNamespace)[]` Ok
     * @response `400` `string`
     */
    rollbackNvmfNamespaceFromSnapshot: (data: NvmfNamespaceRollbackParams[], params: RequestParams = {}) =>
      this.request<WithTaskNvmfNamespace[], string>({
        path: `/rollback-nvmf-namespace-from-snapshot`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createNvmfSubsystem = {
    /**
     * No description
     *
     * @name CreateNvmfSubsystem
     * @request POST:/create-nvmf-subsystem
     * @response `200` `(WithTaskNvmfSubsystem)[]` Ok
     * @response `400` `string`
     */
    createNvmfSubsystem: (data: NvmfSubsystemCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskNvmfSubsystem[], string>({
        path: `/create-nvmf-subsystem`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateNvmfSubsystem = {
    /**
     * No description
     *
     * @name UpdateNvmfSubsystem
     * @request POST:/update-nvmf-subsystem
     * @response `200` `(WithTaskNvmfSubsystem)[]` Ok
     * @response `400` `string`
     */
    updateNvmfSubsystem: (data: NvmfSubsystemUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskNvmfSubsystem[], string>({
        path: `/update-nvmf-subsystem`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteNvmfSubsystem = {
    /**
     * No description
     *
     * @name DeleteNvmfSubsystem
     * @request POST:/delete-nvmf-subsystem
     * @response `200` `(WithTaskDeleteNvmfSubsystem)[]` Ok
     * @response `400` `string`
     */
    deleteNvmfSubsystem: (data: NvmfSubsystemDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteNvmfSubsystem[], string>({
        path: `/delete-nvmf-subsystem`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createOrganization = {
    /**
     * No description
     *
     * @name CreateOrganization
     * @request POST:/create-organization
     * @response `200` `(WithTaskOrganization)[]` Ok
     * @response `400` `string`
     */
    createOrganization: (data: OrganizationCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskOrganization[], string>({
        path: `/create-organization`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateOrganization = {
    /**
     * No description
     *
     * @name UpdateOrganization
     * @request POST:/update-organization
     * @response `200` `(WithTaskOrganization)[]` Ok
     * @response `400` `string`
     */
    updateOrganization: (data: OrganizationUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskOrganization[], string>({
        path: `/update-organization`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteOrganization = {
    /**
     * No description
     *
     * @name DeleteOrganization
     * @request POST:/delete-organization
     * @response `200` `(WithTaskDeleteOrganization)[]` Ok
     * @response `400` `string`
     */
    deleteOrganization: (data: OrganizationDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteOrganization[], string>({
        path: `/delete-organization`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createRackTopo = {
    /**
     * No description
     *
     * @name CreateRackTopo
     * @request POST:/create-rack-topo
     * @response `200` `(WithTaskRackTopo)[]` Ok
     * @response `400` `string`
     */
    createRackTopo: (data: RackTopoCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskRackTopo[], string>({
        path: `/create-rack-topo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateRackTopo = {
    /**
     * No description
     *
     * @name UpdateRackTopo
     * @request POST:/update-rack-topo
     * @response `200` `(WithTaskRackTopo)[]` Ok
     * @response `400` `string`
     */
    updateRackTopo: (data: RackTopoUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskRackTopo[], string>({
        path: `/update-rack-topo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteRackTopo = {
    /**
     * No description
     *
     * @name DeleteRackTopo
     * @request POST:/delete-rack-topo
     * @response `200` `(WithTaskDeleteRackTopo)[]` Ok
     * @response `400` `string`
     */
    deleteRackTopo: (data: RackTopoDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteRackTopo[], string>({
        path: `/delete-rack-topo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateGlobalRecycleBinSetting = {
    /**
     * No description
     *
     * @name UpdateGlobalRecycleBinSetting
     * @request POST:/update-global-recycle-bin-setting
     * @response `200` `WithTaskGlobalSettings` Ok
     * @response `400` `string`
     */
    updateGlobalRecycleBinSetting: (data: GlobalRecycleBinUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskGlobalSettings, string>({
        path: `/update-global-recycle-bin-setting`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createClusterRecycleBinSetting = {
    /**
     * No description
     *
     * @name CreateClusterRecycleBinSetting
     * @request POST:/create-cluster-recycle-bin-setting
     * @response `200` `(WithTaskClusterSettings)[]` Ok
     * @response `400` `string`
     */
    createClusterRecycleBinSetting: (data: ClusterRecycleBinCreationParams, params: RequestParams = {}) =>
      this.request<WithTaskClusterSettings[], string>({
        path: `/create-cluster-recycle-bin-setting`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateClusterRecycleBinSetting = {
    /**
     * No description
     *
     * @name UpdateClusterRecycleBinSetting
     * @request POST:/update-cluster-recycle-bin-setting
     * @response `200` `(WithTaskClusterSettings)[]` Ok
     * @response `400` `string`
     */
    updateClusterRecycleBinSetting: (data: ClusterRecycleBinUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskClusterSettings[], string>({
        path: `/update-cluster-recycle-bin-setting`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteClusterRecycleBinSetting = {
    /**
     * No description
     *
     * @name DeleteClusterRecycleBinSetting
     * @request POST:/delete-cluster-recycle-bin-setting
     * @response `200` `(WithTaskDeleteClusterRecycleBin)[]` Ok
     * @response `400` `string`
     */
    deleteClusterRecycleBinSetting: (data: ClusterRecycleBinDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteClusterRecycleBin[], string>({
        path: `/delete-cluster-recycle-bin-setting`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createReportTemplate = {
    /**
     * No description
     *
     * @name CreateReportTemplate
     * @request POST:/create-report-template
     * @response `200` `(WithTaskReportTemplate)[]` Ok
     * @response `400` `string`
     */
    createReportTemplate: (data: ReportTemplateCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskReportTemplate[], string>({
        path: `/create-report-template`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateReportTemplate = {
    /**
     * No description
     *
     * @name UpdateReportTemplate
     * @request POST:/update-report-template
     * @response `200` `(WithTaskReportTemplate)[]` Ok
     * @response `400` `string`
     */
    updateReportTemplate: (data: ReportTemplateUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskReportTemplate[], string>({
        path: `/update-report-template`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  generateFromReportTemplate = {
    /**
     * No description
     *
     * @name GenerateFromReportTemplate
     * @request POST:/generate-from-report-template
     * @response `200` `(WithTaskReportTask)[]` Ok
     * @response `400` `string`
     */
    generateFromReportTemplate: (data: ReporteTemplateGenerationParams, params: RequestParams = {}) =>
      this.request<WithTaskReportTask[], string>({
        path: `/generate-from-report-template`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteReportTemplate = {
    /**
     * No description
     *
     * @name DeleteReportTemplate
     * @request POST:/delete-report-template
     * @response `200` `(WithTaskDeleteReportTemplate)[]` Ok
     * @response `400` `string`
     */
    deleteReportTemplate: (data: ReportTemplateDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteReportTemplate[], string>({
        path: `/delete-report-template`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createRole = {
    /**
     * No description
     *
     * @name CreateRole
     * @request POST:/create-role
     * @response `200` `(WithTaskUserRoleNext)[]` Ok
     * @response `400` `string`
     */
    createRole: (data: RoleCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskUserRoleNext[], string>({
        path: `/create-role`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateRole = {
    /**
     * No description
     *
     * @name UpdateRole
     * @request POST:/update-role
     * @response `200` `(WithTaskUserRoleNext)[]` Ok
     * @response `400` `string`
     */
    updateRole: (data: RoleUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskUserRoleNext[], string>({
        path: `/update-role`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteRole = {
    /**
     * No description
     *
     * @name DeleteRole
     * @request POST:/delete-role
     * @response `200` `(WithTaskDeleteRole)[]` Ok
     * @response `400` `string`
     */
    deleteRole: (data: RoleDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteRole[], string>({
        path: `/delete-role`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  rollbackSnapshotGroup = {
    /**
     * No description
     *
     * @name RollbackSnapshotGroup
     * @request POST:/rollback-snapshot-group
     * @response `200` `(WithTaskSnapshotGroup)[]` Ok
     * @response `400` `string`
     */
    rollbackSnapshotGroup: (data: SnapshotGroupRollbackParams, params: RequestParams = {}) =>
      this.request<WithTaskSnapshotGroup[], string>({
        path: `/rollback-snapshot-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  cloneSnapshotGroup = {
    /**
     * No description
     *
     * @name CloneSnapshotGroup
     * @request POST:/clone-snapshot-group
     * @response `200` `(WithTaskSnapshotGroup)[]` Ok
     * @response `400` `string`
     */
    cloneSnapshotGroup: (data: SnapshotGroupCloneParams[], params: RequestParams = {}) =>
      this.request<WithTaskSnapshotGroup[], string>({
        path: `/clone-snapshot-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  keepSnapshotGroup = {
    /**
     * No description
     *
     * @name KeepSnapshotGroup
     * @request POST:/keep-snapshot-group
     * @response `200` `(WithTaskSnapshotGroup)[]` Ok
     * @response `400` `string`
     */
    keepSnapshotGroup: (data: SnapshotGroupKeepParams, params: RequestParams = {}) =>
      this.request<WithTaskSnapshotGroup[], string>({
        path: `/keep-snapshot-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteSnapshotGroup = {
    /**
     * No description
     *
     * @name DeleteSnapshotGroup
     * @request POST:/delete-snapshot-group
     * @response `200` `(WithTaskDeleteSnapshotGroup)[]` Ok
     * @response `400` `string`
     */
    deleteSnapshotGroup: (data: SnapshotGroupDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteSnapshotGroup[], string>({
        path: `/delete-snapshot-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createSnapshotPlan = {
    /**
     * No description
     *
     * @name CreateSnapshotPlan
     * @request POST:/create-snapshot-plan
     * @response `200` `(WithTaskSnapshotPlan)[]` Ok
     * @response `400` `string`
     */
    createSnapshotPlan: (data: SnapshotPlanCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskSnapshotPlan[], string>({
        path: `/create-snapshot-plan`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateSnapshotPlan = {
    /**
     * No description
     *
     * @name UpdateSnapshotPlan
     * @request POST:/update-snapshot-plan
     * @response `200` `(WithTaskSnapshotPlan)[]` Ok
     * @response `400` `string`
     */
    updateSnapshotPlan: (data: SnapshotPlanUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskSnapshotPlan[], string>({
        path: `/update-snapshot-plan`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteSnapshotPlan = {
    /**
     * No description
     *
     * @name DeleteSnapshotPlan
     * @request POST:/delete-snapshot-plan
     * @response `200` `(WithTaskDeleteSnapshotPlan)[]` Ok
     * @response `400` `string`
     */
    deleteSnapshotPlan: (data: SnapshotPlanDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteSnapshotPlan[], string>({
        path: `/delete-snapshot-plan`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  executeSnapshotPlan = {
    /**
     * No description
     *
     * @name ExecuteSnapshotPlan
     * @request POST:/execute-snapshot-plan
     * @response `200` `(WithTaskSnapshotPlan)[]` Ok
     * @response `400` `string`
     */
    executeSnapshotPlan: (data: SnapshotPlanExecutionParams, params: RequestParams = {}) =>
      this.request<WithTaskSnapshotPlan[], string>({
        path: `/execute-snapshot-plan`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  suspendSnapshotPlan = {
    /**
     * No description
     *
     * @name SuspendSnapshotPlan
     * @request POST:/suspend-snapshot-plan
     * @response `200` `(WithTaskSnapshotPlan)[]` Ok
     * @response `400` `string`
     */
    suspendSnapshotPlan: (data: SnapshotPlanSuspendedParams, params: RequestParams = {}) =>
      this.request<WithTaskSnapshotPlan[], string>({
        path: `/suspend-snapshot-plan`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  resumeSnapshotPlan = {
    /**
     * No description
     *
     * @name ResumeSnapshotPlan
     * @request POST:/resume-snapshot-plan
     * @response `200` `(WithTaskSnapshotPlan)[]` Ok
     * @response `400` `string`
     */
    resumeSnapshotPlan: (data: SnapshotPlanResumeParams, params: RequestParams = {}) =>
      this.request<WithTaskSnapshotPlan[], string>({
        path: `/resume-snapshot-plan`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createSnmpTransport = {
    /**
     * No description
     *
     * @name CreateSnmpTransport
     * @request POST:/create-snmp-transport
     * @response `200` `(WithTaskSnmpTransport)[]` Ok
     * @response `400` `string`
     */
    createSnmpTransport: (data: SnmpTransportCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskSnmpTransport[], string>({
        path: `/create-snmp-transport`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateSnmpTransport = {
    /**
     * No description
     *
     * @name UpdateSnmpTransport
     * @request POST:/update-snmp-transport
     * @response `200` `(WithTaskSnmpTransport)[]` Ok
     * @response `400` `string`
     */
    updateSnmpTransport: (data: SnmpTransportUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskSnmpTransport[], string>({
        path: `/update-snmp-transport`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteSnmpTransport = {
    /**
     * No description
     *
     * @name DeleteSnmpTransport
     * @request POST:/delete-snmp-transport
     * @response `200` `(WithTaskDeleteSnmpTransport)[]` Ok
     * @response `400` `string`
     */
    deleteSnmpTransport: (data: SnmpTransportDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteSnmpTransport[], string>({
        path: `/delete-snmp-transport`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createSnmpTrapReceiver = {
    /**
     * No description
     *
     * @name CreateSnmpTrapReceiver
     * @request POST:/create-snmp-trap-receiver
     * @response `200` `(WithTaskSnmpTrapReceiver)[]` Ok
     * @response `400` `string`
     */
    createSnmpTrapReceiver: (data: SnmpTrapReceiverCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskSnmpTrapReceiver[], string>({
        path: `/create-snmp-trap-receiver`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateSnmpTrapReceiver = {
    /**
     * No description
     *
     * @name UpdateSnmpTrapReceiver
     * @request POST:/update-snmp-trap-receiver
     * @response `200` `(WithTaskSnmpTrapReceiver)[]` Ok
     * @response `400` `string`
     */
    updateSnmpTrapReceiver: (data: SnmpTrapReceiverUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskSnmpTrapReceiver[], string>({
        path: `/update-snmp-trap-receiver`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteSnmpTrapReceiver = {
    /**
     * No description
     *
     * @name DeleteSnmpTrapReceiver
     * @request POST:/delete-snmp-trap-receiver
     * @response `200` `(WithTaskDeleteSnmpTrapReceiver)[]` Ok
     * @response `400` `string`
     */
    deleteSnmpTrapReceiver: (data: SnmpTrapReceiverDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteSnmpTrapReceiver[], string>({
        path: `/delete-snmp-trap-receiver`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  mountUsbDevice = {
    /**
     * No description
     *
     * @name MountUsbDevice
     * @request POST:/mount-usb-device
     * @response `200` `(WithTaskUsbDevice)[]` Ok
     * @response `400` `string`
     */
    mountUsbDevice: (data: UsbDeviceMountParams, params: RequestParams = {}) =>
      this.request<WithTaskUsbDevice[], string>({
        path: `/mount-usb-device`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  unmountUsbDevice = {
    /**
     * No description
     *
     * @name UnmountUsbDevice
     * @request POST:/unmount-usb-device
     * @response `200` `(WithTaskUsbDevice)[]` Ok
     * @response `400` `string`
     */
    unmountUsbDevice: (data: UsbDeviceUnmountParams, params: RequestParams = {}) =>
      this.request<WithTaskUsbDevice[], string>({
        path: `/unmount-usb-device`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  login = {
    /**
     * No description
     *
     * @name Login
     * @request POST:/login
     * @response `200` `WithTaskTokenString` Ok
     * @response `400` `string`
     */
    login: (data: LoginInput, params: RequestParams = {}) =>
      this.request<WithTaskTokenString, string>({
        path: `/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createUser = {
    /**
     * No description
     *
     * @name CreateUser
     * @request POST:/create-user
     * @response `200` `(WithTaskUser)[]` Ok
     * @response `400` `string`
     */
    createUser: (data: UserCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskUser[], string>({
        path: `/create-user`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateUser = {
    /**
     * No description
     *
     * @name UpdateUser
     * @request POST:/update-user
     * @response `200` `(WithTaskUser)[]` Ok
     * @response `400` `string`
     */
    updateUser: (data: UserUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskUser[], string>({
        path: `/update-user`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteUser = {
    /**
     * No description
     *
     * @name DeleteUser
     * @request POST:/delete-user
     * @response `200` `(WithTaskDeleteUser)[]` Ok
     * @response `400` `string`
     */
    deleteUser: (data: UserDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteUser[], string>({
        path: `/delete-user`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createVdsWithMigrateVlan = {
    /**
     * No description
     *
     * @name CreateVdsWithMigrateVlan
     * @request POST:/create-vds-with-migrate-vlan
     * @response `200` `(WithTaskVds)[]` Ok
     * @response `400` `string`
     */
    createVdsWithMigrateVlan: (data: VdsCreationWithMigrateVlanParams[], params: RequestParams = {}) =>
      this.request<WithTaskVds[], string>({
        path: `/create-vds-with-migrate-vlan`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createVdsWithAccessVlan = {
    /**
     * No description
     *
     * @name CreateVdsWithAccessVlan
     * @request POST:/create-vds-with-access-vlan
     * @response `200` `(WithTaskVds)[]` Ok
     * @response `400` `string`
     */
    createVdsWithAccessVlan: (data: VdsCreationWithMAccessVlanParams[], params: RequestParams = {}) =>
      this.request<WithTaskVds[], string>({
        path: `/create-vds-with-access-vlan`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createVds = {
    /**
     * No description
     *
     * @name CreateVds
     * @request POST:/create-vds
     * @response `200` `(WithTaskVds)[]` Ok
     * @response `400` `string`
     */
    createVds: (data: VdsCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskVds[], string>({
        path: `/create-vds`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateVds = {
    /**
     * No description
     *
     * @name UpdateVds
     * @request POST:/update-vds
     * @response `200` `(WithTaskVds)[]` Ok
     * @response `400` `string`
     */
    updateVds: (data: VdsUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskVds[], string>({
        path: `/update-vds`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteVds = {
    /**
     * No description
     *
     * @name DeleteVds
     * @request POST:/delete-vds
     * @response `200` `(WithTaskDeleteVds)[]` Ok
     * @response `400` `string`
     */
    deleteVds: (data: VdsDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteVds[], string>({
        path: `/delete-vds`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createView = {
    /**
     * No description
     *
     * @name CreateView
     * @request POST:/create-view
     * @response `200` `(WithTaskView)[]` Ok
     * @response `400` `string`
     */
    createView: (data: ViewCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskView[], string>({
        path: `/create-view`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateView = {
    /**
     * No description
     *
     * @name UpdateView
     * @request POST:/update-view
     * @response `200` `(WithTaskView)[]` Ok
     * @response `400` `string`
     */
    updateView: (data: ViewUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskView[], string>({
        path: `/update-view`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteView = {
    /**
     * No description
     *
     * @name DeleteView
     * @request POST:/delete-view
     * @response `200` `(WithTaskDeleteView)[]` Ok
     * @response `400` `string`
     */
    deleteView: (data: ViewDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteView[], string>({
        path: `/delete-view`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createVmVlan = {
    /**
     * No description
     *
     * @name CreateVmVlan
     * @request POST:/create-vm-vlan
     * @response `200` `(WithTaskVlan)[]` Ok
     * @response `400` `string`
     */
    createVmVlan: (data: VmVlanCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskVlan[], string>({
        path: `/create-vm-vlan`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateVmVlan = {
    /**
     * No description
     *
     * @name UpdateVlan
     * @request POST:/update-vm-vlan
     * @response `200` `(WithTaskVlan)[]` Ok
     * @response `400` `string`
     */
    updateVlan: (data: VmVlanUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskVlan[], string>({
        path: `/update-vm-vlan`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateManagementVlan = {
    /**
     * No description
     *
     * @name UpdateManagementVlan
     * @request POST:/update-management-vlan
     * @response `200` `(WithTaskVlan)[]` Ok
     * @response `400` `string`
     */
    updateManagementVlan: (data: ManagementVlanUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskVlan[], string>({
        path: `/update-management-vlan`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateMigrationVlan = {
    /**
     * No description
     *
     * @name UpdateMigrationVlan
     * @request POST:/update-migration-vlan
     * @response `200` `(WithTaskVlan)[]` Ok
     * @response `400` `string`
     */
    updateMigrationVlan: (data: MigrationVlanUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskVlan[], string>({
        path: `/update-migration-vlan`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteVmVlan = {
    /**
     * No description
     *
     * @name DeleteVlan
     * @request POST:/delete-vm-vlan
     * @response `200` `(WithTaskDeleteVlan)[]` Ok
     * @response `400` `string`
     */
    deleteVlan: (data: VlanDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteVlan[], string>({
        path: `/delete-vm-vlan`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createVmFolder = {
    /**
     * No description
     *
     * @name CreateVmFolder
     * @request POST:/create-vm-folder
     * @response `200` `(WithTaskVmFolder)[]` Ok
     * @response `400` `string`
     */
    createVmFolder: (data: VmFolderCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskVmFolder[], string>({
        path: `/create-vm-folder`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateVmFolder = {
    /**
     * No description
     *
     * @name UpdateVmFolder
     * @request POST:/update-vm-folder
     * @response `200` `(WithTaskVmFolder)[]` Ok
     * @response `400` `string`
     */
    updateVmFolder: (data: VmFolderUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskVmFolder[], string>({
        path: `/update-vm-folder`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteVmFolder = {
    /**
     * No description
     *
     * @name DeleteVmFolder
     * @request POST:/delete-vm-folder
     * @response `200` `(WithTaskDeleteVmFolder)[]` Ok
     * @response `400` `string`
     */
    deleteVmFolder: (data: VmFolderDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteVmFolder[], string>({
        path: `/delete-vm-folder`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createVmPlacementGroup = {
    /**
     * No description
     *
     * @name CreateVmPlacementGroup
     * @request POST:/create-vm-placement-group
     * @response `200` `(WithTaskVmPlacementGroup)[]` Ok
     * @response `400` `string`
     */
    createVmPlacementGroup: (data: VmPlacementGroupCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskVmPlacementGroup[], string>({
        path: `/create-vm-placement-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateVmPlacementGroup = {
    /**
     * No description
     *
     * @name UpdateVmPlacementGroup
     * @request POST:/update-vm-placement-group
     * @response `200` `(WithTaskVmPlacementGroup)[]` Ok
     * @response `400` `string`
     */
    updateVmPlacementGroup: (data: VmPlacementGroupUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskVmPlacementGroup[], string>({
        path: `/update-vm-placement-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteVmPlacementGroup = {
    /**
     * No description
     *
     * @name DeleteVmPlacementGroup
     * @request POST:/delete-vm-placement-group
     * @response `200` `(WithTaskDeleteVmPlacementGroup)[]` Ok
     * @response `400` `string`
     */
    deleteVmPlacementGroup: (data: VmPlacementGroupDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteVmPlacementGroup[], string>({
        path: `/delete-vm-placement-group`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createVmSnapshot = {
    /**
     * No description
     *
     * @name CreateVmSnapshot
     * @request POST:/create-vm-snapshot
     * @response `200` `(WithTaskVmSnapshot)[]` Ok
     * @response `400` `string`
     */
    createVmSnapshot: (data: VmSnapshotCreationParams, params: RequestParams = {}) =>
      this.request<WithTaskVmSnapshot[], string>({
        path: `/create-vm-snapshot`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteVmSnapshot = {
    /**
     * No description
     *
     * @name DeleteVmSnapshot
     * @request POST:/delete-vm-snapshot
     * @response `200` `(WithTaskDeleteVmSnapshot)[]` Ok
     * @response `400` `string`
     */
    deleteVmSnapshot: (data: VmSnapshotDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteVmSnapshot[], string>({
        path: `/delete-vm-snapshot`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  cloneVmTemplateFromVm = {
    /**
     * No description
     *
     * @name CloneVmTemplateFromVm
     * @request POST:/clone-vm-template-from-vm
     * @response `200` `(WithTaskVmTemplate)[]` Ok
     * @response `400` `string`
     */
    cloneVmTemplateFromVm: (data: VmTemplateCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskVmTemplate[], string>({
        path: `/clone-vm-template-from-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  convertVmTemplateFromVm = {
    /**
     * No description
     *
     * @name ConvertVmTemplateFromVm
     * @request POST:/convert-vm-template-from-vm
     * @response `200` `(WithTaskVmTemplate)[]` Ok
     * @response `400` `string`
     */
    convertVmTemplateFromVm: (data: VmTemplateCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskVmTemplate[], string>({
        path: `/convert-vm-template-from-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateVmTemplate = {
    /**
     * No description
     *
     * @name UpdateVmTemplateFromVm
     * @request POST:/update-vm-template
     * @response `200` `(WithTaskVmTemplate)[]` Ok
     * @response `400` `string`
     */
    updateVmTemplateFromVm: (data: VmTemplateUpdationParams, params: RequestParams = {}) =>
      this.request<WithTaskVmTemplate[], string>({
        path: `/update-vm-template`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteVmTemplate = {
    /**
     * No description
     *
     * @name DeleteVmTemplateFromVm
     * @request POST:/delete-vm-template
     * @response `200` `(WithTaskDeleteVmTemplate)[]` Ok
     * @response `400` `string`
     */
    deleteVmTemplateFromVm: (data: VmTemplateDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteVmTemplate[], string>({
        path: `/delete-vm-template`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createVmVolume = {
    /**
     * No description
     *
     * @name CreateVmVolume
     * @request POST:/create-vm-volume
     * @response `200` `(WithTaskVmVolume)[]` Ok
     * @response `400` `string`
     */
    createVmVolume: (data: VmVolumeCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskVmVolume[], string>({
        path: `/create-vm-volume`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteVmVolume = {
    /**
     * No description
     *
     * @name DeleteVmVolumeFromVm
     * @request POST:/delete-vm-volume
     * @response `200` `(WithTaskDeleteVmVolume)[]` Ok
     * @response `400` `string`
     */
    deleteVmVolumeFromVm: (data: VmVolumeDeletionParams, params: RequestParams = {}) =>
      this.request<WithTaskDeleteVmVolume[], string>({
        path: `/delete-vm-volume`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createVm = {
    /**
     * No description
     *
     * @name CreateVm
     * @request POST:/create-vm
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    createVm: (data: VmCreationParams[], params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/create-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createVmFromTemplate = {
    /**
     * No description
     *
     * @name CreateVmFromTemplate
     * @request POST:/create-vm-from-template
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    createVmFromTemplate: (data: VmCreateVmFromTemplateParams[], params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/create-vm-from-template`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  convertVmTemplateToVm = {
    /**
     * No description
     *
     * @name ConvertVmTemplateToVm
     * @request POST:/convert-vm-template-to-vm
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    convertVmTemplateToVm: (data: ConvertVmTemplateToVmParams[], params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/convert-vm-template-to-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  cloneVm = {
    /**
     * No description
     *
     * @name CloneVm
     * @request POST:/clone-vm
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    cloneVm: (data: VmCloneParams[], params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/clone-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  rebuildVmFromSnapshot = {
    /**
     * No description
     *
     * @name RebuildVm
     * @request POST:/rebuild-vm-from-snapshot
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    rebuildVm: (data: VmRebuildParams[], params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/rebuild-vm-from-snapshot`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  rollbackVm = {
    /**
     * No description
     *
     * @name RollbackVm
     * @request POST:/rollback-vm
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    rollbackVm: (data: VmRollbackParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/rollback-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateVmBasicInfo = {
    /**
     * No description
     *
     * @name UpdateVm
     * @request POST:/update-vm-basic-info
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    updateVm: (data: VmUpdateParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/update-vm-basic-info`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  moveVmToRecycle = {
    /**
     * No description
     *
     * @name MoveVmToRecycleBin
     * @request POST:/move-vm-to-recycle
     * @response `200` `({ task_id: string | null, data: (DeleteVm | null) })[]` Ok
     * @response `400` `string`
     */
    moveVmToRecycleBin: (data: VmOperateParams, params: RequestParams = {}) =>
      this.request<{ task_id: string | null; data: DeleteVm | null }[], string>({
        path: `/move-vm-to-recycle`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  recoverVmFromRecycle = {
    /**
     * No description
     *
     * @name RecoverVmFromRecycleBin
     * @request POST:/recover-vm-from-recycle
     * @response `200` `({ task_id: string | null, data: (DeleteVm | null) })[]` Ok
     * @response `400` `string`
     */
    recoverVmFromRecycleBin: (data: VmOperateParams, params: RequestParams = {}) =>
      this.request<{ task_id: string | null; data: DeleteVm | null }[], string>({
        path: `/recover-vm-from-recycle`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deleteVm = {
    /**
     * No description
     *
     * @name DeleteVm
     * @request POST:/delete-vm
     * @response `200` `({ task_id: string | null, data: (DeleteVm | null) })[]` Ok
     * @response `400` `string`
     */
    deleteVm: (data: VmOperateParams, params: RequestParams = {}) =>
      this.request<{ task_id: string | null; data: DeleteVm | null }[], string>({
        path: `/delete-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  startVm = {
    /**
     * No description
     *
     * @name StartVm
     * @request POST:/start-vm
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    startVm: (data: VmStartParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/start-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  restartVm = {
    /**
     * No description
     *
     * @name RestartVm
     * @request POST:/restart-vm
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    restartVm: (data: VmOperateParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/restart-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  forceRestartVm = {
    /**
     * No description
     *
     * @name ForceRestartVm
     * @request POST:/force-restart-vm
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    forceRestartVm: (data: VmOperateParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/force-restart-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  shutdownVm = {
    /**
     * No description
     *
     * @name ShutDownVm
     * @request POST:/shutdown-vm
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    shutDownVm: (data: VmOperateParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/shutdown-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  poweroffVm = {
    /**
     * No description
     *
     * @name ForceShutDownVm
     * @request POST:/poweroff-vm
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    forceShutDownVm: (data: VmOperateParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/poweroff-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  suspendVm = {
    /**
     * No description
     *
     * @name SuspendVm
     * @request POST:/suspend-vm
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    suspendVm: (data: VmOperateParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/suspend-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  resumeVm = {
    /**
     * No description
     *
     * @name ResumeVm
     * @request POST:/resume-vm
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    resumeVm: (data: VmOperateParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/resume-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  addVmDisk = {
    /**
     * No description
     *
     * @name AddVmDisk
     * @request POST:/add-vm-disk
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    addVmDisk: (data: VmAddDiskParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/add-vm-disk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateVmDisk = {
    /**
     * No description
     *
     * @name UpdateVmDisk
     * @request POST:/update-vm-disk
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    updateVmDisk: (data: VmUpdateDiskParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/update-vm-disk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  removeVmDisk = {
    /**
     * No description
     *
     * @name RemoveVmDisk
     * @request POST:/remove-vm-disk
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    removeVmDisk: (data: VmRemoveDiskParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/remove-vm-disk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  addVmCdRom = {
    /**
     * No description
     *
     * @name AddVmCdRom
     * @request POST:/add-vm-cd-rom
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    addVmCdRom: (data: VmAddCdRomParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/add-vm-cd-rom`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  removeVmCdRom = {
    /**
     * No description
     *
     * @name RemoveVmCdRom
     * @request POST:/remove-vm-cd-rom
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    removeVmCdRom: (data: VmRemoveCdRomParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/remove-vm-cd-rom`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  addVmNic = {
    /**
     * No description
     *
     * @name AddVmNic
     * @request POST:/add-vm-nic
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    addVmNic: (data: VmAddNicParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/add-vm-nic`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateVmNic = {
    /**
     * No description
     *
     * @name UpdateVmNic
     * @request POST:/update-vm-nic
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    updateVmNic: (data: VmUpdateNicParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/update-vm-nic`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  removeVmNic = {
    /**
     * No description
     *
     * @name RemoveVmNic
     * @request POST:/remove-vm-nic
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    removeVmNic: (data: VmRemoveNicParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/remove-vm-nic`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  installVmtools = {
    /**
     * No description
     *
     * @name InstallVmtools
     * @request POST:/install-vmtools
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    installVmtools: (data: InstallVmtoolsParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/install-vmtools`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  migrateVm = {
    /**
     * No description
     *
     * @name MigRateVm
     * @request POST:/migrate-vm
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    migRateVm: (data: VmMigrateParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/migrate-vm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  addVmToFolder = {
    /**
     * No description
     *
     * @name AddVmToFolder
     * @request POST:/add-vm-to-folder
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    addVmToFolder: (data: VmAddFolderParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/add-vm-to-folder`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  removeVmFromFolder = {
    /**
     * No description
     *
     * @name RemoveVmToFolder
     * @request POST:/remove-vm-from-folder
     * @response `200` `(WithTaskVm)[]` Ok
     * @response `400` `string`
     */
    removeVmToFolder: (data: VmOperateParams, params: RequestParams = {}) =>
      this.request<WithTaskVm[], string>({
        path: `/remove-vm-from-folder`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
