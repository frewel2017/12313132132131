import { Telegraf, Markup } from "telegraf";

const token = "6922084964:AAFEBLdswdcyV7QCWUXQpePHeQgXnl-arz4";
const webAppurl = "https://vk.com";

const bot = new Telegraf(token);

bot.command("start", (stx) => {
  stx.reply(
    "Добро пожаловать! Нажмите на кнопку ниже что-бы запустить приложение",
    Markup.keyboard([Markup.button.webApp("Открыть приложение", webAppurl)])
  );
});

bot.launch();
