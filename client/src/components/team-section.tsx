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
    <section id="team" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
              className="bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  {member.position}
                </p>
                <p className="text-orange-600 dark:text-orange-400 text-sm">
                  {member.experience} Experience
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {member.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">
                  Key Achievements:
                </h4>
                {member.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    {achievement}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Best Contractor - Manipur</h4>
              <p className="text-blue-100">Awarded in 2023</p>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Best Contractor - Chhattisgarh</h4>
              <p className="text-orange-100">Awarded in 2017-2018</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}