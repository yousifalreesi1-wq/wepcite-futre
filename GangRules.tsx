import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, Skull } from "lucide-react";

export default function GangRules() {
  const gangRules = [
    "يمنع تقليد ملابس العصابات أو لون سيارتهم",
    "يمنع الخطف والتهديد في حال وجود مواطن أو 2 من المدنيين أو أكثر",
    "يمنع إهانة المخطوف ويجب التعامل معه بما يحدث ولا يتم الضغط عليه أو إهانته أو استفزازه ويترتب على ذلك الباند",
    "لا يسمح بإطلاق النار العشوائي أو بغرض جذب العساكر",
    "يمنع الإجرام كالخطف والسرقات بمركبات المخصصة للوظائف كالتكسي والسطحات وغيرها",
    "يجب عليك ارتداء القناع فالسرقات تجنب إدراجك في قائمة المطلوبين",
    "يمنع في حالة الاستيقاف المروري خطف العسكري",
    "يمنع استعمال الهوم وقت الفايت",
    "يمنع افتعال فايت دون سبب وعقوبتها الباند النهائي",
    "يمنع عليك كلاعب في السيرفر المحاولة في تسبب أي عداوة بهدف الشخصنة أو التلويت والقتل واستخدام الأسلحة، راح يتم تبنيدك مباشرة",
  ];

  const enemyRules = [
    "العداوة تأتي بعد عدة خلافات داخل الآر بي، أقلها 3 مواقف مع تصوير",
    "المناطق الآمنة أي منطقة فيها اثنين من المدنيين أو المواطنين على الأقل تعتبر منطقة آمنة",
    "أي يمنع الخطف فيها وكذلك الاعتداء",
  ];

  const hostageRules = [
    "لا تعتبر الرهينة مخطوفة إلا في حال تم تقييدها",
    "يحق لها الهروب في حال عدم انتباه الخاطفين",
  ];

  const safeZoneRules = [
    "يمنع الاحتماء والاستفزاز وبيع الممنوعات في المناطق الآمنة",
    "كمثال: شخص هددك يمنع عليك التوجه لأي منطقة آمنة باستثناء مركز الشرطة",
  ];

  const robberyRules = [
    "يسمح بالتهديد وأخذ الشنطة في حالة واحدة: أن ترى الشخص أمامك وهو يأخذ الشنطة",
    "غير هذا لا يُسمح بأخذها",
    "يمنع السرقة قبل الإعصار بـ 5 دقائق",
  ];

  return (
    <div className="min-h-screen bg-gradient-dark-gold flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-primary/20 py-12">
          <div className="container mx-auto px-4">
            <h1 className="heading-font text-5xl golden-text mb-4">💀 قوانين العصابات</h1>
            <p className="body-font text-foreground/70 text-lg">
              قوانين صارمة يجب الالتزام بها من قبل جميع أعضاء العصابات
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Main Gang Rules */}
            <div className="mb-16">
              <h2 className="heading-font text-3xl golden-text mb-8 flex items-center gap-3">
                <Skull className="w-8 h-8" />
                القوانين الأساسية
              </h2>

              <div className="space-y-4">
                {gangRules.map((rule, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-card rounded-xl border border-primary/20 golden-glow-hover transition-smooth hover:border-primary/50"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 pt-1">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20 text-red-400 font-bold heading-font text-sm">
                          {idx + 1}
                        </span>
                      </div>
                      <p className="body-font text-foreground/80 leading-relaxed">
                        {rule}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enemy Rules */}
            <div className="mb-16 p-8 bg-red-500/5 border border-red-500/20 rounded-xl">
              <h3 className="heading-font text-2xl golden-text mb-6">⚔️ قوانين العداوة</h3>
              <ul className="space-y-3">
                {enemyRules.map((rule, idx) => (
                  <li key={idx} className="flex gap-3 body-font text-foreground/80">
                    <span className="text-red-400 font-bold">•</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hostage Rules */}
            <div className="mb-16 p-8 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
              <h3 className="heading-font text-2xl golden-text mb-6">🔗 قوانين الرهائن</h3>
              <ul className="space-y-3">
                {hostageRules.map((rule, idx) => (
                  <li key={idx} className="flex gap-3 body-font text-foreground/80">
                    <span className="text-yellow-400 font-bold">•</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* Safe Zone Rules */}
            <div className="mb-16 p-8 bg-blue-500/5 border border-blue-500/20 rounded-xl">
              <h3 className="heading-font text-2xl golden-text mb-6">🛡️ قوانين المناطق الآمنة</h3>
              <ul className="space-y-3">
                {safeZoneRules.map((rule, idx) => (
                  <li key={idx} className="flex gap-3 body-font text-foreground/80">
                    <span className="text-blue-400 font-bold">•</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* Robbery Rules */}
            <div className="mb-16 p-8 bg-orange-500/5 border border-orange-500/20 rounded-xl">
              <h3 className="heading-font text-2xl golden-text mb-6">💰 قوانين السرقات</h3>
              <ul className="space-y-3">
                {robberyRules.map((rule, idx) => (
                  <li key={idx} className="flex gap-3 body-font text-foreground/80">
                    <span className="text-orange-400 font-bold">•</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* Surveillance Warning */}
            <div className="p-8 bg-red-500/10 border border-red-500/30 rounded-xl">
              <h3 className="heading-font text-2xl text-red-400 mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6" />
                تحذير رقابي
              </h3>
              <p className="body-font text-foreground/80 text-lg leading-relaxed">
                يمنع من جميع العصابات و المجرمين مداهمه مركز او اماكن اخرى بدون اعلان في مجله اجرام = باند ٤ ايام
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
