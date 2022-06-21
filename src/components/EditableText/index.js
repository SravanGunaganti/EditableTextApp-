import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {EditText: '', isButtonClicked: false}

  onChangeSearchInput = event => {
    this.setState({EditText: event.target.value})
  }

  onButtonClick = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {EditText, isButtonClicked} = this.state
    const EditOrSaveButton = isButtonClicked ? 'Edit' : 'Save'

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="main-heading">Editable Text Input</h1>
          <div className="input-container">
            {isButtonClicked ? (
              <p className="paragraph-text">{EditText}</p>
            ) : (
              <input
                className="input-field"
                type="text"
                value={EditText}
                onChange={this.onChangeSearchInput}
              />
            )}
            <button
              type="button"
              className="button"
              onClick={this.onButtonClick}
            >
              {EditOrSaveButton}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default EditableText
