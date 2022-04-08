export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
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
  export const userRows = [
    {
      id: 1,
      username: "Faisal",
      img: "https://media.istockphoto.com/photos/portrait-of-young-happy-indian-business-man-executive-looking-at-picture-id1309489745?b=1&k=20&m=1309489745&s=170667a&w=0&h=Wo_7nESC_ePyEYfEsnOm-rP6ElkxbWqIB3Ga4W3nw8M=",
      status: "active",
      email: "faisal12@gmail.com",
      number: "111 1111 1111",
      adress: 'xyz street abc country',
      age: 35,
    },
    {
      id: 2,
      username: "Muhammad Hamid",
      img: "/DSC_009911.JPG",
      email: "hamid@testmail.com",
      number: "111 1111 1111",
      adress: 'xyz street abc country',
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Zakir Khan",
      img: "https://media.istockphoto.com/photos/portrait-of-young-happy-indian-business-man-executive-looking-at-picture-id1309489745?b=1&k=20&m=1309489745&s=170667a&w=0&h=Wo_7nESC_ePyEYfEsnOm-rP6ElkxbWqIB3Ga4W3nw8M=",
      email: "zak@gmail.com",
      number: "111 1111 1111",
      adress: 'xyz street abc country',
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Abid Ali",
      img: "https://media.istockphoto.com/photos/portrait-of-young-happy-indian-business-man-executive-looking-at-picture-id1309489745?b=1&k=20&m=1309489745&s=170667a&w=0&h=Wo_7nESC_ePyEYfEsnOm-rP6ElkxbWqIB3Ga4W3nw8M=",
      email: "abdid321@gmail.com",
      number: "111 1111 1111",
      adress: 'xyz street abc country',
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Iqbal Naqi",
      img: "https://media.istockphoto.com/photos/portrait-of-young-happy-indian-business-man-executive-looking-at-picture-id1309489745?b=1&k=20&m=1309489745&s=170667a&w=0&h=Wo_7nESC_ePyEYfEsnOm-rP6ElkxbWqIB3Ga4W3nw8M=",
      email: "naqi@gmail.com",
      number: "111 1111 1111",
      adress: 'xyz street abc country',
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Zain Kashif",
      img: "https://media.istockphoto.com/photos/portrait-of-young-happy-indian-business-man-executive-looking-at-picture-id1309489745?b=1&k=20&m=1309489745&s=170667a&w=0&h=Wo_7nESC_ePyEYfEsnOm-rP6ElkxbWqIB3Ga4W3nw8M=",
      email: "Zainkshf@gmail.com",
      number: "111 1111 1111",
      adress: 'xyz street abc country',
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Ali Ehtisham",
      img: "https://media.istockphoto.com/photos/portrait-of-young-happy-indian-business-man-executive-looking-at-picture-id1309489745?b=1&k=20&m=1309489745&s=170667a&w=0&h=Wo_7nESC_ePyEYfEsnOm-rP6ElkxbWqIB3Ga4W3nw8M=",
      email: "alie@gmail.com",
      number: "111 1111 1111",
      adress: 'xyz street abc country',
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Sabir Khan",
      img: "https://media.istockphoto.com/photos/portrait-of-young-happy-indian-business-man-executive-looking-at-picture-id1309489745?b=1&k=20&m=1309489745&s=170667a&w=0&h=Wo_7nESC_ePyEYfEsnOm-rP6ElkxbWqIB3Ga4W3nw8M=",
      email: "sabirkhan3@gmail.com",
      number: "111 1111 1111",
      adress: 'xyz street abc country',
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Sajjjad",
      img: "https://media.istockphoto.com/photos/portrait-of-young-happy-indian-business-man-executive-looking-at-picture-id1309489745?b=1&k=20&m=1309489745&s=170667a&w=0&h=Wo_7nESC_ePyEYfEsnOm-rP6ElkxbWqIB3Ga4W3nw8M=",
      email: "sajjad@gmail.com",
      number: "111 1111 1111",
      adress: 'xyz street abc country',
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Haris Khan",
      img: "https://media.istockphoto.com/photos/portrait-of-young-happy-indian-business-man-executive-looking-at-picture-id1309489745?b=1&k=20&m=1309489745&s=170667a&w=0&h=Wo_7nESC_ePyEYfEsnOm-rP6ElkxbWqIB3Ga4W3nw8M=",
      email: "h123@gmail.com",
      number: "111 1111 1111",
      adress: 'xyz street abc country',
      status: "active",
      age: 65,
    },
  ];