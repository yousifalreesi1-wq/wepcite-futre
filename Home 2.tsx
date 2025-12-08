import { Link } from "wouter";
import { ChevronRight, Zap, Shield, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "متاجر متنوعة",
      description: "5 متاجر مختلفة توفر كل ما تحتاجه في السيرفر",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "قوانين عادلة",
      description: "قوانين واضحة ومحترمة لضمان تجربة عادلة للجميع",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "مجتمع نشط",
      description: "انضم إلى مجتمع كبير من لاعبي الرول بلاي",
    },
  ];

  const stores = [
    {
      id: "real-estate",
      emoji: "🏬",
      name: "Real Estate Store",
      description: "العقارات والممتلكات المختلفة",
      color: "from-primary/20 to-primary/5",
    },
    {
      id: "cars",
      emoji: "🚗",
      name: "Special Car Store",
      description: "السيارات الخاصة والمخصصة",
      color: "from-yellow-500/20 to-yellow-500/5",
    },
    {
      id: "general",
      emoji: "🛍️",
      name: "General Store",
      description: "المتجر العام والأدوات",
      color: "from-amber-500/20 to-amber-500/5",
    },
    {
      id: "furniture",
      emoji: "🪑",
      name: "Furniture Store",
      description: "متجر الأثاث والديكور",
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      id: "discord",
      emoji: "🛒",
      name: "Discord Store",
      description: "رتب ديسكورد والمميزات",
      color: "from-indigo-500/20 to-indigo-500/5",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark-gold flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h1 className="heading-font text-5xl md:text-6xl golden-text mb-4 leading-tight">
                  Future City
                </h1>
                <p className="text-2xl text-primary/80 heading-font">
                  Role Play Server
                </p>
              </div>

              <p className="body-font text-lg text-foreground/80 leading-relaxed">
                اختبر تجربة رول بلاي فريدة وممتعة مع متاجر متنوعة وقوانين عادلة. انضم إلى مجتمع Future City وابدأ مغامرتك الآن.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/stores">
                  <a className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth golden-glow-hover font-bold heading-font">
                    استكشف المتاجر
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </Link>

                <a
                  href="https://discord.gg/fc1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-smooth font-bold heading-font"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 00-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.08.08 0 00.087-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.294.075.075 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 01.079.009c.12.098.246.198.373.294a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.076.076 0 00-.041.107c.36.699.77 1.364 1.225 1.994a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-4.467.151-8.95-.682-13.382a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.93-2.157 2.157-2.157 1.226 0 2.157.964 2.157 2.157 0 1.19-.93 2.155-2.157 2.155zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.93-2.157 2.157-2.157 1.226 0 2.157.964 2.157 2.157 0 1.19-.931 2.155-2.157 2.155z" />
                  </svg>
                  انضم الآن
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex flex-col items-center gap-6">
              <div className="golden-glow rounded-full overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="FC Logo"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              <div className="golden-glow rounded-2xl overflow-hidden w-full">
                <img
                  src="/images/banner.webp"
                  alt="Future City"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="heading-font text-4xl golden-text text-center mb-16">
            المميزات الرئيسية
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-card rounded-xl border border-primary/20 golden-glow-hover transition-smooth hover:border-primary/50 group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-smooth">
                  {feature.icon}
                </div>
                <h3 className="heading-font text-xl golden-text mb-3">
                  {feature.title}
                </h3>
                <p className="body-font text-foreground/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stores Preview */}
      <section className="py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="heading-font text-4xl golden-text text-center mb-4">
            المتاجر المتاحة
          </h2>
          <p className="body-font text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            اختر من بين 5 متاجر مختلفة توفر كل ما تحتاجه لتطوير شخصيتك في السيرفر
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <Link key={store.id} href="/stores">
                <a
                  className={`p-8 rounded-xl border border-primary/20 golden-glow-hover transition-smooth hover:border-primary/50 bg-gradient-to-br ${store.color} group cursor-pointer`}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-smooth">
                    {store.emoji}
                  </div>
                  <h3 className="heading-font text-xl golden-text mb-2">
                    {store.name}
                  </h3>
                  <p className="body-font text-foreground/70 text-sm">
                    {store.description}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-gold rounded-2xl p-12 text-center golden-glow">
            <h2 className="heading-font text-4xl text-primary-foreground mb-4">
              هل أنت مستعد؟
            </h2>
            <p className="body-font text-primary-foreground/80 mb-8 text-lg">
              انضم إلى مجتمع Future City وابدأ مغامرتك في عالم الرول بلاي
            </p>
            <a
              href="https://discord.gg/fc1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-smooth font-bold heading-font"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 00-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.08.08 0 00.087-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.294.075.075 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 01.079.009c.12.098.246.198.373.294a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.076.076 0 00-.041.107c.36.699.77 1.364 1.225 1.994a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-4.467.151-8.95-.682-13.382a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.93-2.157 2.157-2.157 1.226 0 2.157.964 2.157 2.157 0 1.19-.93 2.155-2.157 2.155zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.93-2.157 2.157-2.157 1.226 0 2.157.964 2.157 2.157 0 1.19-.931 2.155-2.157 2.155z" />
              </svg>
              انضم إلى السيرفر
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
