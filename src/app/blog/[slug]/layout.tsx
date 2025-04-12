import { use } from 'react'
 
type Params = Promise<{ slug: string }>
 
export default function Layout(props: {
  children: React.ReactNode
  params: Params
}) {
  const params = use(props.params)
  const slug = params.slug
  return <p hidden>{slug}</p>
}