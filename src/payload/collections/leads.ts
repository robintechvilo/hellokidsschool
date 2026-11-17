import type { CollectionConfig } from "payload";
import { admins } from "../access";
import { internalNotes, leadStatus } from "../fields";

/** Leads are created only by the website forms (server-side, overrideAccess). */
const leadAccess = { read: admins, update: admins, delete: admins, create: () => false };
const leadAdmin = { group: "Leads", listSearchableFields: ["parentName", "name", "phone", "email", "childName"] };

export const Admissions: CollectionConfig = {
  slug: "admissions",
  labels: { singular: "Admission Inquiry", plural: "Admission Inquiries" },
  admin: { ...leadAdmin, useAsTitle: "childName", defaultColumns: ["childName", "className", "parentName", "phone", "status", "createdAt"] },
  access: leadAccess,
  defaultSort: "-createdAt",
  fields: [
    { type: "row", fields: [
      { name: "parentName", type: "text", required: true },
      { name: "phone", type: "text", required: true },
      { name: "email", type: "email" },
    ] },
    { type: "row", fields: [
      { name: "childName", type: "text", required: true },
      { name: "childDob", label: "Date of birth", type: "text", required: true },
      { name: "className", label: "Class", type: "text", required: true },
    ] },
    { name: "message", type: "textarea" },
    leadStatus(["New", "Contacted", "Visited", "Admitted", "Closed"]),
    internalNotes,
  ],
};

export const VisitBookings: CollectionConfig = {
  slug: "visit-bookings",
  labels: { singular: "Visit Booking", plural: "Visit Bookings" },
  admin: { ...leadAdmin, useAsTitle: "name", defaultColumns: ["name", "phone", "date", "time", "status", "createdAt"] },
  access: leadAccess,
  defaultSort: "-createdAt",
  fields: [
    { type: "row", fields: [
      { name: "name", type: "text", required: true },
      { name: "phone", type: "text", required: true },
    ] },
    { type: "row", fields: [
      { name: "date", label: "Preferred date", type: "text", required: true },
      { name: "time", label: "Preferred time", type: "text", required: true },
      { name: "children", label: "No. of children", type: "number", defaultValue: 1 },
    ] },
    leadStatus(["New", "Confirmed", "Visited", "No show", "Cancelled"]),
    internalNotes,
  ],
};

export const Messages: CollectionConfig = {
  slug: "messages",
  labels: { singular: "Contact Message", plural: "Contact Messages" },
  admin: { ...leadAdmin, useAsTitle: "name", defaultColumns: ["name", "phone", "status", "createdAt"] },
  access: leadAccess,
  defaultSort: "-createdAt",
  fields: [
    { type: "row", fields: [
      { name: "name", type: "text", required: true },
      { name: "phone", type: "text", required: true },
      { name: "email", type: "email" },
    ] },
    { name: "message", type: "textarea", required: true },
    leadStatus(["New", "Replied", "Closed"]),
    internalNotes,
  ],
};
