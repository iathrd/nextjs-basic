export default function handler(req,res){
    const params = req.query.params
    req.status(200).json(params)
}