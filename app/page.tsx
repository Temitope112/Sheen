export default function Dashboard() {
  const orders = [
    {
      id: "#56889",
      name: "Albert Flores",
      address: "8502 Preston Rd. Inglewood, Maine 98380",
      status: "Delivered",
      color: "bg-green-100 text-green-500",
    },
    {
      id: "#50924",
      name: "Marvin McKinney",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
      status: "Pending",
      color: "bg-yellow-100 text-yellow-500",
    },
    {
      id: "#69398",
      name: "Cody Fisher",
      address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      status: "Pending",
      color: "bg-yellow-100 text-yellow-500",
    },
    {
      id: "#50929",
      name: "Darlene Robertson",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
      status: "Delivered",
      color: "bg-green-100 text-green-500",
    },
    {
      id: "#63508",
      name: "Esther Howard",
      address: "3891 Ranchview Dr. Richardson, California 62639",
      status: "Failed",
      color: "bg-red-100 text-red-400",
    },
    {
      id: "#36683",
      name: "Jenny Wilson",
      address: "3517 W. Gray St. Utica, Pennsylvania 57867",
      status: "Pending",
      color: "bg-yellow-100 text-yellow-500",
    },
    {
      id: "#89281",
      name: "Theresa Webb",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      status: "Delivered",
      color: "bg-green-100 text-green-500",
    },
    {
      id: "#35760",
      name: "Cameron Williamson",
      address: "4140 Parker Rd. Allentown, New Mexico 31134",
      status: "Delivered",
      color: "bg-green-100 text-green-500",
    },
    {
      id: "#92019",
      name: "Savannah Nguyen",
      address: "6391 Elgin St. Celina, Delaware 10299",
      status: "Delivered",
      color: "bg-green-100 text-green-500",
    },
    {
      id: "#72173",
      name: "Bessie Cooper",
      address: "2464 Royal Ln. Mesa, New Jersey 45463",
      status: "Failed",
      color: "bg-red-100 text-red-400",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F7FA] text-[#1F2937]">
      {/* Sidebar */}
      <div className="w-[230px] bg-white border-r border-gray-200 flex flex-col justify-between">
        <div>
          <div className="px-8 py-8 text-4xl font-black tracking-tight">
            SHEEN
          </div>

          <div className="mt-6 flex flex-col">
            <button className="flex items-center gap-4 px-8 py-5 text-gray-400 hover:bg-gray-50">
              <span>◻</span>
              <span>Overview</span>
            </button>

            <button className="flex items-center gap-4 px-8 py-5 bg-[#F1EEFF] text-[#6D5DFB] font-medium border-l-4 border-[#6D5DFB]">
              <span>⬡</span>
              <span>Orders</span>
            </button>

            <button className="flex items-center gap-4 px-8 py-5 text-gray-400 hover:bg-gray-50 border-t">
              <span>▤</span>
              <span>Transactions</span>
            </button>

            <button className="flex items-center gap-4 px-8 py-5 text-gray-400 hover:bg-gray-50 border-t">
              <span>👤</span>
              <span>Products</span>
            </button>

            <button className="flex items-center gap-4 px-8 py-5 text-gray-400 hover:bg-gray-50 border-t">
              <span>⚙</span>
              <span>Settings</span>
            </button>

            <button className="flex items-center gap-4 px-8 py-5 text-gray-400 hover:bg-gray-50 border-t border-b">
              <span>?</span>
              <span>Help centre</span>
            </button>
          </div>
        </div>

        {/* User */}
        <div className="p-4">
          <div className="flex items-center gap-3 bg-[#FAFAFA] rounded-2xl p-4 border">
            <img
              src="https://i.pravatar.cc/40"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h1 className="text-sm font-semibold">Devon Lane</h1>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 px-12 py-10">
        <div className="mb-8">
          <h1 className="text-5xl font-bold">Orders</h1>
          <p className="text-gray-400 mt-2">
            Stay up-to-date with all sale orders
          </p>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          {/* Top */}
          <div className="flex items-center justify-between mb-8">
            <div className="w-[460px] bg-[#F8FAFC] rounded-xl px-5 py-4 flex items-center gap-3">
              <span className="text-gray-400 text-xl">⌕</span>
              <input
                type="text"
                placeholder="Search orders"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>

            <div className="flex items-center gap-10 text-sm">
              <p>
                <span className="text-gray-400">Filter:</span> All orders
              </p>

              <p>
                <span className="text-gray-400">Sort:</span> This month
              </p>
            </div>
          </div>

          {/* Table */}
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-5 font-medium">Order no.</th>
                <th className="pb-5 font-medium">Recipient’s name</th>
                <th className="pb-5 font-medium">Mailing address</th>
                <th className="pb-5 font-medium">Delivery status</th>
                <th className="pb-5 font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-6">{order.id}</td>

                  <td>{order.name}</td>

                  <td className="text-gray-500">{order.address}</td>

                  <td>
                    <span
                      className={`px-5 py-2 rounded-full text-sm font-medium ${order.color}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="text-gray-400 text-2xl">⋮</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Bottom */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-4 text-gray-400">
              <button>{"<"}</button>

              <button className="w-8 h-8 rounded border text-black">
                1
              </button>

              <button>2</button>
              <button>3</button>
              <button>...</button>
              <button>10</button>

              <button>{">"}</button>
            </div>

            <p className="text-gray-400 text-sm">
              Showing results:{" "}
              <span className="font-semibold text-black">10</span> out of 100
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}