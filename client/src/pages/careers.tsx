import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { JobApplicationModal } from "@/components/job-application-modal";
import { MapPin, Clock, Users, Calendar, ChevronRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Careers() {
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleApplyNow = (jobId: number) => {
    setSelectedJobId(jobId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJobId(null);
  };

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Architect",
      department: "UX/Design & Architecture",
      location: "Delhi/Manipur",
      type: "Full-time",
      experience: "10-12 Years",
      postedDate: "2025-01-15",
      description: "Lead architectural design and construction projects with expertise in working drawings and construction detailing.",
      requirements: [
        "UG in B.Arch in any specialization",
        "Experience of Working Drawings/Construction Drawings And Detailing Required For Site",
        "Awareness of Plot Plan, Buildings In Plant [ Substation, Control Room, Warehouses]",
        "Knowledge of Civil Drawings Reading Formwork Drawings",
        "Knowledge About Architectural Elements And Materials E.G. Walls/Floors/Ceiling/Roof/Waterproofing/Blast Door/Fire Doors/Fire Walls",
        "Awareness About Model Reviews Management/Clash Check",
        "Awareness About Revit/3-D Bim Platforms",
        "Knowledge Of Local/Indian Standards/International Standards",
        "Awareness About Architectural Mto",
        "Awareness Of Software like AutoCAD",
        "Coordination with Clients and HO team"
      ],
      responsibilities: [
        "Taking instructions and comments from client and sharing the same with design team",
        "Preparation of architecture design and drawings",
        "Plan and conduct modifications in working drawings",
        "Monitor design process from conception to construction administration to ensure consistency of design idea",
        "Coordination with structural, survey, MEP etc. consultants, checking and doing necessary modifications in drawings",
        "Attend field reviews, on-site meetings and project meetings and coordinate schedule reviews",
        "Coordination of drawings as well as for instructions or changes for site",
        "Comfortable in travelling to other cities for Projects and Site visits"
      ]
    },
    {
      id: 2,
      title: "Architect",
      department: "UX/Design & Architecture",
      location: "Delhi/Manipur",
      type: "Full-time",
      experience: "6-8 Years",
      postedDate: "2025-01-10",
      description: "Design and coordinate architectural projects with focus on construction drawings and site coordination.",
      requirements: [
        "UG in B.Arch in any specialization",
        "Experience of Working Drawings/Construction Drawings And Detailing Required For Site",
        "Awareness of Plot Plan, Buildings In Plant [ Substation, Control Room, Warehouses]",
        "Knowledge of Civil Drawings Reading Formwork Drawings",
        "Knowledge About Architectural Elements And Materials E.G. Walls/Floors/Ceiling/Roof/Waterproofing/Blast Door/Fire Doors/Fire Walls",
        "Awareness About Model Reviews Management/Clash Check",
        "Awareness About Revit/3-D Bim Platforms",
        "Knowledge Of Local/Indian Standards/International Standards",
        "Awareness About Architectural Mto",
        "Awareness Of Software like AutoCAD",
        "Coordination with Clients and HO team"
      ],
      responsibilities: [
        "Taking instructions and comments from client and sharing the same with design team",
        "Preparation of architecture design and drawings",
        "Plan and conduct modifications in working drawings",
        "Monitor design process from conception to construction administration to ensure consistency of design idea",
        "Coordination with structural, survey, MEP etc. consultants, checking and doing necessary modifications in drawings",
        "Attend field reviews, on-site meetings and project meetings and coordinate schedule reviews",
        "Coordination of drawings as well as for instructions or changes for site",
        "Comfortable in travelling to other cities for Projects and Site visits"
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

  const selectedJob = selectedJobId ? jobOpenings.find(job => job.id === selectedJobId) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 to-orange-50/20">
      <Navigation />
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
                        onClick={() => handleApplyNow(job.id)}
                        className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        data-testid={`button-apply-${job.id}`}
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

      <Footer />

      {/* Job Application Modal */}
      {selectedJob && (
        <JobApplicationModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          jobTitle={selectedJob.title}
          jobId={selectedJob.id}
        />
      )}
    </div>
  );
}