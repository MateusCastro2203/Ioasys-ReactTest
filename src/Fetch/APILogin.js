 export  const  APILogin = async(email,password)  => {
    
    try{
        console.log(`{\n  \"email\" : \"${email}\" ,\n  \"password\" : \"${password}\"\n}`)
         const login = await fetch('https://empresas.ioasys.com.br/api/v1/users/auth/sign_in', {
            method: "POST",
            header: [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
            body: String.raw`{\n  \"email\" : \"${email}\",\n  \"password\" : \"${password}\"\n}`,
        })
       
    }catch(e){
        console.log(e)
    }
}

export default APILogin
