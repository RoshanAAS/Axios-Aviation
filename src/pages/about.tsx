import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container py-16 px-4 md:px-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight text-center">
        Axios Aviation Services Pvt. Ltd.
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
        <div className="animate__animated animate__fadeIn animate__delay-1s">
          <p className="text-gray-600 text-base md:text-lg mb-4 leading-relaxed">
            Axios Aviation Services Pvt. Ltd., an Air Cargo Chartering Company formed in 1999, with a head office in Delhi, primarily aimed to meet the needs of the Ministry of Defence. We work closely with the Indian Air Force, Indian Navy, Indian Army, and Indian Space Research Organization, with all necessary approvals from various government agencies, including the Director General of Civil Aviation.
          </p>
          <p className="text-gray-600 text-base md:text-lg mb-4 leading-relaxed">
            Over the years, we've partnered with leading Air Cargo and Aircraft Handling companies across major cities like Delhi, Mumbai, Bangalore, Chennai, and Kolkata, ensuring efficient services to our esteemed clients. With a fleet that includes AN124, IL76, IL18, AN12, and Boeing 747, we excel in handling special cargo with utmost care and efficiency.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our services also extend to worldwide freight forwarding and specialized support for non-scheduled flights, including permit acquisition, technical services, VIP/VVIP flights, and more.
          </p>
        </div>
        <div className="animate__animated animate__fadeIn animate__delay-2s">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Corporate Team"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              To provide unparalleled aviation experiences through exceptional service, safety, and luxury.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Our Vision</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              To be the global leader in premium private aviation services.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Our Values</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Safety, Excellence, Innovation, and a Customer-First approach.
            </p>
          </CardContent>
        </Card>
      </div>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 text-center animate__animated animate__fadeIn">
          Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="bg-white p-4 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeIn animate__delay-1s">
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Operations Team"
                className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
              />
              <CardContent>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">OPERATIONS TEAM MEMBERS</h3>
                <p className="text-gray-600 mb-2">Experienced and Professional Team Members</p>
                <p className="text-gray-600 mb-2">Fully equipped with knowledge and experienced veterans – fulltime Directors.</p>
                <p className="text-gray-600 mb-2">Staff with Excellent Communication skills.</p>
                <p className="text-gray-600 mb-2">Supervisor on ground for Pan India and Global partners.</p>
                <p className="text-gray-600 mb-2">All staff members hold a good command in speaking English & Hindi.</p>
                <p className="text-gray-600">24/7 operational team members for all services.</p>
              </CardContent>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="bg-white p-4 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeIn animate__delay-2s">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Team Collaboration"
                className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
              />
              <CardContent>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">OUR TEAM CULTURE</h3>
                <p className="text-gray-600 mb-2">Commitment to Excellence</p>
                <p className="text-gray-600 mb-2">We encourage innovation, collaboration, and a culture of continuous improvement.</p>
                <p className="text-gray-600 mb-2">With a focus on customer-first, we ensure efficiency and top-notch service across all levels.</p>
              </CardContent>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="bg-white p-4 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeIn animate__delay-3s">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Team Collaboration"
                className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
              />
              <CardContent>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">DEDICATED AND RESPONSIBLE</h3>
                <p className="text-gray-600 mb-2">Passionate Staff and Hardworking Leaders</p>
                <p className="text-gray-600 mb-2">We believe in responsibility and accountability to deliver the best to our clients.</p>
                <p className="text-gray-600">Every member of our team is committed to ensuring seamless operations 24/7.</p>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
