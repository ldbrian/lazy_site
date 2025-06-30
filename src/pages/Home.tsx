import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import FAQItem from "@/components/FAQItem";
import { features } from "@/data/features";
import { steps } from "@/data/steps";
import { pricingPlans } from "@/data/pricing";
import { faqs } from "@/data/faqs";

export default function Home() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Invalid email format");
      return;
    }
    setEmailError("");
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    setEmail("");
  };

  const productFaqs = faqs.filter(f => f.category === 'usage');
  const compatibilityFaqs = faqs.filter(f => f.category === 'compatibility');
  const paymentFaqs = faqs.filter(f => f.category === 'payment');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Efficient Excel Batch Processing Tool
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lazy Excel Toolkit provides one-click batch processing features, saving you 90% of spreadsheet processing time
            </p>
             <div className="mt-8 flex justify-center">
               <a href="https://brianspark83.gumroad.com/l/kdvukn" target="_blank" rel="noopener noreferrer">
                 <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                    Free Download
                 </button>
               </a>
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
             Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
             How It Works
          </h2>
           <div className="max-w-3xl mx-auto">
             <ol className="space-y-8">
               {steps.map((step) => (
                 <li key={step.step} className="flex items-start">
                   <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                     <i className={`${step.icon} text-green-600`}></i>
                   </div>
                   <div>
                     <p className="text-lg font-medium text-gray-900">
                       Step {step.step}
                     </p>
                     <p className="text-gray-600">{step.description}</p>
                   </div>
                 </li>
               ))}
             </ol>
           </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
             Pricing Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan) => (
              <div key={plan.plan} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-bold text-center mb-4">
                    {plan.plan === 'trial' ? 'Free Trial' : 'Pro Version'}
                  </h3>
                <p className="text-4xl font-bold text-center mb-6">
                  {plan.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                  {plan.plan === 'trial' ? (
                    <a href="https://brianspark83.gumroad.com/l/kdvukn" target="_blank" rel="noopener noreferrer">
                      <button className="w-full py-3 rounded-md font-medium transition-colors bg-green-600 hover:bg-green-700 text-white">
                        Download Now
                      </button>
                    </a>
                  ) : (
                    <a href="https://brianspark83.gumroad.com/l/gzzppzv" target="_blank" rel="noopener noreferrer">
                      <button className="w-full py-3 rounded-md font-medium transition-colors bg-blue-600 hover:bg-blue-700 text-white">
                        Buy Now
                      </button>
                    </a>
                  )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
             Stay Updated
           </h2>
           <p className="text-gray-600 mb-8">
             Get the latest news and promotions
           </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <div className="flex-grow">
              <input
                type="email"
                 placeholder="Your email address"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-600">{emailError}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors whitespace-nowrap"
            >
               Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
             Frequently Asked Questions
           </h2>
          
          <div className="mb-12">
             <h3 className="text-xl font-semibold mb-4">Usage Guide</h3>
            <div className="space-y-2">
              {productFaqs.map((faq) => (
                <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          <div className="mb-12">
             <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
            <div className="space-y-2">
              {compatibilityFaqs.map((faq) => (
                <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          <div className="mb-12">
             <h3 className="text-xl font-semibold mb-4">Purchase & Payment</h3>
            <div className="space-y-2">
              {paymentFaqs.map((faq) => (
                <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
