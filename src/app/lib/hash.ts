const crypto = require("crypto")

// パスワードのハッシュ化
export default function hash(password: string){
    const hash = crypto.createHash("sha256")
    hash.update(password)
    const hashHex = hash.digest("hex")
    return hashHex
}