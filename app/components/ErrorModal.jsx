import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

var ErrorModal = React.createClass({
  getDefaultProps: function(){
      return {
        title: "錯誤"
      }
  },

  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  render: function(){
    return( <div></div>)
  },

  componentDidMount: function () {
    let {title, message} = this.props
    var modalMarkup = (
      <div className="reveal" id="error-modal" data-reveal="">
      <h4>{title}</h4>
      <p>{message}</p>
      <p>
        <button className="button hollow" data-close="">
          OK
        </button>
      </p>
    </div>
    )

    $(ReactDOM.findDOMNode(this)).html(ReactDOMServer.renderToString(modalMarkup))

    var modal = new Foundation.Reveal( $('#error-modal') )
    modal.open()

  }
})



export default ErrorModal
