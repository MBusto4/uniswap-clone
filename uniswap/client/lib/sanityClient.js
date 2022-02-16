import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'p4uxf98j',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'sknOFygBgyZfrb15azYReKkvbUk7HUCEM5ZkSNrex3UEa6Oqx7ivq1mWdKxHoZFj3NdzfwONJqpPakKkABIgTqyyHveQSt9OuBZV6jEpphLJErYWDyCnfxmTmtDRdMJARdEKjIt8YTZWT7PPuxRA4hQJSUJbATLpDBSqjwebu4lcQDKEYPJ4',
    useCdn: false,
})