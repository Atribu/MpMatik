import Page from "../models/page.js"

export const yeniSayfa = async ( request, response, next ) => {
    try {
        const page = await Page.create ( request, body );
        return response.status(201).json(page)
    } catch (error) {
        next(error)
    }
}