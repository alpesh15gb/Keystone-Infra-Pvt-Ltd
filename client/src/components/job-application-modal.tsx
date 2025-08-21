import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Upload, X, FileText, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

const applicationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  experience: z.string().min(1, "Please select your experience level"),
  currentLocation: z.string().min(2, "Please enter your current location"),
  expectedSalary: z.string().optional(),
  coverLetter: z.string().min(50, "Please write at least 50 characters about yourself"),
  resume: z.any().optional()
});

type ApplicationForm = z.infer<typeof applicationSchema>;

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobId: number;
}

export function JobApplicationModal({ isOpen, onClose, jobTitle, jobId }: JobApplicationModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();
  
  const form = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      currentLocation: "",
      expectedSalary: "",
      coverLetter: "",
    },
  });

  const submitApplication = useMutation({
    mutationFn: async (data: ApplicationForm & { jobTitle: string; jobId: number; resume?: File }) => {
      const formData = new FormData();
      formData.append('fullName', data.fullName);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('experience', data.experience);
      formData.append('currentLocation', data.currentLocation);
      formData.append('expectedSalary', data.expectedSalary || '');
      formData.append('coverLetter', data.coverLetter);
      formData.append('jobTitle', data.jobTitle);
      formData.append('jobId', data.jobId.toString());
      
      if (selectedFile) {
        formData.append('resume', selectedFile);
      }

      const response = await fetch('/api/job-applications', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit application');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted",
        description: "Thank you for your application. We'll review it and get back to you soon.",
      });
      form.reset();
      setSelectedFile(null);
      onClose();
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
      console.error('Application submission error:', error);
    }
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File Too Large",
          description: "Please select a file smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }
      
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF or Word document.",
          variant: "destructive",
        });
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const onSubmit = (data: ApplicationForm) => {
    submitApplication.mutate({
      ...data,
      jobTitle,
      jobId,
      resume: selectedFile || undefined,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-orange-600">
            Apply for {jobTitle}
          </DialogTitle>
          <DialogDescription className="text-amber-700">
            Please fill out the form below to submit your application. All fields marked with * are required.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-orange-600">Full Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your full name" 
                        {...field}
                        className="border-orange-200 focus:border-orange-400"
                        data-testid="input-fullname"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-orange-600">Email Address *</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        {...field}
                        className="border-orange-200 focus:border-orange-400"
                        data-testid="input-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-orange-600">Phone Number *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+91 9876543210" 
                        {...field}
                        className="border-orange-200 focus:border-orange-400"
                        data-testid="input-phone"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-orange-600">Experience Level *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-orange-200 focus:border-orange-400" data-testid="select-experience">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-8">6-8 years</SelectItem>
                        <SelectItem value="9-12">9-12 years</SelectItem>
                        <SelectItem value="13+">13+ years</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="currentLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-orange-600">Current Location *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="City, State" 
                        {...field}
                        className="border-orange-200 focus:border-orange-400"
                        data-testid="input-location"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="expectedSalary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-orange-600">Expected Salary (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="₹ per annum" 
                        {...field}
                        className="border-orange-200 focus:border-orange-400"
                        data-testid="input-salary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Resume Upload */}
            <div className="space-y-2">
              <Label className="text-orange-600">Resume/CV (Optional)</Label>
              <div className="border-2 border-dashed border-orange-200 rounded-lg p-6 text-center">
                {selectedFile ? (
                  <div className="flex items-center justify-between bg-orange-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-orange-600" />
                      <span className="text-sm text-amber-800">{selectedFile.name}</span>
                      <span className="text-xs text-amber-600">
                        ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={removeFile}
                      className="text-red-500 hover:text-red-700"
                      data-testid="button-remove-file"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                    <p className="text-amber-700 mb-2">Upload your resume (PDF, DOC, DOCX)</p>
                    <p className="text-sm text-amber-600 mb-4">Maximum file size: 5MB</p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="resume-upload"
                      data-testid="input-resume"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('resume-upload')?.click()}
                      className="border-orange-300 text-orange-600 hover:bg-orange-50"
                      data-testid="button-upload-resume"
                    >
                      Choose File
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <FormField
              control={form.control}
              name="coverLetter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-orange-600">Cover Letter / About Yourself *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about yourself, your experience, and why you're interested in this position..."
                      rows={5}
                      {...field}
                      className="border-orange-200 focus:border-orange-400"
                      data-testid="textarea-coverletter"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-orange-300 text-orange-600 hover:bg-orange-50"
                data-testid="button-cancel"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={submitApplication.isPending}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                data-testid="button-submit-application"
              >
                {submitApplication.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}