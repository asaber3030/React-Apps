
const TheirMessage = ({ lastMessage, message }) => {

  const isFirstMsgByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;


  return (
    <div className="message-row">
      {
        isFirstMsgByUser &&
        (
          <div
            className='message-avatar'
            style={ { backgroundImage: `url(${message?.sender?.avatar})` } }
          />
        )
      }
      {
       message?.attachments?.length > 0 ?
       (
          <img
            src={ message.attachments[0].file }
            alt="message-attachment"
            className="message-image"
            style={ { marginLeft: isFirstMsgByUser ? '4px' : '48px' } }
          />
       ) : (
         <div className='message' style={ { float: 'left', color: '#fff', backgroundColor: '#1c5d95', marginLeft: isFirstMsgByUser ? '4px' : '48px' } }>
           { message.text.replace(/(<([^>]+)>)/ig, '') }
         </div>
       )

      }
    </div>
  );
};

export default TheirMessage;