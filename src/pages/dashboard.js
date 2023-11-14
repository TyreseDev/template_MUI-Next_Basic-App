import { use, useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CustomersTable } from "src/sections/customer/customers-table";
import { CustomersSearch } from "src/sections/customer/customers-search";
import { applyPagination } from "src/utils/apply-pagination";
import { styled, div } from "@mui/material/styles";

const now = new Date();

const data = [
  {
    _id: "5e887ac47eed253091be10cb",
    id: "148525",
    dateRemoved: "23 Sep 2023",
    link: "https://google.com",
    source: "Google",
    action: "Remove"
  },
  {
    _id: "5e887ac47eed253091be10cb",
    id: "458722",
    dateRemoved: "23 Sep 2023",
    link: "https://google.com",
    source: "Reddit",
    action: "Delisted"
  },
  // {
  //   id: "5e887b209c28ac3dd97f6db5",
  //   address: {
  //     city: "Atlanta",
  //     country: "USA",
  //     state: "Georgia",
  //     street: "1865  Pleasant Hill Road",
  //   },
  //   avatar: "/assets/avatars/avatar-fran-perez.png",
  //   createdAt: subDays(subHours(now, 1), 2).getTime(),
  //   email: "fran.perez@devias.io",
  //   name: "Fran Perez",
  //   phone: "712-351-5711",
  // },
  // {
  //   id: "5e887b7602bdbc4dbb234b27",
  //   address: {
  //     city: "North Canton",
  //     country: "USA",
  //     state: "Ohio",
  //     street: "4894  Lakeland Park Drive",
  //   },
  //   avatar: "/assets/avatars/avatar-jie-yan-song.png",
  //   createdAt: subDays(subHours(now, 4), 2).getTime(),
  //   email: "jie.yan.song@devias.io",
  //   name: "Jie Yan Song",
  //   phone: "770-635-2682",
  // },
  // {
  //   id: "5e86809283e28b96d2d38537",
  //   address: {
  //     city: "Madrid",
  //     country: "Spain",
  //     name: "Anika Visser",
  //     street: "4158  Hedge Street",
  //   },
  //   avatar: "/assets/avatars/avatar-anika-visser.png",
  //   createdAt: subDays(subHours(now, 11), 2).getTime(),
  //   email: "anika.visser@devias.io",
  //   name: "Anika Visser",
  //   phone: "908-691-3242",
  // },
  // {
  //   id: "5e86805e2bafd54f66cc95c3",
  //   address: {
  //     city: "San Diego",
  //     country: "USA",
  //     state: "California",
  //     street: "75247",
  //   },
  //   avatar: "/assets/avatars/avatar-miron-vitold.png",
  //   createdAt: subDays(subHours(now, 7), 3).getTime(),
  //   email: "miron.vitold@devias.io",
  //   name: "Miron Vitold",
  //   phone: "972-333-4106",
  // },
  // {
  //   id: "5e887a1fbefd7938eea9c981",
  //   address: {
  //     city: "Berkeley",
  //     country: "USA",
  //     state: "California",
  //     street: "317 Angus Road",
  //   },
  //   avatar: "/assets/avatars/avatar-penjani-inyene.png",
  //   createdAt: subDays(subHours(now, 5), 4).getTime(),
  //   email: "penjani.inyene@devias.io",
  //   name: "Penjani Inyene",
  //   phone: "858-602-3409",
  // },
  // {
  //   id: "5e887d0b3d090c1b8f162003",
  //   address: {
  //     city: "Carson City",
  //     country: "USA",
  //     state: "Nevada",
  //     street: "2188  Armbrester Drive",
  //   },
  //   avatar: "/assets/avatars/avatar-omar-darboe.png",
  //   createdAt: subDays(subHours(now, 15), 4).getTime(),
  //   email: "omar.darobe@devias.io",
  //   name: "Omar Darobe",
  //   phone: "415-907-2647",
  // },
  // {
  //   id: "5e88792be2d4cfb4bf0971d9",
  //   address: {
  //     city: "Los Angeles",
  //     country: "USA",
  //     state: "California",
  //     street: "1798  Hickory Ridge Drive",
  //   },
  //   avatar: "/assets/avatars/avatar-siegbert-gottfried.png",
  //   createdAt: subDays(subHours(now, 2), 5).getTime(),
  //   email: "siegbert.gottfried@devias.io",
  //   name: "Siegbert Gottfried",
  //   phone: "702-661-1654",
  // },
  // {
  //   id: "5e8877da9a65442b11551975",
  //   address: {
  //     city: "Murray",
  //     country: "USA",
  //     state: "Utah",
  //     street: "3934  Wildrose Lane",
  //   },
  //   avatar: "/assets/avatars/avatar-iulia-albu.png",
  //   createdAt: subDays(subHours(now, 8), 6).getTime(),
  //   email: "iulia.albu@devias.io",
  //   name: "Iulia Albu",
  //   phone: "313-812-8947",
  // },
  // {
  //   id: "5e8680e60cba5019c5ca6fda",
  //   address: {
  //     city: "Salt Lake City",
  //     country: "USA",
  //     state: "Utah",
  //     street: "368 Lamberts Branch Road",
  //   },
  //   avatar: "/assets/avatars/avatar-nasimiyu-danai.png",
  //   createdAt: subDays(subHours(now, 1), 9).getTime(),
  //   email: "nasimiyu.danai@devias.io",
  //   name: "Nasimiyu Danai",
  //   phone: "801-301-7894",
  // },
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

const useCustomerIds = (customers) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const [searchText, setSearchText] = useState("");

  const handlePageChange = useCallback((event, value) => {
    console.log(value)
    setPage(value);
  }, []);

  const handleChange = (event, value) => {
    setSearchText(event.target.value);
    event.target.focus()
  };

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  const StyledSelect = styled(Select)(({ theme }) => ({
    "& .MuiSelect-select": {
      paddingTop: "8px",
      paddingBottom: "8px",
    },
  }));

  const StyledTextField = styled("div")(({ theme }) => ({
    "& .MuiInputBase-input": {
      padding: "8px 12px 8px 0",
    },
    "& .MuiInputAdornment-root": {
      marginTop: "0 !important"
    },
    "& .MuiInputBase-input::placeholder": {
      color: "grey",
    },
  }));

  return (
    <>
      <Head>
        <title>Customers | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <div style={{ marginLeft: "auto" }}>
              <span>Sort by</span>
              <StyledSelect value="today" sx={{ marginLeft: "8px",width: 100, backgroundColor: "white" }}>
                <MenuItem value="today">Today</MenuItem>
              </StyledSelect>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "30px",
              }}
            >
              <div
                style={{
                  borderRadius: "12px",
                  padding: "28px",
                  borderBottom: "#3E97FF 3px solid",
                  background: "white",
                }}
              >
                <div style={{ display: "flex" }}>
                  <span style={{ fontSize: "34px", fontWeight: "600", lineHeight: "34px" }}>
                    252
                  </span>
                  <span
                    style={{
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      borderRadius: "4px",
                      background: "#EEF6FF",
                      marginLeft: "auto",
                    }}
                  >
                    <img src="/link.png" />
                  </span>
                </div>
                <div
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "16px",
                    height: "16px",
                    marginTop: "12px",
                  }}
                >
                  Links Scraped
                </div>
              </div>
              <div
                style={{
                  borderRadius: "12px",
                  padding: "28px",
                  borderBottom: "#7239EA 3px solid",
                  background: "white",
                }}
              >
                <div style={{ display: "flex" }}>
                  <span style={{ fontSize: "34px", fontWeight: "600", lineHeight: "34px" }}>
                    252
                  </span>
                  <span
                    style={{
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      borderRadius: "4px",
                      background: "#F8F5FF",
                      marginLeft: "auto",
                    }}
                  >
                    <img src="/search.png" />
                  </span>
                </div>
                <div
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "16px",
                    height: "16px",
                    marginTop: "12px",
                  }}
                >
                  Links Manually Checked
                </div>
              </div>
              <div
                style={{
                  borderRadius: "12px",
                  padding: "28px",
                  borderBottom: "#F6C000 3px solid",
                  background: "white",
                }}
              >
                <div style={{ display: "flex" }}>
                  <span style={{ fontSize: "34px", fontWeight: "600", lineHeight: "34px" }}>
                    252
                  </span>
                  <span
                    style={{
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      borderRadius: "4px",
                      background: "#FFF9E6",
                      marginLeft: "auto",
                    }}
                  >
                    <img src="/info.png" />
                  </span>
                </div>
                <div
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "16px",
                    height: "16px",
                    marginTop: "12px",
                  }}
                >
                  Link Violations
                </div>
              </div>
              <div
                style={{
                  borderRadius: "12px",
                  padding: "28px",
                  borderBottom: "#F1416C 3px solid",
                  background: "white",
                }}
              >
                <div style={{ display: "flex" }}>
                  <span style={{ fontSize: "34px", fontWeight: "600", lineHeight: "34px" }}>
                    252
                  </span>
                  <span
                    style={{
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      borderRadius: "4px",
                      background: "#FEECF1",
                      marginLeft: "auto",
                    }}
                  >
                    <img src="/trush.png" />
                  </span>
                </div>
                <div
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "16px",
                    height: "16px",
                    marginTop: "12px",
                  }}
                >
                  Links Removed
                </div>
              </div>
            </div>
            <div style={{ borderRadius: 10, padding: 30, backgroundColor: "white" }}>
              <div style={{display: "flex", justifyContent:"space-between", paddingBottom: 10}}>
                  <div style={{ padding: 0, backgroundColor:"#F9F9F9" }}>
                    {/* <StyledTextField> */}
                    <style
                      dangerouslySetInnerHTML={{
                        __html: `
                          .my-input .MuiInputBase-input {
                            padding: 8px 12px 8px 0;
                          }
                          .my-input .MuiInputAdornment-root {
                            margin-top: 0 !important;
                          }
                          .my-input .MuiInputBase-input::placeholder {
                            color: grey;
                          }
                        `,
                      }}
                    />
                      <TextField
                        // error={!!(formik.touched.firstName && formik.errors.firsName)}
                        style={{ width: 180, }}
                        // helperText={formik.touched.firstName && formik.errors.firstName}
                        id="standard-basic"

                        // label="Search"
                        placeholder="Search"

                        name="search"
                        className="my-input"
                        // InputLabelProps={{
                        //   style: { display: 'none'},
                        // }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                        // onBlur={formik.handleBlur}
                        onChange={handleChange}
                        type="text"
                        // variant="standard"
                        value={searchText}
                      />
                    {/* </StyledTextField> */}
                     {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Search" variant="standard" />
      </Box> */}
                  </div>

                <div style={{display: "flex", gap: 10}}>
                  <div  style={{
                        margin: "auto" ,
                        backgroundColor:"#EEF6FF",
                        borderRadius: 10,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 5,
                        paddingRight: 5,
                        display: "flex",
                        width: 100,
                        cursor: "pointer"
                      }}
                      >
                      <div><img src={"/assets/arrows.svg"}/></div>
                      <div style={{
                        color: "#3E97FF",
                        fontSize: "14px",
                        fontWeight: "500",
                        marginLeft: "8px"
                      }}>Export</div>
                
                  </div>
                  <div style={{ margin: "auto" }}>
                    <StyledSelect value="today" sx={{ marginLeft: "8px",  width: 100, backgroundColor: "#F9F9F9"  }}>
                      <MenuItem value="today">Today</MenuItem>
                    </StyledSelect>
                  </div>
                  <div style={{ margin: "auto" }}>
                    <StyledSelect value="today" sx={{ marginLeft: "8px",  width: 100, backgroundColor: "#F9F9F9" }}>
                      <MenuItem value="today">Status</MenuItem>
                    </StyledSelect>
                  </div>
                </div>
              </div>
              <CustomersTable
                searchText={searchText}
                count={data.length}
                items={customers}
                onDeselectAll={customersSelection.handleDeselectAll}
                onDeselectOne={customersSelection.handleDeselectOne}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                onSelectAll={customersSelection.handleSelectAll}
                onSelectOne={customersSelection.handleSelectOne}
                page={page}
                rowsPerPage={rowsPerPage}
                selected={customersSelection.selected}
                
              />
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
