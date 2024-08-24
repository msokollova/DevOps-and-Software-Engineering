variable "resource_group_name" {
  type        = string
  description = "The name of the resource group"
}

variable "resource_group_location" {
  type        = string
  description = "The location of the resource"
}

variable "app_service_plan_name" {
  type        = string
  description = "The name of the service plan"
}

variable "app_service_name" {
  type        = string
  description = "The name of the application"
}

variable "sql_server_name" {
  type        = string
  description = "The name of the SQL server"
}

variable "sql_database_name" {
  type        = string
  description = "The name of the SQL database"
}

variable "sql_admin_login" {
  type        = string
  description = "The admin user"
}

variable "sql_admin_password" {
  type        = string
  description = "The admin password"
}

variable "firewall_rule_name" {
  type        = string
  description = "The firewall rulle"
}

variable "repo_url" {
  type        = string
  description = "The repo url"
}