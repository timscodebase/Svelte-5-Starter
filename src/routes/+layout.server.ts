import type { LayoutServerLoad } from './$types'
import type { PageServerLoad } from './$types'
import { redirect } from '@sveltejs/kit'

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.auth()
	if (!session?.user) throw redirect(303, '/auth')
	return {}
}
