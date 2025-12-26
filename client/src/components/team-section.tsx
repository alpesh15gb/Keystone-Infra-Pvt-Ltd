import { motion } from "framer-motion";
import { User, Award } from "lucide-react";
import EditableText from "@/components/editable-text";

interface TeamSectionProps {
  isEditMode?: boolean;
}

export function TeamSection({ isEditMode = false }: TeamSectionProps) {
  const teamMembers = [
    {
      name: "D.M. RAMESH",
      position: "Managing Director",
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
    <section id="team" className="py-20 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <EditableText
            id="team-title"
            isEditMode={isEditMode}
            element="h2"
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"
          >
            Our Leadership Team
          </EditableText>
          <EditableText
            id="team-subtitle"
            isEditMode={isEditMode}
            element="p"
            className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Experienced professionals driving excellence in infrastructure development across India
          </EditableText>
        </motion.div>



        {/* Team Members */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/10 group hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <User className="w-12 h-12 text-white" />
                </div>
                <EditableText
                  id={`team-name-${index}`}
                  isEditMode={isEditMode}
                  element="h3"
                  className="text-2xl font-bold text-orange-400 mb-2"
                >
                  {member.name}
                </EditableText>
                <EditableText
                  id={`team-position-${index}`}
                  isEditMode={isEditMode}
                  element="p"
                  className="text-orange-500 font-semibold mb-1 text-lg"
                >
                  {member.position}
                </EditableText>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300 text-sm font-medium">
                  <Award className="w-4 h-4 mr-1" />
                  {member.experience} Experience
                </div>
              </div>

              <EditableText
                id={`team-desc-${index}`}
                isEditMode={isEditMode}
                element="p"
                multiline
                className="text-gray-300 leading-relaxed mb-6 text-justify"
              >
                {member.description}
              </EditableText>

              <div className="space-y-3">
                <h4 className="font-bold text-orange-400 text-center mb-4 text-lg">
                  Key Achievements
                </h4>
                {member.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start text-gray-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span className="font-medium">{achievement}</span>
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