import React from 'react';

const Sort = ({ items }) => {
  let pop = ['rating', 'statistics'];
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const sortRef = React.useRef();
  const [activeItem, setActiveItem] = React.useState(0);
  const activeLabel = pop[activeItem];
  const handleOutsideClick = (e) => {
    let path = (e.composedPath && e.composedPath()) || e.path; //Цей код для того щоб працював path
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  const onSelectItem = (index) => {
    sortFunc();
    setActiveItem(index);
    setVisiblePopup(false);
  };
  let sortFunc = () =>{
  if (activeItem == 0) {
    items.sort(function (a, b) {
      if (a.rang > b.rang) {
        return -1;
      }
      if (a.rang < b.rang) {
        return 1;
      }
      return 0;
    });
  }
  if(activeItem == 1) {
    items.sort(function (a, b) {
      let sum = a.kills / a.rang;
      let sum1 = b.kills / b.rang;
      if (sum > sum1) {
        return -1;
      }
      if (sum < sum1) {
        return 1;
      }
      return 0;
    });
  }
  console.log(activeItem);
  }

  return (
    <div className="sort" ref={sortRef}>
      <span>sort by: </span>
      <span onClick={toggleVisiblePopup} className="active-item">
        {activeLabel}
      </span>
      {visiblePopup && (
        <div className="pop-up">
          <ul>
            {pop &&
              pop.map((name, index) => (
                <li
                  onClick={() => {onSelectItem(index);
                  sortFunc();}}
                  className={activeItem === index ? 'active' : ''}
                  key={`${name}_${index}`}>
                  {name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
