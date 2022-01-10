import { comments } from "../../../data/comments";

export default function handler(req,res) {
    const {commentid} = req.query
    const comment = comments.find(comment => comment.id === parseInt(commentid))
    res.status(200).json(comment)
}