export default function FounderMessage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">👤</span>
        <h2 className="text-2xl font-bold text-gray-800">Message from the Founder</h2>
      </div>

      {/* Founder Info */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">Arka Sadhu, Founder – EduStarr</h3>
      </div>

      {/* Quote/Message */}
      <div className="bg-gray-50 border-l-4 border-blue-500 p-6 mb-8">
        <blockquote className="text-gray-700 leading-relaxed">
          <p className="mb-4">
            "EduStarr is not just a platform; it's a mission. I started EduStarr with one belief — that every student
            deserves a fair chance to prove their potential, no matter where they come from.
          </p>
          <p className="mb-4">
            As someone who has walked the same path of struggle, confusion, and ambition, I built this platform to
            support students like you — with clarity, fairness, and real opportunity.
          </p>
          <p className="font-medium text-gray-800">Your growth is my priority. Your success is our shared mission."</p>
        </blockquote>
      </div>

      {/* Contact Information */}
      <div className="border-t pt-6">
        <div className="flex flex-wrap gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Based in India</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📧</span>
            <a href="mailto:support@edustarr.in" className="text-blue-600 hover:text-blue-800 transition-colors">
              support@edustarr.in
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>📱</span>
            <a href="tel:+919065186488" className="text-blue-600 hover:text-blue-800 transition-colors">
              +91 90651 86488
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
