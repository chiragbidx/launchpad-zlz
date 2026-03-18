// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ...types unchanged...

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "New",
    badgeOuter: "Announcing MailForge",
    titleBefore: "",
    titleHighlight: "Launch Email Campaigns in Minutes",
    titleAfter: "",
    subtitle:
      "MailForge helps you design, send, and analyze email marketing campaigns — all in one place.",
    primaryCta: { label: "Start Sending", href: "#pricing" },
    secondaryCta: { label: "Learn More", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "MailForge dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Trusted by modern marketers",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "EnvelopeOpen", name: "Mailgun" },
      { icon: "Users", name: "SendGrid" },
      { icon: "PieChart", name: "Postmark" },
      { icon: "BarChart", name: "SparkPost" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why MailForge",
    heading: "The easiest way to launch, track, and optimize campaigns",
    description:
      "Save hours on campaign creation, audience management, and analytics—MailForge unifies your workflow so you can focus on results.",
    items: [
      {
        icon: "Send",
        title: "Effortless Campaign Creation",
        description: "Design beautiful, responsive emails using our intuitive campaign builder. No coding required.",
      },
      {
        icon: "Users",
        title: "Smart Audience Management",
        description: "Import, segment, and grow your contact lists for targeted, effective outreach.",
      },
      {
        icon: "BarChart3",
        title: "Real-Time Analytics",
        description: "Track opens, clicks, and conversions to optimize your campaigns and maximize ROI.",
      },
      {
        icon: "Sparkle",
        title: "Fast Onboarding",
        description: "Onboard your team quickly with simple, collaborative workflows.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Everything you need for email marketing",
    subtitle:
      "MailForge gives you the power to design, send, and analyze striking campaigns with zero hassle.",
    items: [
      { icon: "TabletSmartphone", title: "Responsive By Default", description: "Your emails look great on every device, automatically." },
      { icon: "BadgeCheck", title: "Visual Editor", description: "Build campaigns visually—no code required, just drag and drop." },
      { icon: "Users2", title: "List Segmentation", description: "Target users by behavior, attributes, or segments for greater impact." },
      { icon: "Clock", title: "Scheduled Sends", description: "Deliver campaigns at the perfect time, automatically." },
      { icon: "BarChart4", title: "Detailed Analytics", description: "Open, click, and conversion tracking with easy reporting." },
      { icon: "Share2", title: "Team Collaboration", description: "Invite, assign, and coordinate on every campaign in real-time." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Optimized for busy teams",
    subtitle:
      "Spend less time fighting with tools and more time growing your audience.",
    items: [
      { title: "Drag-and-drop Builder", description: "Create stunning emails in minutes with our visual editor.", pro: false },
      { title: "Contact Segmentation", description: "Target the right people with flexible, granular segments.", pro: false },
      { title: "SendGrid/SMTP Ready", description: "Easy integration with leading delivery providers.", pro: false },
      { title: "Performance Analytics", description: "See results instantly and make data-driven decisions.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "What MailForge users say",
    reviews: [
      { image: "/demo-img.jpg", name: "Stefan Kim", role: "Marketing Lead", comment: "MailForge made it easy for our team to launch professional campaigns without any hassle.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Aria Vazquez", role: "Growth Manager", comment: "The analytics dashboard gives us exactly what we need to improve our results.", rating: 4.9 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the MailForge team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Adan",
        lastName: "Asim",
        positions: ["Founder"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple Pricing, Unlimited Growth",
    subtitle: "Start for free, then grow as your business grows.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: true,
        price: 0,
        description: "Perfect for personal or side projects",
        buttonText: "Start Sending",
        benefits: ["500 monthly emails", "Core email editor", "List segmentation", "Basic analytics"],
      },
      {
        title: "Team",
        popular: false,
        price: 49,
        description: "Best for growing teams and marketers",
        buttonText: "Upgrade to Team",
        benefits: ["Unlimited campaigns", "Advanced analytics", "Collaboration", "Priority support"],
      },
      {
        title: "Business",
        popular: false,
        price: 149,
        description: "For businesses that need scale and support",
        buttonText: "Contact sales",
        benefits: ["10,000+ contacts", "Dedicated onboarding", "Deliverability consulting", "Integrations"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to MailForge",
    description:
      "Got questions, feature ideas, or want a demo? Let’s chat and help you send better emails.",
    mailtoAddress: "adan@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote, Global" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "adan@bidx.ai" },
      hours: { label: "Visit us", value: ["Mon - Fri", "9am - 6pm GMT"] },
    },
    formSubjects: ["Schedule a Demo", "Support", "Billing", "Feature Request"],
    formSubmitLabel: "Send Message",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    items: [
      { question: "Can I use MailForge for free?", answer: "Yes, the Free plan is available for all new users. Upgrade for more features." },
      { question: "Do I need technical skills to use MailForge?", answer: "No coding required. Our campaign builder is visual and intuitive for everyone." },
      { question: "Can my team collaborate on campaigns?", answer: "Absolutely! Invite team members to work together in real-time." },
      { question: "How do I integrate with SendGrid or other providers?", answer: "Easily connect your SMTP or SendGrid API for reliable delivery." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "MailForge",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "adan@bidx.ai", href: "mailto:adan@bidx.ai" },
          { label: "Github", href: "#" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 MailForge. All Rights Reserved.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "MailForge",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "MailForge dashboard preview" },
    features: [
      { title: "Effortless Campaign Creation", description: "Visual builder, drag-and-drop, and branded templates." },
      { title: "Smart Audience Management", description: "Segment your lists and personalize outreach." },
      { title: "Real-Time Analytics", description: "Easy, actionable insights for every campaign." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Create Account",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;
export function getHomeContent(): HomeContent {
  return homeContent;
}