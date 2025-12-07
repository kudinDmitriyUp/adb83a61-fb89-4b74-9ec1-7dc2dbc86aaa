"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroOverlaySplit from '@/components/sections/hero/HeroOverlaySplit';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Rocket } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="mediumSizeExtraLargeSpacing"
      background="aurora"
      cardStyle="accent-corner-border"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="outline"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="MugCraft"
          logoAlt="MugCraft logo"
          button={{
            text: "Shop Now",
            href: "#products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlaySplit
          title="Premium Coffee Mugs for Your Brand"
          description="Custom-printed mugs shipped worldwide. Build your dropshipping empire with our quality products and fast fulfillment."
          buttons={[
            {
              text: "Start Selling",
              href: "#products"
            },
            {
              text: "View Catalog",
              href: "#features"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113001675-mg4lfd4u.jpg"
          imageAlt="Collection of premium coffee mugs"
          showDimOverlay={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Why Choose MugCraft"
          description="Everything you need to launch a successful dropshipping business"
          tag="Core Benefits"
          features={[
            {
              id: "01",
              title: "Quality Products",
              description: "Premium ceramic mugs with vibrant, long-lasting prints that customers love",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113002660-fbl4zizw.jpg",
              imageAlt: "Quality ceramic mug"
            },
            {
              id: "02",
              title: "Fast Shipping",
              description: "Global fulfillment partners ensure your orders arrive quickly and safely",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113003564-6tcs68ph.jpg",
              imageAlt: "Shipped mug package"
            },
            {
              id: "03",
              title: "Zero Inventory",
              description: "We handle storage and fulfillment so you focus on sales",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113004151-bzylbzqd.jpg",
              imageAlt: "Warehouse fulfillment"
            },
            {
              id: "04",
              title: "Custom Designs",
              description: "Easy design tools to create unique, branded mugs for your customers",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113004692-y934l3wq.jpg",
              imageAlt: "Custom design mug"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSeven
          title="Featured Mug Collection"
          description="Start with our bestselling designs and customize them for your brand"
          products={[
            {
              id: "1",
              name: "Classic White Ceramic",
              price: "$4.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113002660-fbl4zizw.jpg",
              imageAlt: "Classic white ceramic mug"
            },
            {
              id: "2",
              name: "Colorful Gradient Mug",
              price: "$5.49",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113003564-6tcs68ph.jpg",
              imageAlt: "Colorful gradient mug"
            },
            {
              id: "3",
              name: "Premium Black Mug",
              price: "$6.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113004151-bzylbzqd.jpg",
              imageAlt: "Premium black ceramic mug"
            },
            {
              id: "4",
              name: "Large Travel Mug",
              price: "$7.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113004692-y934l3wq.jpg",
              imageAlt: "Large travel mug"
            },
            {
              id: "5",
              name: "Minimalist Design",
              price: "$5.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113005266-4ejbqbuj.jpg",
              imageAlt: "Minimalist design mug"
            },
            {
              id: "6",
              name: "Luxury Edition",
              price: "$8.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113006023-mv08c380.jpg",
              imageAlt: "Luxury ceramic mug"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Trusted by Entrepreneurs"
          description="Join thousands of successful dropshippers"
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "Orders Shipped Worldwide",
              items: [
                "Fast fulfillment",
                "Global reach",
                "Quality guaranteed"
              ]
            },
            {
              id: "2",
              value: "95%",
              title: "Customer Satisfaction",
              items: [
                "Repeat buyers",
                "Positive reviews",
                "Premium quality"
              ]
            },
            {
              id: "3",
              value: "100+",
              title: "Design Templates",
              items: [
                "Easy customization",
                "Ready to use",
                "Fully branded"
              ]
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          testimonials={[
            {
              id: "1",
              nameTitle: "Sarah Johnson, E-commerce Owner",
              quote: "Started my mug business 3 months ago with MugCraft. Made over $15K in first month. The quality and shipping are exceptional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113006735-al0orikf.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              nameTitle: "Marcus Chen, Brand Manager",
              quote: "Finally found a supplier I can trust. Customer complaints are almost zero. Their design tools make creating unique mugs so easy.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113007238-tufcsmbn.jpg",
              imageAlt: "Marcus Chen"
            },
            {
              id: "3",
              nameTitle: "Emma Rodriguez, Small Business Owner",
              quote: "The margins are incredible and the support team is responsive. This has become my main revenue stream. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113007739-4r3w5568.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              nameTitle: "David Kim, Online Seller",
              quote: "Been selling for 6 months. Never had quality issues. Customers return specifically for the mug quality. Worth every penny.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113008475-l5exb6p5.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              nameTitle: "Lisa Wang, Entrepreneur",
              quote: "The fulfillment process is seamless. I focus on marketing, they handle everything else. Business scaled to $50K/month effortlessly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113009178-gl4n8934.jpg",
              imageAlt: "Lisa Wang"
            },
            {
              id: "6",
              nameTitle: "James Miller, Store Owner",
              quote: "Best decision ever. Minimal overhead, maximum profits. The product quality speaks for itself. Customers always come back.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113010082-drs7e4bw.jpg",
              imageAlt: "James Miller"
            }
          ]}
          title="What Our Sellers Say"
          description="Real feedback from successful MugCraft entrepreneurs"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113012418-s57a04ch.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113013227-b8utuvqi.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113013769-qesvdl9o.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113014434-y8s6ofge.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113014977-i9m8ui1m.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113015470-0fkefcig.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113015993-u71xdw5y.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765113017113-693qoj90.jpg"
          ]}
          title="Trusted by Industry Leaders"
          description="Our fulfillment partners and integrations ensure smooth operations for your business"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about starting your mug business"
          faqs={[
            {
              id: "1",
              title: "How do I get started?",
              content: "Sign up for free, choose your mug designs, set your prices, and start selling immediately. We handle all production and shipping."
            },
            {
              id: "2",
              title: "What are the shipping times?",
              content: "Standard orders ship within 3-5 business days. Express options available for rush orders. We ship to 150+ countries worldwide."
            },
            {
              id: "3",
              title: "Can I customize mug designs?",
              content: "Absolutely! Use our free design studio or upload your own artwork. Design approval typically takes 24 hours."
            },
            {
              id: "4",
              title: "What's the profit margin?",
              content: "Mugs cost $4.99-$8.99 wholesale depending on type. Most sellers price at $15-$25 retail, yielding 40-80% profit margins."
            },
            {
              id: "5",
              title: "Do you handle customer service?",
              content: "You maintain direct customer relationships. We provide support for production and shipping issues through your dashboard."
            },
            {
              id: "6",
              title: "Are there any hidden fees?",
              content: "No! Transparent pricing. You pay wholesale cost plus shipping to customer. No setup, monthly, or subscription fees ever."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Launch Your Store?"
          ctaDescription="Get started in minutes with our simple onboarding process"
          ctaButton={{
            text: "Start Free Trial",
            href: "#"
          }}
          ctaIcon={Rocket}
          faqs={[
            {
              id: "1",
              title: "What support do you offer?",
              content: "24/7 email support, live chat for urgent issues, and comprehensive knowledge base. Dedicated account managers for high-volume sellers."
            },
            {
              id: "2",
              title: "Is there a trial period?",
              content: "Yes! Free trial with 5 orders included. No credit card required. Full access to design tools and dashboard."
            },
            {
              id: "3",
              title: "Can I sell on multiple platforms?",
              content: "Absolutely. Integrate with Shopify, WooCommerce, Etsy, and more. Manage inventory across all channels from one dashboard."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="MugCraft"
          columns={[
            {
              items: [
                {
                  label: "Products",
                  href: "#products"
                },
                {
                  label: "Features",
                  href: "#features"
                },
                {
                  label: "Pricing",
                  href: "#pricing"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Blog",
                  href: "#blog"
                },
                {
                  label: "Careers",
                  href: "#careers"
                }
              ]
            },
            {
              items: [
                {
                  label: "Help Center",
                  href: "#help"
                },
                {
                  label: "Contact",
                  href: "#contact"
                },
                {
                  label: "Status",
                  href: "#status"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "#privacy"
                },
                {
                  label: "Terms of Service",
                  href: "#terms"
                },
                {
                  label: "Cookie Policy",
                  href: "#cookies"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}