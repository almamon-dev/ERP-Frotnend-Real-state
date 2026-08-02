import { usersNavigation } from './AccessManagement_Users/navigation';
import { rolesNavigation } from './AccessManagement_Roles/navigation';
import { permissionsNavigation } from './AccessManagement_Permissions/navigation';
import { usergroupsNavigation } from './AccessManagement_UserGroups/navigation';
import { accesspoliciesNavigation } from './AccessManagement_AccessPolicies/navigation';

export const accessManagementNavigation = [
  ...usersNavigation,
  ...rolesNavigation,
  ...permissionsNavigation,
  ...usergroupsNavigation,
  ...accesspoliciesNavigation,
];
