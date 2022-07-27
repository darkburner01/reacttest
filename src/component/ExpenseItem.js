import './ExpenseItem.css';


function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 25th 2022</div>
      <div className="expense-item__description">
        <h2>Insurance</h2>
      </div>
      <div className="expense-item__price">888.88</div>
    </div>
  );
}
export default ExpenseItem;
