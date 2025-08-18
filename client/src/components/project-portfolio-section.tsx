import { motion } from "framer-motion";
import { useState } from "react";
import { Play, MapPin, Calendar, Users, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectVideo {
  id: string;
  title: string;
  description: string;
  location: string;
  year: string;
  category: string;
  youtubeUrl: string;
  thumbnailUrl?: string;
  duration?: string;
  stats?: {
    value: string;
    budget: string;
    team: string;
  };
}

interface ProjectPortfolioProps {
  projects: ProjectVideo[];
}

export function ProjectPortfolioSection({ projects = [] }: ProjectPortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectVideo | null>(null);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  // Get YouTube thumbnail URL
  const getYouTubeThumbnail = (url: string, quality = 'maxresdefault') => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/${quality}.jpg` : null;
  };

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  // Filter projects by category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-amber-50/30 to-orange-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Project Portfolio
          </h2>
          <p className="text-xl text-amber-900 max-w-3xl mx-auto leading-relaxed">
            Explore our infrastructure excellence through comprehensive project documentation and 
            behind-the-scenes insights into our construction achievements.
          </p>
        </motion.div>

        {/* Category Filter */}
        {categories.length > 1 && (
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                    : 'bg-white/80 text-amber-800 hover:bg-orange-50 border border-orange-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-orange-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden">
                  {getYouTubeThumbnail(project.youtubeUrl) ? (
                    <img
                      src={getYouTubeThumbnail(project.youtubeUrl) || ''}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-200 to-orange-200">
                      <Play className="text-amber-600" size={48} />
                    </div>
                  )}
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-orange-600 ml-1" size={24} />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  {project.duration && (
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                      {project.duration}
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-600 mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-amber-800 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-amber-700">
                      <MapPin size={14} className="mr-2 text-orange-500" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-xs text-amber-700">
                      <Calendar size={14} className="mr-2 text-orange-500" />
                      {project.year}
                    </div>
                  </div>

                  {/* Project Stats */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-xs text-amber-600 font-medium">Value</div>
                        <div className="text-xs text-orange-700 font-bold">{project.stats.value}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-amber-600 font-medium">Budget</div>
                        <div className="text-xs text-orange-700 font-bold">{project.stats.budget}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-amber-600 font-medium">Team</div>
                        <div className="text-xs text-orange-700 font-bold">{project.stats.team}</div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      onClick={() => window.open(project.youtubeUrl, '_blank')}
                      className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm py-2"
                    >
                      <Play size={14} className="mr-2" />
                      Watch Video
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedProject(project)}
                      className="border-orange-300 text-orange-600 hover:bg-orange-50 text-sm py-2 px-3"
                    >
                      <ExternalLink size={14} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Placeholder when no projects */
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="text-orange-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Project Videos Coming Soon</h3>
            <p className="text-amber-800 max-w-md mx-auto">
              We're preparing comprehensive video documentation of our infrastructure projects. 
              Check back soon for detailed project showcases.
            </p>
          </motion.div>
        )}

        {/* Project Detail Modal would go here if needed */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-orange-600">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <p className="text-amber-800 mb-4">{selectedProject.description}</p>
                <div className="flex justify-center">
                  <Button
                    onClick={() => window.open(selectedProject.youtubeUrl, '_blank')}
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                  >
                    <Play size={16} className="mr-2" />
                    Watch on YouTube
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}