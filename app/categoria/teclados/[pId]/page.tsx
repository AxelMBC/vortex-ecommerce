export default async function Page({
    params,
  }: {
    params: Promise<{ pId: string }>
  }) {
    const { pId } = await params
    return <div>My Post: {pId}</div>
  }