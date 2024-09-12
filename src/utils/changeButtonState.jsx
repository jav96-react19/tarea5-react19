const changeButtonState = (setButtonClick) => 
{
    setButtonClick(oldValue => ({
        IsClick: !oldValue.IsClick,
        Times: oldValue.Times + 1   
    }));
}
export default changeButtonState;