const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className="mx-0 min-[850px]:mx-28 flex text-left p-5 text-slate-900 text-[10px] flex-col">
        <div className="font-semibold">Teman Belanja - Jual Beli Online</div>
        <div className="mt-3">
          Teman Belanja adalah yang menawarkan transaksi jual beli online yang
          menyenangkan, gratis, dan terpercaya. Bergabunglah dengan jutaan
          pengguna lainnya dengan mulai mendaftarkan produk jualan dan
          berbelanja berbagai penawaran menarik kapan saja, di mana saja.
          Keamanan transaksi kamu terjamin.. Ayo gabung dalam komunitas Teman
          Belanja dan mulai belanja sekarang!
        </div>

        <div className="font-semibold mt-3">
          Belanja Online Terpercaya di Teman Belanja
        </div>
        <div className="mt-3">
          Temukan apapun kebutuhanmu dengan harga terbaik cuma di Teman Belanja.
          Berbelanja dan berjualan menjadi lebih menyenangkan dengan fitur
          bagikan ke media sosial, di mana kamu bisa menyebarkan produk yang
          kamu jual atau pun barang favorit kamu hanya dengan satu klik saja
        </div>

        <div className="hidden min-[720px]:block">
          <div className="mt-3 font-semibold">Kategori</div>
          <div className="grid grid-cols-6 mt-3 gap-2">
            <div className="flex flex-col">
              <div className="font-semibold">BERAS ASN</div>
              <div>Beras</div>
              <div>Kemasan</div>
            </div>
            <div className="flex flex-col ">
              <div className="font-semibold">MARKETING PANGAN</div>
              <div>Camilan</div>
              <div>Kopi</div>
              <div>VCO</div>
              <div>Jamu dan Obat Tradisional</div>
              <div>Sembako</div>
              <div>Pengadaan Makanan dan Minuman</div>
              <div>Buah dan Sayur</div>
            </div>
            <div className="flex flex-col ">
              <div className="font-semibold">PENGGAK LEMBAKU</div>
              <div>DS Penggak</div>
              <div>Kemasan Penggak</div>
              <div>Percetakan Penggak</div>
              <div>Lembaku Penggak</div>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold">PETERNAKAN</div>
              <div>Peternakan</div>
            </div>
            <div className="flex flex-col ">
              <div className="font-semibold">APD</div>
              <div>APD Penggak</div>
            </div>
            <div className="flex flex-col ">
              <div className="font-semibold">MARKETING PROJECT</div>
              <div>Marketing Project</div>
              <div>Alat dan Bahan Gizi</div>
              <div>Alat Menjahit</div>
              <div>Alat Listrik</div>
              <div>Alat Kebersihan</div>
            </div>
          </div>
        </div>

        <hr />
        <div className="mt-10 font-semibold">
          © Teman Belanja 2023. Hak Cipta Dilindungi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
