import { useNavigate } from "react-router-dom";

const MyBooks = () => {
  const navigate = useNavigate();
  const borrowedBooks = [
    { title: "DBMS", dueDate: "20/02", fine: "₹0" },
    { title: "OS", dueDate: "15/02", fine: "₹50" }
  ];

  return (
    <div className="my-books-container">
      <button onClick={() => navigate(-1)} className="back-button">←</button>
      <div className="my-books-header">
        <h1>My Books</h1>
      </div>

      <div className="fine-summary">
        <h3>Total Fine</h3>
        <p>₹50</p>
      </div>

      <div className="books-borrowed-list">
        {borrowedBooks.map((book, idx) => (
          <div key={idx} className="book-card">
            <h3>{book.title}</h3>
            <p className="due-date">Due: {book.dueDate}</p>
            <p className="fine">Fine: {book.fine}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooks;