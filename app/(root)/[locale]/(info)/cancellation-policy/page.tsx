import { getLocale } from 'next-intl/server';


const CancellationPolicy = async () => {
    const locale = await getLocale();
    const { default: CancellationPolicy } = await import(`@/content/${locale}/cancellation-policy.mdx`)
  return (
    <main className='container mx-auto mt-28 mb-10'>
        <CancellationPolicy />
    </main>
  )
}

export default CancellationPolicy