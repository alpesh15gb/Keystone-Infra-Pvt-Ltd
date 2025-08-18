import { motion } from "framer-motion";
import { MapPin, Clock, Users, Calendar, ChevronRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: "Site Engineer - Bridge Construction",
      department: "Engineering",
      location: "Manipur, India",
      type: "Full-time",
      experience: "2-4 years",
      postedDate: "2025-01-15",
      description: "Lead on-site construction activities for bridge projects, ensuring quality standards and safety protocols.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "2-4 years experience in bridge construction",
        "Knowledge of construction safety protocols",
        "Strong leadership and communication skills"
      ],
      responsibilities: [
        "Supervise daily construction activities",
        "Ensure quality control and safety compliance",
        "Coordinate with project teams and stakeholders",
        "Monitor project progress and timelines"
      ]
    },
    {
      id: 2,
      title: "Project Manager - Highway Infrastructure",
      department: "Project Management",
      location: "Bihar, India",
      type: "Full-time",
      experience: "5-8 years",
      postedDate: "2025-01-10",
      description: "Manage large-scale highway infrastructure projects from planning to completion.",
      requirements: [
        "Bachelor's/Master's degree in Civil Engineering",
        "5-8 years experience in highway projects",
        "PMP certification preferred",
        "Excellent project management skills"
      ],
      responsibilities: [
        "Plan and execute highway construction projects",
        "Manage project budgets and timelines",
        "Lead cross-functional teams",
        "Ensure regulatory compliance"
      ]
    },
    {
      id: 3,
      title: "Quality Control Engineer",
      department: "Quality Assurance",
      location: "Chhattisgarh, India",
      type: "Full-time",
      experience: "1-3 years",
      postedDate: "2025-01-08",
      description: "Ensure construction quality standards and compliance across all project phases.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "1-3 years experience in quality control",
        "Knowledge of IS codes and standards",
        "Attention to detail and analytical skills"
      ],
      responsibilities: [
        "Conduct quality inspections and testing",
        "Prepare quality reports and documentation",
        "Implement quality assurance protocols",
        "Coordinate with contractors and suppliers"
      ]
    },
    {
      id: 4,
      title: "Civil Engineer - Building Construction",
      department: "Engineering",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "1-3 years",
      postedDate: "2025-01-05",
      description: "Design and oversee construction of government and institutional buildings.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "1-3 years experience in building construction",
        "Proficiency in AutoCAD and design software",
        "Strong technical and problem-solving skills"
      ],
      responsibilities: [
        "Create detailed construction drawings",
        "Supervise building construction activities",
        "Ensure structural integrity and safety",
        "Collaborate with architects and contractors"
      ]
    }
  ];

  const benefits = [
    "Competitive salary packages",
    "Health insurance coverage",
    "Performance-based bonuses",
    "Professional development opportunities",
    "Work-life balance",
    "Growth and career advancement"
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 to-orange-50/20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
              Build your career with Keystone Infra and be part of India's infrastructure transformation. 
              We offer exciting opportunities for growth and professional development.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-orange-100">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                <span>12+ States Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                <span>600+ Projects Completed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Current Openings
            </h2>
            <p className="text-xl text-amber-900 max-w-3xl mx-auto">
              Explore exciting career opportunities across various departments and locations
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-orange-600">
                          {job.title}
                        </h3>
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-6 mb-6 text-amber-800">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Posted: {formatDate(job.postedDate)}</span>
                        </div>
                      </div>

                      <p className="text-amber-900 text-lg mb-6 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-orange-600 mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-amber-800">
                                <ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-orange-600 mb-3">Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-amber-800">
                                <ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-64 flex flex-col gap-4">
                      <Button 
                        className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Apply Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-orange-300 text-orange-600 hover:bg-orange-50 py-3 px-6 rounded-xl"
                      >
                        Save Job
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why Work With Us?
            </h2>
            <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto">
              We believe in nurturing talent and providing our employees with the best working environment and growth opportunities
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/20"
                >
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-6 h-6 text-orange-200" />
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Ready to Join Us?
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100">
              <p className="text-xl text-amber-900 mb-8 leading-relaxed">
                Don't see the right position? Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="mailto:careers@keystoneinfra.com" 
                  className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  careers@keystoneinfra.com
                </a>
                
                <a 
                  href="tel:+919393645644" 
                  className="flex items-center gap-3 border-2 border-orange-300 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +91 93936 45644
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}