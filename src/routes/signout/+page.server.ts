import { signOut } from '$lib/auth'
import type { Actions } from './$types'
export const actions: Actions = { default: signOut }
