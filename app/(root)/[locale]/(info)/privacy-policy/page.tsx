import { getLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(){
    const t = await getTranslations("footer");
    return {
        title: `${t('privacy')} - OMA Natura Costa Rica`
    };
  }

const Privacy = async () => {
    const locale = await getLocale();
    const { default: Privacy } = await import(`@/content/${locale}/privacy-policy.mdx`)
  return (
    <main className='container mx-auto px-5 mt-28 mb-10'>
        <Privacy />
    </main>
  )
}

export default Privacy