import type { CollectionConfig } from "payload";
import { adminsOrSelf, isSuperAdmin, superAdminField, superAdmins } from "../access";
import { GROUPS } from "../groups";

export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "User", plural: "Users" },
  admin: { useAsTitle: "name", defaultColumns: ["name", "email", "role"], group: GROUPS.settings, description: "Staff who can log in. Only a Super Admin can add or remove users." },
  auth: {
    maxLoginAttempts: 5,
    lockTime: 15 * 60 * 1000,
    tokenExpiration: 60 * 60 * 8,
  },
  access: {
    read: adminsOrSelf,
    create: superAdmins,
    delete: superAdmins,
    update: ({ req }) => (isSuperAdmin(req.user) ? true : req.user ? { id: { equals: req.user.id } } : false),
    admin: ({ req }) => !!req.user,
  },
  hooks: {
    beforeChange: [
      // The very first account becomes Super Admin so nobody gets locked out.
      async ({ data, operation, req }) => {
        if (operation === "create") {
          const { totalDocs } = await req.payload.count({ collection: "users", overrideAccess: true });
          if (totalDocs === 0) data.role = "super-admin";
        }
        return data;
      },
    ],
  },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      saveToJWT: true,
      access: { update: superAdminField, create: superAdminField },
      options: [
        { label: "Super Admin — everything", value: "super-admin" },
        { label: "Admin — content, offers, leads", value: "admin" },
        { label: "Editor — events, gallery, media", value: "editor" },
      ],
      admin: { position: "sidebar" },
    },
  ],
};
