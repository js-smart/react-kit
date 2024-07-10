import { Book } from '../types/Book';
import { fetchClient } from '@react-kit/*';
import { BASE_API_URL, BOOK_API_URL } from '../constants/ApiConstants';

/**
 * Utility class for Books operations
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
export class BookService {
	/**
	 * Get All Books
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.0.0
	 */
	static async getAllBooks(): Promise<Book[]> {
		return await fetchClient<Book[]>(`${BASE_API_URL + BOOK_API_URL}/books`);
	}
}
