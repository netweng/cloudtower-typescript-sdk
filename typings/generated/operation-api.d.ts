export declare type NotifierLanguageCode = "EN_US" | "ZH_CN";
export declare type NotifierSecurityMode = "SSL" | "STARTTLS" | "UNSPECIFIED";
export interface AlertNotifier {
    disabled: boolean;
    email_from?: string | null;
    email_tos: string[];
    id: string;
    language_code?: NotifierLanguageCode | null;
    notice_severities: string[];
    security_mode?: NotifierSecurityMode | null;
    smtp_server_host?: string | null;
    smtp_server_port?: number | null;
    username?: string | null;
}
export declare type AlertNotifierOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "disabled_ASC" | "disabled_DESC" | "email_from_ASC" | "email_from_DESC" | "id_ASC" | "id_DESC" | "language_code_ASC" | "language_code_DESC" | "password_ASC" | "password_DESC" | "security_mode_ASC" | "security_mode_DESC" | "smtp_server_host_ASC" | "smtp_server_host_DESC" | "smtp_server_port_ASC" | "smtp_server_port_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "username_ASC" | "username_DESC";
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
    smtp_server_port?: number | null;
    smtp_server_port_gt?: number | null;
    smtp_server_port_gte?: number | null;
    smtp_server_port_in?: number[] | null;
    smtp_server_port_lt?: number | null;
    smtp_server_port_lte?: number | null;
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
    first?: number | null;
    last?: number | null;
    orderBy?: AlertNotifierOrderByInput | null;
    skip?: number | null;
    where?: AlertNotifierWhereInput | null;
}
export interface AlertNotifierConnection {
    aggregate: {
        count: number;
    };
}
export interface GetAlertNotifiersConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: AlertNotifierOrderByInput | null;
    skip?: number | null;
    where?: AlertNotifierWhereInput | null;
}
export declare type SeverityEnum = "CRITICAL" | "INFO" | "NOTICE" | "SEVERITY_UNSPECIFIED";
export interface AlertRule {
    cluster: {
        name: string;
        id: string;
    };
    customized: boolean;
    disabled: boolean;
    global_alert_rule: {
        name: string;
        id: string;
    };
    id: string;
    local_id: string;
    thresholds: {
        value?: number | null;
        severity?: SeverityEnum | null;
        quantile?: number | null;
    }[];
}
export declare type AlertRuleOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "customized_ASC" | "customized_DESC" | "disabled_ASC" | "disabled_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "thresholds_ASC" | "thresholds_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
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
    failure_data_space?: number | null;
    failure_data_space_gt?: number | null;
    failure_data_space_gte?: number | null;
    failure_data_space_in?: number[] | null;
    failure_data_space_lt?: number | null;
    failure_data_space_lte?: number | null;
    failure_data_space_not?: number | null;
    failure_data_space_not_in?: number[] | null;
    has_metrox?: boolean | null;
    has_metrox_not?: boolean | null;
    has_remote_backup?: boolean | null;
    has_remote_backup_not?: boolean | null;
    host_num?: number | null;
    host_num_gt?: number | null;
    host_num_gte?: number | null;
    host_num_in?: number[] | null;
    host_num_lt?: number | null;
    host_num_lte?: number | null;
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
    max_chunk_num?: number | null;
    max_chunk_num_gt?: number | null;
    max_chunk_num_gte?: number | null;
    max_chunk_num_in?: number[] | null;
    max_chunk_num_lt?: number | null;
    max_chunk_num_lte?: number | null;
    max_chunk_num_not?: number | null;
    max_chunk_num_not_in?: number[] | null;
    max_physical_data_capacity?: number | null;
    max_physical_data_capacity_gt?: number | null;
    max_physical_data_capacity_gte?: number | null;
    max_physical_data_capacity_in?: number[] | null;
    max_physical_data_capacity_lt?: number | null;
    max_physical_data_capacity_lte?: number | null;
    max_physical_data_capacity_not?: number | null;
    max_physical_data_capacity_not_in?: number[] | null;
    max_physical_data_capacity_per_node?: number | null;
    max_physical_data_capacity_per_node_gt?: number | null;
    max_physical_data_capacity_per_node_gte?: number | null;
    max_physical_data_capacity_per_node_in?: number[] | null;
    max_physical_data_capacity_per_node_lt?: number | null;
    max_physical_data_capacity_per_node_lte?: number | null;
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
    migration_data_size?: number | null;
    migration_data_size_gt?: number | null;
    migration_data_size_gte?: number | null;
    migration_data_size_in?: number[] | null;
    migration_data_size_lt?: number | null;
    migration_data_size_lte?: number | null;
    migration_data_size_not?: number | null;
    migration_data_size_not_in?: number[] | null;
    migration_speed?: number | null;
    migration_speed_gt?: number | null;
    migration_speed_gte?: number | null;
    migration_speed_in?: number[] | null;
    migration_speed_lt?: number | null;
    migration_speed_lte?: number | null;
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
    provisioned_cpu_cores?: number | null;
    provisioned_cpu_cores_for_active_vm?: number | null;
    provisioned_cpu_cores_for_active_vm_gt?: number | null;
    provisioned_cpu_cores_for_active_vm_gte?: number | null;
    provisioned_cpu_cores_for_active_vm_in?: number[] | null;
    provisioned_cpu_cores_for_active_vm_lt?: number | null;
    provisioned_cpu_cores_for_active_vm_lte?: number | null;
    provisioned_cpu_cores_for_active_vm_not?: number | null;
    provisioned_cpu_cores_for_active_vm_not_in?: number[] | null;
    provisioned_cpu_cores_gt?: number | null;
    provisioned_cpu_cores_gte?: number | null;
    provisioned_cpu_cores_in?: number[] | null;
    provisioned_cpu_cores_lt?: number | null;
    provisioned_cpu_cores_lte?: number | null;
    provisioned_cpu_cores_not?: number | null;
    provisioned_cpu_cores_not_in?: number[] | null;
    provisioned_for_active_vm_ratio?: number | null;
    provisioned_for_active_vm_ratio_gt?: number | null;
    provisioned_for_active_vm_ratio_gte?: number | null;
    provisioned_for_active_vm_ratio_in?: number[] | null;
    provisioned_for_active_vm_ratio_lt?: number | null;
    provisioned_for_active_vm_ratio_lte?: number | null;
    provisioned_for_active_vm_ratio_not?: number | null;
    provisioned_for_active_vm_ratio_not_in?: number[] | null;
    provisioned_memory_bytes?: number | null;
    provisioned_memory_bytes_gt?: number | null;
    provisioned_memory_bytes_gte?: number | null;
    provisioned_memory_bytes_in?: number[] | null;
    provisioned_memory_bytes_lt?: number | null;
    provisioned_memory_bytes_lte?: number | null;
    provisioned_memory_bytes_not?: number | null;
    provisioned_memory_bytes_not_in?: number[] | null;
    provisioned_ratio?: number | null;
    provisioned_ratio_gt?: number | null;
    provisioned_ratio_gte?: number | null;
    provisioned_ratio_in?: number[] | null;
    provisioned_ratio_lt?: number | null;
    provisioned_ratio_lte?: number | null;
    provisioned_ratio_not?: number | null;
    provisioned_ratio_not_in?: number[] | null;
    rdma_enabled?: boolean | null;
    rdma_enabled_not?: boolean | null;
    recover_data_size?: number | null;
    recover_data_size_gt?: number | null;
    recover_data_size_gte?: number | null;
    recover_data_size_in?: number[] | null;
    recover_data_size_lt?: number | null;
    recover_data_size_lte?: number | null;
    recover_data_size_not?: number | null;
    recover_data_size_not_in?: number[] | null;
    recover_speed?: number | null;
    recover_speed_gt?: number | null;
    recover_speed_gte?: number | null;
    recover_speed_in?: number[] | null;
    recover_speed_lt?: number | null;
    recover_speed_lte?: number | null;
    recover_speed_not?: number | null;
    recover_speed_not_in?: number[] | null;
    reserved_cpu_cores_for_system_service?: number | null;
    reserved_cpu_cores_for_system_service_gt?: number | null;
    reserved_cpu_cores_for_system_service_gte?: number | null;
    reserved_cpu_cores_for_system_service_in?: number[] | null;
    reserved_cpu_cores_for_system_service_lt?: number | null;
    reserved_cpu_cores_for_system_service_lte?: number | null;
    reserved_cpu_cores_for_system_service_not?: number | null;
    reserved_cpu_cores_for_system_service_not_in?: number[] | null;
    running_vm_num?: number | null;
    running_vm_num_gt?: number | null;
    running_vm_num_gte?: number | null;
    running_vm_num_in?: number[] | null;
    running_vm_num_lt?: number | null;
    running_vm_num_lte?: number | null;
    running_vm_num_not?: number | null;
    running_vm_num_not_in?: number[] | null;
    settings?: ClusterSettingsWhereInput | null;
    software_edition?: SoftwareEdition | null;
    software_edition_in?: SoftwareEdition[] | null;
    software_edition_not?: SoftwareEdition | null;
    software_edition_not_in?: SoftwareEdition[] | null;
    stopped_vm_num?: number | null;
    stopped_vm_num_gt?: number | null;
    stopped_vm_num_gte?: number | null;
    stopped_vm_num_in?: number[] | null;
    stopped_vm_num_lt?: number | null;
    stopped_vm_num_lte?: number | null;
    stopped_vm_num_not?: number | null;
    stopped_vm_num_not_in?: number[] | null;
    stretch?: boolean | null;
    stretch_not?: boolean | null;
    suspended_vm_num?: number | null;
    suspended_vm_num_gt?: number | null;
    suspended_vm_num_gte?: number | null;
    suspended_vm_num_in?: number[] | null;
    suspended_vm_num_lt?: number | null;
    suspended_vm_num_lte?: number | null;
    suspended_vm_num_not?: number | null;
    suspended_vm_num_not_in?: number[] | null;
    total_cache_capacity?: number | null;
    total_cache_capacity_gt?: number | null;
    total_cache_capacity_gte?: number | null;
    total_cache_capacity_in?: number[] | null;
    total_cache_capacity_lt?: number | null;
    total_cache_capacity_lte?: number | null;
    total_cache_capacity_not?: number | null;
    total_cache_capacity_not_in?: number[] | null;
    total_cpu_cores?: number | null;
    total_cpu_cores_gt?: number | null;
    total_cpu_cores_gte?: number | null;
    total_cpu_cores_in?: number[] | null;
    total_cpu_cores_lt?: number | null;
    total_cpu_cores_lte?: number | null;
    total_cpu_cores_not?: number | null;
    total_cpu_cores_not_in?: number[] | null;
    total_cpu_hz?: number | null;
    total_cpu_hz_gt?: number | null;
    total_cpu_hz_gte?: number | null;
    total_cpu_hz_in?: number[] | null;
    total_cpu_hz_lt?: number | null;
    total_cpu_hz_lte?: number | null;
    total_cpu_hz_not?: number | null;
    total_cpu_hz_not_in?: number[] | null;
    total_data_capacity?: number | null;
    total_data_capacity_gt?: number | null;
    total_data_capacity_gte?: number | null;
    total_data_capacity_in?: number[] | null;
    total_data_capacity_lt?: number | null;
    total_data_capacity_lte?: number | null;
    total_data_capacity_not?: number | null;
    total_data_capacity_not_in?: number[] | null;
    total_memory_bytes?: number | null;
    total_memory_bytes_gt?: number | null;
    total_memory_bytes_gte?: number | null;
    total_memory_bytes_in?: number[] | null;
    total_memory_bytes_lt?: number | null;
    total_memory_bytes_lte?: number | null;
    total_memory_bytes_not?: number | null;
    total_memory_bytes_not_in?: number[] | null;
    type?: ClusterType | null;
    type_in?: ClusterType[] | null;
    type_not?: ClusterType | null;
    type_not_in?: ClusterType[] | null;
    used_cpu_hz?: number | null;
    used_cpu_hz_gt?: number | null;
    used_cpu_hz_gte?: number | null;
    used_cpu_hz_in?: number[] | null;
    used_cpu_hz_lt?: number | null;
    used_cpu_hz_lte?: number | null;
    used_cpu_hz_not?: number | null;
    used_cpu_hz_not_in?: number[] | null;
    used_data_space?: number | null;
    used_data_space_gt?: number | null;
    used_data_space_gte?: number | null;
    used_data_space_in?: number[] | null;
    used_data_space_lt?: number | null;
    used_data_space_lte?: number | null;
    used_data_space_not?: number | null;
    used_data_space_not_in?: number[] | null;
    used_memory_bytes?: number | null;
    used_memory_bytes_gt?: number | null;
    used_memory_bytes_gte?: number | null;
    used_memory_bytes_in?: number[] | null;
    used_memory_bytes_lt?: number | null;
    used_memory_bytes_lte?: number | null;
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
    valid_data_space?: number | null;
    valid_data_space_gt?: number | null;
    valid_data_space_gte?: number | null;
    valid_data_space_in?: number[] | null;
    valid_data_space_lt?: number | null;
    valid_data_space_lte?: number | null;
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
    vm_num?: number | null;
    vm_num_gt?: number | null;
    vm_num_gte?: number | null;
    vm_num_in?: number[] | null;
    vm_num_lt?: number | null;
    vm_num_lte?: number | null;
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
    memory?: number | null;
    memory_gt?: number | null;
    memory_gte?: number | null;
    memory_in?: number[] | null;
    memory_lt?: number | null;
    memory_lte?: number | null;
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
    vcpu?: number | null;
    vcpu_gt?: number | null;
    vcpu_gte?: number | null;
    vcpu_in?: number[] | null;
    vcpu_lt?: number | null;
    vcpu_lte?: number | null;
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
    volume_size?: number | null;
    volume_size_gt?: number | null;
    volume_size_gte?: number | null;
    volume_size_in?: number[] | null;
    volume_size_lt?: number | null;
    volume_size_lte?: number | null;
    volume_size_not?: number | null;
    volume_size_not_in?: number[] | null;
}
export declare type ApplicationState = "DEPLOY_ERROR" | "DEPLOYED" | "DEPLOYING" | "EDITING" | "NOT_DEPLOYED" | "STOP_ERROR" | "STOPPED" | "STOPPING" | "UPGRADING";
export declare type ApplicationType = "MONITOR";
export declare type Architecture = "AARCH64" | "X86_64";
export declare type ConnectState = "CONNECTED" | "DISCONNECTED" | "INITIALIZING" | "REMOVING";
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
    unique_size?: number | null;
    unique_size_gt?: number | null;
    unique_size_gte?: number | null;
    unique_size_in?: number[] | null;
    unique_size_lt?: number | null;
    unique_size_lte?: number | null;
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
    unique_size?: number | null;
    unique_size_gt?: number | null;
    unique_size_gte?: number | null;
    unique_size_in?: number[] | null;
    unique_size_lt?: number | null;
    unique_size_lte?: number | null;
    unique_size_not?: number | null;
    unique_size_not_in?: number[] | null;
}
export declare type EntityAsyncStatus = "CREATING" | "DELETING" | "UPDATING";
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
    unique_size?: number | null;
    unique_size_gt?: number | null;
    unique_size_gte?: number | null;
    unique_size_in?: number[] | null;
    unique_size_lt?: number | null;
    unique_size_lte?: number | null;
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
    assigned_size?: number | null;
    assigned_size_gt?: number | null;
    assigned_size_gte?: number | null;
    assigned_size_in?: number[] | null;
    assigned_size_lt?: number | null;
    assigned_size_lte?: number | null;
    assigned_size_not?: number | null;
    assigned_size_not_in?: number[] | null;
    bps?: number | null;
    bps_gt?: number | null;
    bps_gte?: number | null;
    bps_in?: number[] | null;
    bps_lt?: number | null;
    bps_lte?: number | null;
    bps_max?: number | null;
    bps_max_gt?: number | null;
    bps_max_gte?: number | null;
    bps_max_in?: number[] | null;
    bps_max_length?: number | null;
    bps_max_length_gt?: number | null;
    bps_max_length_gte?: number | null;
    bps_max_length_in?: number[] | null;
    bps_max_length_lt?: number | null;
    bps_max_length_lte?: number | null;
    bps_max_length_not?: number | null;
    bps_max_length_not_in?: number[] | null;
    bps_max_lt?: number | null;
    bps_max_lte?: number | null;
    bps_max_not?: number | null;
    bps_max_not_in?: number[] | null;
    bps_not?: number | null;
    bps_not_in?: number[] | null;
    bps_rd?: number | null;
    bps_rd_gt?: number | null;
    bps_rd_gte?: number | null;
    bps_rd_in?: number[] | null;
    bps_rd_lt?: number | null;
    bps_rd_lte?: number | null;
    bps_rd_max?: number | null;
    bps_rd_max_gt?: number | null;
    bps_rd_max_gte?: number | null;
    bps_rd_max_in?: number[] | null;
    bps_rd_max_length?: number | null;
    bps_rd_max_length_gt?: number | null;
    bps_rd_max_length_gte?: number | null;
    bps_rd_max_length_in?: number[] | null;
    bps_rd_max_length_lt?: number | null;
    bps_rd_max_length_lte?: number | null;
    bps_rd_max_length_not?: number | null;
    bps_rd_max_length_not_in?: number[] | null;
    bps_rd_max_lt?: number | null;
    bps_rd_max_lte?: number | null;
    bps_rd_max_not?: number | null;
    bps_rd_max_not_in?: number[] | null;
    bps_rd_not?: number | null;
    bps_rd_not_in?: number[] | null;
    bps_wr?: number | null;
    bps_wr_gt?: number | null;
    bps_wr_gte?: number | null;
    bps_wr_in?: number[] | null;
    bps_wr_lt?: number | null;
    bps_wr_lte?: number | null;
    bps_wr_max?: number | null;
    bps_wr_max_gt?: number | null;
    bps_wr_max_gte?: number | null;
    bps_wr_max_in?: number[] | null;
    bps_wr_max_length?: number | null;
    bps_wr_max_length_gt?: number | null;
    bps_wr_max_length_gte?: number | null;
    bps_wr_max_length_in?: number[] | null;
    bps_wr_max_length_lt?: number | null;
    bps_wr_max_length_lte?: number | null;
    bps_wr_max_length_not?: number | null;
    bps_wr_max_length_not_in?: number[] | null;
    bps_wr_max_lt?: number | null;
    bps_wr_max_lte?: number | null;
    bps_wr_max_not?: number | null;
    bps_wr_max_not_in?: number[] | null;
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
    io_size?: number | null;
    io_size_gt?: number | null;
    io_size_gte?: number | null;
    io_size_in?: number[] | null;
    io_size_lt?: number | null;
    io_size_lte?: number | null;
    io_size_not?: number | null;
    io_size_not_in?: number[] | null;
    iops?: number | null;
    iops_gt?: number | null;
    iops_gte?: number | null;
    iops_in?: number[] | null;
    iops_lt?: number | null;
    iops_lte?: number | null;
    iops_max?: number | null;
    iops_max_gt?: number | null;
    iops_max_gte?: number | null;
    iops_max_in?: number[] | null;
    iops_max_length?: number | null;
    iops_max_length_gt?: number | null;
    iops_max_length_gte?: number | null;
    iops_max_length_in?: number[] | null;
    iops_max_length_lt?: number | null;
    iops_max_length_lte?: number | null;
    iops_max_length_not?: number | null;
    iops_max_length_not_in?: number[] | null;
    iops_max_lt?: number | null;
    iops_max_lte?: number | null;
    iops_max_not?: number | null;
    iops_max_not_in?: number[] | null;
    iops_not?: number | null;
    iops_not_in?: number[] | null;
    iops_rd?: number | null;
    iops_rd_gt?: number | null;
    iops_rd_gte?: number | null;
    iops_rd_in?: number[] | null;
    iops_rd_lt?: number | null;
    iops_rd_lte?: number | null;
    iops_rd_max?: number | null;
    iops_rd_max_gt?: number | null;
    iops_rd_max_gte?: number | null;
    iops_rd_max_in?: number[] | null;
    iops_rd_max_length?: number | null;
    iops_rd_max_length_gt?: number | null;
    iops_rd_max_length_gte?: number | null;
    iops_rd_max_length_in?: number[] | null;
    iops_rd_max_length_lt?: number | null;
    iops_rd_max_length_lte?: number | null;
    iops_rd_max_length_not?: number | null;
    iops_rd_max_length_not_in?: number[] | null;
    iops_rd_max_lt?: number | null;
    iops_rd_max_lte?: number | null;
    iops_rd_max_not?: number | null;
    iops_rd_max_not_in?: number[] | null;
    iops_rd_not?: number | null;
    iops_rd_not_in?: number[] | null;
    iops_wr?: number | null;
    iops_wr_gt?: number | null;
    iops_wr_gte?: number | null;
    iops_wr_in?: number[] | null;
    iops_wr_lt?: number | null;
    iops_wr_lte?: number | null;
    iops_wr_max?: number | null;
    iops_wr_max_gt?: number | null;
    iops_wr_max_gte?: number | null;
    iops_wr_max_in?: number[] | null;
    iops_wr_max_length?: number | null;
    iops_wr_max_length_gt?: number | null;
    iops_wr_max_length_gte?: number | null;
    iops_wr_max_length_in?: number[] | null;
    iops_wr_max_length_lt?: number | null;
    iops_wr_max_length_lte?: number | null;
    iops_wr_max_length_not?: number | null;
    iops_wr_max_length_not_in?: number[] | null;
    iops_wr_max_lt?: number | null;
    iops_wr_max_lte?: number | null;
    iops_wr_max_not?: number | null;
    iops_wr_max_not_in?: number[] | null;
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
    lun_id?: number | null;
    lun_id_gt?: number | null;
    lun_id_gte?: number | null;
    lun_id_in?: number[] | null;
    lun_id_lt?: number | null;
    lun_id_lte?: number | null;
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
    replica_num?: number | null;
    replica_num_gt?: number | null;
    replica_num_gte?: number | null;
    replica_num_in?: number[] | null;
    replica_num_lt?: number | null;
    replica_num_lte?: number | null;
    replica_num_not?: number | null;
    replica_num_not_in?: number[] | null;
    shared_size?: number | null;
    shared_size_gt?: number | null;
    shared_size_gte?: number | null;
    shared_size_in?: number[] | null;
    shared_size_lt?: number | null;
    shared_size_lte?: number | null;
    shared_size_not?: number | null;
    shared_size_not_in?: number[] | null;
    snapshot_num?: number | null;
    snapshot_num_gt?: number | null;
    snapshot_num_gte?: number | null;
    snapshot_num_in?: number[] | null;
    snapshot_num_lt?: number | null;
    snapshot_num_lte?: number | null;
    snapshot_num_not?: number | null;
    snapshot_num_not_in?: number[] | null;
    stripe_num?: number | null;
    stripe_num_gt?: number | null;
    stripe_num_gte?: number | null;
    stripe_num_in?: number[] | null;
    stripe_num_lt?: number | null;
    stripe_num_lte?: number | null;
    stripe_num_not?: number | null;
    stripe_num_not_in?: number[] | null;
    stripe_size?: number | null;
    stripe_size_gt?: number | null;
    stripe_size_gte?: number | null;
    stripe_size_in?: number[] | null;
    stripe_size_lt?: number | null;
    stripe_size_lte?: number | null;
    stripe_size_not?: number | null;
    stripe_size_not_in?: number[] | null;
    thin_provision?: boolean | null;
    thin_provision_not?: boolean | null;
    unique_size?: number | null;
    unique_size_gt?: number | null;
    unique_size_gte?: number | null;
    unique_size_in?: number[] | null;
    unique_size_lt?: number | null;
    unique_size_lte?: number | null;
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
    bps?: number | null;
    bps_gt?: number | null;
    bps_gte?: number | null;
    bps_in?: number[] | null;
    bps_lt?: number | null;
    bps_lte?: number | null;
    bps_max?: number | null;
    bps_max_gt?: number | null;
    bps_max_gte?: number | null;
    bps_max_in?: number[] | null;
    bps_max_length?: number | null;
    bps_max_length_gt?: number | null;
    bps_max_length_gte?: number | null;
    bps_max_length_in?: number[] | null;
    bps_max_length_lt?: number | null;
    bps_max_length_lte?: number | null;
    bps_max_length_not?: number | null;
    bps_max_length_not_in?: number[] | null;
    bps_max_lt?: number | null;
    bps_max_lte?: number | null;
    bps_max_not?: number | null;
    bps_max_not_in?: number[] | null;
    bps_not?: number | null;
    bps_not_in?: number[] | null;
    bps_rd?: number | null;
    bps_rd_gt?: number | null;
    bps_rd_gte?: number | null;
    bps_rd_in?: number[] | null;
    bps_rd_lt?: number | null;
    bps_rd_lte?: number | null;
    bps_rd_max?: number | null;
    bps_rd_max_gt?: number | null;
    bps_rd_max_gte?: number | null;
    bps_rd_max_in?: number[] | null;
    bps_rd_max_length?: number | null;
    bps_rd_max_length_gt?: number | null;
    bps_rd_max_length_gte?: number | null;
    bps_rd_max_length_in?: number[] | null;
    bps_rd_max_length_lt?: number | null;
    bps_rd_max_length_lte?: number | null;
    bps_rd_max_length_not?: number | null;
    bps_rd_max_length_not_in?: number[] | null;
    bps_rd_max_lt?: number | null;
    bps_rd_max_lte?: number | null;
    bps_rd_max_not?: number | null;
    bps_rd_max_not_in?: number[] | null;
    bps_rd_not?: number | null;
    bps_rd_not_in?: number[] | null;
    bps_wr?: number | null;
    bps_wr_gt?: number | null;
    bps_wr_gte?: number | null;
    bps_wr_in?: number[] | null;
    bps_wr_lt?: number | null;
    bps_wr_lte?: number | null;
    bps_wr_max?: number | null;
    bps_wr_max_gt?: number | null;
    bps_wr_max_gte?: number | null;
    bps_wr_max_in?: number[] | null;
    bps_wr_max_length?: number | null;
    bps_wr_max_length_gt?: number | null;
    bps_wr_max_length_gte?: number | null;
    bps_wr_max_length_in?: number[] | null;
    bps_wr_max_length_lt?: number | null;
    bps_wr_max_length_lte?: number | null;
    bps_wr_max_length_not?: number | null;
    bps_wr_max_length_not_in?: number[] | null;
    bps_wr_max_lt?: number | null;
    bps_wr_max_lte?: number | null;
    bps_wr_max_not?: number | null;
    bps_wr_max_not_in?: number[] | null;
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
    io_size?: number | null;
    io_size_gt?: number | null;
    io_size_gte?: number | null;
    io_size_in?: number[] | null;
    io_size_lt?: number | null;
    io_size_lte?: number | null;
    io_size_not?: number | null;
    io_size_not_in?: number[] | null;
    iops?: number | null;
    iops_gt?: number | null;
    iops_gte?: number | null;
    iops_in?: number[] | null;
    iops_lt?: number | null;
    iops_lte?: number | null;
    iops_max?: number | null;
    iops_max_gt?: number | null;
    iops_max_gte?: number | null;
    iops_max_in?: number[] | null;
    iops_max_length?: number | null;
    iops_max_length_gt?: number | null;
    iops_max_length_gte?: number | null;
    iops_max_length_in?: number[] | null;
    iops_max_length_lt?: number | null;
    iops_max_length_lte?: number | null;
    iops_max_length_not?: number | null;
    iops_max_length_not_in?: number[] | null;
    iops_max_lt?: number | null;
    iops_max_lte?: number | null;
    iops_max_not?: number | null;
    iops_max_not_in?: number[] | null;
    iops_not?: number | null;
    iops_not_in?: number[] | null;
    iops_rd?: number | null;
    iops_rd_gt?: number | null;
    iops_rd_gte?: number | null;
    iops_rd_in?: number[] | null;
    iops_rd_lt?: number | null;
    iops_rd_lte?: number | null;
    iops_rd_max?: number | null;
    iops_rd_max_gt?: number | null;
    iops_rd_max_gte?: number | null;
    iops_rd_max_in?: number[] | null;
    iops_rd_max_length?: number | null;
    iops_rd_max_length_gt?: number | null;
    iops_rd_max_length_gte?: number | null;
    iops_rd_max_length_in?: number[] | null;
    iops_rd_max_length_lt?: number | null;
    iops_rd_max_length_lte?: number | null;
    iops_rd_max_length_not?: number | null;
    iops_rd_max_length_not_in?: number[] | null;
    iops_rd_max_lt?: number | null;
    iops_rd_max_lte?: number | null;
    iops_rd_max_not?: number | null;
    iops_rd_max_not_in?: number[] | null;
    iops_rd_not?: number | null;
    iops_rd_not_in?: number[] | null;
    iops_wr?: number | null;
    iops_wr_gt?: number | null;
    iops_wr_gte?: number | null;
    iops_wr_in?: number[] | null;
    iops_wr_lt?: number | null;
    iops_wr_lte?: number | null;
    iops_wr_max?: number | null;
    iops_wr_max_gt?: number | null;
    iops_wr_max_gte?: number | null;
    iops_wr_max_in?: number[] | null;
    iops_wr_max_length?: number | null;
    iops_wr_max_length_gt?: number | null;
    iops_wr_max_length_gte?: number | null;
    iops_wr_max_length_in?: number[] | null;
    iops_wr_max_length_lt?: number | null;
    iops_wr_max_length_lte?: number | null;
    iops_wr_max_length_not?: number | null;
    iops_wr_max_length_not_in?: number[] | null;
    iops_wr_max_lt?: number | null;
    iops_wr_max_lte?: number | null;
    iops_wr_max_not?: number | null;
    iops_wr_max_not_in?: number[] | null;
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
    replica_num?: number | null;
    replica_num_gt?: number | null;
    replica_num_gte?: number | null;
    replica_num_in?: number[] | null;
    replica_num_lt?: number | null;
    replica_num_lte?: number | null;
    replica_num_not?: number | null;
    replica_num_not_in?: number[] | null;
    stripe_num?: number | null;
    stripe_num_gt?: number | null;
    stripe_num_gte?: number | null;
    stripe_num_in?: number[] | null;
    stripe_num_lt?: number | null;
    stripe_num_lte?: number | null;
    stripe_num_not?: number | null;
    stripe_num_not_in?: number[] | null;
    stripe_size?: number | null;
    stripe_size_gt?: number | null;
    stripe_size_gte?: number | null;
    stripe_size_in?: number[] | null;
    stripe_size_lt?: number | null;
    stripe_size_lte?: number | null;
    stripe_size_not?: number | null;
    stripe_size_not_in?: number[] | null;
    thin_provision?: boolean | null;
    thin_provision_not?: boolean | null;
}
export interface LabelWhereInput {
    AND?: LabelWhereInput[] | null;
    cluster_num?: number | null;
    cluster_num_gt?: number | null;
    cluster_num_gte?: number | null;
    cluster_num_in?: number[] | null;
    cluster_num_lt?: number | null;
    cluster_num_lte?: number | null;
    cluster_num_not?: number | null;
    cluster_num_not_in?: number[] | null;
    clusters_every?: ClusterWhereInput | null;
    clusters_none?: ClusterWhereInput | null;
    clusters_some?: ClusterWhereInput | null;
    consistency_group_num?: number | null;
    consistency_group_num_gt?: number | null;
    consistency_group_num_gte?: number | null;
    consistency_group_num_in?: number[] | null;
    consistency_group_num_lt?: number | null;
    consistency_group_num_lte?: number | null;
    consistency_group_num_not?: number | null;
    consistency_group_num_not_in?: number[] | null;
    consistency_group_snapshot_num?: number | null;
    consistency_group_snapshot_num_gt?: number | null;
    consistency_group_snapshot_num_gte?: number | null;
    consistency_group_snapshot_num_in?: number[] | null;
    consistency_group_snapshot_num_lt?: number | null;
    consistency_group_snapshot_num_lte?: number | null;
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
    datacenter_num?: number | null;
    datacenter_num_gt?: number | null;
    datacenter_num_gte?: number | null;
    datacenter_num_in?: number[] | null;
    datacenter_num_lt?: number | null;
    datacenter_num_lte?: number | null;
    datacenter_num_not?: number | null;
    datacenter_num_not_in?: number[] | null;
    datacenters_every?: DatacenterWhereInput | null;
    datacenters_none?: DatacenterWhereInput | null;
    datacenters_some?: DatacenterWhereInput | null;
    disk_num?: number | null;
    disk_num_gt?: number | null;
    disk_num_gte?: number | null;
    disk_num_in?: number[] | null;
    disk_num_lt?: number | null;
    disk_num_lte?: number | null;
    disk_num_not?: number | null;
    disk_num_not_in?: number[] | null;
    disks_every?: DiskWhereInput | null;
    disks_none?: DiskWhereInput | null;
    disks_some?: DiskWhereInput | null;
    elf_image_num?: number | null;
    elf_image_num_gt?: number | null;
    elf_image_num_gte?: number | null;
    elf_image_num_in?: number[] | null;
    elf_image_num_lt?: number | null;
    elf_image_num_lte?: number | null;
    elf_image_num_not?: number | null;
    elf_image_num_not_in?: number[] | null;
    elf_images_every?: ElfImageWhereInput | null;
    elf_images_none?: ElfImageWhereInput | null;
    elf_images_some?: ElfImageWhereInput | null;
    host_num?: number | null;
    host_num_gt?: number | null;
    host_num_gte?: number | null;
    host_num_in?: number[] | null;
    host_num_lt?: number | null;
    host_num_lte?: number | null;
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
    iscsi_lun_num?: number | null;
    iscsi_lun_num_gt?: number | null;
    iscsi_lun_num_gte?: number | null;
    iscsi_lun_num_in?: number[] | null;
    iscsi_lun_num_lt?: number | null;
    iscsi_lun_num_lte?: number | null;
    iscsi_lun_num_not?: number | null;
    iscsi_lun_num_not_in?: number[] | null;
    iscsi_lun_snapshot_num?: number | null;
    iscsi_lun_snapshot_num_gt?: number | null;
    iscsi_lun_snapshot_num_gte?: number | null;
    iscsi_lun_snapshot_num_in?: number[] | null;
    iscsi_lun_snapshot_num_lt?: number | null;
    iscsi_lun_snapshot_num_lte?: number | null;
    iscsi_lun_snapshot_num_not?: number | null;
    iscsi_lun_snapshot_num_not_in?: number[] | null;
    iscsi_lun_snapshots_every?: IscsiLunSnapshotWhereInput | null;
    iscsi_lun_snapshots_none?: IscsiLunSnapshotWhereInput | null;
    iscsi_lun_snapshots_some?: IscsiLunSnapshotWhereInput | null;
    iscsi_luns_every?: IscsiLunWhereInput | null;
    iscsi_luns_none?: IscsiLunWhereInput | null;
    iscsi_luns_some?: IscsiLunWhereInput | null;
    iscsi_target_num?: number | null;
    iscsi_target_num_gt?: number | null;
    iscsi_target_num_gte?: number | null;
    iscsi_target_num_in?: number[] | null;
    iscsi_target_num_lt?: number | null;
    iscsi_target_num_lte?: number | null;
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
    namespace_group_num?: number | null;
    namespace_group_num_gt?: number | null;
    namespace_group_num_gte?: number | null;
    namespace_group_num_in?: number[] | null;
    namespace_group_num_lt?: number | null;
    namespace_group_num_lte?: number | null;
    namespace_group_num_not?: number | null;
    namespace_group_num_not_in?: number[] | null;
    namespace_groups_every?: NamespaceGroupWhereInput | null;
    namespace_groups_none?: NamespaceGroupWhereInput | null;
    namespace_groups_some?: NamespaceGroupWhereInput | null;
    nfs_export_num?: number | null;
    nfs_export_num_gt?: number | null;
    nfs_export_num_gte?: number | null;
    nfs_export_num_in?: number[] | null;
    nfs_export_num_lt?: number | null;
    nfs_export_num_lte?: number | null;
    nfs_export_num_not?: number | null;
    nfs_export_num_not_in?: number[] | null;
    nfs_exports_every?: NfsExportWhereInput | null;
    nfs_exports_none?: NfsExportWhereInput | null;
    nfs_exports_some?: NfsExportWhereInput | null;
    nfs_inode_num?: number | null;
    nfs_inode_num_gt?: number | null;
    nfs_inode_num_gte?: number | null;
    nfs_inode_num_in?: number[] | null;
    nfs_inode_num_lt?: number | null;
    nfs_inode_num_lte?: number | null;
    nfs_inode_num_not?: number | null;
    nfs_inode_num_not_in?: number[] | null;
    nfs_inodes_every?: NfsInodeWhereInput | null;
    nfs_inodes_none?: NfsInodeWhereInput | null;
    nfs_inodes_some?: NfsInodeWhereInput | null;
    nic_num?: number | null;
    nic_num_gt?: number | null;
    nic_num_gte?: number | null;
    nic_num_in?: number[] | null;
    nic_num_lt?: number | null;
    nic_num_lte?: number | null;
    nic_num_not?: number | null;
    nic_num_not_in?: number[] | null;
    nics_every?: NicWhereInput | null;
    nics_none?: NicWhereInput | null;
    nics_some?: NicWhereInput | null;
    NOT?: LabelWhereInput[] | null;
    nvmf_namespace_num?: number | null;
    nvmf_namespace_num_gt?: number | null;
    nvmf_namespace_num_gte?: number | null;
    nvmf_namespace_num_in?: number[] | null;
    nvmf_namespace_num_lt?: number | null;
    nvmf_namespace_num_lte?: number | null;
    nvmf_namespace_num_not?: number | null;
    nvmf_namespace_num_not_in?: number[] | null;
    nvmf_namespace_snapshot_num?: number | null;
    nvmf_namespace_snapshot_num_gt?: number | null;
    nvmf_namespace_snapshot_num_gte?: number | null;
    nvmf_namespace_snapshot_num_in?: number[] | null;
    nvmf_namespace_snapshot_num_lt?: number | null;
    nvmf_namespace_snapshot_num_lte?: number | null;
    nvmf_namespace_snapshot_num_not?: number | null;
    nvmf_namespace_snapshot_num_not_in?: number[] | null;
    nvmf_namespace_snapshots_every?: NvmfNamespaceSnapshotWhereInput | null;
    nvmf_namespace_snapshots_none?: NvmfNamespaceSnapshotWhereInput | null;
    nvmf_namespace_snapshots_some?: NvmfNamespaceSnapshotWhereInput | null;
    nvmf_namespaces_every?: NvmfNamespaceWhereInput | null;
    nvmf_namespaces_none?: NvmfNamespaceWhereInput | null;
    nvmf_namespaces_some?: NvmfNamespaceWhereInput | null;
    nvmf_subsystem_num?: number | null;
    nvmf_subsystem_num_gt?: number | null;
    nvmf_subsystem_num_gte?: number | null;
    nvmf_subsystem_num_in?: number[] | null;
    nvmf_subsystem_num_lt?: number | null;
    nvmf_subsystem_num_lte?: number | null;
    nvmf_subsystem_num_not?: number | null;
    nvmf_subsystem_num_not_in?: number[] | null;
    nvmf_subsystems_every?: NvmfSubsystemWhereInput | null;
    nvmf_subsystems_none?: NvmfSubsystemWhereInput | null;
    nvmf_subsystems_some?: NvmfSubsystemWhereInput | null;
    OR?: LabelWhereInput[] | null;
    system_vlan_num?: number | null;
    system_vlan_num_gt?: number | null;
    system_vlan_num_gte?: number | null;
    system_vlan_num_in?: number[] | null;
    system_vlan_num_lt?: number | null;
    system_vlan_num_lte?: number | null;
    system_vlan_num_not?: number | null;
    system_vlan_num_not_in?: number[] | null;
    total_num?: number | null;
    total_num_gt?: number | null;
    total_num_gte?: number | null;
    total_num_in?: number[] | null;
    total_num_lt?: number | null;
    total_num_lte?: number | null;
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
    vds_num?: number | null;
    vds_num_gt?: number | null;
    vds_num_gte?: number | null;
    vds_num_in?: number[] | null;
    vds_num_lt?: number | null;
    vds_num_lte?: number | null;
    vds_num_not?: number | null;
    vds_num_not_in?: number[] | null;
    vdses_every?: VdsWhereInput | null;
    vdses_none?: VdsWhereInput | null;
    vdses_some?: VdsWhereInput | null;
    vlans_every?: VlanWhereInput | null;
    vlans_none?: VlanWhereInput | null;
    vlans_some?: VlanWhereInput | null;
    vm_num?: number | null;
    vm_num_gt?: number | null;
    vm_num_gte?: number | null;
    vm_num_in?: number[] | null;
    vm_num_lt?: number | null;
    vm_num_lte?: number | null;
    vm_num_not?: number | null;
    vm_num_not_in?: number[] | null;
    vm_snapshot_num?: number | null;
    vm_snapshot_num_gt?: number | null;
    vm_snapshot_num_gte?: number | null;
    vm_snapshot_num_in?: number[] | null;
    vm_snapshot_num_lt?: number | null;
    vm_snapshot_num_lte?: number | null;
    vm_snapshot_num_not?: number | null;
    vm_snapshot_num_not_in?: number[] | null;
    vm_snapshots_every?: VmSnapshotWhereInput | null;
    vm_snapshots_none?: VmSnapshotWhereInput | null;
    vm_snapshots_some?: VmSnapshotWhereInput | null;
    vm_template_num?: number | null;
    vm_template_num_gt?: number | null;
    vm_template_num_gte?: number | null;
    vm_template_num_in?: number[] | null;
    vm_template_num_lt?: number | null;
    vm_template_num_lte?: number | null;
    vm_template_num_not?: number | null;
    vm_template_num_not_in?: number[] | null;
    vm_templates_every?: VmTemplateWhereInput | null;
    vm_templates_none?: VmTemplateWhereInput | null;
    vm_templates_some?: VmTemplateWhereInput | null;
    vm_vlan_num?: number | null;
    vm_vlan_num_gt?: number | null;
    vm_vlan_num_gte?: number | null;
    vm_vlan_num_in?: number[] | null;
    vm_vlan_num_lt?: number | null;
    vm_vlan_num_lte?: number | null;
    vm_vlan_num_not?: number | null;
    vm_vlan_num_not_in?: number[] | null;
    vm_volume_num?: number | null;
    vm_volume_num_gt?: number | null;
    vm_volume_num_gte?: number | null;
    vm_volume_num_in?: number[] | null;
    vm_volume_num_lt?: number | null;
    vm_volume_num_lte?: number | null;
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
    cluster_num?: number | null;
    cluster_num_gt?: number | null;
    cluster_num_gte?: number | null;
    cluster_num_in?: number[] | null;
    cluster_num_lt?: number | null;
    cluster_num_lte?: number | null;
    cluster_num_not?: number | null;
    cluster_num_not_in?: number[] | null;
    clusters_every?: ClusterWhereInput | null;
    clusters_none?: ClusterWhereInput | null;
    clusters_some?: ClusterWhereInput | null;
    failure_data_space?: number | null;
    failure_data_space_gt?: number | null;
    failure_data_space_gte?: number | null;
    failure_data_space_in?: number[] | null;
    failure_data_space_lt?: number | null;
    failure_data_space_lte?: number | null;
    failure_data_space_not?: number | null;
    failure_data_space_not_in?: number[] | null;
    host_num?: number | null;
    host_num_gt?: number | null;
    host_num_gte?: number | null;
    host_num_in?: number[] | null;
    host_num_lt?: number | null;
    host_num_lte?: number | null;
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
    total_cpu_hz?: number | null;
    total_cpu_hz_gt?: number | null;
    total_cpu_hz_gte?: number | null;
    total_cpu_hz_in?: number[] | null;
    total_cpu_hz_lt?: number | null;
    total_cpu_hz_lte?: number | null;
    total_cpu_hz_not?: number | null;
    total_cpu_hz_not_in?: number[] | null;
    total_data_capacity?: number | null;
    total_data_capacity_gt?: number | null;
    total_data_capacity_gte?: number | null;
    total_data_capacity_in?: number[] | null;
    total_data_capacity_lt?: number | null;
    total_data_capacity_lte?: number | null;
    total_data_capacity_not?: number | null;
    total_data_capacity_not_in?: number[] | null;
    total_memory_bytes?: number | null;
    total_memory_bytes_gt?: number | null;
    total_memory_bytes_gte?: number | null;
    total_memory_bytes_in?: number[] | null;
    total_memory_bytes_lt?: number | null;
    total_memory_bytes_lte?: number | null;
    total_memory_bytes_not?: number | null;
    total_memory_bytes_not_in?: number[] | null;
    used_cpu_hz?: number | null;
    used_cpu_hz_gt?: number | null;
    used_cpu_hz_gte?: number | null;
    used_cpu_hz_in?: number[] | null;
    used_cpu_hz_lt?: number | null;
    used_cpu_hz_lte?: number | null;
    used_cpu_hz_not?: number | null;
    used_cpu_hz_not_in?: number[] | null;
    used_data_space?: number | null;
    used_data_space_gt?: number | null;
    used_data_space_gte?: number | null;
    used_data_space_in?: number[] | null;
    used_data_space_lt?: number | null;
    used_data_space_lte?: number | null;
    used_data_space_not?: number | null;
    used_data_space_not_in?: number[] | null;
    used_memory_bytes?: number | null;
    used_memory_bytes_gt?: number | null;
    used_memory_bytes_gte?: number | null;
    used_memory_bytes_in?: number[] | null;
    used_memory_bytes_lt?: number | null;
    used_memory_bytes_lte?: number | null;
    used_memory_bytes_not?: number | null;
    used_memory_bytes_not_in?: number[] | null;
    vm_num?: number | null;
    vm_num_gt?: number | null;
    vm_num_gte?: number | null;
    vm_num_in?: number[] | null;
    vm_num_lt?: number | null;
    vm_num_lte?: number | null;
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
    numa_node?: number | null;
    numa_node_gt?: number | null;
    numa_node_gte?: number | null;
    numa_node_in?: number[] | null;
    numa_node_lt?: number | null;
    numa_node_lte?: number | null;
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
    physical_slot_on_brick?: number | null;
    physical_slot_on_brick_gt?: number | null;
    physical_slot_on_brick_gte?: number | null;
    physical_slot_on_brick_in?: number[] | null;
    physical_slot_on_brick_lt?: number | null;
    physical_slot_on_brick_lte?: number | null;
    physical_slot_on_brick_not?: number | null;
    physical_slot_on_brick_not_in?: number[] | null;
    pmem_dimms_every?: PmemDimmWhereInput | null;
    pmem_dimms_none?: PmemDimmWhereInput | null;
    pmem_dimms_some?: PmemDimmWhereInput | null;
    recommended_usage?: DiskUsage | null;
    recommended_usage_in?: DiskUsage[] | null;
    recommended_usage_not?: DiskUsage | null;
    recommended_usage_not_in?: DiskUsage[] | null;
    remaining_life_percent?: number | null;
    remaining_life_percent_gt?: number | null;
    remaining_life_percent_gte?: number | null;
    remaining_life_percent_in?: number[] | null;
    remaining_life_percent_lt?: number | null;
    remaining_life_percent_lte?: number | null;
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
    size?: number | null;
    size_gt?: number | null;
    size_gte?: number | null;
    size_in?: number[] | null;
    size_lt?: number | null;
    size_lte?: number | null;
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
export declare type DiskFunction = "CACHE" | "DATA" | "SMTX_SYSTEM";
export declare type DiskHealthStatus = "HEALTHY" | "SMART_FAILED" | "SUBHEALTHY" | "UNHEALTHY";
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
    allocatable_memory_bytes?: number | null;
    allocatable_memory_bytes_gt?: number | null;
    allocatable_memory_bytes_gte?: number | null;
    allocatable_memory_bytes_in?: number[] | null;
    allocatable_memory_bytes_lt?: number | null;
    allocatable_memory_bytes_lte?: number | null;
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
    cpu_hz_per_core?: number | null;
    cpu_hz_per_core_gt?: number | null;
    cpu_hz_per_core_gte?: number | null;
    cpu_hz_per_core_in?: number[] | null;
    cpu_hz_per_core_lt?: number | null;
    cpu_hz_per_core_lte?: number | null;
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
    failure_data_space?: number | null;
    failure_data_space_gt?: number | null;
    failure_data_space_gte?: number | null;
    failure_data_space_in?: number[] | null;
    failure_data_space_lt?: number | null;
    failure_data_space_lte?: number | null;
    failure_data_space_not?: number | null;
    failure_data_space_not_in?: number[] | null;
    hdd_data_capacity?: number | null;
    hdd_data_capacity_gt?: number | null;
    hdd_data_capacity_gte?: number | null;
    hdd_data_capacity_in?: number[] | null;
    hdd_data_capacity_lt?: number | null;
    hdd_data_capacity_lte?: number | null;
    hdd_data_capacity_not?: number | null;
    hdd_data_capacity_not_in?: number[] | null;
    hdd_disk_count?: number | null;
    hdd_disk_count_gt?: number | null;
    hdd_disk_count_gte?: number | null;
    hdd_disk_count_in?: number[] | null;
    hdd_disk_count_lt?: number | null;
    hdd_disk_count_lte?: number | null;
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
    nic_count?: number | null;
    nic_count_gt?: number | null;
    nic_count_gte?: number | null;
    nic_count_in?: number[] | null;
    nic_count_lt?: number | null;
    nic_count_lte?: number | null;
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
    os_memory_bytes?: number | null;
    os_memory_bytes_gt?: number | null;
    os_memory_bytes_gte?: number | null;
    os_memory_bytes_in?: number[] | null;
    os_memory_bytes_lt?: number | null;
    os_memory_bytes_lte?: number | null;
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
    pmem_dimm_capacity?: number | null;
    pmem_dimm_capacity_gt?: number | null;
    pmem_dimm_capacity_gte?: number | null;
    pmem_dimm_capacity_in?: number[] | null;
    pmem_dimm_capacity_lt?: number | null;
    pmem_dimm_capacity_lte?: number | null;
    pmem_dimm_capacity_not?: number | null;
    pmem_dimm_capacity_not_in?: number[] | null;
    pmem_dimm_count?: number | null;
    pmem_dimm_count_gt?: number | null;
    pmem_dimm_count_gte?: number | null;
    pmem_dimm_count_in?: number[] | null;
    pmem_dimm_count_lt?: number | null;
    pmem_dimm_count_lte?: number | null;
    pmem_dimm_count_not?: number | null;
    pmem_dimm_count_not_in?: number[] | null;
    pmem_dimms_every?: PmemDimmWhereInput | null;
    pmem_dimms_none?: PmemDimmWhereInput | null;
    pmem_dimms_some?: PmemDimmWhereInput | null;
    pmem_disk_count?: number | null;
    pmem_disk_count_gt?: number | null;
    pmem_disk_count_gte?: number | null;
    pmem_disk_count_in?: number[] | null;
    pmem_disk_count_lt?: number | null;
    pmem_disk_count_lte?: number | null;
    pmem_disk_count_not?: number | null;
    pmem_disk_count_not_in?: number[] | null;
    provisioned_cpu_cores?: number | null;
    provisioned_cpu_cores_gt?: number | null;
    provisioned_cpu_cores_gte?: number | null;
    provisioned_cpu_cores_in?: number[] | null;
    provisioned_cpu_cores_lt?: number | null;
    provisioned_cpu_cores_lte?: number | null;
    provisioned_cpu_cores_not?: number | null;
    provisioned_cpu_cores_not_in?: number[] | null;
    provisioned_memory_bytes?: number | null;
    provisioned_memory_bytes_gt?: number | null;
    provisioned_memory_bytes_gte?: number | null;
    provisioned_memory_bytes_in?: number[] | null;
    provisioned_memory_bytes_lt?: number | null;
    provisioned_memory_bytes_lte?: number | null;
    provisioned_memory_bytes_not?: number | null;
    provisioned_memory_bytes_not_in?: number[] | null;
    running_pause_vm_memory_bytes?: number | null;
    running_pause_vm_memory_bytes_gt?: number | null;
    running_pause_vm_memory_bytes_gte?: number | null;
    running_pause_vm_memory_bytes_in?: number[] | null;
    running_pause_vm_memory_bytes_lt?: number | null;
    running_pause_vm_memory_bytes_lte?: number | null;
    running_pause_vm_memory_bytes_not?: number | null;
    running_pause_vm_memory_bytes_not_in?: number[] | null;
    running_vm_num?: number | null;
    running_vm_num_gt?: number | null;
    running_vm_num_gte?: number | null;
    running_vm_num_in?: number[] | null;
    running_vm_num_lt?: number | null;
    running_vm_num_lte?: number | null;
    running_vm_num_not?: number | null;
    running_vm_num_not_in?: number[] | null;
    scvm_cpu?: number | null;
    scvm_cpu_gt?: number | null;
    scvm_cpu_gte?: number | null;
    scvm_cpu_in?: number[] | null;
    scvm_cpu_lt?: number | null;
    scvm_cpu_lte?: number | null;
    scvm_cpu_not?: number | null;
    scvm_cpu_not_in?: number[] | null;
    scvm_memory?: number | null;
    scvm_memory_gt?: number | null;
    scvm_memory_gte?: number | null;
    scvm_memory_in?: number[] | null;
    scvm_memory_lt?: number | null;
    scvm_memory_lte?: number | null;
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
    ssd_data_capacity?: number | null;
    ssd_data_capacity_gt?: number | null;
    ssd_data_capacity_gte?: number | null;
    ssd_data_capacity_in?: number[] | null;
    ssd_data_capacity_lt?: number | null;
    ssd_data_capacity_lte?: number | null;
    ssd_data_capacity_not?: number | null;
    ssd_data_capacity_not_in?: number[] | null;
    ssd_disk_count?: number | null;
    ssd_disk_count_gt?: number | null;
    ssd_disk_count_gte?: number | null;
    ssd_disk_count_in?: number[] | null;
    ssd_disk_count_lt?: number | null;
    ssd_disk_count_lte?: number | null;
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
    stopped_vm_num?: number | null;
    stopped_vm_num_gt?: number | null;
    stopped_vm_num_gte?: number | null;
    stopped_vm_num_in?: number[] | null;
    stopped_vm_num_lt?: number | null;
    stopped_vm_num_lte?: number | null;
    stopped_vm_num_not?: number | null;
    stopped_vm_num_not_in?: number[] | null;
    suspended_vm_num?: number | null;
    suspended_vm_num_gt?: number | null;
    suspended_vm_num_gte?: number | null;
    suspended_vm_num_in?: number[] | null;
    suspended_vm_num_lt?: number | null;
    suspended_vm_num_lte?: number | null;
    suspended_vm_num_not?: number | null;
    suspended_vm_num_not_in?: number[] | null;
    total_cache_capacity?: number | null;
    total_cache_capacity_gt?: number | null;
    total_cache_capacity_gte?: number | null;
    total_cache_capacity_in?: number[] | null;
    total_cache_capacity_lt?: number | null;
    total_cache_capacity_lte?: number | null;
    total_cache_capacity_not?: number | null;
    total_cache_capacity_not_in?: number[] | null;
    total_cpu_cores?: number | null;
    total_cpu_cores_gt?: number | null;
    total_cpu_cores_gte?: number | null;
    total_cpu_cores_in?: number[] | null;
    total_cpu_cores_lt?: number | null;
    total_cpu_cores_lte?: number | null;
    total_cpu_cores_not?: number | null;
    total_cpu_cores_not_in?: number[] | null;
    total_cpu_hz?: number | null;
    total_cpu_hz_gt?: number | null;
    total_cpu_hz_gte?: number | null;
    total_cpu_hz_in?: number[] | null;
    total_cpu_hz_lt?: number | null;
    total_cpu_hz_lte?: number | null;
    total_cpu_hz_not?: number | null;
    total_cpu_hz_not_in?: number[] | null;
    total_data_capacity?: number | null;
    total_data_capacity_gt?: number | null;
    total_data_capacity_gte?: number | null;
    total_data_capacity_in?: number[] | null;
    total_data_capacity_lt?: number | null;
    total_data_capacity_lte?: number | null;
    total_data_capacity_not?: number | null;
    total_data_capacity_not_in?: number[] | null;
    total_memory_bytes?: number | null;
    total_memory_bytes_gt?: number | null;
    total_memory_bytes_gte?: number | null;
    total_memory_bytes_in?: number[] | null;
    total_memory_bytes_lt?: number | null;
    total_memory_bytes_lte?: number | null;
    total_memory_bytes_not?: number | null;
    total_memory_bytes_not_in?: number[] | null;
    usb_devices_every?: UsbDeviceWhereInput | null;
    usb_devices_none?: UsbDeviceWhereInput | null;
    usb_devices_some?: UsbDeviceWhereInput | null;
    used_cpu_hz?: number | null;
    used_cpu_hz_gt?: number | null;
    used_cpu_hz_gte?: number | null;
    used_cpu_hz_in?: number[] | null;
    used_cpu_hz_lt?: number | null;
    used_cpu_hz_lte?: number | null;
    used_cpu_hz_not?: number | null;
    used_cpu_hz_not_in?: number[] | null;
    used_data_space?: number | null;
    used_data_space_gt?: number | null;
    used_data_space_gte?: number | null;
    used_data_space_in?: number[] | null;
    used_data_space_lt?: number | null;
    used_data_space_lte?: number | null;
    used_data_space_not?: number | null;
    used_data_space_not_in?: number[] | null;
    used_memory_bytes?: number | null;
    used_memory_bytes_gt?: number | null;
    used_memory_bytes_gte?: number | null;
    used_memory_bytes_in?: number[] | null;
    used_memory_bytes_lt?: number | null;
    used_memory_bytes_lte?: number | null;
    used_memory_bytes_not?: number | null;
    used_memory_bytes_not_in?: number[] | null;
    vm_num?: number | null;
    vm_num_gt?: number | null;
    vm_num_gte?: number | null;
    vm_num_in?: number[] | null;
    vm_num_lt?: number | null;
    vm_num_lte?: number | null;
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
export declare type CpuFanSpeedUnit = "PERCENT" | "RPM";
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
    max_vf_num?: number | null;
    max_vf_num_gt?: number | null;
    max_vf_num_gte?: number | null;
    max_vf_num_in?: number[] | null;
    max_vf_num_lt?: number | null;
    max_vf_num_lte?: number | null;
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
    mtu?: number | null;
    mtu_gt?: number | null;
    mtu_gte?: number | null;
    mtu_in?: number[] | null;
    mtu_lt?: number | null;
    mtu_lte?: number | null;
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
    speed?: number | null;
    speed_gt?: number | null;
    speed_gte?: number | null;
    speed_in?: number[] | null;
    speed_lt?: number | null;
    speed_lte?: number | null;
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
    total_vf_num?: number | null;
    total_vf_num_gt?: number | null;
    total_vf_num_gte?: number | null;
    total_vf_num_in?: number[] | null;
    total_vf_num_lt?: number | null;
    total_vf_num_lte?: number | null;
    total_vf_num_not?: number | null;
    total_vf_num_not_in?: number[] | null;
    type?: NetworkType | null;
    type_in?: NetworkType[] | null;
    type_not?: NetworkType | null;
    type_not_in?: NetworkType[] | null;
    up?: boolean | null;
    up_not?: boolean | null;
    used_vf_num?: number | null;
    used_vf_num_gt?: number | null;
    used_vf_num_gte?: number | null;
    used_vf_num_in?: number[] | null;
    used_vf_num_lt?: number | null;
    used_vf_num_lte?: number | null;
    used_vf_num_not?: number | null;
    used_vf_num_not_in?: number[] | null;
    vds?: VdsWhereInput | null;
}
export declare type NicDriverState = "NEED_REBOOT" | "NO_DRIVER" | "NOT_READY" | "READY";
export declare type NetworkType = "ACCESS" | "MANAGEMENT" | "MIGRATION" | "STORAGE" | "VM";
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
    vlans_num?: number | null;
    vlans_num_gt?: number | null;
    vlans_num_gte?: number | null;
    vlans_num_in?: number[] | null;
    vlans_num_lt?: number | null;
    vlans_num_lte?: number | null;
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
    vlan_id?: number | null;
    vlan_id_gt?: number | null;
    vlan_id_gte?: number | null;
    vlan_id_in?: number[] | null;
    vlan_id_lt?: number | null;
    vlan_id_lte?: number | null;
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
    order?: number | null;
    order_gt?: number | null;
    order_gte?: number | null;
    order_in?: number[] | null;
    order_lt?: number | null;
    order_lte?: number | null;
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
export declare type VmNicModel = "E1000" | "SRIOV" | "VIRTIO";
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
    cpu_usage?: number | null;
    cpu_usage_gt?: number | null;
    cpu_usage_gte?: number | null;
    cpu_usage_in?: number[] | null;
    cpu_usage_lt?: number | null;
    cpu_usage_lte?: number | null;
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
    guest_size_usage?: number | null;
    guest_size_usage_gt?: number | null;
    guest_size_usage_gte?: number | null;
    guest_size_usage_in?: number[] | null;
    guest_size_usage_lt?: number | null;
    guest_size_usage_lte?: number | null;
    guest_size_usage_not?: number | null;
    guest_size_usage_not_in?: number[] | null;
    guest_used_size?: number | null;
    guest_used_size_gt?: number | null;
    guest_used_size_gte?: number | null;
    guest_used_size_in?: number[] | null;
    guest_used_size_lt?: number | null;
    guest_used_size_lte?: number | null;
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
    logical_size_bytes?: number | null;
    logical_size_bytes_gt?: number | null;
    logical_size_bytes_gte?: number | null;
    logical_size_bytes_in?: number[] | null;
    logical_size_bytes_lt?: number | null;
    logical_size_bytes_lte?: number | null;
    logical_size_bytes_not?: number | null;
    logical_size_bytes_not_in?: number[] | null;
    max_bandwidth?: number | null;
    max_bandwidth_gt?: number | null;
    max_bandwidth_gte?: number | null;
    max_bandwidth_in?: number[] | null;
    max_bandwidth_lt?: number | null;
    max_bandwidth_lte?: number | null;
    max_bandwidth_not?: number | null;
    max_bandwidth_not_in?: number[] | null;
    max_bandwidth_policy?: VmDiskIoRestrictType | null;
    max_bandwidth_policy_in?: VmDiskIoRestrictType[] | null;
    max_bandwidth_policy_not?: VmDiskIoRestrictType | null;
    max_bandwidth_policy_not_in?: VmDiskIoRestrictType[] | null;
    max_iops?: number | null;
    max_iops_gt?: number | null;
    max_iops_gte?: number | null;
    max_iops_in?: number[] | null;
    max_iops_lt?: number | null;
    max_iops_lte?: number | null;
    max_iops_not?: number | null;
    max_iops_not_in?: number[] | null;
    max_iops_policy?: VmDiskIoRestrictType | null;
    max_iops_policy_in?: VmDiskIoRestrictType[] | null;
    max_iops_policy_not?: VmDiskIoRestrictType | null;
    max_iops_policy_not_in?: VmDiskIoRestrictType[] | null;
    memory?: number | null;
    memory_gt?: number | null;
    memory_gte?: number | null;
    memory_in?: number[] | null;
    memory_lt?: number | null;
    memory_lte?: number | null;
    memory_not?: number | null;
    memory_not_in?: number[] | null;
    memory_usage?: number | null;
    memory_usage_gt?: number | null;
    memory_usage_gte?: number | null;
    memory_usage_in?: number[] | null;
    memory_usage_lt?: number | null;
    memory_usage_lte?: number | null;
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
    provisioned_size?: number | null;
    provisioned_size_gt?: number | null;
    provisioned_size_gte?: number | null;
    provisioned_size_in?: number[] | null;
    provisioned_size_lt?: number | null;
    provisioned_size_lte?: number | null;
    provisioned_size_not?: number | null;
    provisioned_size_not_in?: number[] | null;
    size?: number | null;
    size_gt?: number | null;
    size_gte?: number | null;
    size_in?: number[] | null;
    size_lt?: number | null;
    size_lte?: number | null;
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
    unique_size?: number | null;
    unique_size_gt?: number | null;
    unique_size_gte?: number | null;
    unique_size_in?: number[] | null;
    unique_size_lt?: number | null;
    unique_size_lte?: number | null;
    unique_size_not?: number | null;
    unique_size_not_in?: number[] | null;
    usb_devices_every?: UsbDeviceWhereInput | null;
    usb_devices_none?: UsbDeviceWhereInput | null;
    usb_devices_some?: UsbDeviceWhereInput | null;
    vcpu?: number | null;
    vcpu_gt?: number | null;
    vcpu_gte?: number | null;
    vcpu_in?: number[] | null;
    vcpu_lt?: number | null;
    vcpu_lte?: number | null;
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
export declare type VmClockOffset = "LOCALTIME" | "UTC";
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
export declare type EntityType = "VM";
export declare type FilterStatus = "EXECUTING" | "FAILED" | "INITIALIZING" | "PARTIAL_SUCCESSED" | "SUCCESSED";
export declare type VmFirmware = "BIOS" | "UEFI";
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
    vm_num?: number | null;
    vm_num_gt?: number | null;
    vm_num_gte?: number | null;
    vm_num_in?: number[] | null;
    vm_num_lt?: number | null;
    vm_num_lte?: number | null;
    vm_num_not?: number | null;
    vm_num_not_in?: number[] | null;
    vms_every?: VmWhereInput | null;
    vms_none?: VmWhereInput | null;
    vms_some?: VmWhereInput | null;
}
export declare type VmGuestsOperationSystem = "LINUX" | "UNKNOWN" | "WINDOWS";
export declare type VmDiskIoPolicy = "RESTRICT_EACH_DISK" | "RESTRICT_WHOLE_VM";
export declare type VmDiskIoRestrictType = "DYNAMIC" | "FORCED";
export interface SnapshotPlanWhereInput {
    AND?: SnapshotPlanWhereInput[] | null;
    auto_delete_num?: number | null;
    auto_delete_num_gt?: number | null;
    auto_delete_num_gte?: number | null;
    auto_delete_num_in?: number[] | null;
    auto_delete_num_lt?: number | null;
    auto_delete_num_lte?: number | null;
    auto_delete_num_not?: number | null;
    auto_delete_num_not_in?: number[] | null;
    auto_execute_num?: number | null;
    auto_execute_num_gt?: number | null;
    auto_execute_num_gte?: number | null;
    auto_execute_num_in?: number[] | null;
    auto_execute_num_lt?: number | null;
    auto_execute_num_lte?: number | null;
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
    logical_size_bytes?: number | null;
    logical_size_bytes_gt?: number | null;
    logical_size_bytes_gte?: number | null;
    logical_size_bytes_in?: number[] | null;
    logical_size_bytes_lt?: number | null;
    logical_size_bytes_lte?: number | null;
    logical_size_bytes_not?: number | null;
    logical_size_bytes_not_in?: number[] | null;
    manual_delete_num?: number | null;
    manual_delete_num_gt?: number | null;
    manual_delete_num_gte?: number | null;
    manual_delete_num_in?: number[] | null;
    manual_delete_num_lt?: number | null;
    manual_delete_num_lte?: number | null;
    manual_delete_num_not?: number | null;
    manual_delete_num_not_in?: number[] | null;
    manual_execute_num?: number | null;
    manual_execute_num_gt?: number | null;
    manual_execute_num_gte?: number | null;
    manual_execute_num_in?: number[] | null;
    manual_execute_num_lt?: number | null;
    manual_execute_num_lte?: number | null;
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
    object_num?: number | null;
    object_num_gt?: number | null;
    object_num_gte?: number | null;
    object_num_in?: number[] | null;
    object_num_lt?: number | null;
    object_num_lte?: number | null;
    object_num_not?: number | null;
    object_num_not_in?: number[] | null;
    OR?: SnapshotPlanWhereInput[] | null;
    physical_size_bytes?: number | null;
    physical_size_bytes_gt?: number | null;
    physical_size_bytes_gte?: number | null;
    physical_size_bytes_in?: number[] | null;
    physical_size_bytes_lt?: number | null;
    physical_size_bytes_lte?: number | null;
    physical_size_bytes_not?: number | null;
    physical_size_bytes_not_in?: number[] | null;
    remain_snapshot_num?: number | null;
    remain_snapshot_num_gt?: number | null;
    remain_snapshot_num_gte?: number | null;
    remain_snapshot_num_in?: number[] | null;
    remain_snapshot_num_lt?: number | null;
    remain_snapshot_num_lte?: number | null;
    remain_snapshot_num_not?: number | null;
    remain_snapshot_num_not_in?: number[] | null;
    snapshot_group_num?: number | null;
    snapshot_group_num_gt?: number | null;
    snapshot_group_num_gte?: number | null;
    snapshot_group_num_in?: number[] | null;
    snapshot_group_num_lt?: number | null;
    snapshot_group_num_lte?: number | null;
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
export declare type SnapshotPlanExecuteType = "DAY" | "HOUR" | "MONTH" | "WEEK";
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
    logical_size_bytes?: number | null;
    logical_size_bytes_gt?: number | null;
    logical_size_bytes_gte?: number | null;
    logical_size_bytes_in?: number[] | null;
    logical_size_bytes_lt?: number | null;
    logical_size_bytes_lte?: number | null;
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
    object_num?: number | null;
    object_num_gt?: number | null;
    object_num_gte?: number | null;
    object_num_in?: number[] | null;
    object_num_lt?: number | null;
    object_num_lte?: number | null;
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
    max_bandwidth?: number | null;
    max_bandwidth_gt?: number | null;
    max_bandwidth_gte?: number | null;
    max_bandwidth_in?: number[] | null;
    max_bandwidth_lt?: number | null;
    max_bandwidth_lte?: number | null;
    max_bandwidth_not?: number | null;
    max_bandwidth_not_in?: number[] | null;
    max_bandwidth_policy?: VmDiskIoRestrictType | null;
    max_bandwidth_policy_in?: VmDiskIoRestrictType[] | null;
    max_bandwidth_policy_not?: VmDiskIoRestrictType | null;
    max_bandwidth_policy_not_in?: VmDiskIoRestrictType[] | null;
    max_iops?: number | null;
    max_iops_gt?: number | null;
    max_iops_gte?: number | null;
    max_iops_in?: number[] | null;
    max_iops_lt?: number | null;
    max_iops_lte?: number | null;
    max_iops_not?: number | null;
    max_iops_not_in?: number[] | null;
    max_iops_policy?: VmDiskIoRestrictType | null;
    max_iops_policy_in?: VmDiskIoRestrictType[] | null;
    max_iops_policy_not?: VmDiskIoRestrictType | null;
    max_iops_policy_not_in?: VmDiskIoRestrictType[] | null;
    memory?: number | null;
    memory_gt?: number | null;
    memory_gte?: number | null;
    memory_in?: number[] | null;
    memory_lt?: number | null;
    memory_lte?: number | null;
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
    size?: number | null;
    size_gt?: number | null;
    size_gte?: number | null;
    size_in?: number[] | null;
    size_lt?: number | null;
    size_lte?: number | null;
    size_not?: number | null;
    size_not_in?: number[] | null;
    snapshot_group?: SnapshotGroupWhereInput | null;
    vcpu?: number | null;
    vcpu_gt?: number | null;
    vcpu_gte?: number | null;
    vcpu_in?: number[] | null;
    vcpu_lt?: number | null;
    vcpu_lte?: number | null;
    vcpu_not?: number | null;
    vcpu_not_in?: number[] | null;
    vm?: VmWhereInput | null;
    win_opt?: boolean | null;
    win_opt_not?: boolean | null;
}
export declare type ConsistentType = "CRASH_CONSISTENT" | "FILE_SYSTEM_CONSISTENT";
export declare type SnapshotPlanExecuteStatus = "CREATED" | "FAILED" | "IN_PROGRESS" | "SUCCEED" | "UNSPECIFIED";
export declare type SnapshotPlanTaskType = "TASK_TYPE_CLONE" | "TASK_TYPE_PROTECT" | "TASK_TYPE_ROLLBACK";
export declare type SnapshotPlanStatus = "NORMAL" | "STOPPED" | "SUSPENDED";
export declare type VmStatus = "DELETED" | "RUNNING" | "STOPPED" | "SUSPENDED" | "UNKNOWN";
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
    size?: number | null;
    size_gt?: number | null;
    size_gte?: number | null;
    size_in?: number[] | null;
    size_lt?: number | null;
    size_lte?: number | null;
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
export declare type UsbDeviceStatus = "EJECTED" | "NORMAL";
export declare type VmVideoType = "CIRRUS" | "QXL" | "VGA" | "VIRTIO";
export interface VmDiskWhereInput {
    AND?: VmDiskWhereInput[] | null;
    boot?: number | null;
    boot_gt?: number | null;
    boot_gte?: number | null;
    boot_in?: number[] | null;
    boot_lt?: number | null;
    boot_lte?: number | null;
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
    key?: number | null;
    key_gt?: number | null;
    key_gte?: number | null;
    key_in?: number[] | null;
    key_lt?: number | null;
    key_lte?: number | null;
    key_not?: number | null;
    key_not_in?: number[] | null;
    max_bandwidth?: number | null;
    max_bandwidth_gt?: number | null;
    max_bandwidth_gte?: number | null;
    max_bandwidth_in?: number[] | null;
    max_bandwidth_lt?: number | null;
    max_bandwidth_lte?: number | null;
    max_bandwidth_not?: number | null;
    max_bandwidth_not_in?: number[] | null;
    max_bandwidth_policy?: VmDiskIoRestrictType | null;
    max_bandwidth_policy_in?: VmDiskIoRestrictType[] | null;
    max_bandwidth_policy_not?: VmDiskIoRestrictType | null;
    max_bandwidth_policy_not_in?: VmDiskIoRestrictType[] | null;
    max_iops?: number | null;
    max_iops_gt?: number | null;
    max_iops_gte?: number | null;
    max_iops_in?: number[] | null;
    max_iops_lt?: number | null;
    max_iops_lte?: number | null;
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
export declare type Bus = "IDE" | "SCSI" | "VIRTIO";
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
    size?: number | null;
    size_gt?: number | null;
    size_gte?: number | null;
    size_in?: number[] | null;
    size_lt?: number | null;
    size_lte?: number | null;
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
    max_bandwidth?: number | null;
    max_bandwidth_gt?: number | null;
    max_bandwidth_gte?: number | null;
    max_bandwidth_in?: number[] | null;
    max_bandwidth_lt?: number | null;
    max_bandwidth_lte?: number | null;
    max_bandwidth_not?: number | null;
    max_bandwidth_not_in?: number[] | null;
    max_bandwidth_policy?: VmDiskIoRestrictType | null;
    max_bandwidth_policy_in?: VmDiskIoRestrictType[] | null;
    max_bandwidth_policy_not?: VmDiskIoRestrictType | null;
    max_bandwidth_policy_not_in?: VmDiskIoRestrictType[] | null;
    max_iops?: number | null;
    max_iops_gt?: number | null;
    max_iops_gte?: number | null;
    max_iops_in?: number[] | null;
    max_iops_lt?: number | null;
    max_iops_lte?: number | null;
    max_iops_not?: number | null;
    max_iops_not_in?: number[] | null;
    max_iops_policy?: VmDiskIoRestrictType | null;
    max_iops_policy_in?: VmDiskIoRestrictType[] | null;
    max_iops_policy_not?: VmDiskIoRestrictType | null;
    max_iops_policy_not_in?: VmDiskIoRestrictType[] | null;
    memory?: number | null;
    memory_gt?: number | null;
    memory_gte?: number | null;
    memory_in?: number[] | null;
    memory_lt?: number | null;
    memory_lte?: number | null;
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
    size?: number | null;
    size_gt?: number | null;
    size_gte?: number | null;
    size_in?: number[] | null;
    size_lt?: number | null;
    size_lte?: number | null;
    size_not?: number | null;
    size_not_in?: number[] | null;
    vcpu?: number | null;
    vcpu_gt?: number | null;
    vcpu_gte?: number | null;
    vcpu_in?: number[] | null;
    vcpu_lt?: number | null;
    vcpu_lte?: number | null;
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
    size?: number | null;
    size_gt?: number | null;
    size_gte?: number | null;
    size_in?: number[] | null;
    size_lt?: number | null;
    size_lte?: number | null;
    size_not?: number | null;
    size_not_in?: number[] | null;
    version?: number | null;
    version_gt?: number | null;
    version_gte?: number | null;
    version_in?: number[] | null;
    version_lt?: number | null;
    version_lte?: number | null;
    version_not?: number | null;
    version_not_in?: number[] | null;
    vm_disks_every?: VmDiskWhereInput | null;
    vm_disks_none?: VmDiskWhereInput | null;
    vm_disks_some?: VmDiskWhereInput | null;
}
export declare type VmDiskType = "CD_ROM" | "DISK";
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
    guest_size_usage?: number | null;
    guest_size_usage_gt?: number | null;
    guest_size_usage_gte?: number | null;
    guest_size_usage_in?: number[] | null;
    guest_size_usage_lt?: number | null;
    guest_size_usage_lte?: number | null;
    guest_size_usage_not?: number | null;
    guest_size_usage_not_in?: number[] | null;
    guest_used_size?: number | null;
    guest_used_size_gt?: number | null;
    guest_used_size_gte?: number | null;
    guest_used_size_in?: number[] | null;
    guest_used_size_lt?: number | null;
    guest_used_size_lte?: number | null;
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
    size?: number | null;
    size_gt?: number | null;
    size_gte?: number | null;
    size_in?: number[] | null;
    size_lt?: number | null;
    size_lte?: number | null;
    size_not?: number | null;
    size_not_in?: number[] | null;
    unique_size?: number | null;
    unique_size_gt?: number | null;
    unique_size_gte?: number | null;
    unique_size_in?: number[] | null;
    unique_size_lt?: number | null;
    unique_size_lte?: number | null;
    unique_size_not?: number | null;
    unique_size_not_in?: number[] | null;
    vm_disks_every?: VmDiskWhereInput | null;
    vm_disks_none?: VmDiskWhereInput | null;
    vm_disks_some?: VmDiskWhereInput | null;
}
export declare type VmVolumeElfStoragePolicyType = "REPLICA_1_THICK_PROVISION" | "REPLICA_1_THIN_PROVISION" | "REPLICA_2_THICK_PROVISION" | "REPLICA_2_THIN_PROVISION" | "REPLICA_3_THICK_PROVISION" | "REPLICA_3_THIN_PROVISION";
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
export declare type VmVmPolicy = "MUST_DIFFERENT" | "MUST_SAME" | "PREFER_DIFFERENT" | "PREFER_SAME";
export declare type VmToolsStatus = "NOT_INSTALLED" | "NOT_RUNNING" | "RESTRICTION" | "RUNNING";
export interface PmemDimmWhereInput {
    AND?: PmemDimmWhereInput[] | null;
    capacity?: number | null;
    capacity_gt?: number | null;
    capacity_gte?: number | null;
    capacity_in?: number[] | null;
    capacity_lt?: number | null;
    capacity_lte?: number | null;
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
    numa_node?: number | null;
    numa_node_gt?: number | null;
    numa_node_gte?: number | null;
    numa_node_in?: number[] | null;
    numa_node_lt?: number | null;
    numa_node_lte?: number | null;
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
    remaining_life_percent?: number | null;
    remaining_life_percent_gt?: number | null;
    remaining_life_percent_gte?: number | null;
    remaining_life_percent_in?: number[] | null;
    remaining_life_percent_lt?: number | null;
    remaining_life_percent_lte?: number | null;
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
export declare type HostState = "IDLE" | "IN_USE" | "REMOVING";
export declare type HostStatus = "CONNECTED_ERROR" | "CONNECTED_HEALTHY" | "CONNECTED_WARNING" | "CONNECTING" | "INITIALIZING" | "SESSION_EXPIRED";
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
    port?: number | null;
    port_gt?: number | null;
    port_gte?: number | null;
    port_in?: number[] | null;
    port_lt?: number | null;
    port_lte?: number | null;
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
    failure_data_space?: number | null;
    failure_data_space_gt?: number | null;
    failure_data_space_gte?: number | null;
    failure_data_space_in?: number[] | null;
    failure_data_space_lt?: number | null;
    failure_data_space_lte?: number | null;
    failure_data_space_not?: number | null;
    failure_data_space_not_in?: number[] | null;
    host_num?: number | null;
    host_num_gt?: number | null;
    host_num_gte?: number | null;
    host_num_in?: number[] | null;
    host_num_lt?: number | null;
    host_num_lte?: number | null;
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
    provisioned_cpu_cores?: number | null;
    provisioned_cpu_cores_for_active_vm?: number | null;
    provisioned_cpu_cores_for_active_vm_gt?: number | null;
    provisioned_cpu_cores_for_active_vm_gte?: number | null;
    provisioned_cpu_cores_for_active_vm_in?: number[] | null;
    provisioned_cpu_cores_for_active_vm_lt?: number | null;
    provisioned_cpu_cores_for_active_vm_lte?: number | null;
    provisioned_cpu_cores_for_active_vm_not?: number | null;
    provisioned_cpu_cores_for_active_vm_not_in?: number[] | null;
    provisioned_cpu_cores_gt?: number | null;
    provisioned_cpu_cores_gte?: number | null;
    provisioned_cpu_cores_in?: number[] | null;
    provisioned_cpu_cores_lt?: number | null;
    provisioned_cpu_cores_lte?: number | null;
    provisioned_cpu_cores_not?: number | null;
    provisioned_cpu_cores_not_in?: number[] | null;
    provisioned_data_space?: number | null;
    provisioned_data_space_gt?: number | null;
    provisioned_data_space_gte?: number | null;
    provisioned_data_space_in?: number[] | null;
    provisioned_data_space_lt?: number | null;
    provisioned_data_space_lte?: number | null;
    provisioned_data_space_not?: number | null;
    provisioned_data_space_not_in?: number[] | null;
    provisioned_memory_bytes?: number | null;
    provisioned_memory_bytes_gt?: number | null;
    provisioned_memory_bytes_gte?: number | null;
    provisioned_memory_bytes_in?: number[] | null;
    provisioned_memory_bytes_lt?: number | null;
    provisioned_memory_bytes_lte?: number | null;
    provisioned_memory_bytes_not?: number | null;
    provisioned_memory_bytes_not_in?: number[] | null;
    running_vm_num?: number | null;
    running_vm_num_gt?: number | null;
    running_vm_num_gte?: number | null;
    running_vm_num_in?: number[] | null;
    running_vm_num_lt?: number | null;
    running_vm_num_lte?: number | null;
    running_vm_num_not?: number | null;
    running_vm_num_not_in?: number[] | null;
    stopped_vm_num?: number | null;
    stopped_vm_num_gt?: number | null;
    stopped_vm_num_gte?: number | null;
    stopped_vm_num_in?: number[] | null;
    stopped_vm_num_lt?: number | null;
    stopped_vm_num_lte?: number | null;
    stopped_vm_num_not?: number | null;
    stopped_vm_num_not_in?: number[] | null;
    suspended_vm_num?: number | null;
    suspended_vm_num_gt?: number | null;
    suspended_vm_num_gte?: number | null;
    suspended_vm_num_in?: number[] | null;
    suspended_vm_num_lt?: number | null;
    suspended_vm_num_lte?: number | null;
    suspended_vm_num_not?: number | null;
    suspended_vm_num_not_in?: number[] | null;
    total_cache_capacity?: number | null;
    total_cache_capacity_gt?: number | null;
    total_cache_capacity_gte?: number | null;
    total_cache_capacity_in?: number[] | null;
    total_cache_capacity_lt?: number | null;
    total_cache_capacity_lte?: number | null;
    total_cache_capacity_not?: number | null;
    total_cache_capacity_not_in?: number[] | null;
    total_cpu_cores?: number | null;
    total_cpu_cores_gt?: number | null;
    total_cpu_cores_gte?: number | null;
    total_cpu_cores_in?: number[] | null;
    total_cpu_cores_lt?: number | null;
    total_cpu_cores_lte?: number | null;
    total_cpu_cores_not?: number | null;
    total_cpu_cores_not_in?: number[] | null;
    total_cpu_hz?: number | null;
    total_cpu_hz_gt?: number | null;
    total_cpu_hz_gte?: number | null;
    total_cpu_hz_in?: number[] | null;
    total_cpu_hz_lt?: number | null;
    total_cpu_hz_lte?: number | null;
    total_cpu_hz_not?: number | null;
    total_cpu_hz_not_in?: number[] | null;
    total_data_capacity?: number | null;
    total_data_capacity_gt?: number | null;
    total_data_capacity_gte?: number | null;
    total_data_capacity_in?: number[] | null;
    total_data_capacity_lt?: number | null;
    total_data_capacity_lte?: number | null;
    total_data_capacity_not?: number | null;
    total_data_capacity_not_in?: number[] | null;
    total_memory_bytes?: number | null;
    total_memory_bytes_gt?: number | null;
    total_memory_bytes_gte?: number | null;
    total_memory_bytes_in?: number[] | null;
    total_memory_bytes_lt?: number | null;
    total_memory_bytes_lte?: number | null;
    total_memory_bytes_not?: number | null;
    total_memory_bytes_not_in?: number[] | null;
    used_data_space?: number | null;
    used_data_space_gt?: number | null;
    used_data_space_gte?: number | null;
    used_data_space_in?: number[] | null;
    used_data_space_lt?: number | null;
    used_data_space_lte?: number | null;
    used_data_space_not?: number | null;
    used_data_space_not_in?: number[] | null;
    valid_data_space?: number | null;
    valid_data_space_gt?: number | null;
    valid_data_space_gte?: number | null;
    valid_data_space_in?: number[] | null;
    valid_data_space_lt?: number | null;
    valid_data_space_lte?: number | null;
    valid_data_space_not?: number | null;
    valid_data_space_not_in?: number[] | null;
    vm_num?: number | null;
    vm_num_gt?: number | null;
    vm_num_gte?: number | null;
    vm_num_in?: number[] | null;
    vm_num_lt?: number | null;
    vm_num_lte?: number | null;
    vm_num_not?: number | null;
    vm_num_not_in?: number[] | null;
}
export declare type DiskUsage = "BOOT" | "CACHE" | "CACHE_AND_META" | "DATA" | "DATA_AND_META";
export declare type DiskType = "HDD" | "PMem" | "SSD";
export declare type DiskUsageStatus = "ISOLATED" | "MOUNTED" | "MOUNTING" | "PARTIAL_MOUNTED" | "UNMOUNTED" | "UNMOUNTING";
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
    assigned_size?: number | null;
    assigned_size_gt?: number | null;
    assigned_size_gte?: number | null;
    assigned_size_in?: number[] | null;
    assigned_size_lt?: number | null;
    assigned_size_lte?: number | null;
    assigned_size_not?: number | null;
    assigned_size_not_in?: number[] | null;
    bps?: number | null;
    bps_gt?: number | null;
    bps_gte?: number | null;
    bps_in?: number[] | null;
    bps_lt?: number | null;
    bps_lte?: number | null;
    bps_max?: number | null;
    bps_max_gt?: number | null;
    bps_max_gte?: number | null;
    bps_max_in?: number[] | null;
    bps_max_length?: number | null;
    bps_max_length_gt?: number | null;
    bps_max_length_gte?: number | null;
    bps_max_length_in?: number[] | null;
    bps_max_length_lt?: number | null;
    bps_max_length_lte?: number | null;
    bps_max_length_not?: number | null;
    bps_max_length_not_in?: number[] | null;
    bps_max_lt?: number | null;
    bps_max_lte?: number | null;
    bps_max_not?: number | null;
    bps_max_not_in?: number[] | null;
    bps_not?: number | null;
    bps_not_in?: number[] | null;
    bps_rd?: number | null;
    bps_rd_gt?: number | null;
    bps_rd_gte?: number | null;
    bps_rd_in?: number[] | null;
    bps_rd_lt?: number | null;
    bps_rd_lte?: number | null;
    bps_rd_max?: number | null;
    bps_rd_max_gt?: number | null;
    bps_rd_max_gte?: number | null;
    bps_rd_max_in?: number[] | null;
    bps_rd_max_length?: number | null;
    bps_rd_max_length_gt?: number | null;
    bps_rd_max_length_gte?: number | null;
    bps_rd_max_length_in?: number[] | null;
    bps_rd_max_length_lt?: number | null;
    bps_rd_max_length_lte?: number | null;
    bps_rd_max_length_not?: number | null;
    bps_rd_max_length_not_in?: number[] | null;
    bps_rd_max_lt?: number | null;
    bps_rd_max_lte?: number | null;
    bps_rd_max_not?: number | null;
    bps_rd_max_not_in?: number[] | null;
    bps_rd_not?: number | null;
    bps_rd_not_in?: number[] | null;
    bps_wr?: number | null;
    bps_wr_gt?: number | null;
    bps_wr_gte?: number | null;
    bps_wr_in?: number[] | null;
    bps_wr_lt?: number | null;
    bps_wr_lte?: number | null;
    bps_wr_max?: number | null;
    bps_wr_max_gt?: number | null;
    bps_wr_max_gte?: number | null;
    bps_wr_max_in?: number[] | null;
    bps_wr_max_length?: number | null;
    bps_wr_max_length_gt?: number | null;
    bps_wr_max_length_gte?: number | null;
    bps_wr_max_length_in?: number[] | null;
    bps_wr_max_length_lt?: number | null;
    bps_wr_max_length_lte?: number | null;
    bps_wr_max_length_not?: number | null;
    bps_wr_max_length_not_in?: number[] | null;
    bps_wr_max_lt?: number | null;
    bps_wr_max_lte?: number | null;
    bps_wr_max_not?: number | null;
    bps_wr_max_not_in?: number[] | null;
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
    io_size?: number | null;
    io_size_gt?: number | null;
    io_size_gte?: number | null;
    io_size_in?: number[] | null;
    io_size_lt?: number | null;
    io_size_lte?: number | null;
    io_size_not?: number | null;
    io_size_not_in?: number[] | null;
    iops?: number | null;
    iops_gt?: number | null;
    iops_gte?: number | null;
    iops_in?: number[] | null;
    iops_lt?: number | null;
    iops_lte?: number | null;
    iops_max?: number | null;
    iops_max_gt?: number | null;
    iops_max_gte?: number | null;
    iops_max_in?: number[] | null;
    iops_max_length?: number | null;
    iops_max_length_gt?: number | null;
    iops_max_length_gte?: number | null;
    iops_max_length_in?: number[] | null;
    iops_max_length_lt?: number | null;
    iops_max_length_lte?: number | null;
    iops_max_length_not?: number | null;
    iops_max_length_not_in?: number[] | null;
    iops_max_lt?: number | null;
    iops_max_lte?: number | null;
    iops_max_not?: number | null;
    iops_max_not_in?: number[] | null;
    iops_not?: number | null;
    iops_not_in?: number[] | null;
    iops_rd?: number | null;
    iops_rd_gt?: number | null;
    iops_rd_gte?: number | null;
    iops_rd_in?: number[] | null;
    iops_rd_lt?: number | null;
    iops_rd_lte?: number | null;
    iops_rd_max?: number | null;
    iops_rd_max_gt?: number | null;
    iops_rd_max_gte?: number | null;
    iops_rd_max_in?: number[] | null;
    iops_rd_max_length?: number | null;
    iops_rd_max_length_gt?: number | null;
    iops_rd_max_length_gte?: number | null;
    iops_rd_max_length_in?: number[] | null;
    iops_rd_max_length_lt?: number | null;
    iops_rd_max_length_lte?: number | null;
    iops_rd_max_length_not?: number | null;
    iops_rd_max_length_not_in?: number[] | null;
    iops_rd_max_lt?: number | null;
    iops_rd_max_lte?: number | null;
    iops_rd_max_not?: number | null;
    iops_rd_max_not_in?: number[] | null;
    iops_rd_not?: number | null;
    iops_rd_not_in?: number[] | null;
    iops_wr?: number | null;
    iops_wr_gt?: number | null;
    iops_wr_gte?: number | null;
    iops_wr_in?: number[] | null;
    iops_wr_lt?: number | null;
    iops_wr_lte?: number | null;
    iops_wr_max?: number | null;
    iops_wr_max_gt?: number | null;
    iops_wr_max_gte?: number | null;
    iops_wr_max_in?: number[] | null;
    iops_wr_max_length?: number | null;
    iops_wr_max_length_gt?: number | null;
    iops_wr_max_length_gte?: number | null;
    iops_wr_max_length_in?: number[] | null;
    iops_wr_max_length_lt?: number | null;
    iops_wr_max_length_lte?: number | null;
    iops_wr_max_length_not?: number | null;
    iops_wr_max_length_not_in?: number[] | null;
    iops_wr_max_lt?: number | null;
    iops_wr_max_lte?: number | null;
    iops_wr_max_not?: number | null;
    iops_wr_max_not_in?: number[] | null;
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
    namespace_id?: number | null;
    namespace_id_gt?: number | null;
    namespace_id_gte?: number | null;
    namespace_id_in?: number[] | null;
    namespace_id_lt?: number | null;
    namespace_id_lte?: number | null;
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
    replica_num?: number | null;
    replica_num_gt?: number | null;
    replica_num_gte?: number | null;
    replica_num_in?: number[] | null;
    replica_num_lt?: number | null;
    replica_num_lte?: number | null;
    replica_num_not?: number | null;
    replica_num_not_in?: number[] | null;
    shared_size?: number | null;
    shared_size_gt?: number | null;
    shared_size_gte?: number | null;
    shared_size_in?: number[] | null;
    shared_size_lt?: number | null;
    shared_size_lte?: number | null;
    shared_size_not?: number | null;
    shared_size_not_in?: number[] | null;
    snapshot_num?: number | null;
    snapshot_num_gt?: number | null;
    snapshot_num_gte?: number | null;
    snapshot_num_in?: number[] | null;
    snapshot_num_lt?: number | null;
    snapshot_num_lte?: number | null;
    snapshot_num_not?: number | null;
    snapshot_num_not_in?: number[] | null;
    stripe_num?: number | null;
    stripe_num_gt?: number | null;
    stripe_num_gte?: number | null;
    stripe_num_in?: number[] | null;
    stripe_num_lt?: number | null;
    stripe_num_lte?: number | null;
    stripe_num_not?: number | null;
    stripe_num_not_in?: number[] | null;
    stripe_size?: number | null;
    stripe_size_gt?: number | null;
    stripe_size_gte?: number | null;
    stripe_size_in?: number[] | null;
    stripe_size_lt?: number | null;
    stripe_size_lte?: number | null;
    stripe_size_not?: number | null;
    stripe_size_not_in?: number[] | null;
    thin_provision?: boolean | null;
    thin_provision_not?: boolean | null;
    unique_size?: number | null;
    unique_size_gt?: number | null;
    unique_size_gte?: number | null;
    unique_size_in?: number[] | null;
    unique_size_lt?: number | null;
    unique_size_lte?: number | null;
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
    bps?: number | null;
    bps_gt?: number | null;
    bps_gte?: number | null;
    bps_in?: number[] | null;
    bps_lt?: number | null;
    bps_lte?: number | null;
    bps_max?: number | null;
    bps_max_gt?: number | null;
    bps_max_gte?: number | null;
    bps_max_in?: number[] | null;
    bps_max_length?: number | null;
    bps_max_length_gt?: number | null;
    bps_max_length_gte?: number | null;
    bps_max_length_in?: number[] | null;
    bps_max_length_lt?: number | null;
    bps_max_length_lte?: number | null;
    bps_max_length_not?: number | null;
    bps_max_length_not_in?: number[] | null;
    bps_max_lt?: number | null;
    bps_max_lte?: number | null;
    bps_max_not?: number | null;
    bps_max_not_in?: number[] | null;
    bps_not?: number | null;
    bps_not_in?: number[] | null;
    bps_rd?: number | null;
    bps_rd_gt?: number | null;
    bps_rd_gte?: number | null;
    bps_rd_in?: number[] | null;
    bps_rd_lt?: number | null;
    bps_rd_lte?: number | null;
    bps_rd_max?: number | null;
    bps_rd_max_gt?: number | null;
    bps_rd_max_gte?: number | null;
    bps_rd_max_in?: number[] | null;
    bps_rd_max_length?: number | null;
    bps_rd_max_length_gt?: number | null;
    bps_rd_max_length_gte?: number | null;
    bps_rd_max_length_in?: number[] | null;
    bps_rd_max_length_lt?: number | null;
    bps_rd_max_length_lte?: number | null;
    bps_rd_max_length_not?: number | null;
    bps_rd_max_length_not_in?: number[] | null;
    bps_rd_max_lt?: number | null;
    bps_rd_max_lte?: number | null;
    bps_rd_max_not?: number | null;
    bps_rd_max_not_in?: number[] | null;
    bps_rd_not?: number | null;
    bps_rd_not_in?: number[] | null;
    bps_wr?: number | null;
    bps_wr_gt?: number | null;
    bps_wr_gte?: number | null;
    bps_wr_in?: number[] | null;
    bps_wr_lt?: number | null;
    bps_wr_lte?: number | null;
    bps_wr_max?: number | null;
    bps_wr_max_gt?: number | null;
    bps_wr_max_gte?: number | null;
    bps_wr_max_in?: number[] | null;
    bps_wr_max_length?: number | null;
    bps_wr_max_length_gt?: number | null;
    bps_wr_max_length_gte?: number | null;
    bps_wr_max_length_in?: number[] | null;
    bps_wr_max_length_lt?: number | null;
    bps_wr_max_length_lte?: number | null;
    bps_wr_max_length_not?: number | null;
    bps_wr_max_length_not_in?: number[] | null;
    bps_wr_max_lt?: number | null;
    bps_wr_max_lte?: number | null;
    bps_wr_max_not?: number | null;
    bps_wr_max_not_in?: number[] | null;
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
    io_size?: number | null;
    io_size_gt?: number | null;
    io_size_gte?: number | null;
    io_size_in?: number[] | null;
    io_size_lt?: number | null;
    io_size_lte?: number | null;
    io_size_not?: number | null;
    io_size_not_in?: number[] | null;
    iops?: number | null;
    iops_gt?: number | null;
    iops_gte?: number | null;
    iops_in?: number[] | null;
    iops_lt?: number | null;
    iops_lte?: number | null;
    iops_max?: number | null;
    iops_max_gt?: number | null;
    iops_max_gte?: number | null;
    iops_max_in?: number[] | null;
    iops_max_length?: number | null;
    iops_max_length_gt?: number | null;
    iops_max_length_gte?: number | null;
    iops_max_length_in?: number[] | null;
    iops_max_length_lt?: number | null;
    iops_max_length_lte?: number | null;
    iops_max_length_not?: number | null;
    iops_max_length_not_in?: number[] | null;
    iops_max_lt?: number | null;
    iops_max_lte?: number | null;
    iops_max_not?: number | null;
    iops_max_not_in?: number[] | null;
    iops_not?: number | null;
    iops_not_in?: number[] | null;
    iops_rd?: number | null;
    iops_rd_gt?: number | null;
    iops_rd_gte?: number | null;
    iops_rd_in?: number[] | null;
    iops_rd_lt?: number | null;
    iops_rd_lte?: number | null;
    iops_rd_max?: number | null;
    iops_rd_max_gt?: number | null;
    iops_rd_max_gte?: number | null;
    iops_rd_max_in?: number[] | null;
    iops_rd_max_length?: number | null;
    iops_rd_max_length_gt?: number | null;
    iops_rd_max_length_gte?: number | null;
    iops_rd_max_length_in?: number[] | null;
    iops_rd_max_length_lt?: number | null;
    iops_rd_max_length_lte?: number | null;
    iops_rd_max_length_not?: number | null;
    iops_rd_max_length_not_in?: number[] | null;
    iops_rd_max_lt?: number | null;
    iops_rd_max_lte?: number | null;
    iops_rd_max_not?: number | null;
    iops_rd_max_not_in?: number[] | null;
    iops_rd_not?: number | null;
    iops_rd_not_in?: number[] | null;
    iops_wr?: number | null;
    iops_wr_gt?: number | null;
    iops_wr_gte?: number | null;
    iops_wr_in?: number[] | null;
    iops_wr_lt?: number | null;
    iops_wr_lte?: number | null;
    iops_wr_max?: number | null;
    iops_wr_max_gt?: number | null;
    iops_wr_max_gte?: number | null;
    iops_wr_max_in?: number[] | null;
    iops_wr_max_length?: number | null;
    iops_wr_max_length_gt?: number | null;
    iops_wr_max_length_gte?: number | null;
    iops_wr_max_length_in?: number[] | null;
    iops_wr_max_length_lt?: number | null;
    iops_wr_max_length_lte?: number | null;
    iops_wr_max_length_not?: number | null;
    iops_wr_max_length_not_in?: number[] | null;
    iops_wr_max_lt?: number | null;
    iops_wr_max_lte?: number | null;
    iops_wr_max_not?: number | null;
    iops_wr_max_not_in?: number[] | null;
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
    replica_num?: number | null;
    replica_num_gt?: number | null;
    replica_num_gte?: number | null;
    replica_num_in?: number[] | null;
    replica_num_lt?: number | null;
    replica_num_lte?: number | null;
    replica_num_not?: number | null;
    replica_num_not_in?: number[] | null;
    stripe_num?: number | null;
    stripe_num_gt?: number | null;
    stripe_num_gte?: number | null;
    stripe_num_in?: number[] | null;
    stripe_num_lt?: number | null;
    stripe_num_lte?: number | null;
    stripe_num_not?: number | null;
    stripe_num_not_in?: number[] | null;
    stripe_size?: number | null;
    stripe_size_gt?: number | null;
    stripe_size_gte?: number | null;
    stripe_size_in?: number[] | null;
    stripe_size_lt?: number | null;
    stripe_size_lte?: number | null;
    stripe_size_not?: number | null;
    stripe_size_not_in?: number[] | null;
    thin_provision?: boolean | null;
    thin_provision_not?: boolean | null;
}
export declare type NvmfSubsystemPolicyType = "BALANCE" | "INHERIT";
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
    replica_num?: number | null;
    replica_num_gt?: number | null;
    replica_num_gte?: number | null;
    replica_num_in?: number[] | null;
    replica_num_lt?: number | null;
    replica_num_lte?: number | null;
    replica_num_not?: number | null;
    replica_num_not_in?: number[] | null;
    thin_provision?: boolean | null;
    thin_provision_not?: boolean | null;
}
export interface NfsInodeWhereInput {
    AND?: NfsInodeWhereInput[] | null;
    assigned_size?: number | null;
    assigned_size_gt?: number | null;
    assigned_size_gte?: number | null;
    assigned_size_in?: number[] | null;
    assigned_size_lt?: number | null;
    assigned_size_lte?: number | null;
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
    shared_size?: number | null;
    shared_size_gt?: number | null;
    shared_size_gte?: number | null;
    shared_size_in?: number[] | null;
    shared_size_lt?: number | null;
    shared_size_lte?: number | null;
    shared_size_not?: number | null;
    shared_size_not_in?: number[] | null;
    snapshot_num?: number | null;
    snapshot_num_gt?: number | null;
    snapshot_num_gte?: number | null;
    snapshot_num_in?: number[] | null;
    snapshot_num_lt?: number | null;
    snapshot_num_lte?: number | null;
    snapshot_num_not?: number | null;
    snapshot_num_not_in?: number[] | null;
    unique_size?: number | null;
    unique_size_gt?: number | null;
    unique_size_gte?: number | null;
    unique_size_in?: number[] | null;
    unique_size_lt?: number | null;
    unique_size_lte?: number | null;
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
    unique_size?: number | null;
    unique_size_gt?: number | null;
    unique_size_gte?: number | null;
    unique_size_in?: number[] | null;
    unique_size_lt?: number | null;
    unique_size_lte?: number | null;
    unique_size_not?: number | null;
    unique_size_not_in?: number[] | null;
}
export declare type ClusterConnectorErrorCode = "LOAD_CLUSTER_FAILED" | "LOAD_CLUSTER_NETWORK_ERROR" | "LOAD_CLUSTER_NOT_FOUND" | "LOAD_CLUSTER_UNAUTHORIZED" | "LOAD_CLUSTER_UNHEALTHY";
export declare type Hypervisor = "BLUESHARK" | "ELF" | "VMWARE" | "XENSERVER";
export declare type LicenseType = "PERPETUAL" | "SUBSCRIPTION" | "TRIAL";
export declare type NtpMode = "EXTERNAL" | "INTERNAL";
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
export declare type SoftwareEdition = "COMMUNITY" | "ENTERPRISE" | "ESSENTIAL" | "STANDARD" | "TRIAL";
export declare type ClusterType = "BLUESHARK" | "SMTX_OS" | "SMTX_ZBS";
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
    port?: number | null;
    port_gt?: number | null;
    port_gte?: number | null;
    port_in?: number[] | null;
    port_lt?: number | null;
    port_lte?: number | null;
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
    cpu_hz_per_core?: number | null;
    cpu_hz_per_core_gt?: number | null;
    cpu_hz_per_core_gte?: number | null;
    cpu_hz_per_core_in?: number[] | null;
    cpu_hz_per_core_lt?: number | null;
    cpu_hz_per_core_lte?: number | null;
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
    system_data_capacity?: number | null;
    system_data_capacity_gt?: number | null;
    system_data_capacity_gte?: number | null;
    system_data_capacity_in?: number[] | null;
    system_data_capacity_lt?: number | null;
    system_data_capacity_lte?: number | null;
    system_data_capacity_not?: number | null;
    system_data_capacity_not_in?: number[] | null;
    system_used_data_space?: number | null;
    system_used_data_space_gt?: number | null;
    system_used_data_space_gte?: number | null;
    system_used_data_space_in?: number[] | null;
    system_used_data_space_lt?: number | null;
    system_used_data_space_lte?: number | null;
    system_used_data_space_not?: number | null;
    system_used_data_space_not_in?: number[] | null;
    total_cpu_cores?: number | null;
    total_cpu_cores_gt?: number | null;
    total_cpu_cores_gte?: number | null;
    total_cpu_cores_in?: number[] | null;
    total_cpu_cores_lt?: number | null;
    total_cpu_cores_lte?: number | null;
    total_cpu_cores_not?: number | null;
    total_cpu_cores_not_in?: number[] | null;
    total_cpu_hz?: number | null;
    total_cpu_hz_gt?: number | null;
    total_cpu_hz_gte?: number | null;
    total_cpu_hz_in?: number[] | null;
    total_cpu_hz_lt?: number | null;
    total_cpu_hz_lte?: number | null;
    total_cpu_hz_not?: number | null;
    total_cpu_hz_not_in?: number[] | null;
    total_memory_bytes?: number | null;
    total_memory_bytes_gt?: number | null;
    total_memory_bytes_gte?: number | null;
    total_memory_bytes_in?: number[] | null;
    total_memory_bytes_lt?: number | null;
    total_memory_bytes_lte?: number | null;
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
export declare type AlertRuleObject = "BRICK" | "CLUSTER" | "DISK" | "HYPERVISOR" | "NETWORK" | "NTP_SERVER" | "PHYSICAL_HOST" | "SCVM" | "SNAPSHOT_PLAN" | "STORAGE_CHUNK" | "STORAGE_POOL" | "SYSTEM_SERVICE" | "TIME_MACHINE_PLAN" | "VM" | "WITNESS" | "ZBS_ZONE";
export declare type AlertRuleUnit = "BIT" | "BYTE" | "BYTE_PER_SECOND" | "CELSIUS" | "HERTZ" | "NANOSECOND" | "PERCENT" | "SECOND" | "UNIT_UNSPECIFIED";
export interface GetAlertRulesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: AlertRuleOrderByInput | null;
    skip?: number | null;
    where?: AlertRuleWhereInput | null;
}
export interface AlertRuleConnection {
    aggregate: {
        count: number;
    };
}
export interface GetAlertRulesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: AlertRuleOrderByInput | null;
    skip?: number | null;
    where?: AlertRuleWhereInput | null;
}
export interface Alert {
    alert_rule?: {
        id: string;
    };
    cause: string;
    cluster: {
        name: string;
        id: string;
    };
    disk?: {
        name: string;
        id: string;
    };
    ended: boolean;
    host?: {
        name: string;
        id: string;
    };
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
    threshold: number;
    value: number;
    vms?: {
        name: string;
        id: string;
    }[] | null;
}
export declare type AlertOrderByInput = "cause_ASC" | "cause_DESC" | "createdAt_ASC" | "createdAt_DESC" | "ended_ASC" | "ended_DESC" | "id_ASC" | "id_DESC" | "impact_ASC" | "impact_DESC" | "labels_ASC" | "labels_DESC" | "local_create_time_ASC" | "local_create_time_DESC" | "local_end_time_ASC" | "local_end_time_DESC" | "local_id_ASC" | "local_id_DESC" | "local_start_time_ASC" | "local_start_time_DESC" | "local_update_time_ASC" | "local_update_time_DESC" | "message_ASC" | "message_DESC" | "severity_ASC" | "severity_DESC" | "solution_ASC" | "solution_DESC" | "threshold_ASC" | "threshold_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "value_ASC" | "value_DESC";
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
    threshold?: number | null;
    threshold_gt?: number | null;
    threshold_gte?: number | null;
    threshold_in?: number[] | null;
    threshold_lt?: number | null;
    threshold_lte?: number | null;
    threshold_not?: number | null;
    threshold_not_in?: number[] | null;
    value?: number | null;
    value_gt?: number | null;
    value_gte?: number | null;
    value_in?: number[] | null;
    value_lt?: number | null;
    value_lte?: number | null;
    value_not?: number | null;
    value_not_in?: number[] | null;
    vms_every?: VmWhereInput | null;
    vms_none?: VmWhereInput | null;
    vms_some?: VmWhereInput | null;
}
export interface GetAlertsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: AlertOrderByInput | null;
    skip?: number | null;
    where?: AlertWhereInput | null;
}
export interface AlertConnection {
    aggregate: {
        count: number;
    };
}
export interface GetAlertsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: AlertOrderByInput | null;
    skip?: number | null;
    where?: AlertWhereInput | null;
}
export interface Application {
    cluster: {
        name: string;
        id: string;
    };
    error_message?: string | null;
    id: string;
    image_name?: string | null;
    local_id: string;
    memory: number;
    state: ApplicationState;
    storage_ip: string;
    type: ApplicationType;
    update_time?: string | null;
    vcpu: number;
    version: string;
    volume_size: number;
}
export declare type ApplicationOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "error_message_ASC" | "error_message_DESC" | "id_ASC" | "id_DESC" | "image_name_ASC" | "image_name_DESC" | "local_id_ASC" | "local_id_DESC" | "memory_ASC" | "memory_DESC" | "state_ASC" | "state_DESC" | "storage_ip_ASC" | "storage_ip_DESC" | "type_ASC" | "type_DESC" | "update_time_ASC" | "update_time_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "vcpu_ASC" | "vcpu_DESC" | "version_ASC" | "version_DESC" | "volume_size_ASC" | "volume_size_DESC";
export interface GetApplicationsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ApplicationOrderByInput | null;
    skip?: number | null;
    where?: ApplicationWhereInput | null;
}
export interface ApplicationConnection {
    aggregate: {
        count: number;
    };
}
export interface GetApplicationsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ApplicationOrderByInput | null;
    skip?: number | null;
    where?: ApplicationWhereInput | null;
}
export declare type Direction = "HORIZONTAL" | "VERTICAL";
export declare type BrickPhaseEnum = "BACKWARD" | "FORWARD";
export declare type PowerPosition = "LEFT" | "MIDDLE" | "RIGHT";
export interface BrickTopo {
    capacity: {
        row?: number | null;
        column?: number | null;
    };
    cluster: {
        name: string;
        id: string;
    };
    cluster_topo?: {
        name: string;
        id: string;
    };
    disk_layout?: {
        row: number;
        phase: BrickPhaseEnum;
        direction: Direction;
        column: number;
    };
    height: number;
    id: string;
    local_id: string;
    model?: string | null;
    name: string;
    node_topoes?: {
        name: string;
        id: string;
    }[] | null;
    position: number;
    power_layout?: Direction | null;
    power_position?: PowerPosition | null;
    powers?: {
        id: string;
    }[] | null;
    rack_topo?: {
        name: string;
        id: string;
    };
    tag_position_in_brick?: {
        tag: string;
        row: number;
        column: number;
    }[] | null;
}
export declare type BrickTopoOrderByInput = "capacity_ASC" | "capacity_DESC" | "createdAt_ASC" | "createdAt_DESC" | "disk_layout_ASC" | "disk_layout_DESC" | "height_ASC" | "height_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "model_ASC" | "model_DESC" | "name_ASC" | "name_DESC" | "position_ASC" | "position_DESC" | "power_layout_ASC" | "power_layout_DESC" | "power_position_ASC" | "power_position_DESC" | "powers_ASC" | "powers_DESC" | "tag_position_in_brick_ASC" | "tag_position_in_brick_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface BrickTopoWhereInput {
    AND?: BrickTopoWhereInput[] | null;
    cluster?: ClusterWhereInput | null;
    cluster_topo?: ClusterTopoWhereInput | null;
    height?: number | null;
    height_gt?: number | null;
    height_gte?: number | null;
    height_in?: number[] | null;
    height_lt?: number | null;
    height_lte?: number | null;
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
    position?: number | null;
    position_gt?: number | null;
    position_gte?: number | null;
    position_in?: number[] | null;
    position_lt?: number | null;
    position_lte?: number | null;
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
    height?: number | null;
    height_gt?: number | null;
    height_gte?: number | null;
    height_in?: number[] | null;
    height_lt?: number | null;
    height_lte?: number | null;
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
    first?: number | null;
    last?: number | null;
    orderBy?: BrickTopoOrderByInput | null;
    skip?: number | null;
    where?: BrickTopoWhereInput | null;
}
export interface BrickTopoConnection {
    aggregate: {
        count: number;
    };
}
export interface GetBrickTopoesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: BrickTopoOrderByInput | null;
    skip?: number | null;
    where?: BrickTopoWhereInput | null;
}
export interface ClusterImage {
    cluster: {
        name: string;
        id: string;
    };
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    meta_name: string;
    meta_size: number;
    name: string;
    size: number;
    version: string;
}
export declare type ClusterImageOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "meta_name_ASC" | "meta_name_DESC" | "meta_size_ASC" | "meta_size_DESC" | "name_ASC" | "name_DESC" | "size_ASC" | "size_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "version_ASC" | "version_DESC";
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
    meta_size?: number | null;
    meta_size_gt?: number | null;
    meta_size_gte?: number | null;
    meta_size_in?: number[] | null;
    meta_size_lt?: number | null;
    meta_size_lte?: number | null;
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
    size?: number | null;
    size_gt?: number | null;
    size_gte?: number | null;
    size_in?: number[] | null;
    size_lt?: number | null;
    size_lte?: number | null;
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
    first?: number | null;
    last?: number | null;
    orderBy?: ClusterImageOrderByInput | null;
    skip?: number | null;
    where?: ClusterImageWhereInput | null;
}
export interface ClusterImageConnection {
    aggregate: {
        count: number;
    };
}
export interface GetClusterImagesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ClusterImageOrderByInput | null;
    skip?: number | null;
    where?: ClusterImageWhereInput | null;
}
export declare type MetroCheckStatusEnum = "CRITICAL" | "HEALTHY" | "INFO" | "NOTICE";
export interface Cluster {
    applications?: {
        id: string;
    }[] | null;
    architecture: Architecture;
    auto_converge?: boolean | null;
    connect_state: ConnectState;
    consistency_groups?: {
        name: string;
        id: string;
    }[] | null;
    current_cpu_model?: string | null;
    datacenters?: {
        name: string;
        id: string;
    }[] | null;
    disconnected_date?: string | null;
    disconnected_reason?: ClusterConnectorErrorCode | null;
    dns: string[];
    entityAsyncStatus?: EntityAsyncStatus | null;
    failure_data_space?: number | null;
    has_metrox?: boolean | null;
    has_remote_backup?: boolean | null;
    host_num?: number | null;
    hosts?: {
        name: string;
        id: string;
    }[] | null;
    hypervisor?: Hypervisor | null;
    id: string;
    ip: string;
    is_all_flash?: boolean | null;
    iscsi_vip?: string | null;
    labels?: {
        id: string;
    }[] | null;
    license_expire_date?: string | null;
    license_serial?: string | null;
    license_sign_date?: string | null;
    license_type?: LicenseType | null;
    local_id?: string | null;
    maintenance_end_date?: string | null;
    maintenance_start_date?: string | null;
    management_vip?: string | null;
    max_chunk_num?: number | null;
    max_physical_data_capacity?: number | null;
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
    migration_data_size?: number | null;
    migration_speed?: number | null;
    name: string;
    ntp_mode?: NtpMode | null;
    ntp_servers: string[];
    nvmf_enabled?: boolean | null;
    pmem_enabled?: boolean | null;
    provisioned_cpu_cores?: number | null;
    provisioned_cpu_cores_for_active_vm?: number | null;
    provisioned_for_active_vm_ratio?: number | null;
    provisioned_memory_bytes?: number | null;
    provisioned_ratio?: number | null;
    rdma_enabled?: boolean | null;
    recommended_cpu_models: string[];
    recover_data_size?: number | null;
    recover_speed?: number | null;
    reserved_cpu_cores_for_system_service?: number | null;
    running_vm_num?: number | null;
    settings?: {
        id: string;
    };
    software_edition?: SoftwareEdition | null;
    stopped_vm_num?: number | null;
    stretch?: boolean | null;
    suspended_vm_num?: number | null;
    total_cache_capacity?: number | null;
    total_cpu_cores?: number | null;
    total_cpu_hz?: number | null;
    total_cpu_models: string[];
    total_data_capacity?: number | null;
    total_memory_bytes?: number | null;
    type: ClusterType;
    used_cpu_hz?: number | null;
    used_data_space?: number | null;
    used_memory_bytes?: number | null;
    valid_data_space?: number | null;
    vcenterAccount?: {
        id: string;
    };
    vdses?: {
        name: string;
        id: string;
    }[] | null;
    version: string;
    vhost_enabled?: boolean | null;
    vm_folders?: {
        name: string;
        id: string;
    }[] | null;
    vm_num?: number | null;
    vm_templates?: {
        name: string;
        id: string;
    }[] | null;
    vms?: {
        name: string;
        id: string;
    }[] | null;
    witness?: {
        name: string;
        id: string;
    };
    zones?: {
        id: string;
    }[] | null;
}
export declare type ClusterOrderByInput = "architecture_ASC" | "architecture_DESC" | "auto_converge_ASC" | "auto_converge_DESC" | "connect_state_ASC" | "connect_state_DESC" | "createdAt_ASC" | "createdAt_DESC" | "current_cpu_model_ASC" | "current_cpu_model_DESC" | "disconnected_date_ASC" | "disconnected_date_DESC" | "disconnected_reason_ASC" | "disconnected_reason_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "failure_data_space_ASC" | "failure_data_space_DESC" | "has_metrox_ASC" | "has_metrox_DESC" | "has_remote_backup_ASC" | "has_remote_backup_DESC" | "host_num_ASC" | "host_num_DESC" | "hypervisor_ASC" | "hypervisor_DESC" | "id_ASC" | "id_DESC" | "ip_ASC" | "ip_DESC" | "is_all_flash_ASC" | "is_all_flash_DESC" | "iscsi_vip_ASC" | "iscsi_vip_DESC" | "license_expire_date_ASC" | "license_expire_date_DESC" | "license_serial_ASC" | "license_serial_DESC" | "license_sign_date_ASC" | "license_sign_date_DESC" | "license_type_ASC" | "license_type_DESC" | "local_id_ASC" | "local_id_DESC" | "maintenance_end_date_ASC" | "maintenance_end_date_DESC" | "maintenance_start_date_ASC" | "maintenance_start_date_DESC" | "management_vip_ASC" | "management_vip_DESC" | "max_chunk_num_ASC" | "max_chunk_num_DESC" | "max_physical_data_capacity_ASC" | "max_physical_data_capacity_DESC" | "max_physical_data_capacity_per_node_ASC" | "max_physical_data_capacity_per_node_DESC" | "metro_availability_checklist_ASC" | "metro_availability_checklist_DESC" | "mgt_gateway_ASC" | "mgt_gateway_DESC" | "mgt_netmask_ASC" | "mgt_netmask_DESC" | "migration_data_size_ASC" | "migration_data_size_DESC" | "migration_speed_ASC" | "migration_speed_DESC" | "name_ASC" | "name_DESC" | "ntp_mode_ASC" | "ntp_mode_DESC" | "nvmf_enabled_ASC" | "nvmf_enabled_DESC" | "password_ASC" | "password_DESC" | "pmem_enabled_ASC" | "pmem_enabled_DESC" | "provisioned_cpu_cores_ASC" | "provisioned_cpu_cores_DESC" | "provisioned_cpu_cores_for_active_vm_ASC" | "provisioned_cpu_cores_for_active_vm_DESC" | "provisioned_for_active_vm_ratio_ASC" | "provisioned_for_active_vm_ratio_DESC" | "provisioned_memory_bytes_ASC" | "provisioned_memory_bytes_DESC" | "provisioned_ratio_ASC" | "provisioned_ratio_DESC" | "rdma_enabled_ASC" | "rdma_enabled_DESC" | "recover_data_size_ASC" | "recover_data_size_DESC" | "recover_speed_ASC" | "recover_speed_DESC" | "reserved_cpu_cores_for_system_service_ASC" | "reserved_cpu_cores_for_system_service_DESC" | "running_vm_num_ASC" | "running_vm_num_DESC" | "software_edition_ASC" | "software_edition_DESC" | "stopped_vm_num_ASC" | "stopped_vm_num_DESC" | "stretch_ASC" | "stretch_DESC" | "suspended_vm_num_ASC" | "suspended_vm_num_DESC" | "total_cache_capacity_ASC" | "total_cache_capacity_DESC" | "total_cpu_cores_ASC" | "total_cpu_cores_DESC" | "total_cpu_hz_ASC" | "total_cpu_hz_DESC" | "total_data_capacity_ASC" | "total_data_capacity_DESC" | "total_memory_bytes_ASC" | "total_memory_bytes_DESC" | "type_ASC" | "type_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "used_cpu_hz_ASC" | "used_cpu_hz_DESC" | "used_data_space_ASC" | "used_data_space_DESC" | "used_memory_bytes_ASC" | "used_memory_bytes_DESC" | "username_ASC" | "username_DESC" | "valid_data_space_ASC" | "valid_data_space_DESC" | "version_ASC" | "version_DESC" | "vhost_enabled_ASC" | "vhost_enabled_DESC" | "vm_num_ASC" | "vm_num_DESC";
export interface GetClustersRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ClusterOrderByInput | null;
    skip?: number | null;
    where?: ClusterWhereInput | null;
}
export interface ClusterConnection {
    aggregate: {
        count: number;
    };
}
export interface GetClustersConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ClusterOrderByInput | null;
    skip?: number | null;
    where?: ClusterWhereInput | null;
}
export interface ClusterSettings {
    cluster: {
        name: string;
        id: string;
    };
    id: string;
    vm_recycle_bin?: {
        retain: number;
        enabled: boolean;
    };
}
export declare type ClusterSettingsOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "vm_recycle_bin_ASC" | "vm_recycle_bin_DESC";
export interface GetClusterSettingsesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ClusterSettingsOrderByInput | null;
    skip?: number | null;
    where?: ClusterSettingsWhereInput | null;
}
export interface ClusterSettingsConnection {
    aggregate: {
        count: number;
    };
}
export interface GetClusterSettingsesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ClusterSettingsOrderByInput | null;
    skip?: number | null;
    where?: ClusterSettingsWhereInput | null;
}
export interface ClusterTopo {
    brick_topoes?: {
        name: string;
        id: string;
    }[] | null;
    cluster: {
        name: string;
        id: string;
    };
    id: string;
    local_id: string;
    name: string;
    node_topoes?: {
        name: string;
        id: string;
    }[] | null;
    zone_topoes?: {
        id: string;
    }[] | null;
}
export declare type ClusterTopoOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetClusterTopoesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ClusterTopoOrderByInput | null;
    skip?: number | null;
    where?: ClusterTopoWhereInput | null;
}
export interface ClusterTopoConnection {
    aggregate: {
        count: number;
    };
}
export interface GetClusterTopoesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ClusterTopoOrderByInput | null;
    skip?: number | null;
    where?: ClusterTopoWhereInput | null;
}
export interface ClusterUpgradeHistory {
    cluster: {
        name: string;
        id: string;
    };
    date: string;
    id: string;
    local_id: string;
    progress: object;
    result: string;
    task_uuid: string;
    version: string;
}
export declare type ClusterUpgradeHistoryOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "date_ASC" | "date_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "progress_ASC" | "progress_DESC" | "result_ASC" | "result_DESC" | "task_uuid_ASC" | "task_uuid_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "version_ASC" | "version_DESC";
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
    first?: number | null;
    last?: number | null;
    orderBy?: ClusterUpgradeHistoryOrderByInput | null;
    skip?: number | null;
    where?: ClusterUpgradeHistoryWhereInput | null;
}
export interface ClusterUpgradeHistoryConnection {
    aggregate: {
        count: number;
    };
}
export interface GetClusterUpgradeHistoriesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ClusterUpgradeHistoryOrderByInput | null;
    skip?: number | null;
    where?: ClusterUpgradeHistoryWhereInput | null;
}
export interface ConsistencyGroup {
    cluster: {
        name: string;
        id: string;
    };
    consistency_group_snapshots?: {
        name: string;
        id: string;
    }[] | null;
    description: string;
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    iscsi_luns?: {
        name: string;
        id: string;
    }[] | null;
    labels?: {
        id: string;
    }[] | null;
    local_created_at: string;
    local_id: string;
    name: string;
    namespaces?: {
        name: string;
        id: string;
    }[] | null;
    unique_size: number;
}
export declare type ConsistencyGroupOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "unique_size_ASC" | "unique_size_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetConsistencyGroupsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ConsistencyGroupOrderByInput | null;
    skip?: number | null;
    where?: ConsistencyGroupWhereInput | null;
}
export interface ConsistencyGroupConnection {
    aggregate: {
        count: number;
    };
}
export interface GetConsistencyGroupsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ConsistencyGroupOrderByInput | null;
    skip?: number | null;
    where?: ConsistencyGroupWhereInput | null;
}
export interface ConsistencyGroupSnapshot {
    consistency_group?: {
        name: string;
        id: string;
    };
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    Iscsi_lun_snapshots?: {
        name: string;
        id: string;
    }[] | null;
    labels?: {
        id: string;
    }[] | null;
    local_created_at: string;
    local_id: string;
    name: string;
    nvmf_namespace_snapshots?: {
        name: string;
        id: string;
    }[] | null;
    unique_size: number;
}
export declare type ConsistencyGroupSnapshotOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "unique_size_ASC" | "unique_size_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetConsistencyGroupSnapshotsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ConsistencyGroupSnapshotOrderByInput | null;
    skip?: number | null;
    where?: ConsistencyGroupSnapshotWhereInput | null;
}
export interface ConsistencyGroupSnapshotConnection {
    aggregate: {
        count: number;
    };
}
export interface GetConsistencyGroupSnapshotsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ConsistencyGroupSnapshotOrderByInput | null;
    skip?: number | null;
    where?: ConsistencyGroupSnapshotWhereInput | null;
}
export interface Datacenter {
    cluster_num?: number | null;
    clusters?: {
        name: string;
        id: string;
    }[] | null;
    failure_data_space?: number | null;
    host_num?: number | null;
    id: string;
    labels?: {
        id: string;
    }[] | null;
    name: string;
    organization: {
        name: string;
        id: string;
    };
    total_cpu_hz?: number | null;
    total_data_capacity?: number | null;
    total_memory_bytes?: number | null;
    used_cpu_hz?: number | null;
    used_data_space?: number | null;
    used_memory_bytes?: number | null;
    vm_num?: number | null;
}
export declare type DatacenterOrderByInput = "cluster_num_ASC" | "cluster_num_DESC" | "createdAt_ASC" | "createdAt_DESC" | "failure_data_space_ASC" | "failure_data_space_DESC" | "host_num_ASC" | "host_num_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "total_cpu_hz_ASC" | "total_cpu_hz_DESC" | "total_data_capacity_ASC" | "total_data_capacity_DESC" | "total_memory_bytes_ASC" | "total_memory_bytes_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "used_cpu_hz_ASC" | "used_cpu_hz_DESC" | "used_data_space_ASC" | "used_data_space_DESC" | "used_memory_bytes_ASC" | "used_memory_bytes_DESC" | "vm_num_ASC" | "vm_num_DESC";
export interface GetDatacentersRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: DatacenterOrderByInput | null;
    skip?: number | null;
    where?: DatacenterWhereInput | null;
}
export interface DatacenterConnection {
    aggregate: {
        count: number;
    };
}
export interface GetDatacentersConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: DatacenterOrderByInput | null;
    skip?: number | null;
    where?: DatacenterWhereInput | null;
}
export interface Deploy {
    id: string;
    license?: {
        id: string;
    };
    version: string;
}
export declare type DeployOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "version_ASC" | "version_DESC";
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
    max_chunk_num?: number | null;
    max_chunk_num_gt?: number | null;
    max_chunk_num_gte?: number | null;
    max_chunk_num_in?: number[] | null;
    max_chunk_num_lt?: number | null;
    max_chunk_num_lte?: number | null;
    max_chunk_num_not?: number | null;
    max_chunk_num_not_in?: number[] | null;
    max_cluster_num?: number | null;
    max_cluster_num_gt?: number | null;
    max_cluster_num_gte?: number | null;
    max_cluster_num_in?: number[] | null;
    max_cluster_num_lt?: number | null;
    max_cluster_num_lte?: number | null;
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
    first?: number | null;
    last?: number | null;
    orderBy?: DeployOrderByInput | null;
    skip?: number | null;
    where?: DeployWhereInput | null;
}
export interface DeployConnection {
    aggregate: {
        count: number;
    };
}
export interface GetDeploysConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: DeployOrderByInput | null;
    skip?: number | null;
    where?: DeployWhereInput | null;
}
export interface DiscoveredHost {
    all_flash: boolean;
    deployed?: boolean | null;
    dimms?: {
        socket_id: string;
        health_status: string;
        fw_version: string;
        dimm_id: string;
    }[] | null;
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
export declare type PartitionUsage = "BOOT" | "CACHE" | "JOURNAL" | "METAD" | "PARTITION" | "SWAP" | "SYSTEM" | "UNMOUNTED" | "UNPARTED" | "ZOOKEEPER";
export interface Disk {
    entityAsyncStatus?: EntityAsyncStatus | null;
    firmware: string;
    function?: DiskFunction | null;
    health_status?: DiskHealthStatus | null;
    healthy: boolean;
    host: {
        name: string;
        id: string;
    };
    id: string;
    labels?: {
        id: string;
    }[] | null;
    local_id: string;
    model: string;
    mounted: boolean;
    name: string;
    numa_node?: number | null;
    offline: boolean;
    partitions: {
        used_size: number;
        usage: PartitionUsage;
        size: number;
        path?: string | null;
        name?: string | null;
    }[];
    path: string;
    persistent_memory_type?: string | null;
    physical_slot_on_brick?: number | null;
    pmem_dimms?: {
        name: string;
        id: string;
    }[] | null;
    recommended_usage?: DiskUsage | null;
    remaining_life_percent?: number | null;
    serial: string;
    size: number;
    type: DiskType;
    usage: DiskUsage;
    usage_status?: DiskUsageStatus | null;
}
export declare type DiskOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "firmware_ASC" | "firmware_DESC" | "function_ASC" | "function_DESC" | "health_status_ASC" | "health_status_DESC" | "healthy_ASC" | "healthy_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "model_ASC" | "model_DESC" | "mounted_ASC" | "mounted_DESC" | "name_ASC" | "name_DESC" | "numa_node_ASC" | "numa_node_DESC" | "offline_ASC" | "offline_DESC" | "partitions_ASC" | "partitions_DESC" | "path_ASC" | "path_DESC" | "persistent_memory_type_ASC" | "persistent_memory_type_DESC" | "physical_slot_on_brick_ASC" | "physical_slot_on_brick_DESC" | "recommended_usage_ASC" | "recommended_usage_DESC" | "remaining_life_percent_ASC" | "remaining_life_percent_DESC" | "serial_ASC" | "serial_DESC" | "size_ASC" | "size_DESC" | "type_ASC" | "type_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "usage_ASC" | "usage_DESC" | "usage_status_ASC" | "usage_status_DESC";
export interface GetDisksRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: DiskOrderByInput | null;
    skip?: number | null;
    where?: DiskWhereInput | null;
}
export interface DiskConnection {
    aggregate: {
        count: number;
    };
}
export interface GetDisksConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: DiskOrderByInput | null;
    skip?: number | null;
    where?: DiskWhereInput | null;
}
export declare type ElfDataStoreType = "ISCSI" | "NFS" | "NVMe";
export interface ElfDataStore {
    cluster: {
        name: string;
        id: string;
    };
    description: string;
    external_use: boolean;
    id: string;
    internal: boolean;
    ip_whitelist: string;
    iscsi_target?: {
        name: string;
        id: string;
    };
    local_id: string;
    name: string;
    nfs_export?: {
        name: string;
        id: string;
    };
    nvmf_subsystem?: {
        name: string;
        id: string;
    };
    replica_num: number;
    thin_provision: boolean;
    type: ElfDataStoreType;
}
export declare type ElfDataStoreOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "external_use_ASC" | "external_use_DESC" | "id_ASC" | "id_DESC" | "internal_ASC" | "internal_DESC" | "ip_whitelist_ASC" | "ip_whitelist_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "replica_num_ASC" | "replica_num_DESC" | "thin_provision_ASC" | "thin_provision_DESC" | "type_ASC" | "type_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
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
    replica_num?: number | null;
    replica_num_gt?: number | null;
    replica_num_gte?: number | null;
    replica_num_in?: number[] | null;
    replica_num_lt?: number | null;
    replica_num_lte?: number | null;
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
    first?: number | null;
    last?: number | null;
    orderBy?: ElfDataStoreOrderByInput | null;
    skip?: number | null;
    where?: ElfDataStoreWhereInput | null;
}
export interface ElfDataStoreConnection {
    aggregate: {
        count: number;
    };
}
export interface GetElfDataStoresConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ElfDataStoreOrderByInput | null;
    skip?: number | null;
    where?: ElfDataStoreWhereInput | null;
}
export interface ElfImage {
    cluster?: {
        name: string;
        id: string;
    };
    description: string;
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    labels?: {
        id: string;
    }[] | null;
    local_created_at: string;
    local_id: string;
    name: string;
    path: string;
    size: number;
    upload_task?: {
        id: string;
    };
    vm_disks?: {
        id: string;
    }[] | null;
    vm_snapshots?: {
        name: string;
        id: string;
    }[] | null;
    vm_templates?: {
        name: string;
        id: string;
    }[] | null;
}
export declare type ElfImageOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "path_ASC" | "path_DESC" | "size_ASC" | "size_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetElfImagesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ElfImageOrderByInput | null;
    skip?: number | null;
    where?: ElfImageWhereInput | null;
}
export interface ElfImageConnection {
    aggregate: {
        count: number;
    };
}
export interface GetElfImagesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ElfImageOrderByInput | null;
    skip?: number | null;
    where?: ElfImageWhereInput | null;
}
export interface ElfStoragePolicy {
    cluster: {
        name: string;
        id: string;
    };
    description: string;
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    local_id: string;
    name: string;
    replica_num: number;
    stripe_num: number;
    stripe_size: number;
    thin_provision: boolean;
}
export declare type ElfStoragePolicyOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "replica_num_ASC" | "replica_num_DESC" | "stripe_num_ASC" | "stripe_num_DESC" | "stripe_size_ASC" | "stripe_size_DESC" | "thin_provision_ASC" | "thin_provision_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
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
    replica_num?: number | null;
    replica_num_gt?: number | null;
    replica_num_gte?: number | null;
    replica_num_in?: number[] | null;
    replica_num_lt?: number | null;
    replica_num_lte?: number | null;
    replica_num_not?: number | null;
    replica_num_not_in?: number[] | null;
    stripe_num?: number | null;
    stripe_num_gt?: number | null;
    stripe_num_gte?: number | null;
    stripe_num_in?: number[] | null;
    stripe_num_lt?: number | null;
    stripe_num_lte?: number | null;
    stripe_num_not?: number | null;
    stripe_num_not_in?: number[] | null;
    stripe_size?: number | null;
    stripe_size_gt?: number | null;
    stripe_size_gte?: number | null;
    stripe_size_in?: number[] | null;
    stripe_size_lt?: number | null;
    stripe_size_lte?: number | null;
    stripe_size_not?: number | null;
    stripe_size_not_in?: number[] | null;
    thin_provision?: boolean | null;
    thin_provision_not?: boolean | null;
}
export interface GetElfStoragePoliciesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ElfStoragePolicyOrderByInput | null;
    skip?: number | null;
    where?: ElfStoragePolicyWhereInput | null;
}
export interface ElfStoragePolicyConnection {
    aggregate: {
        count: number;
    };
}
export interface GetElfStoragePoliciesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ElfStoragePolicyOrderByInput | null;
    skip?: number | null;
    where?: ElfStoragePolicyWhereInput | null;
}
export declare type FilterRuleAggregationEnum = "AVG" | "MAX" | "MIN" | "QUANTILE" | "SUM";
export declare type FilterRuleMetricEnum = "VM_CPU_USAGE" | "VM_MEMORY_USAGE" | "VM_POWEROFF_DAYS" | "VM_POWERON_DAYS" | "VM_READWRITE_IO";
export declare type FilterRuleOpEnum = "GT" | "GTE" | "LT" | "LTE";
export interface EntityFilter {
    apply_to_all_clusters?: boolean | null;
    clusters?: {
        name: string;
        id: string;
    }[] | null;
    entity_type: EntityType;
    exclude_ids: string[];
    exec_failed_cluster?: {
        name: string;
        id: string;
    }[] | null;
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
export declare type EntityFilterOrderByInput = "apply_to_all_clusters_ASC" | "apply_to_all_clusters_DESC" | "createdAt_ASC" | "createdAt_DESC" | "entity_type_ASC" | "entity_type_DESC" | "filter_status_ASC" | "filter_status_DESC" | "id_ASC" | "id_DESC" | "last_executed_at_ASC" | "last_executed_at_DESC" | "name_ASC" | "name_DESC" | "preset_ASC" | "preset_DESC" | "rules_ASC" | "rules_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetEntityFiltersRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: EntityFilterOrderByInput | null;
    skip?: number | null;
    where?: EntityFilterWhereInput | null;
}
export interface EntityFilterConnection {
    aggregate: {
        count: number;
    };
}
export interface GetEntityFiltersConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: EntityFilterOrderByInput | null;
    skip?: number | null;
    where?: EntityFilterWhereInput | null;
}
export interface GlobalAlertRule {
    alert_rules?: {
        id: string;
    }[] | null;
    boolean: boolean;
    cause: string;
    default_thresholds: {
        value?: number | null;
        severity?: SeverityEnum | null;
        quantile?: number | null;
    }[];
    disabled: boolean;
    id: string;
    impact: string;
    message: string;
    name: string;
    object?: AlertRuleObject | null;
    operator: string;
    solution: string;
    thresholds: {
        value?: number | null;
        severity?: SeverityEnum | null;
        quantile?: number | null;
    }[];
    unit: AlertRuleUnit;
}
export declare type GlobalAlertRuleOrderByInput = "boolean_ASC" | "boolean_DESC" | "cause_ASC" | "cause_DESC" | "createdAt_ASC" | "createdAt_DESC" | "default_thresholds_ASC" | "default_thresholds_DESC" | "disabled_ASC" | "disabled_DESC" | "id_ASC" | "id_DESC" | "impact_ASC" | "impact_DESC" | "message_ASC" | "message_DESC" | "name_ASC" | "name_DESC" | "object_ASC" | "object_DESC" | "operator_ASC" | "operator_DESC" | "solution_ASC" | "solution_DESC" | "thresholds_ASC" | "thresholds_DESC" | "unit_ASC" | "unit_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetGlobalAlertRulesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: GlobalAlertRuleOrderByInput | null;
    skip?: number | null;
    where?: GlobalAlertRuleWhereInput | null;
}
export interface GlobalAlertRuleConnection {
    aggregate: {
        count: number;
    };
}
export interface GetGlobalAlertRulesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: GlobalAlertRuleOrderByInput | null;
    skip?: number | null;
    where?: GlobalAlertRuleWhereInput | null;
}
export interface GlobalSettings {
    id: string;
    vm_recycle_bin: {
        retain: number;
        enabled: boolean;
    };
}
export declare type GlobalSettingsOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "vm_recycle_bin_ASC" | "vm_recycle_bin_DESC";
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
    first?: number | null;
    last?: number | null;
    orderBy?: GlobalSettingsOrderByInput | null;
    skip?: number | null;
    where?: GlobalSettingsWhereInput | null;
}
export interface GlobalSettingsConnection {
    aggregate: {
        count: number;
    };
}
export interface GetGlobalSettingsesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: GlobalSettingsOrderByInput | null;
    skip?: number | null;
    where?: GlobalSettingsWhereInput | null;
}
export declare type MetricType = "BOTTOMK" | "NORMAL" | "TOPK";
export declare type GraphType = "AREA" | "STACK";
export interface Graph {
    cluster?: {
        name: string;
        id: string;
    };
    disks?: {
        name: string;
        id: string;
    }[] | null;
    entityAsyncStatus?: EntityAsyncStatus | null;
    hosts?: {
        name: string;
        id: string;
    }[] | null;
    id: string;
    local_id: string;
    luns?: {
        name: string;
        id: string;
    }[] | null;
    metric_count: number;
    metric_name: string;
    metric_type: MetricType;
    namespaces?: {
        name: string;
        id: string;
    }[] | null;
    network?: NetworkType | null;
    nics?: {
        name: string;
        id: string;
    }[] | null;
    resource_type: string;
    service?: string | null;
    targets: object;
    title: string;
    type: GraphType;
    view: {
        name: string;
        id: string;
    };
    vmNics?: {
        id: string;
    }[] | null;
    vms?: {
        name: string;
        id: string;
    }[] | null;
    vmVolumes?: {
        name: string;
        id: string;
    }[] | null;
    witnesses?: {
        name: string;
        id: string;
    }[] | null;
    zones?: {
        id: string;
    }[] | null;
}
export declare type GraphOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "metric_count_ASC" | "metric_count_DESC" | "metric_name_ASC" | "metric_name_DESC" | "metric_type_ASC" | "metric_type_DESC" | "network_ASC" | "network_DESC" | "resource_type_ASC" | "resource_type_DESC" | "service_ASC" | "service_DESC" | "targets_ASC" | "targets_DESC" | "title_ASC" | "title_DESC" | "type_ASC" | "type_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
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
    metric_count?: number | null;
    metric_count_gt?: number | null;
    metric_count_gte?: number | null;
    metric_count_in?: number[] | null;
    metric_count_lt?: number | null;
    metric_count_lte?: number | null;
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
    time_span?: number | null;
    time_span_gt?: number | null;
    time_span_gte?: number | null;
    time_span_in?: number[] | null;
    time_span_lt?: number | null;
    time_span_lte?: number | null;
    time_span_not?: number | null;
    time_span_not_in?: number[] | null;
    time_unit?: TimeUnit | null;
    time_unit_in?: TimeUnit[] | null;
    time_unit_not?: TimeUnit | null;
    time_unit_not_in?: TimeUnit[] | null;
}
export declare type TimeUnit = "DAY" | "HOUR" | "MONTH";
export interface GetGraphsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: GraphOrderByInput | null;
    skip?: number | null;
    where?: GraphWhereInput | null;
}
export interface GraphConnection {
    aggregate: {
        count: number;
    };
}
export interface GetGraphsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: GraphOrderByInput | null;
    skip?: number | null;
    where?: GraphWhereInput | null;
}
export interface Host {
    access_ip?: string | null;
    allocatable_memory_bytes: number;
    chunk_id: string;
    cluster: {
        name: string;
        id: string;
    };
    compatible_cpu_models: string[];
    cpu_brand: string;
    cpu_fan_speed: number[];
    cpu_fan_speed_unit?: CpuFanSpeedUnit | null;
    cpu_hz_per_core: number;
    cpu_model: string;
    cpu_temperature_celsius: number[];
    data_ip?: string | null;
    disks?: {
        name: string;
        id: string;
    }[] | null;
    failure_data_space: number;
    hdd_data_capacity: number;
    hdd_disk_count: number;
    id: string;
    ipmi?: {
        id: string;
    };
    is_os_in_raid1?: boolean | null;
    labels?: {
        id: string;
    }[] | null;
    local_id: string;
    lsm_cap_disk_safe_umount: boolean;
    management_ip: string;
    model: string;
    name: string;
    nested_virtualization: boolean;
    nic_count: number;
    nics?: {
        name: string;
        id: string;
    }[] | null;
    node_topo_local_id?: string | null;
    os_memory_bytes: number;
    os_version?: string | null;
    pmem_dimm_capacity: number;
    pmem_dimm_count: number;
    pmem_dimms?: {
        name: string;
        id: string;
    }[] | null;
    pmem_disk_count: number;
    provisioned_cpu_cores: number;
    provisioned_memory_bytes: number;
    running_pause_vm_memory_bytes: number;
    running_vm_num?: number | null;
    scvm_cpu?: number | null;
    scvm_memory?: number | null;
    scvm_name?: string | null;
    serial?: string | null;
    ssd_data_capacity: number;
    ssd_disk_count: number;
    state: HostState;
    status: HostStatus;
    stopped_vm_num?: number | null;
    suspended_vm_num?: number | null;
    total_cache_capacity?: number | null;
    total_cpu_cores: number;
    total_cpu_hz: number;
    total_data_capacity: number;
    total_memory_bytes: number;
    usb_devices?: {
        name: string;
        id: string;
    }[] | null;
    used_cpu_hz?: number | null;
    used_data_space: number;
    used_memory_bytes?: number | null;
    vm_num?: number | null;
    vmotion_ip?: string | null;
    vms?: {
        name: string;
        id: string;
    }[] | null;
    vsphereEsxiAccount?: {
        id: string;
    };
    with_faster_ssd_as_cache?: boolean | null;
    zone?: {
        id: string;
    };
}
export declare type HostOrderByInput = "access_ip_ASC" | "access_ip_DESC" | "allocatable_memory_bytes_ASC" | "allocatable_memory_bytes_DESC" | "chunk_id_ASC" | "chunk_id_DESC" | "cpu_brand_ASC" | "cpu_brand_DESC" | "cpu_fan_speed_unit_ASC" | "cpu_fan_speed_unit_DESC" | "cpu_hz_per_core_ASC" | "cpu_hz_per_core_DESC" | "cpu_model_ASC" | "cpu_model_DESC" | "createdAt_ASC" | "createdAt_DESC" | "data_ip_ASC" | "data_ip_DESC" | "failure_data_space_ASC" | "failure_data_space_DESC" | "hdd_data_capacity_ASC" | "hdd_data_capacity_DESC" | "hdd_disk_count_ASC" | "hdd_disk_count_DESC" | "id_ASC" | "id_DESC" | "is_os_in_raid1_ASC" | "is_os_in_raid1_DESC" | "local_id_ASC" | "local_id_DESC" | "lsm_cap_disk_safe_umount_ASC" | "lsm_cap_disk_safe_umount_DESC" | "management_ip_ASC" | "management_ip_DESC" | "model_ASC" | "model_DESC" | "name_ASC" | "name_DESC" | "nested_virtualization_ASC" | "nested_virtualization_DESC" | "nic_count_ASC" | "nic_count_DESC" | "node_topo_local_id_ASC" | "node_topo_local_id_DESC" | "os_memory_bytes_ASC" | "os_memory_bytes_DESC" | "os_version_ASC" | "os_version_DESC" | "pmem_dimm_capacity_ASC" | "pmem_dimm_capacity_DESC" | "pmem_dimm_count_ASC" | "pmem_dimm_count_DESC" | "pmem_disk_count_ASC" | "pmem_disk_count_DESC" | "provisioned_cpu_cores_ASC" | "provisioned_cpu_cores_DESC" | "provisioned_memory_bytes_ASC" | "provisioned_memory_bytes_DESC" | "running_pause_vm_memory_bytes_ASC" | "running_pause_vm_memory_bytes_DESC" | "running_vm_num_ASC" | "running_vm_num_DESC" | "scvm_cpu_ASC" | "scvm_cpu_DESC" | "scvm_memory_ASC" | "scvm_memory_DESC" | "scvm_name_ASC" | "scvm_name_DESC" | "serial_ASC" | "serial_DESC" | "ssd_data_capacity_ASC" | "ssd_data_capacity_DESC" | "ssd_disk_count_ASC" | "ssd_disk_count_DESC" | "state_ASC" | "state_DESC" | "status_ASC" | "status_DESC" | "stopped_vm_num_ASC" | "stopped_vm_num_DESC" | "suspended_vm_num_ASC" | "suspended_vm_num_DESC" | "total_cache_capacity_ASC" | "total_cache_capacity_DESC" | "total_cpu_cores_ASC" | "total_cpu_cores_DESC" | "total_cpu_hz_ASC" | "total_cpu_hz_DESC" | "total_data_capacity_ASC" | "total_data_capacity_DESC" | "total_memory_bytes_ASC" | "total_memory_bytes_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "used_cpu_hz_ASC" | "used_cpu_hz_DESC" | "used_data_space_ASC" | "used_data_space_DESC" | "used_memory_bytes_ASC" | "used_memory_bytes_DESC" | "vm_num_ASC" | "vm_num_DESC" | "vmotion_ip_ASC" | "vmotion_ip_DESC" | "with_faster_ssd_as_cache_ASC" | "with_faster_ssd_as_cache_DESC";
export interface GetHostsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: HostOrderByInput | null;
    skip?: number | null;
    where?: HostWhereInput | null;
}
export interface HostConnection {
    aggregate: {
        count: number;
    };
}
export interface GetHostsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: HostOrderByInput | null;
    skip?: number | null;
    where?: HostWhereInput | null;
}
export interface ImageConnector {
    name: string;
    path: string;
    size: number;
}
export interface GetImagesConnectorRequestBody {
    cluster: ClusterWhereUniqueInput;
}
export interface Ipmi {
    host: {
        name: string;
        id: string;
    };
    id: string;
    ip: string;
    local_id: string;
    username: string;
    valid: boolean;
}
export declare type IpmiOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "ip_ASC" | "ip_DESC" | "local_id_ASC" | "local_id_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "username_ASC" | "username_DESC" | "valid_ASC" | "valid_DESC";
export interface GetIpmisRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: IpmiOrderByInput | null;
    skip?: number | null;
    where?: IpmiWhereInput | null;
}
export declare type StoreConnectionType = "ISCSI" | "NVMe";
export interface IscsiConnection {
    client_port: number;
    cluster: {
        name: string;
        id: string;
    };
    host: {
        name: string;
        id: string;
    };
    id: string;
    initiator_ip: string;
    iscsi_target?: {
        name: string;
        id: string;
    };
    nvmf_subsystem?: {
        name: string;
        id: string;
    };
    type: StoreConnectionType;
}
export declare type IscsiConnectionOrderByInput = "client_port_ASC" | "client_port_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "initiator_ip_ASC" | "initiator_ip_DESC" | "type_ASC" | "type_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface IscsiConnectionWhereInput {
    AND?: IscsiConnectionWhereInput[] | null;
    client_port?: number | null;
    client_port_gt?: number | null;
    client_port_gte?: number | null;
    client_port_in?: number[] | null;
    client_port_lt?: number | null;
    client_port_lte?: number | null;
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
    first?: number | null;
    last?: number | null;
    orderBy?: IscsiConnectionOrderByInput | null;
    skip?: number | null;
    where?: IscsiConnectionWhereInput | null;
}
export interface IscsiConnectionConnection {
    aggregate: {
        count: number;
    };
}
export interface GetIscsiConnectionsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: IscsiConnectionOrderByInput | null;
    skip?: number | null;
    where?: IscsiConnectionWhereInput | null;
}
export interface IscsiLun {
    allowed_initiators: string;
    assigned_size: number;
    bps: number;
    bps_max: number;
    bps_max_length: number;
    bps_rd: number;
    bps_rd_max: number;
    bps_rd_max_length: number;
    bps_wr: number;
    bps_wr_max: number;
    bps_wr_max_length: number;
    consistency_group?: {
        name: string;
        id: string;
    };
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    io_size: number;
    iops: number;
    iops_max: number;
    iops_max_length: number;
    iops_rd: number;
    iops_rd_max: number;
    iops_rd_max_length: number;
    iops_wr: number;
    iops_wr_max: number;
    iops_wr_max_length: number;
    iscsi_target: {
        name: string;
        id: string;
    };
    labels?: {
        id: string;
    }[] | null;
    local_created_at: string;
    local_id: string;
    lun_id: number;
    name: string;
    replica_num: number;
    shared_size: number;
    snapshot_num: number;
    stripe_num: number;
    stripe_size: number;
    thin_provision: boolean;
    unique_size: number;
    zbs_volume_id: string;
}
export declare type IscsiLunOrderByInput = "allowed_initiators_ASC" | "allowed_initiators_DESC" | "assigned_size_ASC" | "assigned_size_DESC" | "bps_ASC" | "bps_DESC" | "bps_max_ASC" | "bps_max_DESC" | "bps_max_length_ASC" | "bps_max_length_DESC" | "bps_rd_ASC" | "bps_rd_DESC" | "bps_rd_max_ASC" | "bps_rd_max_DESC" | "bps_rd_max_length_ASC" | "bps_rd_max_length_DESC" | "bps_wr_ASC" | "bps_wr_DESC" | "bps_wr_max_ASC" | "bps_wr_max_DESC" | "bps_wr_max_length_ASC" | "bps_wr_max_length_DESC" | "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "io_size_ASC" | "io_size_DESC" | "iops_ASC" | "iops_DESC" | "iops_max_ASC" | "iops_max_DESC" | "iops_max_length_ASC" | "iops_max_length_DESC" | "iops_rd_ASC" | "iops_rd_DESC" | "iops_rd_max_ASC" | "iops_rd_max_DESC" | "iops_rd_max_length_ASC" | "iops_rd_max_length_DESC" | "iops_wr_ASC" | "iops_wr_DESC" | "iops_wr_max_ASC" | "iops_wr_max_DESC" | "iops_wr_max_length_ASC" | "iops_wr_max_length_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "lun_id_ASC" | "lun_id_DESC" | "name_ASC" | "name_DESC" | "replica_num_ASC" | "replica_num_DESC" | "shared_size_ASC" | "shared_size_DESC" | "snapshot_num_ASC" | "snapshot_num_DESC" | "stripe_num_ASC" | "stripe_num_DESC" | "stripe_size_ASC" | "stripe_size_DESC" | "thin_provision_ASC" | "thin_provision_DESC" | "unique_size_ASC" | "unique_size_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "zbs_volume_id_ASC" | "zbs_volume_id_DESC";
export interface GetIscsiLunsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: IscsiLunOrderByInput | null;
    skip?: number | null;
    where?: IscsiLunWhereInput | null;
}
export interface IscsiLunConnection {
    aggregate: {
        count: number;
    };
}
export interface GetIscsiLunsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: IscsiLunOrderByInput | null;
    skip?: number | null;
    where?: IscsiLunWhereInput | null;
}
export interface IscsiLunSnapshot {
    consistency_group_snapshot?: {
        name: string;
        id: string;
    };
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    iscsi_lun?: {
        name: string;
        id: string;
    };
    iscsi_target: {
        name: string;
        id: string;
    };
    labels?: {
        id: string;
    }[] | null;
    local_created_at: string;
    local_id: string;
    name: string;
    unique_size: number;
}
export declare type IscsiLunSnapshotOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "unique_size_ASC" | "unique_size_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetIscsiLunSnapshotsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: IscsiLunSnapshotOrderByInput | null;
    skip?: number | null;
    where?: IscsiLunSnapshotWhereInput | null;
}
export interface IscsiLunSnapshotConnection {
    aggregate: {
        count: number;
    };
}
export interface GetIscsiLunSnapshotsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: IscsiLunSnapshotOrderByInput | null;
    skip?: number | null;
    where?: IscsiLunSnapshotWhereInput | null;
}
export interface IscsiTarget {
    bps?: number | null;
    bps_max?: number | null;
    bps_max_length?: number | null;
    bps_rd?: number | null;
    bps_rd_max?: number | null;
    bps_rd_max_length?: number | null;
    bps_wr?: number | null;
    bps_wr_max?: number | null;
    bps_wr_max_length?: number | null;
    chap_enabled: boolean;
    chap_name?: string | null;
    chap_secret?: string | null;
    cluster: {
        name: string;
        id: string;
    };
    description: string;
    entityAsyncStatus?: EntityAsyncStatus | null;
    external_use: boolean;
    id: string;
    initiator_chaps?: {
        initiator_iqn: string;
        chap_secret: string;
        chap_name: string;
    }[] | null;
    internal: boolean;
    io_size?: number | null;
    iops?: number | null;
    iops_max?: number | null;
    iops_max_length?: number | null;
    iops_rd?: number | null;
    iops_rd_max?: number | null;
    iops_rd_max_length?: number | null;
    iops_wr?: number | null;
    iops_wr_max?: number | null;
    iops_wr_max_length?: number | null;
    ip_whitelist: string;
    iqn_name: string;
    iqn_whitelist: string;
    labels?: {
        id: string;
    }[] | null;
    local_id: string;
    luns?: {
        name: string;
        id: string;
    }[] | null;
    name: string;
    replica_num: number;
    stripe_num: number;
    stripe_size: number;
    thin_provision: boolean;
}
export declare type IscsiTargetOrderByInput = "bps_ASC" | "bps_DESC" | "bps_max_ASC" | "bps_max_DESC" | "bps_max_length_ASC" | "bps_max_length_DESC" | "bps_rd_ASC" | "bps_rd_DESC" | "bps_rd_max_ASC" | "bps_rd_max_DESC" | "bps_rd_max_length_ASC" | "bps_rd_max_length_DESC" | "bps_wr_ASC" | "bps_wr_DESC" | "bps_wr_max_ASC" | "bps_wr_max_DESC" | "bps_wr_max_length_ASC" | "bps_wr_max_length_DESC" | "chap_enabled_ASC" | "chap_enabled_DESC" | "chap_name_ASC" | "chap_name_DESC" | "chap_secret_ASC" | "chap_secret_DESC" | "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "external_use_ASC" | "external_use_DESC" | "id_ASC" | "id_DESC" | "initiator_chaps_ASC" | "initiator_chaps_DESC" | "internal_ASC" | "internal_DESC" | "io_size_ASC" | "io_size_DESC" | "iops_ASC" | "iops_DESC" | "iops_max_ASC" | "iops_max_DESC" | "iops_max_length_ASC" | "iops_max_length_DESC" | "iops_rd_ASC" | "iops_rd_DESC" | "iops_rd_max_ASC" | "iops_rd_max_DESC" | "iops_rd_max_length_ASC" | "iops_rd_max_length_DESC" | "iops_wr_ASC" | "iops_wr_DESC" | "iops_wr_max_ASC" | "iops_wr_max_DESC" | "iops_wr_max_length_ASC" | "iops_wr_max_length_DESC" | "ip_whitelist_ASC" | "ip_whitelist_DESC" | "iqn_name_ASC" | "iqn_name_DESC" | "iqn_whitelist_ASC" | "iqn_whitelist_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "replica_num_ASC" | "replica_num_DESC" | "stripe_num_ASC" | "stripe_num_DESC" | "stripe_size_ASC" | "stripe_size_DESC" | "thin_provision_ASC" | "thin_provision_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetIscsiTargetsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: IscsiTargetOrderByInput | null;
    skip?: number | null;
    where?: IscsiTargetWhereInput | null;
}
export interface IscsiTargetConnection {
    aggregate: {
        count: number;
    };
}
export interface GetIscsiTargetsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: IscsiTargetOrderByInput | null;
    skip?: number | null;
    where?: IscsiTargetWhereInput | null;
}
export interface Label {
    cluster_num?: number | null;
    clusters?: {
        name: string;
        id: string;
    }[] | null;
    consistency_group_num?: number | null;
    consistency_group_snapshot_num?: number | null;
    consistency_group_snapshots?: {
        name: string;
        id: string;
    }[] | null;
    consistency_groups?: {
        name: string;
        id: string;
    }[] | null;
    createdAt: string;
    datacenter_num?: number | null;
    datacenters?: {
        name: string;
        id: string;
    }[] | null;
    disk_num?: number | null;
    disks?: {
        name: string;
        id: string;
    }[] | null;
    elf_image_num?: number | null;
    elf_images?: {
        name: string;
        id: string;
    }[] | null;
    host_num?: number | null;
    hosts?: {
        name: string;
        id: string;
    }[] | null;
    id: string;
    iscsi_lun_num?: number | null;
    iscsi_lun_snapshot_num?: number | null;
    iscsi_lun_snapshots?: {
        name: string;
        id: string;
    }[] | null;
    iscsi_luns?: {
        name: string;
        id: string;
    }[] | null;
    iscsi_target_num?: number | null;
    iscsi_targets?: {
        name: string;
        id: string;
    }[] | null;
    key: string;
    namespace_group_num?: number | null;
    namespace_groups?: {
        name: string;
        id: string;
    }[] | null;
    nfs_export_num?: number | null;
    nfs_exports?: {
        name: string;
        id: string;
    }[] | null;
    nfs_inode_num?: number | null;
    nfs_inodes?: {
        name: string;
        id: string;
    }[] | null;
    nic_num?: number | null;
    nics?: {
        name: string;
        id: string;
    }[] | null;
    nvmf_namespace_num?: number | null;
    nvmf_namespace_snapshot_num?: number | null;
    nvmf_namespace_snapshots?: {
        name: string;
        id: string;
    }[] | null;
    nvmf_namespaces?: {
        name: string;
        id: string;
    }[] | null;
    nvmf_subsystem_num?: number | null;
    nvmf_subsystems?: {
        name: string;
        id: string;
    }[] | null;
    system_vlan_num?: number | null;
    total_num?: number | null;
    value?: string | null;
    vds_num?: number | null;
    vdses?: {
        name: string;
        id: string;
    }[] | null;
    vlans?: {
        name: string;
        id: string;
    }[] | null;
    vm_num?: number | null;
    vm_snapshot_num?: number | null;
    vm_snapshots?: {
        name: string;
        id: string;
    }[] | null;
    vm_template_num?: number | null;
    vm_templates?: {
        name: string;
        id: string;
    }[] | null;
    vm_vlan_num?: number | null;
    vm_volume_num?: number | null;
    vm_volumes?: {
        name: string;
        id: string;
    }[] | null;
    vms?: {
        name: string;
        id: string;
    }[] | null;
}
export declare type LabelOrderByInput = "cluster_num_ASC" | "cluster_num_DESC" | "consistency_group_num_ASC" | "consistency_group_num_DESC" | "consistency_group_snapshot_num_ASC" | "consistency_group_snapshot_num_DESC" | "createdAt_ASC" | "createdAt_DESC" | "datacenter_num_ASC" | "datacenter_num_DESC" | "disk_num_ASC" | "disk_num_DESC" | "elf_image_num_ASC" | "elf_image_num_DESC" | "host_num_ASC" | "host_num_DESC" | "id_ASC" | "id_DESC" | "iscsi_lun_num_ASC" | "iscsi_lun_num_DESC" | "iscsi_lun_snapshot_num_ASC" | "iscsi_lun_snapshot_num_DESC" | "iscsi_target_num_ASC" | "iscsi_target_num_DESC" | "key_ASC" | "key_DESC" | "namespace_group_num_ASC" | "namespace_group_num_DESC" | "nfs_export_num_ASC" | "nfs_export_num_DESC" | "nfs_inode_num_ASC" | "nfs_inode_num_DESC" | "nic_num_ASC" | "nic_num_DESC" | "nvmf_namespace_num_ASC" | "nvmf_namespace_num_DESC" | "nvmf_namespace_snapshot_num_ASC" | "nvmf_namespace_snapshot_num_DESC" | "nvmf_subsystem_num_ASC" | "nvmf_subsystem_num_DESC" | "system_vlan_num_ASC" | "system_vlan_num_DESC" | "total_num_ASC" | "total_num_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "value_ASC" | "value_DESC" | "vds_num_ASC" | "vds_num_DESC" | "vm_num_ASC" | "vm_num_DESC" | "vm_snapshot_num_ASC" | "vm_snapshot_num_DESC" | "vm_template_num_ASC" | "vm_template_num_DESC" | "vm_vlan_num_ASC" | "vm_vlan_num_DESC" | "vm_volume_num_ASC" | "vm_volume_num_DESC";
export interface GetLabelsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: LabelOrderByInput | null;
    skip?: number | null;
    where?: LabelWhereInput | null;
}
export interface LabelConnection {
    aggregate: {
        count: number;
    };
}
export interface GetLabelsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: LabelOrderByInput | null;
    skip?: number | null;
    where?: LabelWhereInput | null;
}
export interface License {
    expire_date: string;
    id: string;
    license_serial: string;
    maintenance_end_date?: string | null;
    maintenance_start_date?: string | null;
    max_chunk_num: number;
    max_cluster_num: number;
    sign_date: string;
    software_edition: SoftwareEdition;
    type: LicenseType;
}
export declare type LicenseOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "expire_date_ASC" | "expire_date_DESC" | "id_ASC" | "id_DESC" | "license_serial_ASC" | "license_serial_DESC" | "maintenance_end_date_ASC" | "maintenance_end_date_DESC" | "maintenance_start_date_ASC" | "maintenance_start_date_DESC" | "max_chunk_num_ASC" | "max_chunk_num_DESC" | "max_cluster_num_ASC" | "max_cluster_num_DESC" | "sign_date_ASC" | "sign_date_DESC" | "software_edition_ASC" | "software_edition_DESC" | "type_ASC" | "type_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetLicensesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: LicenseOrderByInput | null;
    skip?: number | null;
    where?: LicenseWhereInput | null;
}
export interface LicenseConnection {
    aggregate: {
        count: number;
    };
}
export interface GetLicensesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: LicenseOrderByInput | null;
    skip?: number | null;
    where?: LicenseWhereInput | null;
}
export declare type LogCollectionStatus = "EXECUTING" | "FAILED" | "STOPPING" | "SUCCESSED";
export interface LogCollection {
    cluster: {
        name: string;
        id: string;
    };
    hosts?: {
        name: string;
        id: string;
    }[] | null;
    id: string;
    local_id: string;
    log_ended_at: string;
    log_started_at: string;
    owner: string;
    path: string;
    progress: number;
    size: number;
    started_at: string;
    status: LogCollectionStatus;
}
export declare type LogCollectionOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "log_ended_at_ASC" | "log_ended_at_DESC" | "log_started_at_ASC" | "log_started_at_DESC" | "owner_ASC" | "owner_DESC" | "path_ASC" | "path_DESC" | "progress_ASC" | "progress_DESC" | "size_ASC" | "size_DESC" | "started_at_ASC" | "started_at_DESC" | "status_ASC" | "status_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
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
    progress?: number | null;
    progress_gt?: number | null;
    progress_gte?: number | null;
    progress_in?: number[] | null;
    progress_lt?: number | null;
    progress_lte?: number | null;
    progress_not?: number | null;
    progress_not_in?: number[] | null;
    size?: number | null;
    size_gt?: number | null;
    size_gte?: number | null;
    size_in?: number[] | null;
    size_lt?: number | null;
    size_lte?: number | null;
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
    first?: number | null;
    last?: number | null;
    orderBy?: LogCollectionOrderByInput | null;
    skip?: number | null;
    where?: LogCollectionWhereInput | null;
}
export interface LogCollectionConnection {
    aggregate: {
        count: number;
    };
}
export interface GetLogCollectionsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: LogCollectionOrderByInput | null;
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
export declare type MigrateTransmitterOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "ip_ASC" | "ip_DESC" | "name_ASC" | "name_DESC" | "password_ASC" | "password_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "username_ASC" | "username_DESC";
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
    first?: number | null;
    last?: number | null;
    orderBy?: MigrateTransmitterOrderByInput | null;
    skip?: number | null;
    where?: MigrateTransmitterWhereInput | null;
}
export interface MigrateTransmitterConnection {
    aggregate: {
        count: number;
    };
}
export interface GetMigrateTransmittersConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: MigrateTransmitterOrderByInput | null;
    skip?: number | null;
    where?: MigrateTransmitterWhereInput | null;
}
export interface NamespaceGroup {
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    labels?: {
        id: string;
    }[] | null;
    local_create_time: string;
    local_id: string;
    name: string;
    namespaces?: {
        name: string;
        id: string;
    }[] | null;
    nvmf_subsystem: {
        name: string;
        id: string;
    };
}
export declare type NamespaceGroupOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "local_create_time_ASC" | "local_create_time_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetNamespaceGroupsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NamespaceGroupOrderByInput | null;
    skip?: number | null;
    where?: NamespaceGroupWhereInput | null;
}
export interface NamespaceGroupConnection {
    aggregate: {
        count: number;
    };
}
export interface GetNamespaceGroupsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NamespaceGroupOrderByInput | null;
    skip?: number | null;
    where?: NamespaceGroupWhereInput | null;
}
export interface NfsExport {
    cluster: {
        name: string;
        id: string;
    };
    description: string;
    entityAsyncStatus?: EntityAsyncStatus | null;
    export_inode_id: string;
    id: string;
    inodes?: {
        name: string;
        id: string;
    }[] | null;
    internal: boolean;
    ip_whitelist: string;
    labels?: {
        id: string;
    }[] | null;
    local_id: string;
    name: string;
    replica_num: number;
    thin_provision: boolean;
}
export declare type NfsExportOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "export_inode_id_ASC" | "export_inode_id_DESC" | "id_ASC" | "id_DESC" | "internal_ASC" | "internal_DESC" | "ip_whitelist_ASC" | "ip_whitelist_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "replica_num_ASC" | "replica_num_DESC" | "thin_provision_ASC" | "thin_provision_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetNfsExportsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NfsExportOrderByInput | null;
    skip?: number | null;
    where?: NfsExportWhereInput | null;
}
export interface NfsExportConnection {
    aggregate: {
        count: number;
    };
}
export interface GetNfsExportsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NfsExportOrderByInput | null;
    skip?: number | null;
    where?: NfsExportWhereInput | null;
}
export interface NfsInode {
    assigned_size: number;
    entityAsyncStatus?: EntityAsyncStatus | null;
    file: boolean;
    id: string;
    labels?: {
        id: string;
    }[] | null;
    local_id: string;
    local_updated_at: string;
    name: string;
    nfs_export: {
        name: string;
        id: string;
    };
    parent_id: string;
    shared_size: number;
    snapshot_num: number;
    unique_size: number;
}
export declare type NfsInodeOrderByInput = "assigned_size_ASC" | "assigned_size_DESC" | "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "file_ASC" | "file_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "local_updated_at_ASC" | "local_updated_at_DESC" | "name_ASC" | "name_DESC" | "parent_id_ASC" | "parent_id_DESC" | "shared_size_ASC" | "shared_size_DESC" | "snapshot_num_ASC" | "snapshot_num_DESC" | "unique_size_ASC" | "unique_size_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetNfsInodesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NfsInodeOrderByInput | null;
    skip?: number | null;
    where?: NfsInodeWhereInput | null;
}
export interface NfsInodeConnection {
    aggregate: {
        count: number;
    };
}
export interface GetNfsInodesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NfsInodeOrderByInput | null;
    skip?: number | null;
    where?: NfsInodeWhereInput | null;
}
export interface Nic {
    driver?: string | null;
    driver_state?: NicDriverState | null;
    gateway_ip?: string | null;
    host: {
        name: string;
        id: string;
    };
    ibdev?: string | null;
    id: string;
    ip_address?: string | null;
    is_sriov?: boolean | null;
    labels?: {
        id: string;
    }[] | null;
    local_id: string;
    mac_address: string;
    max_vf_num?: number | null;
    model?: string | null;
    mtu: number;
    name: string;
    nic_uuid?: string | null;
    physical: boolean;
    rdma_enabled?: boolean | null;
    running: boolean;
    speed?: number | null;
    subnet_mask?: string | null;
    total_vf_num?: number | null;
    type?: NetworkType | null;
    up: boolean;
    used_vf_num?: number | null;
    vds?: {
        name: string;
        id: string;
    };
}
export declare type NicOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "driver_ASC" | "driver_DESC" | "driver_state_ASC" | "driver_state_DESC" | "gateway_ip_ASC" | "gateway_ip_DESC" | "ibdev_ASC" | "ibdev_DESC" | "id_ASC" | "id_DESC" | "ip_address_ASC" | "ip_address_DESC" | "is_sriov_ASC" | "is_sriov_DESC" | "local_id_ASC" | "local_id_DESC" | "mac_address_ASC" | "mac_address_DESC" | "max_vf_num_ASC" | "max_vf_num_DESC" | "model_ASC" | "model_DESC" | "mtu_ASC" | "mtu_DESC" | "name_ASC" | "name_DESC" | "nic_uuid_ASC" | "nic_uuid_DESC" | "physical_ASC" | "physical_DESC" | "rdma_enabled_ASC" | "rdma_enabled_DESC" | "running_ASC" | "running_DESC" | "speed_ASC" | "speed_DESC" | "subnet_mask_ASC" | "subnet_mask_DESC" | "total_vf_num_ASC" | "total_vf_num_DESC" | "type_ASC" | "type_DESC" | "up_ASC" | "up_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "used_vf_num_ASC" | "used_vf_num_DESC";
export interface GetNicsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NicOrderByInput | null;
    skip?: number | null;
    where?: NicWhereInput | null;
}
export interface NicConnection {
    aggregate: {
        count: number;
    };
}
export interface GetNicsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NicOrderByInput | null;
    skip?: number | null;
    where?: NicWhereInput | null;
}
export interface NodeTopo {
    brick_topo?: {
        name: string;
        id: string;
    };
    cluster: {
        name: string;
        id: string;
    };
    cluster_topo?: {
        name: string;
        id: string;
    };
    host: {
        name: string;
        id: string;
    };
    id: string;
    local_id: string;
    name: string;
    position: {
        row?: number | null;
        column?: number | null;
    };
}
export declare type NodeTopoOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "position_ASC" | "position_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetNodeTopoesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NodeTopoOrderByInput | null;
    skip?: number | null;
    where?: NodeTopoWhereInput | null;
}
export interface NodeTopoConnection {
    aggregate: {
        count: number;
    };
}
export interface GetNodeTopoesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NodeTopoOrderByInput | null;
    skip?: number | null;
    where?: NodeTopoWhereInput | null;
}
export interface NvmfNamespace {
    assigned_size: number;
    bps: number;
    bps_max: number;
    bps_max_length: number;
    bps_rd: number;
    bps_rd_max: number;
    bps_rd_max_length: number;
    bps_wr: number;
    bps_wr_max: number;
    bps_wr_max_length: number;
    consistency_group?: {
        name: string;
        id: string;
    };
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    io_size: number;
    iops: number;
    iops_max: number;
    iops_max_length: number;
    iops_rd: number;
    iops_rd_max: number;
    iops_rd_max_length: number;
    iops_wr: number;
    iops_wr_max: number;
    iops_wr_max_length: number;
    is_shared: boolean;
    labels?: {
        id: string;
    }[] | null;
    local_created_at: string;
    local_id: string;
    name: string;
    namespace_group?: {
        name: string;
        id: string;
    };
    namespace_id: number;
    nqn_whitelist: string;
    nvmf_subsystem: {
        name: string;
        id: string;
    };
    replica_num: number;
    shared_size: number;
    snapshot_num: number;
    stripe_num: number;
    stripe_size: number;
    thin_provision: boolean;
    unique_size: number;
    zbs_volume_id: string;
}
export declare type NvmfNamespaceOrderByInput = "assigned_size_ASC" | "assigned_size_DESC" | "bps_ASC" | "bps_DESC" | "bps_max_ASC" | "bps_max_DESC" | "bps_max_length_ASC" | "bps_max_length_DESC" | "bps_rd_ASC" | "bps_rd_DESC" | "bps_rd_max_ASC" | "bps_rd_max_DESC" | "bps_rd_max_length_ASC" | "bps_rd_max_length_DESC" | "bps_wr_ASC" | "bps_wr_DESC" | "bps_wr_max_ASC" | "bps_wr_max_DESC" | "bps_wr_max_length_ASC" | "bps_wr_max_length_DESC" | "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "io_size_ASC" | "io_size_DESC" | "iops_ASC" | "iops_DESC" | "iops_max_ASC" | "iops_max_DESC" | "iops_max_length_ASC" | "iops_max_length_DESC" | "iops_rd_ASC" | "iops_rd_DESC" | "iops_rd_max_ASC" | "iops_rd_max_DESC" | "iops_rd_max_length_ASC" | "iops_rd_max_length_DESC" | "iops_wr_ASC" | "iops_wr_DESC" | "iops_wr_max_ASC" | "iops_wr_max_DESC" | "iops_wr_max_length_ASC" | "iops_wr_max_length_DESC" | "is_shared_ASC" | "is_shared_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "namespace_id_ASC" | "namespace_id_DESC" | "nqn_whitelist_ASC" | "nqn_whitelist_DESC" | "replica_num_ASC" | "replica_num_DESC" | "shared_size_ASC" | "shared_size_DESC" | "snapshot_num_ASC" | "snapshot_num_DESC" | "stripe_num_ASC" | "stripe_num_DESC" | "stripe_size_ASC" | "stripe_size_DESC" | "thin_provision_ASC" | "thin_provision_DESC" | "unique_size_ASC" | "unique_size_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "zbs_volume_id_ASC" | "zbs_volume_id_DESC";
export interface GetNvmfNamespacesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NvmfNamespaceOrderByInput | null;
    skip?: number | null;
    where?: NvmfNamespaceWhereInput | null;
}
export interface NvmfNamespaceConnection {
    aggregate: {
        count: number;
    };
}
export interface GetNvmfNamespacesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NvmfNamespaceOrderByInput | null;
    skip?: number | null;
    where?: NvmfNamespaceWhereInput | null;
}
export interface NvmfNamespaceSnapshot {
    consistency_group_snapshot?: {
        name: string;
        id: string;
    };
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    labels?: {
        id: string;
    }[] | null;
    local_created_at: string;
    local_id: string;
    name: string;
    nvmf_namespace?: {
        name: string;
        id: string;
    };
    nvmf_subsystem: {
        name: string;
        id: string;
    };
    unique_size: number;
}
export declare type NvmfNamespaceSnapshotOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "unique_size_ASC" | "unique_size_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetNvmfNamespaceSnapshotsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NvmfNamespaceSnapshotOrderByInput | null;
    skip?: number | null;
    where?: NvmfNamespaceSnapshotWhereInput | null;
}
export interface NvmfNamespaceSnapshotConnection {
    aggregate: {
        count: number;
    };
}
export interface GetNvmfNamespaceSnapshotsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NvmfNamespaceSnapshotOrderByInput | null;
    skip?: number | null;
    where?: NvmfNamespaceSnapshotWhereInput | null;
}
export interface NvmfSubsystem {
    bps?: number | null;
    bps_max?: number | null;
    bps_max_length?: number | null;
    bps_rd?: number | null;
    bps_rd_max?: number | null;
    bps_rd_max_length?: number | null;
    bps_wr?: number | null;
    bps_wr_max?: number | null;
    bps_wr_max_length?: number | null;
    cluster: {
        name: string;
        id: string;
    };
    description: string;
    entityAsyncStatus?: EntityAsyncStatus | null;
    external_use: boolean;
    id: string;
    internal: boolean;
    io_size?: number | null;
    iops?: number | null;
    iops_max?: number | null;
    iops_max_length?: number | null;
    iops_rd?: number | null;
    iops_rd_max?: number | null;
    iops_rd_max_length?: number | null;
    iops_wr?: number | null;
    iops_wr_max?: number | null;
    iops_wr_max_length?: number | null;
    ip_whitelist: string;
    labels?: {
        id: string;
    }[] | null;
    local_id: string;
    name: string;
    namespace_groups?: {
        name: string;
        id: string;
    }[] | null;
    namespaces?: {
        name: string;
        id: string;
    }[] | null;
    nqn_name: string;
    nqn_whitelist: string;
    policy: NvmfSubsystemPolicyType;
    replica_num: number;
    stripe_num: number;
    stripe_size: number;
    thin_provision: boolean;
}
export declare type NvmfSubsystemOrderByInput = "bps_ASC" | "bps_DESC" | "bps_max_ASC" | "bps_max_DESC" | "bps_max_length_ASC" | "bps_max_length_DESC" | "bps_rd_ASC" | "bps_rd_DESC" | "bps_rd_max_ASC" | "bps_rd_max_DESC" | "bps_rd_max_length_ASC" | "bps_rd_max_length_DESC" | "bps_wr_ASC" | "bps_wr_DESC" | "bps_wr_max_ASC" | "bps_wr_max_DESC" | "bps_wr_max_length_ASC" | "bps_wr_max_length_DESC" | "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "external_use_ASC" | "external_use_DESC" | "id_ASC" | "id_DESC" | "internal_ASC" | "internal_DESC" | "io_size_ASC" | "io_size_DESC" | "iops_ASC" | "iops_DESC" | "iops_max_ASC" | "iops_max_DESC" | "iops_max_length_ASC" | "iops_max_length_DESC" | "iops_rd_ASC" | "iops_rd_DESC" | "iops_rd_max_ASC" | "iops_rd_max_DESC" | "iops_rd_max_length_ASC" | "iops_rd_max_length_DESC" | "iops_wr_ASC" | "iops_wr_DESC" | "iops_wr_max_ASC" | "iops_wr_max_DESC" | "iops_wr_max_length_ASC" | "iops_wr_max_length_DESC" | "ip_whitelist_ASC" | "ip_whitelist_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "nqn_name_ASC" | "nqn_name_DESC" | "nqn_whitelist_ASC" | "nqn_whitelist_DESC" | "policy_ASC" | "policy_DESC" | "replica_num_ASC" | "replica_num_DESC" | "stripe_num_ASC" | "stripe_num_DESC" | "stripe_size_ASC" | "stripe_size_DESC" | "thin_provision_ASC" | "thin_provision_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetNvmfSubsystemsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NvmfSubsystemOrderByInput | null;
    skip?: number | null;
    where?: NvmfSubsystemWhereInput | null;
}
export interface NvmfSubsystemConnection {
    aggregate: {
        count: number;
    };
}
export interface GetNvmfSubsystemsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: NvmfSubsystemOrderByInput | null;
    skip?: number | null;
    where?: NvmfSubsystemWhereInput | null;
}
export interface Organization {
    datacenters?: {
        name: string;
        id: string;
    }[] | null;
    id: string;
    name: string;
}
export declare type OrganizationOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetOrganizationsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: OrganizationOrderByInput | null;
    skip?: number | null;
    where?: OrganizationWhereInput | null;
}
export interface OrganizationConnection {
    aggregate: {
        count: number;
    };
}
export interface GetOrganizationsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: OrganizationOrderByInput | null;
    skip?: number | null;
    where?: OrganizationWhereInput | null;
}
export interface PmemDimm {
    capacity: number;
    device_locator: string;
    disk?: {
        name: string;
        id: string;
    };
    health_status?: DiskHealthStatus | null;
    host: {
        name: string;
        id: string;
    };
    id: string;
    local_id?: string | null;
    name: string;
    numa_node: number;
    part_number: string;
    remaining_life_percent?: number | null;
    version: string;
}
export declare type PmemDimmOrderByInput = "capacity_ASC" | "capacity_DESC" | "createdAt_ASC" | "createdAt_DESC" | "device_locator_ASC" | "device_locator_DESC" | "health_status_ASC" | "health_status_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "numa_node_ASC" | "numa_node_DESC" | "part_number_ASC" | "part_number_DESC" | "remaining_life_percent_ASC" | "remaining_life_percent_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "version_ASC" | "version_DESC";
export interface GetPmemDimmsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: PmemDimmOrderByInput | null;
    skip?: number | null;
    where?: PmemDimmWhereInput | null;
}
export interface PmemDimmConnection {
    aggregate: {
        count: number;
    };
}
export interface GetPmemDimmsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: PmemDimmOrderByInput | null;
    skip?: number | null;
    where?: PmemDimmWhereInput | null;
}
export interface RackTopo {
    brick_topoes?: {
        name: string;
        id: string;
    }[] | null;
    cluster: {
        name: string;
        id: string;
    };
    height: number;
    id: string;
    local_id: string;
    name: string;
    zone_topo: {
        id: string;
    };
}
export declare type RackTopoOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "height_ASC" | "height_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetRackTopoesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: RackTopoOrderByInput | null;
    skip?: number | null;
    where?: RackTopoWhereInput | null;
}
export interface RackTopoConnection {
    aggregate: {
        count: number;
    };
}
export interface GetRackTopoesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: RackTopoOrderByInput | null;
    skip?: number | null;
    where?: RackTopoWhereInput | null;
}
export declare type TaskStatus = "EXECUTING" | "FAILED" | "PENDING" | "SUCCESSED";
export interface ReportTask {
    createdAt: string;
    id: string;
    internal: boolean;
    name: string;
    plan_id?: string | null;
    status: TaskStatus;
    template: {
        name: string;
        id: string;
    };
}
export declare type ReportTaskOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "internal_ASC" | "internal_DESC" | "name_ASC" | "name_DESC" | "plan_id_ASC" | "plan_id_DESC" | "status_ASC" | "status_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
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
    task_num?: number | null;
    task_num_gt?: number | null;
    task_num_gte?: number | null;
    task_num_in?: number[] | null;
    task_num_lt?: number | null;
    task_num_lte?: number | null;
    task_num_not?: number | null;
    task_num_not_in?: number[] | null;
    tasks_every?: ReportTaskWhereInput | null;
    tasks_none?: ReportTaskWhereInput | null;
    tasks_some?: ReportTaskWhereInput | null;
}
export interface GetReportTasksRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ReportTaskOrderByInput | null;
    skip?: number | null;
    where?: ReportTaskWhereInput | null;
}
export interface ReportTaskConnection {
    aggregate: {
        count: number;
    };
}
export interface GetReportTasksConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ReportTaskOrderByInput | null;
    skip?: number | null;
    where?: ReportTaskWhereInput | null;
}
export declare type ReportResourceInputEnum = "ALERT" | "ALL" | "CLUSTER" | "DATA_CENTER" | "DISK" | "ELF_IMAGE" | "ENTITY_FILTERS" | "GLOBAL_ALERT_RULE" | "HOST" | "TASK" | "VDS" | "VLAN" | "VM" | "VM_TEMPLATE";
export interface ReportTemplate {
    createdAt: string;
    description: string;
    execute_plan: {
        id: string;
    }[];
    id: string;
    name: string;
    preset?: string | null;
    resource_meta: {
        type: ReportResourceInputEnum;
        name: string;
        filter: object;
        fields: string[];
    }[];
    task_num: number;
    tasks?: {
        name: string;
        id: string;
    }[] | null;
}
export declare type ReportTemplateOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "execute_plan_ASC" | "execute_plan_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "preset_ASC" | "preset_DESC" | "resource_meta_ASC" | "resource_meta_DESC" | "task_num_ASC" | "task_num_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetReportTemplatesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ReportTemplateOrderByInput | null;
    skip?: number | null;
    where?: ReportTemplateWhereInput | null;
}
export interface ReportTemplateConnection {
    aggregate: {
        count: number;
    };
}
export interface GetReportTemplatesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ReportTemplateOrderByInput | null;
    skip?: number | null;
    where?: ReportTemplateWhereInput | null;
}
export declare type ProtectSnapshotStatus = "PROTECT_SNAPSHOT_STATUS_CREATED" | "PROTECT_SNAPSHOT_STATUS_CREATING" | "PROTECT_SNAPSHOT_STATUS_DELETED" | "PROTECT_SNAPSHOT_STATUS_FAILED";
export interface SnapshotGroup {
    cluster: {
        name: string;
        id: string;
    };
    deleted: boolean;
    entityAsyncStatus?: EntityAsyncStatus | null;
    estimated_recycling_time?: string | null;
    id: string;
    internal?: boolean | null;
    keep: boolean;
    local_created_at: string;
    local_id: string;
    logical_size_bytes: number;
    name: string;
    object_num: number;
    snapshotPlanTask: {
        id: string;
    };
    vm_info: {
        vm_snapshot_status: ProtectSnapshotStatus;
        vm_name: string;
        vm_id: string;
        disks: {
            disk_snapshot_status: ProtectSnapshotStatus;
            disk_id: string;
        }[];
    }[];
    vm_snapshots?: {
        name: string;
        id: string;
    }[] | null;
}
export declare type SnapshotGroupOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "deleted_ASC" | "deleted_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "estimated_recycling_time_ASC" | "estimated_recycling_time_DESC" | "id_ASC" | "id_DESC" | "internal_ASC" | "internal_DESC" | "keep_ASC" | "keep_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "logical_size_bytes_ASC" | "logical_size_bytes_DESC" | "name_ASC" | "name_DESC" | "object_num_ASC" | "object_num_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "vm_info_ASC" | "vm_info_DESC";
export interface GetSnapshotGroupsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: SnapshotGroupOrderByInput | null;
    skip?: number | null;
    where?: SnapshotGroupWhereInput | null;
}
export interface SnapshotGroupConnection {
    aggregate: {
        count: number;
    };
}
export interface GetSnapshotGroupsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: SnapshotGroupOrderByInput | null;
    skip?: number | null;
    where?: SnapshotGroupWhereInput | null;
}
export interface SnapshotPlan {
    auto_delete_num: number;
    auto_execute_num: number;
    cluster: {
        name: string;
        id: string;
    };
    description: string;
    end_time?: string | null;
    entityAsyncStatus?: EntityAsyncStatus | null;
    exec_h_m?: object | null;
    execute_intervals: number[];
    execute_plan_type: SnapshotPlanExecuteType;
    execution_tasks?: {
        id: string;
    }[] | null;
    healthy: boolean;
    id: string;
    last_execute_end_time?: string | null;
    last_execute_status: SnapshotPlanExecuteStatus;
    last_execute_time?: string | null;
    local_id: string;
    logical_size_bytes: number;
    manual_delete_num: number;
    manual_execute_num: number;
    mirror: boolean;
    name: string;
    next_execute_time?: string | null;
    object_num: number;
    physical_size_bytes: number;
    remain_snapshot_num: number;
    snapshot_group_num: number;
    start_time: string;
    status: SnapshotPlanStatus;
    vms?: {
        name: string;
        id: string;
    }[] | null;
}
export declare type SnapshotPlanOrderByInput = "auto_delete_num_ASC" | "auto_delete_num_DESC" | "auto_execute_num_ASC" | "auto_execute_num_DESC" | "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "end_time_ASC" | "end_time_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "exec_h_m_ASC" | "exec_h_m_DESC" | "execute_plan_type_ASC" | "execute_plan_type_DESC" | "healthy_ASC" | "healthy_DESC" | "id_ASC" | "id_DESC" | "last_execute_end_time_ASC" | "last_execute_end_time_DESC" | "last_execute_status_ASC" | "last_execute_status_DESC" | "last_execute_time_ASC" | "last_execute_time_DESC" | "local_id_ASC" | "local_id_DESC" | "logical_size_bytes_ASC" | "logical_size_bytes_DESC" | "manual_delete_num_ASC" | "manual_delete_num_DESC" | "manual_execute_num_ASC" | "manual_execute_num_DESC" | "mirror_ASC" | "mirror_DESC" | "name_ASC" | "name_DESC" | "next_execute_time_ASC" | "next_execute_time_DESC" | "object_num_ASC" | "object_num_DESC" | "physical_size_bytes_ASC" | "physical_size_bytes_DESC" | "remain_snapshot_num_ASC" | "remain_snapshot_num_DESC" | "snapshot_group_num_ASC" | "snapshot_group_num_DESC" | "start_time_ASC" | "start_time_DESC" | "status_ASC" | "status_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetSnapshotPlansRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: SnapshotPlanOrderByInput | null;
    skip?: number | null;
    where?: SnapshotPlanWhereInput | null;
}
export interface SnapshotPlanConnection {
    aggregate: {
        count: number;
    };
}
export interface GetSnapshotPlansConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: SnapshotPlanOrderByInput | null;
    skip?: number | null;
    where?: SnapshotPlanWhereInput | null;
}
export interface SnapshotPlanTask {
    cluster: {
        name: string;
        id: string;
    };
    end_time?: string | null;
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    internal?: boolean | null;
    local_id: string;
    snapshotGroup?: {
        name: string;
        id: string;
    };
    snapshotPlan: {
        name: string;
        id: string;
    };
    start_time: string;
    status: SnapshotPlanExecuteStatus;
    type: SnapshotPlanTaskType;
}
export declare type SnapshotPlanTaskOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "end_time_ASC" | "end_time_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "internal_ASC" | "internal_DESC" | "local_id_ASC" | "local_id_DESC" | "start_time_ASC" | "start_time_DESC" | "status_ASC" | "status_DESC" | "type_ASC" | "type_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetSnapshotPlanTasksRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: SnapshotPlanTaskOrderByInput | null;
    skip?: number | null;
    where?: SnapshotPlanTaskWhereInput | null;
}
export interface SnapshotPlanTaskConnection {
    aggregate: {
        count: number;
    };
}
export interface GetSnapshotPlanTasksConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: SnapshotPlanTaskOrderByInput | null;
    skip?: number | null;
    where?: SnapshotPlanTaskWhereInput | null;
}
export declare type SnmpAuthProtocol = "MD5" | "SHA";
export declare type SnmpPrivacyProtocol = "AES" | "DES";
export declare type SnmpProtocol = "TCP" | "UDP";
export declare type SnmpVersion = "V2C" | "V3";
export interface SnmpTransport {
    auth_pass_phrase?: string | null;
    auth_protocol?: SnmpAuthProtocol | null;
    cluster: {
        name: string;
        id: string;
    };
    community?: string | null;
    disabled: boolean;
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    local_id: string;
    name: string;
    port: number;
    privacy_pass_phrase?: string | null;
    privacy_protocol?: SnmpPrivacyProtocol | null;
    protocol: SnmpProtocol;
    username?: string | null;
    version: SnmpVersion;
}
export declare type SnmpTransportOrderByInput = "auth_pass_phrase_ASC" | "auth_pass_phrase_DESC" | "auth_protocol_ASC" | "auth_protocol_DESC" | "community_ASC" | "community_DESC" | "createdAt_ASC" | "createdAt_DESC" | "disabled_ASC" | "disabled_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "port_ASC" | "port_DESC" | "privacy_pass_phrase_ASC" | "privacy_pass_phrase_DESC" | "privacy_protocol_ASC" | "privacy_protocol_DESC" | "protocol_ASC" | "protocol_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "username_ASC" | "username_DESC" | "version_ASC" | "version_DESC";
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
    port?: number | null;
    port_gt?: number | null;
    port_gte?: number | null;
    port_in?: number[] | null;
    port_lt?: number | null;
    port_lte?: number | null;
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
    first?: number | null;
    last?: number | null;
    orderBy?: SnmpTransportOrderByInput | null;
    skip?: number | null;
    where?: SnmpTransportWhereInput | null;
}
export interface SnmpTransportConnection {
    aggregate: {
        count: number;
    };
}
export interface GetSnmpTransportsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: SnmpTransportOrderByInput | null;
    skip?: number | null;
    where?: SnmpTransportWhereInput | null;
}
export declare type SnmpLanguageCode = "EN_US" | "ZH_CN";
export interface SnmpTrapReceiver {
    auth_pass_phrase?: string | null;
    auth_protocol?: SnmpAuthProtocol | null;
    cluster: {
        name: string;
        id: string;
    };
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
    port: number;
    privacy_pass_phrase?: string | null;
    privacy_protocol?: SnmpPrivacyProtocol | null;
    protocol: SnmpProtocol;
    username?: string | null;
    version: SnmpVersion;
}
export declare type SnmpTrapReceiverOrderByInput = "auth_pass_phrase_ASC" | "auth_pass_phrase_DESC" | "auth_protocol_ASC" | "auth_protocol_DESC" | "community_ASC" | "community_DESC" | "createdAt_ASC" | "createdAt_DESC" | "disabled_ASC" | "disabled_DESC" | "engine_id_ASC" | "engine_id_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "host_ASC" | "host_DESC" | "id_ASC" | "id_DESC" | "inform_ASC" | "inform_DESC" | "language_code_ASC" | "language_code_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "port_ASC" | "port_DESC" | "privacy_pass_phrase_ASC" | "privacy_pass_phrase_DESC" | "privacy_protocol_ASC" | "privacy_protocol_DESC" | "protocol_ASC" | "protocol_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "username_ASC" | "username_DESC" | "version_ASC" | "version_DESC";
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
    port?: number | null;
    port_gt?: number | null;
    port_gte?: number | null;
    port_in?: number[] | null;
    port_lt?: number | null;
    port_lte?: number | null;
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
    first?: number | null;
    last?: number | null;
    orderBy?: SnmpTrapReceiverOrderByInput | null;
    skip?: number | null;
    where?: SnmpTrapReceiverWhereInput | null;
}
export interface SnmpTrapReceiverConnection {
    aggregate: {
        count: number;
    };
}
export interface GetSnmpTrapReceiversConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: SnmpTrapReceiverOrderByInput | null;
    skip?: number | null;
    where?: SnmpTrapReceiverWhereInput | null;
}
export interface StoragePolicyConector {
    name: string;
    replica_num: number;
    thin_provision: boolean;
    uuid: string;
}
export interface GetStoragePoliciesConnectorRequestBody {
    cluster: ClusterWhereUniqueInput;
}
export interface SvtImage {
    cluster: {
        name: string;
        id: string;
    };
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    local_created_at: string;
    local_id: string;
    name: string;
    path: string;
    size: number;
    version: number;
    vm_disks?: {
        id: string;
    }[] | null;
}
export declare type SvtImageOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "path_ASC" | "path_DESC" | "size_ASC" | "size_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "version_ASC" | "version_DESC";
export interface GetSvtImagesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: SvtImageOrderByInput | null;
    skip?: number | null;
    where?: SvtImageWhereInput | null;
}
export interface SvtImageConnection {
    aggregate: {
        count: number;
    };
}
export interface GetSvtImagesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: SvtImageOrderByInput | null;
    skip?: number | null;
    where?: SvtImageWhereInput | null;
}
export declare type UserAuditLogStatus = "FAILED" | "SUCCESSED";
export interface SystemAuditLog {
    action: string;
    cluster?: {
        name: string;
        id: string;
    };
    finished_at?: string | null;
    id: string;
    local_created_at?: string | null;
    local_id: string;
    message: string;
    resource_id?: string | null;
    status?: UserAuditLogStatus | null;
}
export declare type SystemAuditLogOrderByInput = "action_ASC" | "action_DESC" | "createdAt_ASC" | "createdAt_DESC" | "finished_at_ASC" | "finished_at_DESC" | "id_ASC" | "id_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "message_ASC" | "message_DESC" | "resource_id_ASC" | "resource_id_DESC" | "status_ASC" | "status_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
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
    first?: number | null;
    last?: number | null;
    orderBy?: SystemAuditLogOrderByInput | null;
    skip?: number | null;
    where?: SystemAuditLogWhereInput | null;
}
export interface SystemAuditLogConnection {
    aggregate: {
        count: number;
    };
}
export interface GetSystemAuditLogsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: SystemAuditLogOrderByInput | null;
    skip?: number | null;
    where?: SystemAuditLogWhereInput | null;
}
export declare type StepUnit = "BIT" | "BYTE" | "COUNT" | "PERCENT";
export interface Task {
    args: object;
    cluster?: {
        name: string;
        id: string;
    };
    description: string;
    error_code?: string | null;
    error_message?: string | null;
    finished_at?: string | null;
    id: string;
    internal: boolean;
    local_created_at: string;
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
    user?: {
        name: string;
        id: string;
    };
}
export declare type TaskOrderByInput = "args_ASC" | "args_DESC" | "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "error_code_ASC" | "error_code_DESC" | "error_message_ASC" | "error_message_DESC" | "finished_at_ASC" | "finished_at_DESC" | "id_ASC" | "id_DESC" | "internal_ASC" | "internal_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "progress_ASC" | "progress_DESC" | "resource_id_ASC" | "resource_id_DESC" | "resource_mutation_ASC" | "resource_mutation_DESC" | "resource_rollback_error_ASC" | "resource_rollback_error_DESC" | "resource_rollbacked_ASC" | "resource_rollbacked_DESC" | "resource_type_ASC" | "resource_type_DESC" | "snapshot_ASC" | "snapshot_DESC" | "started_at_ASC" | "started_at_DESC" | "status_ASC" | "status_DESC" | "steps_ASC" | "steps_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
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
    progress?: number | null;
    progress_gt?: number | null;
    progress_gte?: number | null;
    progress_in?: number[] | null;
    progress_lt?: number | null;
    progress_lte?: number | null;
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
export declare type UserRole = "ADMIN" | "READ_ONLY" | "ROOT";
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
export declare type UserRolePlatform = "MANAGEMENT" | "SELF_SERVICE";
export declare type UserRolePreset = "ADMIN" | "AUDITOR" | "READ_ONLY" | "ROOT" | "USER_ADMIN";
export declare type UserSource = "LDAP" | "LOCAL";
export interface GetTasksRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: TaskOrderByInput | null;
    skip?: number | null;
    where?: TaskWhereInput | null;
}
export interface TaskConnection {
    aggregate: {
        count: number;
    };
}
export interface GetTasksConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: TaskOrderByInput | null;
    skip?: number | null;
    where?: TaskWhereInput | null;
}
export declare type UploadResourceType = "CLUSTER_IMAGE" | "CLUSTER_IMAGE_META" | "ELF_IMAGE" | "MONITOR_IMAGE" | "SVT_IMAGE";
export declare type UploadTaskStatus = "FAILED" | "INITIALIZING" | "PAUSED" | "SUCCESSED" | "UPLOADING";
export interface UploadTask {
    args: object;
    chunk_size: number;
    current_chunk: number;
    finished_at?: string | null;
    id: string;
    resource_type: UploadResourceType;
    size: number;
    started_at?: string | null;
    status: UploadTaskStatus;
    updatedAt: string;
}
export declare type UploadTaskOrderByInput = "args_ASC" | "args_DESC" | "chunk_size_ASC" | "chunk_size_DESC" | "createdAt_ASC" | "createdAt_DESC" | "current_chunk_ASC" | "current_chunk_DESC" | "finished_at_ASC" | "finished_at_DESC" | "id_ASC" | "id_DESC" | "resource_type_ASC" | "resource_type_DESC" | "size_ASC" | "size_DESC" | "started_at_ASC" | "started_at_DESC" | "status_ASC" | "status_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface UploadTaskWhereInput {
    AND?: UploadTaskWhereInput[] | null;
    chunk_size?: number | null;
    chunk_size_gt?: number | null;
    chunk_size_gte?: number | null;
    chunk_size_in?: number[] | null;
    chunk_size_lt?: number | null;
    chunk_size_lte?: number | null;
    chunk_size_not?: number | null;
    chunk_size_not_in?: number[] | null;
    current_chunk?: number | null;
    current_chunk_gt?: number | null;
    current_chunk_gte?: number | null;
    current_chunk_in?: number[] | null;
    current_chunk_lt?: number | null;
    current_chunk_lte?: number | null;
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
    size?: number | null;
    size_gt?: number | null;
    size_gte?: number | null;
    size_in?: number[] | null;
    size_lt?: number | null;
    size_lte?: number | null;
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
    first?: number | null;
    last?: number | null;
    orderBy?: UploadTaskOrderByInput | null;
    skip?: number | null;
    where?: UploadTaskWhereInput | null;
}
export interface UploadTaskConnection {
    aggregate: {
        count: number;
    };
}
export interface GetUploadTasksConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: UploadTaskOrderByInput | null;
    skip?: number | null;
    where?: UploadTaskWhereInput | null;
}
export interface UsbDevice {
    binded: boolean;
    description: string;
    host: {
        name: string;
        id: string;
    };
    id: string;
    local_created_at: string;
    local_id: string;
    manufacturer: string;
    name: string;
    size: number;
    status: UsbDeviceStatus;
    usb_type: string;
    vm?: {
        name: string;
        id: string;
    };
}
export declare type UsbDeviceOrderByInput = "binded_ASC" | "binded_DESC" | "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "id_ASC" | "id_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "manufacturer_ASC" | "manufacturer_DESC" | "name_ASC" | "name_DESC" | "size_ASC" | "size_DESC" | "status_ASC" | "status_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "usb_type_ASC" | "usb_type_DESC";
export interface GetUsbDevicesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: UsbDeviceOrderByInput | null;
    skip?: number | null;
    where?: UsbDeviceWhereInput | null;
}
export interface UsbDeviceConnection {
    aggregate: {
        count: number;
    };
}
export interface GetUsbDevicesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: UsbDeviceOrderByInput | null;
    skip?: number | null;
    where?: UsbDeviceWhereInput | null;
}
export interface UserAuditLog {
    action: string;
    cluster?: {
        name: string;
        id: string;
    };
    createdAt: string;
    finished_at?: string | null;
    id: string;
    ip_address: string;
    message: string;
    resource_id?: string | null;
    resource_type?: string | null;
    status?: UserAuditLogStatus | null;
    user?: {
        name: string;
        id: string;
    };
}
export declare type UserAuditLogOrderByInput = "action_ASC" | "action_DESC" | "createdAt_ASC" | "createdAt_DESC" | "finished_at_ASC" | "finished_at_DESC" | "id_ASC" | "id_DESC" | "ip_address_ASC" | "ip_address_DESC" | "message_ASC" | "message_DESC" | "resource_id_ASC" | "resource_id_DESC" | "resource_type_ASC" | "resource_type_DESC" | "status_ASC" | "status_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
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
    first?: number | null;
    last?: number | null;
    orderBy?: UserAuditLogOrderByInput | null;
    skip?: number | null;
    where?: UserAuditLogWhereInput | null;
}
export interface UserAuditLogConnection {
    aggregate: {
        count: number;
    };
}
export interface GetUserAuditLogsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: UserAuditLogOrderByInput | null;
    skip?: number | null;
    where?: UserAuditLogWhereInput | null;
}
export interface UserRoleNext {
    actions: string[];
    id: string;
    name: string;
    platform: UserRolePlatform;
    preset?: UserRolePreset | null;
    users?: {
        name: string;
        id: string;
    }[] | null;
}
export declare type UserRoleNextOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "platform_ASC" | "platform_DESC" | "preset_ASC" | "preset_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetUserRoleNextsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: UserRoleNextOrderByInput | null;
    skip?: number | null;
    where?: UserRoleNextWhereInput | null;
}
export interface UserRoleNextConnection {
    aggregate: {
        count: number;
    };
}
export interface GetUserRoleNextsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: UserRoleNextOrderByInput | null;
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
    roles?: {
        name: string;
        id: string;
    }[] | null;
    source: UserSource;
    username: string;
}
export declare type UserOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "email_address_ASC" | "email_address_DESC" | "id_ASC" | "id_DESC" | "ldap_dn_ASC" | "ldap_dn_DESC" | "mobile_phone_ASC" | "mobile_phone_DESC" | "name_ASC" | "name_DESC" | "password_ASC" | "password_DESC" | "role_ASC" | "role_DESC" | "source_ASC" | "source_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "username_ASC" | "username_DESC";
export interface GetUsersRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: UserOrderByInput | null;
    skip?: number | null;
    where?: UserWhereInput | null;
}
export interface UserConnection {
    aggregate: {
        count: number;
    };
}
export interface GetUsersConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: UserOrderByInput | null;
    skip?: number | null;
    where?: UserWhereInput | null;
}
export interface VcenterAccount {
    cluster?: {
        name: string;
        id: string;
    };
    id: string;
    ip: string;
    is_valid: boolean;
    local_id: string;
    password: string;
    port: number;
    username: string;
}
export declare type VcenterAccountOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "ip_ASC" | "ip_DESC" | "is_valid_ASC" | "is_valid_DESC" | "local_id_ASC" | "local_id_DESC" | "password_ASC" | "password_DESC" | "port_ASC" | "port_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "username_ASC" | "username_DESC";
export interface GetVcenterAccountsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VcenterAccountOrderByInput | null;
    skip?: number | null;
    where?: VcenterAccountWhereInput | null;
}
export interface VcenterAccountConnection {
    aggregate: {
        count: number;
    };
}
export interface GetVcenterAccountsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VcenterAccountOrderByInput | null;
    skip?: number | null;
    where?: VcenterAccountWhereInput | null;
}
export interface Vds {
    bond_mode: string;
    cluster: {
        name: string;
        id: string;
    };
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    internal: boolean;
    labels?: {
        id: string;
    }[] | null;
    local_id: string;
    name: string;
    nics?: {
        name: string;
        id: string;
    }[] | null;
    ovsbr_name: string;
    type: NetworkType;
    vlans?: {
        name: string;
        id: string;
    }[] | null;
    vlans_num: number;
}
export declare type VdsOrderByInput = "bond_mode_ASC" | "bond_mode_DESC" | "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "internal_ASC" | "internal_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "ovsbr_name_ASC" | "ovsbr_name_DESC" | "type_ASC" | "type_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "vlans_num_ASC" | "vlans_num_DESC";
export interface GetVdsesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VdsOrderByInput | null;
    skip?: number | null;
    where?: VdsWhereInput | null;
}
export interface VdsConnection {
    aggregate: {
        count: number;
    };
}
export interface GetVdsesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VdsOrderByInput | null;
    skip?: number | null;
    where?: VdsWhereInput | null;
}
export interface View {
    cluster: {
        name: string;
        id: string;
    };
    entityAsyncStatus?: EntityAsyncStatus | null;
    graphs?: {
        id: string;
    }[] | null;
    id: string;
    local_id: string;
    name: string;
    time_span: number;
    time_unit: TimeUnit;
}
export declare type ViewOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "time_span_ASC" | "time_span_DESC" | "time_unit_ASC" | "time_unit_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetViewsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ViewOrderByInput | null;
    skip?: number | null;
    where?: ViewWhereInput | null;
}
export interface ViewConnection {
    aggregate: {
        count: number;
    };
}
export interface GetViewsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ViewOrderByInput | null;
    skip?: number | null;
    where?: ViewWhereInput | null;
}
export interface Vlan {
    entityAsyncStatus?: EntityAsyncStatus | null;
    gateway_ip?: string | null;
    gateway_subnetmask?: string | null;
    id: string;
    labels?: {
        id: string;
    }[] | null;
    local_id: string;
    name: string;
    subnetmask?: string | null;
    type: NetworkType;
    vds: {
        name: string;
        id: string;
    };
    vlan_id: number;
    vm_nics?: {
        id: string;
    }[] | null;
}
export declare type VlanOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "gateway_ip_ASC" | "gateway_ip_DESC" | "gateway_subnetmask_ASC" | "gateway_subnetmask_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "subnetmask_ASC" | "subnetmask_DESC" | "type_ASC" | "type_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "vlan_id_ASC" | "vlan_id_DESC";
export interface GetVlansRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VlanOrderByInput | null;
    skip?: number | null;
    where?: VlanWhereInput | null;
}
export interface VlanConnection {
    aggregate: {
        count: number;
    };
}
export interface GetVlansConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VlanOrderByInput | null;
    skip?: number | null;
    where?: VlanWhereInput | null;
}
export interface VmDisk {
    boot: number;
    bus: Bus;
    cloud_init_image_name?: string | null;
    cloud_init_image_path?: string | null;
    device?: string | null;
    disabled?: boolean | null;
    elf_image?: {
        name: string;
        id: string;
    };
    id: string;
    key?: number | null;
    max_bandwidth?: number | null;
    max_bandwidth_policy?: VmDiskIoRestrictType | null;
    max_iops?: number | null;
    max_iops_policy?: VmDiskIoRestrictType | null;
    serial?: string | null;
    svt_image?: {
        name: string;
        id: string;
    };
    type: VmDiskType;
    unsafe_image_path?: string | null;
    unsafe_image_uuid?: string | null;
    unsafe_provision?: string | null;
    vm: {
        name: string;
        id: string;
    };
    vm_volume?: {
        name: string;
        id: string;
    };
}
export declare type VmDiskOrderByInput = "boot_ASC" | "boot_DESC" | "bus_ASC" | "bus_DESC" | "cloud_init_image_name_ASC" | "cloud_init_image_name_DESC" | "cloud_init_image_path_ASC" | "cloud_init_image_path_DESC" | "createdAt_ASC" | "createdAt_DESC" | "device_ASC" | "device_DESC" | "disabled_ASC" | "disabled_DESC" | "id_ASC" | "id_DESC" | "key_ASC" | "key_DESC" | "max_bandwidth_ASC" | "max_bandwidth_DESC" | "max_bandwidth_policy_ASC" | "max_bandwidth_policy_DESC" | "max_iops_ASC" | "max_iops_DESC" | "max_iops_policy_ASC" | "max_iops_policy_DESC" | "serial_ASC" | "serial_DESC" | "type_ASC" | "type_DESC" | "unsafe_image_path_ASC" | "unsafe_image_path_DESC" | "unsafe_image_uuid_ASC" | "unsafe_image_uuid_DESC" | "unsafe_provision_ASC" | "unsafe_provision_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetVmDisksRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmDiskOrderByInput | null;
    skip?: number | null;
    where?: VmDiskWhereInput | null;
}
export interface VmDiskConnection {
    aggregate: {
        count: number;
    };
}
export interface GetVmDisksConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmDiskOrderByInput | null;
    skip?: number | null;
    where?: VmDiskWhereInput | null;
}
export interface VmEntityFilterResult {
    entityFilter: {
        name: string;
        id: string;
    };
    id: string;
    result: number[];
    vm: {
        name: string;
        id: string;
    };
}
export declare type VmEntityFilterResultOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetVmEntityFilterResultsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmEntityFilterResultOrderByInput | null;
    skip?: number | null;
    where?: VmEntityFilterResultWhereInput | null;
}
export interface VmEntityFilterResultConnection {
    aggregate: {
        count: number;
    };
}
export interface GetVmEntityFilterResultsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmEntityFilterResultOrderByInput | null;
    skip?: number | null;
    where?: VmEntityFilterResultWhereInput | null;
}
export interface VmFolder {
    cluster: {
        name: string;
        id: string;
    };
    id: string;
    local_id?: string | null;
    name: string;
    vm_num?: number | null;
    vms?: {
        name: string;
        id: string;
    }[] | null;
}
export declare type VmFolderOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "vm_num_ASC" | "vm_num_DESC";
export interface GetVmFoldersRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmFolderOrderByInput | null;
    skip?: number | null;
    where?: VmFolderWhereInput | null;
}
export interface VmFolderConnection {
    aggregate: {
        count: number;
    };
}
export interface GetVmFoldersConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmFolderOrderByInput | null;
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
    nic?: {
        name: string;
        id: string;
    };
    order?: number | null;
    subnet_mask?: string | null;
    vlan?: {
        name: string;
        id: string;
    };
    vm: {
        name: string;
        id: string;
    };
}
export declare type VmNicOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "enabled_ASC" | "enabled_DESC" | "gateway_ASC" | "gateway_DESC" | "id_ASC" | "id_DESC" | "interface_id_ASC" | "interface_id_DESC" | "ip_address_ASC" | "ip_address_DESC" | "local_id_ASC" | "local_id_DESC" | "mac_address_ASC" | "mac_address_DESC" | "mirror_ASC" | "mirror_DESC" | "model_ASC" | "model_DESC" | "order_ASC" | "order_DESC" | "subnet_mask_ASC" | "subnet_mask_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetVmNicsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmNicOrderByInput | null;
    skip?: number | null;
    where?: VmNicWhereInput | null;
}
export interface VmNicConnection {
    aggregate: {
        count: number;
    };
}
export interface GetVmNicsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmNicOrderByInput | null;
    skip?: number | null;
    where?: VmNicWhereInput | null;
}
export interface VmPlacementGroup {
    cluster: {
        name: string;
        id: string;
    };
    description: string;
    enabled: boolean;
    entityAsyncStatus?: EntityAsyncStatus | null;
    id: string;
    local_created_at: string;
    local_id: string;
    local_updated_at: string;
    name: string;
    vm_host_must_enabled: boolean;
    vm_host_must_host_uuids?: {
        name: string;
        id: string;
    }[] | null;
    vm_host_must_policy: boolean;
    vm_host_prefer_enabled: boolean;
    vm_host_prefer_host_uuids?: {
        name: string;
        id: string;
    }[] | null;
    vm_host_prefer_policy: boolean;
    vm_vm_policy: VmVmPolicy;
    vm_vm_policy_enabled: boolean;
    vms?: {
        name: string;
        id: string;
    }[] | null;
}
export declare type VmPlacementGroupOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "enabled_ASC" | "enabled_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "id_ASC" | "id_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "local_updated_at_ASC" | "local_updated_at_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "vm_host_must_enabled_ASC" | "vm_host_must_enabled_DESC" | "vm_host_must_policy_ASC" | "vm_host_must_policy_DESC" | "vm_host_prefer_enabled_ASC" | "vm_host_prefer_enabled_DESC" | "vm_host_prefer_policy_ASC" | "vm_host_prefer_policy_DESC" | "vm_vm_policy_ASC" | "vm_vm_policy_DESC" | "vm_vm_policy_enabled_ASC" | "vm_vm_policy_enabled_DESC";
export interface GetVmPlacementGroupsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmPlacementGroupOrderByInput | null;
    skip?: number | null;
    where?: VmPlacementGroupWhereInput | null;
}
export interface VmPlacementGroupConnection {
    aggregate: {
        count: number;
    };
}
export interface GetVmPlacementGroupsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmPlacementGroupOrderByInput | null;
    skip?: number | null;
    where?: VmPlacementGroupWhereInput | null;
}
export interface Vm {
    clock_offset: VmClockOffset;
    cluster?: {
        name: string;
        id: string;
    };
    cpu: {
        sockets: number;
        cores: number;
    };
    cpu_model: string;
    cpu_usage?: number | null;
    deleted_at?: string | null;
    description: string;
    dns_servers?: string | null;
    entity_filter_results?: {
        id: string;
    }[] | null;
    entityAsyncStatus?: EntityAsyncStatus | null;
    firmware: VmFirmware;
    folder?: {
        name: string;
        id: string;
    };
    guest_cpu_model?: string | null;
    guest_os_type?: VmGuestsOperationSystem | null;
    guest_size_usage?: number | null;
    guest_used_size?: number | null;
    ha: boolean;
    host?: {
        name: string;
        id: string;
    };
    hostname?: string | null;
    id: string;
    in_recycle_bin: boolean;
    internal: boolean;
    io_policy?: VmDiskIoPolicy | null;
    ips: string;
    kernel_info?: string | null;
    labels?: {
        id: string;
    }[] | null;
    last_shutdown_time?: string | null;
    local_created_at?: string | null;
    local_id: string;
    logical_size_bytes?: number | null;
    max_bandwidth?: number | null;
    max_bandwidth_policy?: VmDiskIoRestrictType | null;
    max_iops?: number | null;
    max_iops_policy?: VmDiskIoRestrictType | null;
    memory: number;
    memory_usage?: number | null;
    name: string;
    nested_virtualization: boolean;
    node_ip: string;
    original_name?: string | null;
    os?: string | null;
    out_uninstall_usb: string[];
    protected: boolean;
    provisioned_size?: number | null;
    size?: number | null;
    snapshot_plan?: {
        name: string;
        id: string;
    };
    snapshots?: {
        name: string;
        id: string;
    }[] | null;
    status: VmStatus;
    unique_size?: number | null;
    usb_devices?: {
        name: string;
        id: string;
    }[] | null;
    vcpu: number;
    video_type?: VmVideoType | null;
    vm_disks?: {
        id: string;
    }[] | null;
    vm_nics?: {
        id: string;
    }[] | null;
    vm_placement_group?: {
        name: string;
        id: string;
    }[] | null;
    vm_tools_status: VmToolsStatus;
    vm_tools_version?: string | null;
    win_opt: boolean;
}
export declare type VmOrderByInput = "clock_offset_ASC" | "clock_offset_DESC" | "cpu_ASC" | "cpu_DESC" | "cpu_model_ASC" | "cpu_model_DESC" | "cpu_usage_ASC" | "cpu_usage_DESC" | "createdAt_ASC" | "createdAt_DESC" | "deleted_at_ASC" | "deleted_at_DESC" | "description_ASC" | "description_DESC" | "dns_servers_ASC" | "dns_servers_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "firmware_ASC" | "firmware_DESC" | "guest_cpu_model_ASC" | "guest_cpu_model_DESC" | "guest_os_type_ASC" | "guest_os_type_DESC" | "guest_size_usage_ASC" | "guest_size_usage_DESC" | "guest_used_size_ASC" | "guest_used_size_DESC" | "ha_ASC" | "ha_DESC" | "hostname_ASC" | "hostname_DESC" | "id_ASC" | "id_DESC" | "in_recycle_bin_ASC" | "in_recycle_bin_DESC" | "internal_ASC" | "internal_DESC" | "io_policy_ASC" | "io_policy_DESC" | "ips_ASC" | "ips_DESC" | "kernel_info_ASC" | "kernel_info_DESC" | "last_shutdown_time_ASC" | "last_shutdown_time_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "logical_size_bytes_ASC" | "logical_size_bytes_DESC" | "max_bandwidth_ASC" | "max_bandwidth_DESC" | "max_bandwidth_policy_ASC" | "max_bandwidth_policy_DESC" | "max_iops_ASC" | "max_iops_DESC" | "max_iops_policy_ASC" | "max_iops_policy_DESC" | "memory_ASC" | "memory_DESC" | "memory_usage_ASC" | "memory_usage_DESC" | "name_ASC" | "name_DESC" | "nested_virtualization_ASC" | "nested_virtualization_DESC" | "node_ip_ASC" | "node_ip_DESC" | "original_name_ASC" | "original_name_DESC" | "os_ASC" | "os_DESC" | "protected_ASC" | "protected_DESC" | "provisioned_size_ASC" | "provisioned_size_DESC" | "size_ASC" | "size_DESC" | "status_ASC" | "status_DESC" | "unique_size_ASC" | "unique_size_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "vcpu_ASC" | "vcpu_DESC" | "video_type_ASC" | "video_type_DESC" | "vm_tools_status_ASC" | "vm_tools_status_DESC" | "vm_tools_version_ASC" | "vm_tools_version_DESC" | "win_opt_ASC" | "win_opt_DESC";
export interface GetVmsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmOrderByInput | null;
    skip?: number | null;
    where?: VmWhereInput | null;
}
export interface VmConnection {
    aggregate: {
        count: number;
    };
}
export interface GetVmsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmOrderByInput | null;
    skip?: number | null;
    where?: VmWhereInput | null;
}
export interface VmSnapshot {
    clock_offset: VmClockOffset;
    cluster: {
        name: string;
        id: string;
    };
    consistent_type: ConsistentType;
    cpu: {
        sockets: number;
        cores: number;
    };
    cpu_model: string;
    description: string;
    entityAsyncStatus?: EntityAsyncStatus | null;
    firmware: VmFirmware;
    ha: boolean;
    id: string;
    io_policy?: VmDiskIoPolicy | null;
    labels?: {
        id: string;
    }[] | null;
    local_created_at?: string | null;
    local_id: string;
    max_bandwidth?: number | null;
    max_bandwidth_policy?: VmDiskIoRestrictType | null;
    max_iops?: number | null;
    max_iops_policy?: VmDiskIoRestrictType | null;
    memory: number;
    name: string;
    size: number;
    snapshot_group?: {
        name: string;
        id: string;
    };
    vcpu: number;
    vm?: {
        name: string;
        id: string;
    };
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
        vlan: {
            vlan_local_id: string;
            vlan_id: number;
            vds_ovs: string;
            name: string;
        };
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
export declare type VmSnapshotOrderByInput = "clock_offset_ASC" | "clock_offset_DESC" | "consistent_type_ASC" | "consistent_type_DESC" | "cpu_ASC" | "cpu_DESC" | "cpu_model_ASC" | "cpu_model_DESC" | "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "firmware_ASC" | "firmware_DESC" | "ha_ASC" | "ha_DESC" | "id_ASC" | "id_DESC" | "io_policy_ASC" | "io_policy_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "max_bandwidth_ASC" | "max_bandwidth_DESC" | "max_bandwidth_policy_ASC" | "max_bandwidth_policy_DESC" | "max_iops_ASC" | "max_iops_DESC" | "max_iops_policy_ASC" | "max_iops_policy_DESC" | "memory_ASC" | "memory_DESC" | "name_ASC" | "name_DESC" | "size_ASC" | "size_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "vcpu_ASC" | "vcpu_DESC" | "vm_disks_ASC" | "vm_disks_DESC" | "vm_nics_ASC" | "vm_nics_DESC" | "win_opt_ASC" | "win_opt_DESC";
export interface GetVmSnapshotsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmSnapshotOrderByInput | null;
    skip?: number | null;
    where?: VmSnapshotWhereInput | null;
}
export interface VmSnapshotConnection {
    aggregate: {
        count: number;
    };
}
export interface GetVmSnapshotsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmSnapshotOrderByInput | null;
    skip?: number | null;
    where?: VmSnapshotWhereInput | null;
}
export interface VmTemplate {
    clock_offset: VmClockOffset;
    cloud_init_supported: boolean;
    cluster: {
        name: string;
        id: string;
    };
    cpu: {
        sockets: number;
        cores: number;
    };
    cpu_model: string;
    description: string;
    entityAsyncStatus?: EntityAsyncStatus | null;
    firmware: VmFirmware;
    ha: boolean;
    id: string;
    io_policy?: VmDiskIoPolicy | null;
    labels?: {
        id: string;
    }[] | null;
    local_created_at?: string | null;
    local_id: string;
    max_bandwidth?: number | null;
    max_bandwidth_policy?: VmDiskIoRestrictType | null;
    max_iops?: number | null;
    max_iops_policy?: VmDiskIoRestrictType | null;
    memory: number;
    name: string;
    size: number;
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
        vlan: {
            vlan_local_id: string;
            vlan_id: number;
            vds_ovs: string;
            name: string;
        };
        model?: VmNicModel | null;
        mirror?: boolean | null;
        mac_address?: string | null;
        ip_address?: string | null;
        index: number;
        enabled?: boolean | null;
    }[];
    win_opt: boolean;
}
export declare type VmTemplateOrderByInput = "clock_offset_ASC" | "clock_offset_DESC" | "cloud_init_supported_ASC" | "cloud_init_supported_DESC" | "cpu_ASC" | "cpu_DESC" | "cpu_model_ASC" | "cpu_model_DESC" | "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "entityAsyncStatus_ASC" | "entityAsyncStatus_DESC" | "firmware_ASC" | "firmware_DESC" | "ha_ASC" | "ha_DESC" | "id_ASC" | "id_DESC" | "io_policy_ASC" | "io_policy_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "max_bandwidth_ASC" | "max_bandwidth_DESC" | "max_bandwidth_policy_ASC" | "max_bandwidth_policy_DESC" | "max_iops_ASC" | "max_iops_DESC" | "max_iops_policy_ASC" | "max_iops_policy_DESC" | "memory_ASC" | "memory_DESC" | "name_ASC" | "name_DESC" | "size_ASC" | "size_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "vcpu_ASC" | "vcpu_DESC" | "video_type_ASC" | "video_type_DESC" | "vm_disks_ASC" | "vm_disks_DESC" | "vm_nics_ASC" | "vm_nics_DESC" | "win_opt_ASC" | "win_opt_DESC";
export interface GetVmTemplatesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmTemplateOrderByInput | null;
    skip?: number | null;
    where?: VmTemplateWhereInput | null;
}
export interface VmTemplateConnection {
    aggregate: {
        count: number;
    };
}
export interface GetVmTemplatesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmTemplateOrderByInput | null;
    skip?: number | null;
    where?: VmTemplateWhereInput | null;
}
export interface VmVolume {
    cluster: {
        name: string;
        id: string;
    };
    description?: string | null;
    elf_storage_policy: VmVolumeElfStoragePolicyType;
    guest_size_usage?: number | null;
    guest_used_size?: number | null;
    id: string;
    labels?: {
        id: string;
    }[] | null;
    local_created_at: string;
    local_id: string;
    lun?: {
        name: string;
        id: string;
    };
    mounting: boolean;
    name: string;
    path: string;
    sharing: boolean;
    size: number;
    unique_size?: number | null;
    vm_disks?: {
        id: string;
    }[] | null;
}
export declare type VmVolumeOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "elf_storage_policy_ASC" | "elf_storage_policy_DESC" | "guest_size_usage_ASC" | "guest_size_usage_DESC" | "guest_used_size_ASC" | "guest_used_size_DESC" | "id_ASC" | "id_DESC" | "local_created_at_ASC" | "local_created_at_DESC" | "local_id_ASC" | "local_id_DESC" | "mounting_ASC" | "mounting_DESC" | "name_ASC" | "name_DESC" | "path_ASC" | "path_DESC" | "sharing_ASC" | "sharing_DESC" | "size_ASC" | "size_DESC" | "unique_size_ASC" | "unique_size_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetVmVolumesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmVolumeOrderByInput | null;
    skip?: number | null;
    where?: VmVolumeWhereInput | null;
}
export interface VmVolumeConnection {
    aggregate: {
        count: number;
    };
}
export interface GetVmVolumesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VmVolumeOrderByInput | null;
    skip?: number | null;
    where?: VmVolumeWhereInput | null;
}
export interface VsphereEsxiAccount {
    host: {
        name: string;
        id: string;
    };
    id: string;
    ip: string;
    is_valid: boolean;
    local_id: string;
    password: string;
    port: number;
    username: string;
}
export declare type VsphereEsxiAccountOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "ip_ASC" | "ip_DESC" | "is_valid_ASC" | "is_valid_DESC" | "local_id_ASC" | "local_id_DESC" | "password_ASC" | "password_DESC" | "port_ASC" | "port_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "username_ASC" | "username_DESC";
export interface GetVsphereEsxiAccountsRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VsphereEsxiAccountOrderByInput | null;
    skip?: number | null;
    where?: VsphereEsxiAccountWhereInput | null;
}
export interface VsphereEsxiAccountConnection {
    aggregate: {
        count: number;
    };
}
export interface GetVsphereEsxiAccountsConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: VsphereEsxiAccountOrderByInput | null;
    skip?: number | null;
    where?: VsphereEsxiAccountWhereInput | null;
}
export interface Witness {
    cluster: {
        name: string;
        id: string;
    };
    cpu_hz_per_core: number;
    data_ip: string;
    id: string;
    local_id?: string | null;
    name: string;
    system_data_capacity: number;
    system_used_data_space: number;
    total_cpu_cores: number;
    total_cpu_hz: number;
    total_memory_bytes: number;
}
export declare type WitnessOrderByInput = "cpu_hz_per_core_ASC" | "cpu_hz_per_core_DESC" | "createdAt_ASC" | "createdAt_DESC" | "data_ip_ASC" | "data_ip_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "name_ASC" | "name_DESC" | "system_data_capacity_ASC" | "system_data_capacity_DESC" | "system_used_data_space_ASC" | "system_used_data_space_DESC" | "total_cpu_cores_ASC" | "total_cpu_cores_DESC" | "total_cpu_hz_ASC" | "total_cpu_hz_DESC" | "total_memory_bytes_ASC" | "total_memory_bytes_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetWitnessesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: WitnessOrderByInput | null;
    skip?: number | null;
    where?: WitnessWhereInput | null;
}
export interface WitnessConnection {
    aggregate: {
        count: number;
    };
}
export interface GetWitnessesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: WitnessOrderByInput | null;
    skip?: number | null;
    where?: WitnessWhereInput | null;
}
export interface Zone {
    cluster: {
        name: string;
        id: string;
    };
    datacenter: {
        name: string;
        id: string;
    };
    failure_data_space?: number | null;
    host_num?: number | null;
    hosts?: {
        name: string;
        id: string;
    }[] | null;
    id: string;
    is_preferred: boolean;
    local_id?: string | null;
    provisioned_cpu_cores?: number | null;
    provisioned_cpu_cores_for_active_vm?: number | null;
    provisioned_data_space?: number | null;
    provisioned_memory_bytes?: number | null;
    running_vm_num?: number | null;
    stopped_vm_num?: number | null;
    suspended_vm_num?: number | null;
    total_cache_capacity?: number | null;
    total_cpu_cores?: number | null;
    total_cpu_hz?: number | null;
    total_data_capacity?: number | null;
    total_memory_bytes?: number | null;
    used_data_space?: number | null;
    valid_data_space?: number | null;
    vm_num?: number | null;
}
export declare type ZoneOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "failure_data_space_ASC" | "failure_data_space_DESC" | "host_num_ASC" | "host_num_DESC" | "id_ASC" | "id_DESC" | "is_preferred_ASC" | "is_preferred_DESC" | "local_id_ASC" | "local_id_DESC" | "provisioned_cpu_cores_ASC" | "provisioned_cpu_cores_DESC" | "provisioned_cpu_cores_for_active_vm_ASC" | "provisioned_cpu_cores_for_active_vm_DESC" | "provisioned_data_space_ASC" | "provisioned_data_space_DESC" | "provisioned_memory_bytes_ASC" | "provisioned_memory_bytes_DESC" | "running_vm_num_ASC" | "running_vm_num_DESC" | "stopped_vm_num_ASC" | "stopped_vm_num_DESC" | "suspended_vm_num_ASC" | "suspended_vm_num_DESC" | "total_cache_capacity_ASC" | "total_cache_capacity_DESC" | "total_cpu_cores_ASC" | "total_cpu_cores_DESC" | "total_cpu_hz_ASC" | "total_cpu_hz_DESC" | "total_data_capacity_ASC" | "total_data_capacity_DESC" | "total_memory_bytes_ASC" | "total_memory_bytes_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "used_data_space_ASC" | "used_data_space_DESC" | "valid_data_space_ASC" | "valid_data_space_DESC" | "vm_num_ASC" | "vm_num_DESC";
export interface GetZonesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ZoneOrderByInput | null;
    skip?: number | null;
    where?: ZoneWhereInput | null;
}
export interface ZoneConnection {
    aggregate: {
        count: number;
    };
}
export interface GetZonesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ZoneOrderByInput | null;
    skip?: number | null;
    where?: ZoneWhereInput | null;
}
export interface ZoneTopo {
    cluster: {
        name: string;
        id: string;
    };
    cluster_topo: {
        name: string;
        id: string;
    };
    id: string;
    local_id: string;
    rack_topoes?: {
        name: string;
        id: string;
    }[] | null;
}
export declare type ZoneTopoOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "local_id_ASC" | "local_id_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export interface GetZoneTopoesRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ZoneTopoOrderByInput | null;
    skip?: number | null;
    where?: ZoneTopoWhereInput | null;
}
export interface ZoneTopoConnection {
    aggregate: {
        count: number;
    };
}
export interface GetZoneTopoesConnectionRequestBody {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    orderBy?: ZoneTopoOrderByInput | null;
    skip?: number | null;
    where?: ZoneTopoWhereInput | null;
}
export interface WithTaskGlobalAlertRule {
    task_id?: string | null;
    data: GlobalAlertRule;
}
export interface AlertRuleThresholds {
    value: number;
    severity: SeverityEnum;
}
export interface GlobalAlertRuleUpdationParams {
    data: {
        thresholds?: AlertRuleThresholds[];
        disabled?: boolean;
    };
    where: GlobalAlertRuleWhereInput;
}
export interface CustomizeAlertRuleUpdationParams {
    data: {
        thresholds?: AlertRuleThresholds[];
        disabled?: boolean;
        clusters: ClusterWhereInput;
    };
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
    tag_position_in_brick?: {
        tag: string;
        row: number;
        column: number;
    }[] | null;
    node_topoes?: NodeTopoWhereInput;
    rack_topo_id?: string;
    capacity?: {
        row?: number | null;
        column?: number | null;
    };
    cluster_id: string;
    height: number;
    name: string;
    position: number;
}
export interface BrickTopoUpdationParams {
    data: {
        tag_position_in_brick?: {
            tag: string;
            row: number;
            column: number;
        }[] | null;
        node_topoes?: NodeTopoWhereInput;
        capacity?: {
            row?: number | null;
            column?: number | null;
        };
        height?: number;
        name?: string;
        position?: number;
    };
    where: BrickTopoWhereInput;
}
export interface BrickTopoMoveParams {
    data: {
        rack_topo_id?: string;
        position: number;
    };
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
    data: {
        license: string;
    };
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
    data: {
        remain_volume_snapshot: boolean;
    };
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
    data: {
        remain_volume_snapshot?: boolean;
    };
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
    data: {
        clusters?: ClusterWhereInput;
        name?: string;
    };
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
    data: {
        function: DiskFunction;
    };
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
    threshold: number;
    quantile: number;
    op: FilterRuleOpEnum;
    metric: FilterRuleMetricEnum;
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
export declare type MaybeDiskFunction = DiskFunction | null;
export declare type MaybeDiskType = DiskType | null;
export interface HostBatchCreateDiskInput {
    type?: MaybeDiskType;
    function?: MaybeDiskFunction;
    drive: string;
}
export declare type HostBatchCreateIfaceFunction = "ACCESS" | "MANAGEMENT" | "STORAGE" | "VMWARE_ACCESS";
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
    data: {
        ipmi?: HostBatchCreateIpmiInput;
        scvm_name?: string;
        name?: string;
    };
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
    bps_wr_max_length?: number;
    bps_wr_max?: number;
    bps_rd_max_length?: number;
    bps_rd_max?: number;
    bps_max_length?: number;
    bps_max?: number;
    iops_wr_max_length?: number;
    iops_wr_max?: number;
    iops_rd_max_length?: number;
    iops_rd_max?: number;
    iops_max_length?: number;
    iops_max?: number;
    bps_wr?: number;
    bps_rd?: number;
    bps?: number;
    iops_wr?: number;
    iops_rd?: number;
    iops?: number;
    allowed_initiators?: string;
}
export declare type IscsiLunCreationParams = {
    lun_id?: number;
    assigned_size: number;
    replica_num: number;
    iscsi_target_id: string;
    name: string;
} & IscsiLunCommonParams;
export interface IscsiLunUpdationParams {
    data: {
        assigned_size?: number;
        name?: string;
    } & IscsiLunCommonParams;
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
    data: {
        remove_snapshot: boolean;
    };
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
    bps_wr_max_length?: number;
    bps_wr_max?: number;
    bps_rd_max_length?: number;
    bps_rd_max?: number;
    bps_max_length?: number;
    bps_max?: number;
    iops_wr_max_length?: number;
    iops_wr_max?: number;
    iops_rd_max_length?: number;
    iops_rd_max?: number;
    iops_max_length?: number;
    iops_max?: number;
    bps_wr?: number;
    bps_rd?: number;
    bps?: number;
    iops_wr?: number;
    iops_rd?: number;
    iops?: number;
    initiator_chaps?: {
        chap_secret: string;
        chap_name: string;
        initiator_iqn: string;
    }[];
    chap_secret?: string;
    chap_name?: string;
    chap_enabled?: boolean;
    description?: string;
    iqn_whitelist?: string;
    ip_whitelist?: string;
}
export declare type IscsiTargetCreationParams = {
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
    data: {
        description?: string;
        name?: string;
    };
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
    data: {
        value?: string;
        key?: string;
    };
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
export declare type RemoveLabelsFromResourcesParams = AddLabelsToResourcesParams;
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
    data: {
        license: string;
    };
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
    data: {
        name?: string;
    };
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
    replica_num: number;
    name: string;
}
export interface NfsExportUpdationParams {
    data?: {
        ip_whitelist?: string;
        name?: string;
    };
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
    data: {
        total_vf_num?: number;
        mtu?: number;
    };
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
export declare type MaybeScalarsAtInt = number | null;
export interface Position {
    row?: MaybeScalarsAtInt;
    column?: MaybeScalarsAtInt;
    __typename?: "position";
}
export declare type NodeTopoUpdationParams = {
    data: {
        position: Position;
        brick_topo_id: string;
    } | {
        cluster_topo_id: string;
    } | ({
        position: Position;
        brick_topo_id: string;
    } & {
        cluster_topo_id: string;
    });
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
    bps_wr_max_length?: number;
    bps_wr_max?: number;
    bps_rd_max_length?: number;
    bps_rd_max?: number;
    bps_max_length?: number;
    bps_max?: number;
    iops_wr_max_length?: number;
    iops_wr_max?: number;
    iops_rd_max_length?: number;
    iops_rd_max?: number;
    iops_max_length?: number;
    iops_max?: number;
    bps_wr?: number;
    bps_rd?: number;
    bps?: number;
    iops_wr?: number;
    iops_rd?: number;
    iops?: number;
    nqn_whitelist?: string;
}
export declare type NvmfNamespaceCreationParams = {
    namespace_id?: number;
    group_id?: string;
    is_shared: boolean;
    assigned_size: number;
    replica_num: number;
    nvmf_subsystem_id: string;
    name: string;
} & NvmfNamespaceCommonParams;
export interface NvmfNamespaceUpdationParams {
    data: {
        assigned_size?: number;
        name?: string;
    } & NvmfNamespaceCommonParams;
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
    data: {
        remove_snapshot: boolean;
    };
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
    bps_wr_max_length?: number;
    bps_wr_max?: number;
    bps_rd_max_length?: number;
    bps_rd_max?: number;
    bps_max_length?: number;
    bps_max?: number;
    iops_wr_max_length?: number;
    iops_wr_max?: number;
    iops_rd_max_length?: number;
    iops_rd_max?: number;
    iops_max_length?: number;
    iops_max?: number;
    bps_wr?: number;
    bps_rd?: number;
    bps?: number;
    iops_wr?: number;
    iops_rd?: number;
    iops?: number;
    description?: string;
    nqn_whitelist?: string;
    ip_whitelist?: string;
}
export declare type NvmfSubsystemCreationParams = {
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
    data: {
        name?: string;
    };
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
    retain: number;
    enaled: boolean;
}
export interface WithTaskClusterSettings {
    task_id?: string | null;
    data: ClusterSettings;
}
export interface ClusterRecycleBinCreationParams {
    data: {
        retain: number;
        enaled: boolean;
    };
    where: ClusterWhereInput;
}
export interface ClusterRecycleBinUpdationParams {
    data: {
        retain: number;
        enaled: boolean;
    };
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
    resource_meta: {
        type: ReportResourceInputEnum;
        name: string;
        filter: object;
        fields: string[];
    }[];
    execute_plan: {
        start_at?: string;
        retain: number;
        period: string;
        enabled?: boolean;
    }[];
    description?: string;
    name: string;
}
export interface ReportTemplateUpdationParams {
    data: {
        resource_meta?: {
            type: ReportResourceInputEnum;
            name: string;
            filter: object;
            fields: string[];
        }[];
        execute_plan?: {
            start_at?: string;
            retain: number;
            period: string;
            enabled?: boolean;
        }[];
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
    data: {
        actions?: string[];
        name?: string;
    };
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
    clone: {
        from_source_vm_id: string;
        to_cloned_vm_name: string;
    }[];
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
    data: {
        task_name: string;
    };
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
    data: {
        vm_id: string;
    };
    where: UsbDeviceWhereInput;
}
export interface UsbDeviceUnmountParams {
    where: UsbDeviceWhereInput;
}
export interface WithTaskTokenString {
    task_id?: string | null;
    data: {
        token: string;
    };
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
export declare type VdsCreationWithMigrateVlanParams = VdsCreationParams & {
    vlan: {
        extra_ip: {
            management_ip: string;
            host_id: string;
        }[];
        subnetmask: string;
        gateway_subnetmask?: string;
        gateway_ip?: string;
        vlan_id: number;
    };
};
export declare type VdsCreationWithMAccessVlanParams = VdsCreationParams & {
    vlan: {
        extra_ip: {
            management_ip: string;
            host_id: string;
        }[];
        subnetmask: string;
        gateway_subnetmask?: string;
        gateway_ip?: string;
        vlan_id: number;
    };
};
export interface VdsUpdationParams {
    data: {
        nicIds?: string[];
        bond_mode?: string;
        name?: string;
    };
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
    time_span: number;
    cluster_id: string;
    name: string;
}
export interface ViewUpdationParams {
    data?: {
        time_unit?: TimeUnit;
        time_span?: number;
        name?: string;
    };
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
    vlan_id: number;
    name: string;
}
export interface VmVlanUpdationParams {
    data: {
        vlan_id?: number;
        name?: string;
    };
    where: VlanWhereInput;
}
export interface ManagementVlanUpdationParams {
    data: {
        extra_ip?: {
            management_ip: string;
            host_id: string;
        }[];
        subnetmask?: string;
        gateway_ip?: string;
        vlan_id?: number;
    };
    where: VlanWhereInput;
}
export interface MigrationVlanUpdationParams {
    data?: {
        extra_ip?: {
            management_ip: string;
            host_id: string;
        }[];
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
    data: {
        name: string;
    };
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
    data: {
        consistent_type?: ConsistentType;
        name: string;
        vm_id: string;
    }[];
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
    data?: {
        cloud_init_supported?: boolean;
        description?: string;
        name?: string;
    };
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
export declare type MountNewCreateDisksParams = {
    max_bandwidth_policy?: VmDiskIoRestrictType;
    max_bandwidth?: number;
    max_iops_policy?: VmDiskIoRestrictType;
    max_iops?: number;
    vm_volume: {
        elf_storage_policy: VmVolumeElfStoragePolicyType;
        path?: string;
        size: number;
        name: string;
    };
    index?: number;
    key?: number;
    bus: Bus;
    boot: number;
}[];
export declare type MountDisksParams = {
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
export declare type VmCdRomParams = {
    elf_image_id?: string;
    index: number;
    key?: number;
    boot: number;
}[];
export interface VmDiskParams {
    mount_cd_roms?: VmCdRomParams;
    mount_disks?: MountDisksParams;
    mount_new_create_disks?: MountNewCreateDisksParams;
}
export declare type VmNicParams = {
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
    max_bandwidth?: number;
    max_iops_policy?: VmDiskIoRestrictType;
    max_iops?: number;
    io_policy?: VmDiskIoPolicy;
    vcpu: number;
    status: VmStatus;
    firmware: VmFirmware;
    ha: boolean;
    vm_nics: VmNicParams;
    vm_disks: VmDiskParams;
    memory: number;
    cpu_cores: number;
    cpu_sockets: number;
    guest_os_type?: VmGuestsOperationSystem;
    folder_id?: string;
    description?: string;
    name: string;
    host_id?: string;
    cluster_id: string;
}
export declare type CloudInitNetworkTypeEnum = "IPV4" | "IPV4_DHCP";
export interface VmCreateVmFromTemplateParams {
    cloud_init?: {
        user_data?: string;
        public_keys?: string[];
        hostname?: string;
        networks?: {
            routes?: {
                network: string;
                netmask: string;
                gateway: string;
            }[];
            type: CloudInitNetworkTypeEnum;
            nic_index: number;
            netmask?: string;
            ip_address?: string;
        }[];
        nameservers?: string[];
        default_user_password?: string;
    };
    is_full_copy: boolean;
    template_id: string;
    max_bandwidth_policy?: VmDiskIoRestrictType;
    max_bandwidth?: number;
    max_iops_policy?: VmDiskIoRestrictType;
    max_iops?: number;
    io_policy?: VmDiskIoPolicy;
    vcpu?: number;
    status?: VmStatus;
    firmware?: VmFirmware;
    ha?: boolean;
    vm_nics?: VmNicParams;
    disk_operate?: {
        remove_disks?: {
            disk_index: number[];
        };
        modify_disks?: {
            vm_volume_id?: string;
            bus?: Bus;
            disk_index: number;
        }[];
        new_disks?: VmDiskParams;
    };
    memory?: number;
    cpu_cores?: number;
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
    max_bandwidth?: number;
    max_iops_policy?: VmDiskIoRestrictType;
    max_iops?: number;
    io_policy?: VmDiskIoPolicy;
    vcpu?: number;
    status?: VmStatus;
    firmware?: VmFirmware;
    ha?: boolean;
    vm_nics?: VmNicParams;
    vm_disks?: VmDiskParams;
    memory?: number;
    cpu_cores?: number;
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
    max_bandwidth?: number;
    max_iops_policy?: VmDiskIoRestrictType;
    max_iops?: number;
    io_policy?: VmDiskIoPolicy;
    vcpu?: number;
    status?: VmStatus;
    firmware?: VmFirmware;
    ha?: boolean;
    vm_nics?: VmNicParams;
    vm_disks?: VmDiskParams;
    memory?: number;
    cpu_cores?: number;
    cpu_sockets?: number;
    guest_os_type?: VmGuestsOperationSystem;
    folder_id?: string;
    description?: string;
    name: string;
    host_id?: string;
    cluster_id: string;
}
export interface VmRollbackParams {
    data: {
        snapshot_id: string;
    };
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
    data?: {
        host_id: string;
    };
    where: VmWhereInput;
}
export interface VmAddDiskParams {
    data: {
        max_bandwidth_policy?: VmDiskIoRestrictType;
        max_bandwidth?: number;
        max_iops_policy?: VmDiskIoRestrictType;
        max_iops?: number;
        io_policy?: VmDiskIoPolicy;
        vm_disks: {
            mount_disks?: MountDisksParams;
            mount_new_create_disks?: MountNewCreateDisksParams;
        };
    };
    where: VmWhereInput;
}
export interface VmUpdateDiskParams {
    data: {
        elf_image_id?: string | null;
        vm_volume_id?: string;
        vm_disk_id: string;
        bus?: Bus;
    };
    where: VmWhereInput;
}
export interface VmRemoveDiskParams {
    data: {
        disk_ids: string[];
    };
    where: VmWhereInput;
}
export interface VmAddCdRomParams {
    data: {
        vm_cd_roms: VmCdRomParams;
    };
    where: VmWhereInput;
}
export interface VmRemoveCdRomParams {
    data: {
        cd_rom_ids: string[];
    };
    where: VmWhereInput;
}
export interface VmAddNicParams {
    data: {
        vm_nics: VmNicParams;
    };
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
    data: {
        nic_index: number[];
    };
    where: VmWhereInput;
}
export interface InstallVmtoolsParams {
    data: {
        svt_image_id: string;
        cd_rom_id: string;
    };
    where: VmWhereInput;
}
export interface VmMigrateParams {
    data?: {
        host_id: string;
    };
    where: VmWhereInput;
}
export interface VmAddFolderParams {
    data: {
        folder_id: string;
    };
    where: VmWhereInput;
}
export declare namespace GetAlertNotifiers {
    namespace GetAlertNotifiers {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetAlertNotifiersRequestBody;
        type RequestHeaders = {};
        type ResponseBody = AlertNotifier[];
    }
}
export declare namespace GetAlertNotifiersConnection {
    namespace GetAlertNotifiersConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetAlertNotifiersConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = AlertNotifierConnection;
    }
}
export declare namespace GetAlertRules {
    namespace GetAlertRules {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetAlertRulesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = AlertRule[];
    }
}
export declare namespace GetAlertRulesConnection {
    namespace GetAlertRulesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetAlertRulesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = AlertRuleConnection;
    }
}
export declare namespace GetAlerts {
    namespace GetAlerts {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetAlertsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Alert[];
    }
}
export declare namespace GetAlertsConnection {
    namespace GetAlertsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetAlertsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = AlertConnection;
    }
}
export declare namespace GetApplications {
    namespace GetApplications {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetApplicationsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Application[];
    }
}
export declare namespace GetApplicationsConnection {
    namespace GetApplicationsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetApplicationsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ApplicationConnection;
    }
}
export declare namespace GetBrickTopoes {
    namespace GetBrickTopoes {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetBrickTopoesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = BrickTopo[];
    }
}
export declare namespace GetBrickTopoesConnection {
    namespace GetBrickTopoesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetBrickTopoesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = BrickTopoConnection;
    }
}
export declare namespace GetClusterImages {
    namespace GetClusterImages {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetClusterImagesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ClusterImage[];
    }
}
export declare namespace GetClusterImagesConnection {
    namespace GetClusterImagesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetClusterImagesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ClusterImageConnection;
    }
}
export declare namespace GetClusters {
    namespace GetClusters {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetClustersRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Cluster[];
    }
}
export declare namespace GetClustersConnection {
    namespace GetClustersConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetClustersConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ClusterConnection;
    }
}
export declare namespace GetClusterSettingses {
    namespace GetClusterSettingses {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetClusterSettingsesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ClusterSettings[];
    }
}
export declare namespace GetClusterSettingsesConnection {
    namespace GetClusterSettingsesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetClusterSettingsesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ClusterSettingsConnection;
    }
}
export declare namespace GetClusterTopoes {
    namespace GetClusterTopoes {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetClusterTopoesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ClusterTopo[];
    }
}
export declare namespace GetClusterTopoesConnection {
    namespace GetClusterTopoesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetClusterTopoesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ClusterTopoConnection;
    }
}
export declare namespace GetClusterUpgradeHistories {
    namespace GetClusterUpgradeHistories {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetClusterUpgradeHistoriesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ClusterUpgradeHistory[];
    }
}
export declare namespace GetClusterUpgradeHistoriesConnection {
    namespace GetClusterUpgradeHistoriesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetClusterUpgradeHistoriesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ClusterUpgradeHistoryConnection;
    }
}
export declare namespace GetConsistencyGroups {
    namespace GetConsistencyGroups {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetConsistencyGroupsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ConsistencyGroup[];
    }
}
export declare namespace GetConsistencyGroupsConnection {
    namespace GetConsistencyGroupsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetConsistencyGroupsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ConsistencyGroupConnection;
    }
}
export declare namespace GetConsistencyGroupSnapshots {
    namespace GetConsistencyGroupSnapshots {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetConsistencyGroupSnapshotsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ConsistencyGroupSnapshot[];
    }
}
export declare namespace GetConsistencyGroupSnapshotsConnection {
    namespace GetConsistencyGroupSnapshotsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetConsistencyGroupSnapshotsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ConsistencyGroupSnapshotConnection;
    }
}
export declare namespace GetDatacenters {
    namespace GetDatacenters {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetDatacentersRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Datacenter[];
    }
}
export declare namespace GetDatacentersConnection {
    namespace GetDatacentersConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetDatacentersConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = DatacenterConnection;
    }
}
export declare namespace GetDeploys {
    namespace GetDeploys {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetDeploysRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Deploy[];
    }
}
export declare namespace GetDeploysConnection {
    namespace GetDeploysConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetDeploysConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = DeployConnection;
    }
}
export declare namespace GetDiscoverHosts {
    namespace GetDiscoverHosts {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetDiscoverHostsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = DiscoveredHost[];
    }
}
export declare namespace GetDisks {
    namespace GetDisks {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetDisksRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Disk[];
    }
}
export declare namespace GetDisksConnection {
    namespace GetDisksConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetDisksConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = DiskConnection;
    }
}
export declare namespace GetElfDataStores {
    namespace GetElfDataStores {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetElfDataStoresRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ElfDataStore[];
    }
}
export declare namespace GetElfDataStoresConnection {
    namespace GetElfDataStoresConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetElfDataStoresConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ElfDataStoreConnection;
    }
}
export declare namespace GetElfImages {
    namespace GetElfImages {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetElfImagesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ElfImage[];
    }
}
export declare namespace GetElfImagesConnection {
    namespace GetElfImagesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetElfImagesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ElfImageConnection;
    }
}
export declare namespace GetElfStoragePolicies {
    namespace GetElfStoragePolicies {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetElfStoragePoliciesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ElfStoragePolicy[];
    }
}
export declare namespace GetElfStoragePoliciesConnection {
    namespace GetElfStoragePoliciesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetElfStoragePoliciesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ElfStoragePolicyConnection;
    }
}
export declare namespace GetEntityFilters {
    namespace GetEntityFilters {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetEntityFiltersRequestBody;
        type RequestHeaders = {};
        type ResponseBody = EntityFilter[];
    }
}
export declare namespace GetEntityFiltersConnection {
    namespace GetEntityFiltersConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetEntityFiltersConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = EntityFilterConnection;
    }
}
export declare namespace GetGlobalAlertRules {
    namespace GetGlobalAlertRules {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetGlobalAlertRulesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = GlobalAlertRule[];
    }
}
export declare namespace GetGlobalAlertRulesConnection {
    namespace GetGlobalAlertRulesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetGlobalAlertRulesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = GlobalAlertRuleConnection;
    }
}
export declare namespace GetGlobalSettingses {
    namespace GetGlobalSettingses {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetGlobalSettingsesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = GlobalSettings[];
    }
}
export declare namespace GetGlobalSettingsesConnection {
    namespace GetGlobalSettingsesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetGlobalSettingsesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = GlobalSettingsConnection;
    }
}
export declare namespace GetGraphs {
    namespace GetGraphs {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetGraphsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Graph[];
    }
}
export declare namespace GetGraphsConnection {
    namespace GetGraphsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetGraphsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = GraphConnection;
    }
}
export declare namespace GetHosts {
    namespace GetHosts {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetHostsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Host[];
    }
}
export declare namespace GetHostsConnection {
    namespace GetHostsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetHostsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = HostConnection;
    }
}
export declare namespace GetImagesConnector {
    namespace GetImagesConnector {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetImagesConnectorRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ImageConnector[];
    }
}
export declare namespace GetIpmis {
    namespace GetIpmis {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetIpmisRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Ipmi[];
    }
}
export declare namespace GetIscsiConnections {
    namespace GetIscsiConnections {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetIscsiConnectionsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = IscsiConnection[];
    }
}
export declare namespace GetIscsiConnectionsConnection {
    namespace GetIscsiConnectionsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetIscsiConnectionsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = IscsiConnectionConnection;
    }
}
export declare namespace GetIscsiLuns {
    namespace GetIscsiLuns {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetIscsiLunsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = IscsiLun[];
    }
}
export declare namespace GetIscsiLunsConnection {
    namespace GetIscsiLunsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetIscsiLunsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = IscsiLunConnection;
    }
}
export declare namespace GetIscsiLunSnapshots {
    namespace GetIscsiLunSnapshots {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetIscsiLunSnapshotsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = IscsiLunSnapshot[];
    }
}
export declare namespace GetIscsiLunSnapshotsConnection {
    namespace GetIscsiLunSnapshotsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetIscsiLunSnapshotsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = IscsiLunSnapshotConnection;
    }
}
export declare namespace GetIscsiTargets {
    namespace GetIscsiTargets {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetIscsiTargetsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = IscsiTarget[];
    }
}
export declare namespace GetIscsiTargetsConnection {
    namespace GetIscsiTargetsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetIscsiTargetsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = IscsiTargetConnection;
    }
}
export declare namespace GetLabels {
    namespace GetLabels {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetLabelsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Label[];
    }
}
export declare namespace GetLabelsConnection {
    namespace GetLabelsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetLabelsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = LabelConnection;
    }
}
export declare namespace GetLicenses {
    namespace GetLicenses {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetLicensesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = License[];
    }
}
export declare namespace GetLicensesConnection {
    namespace GetLicensesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetLicensesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = LicenseConnection;
    }
}
export declare namespace GetLogCollections {
    namespace GetLogCollections {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetLogCollectionsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = LogCollection[];
    }
}
export declare namespace GetLogCollectionsConnection {
    namespace GetLogCollectionsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetLogCollectionsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = LogCollectionConnection;
    }
}
export declare namespace GetMigrateTransmitters {
    namespace GetMigrateTransmitters {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetMigrateTransmittersRequestBody;
        type RequestHeaders = {};
        type ResponseBody = MigrateTransmitter[];
    }
}
export declare namespace GetMigrateTransmittersConnection {
    namespace GetMigrateTransmittersConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetMigrateTransmittersConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = MigrateTransmitterConnection;
    }
}
export declare namespace GetNamespaceGroups {
    namespace GetNamespaceGroups {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNamespaceGroupsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NamespaceGroup[];
    }
}
export declare namespace GetNamespaceGroupsConnection {
    namespace GetNamespaceGroupsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNamespaceGroupsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NamespaceGroupConnection;
    }
}
export declare namespace GetNfsExports {
    namespace GetNfsExports {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNfsExportsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NfsExport[];
    }
}
export declare namespace GetNfsExportsConnection {
    namespace GetNfsExportsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNfsExportsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NfsExportConnection;
    }
}
export declare namespace GetNfsInodes {
    namespace GetNfsInodes {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNfsInodesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NfsInode[];
    }
}
export declare namespace GetNfsInodesConnection {
    namespace GetNfsInodesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNfsInodesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NfsInodeConnection;
    }
}
export declare namespace GetNics {
    namespace GetNics {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNicsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Nic[];
    }
}
export declare namespace GetNicsConnection {
    namespace GetNicsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNicsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NicConnection;
    }
}
export declare namespace GetNodeTopoes {
    namespace GetNodeTopoes {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNodeTopoesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NodeTopo[];
    }
}
export declare namespace GetNodeTopoesConnection {
    namespace GetNodeTopoesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNodeTopoesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NodeTopoConnection;
    }
}
export declare namespace GetNvmfNamespaces {
    namespace GetNvmfNamespaces {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNvmfNamespacesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NvmfNamespace[];
    }
}
export declare namespace GetNvmfNamespacesConnection {
    namespace GetNvmfNamespacesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNvmfNamespacesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NvmfNamespaceConnection;
    }
}
export declare namespace GetNvmfNamespaceSnapshots {
    namespace GetNvmfNamespaceSnapshots {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNvmfNamespaceSnapshotsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NvmfNamespaceSnapshot[];
    }
}
export declare namespace GetNvmfNamespaceSnapshotsConnection {
    namespace GetNvmfNamespaceSnapshotsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNvmfNamespaceSnapshotsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NvmfNamespaceSnapshotConnection;
    }
}
export declare namespace GetNvmfSubsystems {
    namespace GetNvmfSubsystems {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNvmfSubsystemsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NvmfSubsystem[];
    }
}
export declare namespace GetNvmfSubsystemsConnection {
    namespace GetNvmfSubsystemsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetNvmfSubsystemsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = NvmfSubsystemConnection;
    }
}
export declare namespace GetOrganizations {
    namespace GetOrganizations {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetOrganizationsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Organization[];
    }
}
export declare namespace GetOrganizationsConnection {
    namespace GetOrganizationsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetOrganizationsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = OrganizationConnection;
    }
}
export declare namespace GetPmemDimms {
    namespace GetPmemDimms {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetPmemDimmsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = PmemDimm[];
    }
}
export declare namespace GetPmemDimmsConnection {
    namespace GetPmemDimmsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetPmemDimmsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = PmemDimmConnection;
    }
}
export declare namespace GetRackTopoes {
    namespace GetRackTopoes {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetRackTopoesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = RackTopo[];
    }
}
export declare namespace GetRackTopoesConnection {
    namespace GetRackTopoesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetRackTopoesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = RackTopoConnection;
    }
}
export declare namespace GetReportTasks {
    namespace GetReportTasks {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetReportTasksRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ReportTask[];
    }
}
export declare namespace GetReportTasksConnection {
    namespace GetReportTasksConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetReportTasksConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ReportTaskConnection;
    }
}
export declare namespace GetReportTemplates {
    namespace GetReportTemplates {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetReportTemplatesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ReportTemplate[];
    }
}
export declare namespace GetReportTemplatesConnection {
    namespace GetReportTemplatesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetReportTemplatesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ReportTemplateConnection;
    }
}
export declare namespace GetSnapshotGroups {
    namespace GetSnapshotGroups {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetSnapshotGroupsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = SnapshotGroup[];
    }
}
export declare namespace GetSnapshotGroupsConnection {
    namespace GetSnapshotGroupsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetSnapshotGroupsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = SnapshotGroupConnection;
    }
}
export declare namespace GetSnapshotPlans {
    namespace GetSnapshotPlans {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetSnapshotPlansRequestBody;
        type RequestHeaders = {};
        type ResponseBody = SnapshotPlan[];
    }
}
export declare namespace GetSnapshotPlansConnection {
    namespace GetSnapshotPlansConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetSnapshotPlansConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = SnapshotPlanConnection;
    }
}
export declare namespace GetSnapshotPlanTasks {
    namespace GetSnapshotPlanTasks {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetSnapshotPlanTasksRequestBody;
        type RequestHeaders = {};
        type ResponseBody = SnapshotPlanTask[];
    }
}
export declare namespace GetSnapshotPlanTasksConnection {
    namespace GetSnapshotPlanTasksConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetSnapshotPlanTasksConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = SnapshotPlanTaskConnection;
    }
}
export declare namespace GetSnmpTransports {
    namespace GetSnmpTransports {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetSnmpTransportsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = SnmpTransport[];
    }
}
export declare namespace GetSnmpTransportsConnection {
    namespace GetSnmpTransportsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetSnmpTransportsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = SnmpTransportConnection;
    }
}
export declare namespace GetSnmpTrapReceivers {
    namespace GetSnmpTrapReceivers {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetSnmpTrapReceiversRequestBody;
        type RequestHeaders = {};
        type ResponseBody = SnmpTrapReceiver[];
    }
}
export declare namespace GetSnmpTrapReceiversConnection {
    namespace GetSnmpTrapReceiversConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetSnmpTrapReceiversConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = SnmpTrapReceiverConnection;
    }
}
export declare namespace GetStoragePoliciesConnector {
    namespace GetStoragePoliciesConnector {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetStoragePoliciesConnectorRequestBody;
        type RequestHeaders = {};
        type ResponseBody = StoragePolicyConector[];
    }
}
export declare namespace GetSvtImages {
    namespace GetSvtImages {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetSvtImagesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = SvtImage[];
    }
}
export declare namespace GetSvtImagesConnection {
    namespace GetSvtImagesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetSvtImagesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = SvtImageConnection;
    }
}
export declare namespace GetSystemAuditLogs {
    namespace GetSystemAuditLogs {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetSystemAuditLogsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = SystemAuditLog[];
    }
}
export declare namespace GetSystemAuditLogsConnection {
    namespace GetSystemAuditLogsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetSystemAuditLogsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = SystemAuditLogConnection;
    }
}
export declare namespace GetTasks {
    namespace GetTasks {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetTasksRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Task[];
    }
}
export declare namespace GetTasksConnection {
    namespace GetTasksConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetTasksConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = TaskConnection;
    }
}
export declare namespace GetUploadTasks {
    namespace GetUploadTasks {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetUploadTasksRequestBody;
        type RequestHeaders = {};
        type ResponseBody = UploadTask[];
    }
}
export declare namespace GetUploadTasksConnection {
    namespace GetUploadTasksConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetUploadTasksConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = UploadTaskConnection;
    }
}
export declare namespace GetUsbDevices {
    namespace GetUsbDevices {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetUsbDevicesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = UsbDevice[];
    }
}
export declare namespace GetUsbDevicesConnection {
    namespace GetUsbDevicesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetUsbDevicesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = UsbDeviceConnection;
    }
}
export declare namespace GetUserAuditLogs {
    namespace GetUserAuditLogs {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetUserAuditLogsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = UserAuditLog[];
    }
}
export declare namespace GetUserAuditLogsConnection {
    namespace GetUserAuditLogsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetUserAuditLogsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = UserAuditLogConnection;
    }
}
export declare namespace GetUserRoleNexts {
    namespace GetUserRoleNexts {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetUserRoleNextsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = UserRoleNext[];
    }
}
export declare namespace GetUserRoleNextsConnection {
    namespace GetUserRoleNextsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetUserRoleNextsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = UserRoleNextConnection;
    }
}
export declare namespace GetUsers {
    namespace GetUsers {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetUsersRequestBody;
        type RequestHeaders = {};
        type ResponseBody = User[];
    }
}
export declare namespace GetUsersConnection {
    namespace GetUsersConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetUsersConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = UserConnection;
    }
}
export declare namespace GetVcenterAccounts {
    namespace GetVcenterAccounts {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVcenterAccountsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VcenterAccount[];
    }
}
export declare namespace GetVcenterAccountsConnection {
    namespace GetVcenterAccountsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVcenterAccountsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VcenterAccountConnection;
    }
}
export declare namespace GetVdses {
    namespace GetVdses {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVdsesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Vds[];
    }
}
export declare namespace GetVdsesConnection {
    namespace GetVdsesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVdsesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VdsConnection;
    }
}
export declare namespace GetViews {
    namespace GetViews {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetViewsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = View[];
    }
}
export declare namespace GetViewsConnection {
    namespace GetViewsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetViewsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ViewConnection;
    }
}
export declare namespace GetVlans {
    namespace GetVlans {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVlansRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Vlan[];
    }
}
export declare namespace GetVlansConnection {
    namespace GetVlansConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVlansConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VlanConnection;
    }
}
export declare namespace GetVmDisks {
    namespace GetVmDisks {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmDisksRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmDisk[];
    }
}
export declare namespace GetVmDisksConnection {
    namespace GetVmDisksConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmDisksConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmDiskConnection;
    }
}
export declare namespace GetVmEntityFilterResults {
    namespace GetVmEntityFilterResults {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmEntityFilterResultsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmEntityFilterResult[];
    }
}
export declare namespace GetVmEntityFilterResultsConnection {
    namespace GetVmEntityFilterResultsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmEntityFilterResultsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmEntityFilterResultConnection;
    }
}
export declare namespace GetVmFolders {
    namespace GetVmFolders {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmFoldersRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmFolder[];
    }
}
export declare namespace GetVmFoldersConnection {
    namespace GetVmFoldersConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmFoldersConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmFolderConnection;
    }
}
export declare namespace GetVmNics {
    namespace GetVmNics {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmNicsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmNic[];
    }
}
export declare namespace GetVmNicsConnection {
    namespace GetVmNicsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmNicsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmNicConnection;
    }
}
export declare namespace GetVmPlacementGroups {
    namespace GetVmPlacementGroups {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmPlacementGroupsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmPlacementGroup[];
    }
}
export declare namespace GetVmPlacementGroupsConnection {
    namespace GetVmPlacementGroupsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmPlacementGroupsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmPlacementGroupConnection;
    }
}
export declare namespace GetVms {
    namespace GetVms {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Vm[];
    }
}
export declare namespace GetVmsConnection {
    namespace GetVmsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmConnection;
    }
}
export declare namespace GetVmSnapshots {
    namespace GetVmSnapshots {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmSnapshotsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmSnapshot[];
    }
}
export declare namespace GetVmSnapshotsConnection {
    namespace GetVmSnapshotsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmSnapshotsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmSnapshotConnection;
    }
}
export declare namespace GetVmTemplates {
    namespace GetVmTemplates {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmTemplatesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmTemplate[];
    }
}
export declare namespace GetVmTemplatesConnection {
    namespace GetVmTemplatesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmTemplatesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmTemplateConnection;
    }
}
export declare namespace GetVmVolumes {
    namespace GetVmVolumes {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmVolumesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmVolume[];
    }
}
export declare namespace GetVmVolumesConnection {
    namespace GetVmVolumesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVmVolumesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VmVolumeConnection;
    }
}
export declare namespace GetVsphereEsxiAccounts {
    namespace GetVsphereEsxiAccounts {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVsphereEsxiAccountsRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VsphereEsxiAccount[];
    }
}
export declare namespace GetVsphereEsxiAccountsConnection {
    namespace GetVsphereEsxiAccountsConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetVsphereEsxiAccountsConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = VsphereEsxiAccountConnection;
    }
}
export declare namespace GetWitnesses {
    namespace GetWitnesses {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetWitnessesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Witness[];
    }
}
export declare namespace GetWitnessesConnection {
    namespace GetWitnessesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetWitnessesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = WitnessConnection;
    }
}
export declare namespace GetZones {
    namespace GetZones {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetZonesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = Zone[];
    }
}
export declare namespace GetZonesConnection {
    namespace GetZonesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetZonesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ZoneConnection;
    }
}
export declare namespace GetZoneTopoes {
    namespace GetZoneTopoes {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetZoneTopoesRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ZoneTopo[];
    }
}
export declare namespace GetZoneTopoesConnection {
    namespace GetZoneTopoesConnection {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GetZoneTopoesConnectionRequestBody;
        type RequestHeaders = {};
        type ResponseBody = ZoneTopoConnection;
    }
}
export declare namespace UpdateGlobalAlertRule {
    namespace UpdateGlobalAlertRule {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GlobalAlertRuleUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskGlobalAlertRule[];
    }
}
export declare namespace UpdateCustomizeAlertRule {
    namespace UpdateCustomizeAlertRule {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = CustomizeAlertRuleUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskGlobalAlertRule[];
    }
}
export declare namespace ResolveAlert {
    namespace ResolveAlert {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ResolveAlertParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskAlert[];
    }
}
export declare namespace CreateBrickTopo {
    namespace CreateBrickTopo {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = BrickTopoCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskBrickTopo[];
    }
}
export declare namespace UpdateBrickTopo {
    namespace UpdateBrickTopo {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = BrickTopoUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskBrickTopo[];
    }
}
export declare namespace MoveBrickTopo {
    namespace MoveBrickTopo {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = BrickTopoMoveParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskBrickTopo[];
    }
}
export declare namespace DeleteBrickTopo {
    namespace DeleteBrickTopo {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = BrickTopoDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteBrickTopo[];
    }
}
export declare namespace ConnectCluster {
    namespace ConnectCluster {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ClusterCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskCluster[];
    }
}
export declare namespace UpdateCluster {
    namespace UpdateCluster {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ClusterUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskCluster[];
    }
}
export declare namespace UpdateClusterLicense {
    namespace UpdateClusterLicense {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ClusterLicenseUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskCluster[];
    }
}
export declare namespace DeleteCluster {
    namespace DeleteCluster {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ClusterDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteCluster[];
    }
}
export declare namespace CreateConsistencySnapshotGroup {
    namespace CreateConsistencyGroupSnapshot {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ConsistencyGroupSnapshotCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskConsistencyGroupSnapshot[];
    }
}
export declare namespace RollbackConsistencySnapshotGroup {
    namespace UpdateConsistencyGroupSnapshot {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ConsistencyGroupSnapshotUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskConsistencyGroupSnapshot[];
    }
}
export declare namespace DeleteConsistencySnapshotGroup {
    namespace DeleteConsistencyGroupSnapshot {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ConsistencyGroupSnapshotDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteConsistencyGroupSnapshot[];
    }
}
export declare namespace CreateConsistencyGroup {
    namespace CreateConsistencyGroup {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ConsistencyGroupCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskConsistencyGroup[];
    }
}
export declare namespace UpdateConsistencyGroup {
    namespace UpdateConsistencyGroup {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ConsistencyGroupUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskConsistencyGroup[];
    }
}
export declare namespace DeleteConsistencyGroup {
    namespace DeleteConsistencyGroup {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ConsistencyGroupDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteConsistencyGroup[];
    }
}
export declare namespace CreateDatacenter {
    namespace CreateDatacenter {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = DatacenterCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskDatacenter[];
    }
}
export declare namespace UpdateDatacenter {
    namespace UpdateDatacenter {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = DatacenterUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDatacenter[];
    }
}
export declare namespace DeleteDatacenter {
    namespace DeleteDatacenter {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = DatacenterDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteDatacenter[];
    }
}
export declare namespace MountDisk {
    namespace MountDisk {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = DiskMountParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDisk[];
    }
}
export declare namespace UnmountDisk {
    namespace UnmountDisk {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = DiskUnmountParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDisk[];
    }
}
export declare namespace CreateEntityFilter {
    namespace CreateEntityFilter {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = EntityFilterCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskEntityFilter[];
    }
}
export declare namespace UpdateEntityFilter {
    namespace UpdateEntityFilter {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = EntityFilterUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskEntityFilter[];
    }
}
export declare namespace DeleteEntityFilter {
    namespace DeleteEntityFilter {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = EntityFilterDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteEntityFilter[];
    }
}
export declare namespace CreateGraph {
    namespace CreateGraph {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GraphCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskGraph[];
    }
}
export declare namespace UpdateGraph {
    namespace UpdateGraph {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GraphUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskGraph[];
    }
}
export declare namespace DeleteGraph {
    namespace DeleteGraph {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GraphDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteGraph[];
    }
}
export declare namespace CreateHost {
    namespace CreateHost {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = HostCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskBatchHosts[];
    }
}
export declare namespace TriggerDiskBlink {
    namespace TriggerDiskBlink {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = TriggerDiskBlinkParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskHost[];
    }
}
export declare namespace UpdateHost {
    namespace UpdateHost {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = HostUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskHost[];
    }
}
export declare namespace CreateIscsiLunSnapshot {
    namespace CreateIscsiLunSnapshot {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = IscsiLunSnapshotCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskIscsiLunSnapshot[];
    }
}
export declare namespace DeleteIscsiLunSnapshot {
    namespace DeleteIscsiLunSnapshot {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = IscsiLunSnapshotDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteIscsiLunSnapshot[];
    }
}
export declare namespace CreateIscsiLun {
    namespace CreateIscsiLun {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = IscsiLunCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskIscsiLun[];
    }
}
export declare namespace UpdateIscsiLun {
    namespace UpdateIscsiLun {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = IscsiLunUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskIscsiLun[];
    }
}
export declare namespace DeleteIscsiLun {
    namespace DeleteIscsiLun {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = IscsiLunDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteIscsiLun[];
    }
}
export declare namespace CloneIscsiLunFromSnapshot {
    namespace CloneIscsiLunFromSnapshot {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = IscsiLunCloneParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskIscsiLun[];
    }
}
export declare namespace RollbackIscsiLunFromSnapshot {
    namespace RollbackIscsiLunFromSnapshot {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = IscsiLunRollbackParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskIscsiLun[];
    }
}
export declare namespace CreateIscsiTarget {
    namespace CreateIscsiTarget {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = IscsiTargetCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskIscsiTarget[];
    }
}
export declare namespace UpdateIscsiTarget {
    namespace UpdateIscsiTarget {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = IscsiTargetUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskIscsiTarget[];
    }
}
export declare namespace DeleteIscsiTarget {
    namespace DeleteIscsiTarget {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = IscsiTargetDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteIscsiTarget[];
    }
}
export declare namespace UploadElfImage {
    namespace CreateElfImage {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = {
            file: File;
            cluster_id: string;
            name: string;
            size: string;
            description: string;
            upload_task_id: string;
        };
        type RequestHeaders = {};
        type ResponseBody = UploadTask[];
    }
}
export declare namespace UpdateElfImage {
    namespace UpdateElfImage {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ElfImageUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskElfImage[];
    }
}
export declare namespace DeleteElfImage {
    namespace DeleteElfImage {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ElfImageDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteElfImage[];
    }
}
export declare namespace CreateLabel {
    namespace CreateLabel {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = LabelCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskLabel[];
    }
}
export declare namespace UpdateLabel {
    namespace UpdateLabel {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = LabelUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskLabel[];
    }
}
export declare namespace AddLabelsToResources {
    namespace AddLabelsToResources {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = AddLabelsToResourcesParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskLabel[];
    }
}
export declare namespace RemoveLabelsFromResources {
    namespace RemoveLabelsFromResources {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = RemoveLabelsFromResourcesParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskLabel[];
    }
}
export declare namespace DeleteLabel {
    namespace DeleteLabel {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = LabelDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteLabel[];
    }
}
export declare namespace UpdateLicense {
    namespace UpdateDeploy {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = LicenseUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskLicense;
    }
}
export declare namespace CreateNamespaceGroup {
    namespace CreateNamespaceGroup {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NamespaceGroupCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskNamespaceGroup[];
    }
}
export declare namespace UpdateNamespaceGroup {
    namespace UpdateNamespaceGroup {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NamespaceGroupUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskNamespaceGroup[];
    }
}
export declare namespace DeleteNamespaceGroup {
    namespace DeleteNamespaceGroup {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NamespaceGroupDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteNamespaceGroup[];
    }
}
export declare namespace CreateNfsExport {
    namespace CreateNfsExport {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NfsExportCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskNfsExport[];
    }
}
export declare namespace UpdateNfsExport {
    namespace UpdateNfsExport {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NfsExportUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskNfsExport[];
    }
}
export declare namespace DeleteNfsExport {
    namespace DeleteNfsExport {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NfsExportDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteNfsExport[];
    }
}
export declare namespace UpdateNic {
    namespace UpdateNic {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NicUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskNic[];
    }
}
export declare namespace MoveNodeTopo {
    namespace UpdateNodeTopo {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NodeTopoUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskNodeTopo[];
    }
}
export declare namespace CreateNvmfNamespaceSnapshot {
    namespace CreateNvmfNamespaceSnapshot {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NvmfNamespaceSnapshotCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskNvmfNamespaceSnapshot[];
    }
}
export declare namespace DeleteNvmfNamespaceSnapshot {
    namespace DeleteNvmfNamespaceSnapshot {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NvmfNamespaceSnapshotDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteNvmfNamespaceSnapshot[];
    }
}
export declare namespace CreateNvmfNamespace {
    namespace CreateNvmfNamespace {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NvmfNamespaceCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskNvmfNamespace[];
    }
}
export declare namespace UpdateNvmfNamespace {
    namespace UpdateNvmfNamespace {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NvmfNamespaceUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskNvmfNamespace[];
    }
}
export declare namespace DeleteNvmfNamespace {
    namespace DeleteNvmfNamespace {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NvmfNamespaceDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteNvmfNamespace[];
    }
}
export declare namespace CloneNvmfNamespaceFromSnapshot {
    namespace CloneNvmfNamespaceFromSnapshot {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NvmfNamespaceCloneParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskNvmfNamespace[];
    }
}
export declare namespace RollbackNvmfNamespaceFromSnapshot {
    namespace RollbackNvmfNamespaceFromSnapshot {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NvmfNamespaceRollbackParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskNvmfNamespace[];
    }
}
export declare namespace CreateNvmfSubsystem {
    namespace CreateNvmfSubsystem {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NvmfSubsystemCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskNvmfSubsystem[];
    }
}
export declare namespace UpdateNvmfSubsystem {
    namespace UpdateNvmfSubsystem {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NvmfSubsystemUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskNvmfSubsystem[];
    }
}
export declare namespace DeleteNvmfSubsystem {
    namespace DeleteNvmfSubsystem {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = NvmfSubsystemDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteNvmfSubsystem[];
    }
}
export declare namespace CreateOrganization {
    namespace CreateOrganization {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = OrganizationCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskOrganization[];
    }
}
export declare namespace UpdateOrganization {
    namespace UpdateOrganization {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = OrganizationUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskOrganization[];
    }
}
export declare namespace DeleteOrganization {
    namespace DeleteOrganization {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = OrganizationDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteOrganization[];
    }
}
export declare namespace CreateRackTopo {
    namespace CreateRackTopo {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = RackTopoCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskRackTopo[];
    }
}
export declare namespace UpdateRackTopo {
    namespace UpdateRackTopo {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = RackTopoUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskRackTopo[];
    }
}
export declare namespace DeleteRackTopo {
    namespace DeleteRackTopo {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = RackTopoDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteRackTopo[];
    }
}
export declare namespace UpdateGlobalRecycleBinSetting {
    namespace UpdateGlobalRecycleBinSetting {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = GlobalRecycleBinUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskGlobalSettings;
    }
}
export declare namespace CreateClusterRecycleBinSetting {
    namespace CreateClusterRecycleBinSetting {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ClusterRecycleBinCreationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskClusterSettings[];
    }
}
export declare namespace UpdateClusterRecycleBinSetting {
    namespace UpdateClusterRecycleBinSetting {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ClusterRecycleBinUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskClusterSettings[];
    }
}
export declare namespace DeleteClusterRecycleBinSetting {
    namespace DeleteClusterRecycleBinSetting {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ClusterRecycleBinDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteClusterRecycleBin[];
    }
}
export declare namespace CreateReportTemplate {
    namespace CreateReportTemplate {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ReportTemplateCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskReportTemplate[];
    }
}
export declare namespace UpdateReportTemplate {
    namespace UpdateReportTemplate {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ReportTemplateUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskReportTemplate[];
    }
}
export declare namespace GenerateFromReportTemplate {
    namespace GenerateFromReportTemplate {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ReporteTemplateGenerationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskReportTask[];
    }
}
export declare namespace DeleteReportTemplate {
    namespace DeleteReportTemplate {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ReportTemplateDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteReportTemplate[];
    }
}
export declare namespace CreateRole {
    namespace CreateRole {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = RoleCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskUserRoleNext[];
    }
}
export declare namespace UpdateRole {
    namespace UpdateRole {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = RoleUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskUserRoleNext[];
    }
}
export declare namespace DeleteRole {
    namespace DeleteRole {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = RoleDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteRole[];
    }
}
export declare namespace RollbackSnapshotGroup {
    namespace RollbackSnapshotGroup {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnapshotGroupRollbackParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskSnapshotGroup[];
    }
}
export declare namespace CloneSnapshotGroup {
    namespace CloneSnapshotGroup {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnapshotGroupCloneParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskSnapshotGroup[];
    }
}
export declare namespace KeepSnapshotGroup {
    namespace KeepSnapshotGroup {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnapshotGroupKeepParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskSnapshotGroup[];
    }
}
export declare namespace DeleteSnapshotGroup {
    namespace DeleteSnapshotGroup {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnapshotGroupDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteSnapshotGroup[];
    }
}
export declare namespace CreateSnapshotPlan {
    namespace CreateSnapshotPlan {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnapshotPlanCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskSnapshotPlan[];
    }
}
export declare namespace UpdateSnapshotPlan {
    namespace UpdateSnapshotPlan {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnapshotPlanUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskSnapshotPlan[];
    }
}
export declare namespace DeleteSnapshotPlan {
    namespace DeleteSnapshotPlan {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnapshotPlanDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteSnapshotPlan[];
    }
}
export declare namespace ExecuteSnapshotPlan {
    namespace ExecuteSnapshotPlan {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnapshotPlanExecutionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskSnapshotPlan[];
    }
}
export declare namespace SuspendSnapshotPlan {
    namespace SuspendSnapshotPlan {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnapshotPlanSuspendedParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskSnapshotPlan[];
    }
}
export declare namespace ResumeSnapshotPlan {
    namespace ResumeSnapshotPlan {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnapshotPlanResumeParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskSnapshotPlan[];
    }
}
export declare namespace CreateSnmpTransport {
    namespace CreateSnmpTransport {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnmpTransportCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskSnmpTransport[];
    }
}
export declare namespace UpdateSnmpTransport {
    namespace UpdateSnmpTransport {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnmpTransportUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskSnmpTransport[];
    }
}
export declare namespace DeleteSnmpTransport {
    namespace DeleteSnmpTransport {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnmpTransportDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteSnmpTransport[];
    }
}
export declare namespace CreateSnmpTrapReceiver {
    namespace CreateSnmpTrapReceiver {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnmpTrapReceiverCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskSnmpTrapReceiver[];
    }
}
export declare namespace UpdateSnmpTrapReceiver {
    namespace UpdateSnmpTrapReceiver {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnmpTrapReceiverUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskSnmpTrapReceiver[];
    }
}
export declare namespace DeleteSnmpTrapReceiver {
    namespace DeleteSnmpTrapReceiver {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = SnmpTrapReceiverDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteSnmpTrapReceiver[];
    }
}
export declare namespace MountUsbDevice {
    namespace MountUsbDevice {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = UsbDeviceMountParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskUsbDevice[];
    }
}
export declare namespace UnmountUsbDevice {
    namespace UnmountUsbDevice {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = UsbDeviceUnmountParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskUsbDevice[];
    }
}
export declare namespace Login {
    namespace Login {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = LoginInput;
        type RequestHeaders = {};
        type ResponseBody = WithTaskTokenString;
    }
}
export declare namespace CreateUser {
    namespace CreateUser {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = UserCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskUser[];
    }
}
export declare namespace UpdateUser {
    namespace UpdateUser {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = UserUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskUser[];
    }
}
export declare namespace DeleteUser {
    namespace DeleteUser {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = UserDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteUser[];
    }
}
export declare namespace CreateVdsWithMigrateVlan {
    namespace CreateVdsWithMigrateVlan {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VdsCreationWithMigrateVlanParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskVds[];
    }
}
export declare namespace CreateVdsWithAccessVlan {
    namespace CreateVdsWithAccessVlan {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VdsCreationWithMAccessVlanParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskVds[];
    }
}
export declare namespace CreateVds {
    namespace CreateVds {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VdsCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskVds[];
    }
}
export declare namespace UpdateVds {
    namespace UpdateVds {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VdsUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVds[];
    }
}
export declare namespace DeleteVds {
    namespace DeleteVds {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VdsDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteVds[];
    }
}
export declare namespace CreateView {
    namespace CreateView {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ViewCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskView[];
    }
}
export declare namespace UpdateView {
    namespace UpdateView {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ViewUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskView[];
    }
}
export declare namespace DeleteView {
    namespace DeleteView {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ViewDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteView[];
    }
}
export declare namespace CreateVmVlan {
    namespace CreateVmVlan {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmVlanCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskVlan[];
    }
}
export declare namespace UpdateVmVlan {
    namespace UpdateVlan {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmVlanUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVlan[];
    }
}
export declare namespace UpdateManagementVlan {
    namespace UpdateManagementVlan {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ManagementVlanUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVlan[];
    }
}
export declare namespace UpdateMigrationVlan {
    namespace UpdateMigrationVlan {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = MigrationVlanUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVlan[];
    }
}
export declare namespace DeleteVmVlan {
    namespace DeleteVlan {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VlanDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteVlan[];
    }
}
export declare namespace CreateVmFolder {
    namespace CreateVmFolder {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmFolderCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskVmFolder[];
    }
}
export declare namespace UpdateVmFolder {
    namespace UpdateVmFolder {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmFolderUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVmFolder[];
    }
}
export declare namespace DeleteVmFolder {
    namespace DeleteVmFolder {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmFolderDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteVmFolder[];
    }
}
export declare namespace CreateVmPlacementGroup {
    namespace CreateVmPlacementGroup {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmPlacementGroupCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskVmPlacementGroup[];
    }
}
export declare namespace UpdateVmPlacementGroup {
    namespace UpdateVmPlacementGroup {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmPlacementGroupUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVmPlacementGroup[];
    }
}
export declare namespace DeleteVmPlacementGroup {
    namespace DeleteVmPlacementGroup {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmPlacementGroupDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteVmPlacementGroup[];
    }
}
export declare namespace CreateVmSnapshot {
    namespace CreateVmSnapshot {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmSnapshotCreationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVmSnapshot[];
    }
}
export declare namespace DeleteVmSnapshot {
    namespace DeleteVmSnapshot {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmSnapshotDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteVmSnapshot[];
    }
}
export declare namespace CloneVmTemplateFromVm {
    namespace CloneVmTemplateFromVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmTemplateCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskVmTemplate[];
    }
}
export declare namespace ConvertVmTemplateFromVm {
    namespace ConvertVmTemplateFromVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmTemplateCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskVmTemplate[];
    }
}
export declare namespace UpdateVmTemplate {
    namespace UpdateVmTemplateFromVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmTemplateUpdationParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVmTemplate[];
    }
}
export declare namespace DeleteVmTemplate {
    namespace DeleteVmTemplateFromVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmTemplateDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteVmTemplate[];
    }
}
export declare namespace CreateVmVolume {
    namespace CreateVmVolume {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmVolumeCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskVmVolume[];
    }
}
export declare namespace DeleteVmVolume {
    namespace DeleteVmVolumeFromVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmVolumeDeletionParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskDeleteVmVolume[];
    }
}
export declare namespace CreateVm {
    namespace CreateVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmCreationParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace CreateVmFromTemplate {
    namespace CreateVmFromTemplate {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmCreateVmFromTemplateParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace ConvertVmTemplateToVm {
    namespace ConvertVmTemplateToVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = ConvertVmTemplateToVmParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace CloneVm {
    namespace CloneVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmCloneParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace RebuildVmFromSnapshot {
    namespace RebuildVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmRebuildParams[];
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace RollbackVm {
    namespace RollbackVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmRollbackParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace UpdateVmBasicInfo {
    namespace UpdateVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmUpdateParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace MoveVmToRecycle {
    namespace MoveVmToRecycleBin {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmOperateParams;
        type RequestHeaders = {};
        type ResponseBody = {
            task_id: string | null;
            data: DeleteVm | null;
        }[];
    }
}
export declare namespace RecoverVmFromRecycle {
    namespace RecoverVmFromRecycleBin {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmOperateParams;
        type RequestHeaders = {};
        type ResponseBody = {
            task_id: string | null;
            data: DeleteVm | null;
        }[];
    }
}
export declare namespace DeleteVm {
    namespace DeleteVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmOperateParams;
        type RequestHeaders = {};
        type ResponseBody = {
            task_id: string | null;
            data: DeleteVm | null;
        }[];
    }
}
export declare namespace StartVm {
    namespace StartVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmStartParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace RestartVm {
    namespace RestartVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmOperateParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace ForceRestartVm {
    namespace ForceRestartVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmOperateParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace ShutdownVm {
    namespace ShutDownVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmOperateParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace PoweroffVm {
    namespace ForceShutDownVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmOperateParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace SuspendVm {
    namespace SuspendVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmOperateParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace ResumeVm {
    namespace ResumeVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmOperateParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace AddVmDisk {
    namespace AddVmDisk {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmAddDiskParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace UpdateVmDisk {
    namespace UpdateVmDisk {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmUpdateDiskParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace RemoveVmDisk {
    namespace RemoveVmDisk {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmRemoveDiskParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace AddVmCdRom {
    namespace AddVmCdRom {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmAddCdRomParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace RemoveVmCdRom {
    namespace RemoveVmCdRom {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmRemoveCdRomParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace AddVmNic {
    namespace AddVmNic {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmAddNicParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace UpdateVmNic {
    namespace UpdateVmNic {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmUpdateNicParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace RemoveVmNic {
    namespace RemoveVmNic {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmRemoveNicParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace InstallVmtools {
    namespace InstallVmtools {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = InstallVmtoolsParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace MigrateVm {
    namespace MigRateVm {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmMigrateParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace AddVmToFolder {
    namespace AddVmToFolder {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmAddFolderParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
export declare namespace RemoveVmFromFolder {
    namespace RemoveVmToFolder {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = VmOperateParams;
        type RequestHeaders = {};
        type ResponseBody = WithTaskVm[];
    }
}
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export declare type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    secure?: boolean;
    path: string;
    type?: ContentType;
    query?: QueryParamsType;
    format?: ResponseType;
    body?: unknown;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    private mergeRequestParams;
    private createFormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    getAlertNotifiers: {
        getAlertNotifiers: (data: GetAlertNotifiersRequestBody, params?: RequestParams) => Promise<AxiosResponse<AlertNotifier[]>>;
    };
    getAlertNotifiersConnection: {
        getAlertNotifiersConnection: (data: GetAlertNotifiersConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<AlertNotifierConnection>>;
    };
    getAlertRules: {
        getAlertRules: (data: GetAlertRulesRequestBody, params?: RequestParams) => Promise<AxiosResponse<AlertRule[]>>;
    };
    getAlertRulesConnection: {
        getAlertRulesConnection: (data: GetAlertRulesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<AlertRuleConnection>>;
    };
    getAlerts: {
        getAlerts: (data: GetAlertsRequestBody, params?: RequestParams) => Promise<AxiosResponse<Alert[]>>;
    };
    getAlertsConnection: {
        getAlertsConnection: (data: GetAlertsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<AlertConnection>>;
    };
    getApplications: {
        getApplications: (data: GetApplicationsRequestBody, params?: RequestParams) => Promise<AxiosResponse<Application[]>>;
    };
    getApplicationsConnection: {
        getApplicationsConnection: (data: GetApplicationsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ApplicationConnection>>;
    };
    getBrickTopoes: {
        getBrickTopoes: (data: GetBrickTopoesRequestBody, params?: RequestParams) => Promise<AxiosResponse<BrickTopo[]>>;
    };
    getBrickTopoesConnection: {
        getBrickTopoesConnection: (data: GetBrickTopoesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<BrickTopoConnection>>;
    };
    getClusterImages: {
        getClusterImages: (data: GetClusterImagesRequestBody, params?: RequestParams) => Promise<AxiosResponse<ClusterImage[]>>;
    };
    getClusterImagesConnection: {
        getClusterImagesConnection: (data: GetClusterImagesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ClusterImageConnection>>;
    };
    getClusters: {
        getClusters: (data: GetClustersRequestBody, params?: RequestParams) => Promise<AxiosResponse<Cluster[]>>;
    };
    getClustersConnection: {
        getClustersConnection: (data: GetClustersConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ClusterConnection>>;
    };
    getClusterSettingses: {
        getClusterSettingses: (data: GetClusterSettingsesRequestBody, params?: RequestParams) => Promise<AxiosResponse<ClusterSettings[]>>;
    };
    getClusterSettingsesConnection: {
        getClusterSettingsesConnection: (data: GetClusterSettingsesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ClusterSettingsConnection>>;
    };
    getClusterTopoes: {
        getClusterTopoes: (data: GetClusterTopoesRequestBody, params?: RequestParams) => Promise<AxiosResponse<ClusterTopo[]>>;
    };
    getClusterTopoesConnection: {
        getClusterTopoesConnection: (data: GetClusterTopoesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ClusterTopoConnection>>;
    };
    getClusterUpgradeHistories: {
        getClusterUpgradeHistories: (data: GetClusterUpgradeHistoriesRequestBody, params?: RequestParams) => Promise<AxiosResponse<ClusterUpgradeHistory[]>>;
    };
    getClusterUpgradeHistoriesConnection: {
        getClusterUpgradeHistoriesConnection: (data: GetClusterUpgradeHistoriesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ClusterUpgradeHistoryConnection>>;
    };
    getConsistencyGroups: {
        getConsistencyGroups: (data: GetConsistencyGroupsRequestBody, params?: RequestParams) => Promise<AxiosResponse<ConsistencyGroup[]>>;
    };
    getConsistencyGroupsConnection: {
        getConsistencyGroupsConnection: (data: GetConsistencyGroupsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ConsistencyGroupConnection>>;
    };
    getConsistencyGroupSnapshots: {
        getConsistencyGroupSnapshots: (data: GetConsistencyGroupSnapshotsRequestBody, params?: RequestParams) => Promise<AxiosResponse<ConsistencyGroupSnapshot[]>>;
    };
    getConsistencyGroupSnapshotsConnection: {
        getConsistencyGroupSnapshotsConnection: (data: GetConsistencyGroupSnapshotsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ConsistencyGroupSnapshotConnection>>;
    };
    getDatacenters: {
        getDatacenters: (data: GetDatacentersRequestBody, params?: RequestParams) => Promise<AxiosResponse<Datacenter[]>>;
    };
    getDatacentersConnection: {
        getDatacentersConnection: (data: GetDatacentersConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<DatacenterConnection>>;
    };
    getDeploys: {
        getDeploys: (data: GetDeploysRequestBody, params?: RequestParams) => Promise<AxiosResponse<Deploy[]>>;
    };
    getDeploysConnection: {
        getDeploysConnection: (data: GetDeploysConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<DeployConnection>>;
    };
    getDiscoverHosts: {
        getDiscoverHosts: (data: GetDiscoverHostsRequestBody, params?: RequestParams) => Promise<AxiosResponse<DiscoveredHost[]>>;
    };
    getDisks: {
        getDisks: (data: GetDisksRequestBody, params?: RequestParams) => Promise<AxiosResponse<Disk[]>>;
    };
    getDisksConnection: {
        getDisksConnection: (data: GetDisksConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<DiskConnection>>;
    };
    getElfDataStores: {
        getElfDataStores: (data: GetElfDataStoresRequestBody, params?: RequestParams) => Promise<AxiosResponse<ElfDataStore[]>>;
    };
    getElfDataStoresConnection: {
        getElfDataStoresConnection: (data: GetElfDataStoresConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ElfDataStoreConnection>>;
    };
    getElfImages: {
        getElfImages: (data: GetElfImagesRequestBody, params?: RequestParams) => Promise<AxiosResponse<ElfImage[]>>;
    };
    getElfImagesConnection: {
        getElfImagesConnection: (data: GetElfImagesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ElfImageConnection>>;
    };
    getElfStoragePolicies: {
        getElfStoragePolicies: (data: GetElfStoragePoliciesRequestBody, params?: RequestParams) => Promise<AxiosResponse<ElfStoragePolicy[]>>;
    };
    getElfStoragePoliciesConnection: {
        getElfStoragePoliciesConnection: (data: GetElfStoragePoliciesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ElfStoragePolicyConnection>>;
    };
    getEntityFilters: {
        getEntityFilters: (data: GetEntityFiltersRequestBody, params?: RequestParams) => Promise<AxiosResponse<EntityFilter[]>>;
    };
    getEntityFiltersConnection: {
        getEntityFiltersConnection: (data: GetEntityFiltersConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<EntityFilterConnection>>;
    };
    getGlobalAlertRules: {
        getGlobalAlertRules: (data: GetGlobalAlertRulesRequestBody, params?: RequestParams) => Promise<AxiosResponse<GlobalAlertRule[]>>;
    };
    getGlobalAlertRulesConnection: {
        getGlobalAlertRulesConnection: (data: GetGlobalAlertRulesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<GlobalAlertRuleConnection>>;
    };
    getGlobalSettingses: {
        getGlobalSettingses: (data: GetGlobalSettingsesRequestBody, params?: RequestParams) => Promise<AxiosResponse<GlobalSettings[]>>;
    };
    getGlobalSettingsesConnection: {
        getGlobalSettingsesConnection: (data: GetGlobalSettingsesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<GlobalSettingsConnection>>;
    };
    getGraphs: {
        getGraphs: (data: GetGraphsRequestBody, params?: RequestParams) => Promise<AxiosResponse<Graph[]>>;
    };
    getGraphsConnection: {
        getGraphsConnection: (data: GetGraphsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<GraphConnection>>;
    };
    getHosts: {
        getHosts: (data: GetHostsRequestBody, params?: RequestParams) => Promise<AxiosResponse<Host[]>>;
    };
    getHostsConnection: {
        getHostsConnection: (data: GetHostsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<HostConnection>>;
    };
    getImagesConnector: {
        getImagesConnector: (data: GetImagesConnectorRequestBody, params?: RequestParams) => Promise<AxiosResponse<ImageConnector[]>>;
    };
    getIpmis: {
        getIpmis: (data: GetIpmisRequestBody, params?: RequestParams) => Promise<AxiosResponse<Ipmi[]>>;
    };
    getIscsiConnections: {
        getIscsiConnections: (data: GetIscsiConnectionsRequestBody, params?: RequestParams) => Promise<AxiosResponse<IscsiConnection[]>>;
    };
    getIscsiConnectionsConnection: {
        getIscsiConnectionsConnection: (data: GetIscsiConnectionsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<IscsiConnectionConnection>>;
    };
    getIscsiLuns: {
        getIscsiLuns: (data: GetIscsiLunsRequestBody, params?: RequestParams) => Promise<AxiosResponse<IscsiLun[]>>;
    };
    getIscsiLunsConnection: {
        getIscsiLunsConnection: (data: GetIscsiLunsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<IscsiLunConnection>>;
    };
    getIscsiLunSnapshots: {
        getIscsiLunSnapshots: (data: GetIscsiLunSnapshotsRequestBody, params?: RequestParams) => Promise<AxiosResponse<IscsiLunSnapshot[]>>;
    };
    getIscsiLunSnapshotsConnection: {
        getIscsiLunSnapshotsConnection: (data: GetIscsiLunSnapshotsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<IscsiLunSnapshotConnection>>;
    };
    getIscsiTargets: {
        getIscsiTargets: (data: GetIscsiTargetsRequestBody, params?: RequestParams) => Promise<AxiosResponse<IscsiTarget[]>>;
    };
    getIscsiTargetsConnection: {
        getIscsiTargetsConnection: (data: GetIscsiTargetsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<IscsiTargetConnection>>;
    };
    getLabels: {
        getLabels: (data: GetLabelsRequestBody, params?: RequestParams) => Promise<AxiosResponse<Label[]>>;
    };
    getLabelsConnection: {
        getLabelsConnection: (data: GetLabelsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<LabelConnection>>;
    };
    getLicenses: {
        getLicenses: (data: GetLicensesRequestBody, params?: RequestParams) => Promise<AxiosResponse<License[]>>;
    };
    getLicensesConnection: {
        getLicensesConnection: (data: GetLicensesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<LicenseConnection>>;
    };
    getLogCollections: {
        getLogCollections: (data: GetLogCollectionsRequestBody, params?: RequestParams) => Promise<AxiosResponse<LogCollection[]>>;
    };
    getLogCollectionsConnection: {
        getLogCollectionsConnection: (data: GetLogCollectionsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<LogCollectionConnection>>;
    };
    getMigrateTransmitters: {
        getMigrateTransmitters: (data: GetMigrateTransmittersRequestBody, params?: RequestParams) => Promise<AxiosResponse<MigrateTransmitter[]>>;
    };
    getMigrateTransmittersConnection: {
        getMigrateTransmittersConnection: (data: GetMigrateTransmittersConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<MigrateTransmitterConnection>>;
    };
    getNamespaceGroups: {
        getNamespaceGroups: (data: GetNamespaceGroupsRequestBody, params?: RequestParams) => Promise<AxiosResponse<NamespaceGroup[]>>;
    };
    getNamespaceGroupsConnection: {
        getNamespaceGroupsConnection: (data: GetNamespaceGroupsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<NamespaceGroupConnection>>;
    };
    getNfsExports: {
        getNfsExports: (data: GetNfsExportsRequestBody, params?: RequestParams) => Promise<AxiosResponse<NfsExport[]>>;
    };
    getNfsExportsConnection: {
        getNfsExportsConnection: (data: GetNfsExportsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<NfsExportConnection>>;
    };
    getNfsInodes: {
        getNfsInodes: (data: GetNfsInodesRequestBody, params?: RequestParams) => Promise<AxiosResponse<NfsInode[]>>;
    };
    getNfsInodesConnection: {
        getNfsInodesConnection: (data: GetNfsInodesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<NfsInodeConnection>>;
    };
    getNics: {
        getNics: (data: GetNicsRequestBody, params?: RequestParams) => Promise<AxiosResponse<Nic[]>>;
    };
    getNicsConnection: {
        getNicsConnection: (data: GetNicsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<NicConnection>>;
    };
    getNodeTopoes: {
        getNodeTopoes: (data: GetNodeTopoesRequestBody, params?: RequestParams) => Promise<AxiosResponse<NodeTopo[]>>;
    };
    getNodeTopoesConnection: {
        getNodeTopoesConnection: (data: GetNodeTopoesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<NodeTopoConnection>>;
    };
    getNvmfNamespaces: {
        getNvmfNamespaces: (data: GetNvmfNamespacesRequestBody, params?: RequestParams) => Promise<AxiosResponse<NvmfNamespace[]>>;
    };
    getNvmfNamespacesConnection: {
        getNvmfNamespacesConnection: (data: GetNvmfNamespacesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<NvmfNamespaceConnection>>;
    };
    getNvmfNamespaceSnapshots: {
        getNvmfNamespaceSnapshots: (data: GetNvmfNamespaceSnapshotsRequestBody, params?: RequestParams) => Promise<AxiosResponse<NvmfNamespaceSnapshot[]>>;
    };
    getNvmfNamespaceSnapshotsConnection: {
        getNvmfNamespaceSnapshotsConnection: (data: GetNvmfNamespaceSnapshotsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<NvmfNamespaceSnapshotConnection>>;
    };
    getNvmfSubsystems: {
        getNvmfSubsystems: (data: GetNvmfSubsystemsRequestBody, params?: RequestParams) => Promise<AxiosResponse<NvmfSubsystem[]>>;
    };
    getNvmfSubsystemsConnection: {
        getNvmfSubsystemsConnection: (data: GetNvmfSubsystemsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<NvmfSubsystemConnection>>;
    };
    getOrganizations: {
        getOrganizations: (data: GetOrganizationsRequestBody, params?: RequestParams) => Promise<AxiosResponse<Organization[]>>;
    };
    getOrganizationsConnection: {
        getOrganizationsConnection: (data: GetOrganizationsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<OrganizationConnection>>;
    };
    getPmemDimms: {
        getPmemDimms: (data: GetPmemDimmsRequestBody, params?: RequestParams) => Promise<AxiosResponse<PmemDimm[]>>;
    };
    getPmemDimmsConnection: {
        getPmemDimmsConnection: (data: GetPmemDimmsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<PmemDimmConnection>>;
    };
    getRackTopoes: {
        getRackTopoes: (data: GetRackTopoesRequestBody, params?: RequestParams) => Promise<AxiosResponse<RackTopo[]>>;
    };
    getRackTopoesConnection: {
        getRackTopoesConnection: (data: GetRackTopoesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<RackTopoConnection>>;
    };
    getReportTasks: {
        getReportTasks: (data: GetReportTasksRequestBody, params?: RequestParams) => Promise<AxiosResponse<ReportTask[]>>;
    };
    getReportTasksConnection: {
        getReportTasksConnection: (data: GetReportTasksConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ReportTaskConnection>>;
    };
    getReportTemplates: {
        getReportTemplates: (data: GetReportTemplatesRequestBody, params?: RequestParams) => Promise<AxiosResponse<ReportTemplate[]>>;
    };
    getReportTemplatesConnection: {
        getReportTemplatesConnection: (data: GetReportTemplatesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ReportTemplateConnection>>;
    };
    getSnapshotGroups: {
        getSnapshotGroups: (data: GetSnapshotGroupsRequestBody, params?: RequestParams) => Promise<AxiosResponse<SnapshotGroup[]>>;
    };
    getSnapshotGroupsConnection: {
        getSnapshotGroupsConnection: (data: GetSnapshotGroupsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<SnapshotGroupConnection>>;
    };
    getSnapshotPlans: {
        getSnapshotPlans: (data: GetSnapshotPlansRequestBody, params?: RequestParams) => Promise<AxiosResponse<SnapshotPlan[]>>;
    };
    getSnapshotPlansConnection: {
        getSnapshotPlansConnection: (data: GetSnapshotPlansConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<SnapshotPlanConnection>>;
    };
    getSnapshotPlanTasks: {
        getSnapshotPlanTasks: (data: GetSnapshotPlanTasksRequestBody, params?: RequestParams) => Promise<AxiosResponse<SnapshotPlanTask[]>>;
    };
    getSnapshotPlanTasksConnection: {
        getSnapshotPlanTasksConnection: (data: GetSnapshotPlanTasksConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<SnapshotPlanTaskConnection>>;
    };
    getSnmpTransports: {
        getSnmpTransports: (data: GetSnmpTransportsRequestBody, params?: RequestParams) => Promise<AxiosResponse<SnmpTransport[]>>;
    };
    getSnmpTransportsConnection: {
        getSnmpTransportsConnection: (data: GetSnmpTransportsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<SnmpTransportConnection>>;
    };
    getSnmpTrapReceivers: {
        getSnmpTrapReceivers: (data: GetSnmpTrapReceiversRequestBody, params?: RequestParams) => Promise<AxiosResponse<SnmpTrapReceiver[]>>;
    };
    getSnmpTrapReceiversConnection: {
        getSnmpTrapReceiversConnection: (data: GetSnmpTrapReceiversConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<SnmpTrapReceiverConnection>>;
    };
    getStoragePoliciesConnector: {
        getStoragePoliciesConnector: (data: GetStoragePoliciesConnectorRequestBody, params?: RequestParams) => Promise<AxiosResponse<StoragePolicyConector[]>>;
    };
    getSvtImages: {
        getSvtImages: (data: GetSvtImagesRequestBody, params?: RequestParams) => Promise<AxiosResponse<SvtImage[]>>;
    };
    getSvtImagesConnection: {
        getSvtImagesConnection: (data: GetSvtImagesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<SvtImageConnection>>;
    };
    getSystemAuditLogs: {
        getSystemAuditLogs: (data: GetSystemAuditLogsRequestBody, params?: RequestParams) => Promise<AxiosResponse<SystemAuditLog[]>>;
    };
    getSystemAuditLogsConnection: {
        getSystemAuditLogsConnection: (data: GetSystemAuditLogsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<SystemAuditLogConnection>>;
    };
    getTasks: {
        getTasks: (data: GetTasksRequestBody, params?: RequestParams) => Promise<AxiosResponse<Task[]>>;
    };
    getTasksConnection: {
        getTasksConnection: (data: GetTasksConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<TaskConnection>>;
    };
    getUploadTasks: {
        getUploadTasks: (data: GetUploadTasksRequestBody, params?: RequestParams) => Promise<AxiosResponse<UploadTask[]>>;
    };
    getUploadTasksConnection: {
        getUploadTasksConnection: (data: GetUploadTasksConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<UploadTaskConnection>>;
    };
    getUsbDevices: {
        getUsbDevices: (data: GetUsbDevicesRequestBody, params?: RequestParams) => Promise<AxiosResponse<UsbDevice[]>>;
    };
    getUsbDevicesConnection: {
        getUsbDevicesConnection: (data: GetUsbDevicesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<UsbDeviceConnection>>;
    };
    getUserAuditLogs: {
        getUserAuditLogs: (data: GetUserAuditLogsRequestBody, params?: RequestParams) => Promise<AxiosResponse<UserAuditLog[]>>;
    };
    getUserAuditLogsConnection: {
        getUserAuditLogsConnection: (data: GetUserAuditLogsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<UserAuditLogConnection>>;
    };
    getUserRoleNexts: {
        getUserRoleNexts: (data: GetUserRoleNextsRequestBody, params?: RequestParams) => Promise<AxiosResponse<UserRoleNext[]>>;
    };
    getUserRoleNextsConnection: {
        getUserRoleNextsConnection: (data: GetUserRoleNextsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<UserRoleNextConnection>>;
    };
    getUsers: {
        getUsers: (data: GetUsersRequestBody, params?: RequestParams) => Promise<AxiosResponse<User[]>>;
    };
    getUsersConnection: {
        getUsersConnection: (data: GetUsersConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<UserConnection>>;
    };
    getVcenterAccounts: {
        getVcenterAccounts: (data: GetVcenterAccountsRequestBody, params?: RequestParams) => Promise<AxiosResponse<VcenterAccount[]>>;
    };
    getVcenterAccountsConnection: {
        getVcenterAccountsConnection: (data: GetVcenterAccountsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<VcenterAccountConnection>>;
    };
    getVdses: {
        getVdses: (data: GetVdsesRequestBody, params?: RequestParams) => Promise<AxiosResponse<Vds[]>>;
    };
    getVdsesConnection: {
        getVdsesConnection: (data: GetVdsesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<VdsConnection>>;
    };
    getViews: {
        getViews: (data: GetViewsRequestBody, params?: RequestParams) => Promise<AxiosResponse<View[]>>;
    };
    getViewsConnection: {
        getViewsConnection: (data: GetViewsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ViewConnection>>;
    };
    getVlans: {
        getVlans: (data: GetVlansRequestBody, params?: RequestParams) => Promise<AxiosResponse<Vlan[]>>;
    };
    getVlansConnection: {
        getVlansConnection: (data: GetVlansConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<VlanConnection>>;
    };
    getVmDisks: {
        getVmDisks: (data: GetVmDisksRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmDisk[]>>;
    };
    getVmDisksConnection: {
        getVmDisksConnection: (data: GetVmDisksConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmDiskConnection>>;
    };
    getVmEntityFilterResults: {
        getVmEntityFilterResults: (data: GetVmEntityFilterResultsRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmEntityFilterResult[]>>;
    };
    getVmEntityFilterResultsConnection: {
        getVmEntityFilterResultsConnection: (data: GetVmEntityFilterResultsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmEntityFilterResultConnection>>;
    };
    getVmFolders: {
        getVmFolders: (data: GetVmFoldersRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmFolder[]>>;
    };
    getVmFoldersConnection: {
        getVmFoldersConnection: (data: GetVmFoldersConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmFolderConnection>>;
    };
    getVmNics: {
        getVmNics: (data: GetVmNicsRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmNic[]>>;
    };
    getVmNicsConnection: {
        getVmNicsConnection: (data: GetVmNicsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmNicConnection>>;
    };
    getVmPlacementGroups: {
        getVmPlacementGroups: (data: GetVmPlacementGroupsRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmPlacementGroup[]>>;
    };
    getVmPlacementGroupsConnection: {
        getVmPlacementGroupsConnection: (data: GetVmPlacementGroupsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmPlacementGroupConnection>>;
    };
    getVms: {
        getVms: (data: GetVmsRequestBody, params?: RequestParams) => Promise<AxiosResponse<Vm[]>>;
    };
    getVmsConnection: {
        getVmsConnection: (data: GetVmsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmConnection>>;
    };
    getVmSnapshots: {
        getVmSnapshots: (data: GetVmSnapshotsRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmSnapshot[]>>;
    };
    getVmSnapshotsConnection: {
        getVmSnapshotsConnection: (data: GetVmSnapshotsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmSnapshotConnection>>;
    };
    getVmTemplates: {
        getVmTemplates: (data: GetVmTemplatesRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmTemplate[]>>;
    };
    getVmTemplatesConnection: {
        getVmTemplatesConnection: (data: GetVmTemplatesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmTemplateConnection>>;
    };
    getVmVolumes: {
        getVmVolumes: (data: GetVmVolumesRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmVolume[]>>;
    };
    getVmVolumesConnection: {
        getVmVolumesConnection: (data: GetVmVolumesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<VmVolumeConnection>>;
    };
    getVsphereEsxiAccounts: {
        getVsphereEsxiAccounts: (data: GetVsphereEsxiAccountsRequestBody, params?: RequestParams) => Promise<AxiosResponse<VsphereEsxiAccount[]>>;
    };
    getVsphereEsxiAccountsConnection: {
        getVsphereEsxiAccountsConnection: (data: GetVsphereEsxiAccountsConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<VsphereEsxiAccountConnection>>;
    };
    getWitnesses: {
        getWitnesses: (data: GetWitnessesRequestBody, params?: RequestParams) => Promise<AxiosResponse<Witness[]>>;
    };
    getWitnessesConnection: {
        getWitnessesConnection: (data: GetWitnessesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<WitnessConnection>>;
    };
    getZones: {
        getZones: (data: GetZonesRequestBody, params?: RequestParams) => Promise<AxiosResponse<Zone[]>>;
    };
    getZonesConnection: {
        getZonesConnection: (data: GetZonesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ZoneConnection>>;
    };
    getZoneTopoes: {
        getZoneTopoes: (data: GetZoneTopoesRequestBody, params?: RequestParams) => Promise<AxiosResponse<ZoneTopo[]>>;
    };
    getZoneTopoesConnection: {
        getZoneTopoesConnection: (data: GetZoneTopoesConnectionRequestBody, params?: RequestParams) => Promise<AxiosResponse<ZoneTopoConnection>>;
    };
    updateGlobalAlertRule: {
        updateGlobalAlertRule: (data: GlobalAlertRuleUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskGlobalAlertRule[]>>;
    };
    updateCustomizeAlertRule: {
        updateCustomizeAlertRule: (data: CustomizeAlertRuleUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskGlobalAlertRule[]>>;
    };
    resolveAlert: {
        resolveAlert: (data: ResolveAlertParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskAlert[]>>;
    };
    createBrickTopo: {
        createBrickTopo: (data: BrickTopoCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskBrickTopo[]>>;
    };
    updateBrickTopo: {
        updateBrickTopo: (data: BrickTopoUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskBrickTopo[]>>;
    };
    moveBrickTopo: {
        moveBrickTopo: (data: BrickTopoMoveParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskBrickTopo[]>>;
    };
    deleteBrickTopo: {
        deleteBrickTopo: (data: BrickTopoDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteBrickTopo[]>>;
    };
    connectCluster: {
        connectCluster: (data: ClusterCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskCluster[]>>;
    };
    updateCluster: {
        updateCluster: (data: ClusterUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskCluster[]>>;
    };
    updateClusterLicense: {
        updateClusterLicense: (data: ClusterLicenseUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskCluster[]>>;
    };
    deleteCluster: {
        deleteCluster: (data: ClusterDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteCluster[]>>;
    };
    createConsistencySnapshotGroup: {
        createConsistencyGroupSnapshot: (data: ConsistencyGroupSnapshotCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskConsistencyGroupSnapshot[]>>;
    };
    rollbackConsistencySnapshotGroup: {
        updateConsistencyGroupSnapshot: (data: ConsistencyGroupSnapshotUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskConsistencyGroupSnapshot[]>>;
    };
    deleteConsistencySnapshotGroup: {
        deleteConsistencyGroupSnapshot: (data: ConsistencyGroupSnapshotDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteConsistencyGroupSnapshot[]>>;
    };
    createConsistencyGroup: {
        createConsistencyGroup: (data: ConsistencyGroupCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskConsistencyGroup[]>>;
    };
    updateConsistencyGroup: {
        updateConsistencyGroup: (data: ConsistencyGroupUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskConsistencyGroup[]>>;
    };
    deleteConsistencyGroup: {
        deleteConsistencyGroup: (data: ConsistencyGroupDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteConsistencyGroup[]>>;
    };
    createDatacenter: {
        createDatacenter: (data: DatacenterCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskDatacenter[]>>;
    };
    updateDatacenter: {
        updateDatacenter: (data: DatacenterUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDatacenter[]>>;
    };
    deleteDatacenter: {
        deleteDatacenter: (data: DatacenterDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteDatacenter[]>>;
    };
    mountDisk: {
        mountDisk: (data: DiskMountParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDisk[]>>;
    };
    unmountDisk: {
        unmountDisk: (data: DiskUnmountParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDisk[]>>;
    };
    createEntityFilter: {
        createEntityFilter: (data: EntityFilterCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskEntityFilter[]>>;
    };
    updateEntityFilter: {
        updateEntityFilter: (data: EntityFilterUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskEntityFilter[]>>;
    };
    deleteEntityFilter: {
        deleteEntityFilter: (data: EntityFilterDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteEntityFilter[]>>;
    };
    createGraph: {
        createGraph: (data: GraphCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskGraph[]>>;
    };
    updateGraph: {
        updateGraph: (data: GraphUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskGraph[]>>;
    };
    deleteGraph: {
        deleteGraph: (data: GraphDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteGraph[]>>;
    };
    createHost: {
        createHost: (data: HostCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskBatchHosts[]>>;
    };
    triggerDiskBlink: {
        triggerDiskBlink: (data: TriggerDiskBlinkParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskHost[]>>;
    };
    updateHost: {
        updateHost: (data: HostUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskHost[]>>;
    };
    createIscsiLunSnapshot: {
        createIscsiLunSnapshot: (data: IscsiLunSnapshotCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskIscsiLunSnapshot[]>>;
    };
    deleteIscsiLunSnapshot: {
        deleteIscsiLunSnapshot: (data: IscsiLunSnapshotDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteIscsiLunSnapshot[]>>;
    };
    createIscsiLun: {
        createIscsiLun: (data: IscsiLunCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskIscsiLun[]>>;
    };
    updateIscsiLun: {
        updateIscsiLun: (data: IscsiLunUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskIscsiLun[]>>;
    };
    deleteIscsiLun: {
        deleteIscsiLun: (data: IscsiLunDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteIscsiLun[]>>;
    };
    cloneIscsiLunFromSnapshot: {
        cloneIscsiLunFromSnapshot: (data: IscsiLunCloneParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskIscsiLun[]>>;
    };
    rollbackIscsiLunFromSnapshot: {
        rollbackIscsiLunFromSnapshot: (data: IscsiLunRollbackParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskIscsiLun[]>>;
    };
    createIscsiTarget: {
        createIscsiTarget: (data: IscsiTargetCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskIscsiTarget[]>>;
    };
    updateIscsiTarget: {
        updateIscsiTarget: (data: IscsiTargetUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskIscsiTarget[]>>;
    };
    deleteIscsiTarget: {
        deleteIscsiTarget: (data: IscsiTargetDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteIscsiTarget[]>>;
    };
    uploadElfImage: {
        createElfImage: (data: {
            file: File;
            cluster_id: string;
            name: string;
            size: string;
            description: string;
            upload_task_id: string;
        }, params?: RequestParams) => Promise<AxiosResponse<UploadTask[]>>;
    };
    updateElfImage: {
        updateElfImage: (data: ElfImageUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskElfImage[]>>;
    };
    deleteElfImage: {
        deleteElfImage: (data: ElfImageDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteElfImage[]>>;
    };
    createLabel: {
        createLabel: (data: LabelCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskLabel[]>>;
    };
    updateLabel: {
        updateLabel: (data: LabelUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskLabel[]>>;
    };
    addLabelsToResources: {
        addLabelsToResources: (data: AddLabelsToResourcesParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskLabel[]>>;
    };
    removeLabelsFromResources: {
        removeLabelsFromResources: (data: RemoveLabelsFromResourcesParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskLabel[]>>;
    };
    deleteLabel: {
        deleteLabel: (data: LabelDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteLabel[]>>;
    };
    updateLicense: {
        updateDeploy: (data: LicenseUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskLicense>>;
    };
    createNamespaceGroup: {
        createNamespaceGroup: (data: NamespaceGroupCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskNamespaceGroup[]>>;
    };
    updateNamespaceGroup: {
        updateNamespaceGroup: (data: NamespaceGroupUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskNamespaceGroup[]>>;
    };
    deleteNamespaceGroup: {
        deleteNamespaceGroup: (data: NamespaceGroupDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteNamespaceGroup[]>>;
    };
    createNfsExport: {
        createNfsExport: (data: NfsExportCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskNfsExport[]>>;
    };
    updateNfsExport: {
        updateNfsExport: (data: NfsExportUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskNfsExport[]>>;
    };
    deleteNfsExport: {
        deleteNfsExport: (data: NfsExportDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteNfsExport[]>>;
    };
    updateNic: {
        updateNic: (data: NicUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskNic[]>>;
    };
    moveNodeTopo: {
        updateNodeTopo: (data: NodeTopoUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskNodeTopo[]>>;
    };
    createNvmfNamespaceSnapshot: {
        createNvmfNamespaceSnapshot: (data: NvmfNamespaceSnapshotCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskNvmfNamespaceSnapshot[]>>;
    };
    deleteNvmfNamespaceSnapshot: {
        deleteNvmfNamespaceSnapshot: (data: NvmfNamespaceSnapshotDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteNvmfNamespaceSnapshot[]>>;
    };
    createNvmfNamespace: {
        createNvmfNamespace: (data: NvmfNamespaceCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskNvmfNamespace[]>>;
    };
    updateNvmfNamespace: {
        updateNvmfNamespace: (data: NvmfNamespaceUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskNvmfNamespace[]>>;
    };
    deleteNvmfNamespace: {
        deleteNvmfNamespace: (data: NvmfNamespaceDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteNvmfNamespace[]>>;
    };
    cloneNvmfNamespaceFromSnapshot: {
        cloneNvmfNamespaceFromSnapshot: (data: NvmfNamespaceCloneParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskNvmfNamespace[]>>;
    };
    rollbackNvmfNamespaceFromSnapshot: {
        rollbackNvmfNamespaceFromSnapshot: (data: NvmfNamespaceRollbackParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskNvmfNamespace[]>>;
    };
    createNvmfSubsystem: {
        createNvmfSubsystem: (data: NvmfSubsystemCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskNvmfSubsystem[]>>;
    };
    updateNvmfSubsystem: {
        updateNvmfSubsystem: (data: NvmfSubsystemUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskNvmfSubsystem[]>>;
    };
    deleteNvmfSubsystem: {
        deleteNvmfSubsystem: (data: NvmfSubsystemDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteNvmfSubsystem[]>>;
    };
    createOrganization: {
        createOrganization: (data: OrganizationCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskOrganization[]>>;
    };
    updateOrganization: {
        updateOrganization: (data: OrganizationUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskOrganization[]>>;
    };
    deleteOrganization: {
        deleteOrganization: (data: OrganizationDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteOrganization[]>>;
    };
    createRackTopo: {
        createRackTopo: (data: RackTopoCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskRackTopo[]>>;
    };
    updateRackTopo: {
        updateRackTopo: (data: RackTopoUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskRackTopo[]>>;
    };
    deleteRackTopo: {
        deleteRackTopo: (data: RackTopoDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteRackTopo[]>>;
    };
    updateGlobalRecycleBinSetting: {
        updateGlobalRecycleBinSetting: (data: GlobalRecycleBinUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskGlobalSettings>>;
    };
    createClusterRecycleBinSetting: {
        createClusterRecycleBinSetting: (data: ClusterRecycleBinCreationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskClusterSettings[]>>;
    };
    updateClusterRecycleBinSetting: {
        updateClusterRecycleBinSetting: (data: ClusterRecycleBinUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskClusterSettings[]>>;
    };
    deleteClusterRecycleBinSetting: {
        deleteClusterRecycleBinSetting: (data: ClusterRecycleBinDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteClusterRecycleBin[]>>;
    };
    createReportTemplate: {
        createReportTemplate: (data: ReportTemplateCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskReportTemplate[]>>;
    };
    updateReportTemplate: {
        updateReportTemplate: (data: ReportTemplateUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskReportTemplate[]>>;
    };
    generateFromReportTemplate: {
        generateFromReportTemplate: (data: ReporteTemplateGenerationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskReportTask[]>>;
    };
    deleteReportTemplate: {
        deleteReportTemplate: (data: ReportTemplateDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteReportTemplate[]>>;
    };
    createRole: {
        createRole: (data: RoleCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskUserRoleNext[]>>;
    };
    updateRole: {
        updateRole: (data: RoleUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskUserRoleNext[]>>;
    };
    deleteRole: {
        deleteRole: (data: RoleDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteRole[]>>;
    };
    rollbackSnapshotGroup: {
        rollbackSnapshotGroup: (data: SnapshotGroupRollbackParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskSnapshotGroup[]>>;
    };
    cloneSnapshotGroup: {
        cloneSnapshotGroup: (data: SnapshotGroupCloneParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskSnapshotGroup[]>>;
    };
    keepSnapshotGroup: {
        keepSnapshotGroup: (data: SnapshotGroupKeepParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskSnapshotGroup[]>>;
    };
    deleteSnapshotGroup: {
        deleteSnapshotGroup: (data: SnapshotGroupDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteSnapshotGroup[]>>;
    };
    createSnapshotPlan: {
        createSnapshotPlan: (data: SnapshotPlanCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskSnapshotPlan[]>>;
    };
    updateSnapshotPlan: {
        updateSnapshotPlan: (data: SnapshotPlanUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskSnapshotPlan[]>>;
    };
    deleteSnapshotPlan: {
        deleteSnapshotPlan: (data: SnapshotPlanDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteSnapshotPlan[]>>;
    };
    executeSnapshotPlan: {
        executeSnapshotPlan: (data: SnapshotPlanExecutionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskSnapshotPlan[]>>;
    };
    suspendSnapshotPlan: {
        suspendSnapshotPlan: (data: SnapshotPlanSuspendedParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskSnapshotPlan[]>>;
    };
    resumeSnapshotPlan: {
        resumeSnapshotPlan: (data: SnapshotPlanResumeParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskSnapshotPlan[]>>;
    };
    createSnmpTransport: {
        createSnmpTransport: (data: SnmpTransportCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskSnmpTransport[]>>;
    };
    updateSnmpTransport: {
        updateSnmpTransport: (data: SnmpTransportUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskSnmpTransport[]>>;
    };
    deleteSnmpTransport: {
        deleteSnmpTransport: (data: SnmpTransportDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteSnmpTransport[]>>;
    };
    createSnmpTrapReceiver: {
        createSnmpTrapReceiver: (data: SnmpTrapReceiverCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskSnmpTrapReceiver[]>>;
    };
    updateSnmpTrapReceiver: {
        updateSnmpTrapReceiver: (data: SnmpTrapReceiverUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskSnmpTrapReceiver[]>>;
    };
    deleteSnmpTrapReceiver: {
        deleteSnmpTrapReceiver: (data: SnmpTrapReceiverDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteSnmpTrapReceiver[]>>;
    };
    mountUsbDevice: {
        mountUsbDevice: (data: UsbDeviceMountParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskUsbDevice[]>>;
    };
    unmountUsbDevice: {
        unmountUsbDevice: (data: UsbDeviceUnmountParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskUsbDevice[]>>;
    };
    login: {
        login: (data: LoginInput, params?: RequestParams) => Promise<AxiosResponse<WithTaskTokenString>>;
    };
    createUser: {
        createUser: (data: UserCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskUser[]>>;
    };
    updateUser: {
        updateUser: (data: UserUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskUser[]>>;
    };
    deleteUser: {
        deleteUser: (data: UserDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteUser[]>>;
    };
    createVdsWithMigrateVlan: {
        createVdsWithMigrateVlan: (data: VdsCreationWithMigrateVlanParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskVds[]>>;
    };
    createVdsWithAccessVlan: {
        createVdsWithAccessVlan: (data: VdsCreationWithMAccessVlanParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskVds[]>>;
    };
    createVds: {
        createVds: (data: VdsCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskVds[]>>;
    };
    updateVds: {
        updateVds: (data: VdsUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVds[]>>;
    };
    deleteVds: {
        deleteVds: (data: VdsDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteVds[]>>;
    };
    createView: {
        createView: (data: ViewCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskView[]>>;
    };
    updateView: {
        updateView: (data: ViewUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskView[]>>;
    };
    deleteView: {
        deleteView: (data: ViewDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteView[]>>;
    };
    createVmVlan: {
        createVmVlan: (data: VmVlanCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskVlan[]>>;
    };
    updateVmVlan: {
        updateVlan: (data: VmVlanUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVlan[]>>;
    };
    updateManagementVlan: {
        updateManagementVlan: (data: ManagementVlanUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVlan[]>>;
    };
    updateMigrationVlan: {
        updateMigrationVlan: (data: MigrationVlanUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVlan[]>>;
    };
    deleteVmVlan: {
        deleteVlan: (data: VlanDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteVlan[]>>;
    };
    createVmFolder: {
        createVmFolder: (data: VmFolderCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskVmFolder[]>>;
    };
    updateVmFolder: {
        updateVmFolder: (data: VmFolderUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVmFolder[]>>;
    };
    deleteVmFolder: {
        deleteVmFolder: (data: VmFolderDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteVmFolder[]>>;
    };
    createVmPlacementGroup: {
        createVmPlacementGroup: (data: VmPlacementGroupCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskVmPlacementGroup[]>>;
    };
    updateVmPlacementGroup: {
        updateVmPlacementGroup: (data: VmPlacementGroupUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVmPlacementGroup[]>>;
    };
    deleteVmPlacementGroup: {
        deleteVmPlacementGroup: (data: VmPlacementGroupDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteVmPlacementGroup[]>>;
    };
    createVmSnapshot: {
        createVmSnapshot: (data: VmSnapshotCreationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVmSnapshot[]>>;
    };
    deleteVmSnapshot: {
        deleteVmSnapshot: (data: VmSnapshotDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteVmSnapshot[]>>;
    };
    cloneVmTemplateFromVm: {
        cloneVmTemplateFromVm: (data: VmTemplateCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskVmTemplate[]>>;
    };
    convertVmTemplateFromVm: {
        convertVmTemplateFromVm: (data: VmTemplateCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskVmTemplate[]>>;
    };
    updateVmTemplate: {
        updateVmTemplateFromVm: (data: VmTemplateUpdationParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVmTemplate[]>>;
    };
    deleteVmTemplate: {
        deleteVmTemplateFromVm: (data: VmTemplateDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteVmTemplate[]>>;
    };
    createVmVolume: {
        createVmVolume: (data: VmVolumeCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskVmVolume[]>>;
    };
    deleteVmVolume: {
        deleteVmVolumeFromVm: (data: VmVolumeDeletionParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskDeleteVmVolume[]>>;
    };
    createVm: {
        createVm: (data: VmCreationParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    createVmFromTemplate: {
        createVmFromTemplate: (data: VmCreateVmFromTemplateParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    convertVmTemplateToVm: {
        convertVmTemplateToVm: (data: ConvertVmTemplateToVmParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    cloneVm: {
        cloneVm: (data: VmCloneParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    rebuildVmFromSnapshot: {
        rebuildVm: (data: VmRebuildParams[], params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    rollbackVm: {
        rollbackVm: (data: VmRollbackParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    updateVmBasicInfo: {
        updateVm: (data: VmUpdateParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    moveVmToRecycle: {
        moveVmToRecycleBin: (data: VmOperateParams, params?: RequestParams) => Promise<AxiosResponse<{
            task_id: string | null;
            data: DeleteVm | null;
        }[]>>;
    };
    recoverVmFromRecycle: {
        recoverVmFromRecycleBin: (data: VmOperateParams, params?: RequestParams) => Promise<AxiosResponse<{
            task_id: string | null;
            data: DeleteVm | null;
        }[]>>;
    };
    deleteVm: {
        deleteVm: (data: VmOperateParams, params?: RequestParams) => Promise<AxiosResponse<{
            task_id: string | null;
            data: DeleteVm | null;
        }[]>>;
    };
    startVm: {
        startVm: (data: VmStartParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    restartVm: {
        restartVm: (data: VmOperateParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    forceRestartVm: {
        forceRestartVm: (data: VmOperateParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    shutdownVm: {
        shutDownVm: (data: VmOperateParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    poweroffVm: {
        forceShutDownVm: (data: VmOperateParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    suspendVm: {
        suspendVm: (data: VmOperateParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    resumeVm: {
        resumeVm: (data: VmOperateParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    addVmDisk: {
        addVmDisk: (data: VmAddDiskParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    updateVmDisk: {
        updateVmDisk: (data: VmUpdateDiskParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    removeVmDisk: {
        removeVmDisk: (data: VmRemoveDiskParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    addVmCdRom: {
        addVmCdRom: (data: VmAddCdRomParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    removeVmCdRom: {
        removeVmCdRom: (data: VmRemoveCdRomParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    addVmNic: {
        addVmNic: (data: VmAddNicParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    updateVmNic: {
        updateVmNic: (data: VmUpdateNicParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    removeVmNic: {
        removeVmNic: (data: VmRemoveNicParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    installVmtools: {
        installVmtools: (data: InstallVmtoolsParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    migrateVm: {
        migRateVm: (data: VmMigrateParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    addVmToFolder: {
        addVmToFolder: (data: VmAddFolderParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
    removeVmFromFolder: {
        removeVmToFolder: (data: VmOperateParams, params?: RequestParams) => Promise<AxiosResponse<WithTaskVm[]>>;
    };
}
