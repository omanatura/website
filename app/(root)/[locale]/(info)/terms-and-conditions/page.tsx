import { getLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(){
    const t = await getTranslations("footer");
    return {
        title: `${t('terms')} - OMA Natura Costa Rica`
    };
  }

const Terms = async () => {
    const locale = await getLocale();
    const { default: Terms } = await import(`@/content/${locale}/terms-and-conditions.mdx`)
  return (
    <main className='container mx-auto px-5 mt-28 mb-10'>
        <Terms />
    </main>
  )
}

export default Terms