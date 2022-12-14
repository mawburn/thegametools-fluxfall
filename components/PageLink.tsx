import Image from 'next/image'
import Link from 'next/link'

interface PageLinkProps {
  pageName: string
  url?: string
  children: string
}

const PageLink = ({ url, pageName, children }: PageLinkProps) => (
  <Link href={url ?? `/${pageName.replace('/', '')}`}>
    <a className="m-2 flex flex-col justify-center items-center flex-wrap md:max-w-xs w-full bg-white rounded-xl shadow-lg border-2 border-neutral-400 hover:shadow-black/20">
      <h3 className="text-lg text-center my-2 px-2">{pageName}</h3>
      <div className="w-full border-y border-slate-400">
        <Image
          src={`https://cdn.tabletop.media/thegame.tools/fluxfall/pages/${pageName.replace(
            '/',
            ''
          )}.webp`}
          width={640}
          height={320}
          alt={pageName}
          layout="responsive"
          loading="lazy"
        />
      </div>
      <p className="py-2 text-center ">{children}</p>
    </a>
  </Link>
)

export default PageLink
