import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search } from '../actions/index.js'

const FormNew = (props) => {
  return (
    // search yang ada di input memangil index.js yang ada di folder action
    <form>

      <input type="text" onChange={(event) => { props.search(event.target.value) }} value={props.titleNews}></input>
    </form>
    )

}


// state to props ( get data from state and passing it to here )
const mapStateToProps = (state) => {
  return {
    titleNews: state.search
  }
}

// ini untuk menyuruh, menjalakan
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({search}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(FormNew)
