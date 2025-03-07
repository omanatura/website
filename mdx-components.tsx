import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    p: (({children})=>(<p className='text-justify'>{children}</p>)),
    h3: (({children})=>(<h3 className='text-3xl text-center text-primary font-extrabold mb-5'><span className='border-b-4 border-secondary w-fit'>{children}</span></h3>)),
    h4: (({children})=>(<div className='flex items-center text-2xl my-5 font-bold text-primary'>{children}</div>)),
    ul: (({children})=>(<ul className='list-disc'>{children}</ul>))
  }
}