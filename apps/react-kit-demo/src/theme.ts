import { createTheme } from '@mui/material/styles';
import { getCssVariable } from './utils/CssUtils';

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
		xxl: true;
		xxxl: true;
	}
}

// A custom theme for this app
const theme = createTheme({
	cssVariables: { cssVarPrefix: '' },
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
			xxl: 1920,
			xxxl: 2200,
		},
	},
	palette: {
		primary: {
			main: getCssVariable('--primary-color'),
		},
		secondary: {
			main: getCssVariable('--secondary-color'),
		},
		success: {
			main: getCssVariable('--isSuccess-color'),
		},
		error: {
			main: getCssVariable('--isError-color'),
		},
	},
	components: {
		// @ts-ignore
		MuiDataGrid: {
			styleOverrides: {
				root: {
					'--DataGrid-containerBackground': '#FFFFFF',
				},
			},
		},
	},
});

export default theme;
