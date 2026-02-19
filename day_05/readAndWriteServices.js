import fs from "fs/promises";
const readJasonFile = async (Path) => {
    try {
        const data = await fs.readFile(Path, "utf-8");
        const jsonData = JSON.parse(data);
        console.log(jsonData);
    } catch (error) {
        console.log("unable to read json file");
    }
};

readJasonFile("students.json");