import Select from "react-select";

import Table from "./Table";
import { DefaultPagination } from "./Pagenation";

function RewardTable() {
  const headers = ["Date", "Currency", "Amount", "JPY Value", "Hoge"];
  const rows = [["2022-10-23", "DOT", "1.3", "1000", "hoge"]];

  const showNumOfRows = [
    {
      value: 10,
      label: "10",
    },
    {
      value: 30,
      label: "30",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row p-2 items-center">
        <div className="grow" />
        <Select options={showNumOfRows} />
        <p className="ml-2">columns show</p>
      </div>
      <Table headers={headers} rows={rows} />
      <div className="mx-auto">
        <DefaultPagination />
      </div>
    </div>
  );
}

export default RewardTable;
