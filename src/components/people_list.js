import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

class PeopleList extends React.Component {
  renderList () {
    {/* this.props.news get from reducers index.js where news get from reducer_news.jsx (data)   */}

    return this.props.peoples.map((people, index) => {
      return (
        <li key={index} style={{color: "black", marginTop: '35px'}}>
          {people.name}
        </li>
      )
    })

  }

  render () {
    return (
      <ul className='list-group'>
        {this.renderList()}
      </ul>
    )
  }

}

const mapStateToProps = (state) => {
  // Whatever is returned will show up as props inside of BookList
  return {
    peoples: state.peoples
  }
}

export default connect(mapStateToProps)(PeopleList)
