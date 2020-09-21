import React from 'react';

const Sort = () => {
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
    setActiveItem(index);
    setVisiblePopup(false);
  };
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
                  onClick={() => onSelectItem(index)}
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
