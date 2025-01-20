import asyncio
from telegram import Bot

# Replace with your bot's API token from BotFather
BOT_TOKEN = "7829986734:AAEvSgwp3zsMY6sOKffPH3WSfw6JdWwo45w"

# Replace with your Vercel app's URL
APP_URL = "https://sm-uramadan.vercel.app"

# Initialize the bot
bot = Bot(token=BOT_TOKEN)

# Configure the bot's menu button for the mini app
async def setup_bot():
    try:
        await bot.set_chat_menu_button(
            menu_button={
                "type": "web_app",
                "text": "Open Ramadan Tracker",
                "web_app": {"url": APP_URL}
            }
        )
        print("Mini app successfully linked to the bot!")
    except Exception as e:
        print(f"Error: {e}")

# Run the setup asynchronously
if __name__ == "__main__":
    asyncio.run(setup_bot())
