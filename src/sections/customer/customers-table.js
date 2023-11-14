import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { getInitials } from 'src/utils/get-initials';
import Pagination from '@mui/material/Pagination';
import { SeverityPill } from 'src/components/severity-pill';
import { styled } from "@mui/material/styles";
const StyledPagination = styled(Pagination)(() => ({
  "& .Mui-selected": {
    backgroundColor:"#3E97FF!important",
    color: "white"
  }
}));
export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
    searchText
  } = props;

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  ID
                </TableCell>
                <TableCell>
                  DATE REMOVED
                </TableCell>
                <TableCell>
                  LINK
                </TableCell>
                <TableCell>
                  SOURECE
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items
              .filter(row => {
                if(searchText!=undefined)
                if(row.id.toLowerCase().includes(searchText.toLowerCase())
                ||row.dateRemoved.toLowerCase().includes(searchText.toLowerCase())
                ||row.link.toLowerCase().includes(searchText.toLowerCase())
                ||row.source.toLowerCase().includes(searchText.toLowerCase())
                ||row.action.toLowerCase().includes(searchText.toLowerCase()))return row;
              })
              .map((customer) => {
                const isSelected = selected.includes(customer.id);
                // const createdAt = format(customer.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={customer.id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(customer.id);
                          } else {
                            onDeselectOne?.(customer.id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      {/* <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >
                        <Avatar src={customer.avatar}>
                          {getInitials(customer.name)}
                        </Avatar>
                        <Typography variant="subtitle2">
                          {customer.name}
                        </Typography>
                      </Stack> */}
                      {customer.id}
                    </TableCell>
                    <TableCell>
                      {customer.dateRemoved}
                    </TableCell>
                    <TableCell>
                      {/* {customer.address.city}, {customer.address.state}, {customer.address.country} */}
                      {customer.link}
                    </TableCell>
                    <TableCell>
                      {customer.source}
                    </TableCell>
                    <TableCell>
                      {(customer.action=="Remove")?<SeverityPill style={{background: "#E8FFF3", color: "#50CD89"}}>
                        {customer.action}
                      </SeverityPill>:<SeverityPill style={{background: "#FFF5F8", color: "#D9214E"}}>
                        {customer.action}
                      </SeverityPill>}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <div style={{display: "flex", padding:10}}>
        <div  style={{ 
          fontSize: 12,
          color: "grey", 
          borderRadius: 10, 
          backgroundColor:"#F9F9F9", 
          width: 150,
          display:"flex",
          alignItems: "center",
          justifyContent:"center"
          }}>
          Total Results: 455
        </div>
        <div style={{display: "flex", width: "100%"}}>
          <StyledPagination 
            component="div"
            count={count}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
            page={1}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
            shape="rounded" 
            sx={{marginLeft: "auto"}}
            size='large'
          />
        </div>
      
      </div>
    </Card>
  );
};

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
