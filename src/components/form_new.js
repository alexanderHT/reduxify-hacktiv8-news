import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { search } from '../actions/index.js'

const FormNew = (props) => {
  return (
    // onSubmit={props.handleForm}
    <form>
      <input type="text" onChange={(event) => { props.search(event.target.value) }} value={props.titleNews}></input>
    </form>
    )

}

const mapStateToProps = (state) => {
  return {
    titleNews: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({search}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(FormNew)
