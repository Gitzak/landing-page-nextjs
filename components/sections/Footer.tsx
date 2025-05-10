import Link from "next/link";

export const Footer = () => {
  const navigationItems = [
    {
      title: "Product",
      items: [
        { title: "Features", href: "/#features" },
        { title: "Use Cases", href: "/#use-cases" },
        { title: "Pricing", href: "/#pricing" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "About us", href: "/about" },
        { title: "Blog", href: "/blog" },
        { title: "Contact", href: "/#contact" },
      ],
    },
    {
      title: "Legal",
      items: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer id="footer" className="w-full pt-20 lg:pt-32 pb-6 bg-green-950 text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Section */}
          <div className="flex flex-col gap-8 items-start">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Moroccan Saas Ai
              </h2>
              <p className="text-lg max-w-md text-background/75">
                Built to empower Moroccan businesses with smart automation and
                AI-first tools — simple, scalable, and ready to go.
              </p>
            </div>
            <div className="flex flex-col text-sm text-background/75 gap-1">
              <p>📍 12 Avenue des Startups, Technopark</p>
              <p>Casablanca, Morocco</p>
              <p>📬 hello@moroccansaas.ai</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {navigationItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <p className="text-xl font-medium">{item.title}</p>
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    className="text-background/75 hover:underline text-sm"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-6 text-sm text-background/50 text-center">
          © {new Date().getFullYear()} Moroccan Saas Ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
