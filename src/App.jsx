import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        <div>
          <h2 className="text-xl font-bold mb-2">LATIHAN 1 - Navbar dengan Flexbox</h2>
          <nav className="p-4 bg-gray-100 flex flex-col md:flex-row md:justify-between items-center">
            {/* Kiri - Logo */}
            <div className="font-bold text-lg mb-2 md:mb-0">MyLogo</div>

            {/* Kanan - Menu */}
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <hr />
        {/* LATIHAN 2 - GRID GALERI */}
        <div>
          <h2 className="text-xl font-bold mb-2">LATIHAN 2 - Grid Galeri Gambar</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <img
              src="https://www.placehold.co/200x200"
              alt="Gambar Galeri"
              className="h-48 object-cover"
            />
            <img
              src="https://www.placehold.co/200x200"
              alt="Gambar Galeri"
              className="h-48 object-cover"
            />
            <img
              src="https://www.placehold.co/200x200"
              alt="Gambar Galeri"
              className="h-48 object-cover"
            />
            <img
              src="https://www.placehold.co/200x200"
              alt="Gambar Galeri"
              className="h-48 object-cover"
            />
            <img
              src="https://www.placehold.co/200x200"
              alt="Gambar Galeri"
              className="h-48 object-cover"
            />
            <img
              src="https://www.placehold.co/200x200"
              alt="Gambar Galeri"
              className="h-48 object-cover"
            />
          </div>
        </div>
        <hr />
        {/* LATIHAN 3 - PRICING TABLE */}
        <div>
          <h2 className="text-xl font-bold mb-2">LATIHAN 3 - Pricing Table</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="bg-gray-200 p-6 rounded text-center">
              Basic
              <br />
              Rp 50.000
            </div>
            <div className="bg-blue-200 p-8 rounded text-center">
              Pro
              <br />
              Rp 100.000
            </div>
            <div className="bg-gray-200 p-6 rounded text-center">
              Premium
              <br />
              Rp 200.000
            </div>
          </div>
        </div>
        <hr />
        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        <div>
          <h2 className="text-xl font-bold mb-2">LATIHAN 4 - Layout Dashboard Sederhana</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-screen">
            <header className="md:col-span-12 bg-gray-300 p-4">Header</header>
            <aside className="md:col-span-3 bg-gray-200 p-4">Sidebar</aside>
            <main className="md:col-span-9 bg-white p-4 border">Content</main>
            <footer className="md:col-span-12 bg-gray-300 p-4">Footer</footer>
          </div>
        </div>
        <hr />
        {/* LATIHAN 5 - CARD PRODUCT */}
        <div>
          <h2 className="text-xl font-bold mb-2">LATIHAN 5 - Card Product dengan Flexbox</h2>
          <div className="p-4 border flex flex-col md:flex-row items-center md:items-start gap-4">
            <img
              src="https://www.placehold.co/80x80"
              alt="Gambar Produk"
              className="h-20 w-20 object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="font-bold">Nama Produk</h3>
              <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;