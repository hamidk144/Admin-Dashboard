export const productsColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Products",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.productname}
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 230,
    },
  
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div >
           <span className={`cellWithStatus ${params.row.status}`}> {params.row.status} </span>
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const productsRows = [
    {
      id: 1,
      productname: "Air Pods",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      category: "Electronics",
      price: 35 ,
    },
    {
      id: 2,
      productname: "Iphone 12",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "Electronics",
      status: "passive",
      price: 42,
    },
    {
      id: 3,
      productname: "Juicer",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "Cooking",
      status: "pending",
      price: 45,
    },
    {
      id: 4,
      productname: "Spoon",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "Cooking",
      status: "active",
      price: 16,
    },
    {
      id: 5,
      productname: "Ball",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "Sports",
      status: "passive",
      price: 22,
    },
    {
      id: 6,
      productname: "Ice Cream",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "Beverages",
      status: "active",
      price: 15,
    },
    {
      id: 7,
      productname: "Tea Bags",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "grocery",
      status: "passive",
      price: 44,
    },
    {
      id: 8,
      productname: "Green Tea",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "grocery",
      status: "active",
      price: 36,
    },
    {
      id: 9,
      productname: "iMac",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "Electronics",
      status: "pending",
      price: 65,
    },
    {
      id: 10,
      productname: "MacBook Pro",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "Electronics",
      status: "active",
      price: 65,
    },
  ];