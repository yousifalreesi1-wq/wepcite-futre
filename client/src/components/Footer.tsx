import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark-gold border-t border-primary/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="heading-font text-lg golden-text mb-4">Future City</h3>
            <p className="text-foreground/80 text-sm body-font">
              سيرفر رول بلاي متقدم يوفر تجربة لعب فريدة وممتعة مع متاجر متنوعة وقوانين عادلة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-font text-base golden-text mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-foreground/70 hover:text-primary transition-smooth">
                    الرئيسية
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/stores">
                  <a className="text-foreground/70 hover:text-primary transition-smooth">
                    المتاجر
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/rules">
                  <a className="text-foreground/70 hover:text-primary transition-smooth">
                    القوانين
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="heading-font text-base golden-text mb-4">معلومات</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/protocols">
                  <a className="text-foreground/70 hover:text-primary transition-smooth">
                    البروتوكلات
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/gang-rules">
                  <a className="text-foreground/70 hover:text-primary transition-smooth">
                    قوانين العصابات
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="heading-font text-base golden-text mb-4">تواصل معنا</h4>
            <a
              href="https://discord.gg/fc1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth golden-glow-hover text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 00-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.08.08 0 00.087-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.294.075.075 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 01.079.009c.12.098.246.198.373.294a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.076.076 0 00-.041.107c.36.699.77 1.364 1.225 1.994a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-4.467.151-8.95-.682-13.382a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.93-2.157 2.157-2.157 1.226 0 2.157.964 2.157 2.157 0 1.19-.93 2.155-2.157 2.155zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.93-2.157 2.157-2.157 1.226 0 2.157.964 2.157 2.157 0 1.19-.931 2.155-2.157 2.155z" />
              </svg>
              Discord
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60 text-center md:text-left">
              © {currentYear} Future City Role Play. جميع الحقوق محفوظة.
            </p>
            <p className="text-sm text-primary font-semibold heading-font">
              Developer by ALQ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
