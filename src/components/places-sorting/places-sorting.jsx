import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getType} from '../../store/main/selectors';
import {setType} from '../../store/main/actions';

const OPTIONS = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

const PlacesSorting = ({activeOption, onChangeOption}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => {
          setIsOpen((current) => !current);
        }}>
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isOpen && ` places__options--opened` || ``}`}>
        {OPTIONS.map((option, index) =>
          <li
            className={`places__option${option === activeOption && ` places__option--active"` || ``}`}
            tabIndex="0"
            key={`places-option-${index}`}
            onClick={() => {
              onChangeOption(option);
              setIsOpen(false);
            }}>
            {option}
          </li>
        )}
      </ul>
    </form>
  );
};

PlacesSorting.propTypes = {
  activeOption: PropTypes.string.isRequired,
  onChangeOption: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeOption: getType(state)
});

const mapDispatchToProps = {
  onChangeOption: setType
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesSorting);
