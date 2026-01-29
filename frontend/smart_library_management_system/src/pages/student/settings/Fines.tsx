const Fines = () => {
  const fineDetails = [
    { book: "DBMS", fine: "₹0" },
    { book: "OS", fine: "₹50" }
  ];

  return (
    <div className="fines-settings-content">
      <div className="fines-header">
        <h1>Fines</h1>
      </div>

      <div>
        {fineDetails.map((item, idx) => (
          <div key={idx} className="fine-detail">
            <h3>{item.book}</h3>
            <p>Fine Amount: {item.fine}</p>
          </div>
        ))}
      </div>

      <div className="total-fine-box">
        <h2>Total Outstanding Fine</h2>
        <div className="amount">₹50</div>
      </div>
    </div>
  );
};

export default Fines;