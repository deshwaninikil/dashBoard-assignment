export const Table = () => {
  return (
    <>
      <div className="container tableMain">
        <h1 className="mb-0 font-weight-bold text-gray-800">Recent Sales</h1>
        <table className="table mt-3">
          <thead>
            <tr>
              <th className=" font-weight-bold text-gray-800">Main Heading</th>
              <th className="font-weight-bold text-gray-800">Table Heading</th>
              <th className="font-weight-bold text-gray-800">Creation Date</th>
              <th className=" font-weight-bold text-gray-800">Price</th>
              <th className=" font-weight-bold text-gray-800">No. of Rooms</th>
              <th className=" font-weight-bold text-gray-800">Hotel Name</th>
              <th className="font-weight-bold text-gray-800">Total Sales</th>
              <th className="font-weight-bold text-gray-800">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4877843887</td>
              <td>DD/MM/YY</td>
              <td>$56.07</td>
              <td>3</td>
              <td>XYZ</td>
              <td>$90.000</td>
              <td>Table Data 6</td>
              <td>
                <button type="button" className="tableBtn btn-primary">
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td>4877843887</td>
              <td>DD/MM/YY</td>
              <td>$56.07</td>
              <td>3</td>
              <td>XYZ</td>
              <td>$90.000</td>
              <td>Table Data 6</td>
              <td>
                <button type="button" className="tableBtn btn-primary">
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td>4877843887</td>
              <td>DD/MM/YY</td>
              <td>$56.07</td>
              <td>3</td>
              <td>XYZ</td>
              <td>$90.000</td>
              <td>Table Data 6</td>
              <td>
                <button type="button" className="tableBtn btn-primary">
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
