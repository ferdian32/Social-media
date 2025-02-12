export default function UserProfile() {
  return (
    <div className="flex gap-x-3 bg-gray-200 px-3 py-2 rounded-md">
        <div className="w-12 h-12">
          <img src="/images/image.jpg" alt="image-profile" className="w-full h-full bg-cover rounded-full"  />
        </div>
        <div>
          <h6 className="font-bold text-md">Ferdian</h6>
          <small>Web Developer</small>
        </div>
      </div>
  )
}