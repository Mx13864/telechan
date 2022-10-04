import md5 from 'md5';
const VERCEL_URL = process.env.VERCEL_URL;
const TCKEY = process.env.TCKEY;
var sum=0;
const replyToMessage = (ctx: any, messageId: string, string: string) =>
  ctx.reply(string, {
    reply_to_message_id: messageId,
  });

const sendkey = () => (ctx: any) => {

  const messageId = ctx.message.message_id;
  const userName = ctx.from.last_name ? `${ctx.from.first_name} ${ctx.from.last_name}` : ctx.from.first_name;
  const sendkey = ctx.from.id +'T'+md5(TCKEY+ctx.from.id);

  const site_url = String(VERCEL_URL).split("-")[0]+'.vercel.app';
  sum++;
  if(sum==0){
  replyToMessage(ctx, messageId, `${userName} , Your sendkey is 🔑 ${sendkey} \n 
  🚀 Use follow url to send message : \n 
  ${site_url}/api/send?sendkey=<sendkey>&text=<text>`);
  // replyToMessage(ctx, messageId, `Hello, ${userName} (user_id: ${ctx.from.id})! \n Your Message id is: ${messageId}`);
  }else if(sum!=0){
    replyToMessage(ctx, messageId, `${userName} , Your sendkey is 🔑 ${sendkey} \n 
  🚀 Use follow url to send message : \n 
  ${site_url}/api/send?sendkey=<sendkey>&text=<text>`);
  }
};

export { sendkey };
