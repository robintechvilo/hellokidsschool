import type { Access, FieldAccess } from "payload";

export type Role = "super-admin" | "admin" | "editor";

type U = { role?: Role } | null | undefined;
const role = (user: unknown) => (user as U)?.role;

export const isSuperAdmin = (user: unknown) => role(user) === "super-admin";
export const isAdminUser = (user: unknown) => ["super-admin", "admin"].includes(role(user) ?? "");
export const isStaff = (user: unknown) => !!role(user);

export const anyone: Access = () => true;
export const superAdmins: Access = ({ req }) => isSuperAdmin(req.user);
export const admins: Access = ({ req }) => isAdminUser(req.user);
/** Any logged-in staff (super-admin, admin or editor). */
export const staff: Access = ({ req }) => isStaff(req.user);

/** Admins see everyone; others only themselves. */
export const adminsOrSelf: Access = ({ req }) => {
  if (isAdminUser(req.user)) return true;
  if (req.user) return { id: { equals: req.user.id } };
  return false;
};

export const superAdminField: FieldAccess = ({ req }) => isSuperAdmin(req.user);
