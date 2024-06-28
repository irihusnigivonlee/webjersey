document
  .getElementById("ticket-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const itemName = document.getElementById("itemName").value;
    const itemType = document.getElementById("itemType").value;

    const message = `Nama: ${name}\nEmail: ${email}\nAlamat: ${address}\nNomor Telepon: ${phone}\nNama Barang: ${itemName}\nType: ${itemType}`;

    // Tampilkan notifikasi
    document.getElementById("notification").style.display = "block";

    const whatsappUrl = `https://api.whatsapp.com/send?phone=6282354730849&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  });
