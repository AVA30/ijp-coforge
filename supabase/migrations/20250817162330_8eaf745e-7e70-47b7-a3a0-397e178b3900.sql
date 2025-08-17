-- Create enum types for job data
CREATE TYPE public.job_type AS ENUM ('Full-time', 'Part-time', 'Contract', 'Internship');
CREATE TYPE public.experience_level AS ENUM ('Entry Level', 'Mid Level', 'Senior Level', 'Executive');
CREATE TYPE public.application_status AS ENUM ('pending', 'reviewing', 'interviewed', 'accepted', 'rejected');

-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  resume_url TEXT,
  skills TEXT[],
  experience_years INTEGER DEFAULT 0,
  current_position TEXT,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create jobs table
CREATE TABLE public.jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  job_type job_type NOT NULL DEFAULT 'Full-time',
  experience_level experience_level NOT NULL DEFAULT 'Entry Level',
  salary_min INTEGER,
  salary_max INTEGER,
  description TEXT NOT NULL,
  requirements TEXT[],
  skills_required TEXT[],
  is_urgent BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  posted_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create job applications table
CREATE TABLE public.job_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID NOT NULL REFERENCES public.jobs(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  cover_letter TEXT,
  status application_status DEFAULT 'pending',
  applied_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(job_id, user_id)
);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  role_title TEXT NOT NULL,
  quote TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) DEFAULT 5,
  avatar_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

-- RLS Policies for jobs (public read, authenticated apply)
CREATE POLICY "Anyone can view active jobs" 
ON public.jobs 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Authenticated users can create jobs" 
ON public.jobs 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = posted_by);

CREATE POLICY "Job creators can update their jobs" 
ON public.jobs 
FOR UPDATE 
USING (auth.uid() = posted_by);

-- RLS Policies for job applications
CREATE POLICY "Users can view their own applications" 
ON public.job_applications 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own applications" 
ON public.job_applications 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own applications" 
ON public.job_applications 
FOR UPDATE 
USING (auth.uid() = user_id);

-- RLS Policies for testimonials
CREATE POLICY "Anyone can view active testimonials" 
ON public.testimonials 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Users can create testimonials" 
ON public.testimonials 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_jobs_updated_at
BEFORE UPDATE ON public.jobs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_applications_updated_at
BEFORE UPDATE ON public.job_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email),
    NEW.email
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_user();

-- Insert sample jobs data
INSERT INTO public.jobs (title, department, location, job_type, experience_level, salary_min, salary_max, description, requirements, skills_required, is_urgent) VALUES
('Senior Software Engineer', 'Engineering', 'Bangalore, India', 'Full-time', 'Senior Level', 1200000, 1800000, 'Lead development of scalable web applications using modern technologies. Mentor junior developers and contribute to architectural decisions.', ARRAY['Bachelor''s degree in Computer Science', '5+ years of experience', 'Strong problem-solving skills'], ARRAY['React', 'Node.js', 'TypeScript', 'AWS'], true),
('Product Manager', 'Product', 'Mumbai, India', 'Full-time', 'Mid Level', 1500000, 2200000, 'Drive product strategy and roadmap for our digital transformation initiatives. Work closely with engineering and design teams.', ARRAY['MBA or equivalent', '3+ years product management experience', 'Excellent communication skills'], ARRAY['Product Strategy', 'Agile', 'Analytics', 'Stakeholder Management'], false),
('UI/UX Designer', 'Design', 'Hyderabad, India', 'Full-time', 'Mid Level', 800000, 1200000, 'Create intuitive and engaging user experiences for our digital products. Collaborate with product and engineering teams.', ARRAY['Bachelor''s in Design or related field', '3+ years of UI/UX experience', 'Portfolio showcasing design process'], ARRAY['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'], false),
('Data Scientist', 'Analytics', 'Pune, India', 'Full-time', 'Senior Level', 1400000, 2000000, 'Develop machine learning models and analyze complex datasets to drive business insights and decision making.', ARRAY['Master''s in Data Science or related field', '4+ years of experience', 'Strong statistical background'], ARRAY['Python', 'Machine Learning', 'SQL', 'TensorFlow'], true),
('DevOps Engineer', 'Engineering', 'Chennai, India', 'Full-time', 'Mid Level', 1000000, 1500000, 'Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure system reliability and security.', ARRAY['Bachelor''s in Engineering', '3+ years DevOps experience', 'Cloud platform experience'], ARRAY['AWS', 'Docker', 'Kubernetes', 'Jenkins'], false),
('Business Analyst', 'Strategy', 'Delhi, India', 'Full-time', 'Entry Level', 600000, 900000, 'Analyze business processes and requirements, create documentation, and support digital transformation initiatives.', ARRAY['Bachelor''s degree', '1-2 years of experience', 'Strong analytical skills'], ARRAY['SQL', 'Excel', 'Process Mapping', 'Requirements Gathering'], false);

-- Insert sample testimonials
INSERT INTO public.testimonials (name, role_title, quote, rating, is_featured, avatar_url) VALUES
('Priya Sharma', 'Senior Software Engineer', 'Coforge has been an incredible place to grow my career. The mentorship and learning opportunities are outstanding.', 5, true, '/placeholder.svg'),
('Rahul Gupta', 'Product Manager', 'The collaborative culture at Coforge encourages innovation and personal growth. Best decision of my career!', 5, true, '/placeholder.svg'),
('Anita Patel', 'Data Scientist', 'Working on cutting-edge AI projects with brilliant minds. Coforge truly values innovation and employee development.', 5, false, '/placeholder.svg'),
('Vikram Singh', 'DevOps Engineer', 'The work-life balance and technical challenges keep me motivated every day. Great team and amazing projects!', 4, false, '/placeholder.svg'),
('Sneha Reddy', 'UI/UX Designer', 'Creative freedom and supportive management make Coforge an ideal workplace for designers.', 5, false, '/placeholder.svg');