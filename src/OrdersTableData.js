export const columns = [
  { 
    field: 'id',
    headerName: 'ID',
    width: 100
  },
  {
    field: 'product',
    headerName: 'Product',
    width: 200,
    editable: true,
      renderCell: (params)=>{
      return(
        <div className='product-cell'>
        <img src={params.row.img} alt="productimage"  className='product-img'/>
        <span>{params.row.product}</span>
        </div>
      )
    } 
  },
  
  {
    field: 'customer',
    headerName: 'Customer',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Amount',
    width: 150,
   
    
  },

  {
    field: 'amount',
    headerName: 'Amount',
    type: 'string',
    width: 150,
    editable: true,
  },

  {
    field: 'method',
    headerName: 'Method',
    type: 'string',
    width: 180,
    editable: true,
  },

  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width: 150,
    editable: true,
    renderCell: (params)=>{
      return(
        <div >
        <span className={`status-cell ${params.row.status}`}>
          {params.row.status}
          </span>
        </div>
      )
    } 
  },

];

export const rows = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2342356,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2342357,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2342358,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2342359,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2342360,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
];