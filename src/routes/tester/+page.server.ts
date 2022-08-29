import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, routeId, url, getClientAddress, locals, platform, request }) => {

    console.log({ url});
	const clientAddress = getClientAddress();
	const foo = "bar";

	return {
		foo,
        clientAddress,
	}
}