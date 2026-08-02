export interface AdminSubmoduleConfig {
  id: string;
  label: string;
  path: string;
  icon?: string;
  permission?: string;
}

export interface EnterpriseBranch {
  id: string;
  name: string;
  code: string;
  isHeadquarters: boolean;
}
