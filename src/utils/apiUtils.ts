import { Contact } from "@prisma/client";

const API_URL = "/api/contact";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchAPI = async (url: string, options: RequestInit) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const getAllContacts: () => Promise<{
  success: boolean;
  contacts: Contact[];
}> = async () => {
  return fetchAPI(`${BASE_URL}${API_URL}/get`, {
    method: "GET",
  });
};

export const createContact: (
  formData: FormData,
) => Promise<{ success: boolean; user: Contact }> = async (
  formData: FormData,
) => {
  return fetchAPI(`${BASE_URL}${API_URL}/create`, {
    method: "POST",
    body: formData,
  });
};

export const editContact: (
  formData: FormData,
) => Promise<{ success: boolean; user: Contact }> = async (
  formData: FormData,
) => {
  return fetchAPI(`${BASE_URL}${API_URL}/edit`, {
    method: "PUT",
    body: formData,
  });
};

export const deleteContact: (
  id: number,
) => Promise<{ success: boolean }> = async (id: number) => {
  return fetchAPI(`${BASE_URL}${API_URL}/delete`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
