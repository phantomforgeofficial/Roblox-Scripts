export default function handler(req, res) {
    const GOOD_PLACES = ["YOUR_PLACE_ID_HIER"];
    const GOOD_UNIVERSE = ["YOUR_UNIVERSE_ID_HIER"];
    const GOOD_TOKEN = "JOUW_GEHEIME_TOKEN"; 

    if (!GOOD_PLACES.includes(req.query.placeId)) {
        return res.status(403).json({ ok: false, reason: "bad place" });
    }

    if (!GOOD_UNIVERSE.includes(req.query.universeId)) {
        return res.status(403).json({ ok: false, reason: "bad universe" });
    }

    if (req.query.token !== GOOD_TOKEN) {
        return res.status(403).json({ ok: false, reason: "bad token" });
    }

    return res.status(200).json({ ok: true });
}
