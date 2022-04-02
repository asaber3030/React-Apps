// React Hook
import { useState } from "react";

// React-chat-engine Dependencies
import { sendMessage, isTyping } from "react-chat-engine";

// Icons
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

// Sending message component
const MessageForm = (props) => {

  const [value, setValue] = useState(''); // Input Value
  const { chatID, creds } = props; // Current Chat information


  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (text.length > 0) sendMessage(creds, chatID, { text });
    setValue('');
  }
  const handleChange = (e) => {
    setValue(e.target.value);
    isTyping(props, chatID);
  }
  const handleUpload = (e) => {
    sendMessage(creds, chatID, { files: e.target.files, text: '' })
  }

  return (
    <form className='message-form' onSubmit={ handleSubmit }>

      { /* Input Of Message Text */ }
      <input
        className="message-input"
        placeholder="Message..."
        value={value}
        onChange={ handleChange }
        onSubmit={ handleSubmit }
      />

      { /* Label for the upload button */ }
      <label htmlFor="upload-button" className='upload-button-label'>
        <span className='image-button'><PictureOutlined className='picture-icon' /></span>
      </label>

      { /* Upload field */ }
      <input
        type="file"
        multiple={ false }
        id="upload-button"
        style={ { display: 'none' } }
        onChange={ handleUpload }
      />

      <button type='submit' className='send-button'>
        <SendOutlined className='send-icon' />
      </button>
    </form>
  );
};

export default MessageForm;