document.addEventListener('alpine:init', () => {
    Alpine.data('produk', () => ({
        items: [
            {id: 1, name: 'kolase foto', img: '2.jpg', price: '35000'},
            {id: 2, name: 'voucher im3', img: '4.jpg', price: '15000'},
            {id: 3, name: 'voucher ax', img: '5.jpg', price: '12000'},
            {id: 4, name: 'voucher tri', img: '6.jpg', price: '15000'},
            {id: 5, name: 'list isat', img: '7.jpg', price: 'free'},
            {id: 6, name: 'list tri', img: '8.jpg', price: 'free'},
            {id: 7, name: 'list tsel', img: '9.jpg', price: 'free'},
            {id: 8, name: 'list axis', img: '10.jpg', price: 'free'},
            {id: 9, name: 'list game', img: '2.jpg', price: '35000'},
            {id: 10, name: 'stiker', img: '3.jpg', price: '10000'},
        ],
    }));
});