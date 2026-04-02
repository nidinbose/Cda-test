'use client'

export default function Footer() {
  return (
    <footer className="bg-[#8757A6] text-white px-6 md:px-16 py-16">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LEFT - CONTACT */}
        <div className="space-y-4 text-sm leading-relaxed text-white/90">
          <p>
            YMCA Cross Rd, Kozhikode,<br />
            Kerala 673001
          </p>

          <p>mail@quadcubes.com</p>
          <p>+91 90480 22885</p>
        </div>

        {/* CMS STORY */}
        <div>
          <h3 className="font-semibold mb-4">The CMS story</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>About CMS</li>
            <li>Students work</li>
            <li>Our team</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* COURSES */}
        <div>
          <h3 className="font-semibold mb-4">Our course</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Content creation</li>
            <li>Art direction</li>
            <li>Digital marketing</li>
            <li>Traditional marketing</li>
            <li>SEO</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-semibold mb-4">Social media platforms</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Linked in</li>
            <li>Youtube</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Email</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}