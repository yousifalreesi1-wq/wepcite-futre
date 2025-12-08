import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-dark-gold flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center py-20">
          <h1 className="heading-font text-9xl golden-text mb-4">404</h1>
          <h2 className="heading-font text-4xl golden-text mb-4">الصفحة غير موجودة</h2>
          <p className="body-font text-foreground/70 text-lg mb-8 max-w-md mx-auto">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم حذفها.
          </p>

          <Link href="/">
            <a className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth golden-glow-hover font-bold heading-font">
              <Home className="w-5 h-5" />
              العودة إلى الرئيسية
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
