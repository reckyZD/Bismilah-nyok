document.addEventListener('alpine:init', () => {
    Alpine.data('produk', () => ({
        items: [
            { id: 1, name: 'Kolase foto', img: '2.jpg', price: '35000'},
            { id: 2, name: 'Printing', img: '4.jpg', price: '15000'},
            { id: 3, name: 'Voucher ax', img: '5.jpg', price: '12000'},
            { id: 4, name: 'Voucher tri', img: '6.jpg', price: '15000'},
            { id: 5, name: 'List isat', img: '7.jpg', price: '1000'},
            { id: 6, name: 'List tri', img: '8.jpg', price: '1000'},
            { id: 7, name: 'List tsel', img: '9.jpg', price: '1000'},
            { id: 8, name: 'List axis', img: '10.jpg', price: '1000'},
            { id: 9, name: 'List game', img: '11.jpg', price: '1000'},
            { id: 10, name: 'Stiker', img: '3.jpg', price: '10000'},
        ],
    }));
    Alpine.data('menu', () => ({
        items: [
            { id: 1, name: 'Kolase foto', img: '2.jpg', price: '35000'},
            { id: 2, name: 'Printing', img: '4.jpg', price: '15000'},
            { id: 3, name: 'Voucher ax', img: '5.jpg', price: '12000'},
            { id: 4, name: 'Voucher tri', img: '6.jpg', price: '15000'},
            { id: 5, name: 'List isat', img: '7.jpg', price: '1000'},
            { id: 6, name: 'List tri', img: '8.jpg', price: '1000'},
            { id: 7, name: 'List tsel', img: '9.jpg', price: '1000'},
            { id: 8, name: 'List axis', img: '10.jpg', price: '1000'},
            { id: 9, name: 'List game', img: '11.jpg', price: '35000'},
            { id: 10, name: 'Stiker', img: '3.jpg', price: '10000'},        ],
    }));
    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // jika apakah ada barang yg sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // jika belum ada / cart masih kosong
            if (!cartItem) {
                this.items.push({...newItem, quantity: 1, total: parseFloat(newItem.price) });
                this.quantity++;
                this.total += parseFloat(newItem.price);
            } else {
                // jika barangnya sudah ada di cart, cek apakah barang beda atau sama dengan yg ada di cart
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        // jika barang sudah ada, tambah quantity dan subtotalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += parseFloat(newItem.price);
                        return item;
                    }
                });
            }
        },
        remove(id) {
            // ambil item yg mau di remove berdasarkan id
            const cartItemIndex = this.items.findIndex((item) => item.id === id);
            const cartItem = this.items[cartItemIndex];
        
            // jika item lebih dari satu
            if (cartItem.quantity > 1) {
                // telusuri 1 per 1
                this.items = this.items.map((item) => {
                    // jika bukan barang yg di klik
                    if (item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= parseFloat(cartItem.price); // Menggunakan cartItem.price daripada newItem.price
                        return item;
                    }
                });
            } else if (cartItem.quantity === 1) {
                // jika barangnya sisa 1
                this.items.splice(cartItemIndex, 1);
                this.quantity--;
                this.total -= parseFloat(cartItem.price); // Menggunakan cartItem.price daripada newItem.price
            }
        }
    });
});

// konversi nilai rupiah
const rupiah = (Number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(Number);
};