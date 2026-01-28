import { useNavigate } from "react-router-dom";

const BookSearch = () => {
  const navigate = useNavigate();
  return (
    <div className="book-search-container">
      <button onClick={() => navigate(-1)} className="back-button">←</button>
      <div className="search-header">
        <h1>Search Books</h1>
      </div>

      <div className="search-input-wrapper">
        <input placeholder="Search (Regex supported)" type="text" />
      </div>

      <div className="books-list">
        <div className="book-item">
          <div className="book-info">
            <h3>Data Structures</h3>
            <p>Available: 2 copies</p>
          </div>
          <button>Request</button>
        </div>
      </div>
    </div>
  );
};

export default BookSearch;