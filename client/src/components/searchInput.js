import React from 'react';

const searchInputStyle = {
    textAlign: 'center',
    width: '25%'
}

const formControlStyle = {
    paddingLeft: '2.375rem'
}

const formControlFeedbackStyle = {
    position: 'absolute',
    zIndex: '2',
    display: 'block',
    width: '2.375rem',
    height: '2.375rem',
    lineHeight: '2.375rem',
    textAlign: 'center',
    pointerEvents: 'none',
    color: '#aaa'
}

const SearchInput = () => {

    return (
        <div className="form-group" style={searchInputStyle}>
            <span className="fa fa-search form-control-feedback" style={formControlFeedbackStyle}></span>
            <input type="text" className="form-control" placeholder="Buscar" style={formControlStyle} />
        </div>
    );
};

export default SearchInput;