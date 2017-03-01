import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

class NewList extends React.Component {
  renderList () {


    return this.props.news.map((itemNews, index) => {
      return (
        <li key={index} style={{color: "black", marginTop: '35px'}}>
          {itemNews.title}
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
    /* this.props.news get from reducers index.js where news get from reducer_news.jsx (data)   */
    news: state.news.filter((itemNews)=>{
      return itemNews.title.toLowerCase().match(state.search.toLowerCase())
    })
  }
}

export default connect(mapStateToProps)(NewList)
