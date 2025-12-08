export interface Product {
  id: string;
  name: string;
  price: number;
  rooms?: number;
  bedrooms?: number;
  description?: string;
  emoji?: string;
}

export interface Store {
  id: string;
  name: string;
  emoji: string;
  description: string;
  products: Product[];
}

export const stores: Store[] = [
  {
    id: "real-estate",
    name: "🏬 Real Estate Store",
    emoji: "🏬",
    description: "العقارات والممتلكات",
    products: [
      { id: "1", name: "غرفة", price: 100000, rooms: 80, bedrooms: 4 },
      { id: "2", name: "منزل", price: 300000, rooms: 240, bedrooms: 8 },
      { id: "3", name: "فيلا", price: 900000, rooms: 399, bedrooms: 15 },
      { id: "4", name: "قصر", price: 5000000, rooms: 799, bedrooms: 25 },
      { id: "5", name: "قلعة", price: 10000000, rooms: 3999, bedrooms: 75 },
      { id: "6", name: "مستودع صغير", price: 200000, rooms: 99, bedrooms: 5 },
      { id: "7", name: "مستودع متوسط", price: 400000, rooms: 299, bedrooms: 10 },
      { id: "8", name: "مستودع كبير", price: 750000, rooms: 499, bedrooms: 15 },
      { id: "9", name: "مستودع ضخم", price: 1000000, rooms: 799, bedrooms: 30 },
      { id: "10", name: "بقالة", price: 250000, rooms: 499, bedrooms: 20 },
      { id: "11", name: "مطعم", price: 300000, rooms: 699, bedrooms: 27 },
      { id: "12", name: "تأجير دراجات", price: 300000, rooms: 799, bedrooms: 35 },
      { id: "13", name: "تأجير سيارات", price: 800000, rooms: 899, bedrooms: 40 },
      { id: "14", name: "فندق", price: 2500000, rooms: 999, bedrooms: 55 },
    ],
  },
  {
    id: "cars",
    name: "🚗 Special Car Store",
    emoji: "🚗",
    description: "السيارات الخاصة والمخصصة",
    products: [
      { id: "1", name: "سيارة جاهزة خاصة", price: 500000, rooms: 399, bedrooms: 18 },
      { id: "2", name: "سيارة مخصصة خاصة", price: 1000000, rooms: 799, bedrooms: 37 },
    ],
  },
  {
    id: "general",
    name: "🛍️ General Store",
    emoji: "🛍️",
    description: "المتجر العام والأدوات",
    products: [
      { id: "1", name: "فك الباند", price: 0, rooms: 1099, bedrooms: 40 },
      { id: "2", name: "إضافة شخصية ثانية", price: 0, rooms: 350, bedrooms: 15 },
      { id: "3", name: "سلاح", price: 0, rooms: 79, bedrooms: 4 },
      { id: "4", name: "كل 5000$", price: 0, rooms: 30, bedrooms: 2 },
      { id: "5", name: "التفعيل الفوري", price: 0, rooms: 100, bedrooms: 5 },
      { id: "6", name: "طلب خاص", price: 0 },
    ],
  },
  {
    id: "furniture",
    name: "🪑 Furniture Store",
    emoji: "🪑",
    description: "متجر الأثاث والديكور",
    products: [
      { id: "1", name: "كنبة", price: 3000, rooms: 19, bedrooms: 1 },
      { id: "2", name: "سرير", price: 3500, rooms: 19, bedrooms: 1 },
      { id: "3", name: "دولاب", price: 2500, rooms: 19, bedrooms: 1 },
      { id: "4", name: "كرسي", price: 1500, rooms: 14, bedrooms: 0.5 },
      { id: "5", name: "طاولة", price: 5000, rooms: 39, bedrooms: 2 },
      { id: "6", name: "لمبة", price: 1000, rooms: 9, bedrooms: 0.5 },
      { id: "7", name: "سجادة", price: 2000, rooms: 19, bedrooms: 1 },
      { id: "8", name: "لوحة والصورة من اختيارك", price: 4000, rooms: 29, bedrooms: 1.5 },
      { id: "9", name: "سيت اب", price: 5000, rooms: 39, bedrooms: 2 },
      { id: "10", name: "أدوات مطبخية بالكامل", price: 7000, rooms: 59, bedrooms: 2.5 },
      { id: "11", name: "خزنة شخصية", price: 75000, rooms: 299, bedrooms: 16 },
      { id: "12", name: "خزنة تبديل ملابس", price: 75000, rooms: 299, bedrooms: 16 },
      { id: "13", name: "طاولة تصنيع الخفيف", price: 225000, rooms: 499, bedrooms: 24 },
      { id: "14", name: "زنزانة بالمقر", price: 55000, rooms: 239, bedrooms: 10 },
      { id: "15", name: "بوابة بطاقة", price: 23000, rooms: 99, bedrooms: 4.5 },
      { id: "16", name: "بوابة بإصلاحيات", price: 45000, rooms: 199, bedrooms: 9 },
      { id: "17", name: "تأثيث غرفة كاملة", price: 45000, rooms: 199, bedrooms: 9 },
    ],
  },
  {
    id: "discord",
    name: "🛒 Discord Store",
    emoji: "🛒",
    description: "رتب ديسكورد والمميزات",
    products: [
      {
        id: "1",
        name: "Photo",
        price: 5000,
        description: "يمكنك إرسال صور فقط",
      },
      {
        id: "2",
        name: "Fire",
        price: 7000,
        description: "يمكنك إرسال صور وتغيير اسمك واشياء أخرى",
      },
      {
        id: "3",
        name: "Special",
        price: 9000,
        description: "مميز مع صلاحيات إضافية",
      },
      {
        id: "4",
        name: "High Class",
        price: 10000,
        description: "رتبة عالية الجودة مع مميزات متقدمة",
      },
    ],
  },
];

export const storeRules = [
  "جميع مشتريات نهائية ولا يمكن ارجاعها. في حال بـ المنتج مشكلة او قلتش سيتم حله او ارجع الاموال لـ صاحبة و سحب ملكية منتج",
  "اسعار ثابتة يمنع تفاوض عليها بتاتا سيتم حذف طلبك",
  "نقل ملكية لـ صاحب طلب فقط ولا تنقل لـ اي شخص آخر إلا بعد ما تم نقل ملكية لـ مشتري",
  "يجب احترام ادارة المتجر وعدم الاستهبال في تكت المتجر في حال استهبلت، سيتم إغلاق تكت فورا",
  "يمنع استغلال ثغرات المتجر او محاولة اللعب على ادارة المتجر بـ اي طريقة لان سوف تمنعك من الشراء مره اخرى",
];

export const activationTimes = {
  voice: ["الأحد", "الثلاثاء", "الخميس"],
  text: ["الاثنين", "الأربعاء", "السبت"],
  both: ["الجمعة"],
};
