import { getLocale } from 'next-intl/server';


const Privacy = async () => {
    const locale = await getLocale();
    const { default: Privacy } = await import(`@/content/${locale}/privacy-policy.mdx`)
  return (
    <main className='container mx-auto mt-28 mb-10'>
        <Privacy />
    </main>
  )
}

export default Privacy