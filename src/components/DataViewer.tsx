import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useDataViewerApi } from "../hooks/useDataViewerApi";

const DataViewer = () => {
  const { data = [], isLoading } = useDataViewerApi();

  if (isLoading) return <CircularProgress />;

  const tableHeader = Object.keys(data[0]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {tableHeader.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((city) => (
            <TableRow key={city.City}>
              <TableCell>{city["#"]}</TableCell>
              <TableCell>{city.City}</TableCell>
              <TableCell>{city.Country}</TableCell>
              <TableCell>{city["All Buildings"]}</TableCell>
              <TableCell>{city["100m+"]}</TableCell>
              <TableCell>{city["150m+"]}</TableCell>
              <TableCell>{city["200m+"]}</TableCell>
              <TableCell>{city["300m+"]}</TableCell>
              <TableCell>{city["Telecom Towers"]}</TableCell>
              <TableCell>{city["All Structures"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataViewer;
