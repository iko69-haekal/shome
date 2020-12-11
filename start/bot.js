const { Telegraf } = require("telegraf");
const bot = new Telegraf("1426608804:AAG2xn-uWTOpPPeZgKPfcKyMftKgOCdFqZQ");
const Kendali = use("App/Models/Kendali");
bot.start((ctx) => ctx.reply("hai"));
bot.hears("nyalain lampu 1", async (ctx) => {
  const kendali = await Kendali.find(1);
  kendali.CH_1 = 1;
  await kendali.save();
  ctx.reply("berhasil menyalakan lampu");
});
bot.hears("Nyalain lampu 1", async (ctx) => {
  const kendali = await Kendali.find(1);
  kendali.CH_1 = 1;
  kendali.save();
  ctx.reply("berhasil menyalakan lampu");
});
bot.hears("matiin lampu 1", async (ctx) => {
  const kendali = await Kendali.find(1);
  kendali.CH_1 = 0;
  await kendali.save();
  ctx.reply("berhasil menyalakan lampu");
});
bot.hears("Matiin lampu 1", async (ctx) => {
  const kendali = await Kendali.find(1);
  kendali.CH_1 = 0;
  kendali.save();
  ctx.reply("berhasil menyalakan lampu");
});
bot.launch();
