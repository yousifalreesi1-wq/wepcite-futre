import { storeRules, activationTimes } from "@/lib/storeData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertCircle, Clock } from "lucide-react";

export default function Rules() {
  return (
    <div className="min-h-screen bg-gradient-dark-gold flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-primary/20 py-12">
          <div className="container mx-auto px-4">
            <h1 className="heading-font text-5xl golden-text mb-4">🛒 قوانين المتجر</h1>
            <p className="body-font text-foreground/70 text-lg">
              اقرأ القوانين بعناية قبل إجراء أي عملية شراء
            </p>
          </div>
        </section>

        {/* Rules Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-6 mb-12">
              {storeRules.map((rule, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-card rounded-xl border border-primary/20 golden-glow-hover transition-smooth hover:border-primary/50"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-primary mt-1" />
                    </div>
                    <div>
                      <h3 className="heading-font text-lg golden-text mb-2">
                        القانون {idx + 1}
                      </h3>
                      <p className="body-font text-foreground/80 leading-relaxed">
                        {rule}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Activation Times */}
            <div className="p-8 bg-gradient-gold rounded-2xl golden-glow mb-12">
              <h2 className="heading-font text-3xl text-primary-foreground mb-8 flex items-center gap-3">
                <Clock className="w-8 h-8" />
                أوقات التفعيل
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Voice */}
                <div className="bg-primary-foreground/10 p-6 rounded-lg border border-primary-foreground/20">
                  <h3 className="heading-font text-xl text-primary-foreground mb-4">
                    🎤 صوتي
                  </h3>
                  <ul className="space-y-2">
                    {activationTimes.voice.map((day) => (
                      <li
                        key={day}
                        className="body-font text-primary-foreground/90 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                        {day}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Text */}
                <div className="bg-primary-foreground/10 p-6 rounded-lg border border-primary-foreground/20">
                  <h3 className="heading-font text-xl text-primary-foreground mb-4">
                    📝 كتابي
                  </h3>
                  <ul className="space-y-2">
                    {activationTimes.text.map((day) => (
                      <li
                        key={day}
                        className="body-font text-primary-foreground/90 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                        {day}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Both */}
                <div className="bg-primary-foreground/10 p-6 rounded-lg border border-primary-foreground/20">
                  <h3 className="heading-font text-xl text-primary-foreground mb-4">
                    🎤📝 الاثنان معاً
                  </h3>
                  <ul className="space-y-2">
                    {activationTimes.both.map((day) => (
                      <li
                        key={day}
                        className="body-font text-primary-foreground/90 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                        {day}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
              <h3 className="heading-font text-lg text-red-400 mb-2">⚠️ تنبيه مهم</h3>
              <p className="body-font text-foreground/80">
                عدم الالتزام بهذه القوانين قد يؤدي إلى إغلاق تذكرتك أو منعك من الشراء مستقبلاً. تأكد من قراءة جميع القوانين بعناية قبل التواصل مع الإدارة.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
