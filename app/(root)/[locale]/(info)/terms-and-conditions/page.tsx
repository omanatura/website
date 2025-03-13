import { getLocale } from 'next-intl/server';


const Terms = async () => {
    const locale = await getLocale();
    const { default: Terms } = await import(`@/content/${locale}/terms-and-conditions.mdx`)
  return (
    <main className='container mx-auto mt-28 mb-10'>
        <Terms />
    </main>
  )
}

export default Terms