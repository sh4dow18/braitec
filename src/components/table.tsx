// Table Stylesheets
import "@/stylesheets/components/table.css";
// Table Requirements
import Image from "next/image";
// Table Types
type TableHeaders = {
  name: string;
  image?: string;
}[];
type TableRow = {
  name?: string;
  dataList: (string | boolean)[];
}[];
// Table Props
type Props = {
  headersList: TableHeaders;
  rowsList: TableRow;
  regularLastChild?: boolean;
  smallData?: boolean;
  noScroll?: boolean;
};
// Table Get Symbol function that gets a boolean and return a symbol
const GetSymbol = (element: boolean) => {
  return element ? "✓" : "✗";
};
// Table Main Function
function Table({
  headersList,
  rowsList,
  regularLastChild,
  smallData,
  noScroll,
}: Props) {
  // Returns Table Component
  return (
    <div
      className={`table-container ${
        noScroll === true ? "no-scroll" : ""
      }`.trimEnd()}
    >
      <p>Deslice a los Lados para ver Todos los Paquetes</p>
      <div>
        {/* Can use Small Data Prop to Reduce Padding in Table Cells */}
        {/* Can use Regular Last Child Prop to make the tr last child normal */}
        <table
          className={
            regularLastChild || smallData
              ? `${smallData === true ? "small-data" : undefined} ${
                  regularLastChild === true ? "regular-child" : undefined
                }`.trim()
              : undefined
          }
        >
          <thead>
            <tr>
              {/* Blank Table Header, because a Blank Space is Needed */}
              {rowsList[0].name && <th scope="col"></th>}
              {/* Displays Each Item as a Column Header */}
              {/* The Images Must be in a Public Folder */}
              {headersList.map((header, index) => (
                <th key={index} scope="col">
                  {/* Show image if sent */}
                  {header.image && (
                    <Image
                      src={`/${header.image}.jpg`}
                      alt={`Imagen de ${header.name}`}
                      width={150}
                      height={150}
                    />
                  )}
                  <p>{header.name}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Displays Each Item as a Row */}
            {rowsList.map((row, index) => (
              <tr key={index}>
                {/* Shows Row Name First, if sent */}
                {row.name && <th scope="row">{row.name}</th>}
                {/* Displays Each Item as a Row Data */}
                {row.dataList.map((data, dataIndex) => (
                  // If the Data is Boolean, Displays a Symbol
                  // If the Data is True, It Displays a Green Tick, if not, a Red Cross.
                  <td
                    key={dataIndex}
                    className={
                      typeof data === "boolean"
                        ? `symbol ${data ? "green" : "red"}`
                        : undefined
                    }
                  >
                    {typeof data === "boolean" ? GetSymbol(data) : data}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
