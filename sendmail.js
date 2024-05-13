function sendMails(e) {
    const name = e.values[1]
    const phone = e.values[2]
    const content = e.values[3]
      // Use phone number as recipient instead of hardcoded emails
    const recipient = phone;
  
    MailApp.sendEmail({
      to: recipient,
   // MailApp.sendEmail({
   //to: "caovanvinh2003@gmail.com, 21161386@student.hcmute.edu.vn",
    //subject: `${name} Vua dang ki tu van`,
    subject: `${name} Xác nhận đăng ký khoá học thành công!`,
    htmlBody:`
    <div>
    <p> Xin chào: ${name}</p>
    <p> Email: ${phone}</p>
    <p>SDT: ${content}</p>
    <p>Nội dung!<br>
    `
  })
  }