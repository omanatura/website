import { getLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(){
  const t = await getTranslations("footer");
  return {
      title: `${t('cancellationPolicy')} - OMA Natura Costa Rica`
  };
}

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