import zod from 'zod'

export const loginWithCredentialSchema = zod.object({
    phone : zod.string().max(10),
    password : zod.string()
})

export type loginWithCredential = zod.infer<typeof loginWithCredentialSchema> 