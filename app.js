const axios = require("axios").default;
const CronJob = require("cron").CronJob;
const USERKEY = "847eb061a30e";
const PASSKEY = "843e709a18a34f9253f1480f";
async function send() {
  try {
    const { data: wa } = await axios({
      url: "https://console.zenziva.net/wareguler/api/sendWA/",
      method: "post",
      data: {
        userkey: USERKEY,
        passkey: PASSKEY,
        to: "081239896337", // aing
        //   to: "083126448604", // korban
        message:
          "Halo kaka, kamu memiliki tagihan sebesar IDR 1.300.000 yaa, segera lunasi tagihan anda! Terima kasih!! jangan kebanyakan nipu kak, nggak barokah lhoo nanti duitnya, coba balikin aja duitnya",
      },
    });
    const { data: sms } = await axios({
      url: "https://console.zenziva.net/reguler/api/sendsms/",
      method: "post",
      data: {
        userkey: USERKEY,
        passkey: PASSKEY,
        to: "081239896337", // aing
        //   to: "083126448604", // korban
        message:
          "Halo kaka, kamu memiliki tagihan sebesar IDR 1.300.000 yaa, segera lunasi tagihan anda! Terima kasih!! jangan kebanyakan nipu kak, nggak barokah lhoo nanti duitnya, coba balikin aja duitnya",
      },
    });
    console.log({ wa, sms }, "\n Sukses kirim pesan");
  } catch (error) {
    console.log(error, "<<<<");
  }
}

const job = new CronJob("0 */4 * * * *", send, null, false);

job.start();

// send();
