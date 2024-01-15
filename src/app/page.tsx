import TopicCreateForm from "@/components/topics/topicCreateForm"
export default function Home() {
  return <div className="grid grid-cols-4 gap-4 p-4">
    <div className="col-span-3">
      <h2 className="text-xl m-2"> POSTS</h2>
    </div>
    <div>
      <TopicCreateForm />
    </div>
  </div>
}