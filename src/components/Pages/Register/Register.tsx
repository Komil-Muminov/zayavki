import "./Register.css";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ButtonKM } from "../../UI/Button/ButtonKM";
import { Search } from "../Search/Search";
import { RowData } from "../../API/Data/Data";
import { ColData } from "../../API/Data/Data";
// import { SelectChangeEvent } from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

export const Register: React.FC = () => {
	// const [currDate, setCurrDate] = useState<string>(
	// 	new Date().getFullYear().toString(),
	// );

	// const handleChange = (event: SelectChangeEvent) => {
	// 	setAge(event.target.value);
	// };

	// const [show, setShow] = useState<boolean>(false);
	// const handleClick = (currentState) => {
	// 	setShow(currentState);
	// };
	return (
		<>
			<section className="sections register__section">
				<div className="container">
					<div className="register__content km__content">
						<p className="km__info-text">* РЕЕСТР</p>
						<p className="km__info-text">* Блок с фильтрами</p>
						<ButtonKM onClick={() => console.log(`Переход`)}>Добавить</ButtonKM>
						<Search />
						<Box sx={{ height: 400, width: "100%" }}>
							<DataGrid
								columns={ColData}
								rows={RowData}
								initialState={{
									pagination: {
										paginationModel: {
											pageSize: 5,
										},
									},
								}}
								pageSizeOptions={[5]}
								checkboxSelection
								disableRowSelectionOnClick
							/>
						</Box>

						{/* <ul className="register_header-list">
							<FormControl sx={{ minWidth: 50 }}>
								<FormHelperText>КМ</FormHelperText>
								<Select
									value={age}
									onChange={handleChange}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
							<FormControl>
								<FormHelperText>КМ</FormHelperText>
								<Select
									value={age}
									onChange={handleChange}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>

							<FormControl>
								<FormHelperText>КМ</FormHelperText>
								<Select
									value={age}
									onChange={handleChange}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>

							<FormControl>
								<FormHelperText>КМ</FormHelperText>
								<Select
									value={age}
									onChange={handleChange}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>

							<FormControl>
								<FormHelperText>КМ</FormHelperText>
								<Select
									value={age}
									onChange={handleChange}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</ul> */}

						{/* <div className="pagination__content">
							<Stack>
								<Pagination count={10} size="large" />
							</Stack>
						</div> */}
					</div>
				</div>
			</section>
		</>
	);
};
