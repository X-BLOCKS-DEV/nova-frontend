interface TableProps {
  headers: string[];
  rows: string[][];
}

const Table = (props: TableProps) => {
  const headers = props.headers;
  const rows = props.rows;
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <table className="w-full">
        <thead>
          <tr className="text-sm font-semibold tracking-wide text-left text-gray-900 bg-gray-100 border-b border-gray-600">
            {headers.map((h, i) => {
              return (
                <th className="px-3 py-2" key={i}>
                  {h}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows.map((row) => {
            return (
              <tr className="text-gray-700">
                {row.map((e) => {
                  return (
                    <td className="px-4 py-3 text-sm font-semibold border">
                      {e}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
