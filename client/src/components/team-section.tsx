import { motion } from "framer-motion";
import { User, Award } from "lucide-react";

export function TeamSection() {
  const teamMembers = [
    {
      name: "D.M. RAMESH",
      position: "Managing Director & Founder",
      experience: "30+ years",
      description: "Founder and Managing Director with over 30 years in infrastructure and civil construction. Well respected for timely delivery and creative ideas, with expertise in every aspect of construction and development business.",
      achievements: ["Founded company in 2005", "Led numerous prestigious projects", "Industry leader in innovation"]
    },
    {
      name: "D. LAKSHMI CHOWDARY",
      position: "Director",
      experience: "15+ years",
      description: "Important asset performing full-time director role. With rationale and leadership skills, has brought significant profit and ambitious projects to Keystone Infra Pvt Ltd.",
      achievements: ["15+ years with company", "Strategic leadership", "Business growth expert"]
    },
    {
      name: "D. KARTHIK AMAR",
      position: "Director",
      experience: "3+ years",
      description: "Young entrepreneur bringing fresh perspective to decision making. Passionate about company mission and dedicated to advancing organizational goals. Currently leading housing projects across 4 states.",
      achievements: ["Leading housing projects", "Multi-state operations", "Fresh industry perspective"]
    }
  ];



  return (
    <section id="team" className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Experienced professionals driving excellence in infrastructure development across India
          </p>
        </motion.div>



        {/* Team Members */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-amber-100 border border-orange-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-700 mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-semibold mb-1">
                  {member.position}
                </p>
                <p className="text-amber-700 text-sm">
                  {member.experience} Experience
                </p>
              </div>

              <p className="text-amber-800 text-sm leading-relaxed mb-6 text-justify">
                {member.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-orange-700 text-sm mb-3 text-center">
                  Key Achievements:
                </h4>
                {member.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start justify-center text-sm text-amber-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-1"></div>
                    <span className="text-center">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}