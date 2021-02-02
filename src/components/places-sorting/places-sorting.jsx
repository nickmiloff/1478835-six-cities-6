import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setType} from '../../store/reducers/main-reducer';
import {getType} from '../../store/selectors/main-selectors';

const SORTING_OPTIONS = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

const PlacesSorting = ({type, changeType}) => {
  const [isOptionsOpened, setOptionsOpened] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => {
          setOptionsOpened((prev) => !prev);
        }}>
        {type}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isOptionsOpened && ` places__options--opened` || ``}`}>
        {SORTING_OPTIONS.map(
            (option, index) =>
              <li
                className={`places__option${option === type && ` places__option--active"` || ``}`}
                tabIndex="0"
                key={index}
                onClick={() => {
                  changeType(option);
                  setOptionsOpened(false);
                }}>{option}</li>)}
      </ul>
    </form>
  );
};

PlacesSorting.propTypes = {
  type: PropTypes.string.isRequired,
  changeType: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  type: getType(state)
});

const mapDispatchToProps = {
  changeType: setType
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesSorting);
