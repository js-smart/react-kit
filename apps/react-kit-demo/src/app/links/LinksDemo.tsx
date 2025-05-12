import { Divider } from "@mui/material";
import { NextLink, OpenInNewIconLink } from "@react-kit/*";


export default function LinksDemo() {
  return (
		<div>
			<div style={{ marginInline: '1rem', textAlign: 'center' }}>
				<h2>Links Demo</h2>
				<Divider sx={{ mb: 3 }} />
				MUI Link:
				<NextLink href={"/buttons-demo"}> Buttons Demo</NextLink>
				<br />
				Open In New Icon Link :
				<OpenInNewIconLink href={`https://www.google.com/`} target="_blank" linkText={'Open In New Tab'} />
				<br />
			</div>
		</div>
	);
}
