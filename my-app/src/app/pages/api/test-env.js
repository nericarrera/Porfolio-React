export default function handler(req, res) {
  res.status(200).json({
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY 
      ? '***' + process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.slice(-3) 
      : 'No definida'
  });
}