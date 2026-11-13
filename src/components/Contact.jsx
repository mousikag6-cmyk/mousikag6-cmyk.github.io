import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  AlertCircle, 
  ExternalLink,
  MessageSquare,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedStatus, setSubmittedStatus] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    return newErrors;
  };

  const getGmailUrl = (data) => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${data.subject}`);
    const body = encodeURIComponent(
      `Hello Mousika,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}\n`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedStatus(null);
      return;
    }

    setErrors({});
    const gmailUrl = getGmailUrl(formData);

    // Open Gmail directly in a new window/tab
    const newTab = window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    // If popup blocker stopped window.open, fallback to location href
    if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
      window.location.href = gmailUrl;
    }

    setSubmittedStatus({
      success: true,
      url: gmailUrl,
      message: 'Gmail opened! Simply click the blue "Send" button in your Gmail tab to deliver your message directly.'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4D9A0]/30 border border-[#F4D9A0] text-[#5B4632] text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#C8792C]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B4632] tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-base text-[#5B4632]/85 max-w-xl mx-auto">
            I'm always interested in learning, collaborating, and exploring new opportunities. Feel free to connect with me.
          </p>
          <div className="h-1 w-20 bg-[#C8792C] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email */}
            <div className="p-5 rounded-2xl bg-white border border-[#F4D9A0]/70 shadow-warm-sm flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-[#F4D9A0]/30 text-[#C8792C]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#C8792C] uppercase tracking-wider">
                    Personal Email
                  </span>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-semibold text-[#5B4632] hover:text-[#C8792C] transition-colors block break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(personalInfo.email, 'personalEmail')}
                className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#F4D9A0]/30 text-[#5B4632] text-xs transition-colors shrink-0"
                title="Copy email"
                aria-label="Copy personal email"
              >
                {copiedKey === 'personalEmail' ? <Check className="w-4 h-4 text-[#C8792C]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* College Email */}
            <div className="p-5 rounded-2xl bg-white border border-[#F4D9A0]/70 shadow-warm-sm flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-[#F4D9A0]/30 text-[#C8792C]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#C8792C] uppercase tracking-wider">
                    College Email
                  </span>
                  <a 
                    href={`mailto:${personalInfo.collegeEmail}`}
                    className="text-sm sm:text-base font-semibold text-[#5B4632] hover:text-[#C8792C] transition-colors block break-all"
                  >
                    {personalInfo.collegeEmail}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(personalInfo.collegeEmail, 'collegeEmail')}
                className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#F4D9A0]/30 text-[#5B4632] text-xs transition-colors shrink-0"
                title="Copy college email"
                aria-label="Copy college email"
              >
                {copiedKey === 'collegeEmail' ? <Check className="w-4 h-4 text-[#C8792C]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="p-5 rounded-2xl bg-white border border-[#F4D9A0]/70 shadow-warm-sm flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-[#F4D9A0]/30 text-[#C8792C]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#C8792C] uppercase tracking-wider">
                    Phone
                  </span>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm sm:text-base font-semibold text-[#5B4632] hover:text-[#C8792C] transition-colors block"
                  >
                    {personalInfo.phoneFormatted}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#F4D9A0]/30 text-[#5B4632] text-xs transition-colors shrink-0"
                title="Copy phone"
                aria-label="Copy phone"
              >
                {copiedKey === 'phone' ? <Check className="w-4 h-4 text-[#C8792C]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-5 rounded-2xl bg-white border border-[#F4D9A0]/70 shadow-warm-sm flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-[#F4D9A0]/30 text-[#C8792C]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#C8792C] uppercase tracking-wider">
                  Location
                </span>
                <p className="text-sm sm:text-base font-semibold text-[#5B4632]">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 grid grid-cols-2 gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-[#F4D9A0]/70 hover:border-[#C8792C] text-[#5B4632] hover:text-[#C8792C] shadow-warm-sm flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-5 h-5 text-[#C8792C]" />
                  <span className="text-sm font-semibold">LinkedIn</span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#5B4632]/50 group-hover:text-[#C8792C] transition-colors" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-[#F4D9A0]/70 hover:border-[#C8792C] text-[#5B4632] hover:text-[#C8792C] shadow-warm-sm flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-5 h-5 text-[#C8792C]" />
                  <span className="text-sm font-semibold">GitHub</span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#5B4632]/50 group-hover:text-[#C8792C] transition-colors" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#F4D9A0] shadow-warm-lg">
              <h3 className="text-xl font-bold text-[#5B4632] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#5B4632]/70 mb-6">
                Clicking Send directly opens Gmail with your message ready to send to {personalInfo.email}.
              </p>

              {/* Status Notification */}
              {submittedStatus && (
                <div className="mb-6 p-4 rounded-2xl bg-[#FDF7EA] border-2 border-[#C8792C] text-[#5B4632] text-xs sm:text-sm flex flex-col gap-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#C8792C] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{submittedStatus.message}</p>
                      <p className="text-[12px] opacity-80 mt-1">
                        If the Gmail tab did not pop up automatically, click below:
                      </p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#C8792C]/20 flex gap-2">
                    <a
                      href={submittedStatus.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C8792C] text-white text-xs font-bold hover:bg-[#BA6E24] transition-colors"
                    >
                      <span>Click to Open Gmail Tab</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[#5B4632] uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-[#C8792C]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Aditi Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-[#5B4632] placeholder-[#5B4632]/40 text-sm focus:outline-none transition-all ${
                      errors.name 
                        ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                        : 'border-[#F4D9A0]/70 focus:border-[#C8792C] focus:bg-white'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#5B4632] uppercase tracking-wider mb-1.5">
                    Your Email Address <span className="text-[#C8792C]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. aditi@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-[#5B4632] placeholder-[#5B4632]/40 text-sm focus:outline-none transition-all ${
                      errors.email 
                        ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                        : 'border-[#F4D9A0]/70 focus:border-[#C8792C] focus:bg-white'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-[#5B4632] uppercase tracking-wider mb-1.5">
                    Subject <span className="text-[#C8792C]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Opportunity / Internship Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-[#5B4632] placeholder-[#5B4632]/40 text-sm focus:outline-none transition-all ${
                      errors.subject 
                        ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                        : 'border-[#F4D9A0]/70 focus:border-[#C8792C] focus:bg-white'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#5B4632] uppercase tracking-wider mb-1.5">
                    Message <span className="text-[#C8792C]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your note or opportunity details here..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-[#5B4632] placeholder-[#5B4632]/40 text-sm focus:outline-none transition-all ${
                      errors.message 
                        ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                        : 'border-[#F4D9A0]/70 focus:border-[#C8792C] focus:bg-white'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8792C] text-white font-bold text-sm hover:bg-[#BA6E24] shadow-warm-md hover:shadow-amber-glow transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>Send Message via Gmail</span>
                    <Send className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-4 border-t border-[#5B4632]/10 flex items-start gap-2.5 text-xs text-[#5B4632]/70 leading-normal">
                <HelpCircle className="w-4 h-4 text-[#C8792C] shrink-0 mt-0.5" />
                <span>
                  <strong>Direct Delivery:</strong> Clicking <em>Send Message</em> opens Gmail in your browser with the recipient (<strong>mousikag6@gmail.com</strong>), subject, and message pre-filled.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
