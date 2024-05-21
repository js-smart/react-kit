/**
 * Checks if the given URL is encoded or not
 *
 * @param url The URL to check
 *
 * @returns True if the URL is encoded, false otherwise
 *
 * @author Pavan Kumar Jadda
 * @since 1.3.14
 */
export const isEncoded = (url: string) => {
	try {
		const decodedUrl = decodeURIComponent(url);
		return decodedUrl !== url;
	} catch (error) {
		// Return false if decoding fails, indicating the URL is not properly encoded
		return false;
	}
};
