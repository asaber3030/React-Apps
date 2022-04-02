
const MyMessage = ({ message }) => {

  console.log(message);

  if (message?.attachments?.length > 0) {
    return (
      <img
        src={ message.attachments[0].file }
        alt="message-attachment"
        className="message-image"
        style={ { float: 'right' } }
      />
    );
  }
  const msg = message.text;
  return (
    <div className='message' style={ { float: 'right', marginRight: '18px', color: '#fff', backgroundColor: '#3e444a' } }>
      { msg.replace(/(<([^>]+)>)/ig, '') }
    </div>
  );
};

export default MyMessage;