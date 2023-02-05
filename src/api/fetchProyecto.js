export const proyectos = async () => {

    const response = await fetch('https://rest-apis-hpe1.onrender.com/api/proyectos')
        .then(response => response.json())
        .then(data => ({ data: data }))
        .catch(err => ({ error: err }));

    return response;
}