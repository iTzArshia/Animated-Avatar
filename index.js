const { readFileSync } = require("node:fs");

const token = 'Bot Token Here';                     // Put your Bot's Token
const newAvatar = readFileSync('./Rick-Roll.gif');  // Path to your new avatar file in this case Rick-Roll is our example

(async () => {

    try {
        const response = await fetch("https://discord.com/api/v10/users/@me", {
            method: "PATCH",
            headers: {
                Authorization: `Bot ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                avatar: `data:image/gif;base64,${newAvatar.toString("base64")}`
            })
        });

        if (response.ok) console.log("Avatar Updated Successfully!");
        else {

            console.error("Failed to Update Avatar:", response.statusText);
            const responseBody = await response.text();
            console.error("Response body:", responseBody);

        };

    } catch (error) {

        console.error("There is an Error here:", error);
    
    };

})();