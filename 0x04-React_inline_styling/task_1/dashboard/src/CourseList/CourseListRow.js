import React from 'react'
import PropTypes from 'prop-types'

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
  const bgRow = { backgroundColor: '#f5f5f5ab' }
  const bgHeaderRow = { backgroundColor: '#deb5b545'}

  const selectedBg = isHeader ? bgHeaderRow : bgRow;
  return (
    <tr style={selectedBg}>
        {isHeader ?
            textSecondCell === null ?
            <th colSpan={2}>{textFirstCell}</th>
            : 
            <>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
            </>
         : 
         <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
         </>
         }
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default CourseListRow