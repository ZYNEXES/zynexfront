type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  return {
    title: `Reading post: ${slug}`,
  }
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Params
}) {
  const { slug } = await params
  return <>{children} <p hidden>{slug}</p></>
}
