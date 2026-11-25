import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Globe,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { ENQUIRY_ENDPOINT_URL } from '../config/socialLinks';
import { BRAND_INFO, CONTACT_SERVICE_OPTIONS } from '../data/corporateData';
import { SocialLinksBar } from './BrandLogo';

interface ContactSectionProps {
  selectedService: string;
  onSelectServiceChange: (serviceTitle: string) => void;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection({
  selectedService,
  onSelectServiceChange,
}: ContactSectionProps) {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sent-api' | 'validated-local'>('idle');

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      `Enquiry [${selectedService}] — ${companyName || fullName || 'Integrum Website'}`,
    );
    const body = encodeURIComponent(
      `Full Name: ${fullName}\nCompany Name: ${companyName || 'N/A'}\nBusiness Email: ${businessEmail}\nPhone Number: ${phoneNumber || 'N/A'}\nService of Interest: ${selectedService}\n\nProject Requirements:\n${message}`,
    );
    return `${BRAND_INFO.emailHref}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedName = fullName.trim();
    const trimmedEmail = businessEmail.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage('Please complete all required fields: Full Name, Business Email, and Project Requirements.');
      return;
    }

    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      if (ENQUIRY_ENDPOINT_URL) {
        const res = await fetch(ENQUIRY_ENDPOINT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: trimmedName,
            companyName: companyName.trim(),
            businessEmail: trimmedEmail,
            phoneNumber: phoneNumber.trim(),
            serviceOfInterest: selectedService,
            message: trimmedMessage,
          }),
        });

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        setSubmissionStatus('sent-api');
      } else {
        await new Promise((resolve) => window.setTimeout(resolve, 350));
        setSubmissionStatus('validated-local');
      }
    } catch {
      setErrorMessage(
        `Unable to reach the submission endpoint right now. Please email ${BRAND_INFO.email} directly or call ${BRAND_INFO.phone}.`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFullName('');
    setCompanyName('');
    setBusinessEmail('');
    setPhoneNumber('');
    setMessage('');
    setErrorMessage(null);
    setSubmissionStatus('idle');
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Verified Contact Information */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold tracking-[0.14em] text-[#168C89] uppercase">
              Contact Us
            </p>
            <h2 className="mt-2 font-[Manrope] text-3xl font-bold tracking-tight text-[#1D1B56] sm:text-4xl">
              Partner With Integrum
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Reach our Hyderabad R&amp;D and business development team directly for CRDMO, Fine
              Chemicals, Critical Impurities, and Non-GMP Manufacturing enquiries.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-[#F4F5FA] text-[#7570B0]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-[Manrope] text-sm font-bold text-[#1D1B56]">
                    {BRAND_INFO.legalName}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {BRAND_INFO.address}
                  </p>
                  <a
                    href={BRAND_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[#168C89] hover:text-[#7570B0]"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-[#F4F5FA] text-[#7570B0]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-[Manrope] text-sm font-bold text-[#1D1B56]">Phone</h3>
                  <a
                    href={BRAND_INFO.phoneHref}
                    className="mt-1 inline-block text-sm font-medium text-[#1D1B56] transition-colors hover:text-[#7570B0]"
                  >
                    {BRAND_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-[#F4F5FA] text-[#7570B0]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-[Manrope] text-sm font-bold text-[#1D1B56]">Email</h3>
                  <a
                    href={BRAND_INFO.emailHref}
                    className="mt-1 inline-block text-sm font-medium text-[#168C89] transition-colors hover:text-[#7570B0]"
                  >
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-[#F4F5FA] text-[#7570B0]">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-[Manrope] text-sm font-bold text-[#1D1B56]">Website</h3>
                  <a
                    href={BRAND_INFO.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-medium text-[#1D1B56] transition-colors hover:text-[#7570B0]"
                  >
                    {BRAND_INFO.website}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-6">
              <span className="text-xs font-semibold text-slate-500">Social Channels:</span>
              <SocialLinksBar tone="light" />
            </div>
          </div>

          {/* Right Column: Validated Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-[#F4F5FA] p-6 sm:p-8">
              <h3 className="font-[Manrope] text-xl font-bold text-[#1D1B56]">
                Project Enquiry Form
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Complete the fields below to initiate a scientific or commercial enquiry.
              </p>

              {submissionStatus !== 'idle' ? (
                <div className="mt-6 rounded-xl border border-[#168C89]/30 bg-white p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#168C89]" />
                    <div>
                      <h4 className="font-[Manrope] text-base font-bold text-[#1D1B56]">
                        {submissionStatus === 'sent-api'
                          ? 'Enquiry Sent Successfully'
                          : 'Enquiry Validated — Ready to Dispatch'}
                      </h4>
                      {submissionStatus === 'sent-api' ? (
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                          Thank you, {fullName}. Your enquiry for{' '}
                          <span className="font-semibold text-[#1D1B56]">{selectedService}</span>{' '}
                          has been submitted.
                        </p>
                      ) : (
                        <div className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">
                          <p>
                            Thank you, {fullName}. This frontend validates all fields cleanly, and
                            no live email API endpoint (<code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">VITE_ENQUIRY_ENDPOINT</code>) is currently configured on this static deployment—so no message was automatically transmitted.
                          </p>
                          <p className="font-medium text-[#1D1B56]">
                            Send your pre-filled enquiry directly via email below, or configure{' '}
                            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">VITE_ENQUIRY_ENDPOINT</code> to activate automated delivery.
                          </p>
                        </div>
                      )}

                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href={buildMailtoHref()}
                          className="inline-flex items-center gap-2 rounded-lg bg-[#7570B0] px-4 py-2 font-[Manrope] text-xs font-semibold text-white hover:bg-[#5D5899]"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          <span>Open Pre-filled Email to {BRAND_INFO.email}</span>
                        </a>
                        <button
                          type="button"
                          onClick={resetForm}
                          className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-[#1D1B56] hover:bg-[#F4F5FA] cursor-pointer"
                        >
                          New Enquiry
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {errorMessage && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-xs font-medium text-rose-800"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-[#1D1B56]">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        required
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Dr. Kavya Sharma"
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#1D1B56] focus:border-[#7570B0] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs font-semibold text-[#1D1B56]">
                        Company Name
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Organization / Biotech"
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#1D1B56] focus:border-[#7570B0] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="businessEmail" className="block text-xs font-semibold text-[#1D1B56]">
                        Business Email *
                      </label>
                      <input
                        id="businessEmail"
                        required
                        type="email"
                        value={businessEmail}
                        onChange={(e) => setBusinessEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#1D1B56] focus:border-[#7570B0] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold text-[#1D1B56]">
                        Phone Number
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+91 95024 71357"
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#1D1B56] focus:border-[#7570B0] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceInterest" className="block text-xs font-semibold text-[#1D1B56]">
                      Service of Interest
                    </label>
                    <select
                      id="serviceInterest"
                      value={selectedService}
                      onChange={(e) => onSelectServiceChange(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#1D1B56] focus:border-[#7570B0] focus:outline-none"
                    >
                      {CONTACT_SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="requirements" className="block text-xs font-semibold text-[#1D1B56]">
                      Project Requirements / Message *
                    </label>
                    <textarea
                      id="requirements"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline synthetic target scope, scale (mg to kg), or timeline..."
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#1D1B56] focus:border-[#7570B0] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#7570B0] px-6 py-3 font-[Manrope] text-sm font-semibold text-white transition-colors hover:bg-[#5D5899] disabled:opacity-60 cursor-pointer sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
