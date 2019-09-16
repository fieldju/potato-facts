import { StreamDeckManifest } from "./src/domain/StreamDeck";

const potatoFactsStreamDeckManifest: StreamDeckManifest = {
    Actions: [],
    SDKVersion: 2,
    Author: "Justin Field",
    CodePath: "index.html",
    Description: "Potato Facts: a plugin for dropping potato knowledge",
    Name: "Potato Facts",
    NameSpace: "com.fieldju.potatoFacts",
    Icon: "potato.png",
    URL: "https://github.com/fieldju/potato-facts",
    Version: "1.0.0-SNAPSHOT",
    OS: [
        {
            "Platform": "mac", 
            "MinimumVersion" : "10.11"
        },
        {
            "Platform": "windows", 
            "MinimumVersion" : "10"
        }
    ],
    Software: {
        "MinimumVersion" : "4.1"
    }
}

export default potatoFactsStreamDeckManifest