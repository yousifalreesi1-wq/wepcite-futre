import { useState } from "react";
import { stores } from "@/lib/storeData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

export default function Stores() {
  const [selectedStore, setSelectedStore] = useState(stores[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = selectedStore.products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-dark-gold flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-primary/20 py-12">
          <div className="container mx-auto px-4">
            <h1 className="heading-font text-5xl golden-text mb-4">المتاجر</h1>
            <p className="body-font text-foreground/70 text-lg">
              اختر المتجر الذي تريد واستكشف جميع المنتجات المتاحة
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Store Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {stores.map((store) => (
                <button
                  key={store.id}
                  onClick={() => {
                    setSelectedStore(store);
                    setSearchQuery("");
                  }}
                  className={`p-4 rounded-lg border-2 transition-smooth text-center group ${
                    selectedStore.id === store.id
                      ? "border-primary bg-primary/10 golden-glow"
                      : "border-primary/20 hover:border-primary/50"
                  }`}
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-smooth">
                    {store.emoji}
                  </div>
                  <h3 className="heading-font text-sm golden-text line-clamp-2">
                    {store.name.split(" ").slice(1).join(" ")}
                  </h3>
                </button>
              ))}
            </div>

            {/* Store Info */}
            <div className="mb-8 p-6 bg-card rounded-xl border border-primary/20 golden-glow">
              <h2 className="heading-font text-3xl golden-text mb-2">
                {selectedStore.emoji} {selectedStore.name}
              </h2>
              <p className="body-font text-foreground/70">
                {selectedStore.description}
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-8 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/50 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن منتج..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-primary/20 rounded-lg text-foreground placeholder-foreground/50 focus:border-primary focus:outline-none transition-smooth"
              />
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="p-6 bg-card rounded-xl border border-primary/20 golden-glow-hover transition-smooth hover:border-primary/50 group"
                  >
                    <h3 className="heading-font text-xl golden-text mb-3 group-hover:text-primary/80 transition-smooth">
                      {product.name}
                    </h3>

                    <div className="space-y-2 mb-4 text-sm text-foreground/70">
                      {product.price > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="body-font">السعر:</span>
                          <span className="text-primary font-bold">
                            ${product.price.toLocaleString()}
                          </span>
                        </div>
                      )}

                      {product.rooms && (
                        <div className="flex justify-between items-center">
                          <span className="body-font">الغرف:</span>
                          <span className="text-primary font-bold">
                            {product.rooms}r
                          </span>
                        </div>
                      )}

                      {product.bedrooms && (
                        <div className="flex justify-between items-center">
                          <span className="body-font">الأسرة:</span>
                          <span className="text-primary font-bold">
                            {product.bedrooms}sr
                          </span>
                        </div>
                      )}
                    </div>

                    {product.description && (
                      <p className="body-font text-foreground/60 text-sm mb-4">
                        {product.description}
                      </p>
                    )}

                    <a
                      href="https://discord.gg/fc1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth text-center font-semibold text-sm group-hover:golden-glow-hover"
                    >
                      اطلب الآن
                    </a>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="body-font text-foreground/50 text-lg">
                    لم يتم العثور على منتجات
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
