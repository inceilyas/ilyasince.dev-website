'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import { ScrollAnimation } from '@/components/scroll-animations'
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Phone, Loader2, Check } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const { t, mounted } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!mounted) return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
      return
    }

    setIsSubmitting(true)
    
    // Create mailto link with form data
    const mailtoLink = `mailto:mehmetilyasince1@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success message
    setSubmitStatus('success')
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('idle')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-background dark:text-foreground">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-6 lg:px-8 py-24 md:py-32 lg:py-40 max-w-7xl mx-auto">
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-6 md:space-y-8">
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-balance transition-all duration-1000 ${
                isVisible ? 'fly-in-left opacity-100' : 'opacity-0'
              }`}>
                {t('heroTitle')}
              </h1>
              <p className={`text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light transition-all duration-1000 delay-100 ${
                isVisible ? 'fly-in-right opacity-100' : 'opacity-0'
              }`}>
                {t('heroSubtitle')}
              </p>
            </div>

            <div className={`flex gap-4 flex-wrap transition-all duration-1000 delay-200 ${
              isVisible ? 'slide-up opacity-100' : 'opacity-0 translate-y-10'
            }`}>
              <a href="#projects" className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                {t('viewMyWork')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="#contact" className="group px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 hover:scale-105 transition-all duration-300 dark:bg-secondary/30 dark:hover:bg-secondary/50">
                {t('getInTouch')}
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 lg:px-8 py-20 md:py-28 bg-secondary/20 dark:bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* About Content */}
              <ScrollAnimation animation="slide-up">
                <div className="space-y-6 md:space-y-8">
                  <h2 className="text-4xl md:text-5xl font-bold">{t('aboutTitle')}</h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {t('aboutText1')}
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {t('aboutText2')}
                  </p>
                  <div className="flex gap-4 pt-4">
                    <a href="#projects" className="text-primary hover:text-accent dark:hover:text-accent/80 transition-colors duration-300 font-semibold">{t('learnMore')}</a>
                  </div>
                </div>
              </ScrollAnimation>

              {/* About Image */}
              <ScrollAnimation animation="scale" delay={0.2}>
                <div className="flex items-center justify-center">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ilyas-HfHrRvRQRdkoiPCX5EYvhkGGE6qNMn.jpeg" 
                    alt="Mehmet İlyas İnce" 
                    className="rounded-2xl w-full max-w-sm aspect-square object-contain object-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('experienceTitle')}</h2>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Fetalist AI Intern */}
              <ScrollAnimation animation="slide-up" delay={0}>
                <div className="p-8 md:p-10 rounded-2xl border border-border dark:border-border/50 bg-card dark:bg-card/50 hover:bg-card/80 dark:hover:bg-card/70 transition-all duration-500">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-primary dark:text-accent mb-1">{t('experienceAITitle')}</h3>
                    <p className="text-lg font-semibold text-foreground mb-1">{t('experienceAICompany')}</p>
                    <p className="text-sm text-muted-foreground">{t('experienceAIPeriod')}</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="text-primary dark:text-accent font-bold mt-1">•</span>
                      <span>{t('experienceAI1')}</span>
                    </li>
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="text-primary dark:text-accent font-bold mt-1">•</span>
                      <span>{t('experienceAI2')}</span>
                    </li>
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="text-primary dark:text-accent font-bold mt-1">•</span>
                      <span>{t('experienceAI3')}</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              {/* EtkinLink Database Developer */}
              <ScrollAnimation animation="slide-up" delay={0.1}>
                <div className="p-8 md:p-10 rounded-2xl border border-border dark:border-border/50 bg-card dark:bg-card/50 hover:bg-card/80 dark:hover:bg-card/70 transition-all duration-500">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-primary dark:text-accent mb-1">{t('experienceDBTitle')}</h3>
                    <p className="text-lg font-semibold text-foreground mb-1">{t('experienceDBCompany')}</p>
                    <p className="text-sm text-muted-foreground">{t('experienceDBPeriod')}</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="text-primary dark:text-accent font-bold mt-1">•</span>
                      <span>{t('experienceDB1')}</span>
                    </li>
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="text-primary dark:text-accent font-bold mt-1">•</span>
                      <span>{t('experienceDB2')}</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-6 lg:px-8 py-20 md:py-28 bg-secondary/20 dark:bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('projectsTitle')}</h2>
              <p className="text-lg text-muted-foreground">{t('projectsSubtitle')}</p>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: t('project1Title'),
                  description: t('project1Desc'),
                  tags: [t('python'), t('scikitlearn'), t('pandas'), t('matplotlib'), t('tensorflow')],
                  githubUrl: 'https://github.com/inceilyas/ai-100-days',
                },
                {
                  title: t('project2Title'),
                  description: t('project2Desc'),
                  tags: [t('python')],
                  githubUrl: 'https://github.com/inceilyas/Piecewise-Interpolation-for-Robot-Path-Planning',
                },
                {
                  title: t('project3Title'),
                  description: t('project3Desc'),
                  tags: [t('cpp')],
                  githubUrl: 'https://github.com/inceilyas/round-robin-scheduler',
                },
                {
                  title: t('project4Title'),
                  description: t('project4Desc'),
                  tags: [t('verilog')],
                  githubUrl: 'https://github.com/inceilyas/ALU-System',
                },
                {
                  title: t('project5Title'),
                  description: t('project5Desc'),
                  tags: [t('c')],
                  githubUrl: 'https://github.com/inceilyas/mini-file-system',
                },
                {
                  title: t('project6Title'),
                  description: t('project6Desc'),
                  tags: [t('c')],
                  githubUrl: 'https://github.com/inceilyas/market-concurreny-system',
                },
              ].map((project, index) => (
                <ScrollAnimation
                  key={index}
                  animation="slide-up"
                  delay={index * 0.1}
                >
                  <div className="group relative p-8 md:p-10 rounded-2xl border border-border hover:border-primary/50 dark:border-border/50 dark:hover:border-primary/30 bg-card hover:bg-card/80 dark:bg-card/50 dark:hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary/8 dark:bg-primary/10 text-primary dark:text-accent rounded-full border border-primary/20 dark:border-primary/30 group-hover:bg-primary/12 transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary dark:text-accent hover:text-primary-foreground dark:hover:text-primary-foreground bg-primary/10 dark:bg-primary/15 hover:bg-primary dark:hover:bg-accent rounded-lg transition-all duration-300 group-hover:gap-3"
                    >
                      <Github className="w-4 h-4" />
                      {t('viewProject')}
                    </a>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-700" />
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">{t('skillsTitle')}</h2>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Programming Languages */}
              <ScrollAnimation animation="slide-up" delay={0}>
                <div className="p-8 md:p-10 rounded-2xl border border-border dark:border-border/50 bg-card dark:bg-card/50 hover:bg-card/80 dark:hover:bg-card/70 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-6 text-primary dark:text-accent">{t('programmingLanguages')}</h3>
                  <div className="space-y-3">
                    {t('programmingSkills').map((skill) => (
                      <div key={skill} className="p-3 md:p-4 rounded-lg bg-secondary/50 dark:bg-secondary/20 hover:bg-secondary dark:hover:bg-secondary/30 transition-all duration-300 group">
                        <p className="font-medium group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              {/* AI & Machine Learning - Restructured */}
              <ScrollAnimation animation="slide-up" delay={0.1} className="md:col-span-2 lg:col-span-1">
                <div className="p-8 md:p-10 rounded-2xl border border-border dark:border-border/50 bg-card dark:bg-card/50 hover:bg-card/80 dark:hover:bg-card/70 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-6 text-primary dark:text-accent">{t('aiMachineLearning')}</h3>
                  <div className="space-y-6">
                    {/* Concepts */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground/80 mb-3 uppercase tracking-wide">Concepts</h4>
                      <div className="space-y-2">
                        {['Supervised Learning', 'Unsupervised Learning', 'Neural Networks'].map((skill) => (
                          <div key={skill} className="p-3 rounded-lg bg-secondary/50 dark:bg-secondary/20 hover:bg-secondary dark:hover:bg-secondary/30 transition-all duration-300 group">
                            <p className="text-sm font-medium group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">{skill}</p>
                          </div>
                        ))}
                        <div className="p-3 rounded-lg bg-secondary/50 dark:bg-secondary/20 hover:bg-secondary dark:hover:bg-secondary/30 transition-all duration-300 group flex items-center justify-between">
                          <p className="text-sm font-medium group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">Computer Vision</p>
                          <span className="px-2 py-1 text-xs font-bold bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded border border-amber-500/30">Learning</span>
                        </div>
                      </div>
                    </div>

                    {/* Platforms & Libraries */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground/80 mb-3 uppercase tracking-wide">Platforms & Libraries</h4>
                      <div className="space-y-2">
                        {['Hugging Face (Transformers, Datasets)', 'Scikit-learn', 'Pandas', 'MatPlotLib', 'NumPy'].map((skill) => (
                          <div key={skill} className="p-3 rounded-lg bg-secondary/50 dark:bg-secondary/20 hover:bg-secondary dark:hover:bg-secondary/30 transition-all duration-300 group">
                            <p className="text-sm font-medium group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">{skill}</p>
                          </div>
                        ))}
                        <div className="p-3 rounded-lg bg-secondary/50 dark:bg-secondary/20 hover:bg-secondary dark:hover:bg-secondary/30 transition-all duration-300 group flex items-center justify-between">
                          <p className="text-sm font-medium group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">LangChain</p>
                          <span className="px-2 py-1 text-xs font-bold bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded border border-blue-500/30">Basic</span>
                        </div>
                      </div>
                    </div>

                    {/* Frameworks */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground/80 mb-3 uppercase tracking-wide">Frameworks</h4>
                      <div className="space-y-2">
                        <div className="p-3 rounded-lg bg-secondary/50 dark:bg-secondary/20 hover:bg-secondary dark:hover:bg-secondary/30 transition-all duration-300 group flex items-center justify-between">
                          <p className="text-sm font-medium group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">TensorFlow</p>
                          <span className="px-2 py-1 text-xs font-bold bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded border border-amber-500/30">Learning</span>
                        </div>
                        <div className="p-3 rounded-lg bg-secondary/50 dark:bg-secondary/20 hover:bg-secondary dark:hover:bg-secondary/30 transition-all duration-300 group flex items-center justify-between">
                          <p className="text-sm font-medium group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">PyTorch</p>
                          <span className="px-2 py-1 text-xs font-bold bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded border border-blue-500/30">Basic</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Databases */}
              <ScrollAnimation animation="slide-up" delay={0.2}>
                <div className="p-8 md:p-10 rounded-2xl border border-border dark:border-border/50 bg-card dark:bg-card/50 hover:bg-card/80 dark:hover:bg-card/70 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-6 text-primary dark:text-accent">{t('databases')}</h3>
                  <div className="space-y-3">
                    {t('databaseSkills').map((skill) => (
                      <div key={skill} className="p-3 md:p-4 rounded-lg bg-secondary/50 dark:bg-secondary/20 hover:bg-secondary dark:hover:bg-secondary/30 transition-all duration-300 group">
                        <p className="font-medium group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              {/* Core CS */}
              <ScrollAnimation animation="slide-up" delay={0.3}>
                <div className="p-8 md:p-10 rounded-2xl border border-border dark:border-border/50 bg-card dark:bg-card/50 hover:bg-card/80 dark:hover:bg-card/70 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-6 text-primary dark:text-accent">{t('coreCS')}</h3>
                  <div className="space-y-3">
                    {t('coreSkills').map((skill) => (
                      <div key={skill} className="p-3 md:p-4 rounded-lg bg-secondary/50 dark:bg-secondary/20 hover:bg-secondary dark:hover:bg-secondary/30 transition-all duration-300 group">
                        <p className="font-medium group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              {/* Developer Tools */}
              <ScrollAnimation animation="slide-up" delay={0.4}>
                <div className="p-8 md:p-10 rounded-2xl border border-border dark:border-border/50 bg-card dark:bg-card/50 hover:bg-card/80 dark:hover:bg-card/70 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-6 text-primary dark:text-accent">{t('developerTools')}</h3>
                  <div className="space-y-3">
                    {t('toolsSkills').map((skill) => (
                      <div key={skill} className="p-3 md:p-4 rounded-lg bg-secondary/50 dark:bg-secondary/20 hover:bg-secondary dark:hover:bg-secondary/30 transition-all duration-300 group">
                        <p className="font-medium group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              {/* Languages */}
              <ScrollAnimation animation="slide-up" delay={0.5}>
                <div className="p-8 md:p-10 rounded-2xl border border-border dark:border-border/50 bg-card dark:bg-card/50 hover:bg-card/80 dark:hover:bg-card/70 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-6 text-primary dark:text-accent">{t('languages')}</h3>
                  <div className="space-y-3">
                    {t('languageSkills').map((skill) => (
                      <div key={skill} className="p-3 md:p-4 rounded-lg bg-secondary/50 dark:bg-secondary/20 hover:bg-secondary dark:hover:bg-secondary/30 transition-all duration-300 group">
                        <p className="font-medium group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 lg:px-8 py-20 md:py-28 bg-secondary/20 dark:bg-secondary/10">
          <div className="max-w-3xl mx-auto">
            <ScrollAnimation className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('contactTitle')}</h2>
              <p className="text-lg text-muted-foreground">{t('contactSubtitle')}</p>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.1}>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">{t('name')}</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('yourName')}
                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-lg border border-border dark:border-border/50 bg-background dark:bg-background/50 focus:border-primary dark:focus:border-accent focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t('email')}</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('yourEmail')}
                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-lg border border-border dark:border-border/50 bg-background dark:bg-background/50 focus:border-primary dark:focus:border-accent focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">{t('message')}</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('tellAboutProject')}
                    rows={6}
                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-lg border border-border dark:border-border/50 bg-background dark:bg-background/50 focus:border-primary dark:focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm">
                    Please fill in all fields
                  </div>
                )}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-sm flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Opening your email client...
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t('sendMessage')}
                    </>
                  ) : (
                    t('sendMessage')
                  )}
                </button>
              </form>
            </ScrollAnimation>

            <ScrollAnimation className="mt-12 pt-12 border-t border-border dark:border-border/50">
              <p className="text-center text-muted-foreground mb-8">{t('connectSocial')}</p>
              <div className="flex justify-center gap-6 flex-wrap">
                <a href="https://github.com/inceilyas" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-secondary dark:bg-secondary/30 hover:bg-secondary/80 dark:hover:bg-secondary/50 text-foreground hover:text-primary dark:hover:text-accent transition-all duration-300 hover:scale-110" title={t('githubLabel')}>
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.kaggle.com/mehmetlyasnce" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-secondary dark:bg-secondary/30 hover:bg-secondary/80 dark:hover:bg-secondary/50 text-foreground hover:text-primary dark:hover:text-accent transition-all duration-300 hover:scale-110" title={t('kaggleLabel')}>
                  <span className="w-6 h-6 flex items-center justify-center font-bold">K</span>
                </a>
                <a href="mailto:mehmetilyasince1@gmail.com" className="p-4 rounded-lg bg-secondary dark:bg-secondary/30 hover:bg-secondary/80 dark:hover:bg-secondary/50 text-foreground hover:text-primary dark:hover:text-accent transition-all duration-300 hover:scale-110" title={t('emailLabel')}>
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 lg:px-8 py-12 border-t border-border dark:border-border/50 bg-secondary/20 dark:bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">Mehmet İlyas İnce</h3>
              <p className="text-sm text-muted-foreground">{t('footerDesc')}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('quickLinks')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary dark:hover:text-accent transition-colors duration-300">{t('about')}</a></li>
                <li><a href="#projects" className="hover:text-primary dark:hover:text-accent transition-colors duration-300">{t('projects')}</a></li>
                <li><a href="#skills" className="hover:text-primary dark:hover:text-accent transition-colors duration-300">{t('skills')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('social')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://github.com/inceilyas" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-accent transition-colors duration-300">{t('github')}</a></li>
                <li><a href="https://www.kaggle.com/mehmetlyasnce" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-accent transition-colors duration-300">{t('kaggle')}</a></li>
                <li><a href="mailto:mehmetilyasince1@gmail.com" className="hover:text-primary dark:hover:text-accent transition-colors duration-300">{t('email')}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border dark:border-border/50 pt-8">
            <p className="text-center text-sm text-muted-foreground">{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
