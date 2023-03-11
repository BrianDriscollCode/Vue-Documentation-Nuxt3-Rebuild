import { gql } from "~~/.nuxt/imports";

export const all_users = () => {
    return gql`
	{
		user {
			first_name,
			account_type,
			email
		}
	}`;
};

export const all_usernames = () => {
    return gql`
	{
		user {
			first_name
		}
	}`;
};





