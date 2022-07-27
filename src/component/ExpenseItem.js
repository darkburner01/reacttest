import './ExpenseItem.css';


function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>Date</div>
      <div className='expense-item_description'>
        <h2>Title</h2>
      </div>
      <div className='expense-item_price'>Amount</div>
    </div>
  );
}
export default ExpenseItem;
