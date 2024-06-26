import "./Search.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export const Search: React.FC = () => {
	return (
		<>
			<section className="sections search__section">
				<div className="container">
					dsasda
					<h2 className="sections__title search_title">dsadas</h2>
					<div className="km__content search_content">
						<Box
							component="form"
							sx={{
								"& .MuiTextField-root": { m: 1, width: "25ch" },
							}}
							noValidate={false}
							autoComplete="off"
						>
							<TextField
								id="standard-search"
								label="Поиск..."
								type="search"
								variant="standard"
							/>
						</Box>
					</div>
				</div>
			</section>
		</>
	);
};
