export default function handler(req, res) {
    const payload = {
        version: 1,
        logic: [
            { type: "print", msg: "Extern script gestart!" },
            { type: "kick-if-guest" : true },
            { type: "say", msg: "Welkom!" }
        ]
    };

    return res.status(200).json(payload);
}
