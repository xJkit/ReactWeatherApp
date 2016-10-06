import React from 'react'

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

  // componentDidMount: function () {
  //   var modal = new Foundation.Reveal( $('#error-modal') )
  //   modal.open()
  // },
  render: function(){
    let {title, message} = this.props
    return (<div className="reveal" id="error-modal" data-reveal="">
      <h4>{title}</h4>
      <p>{message}</p>
      <p>
        <button className="button hollow" data-close="">
          OK
        </button>
      </p>
    </div>
    )
  }
})



export default ErrorModal
